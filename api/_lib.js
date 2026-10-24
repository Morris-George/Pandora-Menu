// Shared helpers for the order + staff Inbox API. The leading underscore keeps Vercel from exposing this file as an endpoint.
//
// Env vars (Vercel):
//   KV_REST_API_URL + KV_REST_API_TOKEN   (or UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN) - Upstash Redis, added from the Vercel Marketplace
//   STAFF_PINS    JSON object, store name -> PIN, e.g. {"City Stars":"482913",...}. Every PIN must be different: the PIN decides which store a tablet sees.
//   STAFF_SECRET  long random string used to sign staff session tokens
const crypto = require('crypto');

const STORES = ['CFC', 'Point 90', 'City Centre Almaza', 'City Stars', 'Mall Of Egypt', 'Mall Of Arabia', 'CC Alexandria'];
const RETAIN_SECONDS = 30 * 24 * 3600; // submitted lists are kept 30 days, then Redis deletes them
const SESSION_MS = 12 * 3600 * 1000;

// Cairo calendar date (UTC+2, as in stock.js). Order numbers restart at 001 at 12:00 AM Cairo time.
const cairoDate = () => new Date(Date.now() + 2 * 3600 * 1000).toISOString().slice(0, 10);

function redisConf() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url: url.replace(/\/+$/, ''), token } : null;
}

// One Redis command, e.g. redis(['INCR','key']) -> result. Throws if storage is missing or errors.
async function redis(cmd) {
  const c = redisConf();
  if (!c) { const e = new Error('storage is not configured'); e.status = 503; throw e; }
  const r = await fetch(c.url, {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + c.token, 'Content-Type': 'application/json' },
    body: JSON.stringify(cmd),
    signal: AbortSignal.timeout(8000)
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || j.error) throw new Error('storage error: ' + String(j.error || r.status).slice(0, 120));
  return j.result;
}

function send(res, code, body) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  return res.status(code).json(body);
}

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') { try { return JSON.parse(req.body); } catch (e) { return {}; } }
  const chunks = []; let n = 0;
  for await (const c of req) { n += c.length; if (n > 64 * 1024) return {}; chunks.push(c); }
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}'); } catch (e) { return {}; }
}

const ip = req => String((req.headers['x-forwarded-for'] || '').split(',')[0] || req.socket && req.socket.remoteAddress || 'x').trim();

// ---- staff PINs and signed session tokens ----
function pinStore(pin) {
  let map; try { map = JSON.parse(process.env.STAFF_PINS || '{}'); } catch (e) { return null; }
  const a = Buffer.from(String(pin));
  let found = null;
  for (const [store, p] of Object.entries(map)) { // check every entry so timing does not reveal which PIN was close
    const b = Buffer.from(String(p));
    if (a.length === b.length && crypto.timingSafeEqual(a, b) && STORES.includes(store)) found = store;
  }
  return found;
}
const sign = s => crypto.createHmac('sha256', process.env.STAFF_SECRET || '').update(s).digest('base64url');
function makeToken(store) {
  const p = Buffer.from(JSON.stringify({ s: store, e: Date.now() + SESSION_MS })).toString('base64url');
  return p + '.' + sign(p);
}
// Returns the store a valid token belongs to, or null. The store always comes from the token, never from the request.
function tokenStore(req) {
  if (!process.env.STAFF_SECRET) return null;
  const m = /^Bearer (.+)$/.exec(req.headers.authorization || '');
  if (!m) return null;
  const [p, sig] = m[1].split('.');
  if (!p || !sig) return null;
  const want = Buffer.from(sign(p)), got = Buffer.from(sig);
  if (want.length !== got.length || !crypto.timingSafeEqual(want, got)) return null;
  try {
    const d = JSON.parse(Buffer.from(p, 'base64url').toString('utf8'));
    return d.e > Date.now() && STORES.includes(d.s) ? d.s : null;
  } catch (e) { return null; }
}

const pad3 = n => String(n).padStart(3, '0');

module.exports = { STORES, RETAIN_SECONDS, cairoDate, redis, redisConf, send, readBody, ip, pinStore, makeToken, tokenStore, pad3 };
