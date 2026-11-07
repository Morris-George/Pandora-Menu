// Which stores have each SKU right now, across ALL stores, from ERPNext ("Branches Stock Balance").
//   GET /api/find-stock  (Authorization: Bearer <finder token>)  ->  {ok, at, stock:{ "794769C01":["City Stars","CFC"], ... }}
// Only for the hidden stock finder: no password-less access. ERP is asked at most once every 5 minutes (answer kept in Redis).
// Env vars (Vercel): ERP_URL, ERP_API_KEY, ERP_API_SECRET (same as /api/stock), FINDER_PASSWORD, STAFF_SECRET.
const { redis, send, finderOk } = require('./_lib');
const REPORT = 'Branches Stock Balance';
const WH2STORE = {
  'CFC - AN': 'CFC', 'Point 90 - AN': 'Point 90', 'City Center Almaza - AN': 'City Centre Almaza', 'City Stars - AN': 'City Stars',
  'Mall of Egypt - AN': 'Mall Of Egypt', 'Mall of Arabia - AN': 'Mall Of Arabia', 'City Center Alex - AN': 'CC Alexandria'
};
const pad = n => String(n).padStart(2, '0');
const KEY = 'pm:findstock';

module.exports = async function handler(req, res) {
  if (!finderOk(req)) return send(res, 401, { ok: false, error: 'locked' });
  try {
    const hit = await redis(['GET', KEY]).catch(() => null);
    if (hit) return send(res, 200, JSON.parse(hit));
    if (!process.env.ERP_URL || !process.env.ERP_API_KEY || !process.env.ERP_API_SECRET) return send(res, 503, { ok: false, error: 'ERP is not configured' });
    const now = new Date(Date.now() + 2 * 3600 * 1000);
    const to = `${now.getUTCFullYear()}-${pad(now.getUTCMonth() + 1)}-${pad(now.getUTCDate())}`;
    const r = await fetch(String(process.env.ERP_URL).replace(/\/+$/, '') + '/api/method/frappe.desk.query_report.run', {
      method: 'POST',
      headers: { Authorization: `token ${process.env.ERP_API_KEY}:${process.env.ERP_API_SECRET}`, 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ report_name: REPORT, filters: { from_date: to.slice(0, 8) + '01', to_date: to }, are_default_filters: false }),
      signal: AbortSignal.timeout(25000)
    });
    if (!r.ok) throw new Error('ERP answered ' + r.status);
    const rows = ((await r.json()).message || {}).result || [];
    const m = {};
    for (const x of rows) {
      const st = x && !Array.isArray(x) && WH2STORE[x.warehouse];
      if (!st || !(Number(x.bal_qty) > 0) || !x.sku) continue;
      const k = String(x.sku).trim().toUpperCase();
      (m[k] = m[k] || new Set()).add(st);
    }
    const stock = {};
    for (const k in m) stock[k] = [...m[k]];
    const out = { ok: true, at: new Date().toISOString(), stock };
    await redis(['SET', KEY, JSON.stringify(out), 'EX', 300]).catch(() => {});
    return send(res, 200, out);
  } catch (e) {
    return send(res, 502, { ok: false, error: String(e && e.message || e).slice(0, 160) });
  }
};
