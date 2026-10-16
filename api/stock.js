// Which SKUs are in stock at one store, read live from ERPNext ("Branches Stock Balance").
//   GET /api/stock?store=City Stars   ->  {ok, store, at, skus:["794769C01","164734C01-48",...]}
// Only SKU codes go to the browser: no quantities, values or ERP keys.
// Env vars (Vercel): ERP_URL, ERP_API_KEY, ERP_API_SECRET (read-only ERPNext user).
const REPORT = 'Branches Stock Balance';

// Menu store name -> ERPNext warehouse
const WAREHOUSES = {
  'CFC': 'CFC - AN',
  'Point 90': 'Point 90 - AN',
  'City Centre Almaza': 'City Center Almaza - AN',
  'City Stars': 'City Stars - AN',
  'Mall Of Egypt': 'Mall of Egypt - AN',
  'Mall Of Arabia': 'Mall of Arabia - AN',
  'CC Alexandria': 'City Center Alex - AN'
};

const pad = n => String(n).padStart(2, '0');

module.exports = async function handler(req, res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  const store = new URL(req.url, 'https://x.invalid').searchParams.get('store') || '';
  const wh = WAREHOUSES[store];
  if (!wh) { res.setHeader('Cache-Control', 'no-store'); return res.status(400).json({ ok: false, error: 'unknown store' }); }
  if (!process.env.ERP_URL || !process.env.ERP_API_KEY || !process.env.ERP_API_SECRET) {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(503).json({ ok: false, error: 'ERP is not configured' });
  }

  const now = new Date(Date.now() + 2 * 3600 * 1000); // Cairo date
  const to = `${now.getUTCFullYear()}-${pad(now.getUTCMonth() + 1)}-${pad(now.getUTCDate())}`;
  const from = to.slice(0, 8) + '01';
  try {
    const r = await fetch(String(process.env.ERP_URL).replace(/\/+$/, '') + '/api/method/frappe.desk.query_report.run', {
      method: 'POST',
      headers: {
        Authorization: `token ${process.env.ERP_API_KEY}:${process.env.ERP_API_SECRET}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      // a Custom Report with saved filters: are_default_filters:false makes ERPNext use today's dates instead
      body: JSON.stringify({ report_name: REPORT, filters: { from_date: from, to_date: to }, are_default_filters: false }),
      signal: AbortSignal.timeout(25000)
    });
    if (!r.ok) throw new Error('ERP answered ' + r.status);
    const rows = ((await r.json()).message || {}).result || [];
    const skus = new Set();
    for (const x of rows) {
      if (!x || Array.isArray(x) || x.warehouse !== wh || !(Number(x.bal_qty) > 0)) continue;
      if (x.sku) skus.add(String(x.sku).trim().toUpperCase());
    }
    // Vercel's CDN keeps each store's answer for 10 minutes, so ERP is asked at most once per store per 10 minutes.
    res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=1800');
    return res.status(200).json({ ok: true, store, at: new Date().toISOString(), skus: [...skus] });
  } catch (e) {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(502).json({ ok: false, error: String(e && e.message || e).slice(0, 200) });
  }
};
