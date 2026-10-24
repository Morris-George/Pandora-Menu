// A customer sends their list to the store team.
//   POST /api/orders  {store, name, phone, items:[{id,n,s,sku,p,q}], cid}  ->  {ok, number:"014", store}
// The server assigns the number: a per-store counter that restarts at 001 at midnight (Cairo time).
// The record is kept 30 days. The store is checked against the known list, so lists can only land in a real store's Inbox.
const { STORES, RETAIN_SECONDS, cairoDate, redis, send, readBody, ip, pad3 } = require('./_lib');

const clean = (s, max) => String(s == null ? '' : s).replace(/[\u0000-\u001f\u007f<>]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);

// Egyptian mobile numbers: 01X XXXX XXXX, also accepted as +20 1X... or 0020 1X..., Arabic digits allowed. Stored as 01XXXXXXXXX.
function cleanPhone(v) {
  let d = String(v || '').replace(/[٠-٩]/g, c => c.charCodeAt(0) - 0x660).replace(/[۰-۹]/g, c => c.charCodeAt(0) - 0x6f0).replace(/[\s\-().]/g, '');
  d = d.replace(/^(\+|00)20/, '0').replace(/^20(?=1)/, '0');
  return /^01[0125]\d{8}$/.test(d) ? d : null;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return send(res, 405, { ok: false, error: 'POST only' });
  try {
    const b = await readBody(req);
    const store = String(b.store || '');
    if (!STORES.includes(store)) return send(res, 400, { ok: false, error: 'Choose your store first.' });
    const name = clean(b.name, 60);
    if (name.length < 2) return send(res, 400, { ok: false, error: 'Enter your name.' });
    const phone = cleanPhone(b.phone);
    if (!phone) return send(res, 400, { ok: false, error: 'Enter a valid Egyptian mobile number, like 01012345678.' });

    const raw = Array.isArray(b.items) ? b.items.slice(0, 40) : [];
    const items = raw.map(x => ({
      id: Number(x && x.id) | 0,
      n: clean(x && x.n, 140),
      s: clean(x && x.s, 40),
      sku: clean(x && x.sku, 40),
      im: /^[\w\-.%\/]{1,160}\.(jpe?g|png|webp)(\?v=\d{1,14})?$/i.test(String(x && x.im || '')) ? String(x.im) : '', // photo path on the store's CDN; the staff page adds the host itself
      p: Math.max(0, Math.min(1e7, Number(x && x.p) || 0)),
      q: Math.max(1, Math.min(20, Number(x && x.q) | 0))
    })).filter(x => x.n);
    if (!items.length) return send(res, 400, { ok: false, error: 'Your list is empty.' });
    const itemCount = items.reduce((s, x) => s + x.q, 0);
    if (itemCount > 80) return send(res, 400, { ok: false, error: 'That list is too long. Remove a few pieces.' });
    const total = items.reduce((s, x) => s + x.p * x.q, 0);

    // slow down floods from one address (a store's shared Wi-Fi gets plenty of room)
    const rl = 'pm:rl:' + ip(req);
    const hits = await redis(['INCR', rl]);
    if (hits === 1) await redis(['EXPIRE', rl, 60]);
    if (hits > 20) return send(res, 429, { ok: false, error: 'Too many lists at once. Try again in a minute.' });

    // a double tap or a retry with the same cid gets the same number back instead of a second order
    const cid = clean(b.cid, 64);
    const ck = cid ? 'pm:cid:' + store + ':' + cid : null;
    if (ck) {
      const first = await redis(['SET', ck, '0', 'NX', 'EX', 600]);
      if (!first) {
        const prev = await redis(['GET', ck]);
        if (prev && prev !== '0') return send(res, 200, { ok: true, number: pad3(+prev), store, again: true });
        return send(res, 409, { ok: false, error: 'Still sending. Wait a moment.' });
      }
    }

    const date = cairoDate();
    const ckey = `pm:cnt:${store}:${date}`;
    const n = await redis(['INCR', ckey]);
    if (n === 1) await redis(['EXPIRE', ckey, 3 * 24 * 3600]);
    const id = `${date}:${n}`;
    const at = Date.now();
    const order = { id, n, date, store, name, phone, items, itemCount, total, status: 'new', at };
    await redis(['SET', `pm:o:${store}:${id}`, JSON.stringify(order), 'EX', RETAIN_SECONDS]);
    await redis(['ZADD', `pm:a:${store}`, at, id]); // the store's active Inbox
    if (ck) await redis(['SET', ck, String(n), 'XX', 'EX', 600]);
    return send(res, 200, { ok: true, number: pad3(n), store });
  } catch (e) {
    return send(res, e.status || 502, { ok: false, error: e.status === 503 ? 'Sending is not available yet.' : 'Could not send your list. Try again.' });
  }
};
