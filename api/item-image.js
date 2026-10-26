// A product photo from ERPNext, served through the menu so the ERP address and its keys never reach a customer's phone.
//   GET /api/item-image?f=/files/x.jpg&s=<signature>
// Only links signed by /api/catalog work, so this cannot be used to read other files from ERPNext.
const { base, configured, authHeaders, sigOk, safePath } = require('./_erp');

const TYPES = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp', gif: 'image/gif' };
const MAX_BYTES = 4 * 1000 * 1000; // Vercel functions cannot answer with more than about 4.5 MB

module.exports = async function handler(req, res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  const q = new URL(req.url, 'https://x.invalid').searchParams;
  const f = q.get('f') || '', s = q.get('s') || '';
  const miss = code => { res.setHeader('Cache-Control', 'no-store'); return res.status(code).end(); };
  if (!configured() || !safePath(f) || !sigOk(f, s)) return miss(404);
  try {
    const r = await fetch(base() + encodeURI(f), { headers: authHeaders(), redirect: 'manual', signal: AbortSignal.timeout(20000) });
    if (!r.ok) return miss(404);
    const ext = f.split('.').pop().toLowerCase();
    const declared = (r.headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
    const type = /^image\/(jpeg|png|webp|gif)$/.test(declared) ? declared : TYPES[ext];
    if (!type) return miss(404);
    const buf = Buffer.from(await r.arrayBuffer());
    if (!buf.length) return miss(404);
    if (buf.length > MAX_BYTES) return miss(413);
    res.setHeader('Content-Type', type);
    res.setHeader('Content-Length', String(buf.length));
    // a photo does not change under the same name: browsers keep it a day, Vercel's CDN a week
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400');
    return res.status(200).send(buf);
  } catch (e) {
    return miss(502);
  }
};
