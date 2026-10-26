// Shared ERPNext helpers for the catalogue sync and the photo proxy. The leading underscore keeps Vercel from exposing this file.
// Env vars (Vercel): ERP_URL, ERP_API_KEY, ERP_API_SECRET (the same read-only ERPNext user /api/stock already uses).
//   Optional: CATALOG_SECRET (signs photo links; defaults to ERP_API_SECRET, which never leaves the server)
const crypto = require('crypto');

const base = () => String(process.env.ERP_URL || '').replace(/\/+$/, '');
const configured = () => !!(process.env.ERP_URL && process.env.ERP_API_KEY && process.env.ERP_API_SECRET);
const authHeaders = () => ({ Authorization: `token ${process.env.ERP_API_KEY}:${process.env.ERP_API_SECRET}`, Accept: 'application/json' });

// A list from ERPNext (frappe.client.get_list), paged so a site-side row cap cannot cut it short.
async function erpList(doctype, { fields, filters, order_by = 'name asc', limit }, deadline) {
  const PAGE = limit || 1000, out = [];
  for (let start = 0; ; start += PAGE) {
    const left = deadline - Date.now();
    if (left < 1500) throw new Error('ERP took too long');
    const r = await fetch(base() + '/api/method/frappe.client.get_list', {
      method: 'POST',
      headers: { ...authHeaders(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ doctype, fields, filters: filters || [], order_by, limit_start: start, limit_page_length: PAGE }),
      signal: AbortSignal.timeout(Math.min(20000, left))
    });
    if (!r.ok) throw new Error(`ERP ${doctype} answered ${r.status}`);
    const rows = (await r.json()).message || [];
    out.push(...rows);
    if (limit || rows.length < PAGE) break;
  }
  return out;
}

// ---- photo links: only paths the catalogue itself produced can be fetched through /api/item-image ----
const key = () => process.env.CATALOG_SECRET || process.env.ERP_API_SECRET || '';
const sign = p => crypto.createHmac('sha256', key()).update(p).digest('base64url').slice(0, 32);
function sigOk(p, s) {
  const a = Buffer.from(sign(p)), b = Buffer.from(String(s || ''));
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
const SAFE_PATH = /^\/(private\/)?files\/[^?#\\]{1,200}\.(jpe?g|png|webp|gif)$/i;
const safePath = p => SAFE_PATH.test(p) && !p.includes('..');

// ERPNext keeps a photo as "/files/x.jpg", "/private/files/x.jpg" or a full https address. Returns a link the menu can load, or ''.
function photoUrl(raw) {
  let p = String(raw || '').trim();
  if (!p) return '';
  if (/^https:\/\//i.test(p)) return p.length <= 400 ? p : '';
  if (/^https?:\/\//i.test(p)) return ''; // plain http is not loaded on an https page
  if (!p.startsWith('/')) p = '/' + p;
  try { p = decodeURI(p); } catch (e) { /* keep as is */ }
  return safePath(p) ? `/api/item-image?f=${encodeURIComponent(p)}&s=${sign(p)}` : '';
}

module.exports = { base, configured, authHeaders, erpList, sign, sigOk, safePath, photoUrl };
