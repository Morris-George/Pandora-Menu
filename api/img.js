// Product photo pass-through for the 360° view (WebGL needs CORS-readable images).
// Used only if the browser cannot read a photo straight from Shopify's CDN.
//   GET /api/img?u=PandoraXyz794909C01_1.jpg?v=1787225182&w=640
// Only files of the pandoraeg.com store folder are fetched.
const BASE = 'https://cdn.shopify.com/s/files/1/0707/6066/1191/files/';

module.exports = async function handler(req, res) {
  const q = new URL(req.url, 'https://x.invalid').searchParams;
  const u = q.get('u') || '', w = Math.min(1200, Math.max(100, parseInt(q.get('w'), 10) || 640));
  const m = /^([A-Za-z0-9_\-.%]+\.(?:jpe?g|png|webp))(?:\?v=(\d+))?$/i.exec(u);
  if (!m) { res.setHeader('Cache-Control', 'no-store'); return res.status(400).json({ ok: false, error: 'bad image' }); }
  try {
    const r = await fetch(BASE + m[1] + '?' + (m[2] ? 'v=' + m[2] + '&' : '') + 'width=' + w, { signal: AbortSignal.timeout(15000) });
    const type = r.headers.get('content-type') || '';
    if (!r.ok || !/^image\//.test(type)) throw new Error('cdn ' + r.status);
    const buf = Buffer.from(await r.arrayBuffer());
    res.setHeader('Content-Type', type);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=2592000, immutable');
    return res.status(200).send(buf);
  } catch (e) {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(502).json({ ok: false, error: 'image unavailable' });
  }
};
