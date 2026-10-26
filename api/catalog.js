// Pieces that exist in ERPNext but are not in the menu yet, ready to show: name, photos, collection, description, sizes, price.
//   GET /api/catalog  ->  {ok, at, items:[menu products], stats}
// The menu fetches this when it opens and adds any new piece by itself. Vercel's CDN keeps the answer for 10 minutes, so ERP is asked about once every 10 minutes.
//
// Env vars (Vercel): ERP_URL, ERP_API_KEY, ERP_API_SECRET (same read-only ERPNext user as /api/stock). Everything below is optional:
//   ERP_PRICE_LIST         selling price list to read prices from            (default "Standard Selling"; Item "standard_rate" is the fallback)
//   ERP_PRICE_MULTIPLIER   e.g. 1.14 if ERP prices are before VAT and the menu shows prices with VAT   (default 1)
//   ERP_COLLECTION_FIELD   Item field that holds the collection             (default: first found of custom_collection, collection, ...; else none)
//   ERP_ITEM_GROUP         only items under this Item Group (children included)   (default: all)
//   ERP_SKU_REGEX          which item codes are pieces                       (default "^\d{5,7}": codes that start with 5-7 digits, like 794769C01)
//   ERP_REQUIRE_SALES_ITEM "0" to also take items not flagged "Is Sales Item"   (default: required)
const fs = require('fs');
const path = require('path');
const { configured, erpList, photoUrl } = require('./_erp');
const { buildProducts, baseSku } = require('./_map');

const COLLECTION_CANDIDATES = ['custom_collection', 'collection', 'custom_collections', 'custom_pandora_collection', 'custom_theme', 'custom_series'];

// Every SKU already in the menu, read from index.html itself, so this never goes out of date when the catalogue is refreshed.
let KNOWN = null;
function loadKnown() {
  if (KNOWN) return KNOWN;
  const set = new Set();
  try {
    const html = fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');
    const at = html.indexOf('const D=[');
    if (at >= 0) {
      const start = at + 8; let depth = 0, inStr = false, esc = false, end = -1;
      for (let j = start; j < html.length; j++) {
        const ch = html[j];
        if (inStr) { if (esc) esc = false; else if (ch === '\\') esc = true; else if (ch === '"') inStr = false; continue; }
        if (ch === '"') inStr = true; else if (ch === '[') depth++; else if (ch === ']' && --depth === 0) { end = j + 1; break; }
      }
      for (const p of JSON.parse(html.slice(start, end))) {
        set.add(String(p.k || '').toUpperCase());
        for (const z of p.z || []) set.add(String(z[2] || '').toUpperCase());
      }
    }
  } catch (e) { console.error('catalog: could not read the menu catalogue:', e && e.message); }
  set.delete('');
  return (KNOWN = set);
}

const today = () => new Date(Date.now() + 2 * 3600 * 1000).toISOString().slice(0, 10); // Cairo date, good enough for price validity

module.exports = async function handler(req, res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  const fail = (code, error) => { res.setHeader('Cache-Control', 'no-store'); return res.status(code).json({ ok: false, error }); };
  if (!configured()) return fail(503, 'ERP is not configured');

  const deadline = Date.now() + 22000;
  try {
    const known = loadKnown();
    if (!known.size) { // without the list, every ERP item would look new: show nothing rather than flood the menu
      res.setHeader('Cache-Control', 'public, s-maxage=60');
      return res.status(200).json({ ok: true, at: new Date().toISOString(), items: [], stats: { note: 'menu catalogue unavailable' } });
    }

    // 1. which columns this ERPNext has (custom fields differ between sites)
    const probe = await erpList('Item', { fields: ['*'], limit: 1 }, deadline);
    const cols = new Set(Object.keys(probe[0] || {}));
    if (!cols.size) return res.status(200).json({ ok: true, at: new Date().toISOString(), items: [], stats: { items: 0 } });
    const wanted = ['name', 'item_code', 'item_name', 'item_group', 'description', 'image', 'website_image', 'standard_rate', 'variant_of'];
    const collectionField = (process.env.ERP_COLLECTION_FIELD && cols.has(process.env.ERP_COLLECTION_FIELD) && process.env.ERP_COLLECTION_FIELD)
      || (process.env.ERP_COLLECTION_FIELD ? null : COLLECTION_CANDIDATES.find(f => cols.has(f))) || null;
    const fields = wanted.filter(f => f === 'name' || cols.has(f)).concat(collectionField ? [collectionField] : []);

    // 2. the sellable items
    const filters = [['disabled', '=', 0]];
    if (cols.has('is_sales_item') && process.env.ERP_REQUIRE_SALES_ITEM !== '0') filters.push(['is_sales_item', '=', 1]);
    if (process.env.ERP_ITEM_GROUP) filters.push(['item_group', 'descendants of (inclusive)', process.env.ERP_ITEM_GROUP]);
    const all = await erpList('Item', { fields, filters }, deadline);
    for (const r of all) r.item_code = r.item_code || r.name;

    // 3. only pieces that are new to the menu need prices and photos
    const skuRe = new RegExp(process.env.ERP_SKU_REGEX || '^\\d{5,7}', 'i');
    const fresh = all.filter(r => {
      const code = String(r.item_code).trim();
      return skuRe.test(code) && !known.has(code.toUpperCase()) && !known.has(baseSku(code, r.variant_of).toUpperCase());
    });
    const codes = fresh.map(r => r.item_code);

    const prices = new Map(), images = new Map();
    if (codes.length) {
      // prices: the selling price list, valid today
      try {
        const list = await erpList('Item Price', {
          fields: ['item_code', 'price_list_rate', 'currency', 'valid_from', 'valid_upto'],
          filters: [['price_list', '=', process.env.ERP_PRICE_LIST || 'Standard Selling'], ['selling', '=', 1], ['item_code', 'in', codes]]
        }, deadline);
        const d = today(), best = new Map();
        for (const r of list) {
          if ((r.currency && r.currency !== 'EGP') || (r.valid_from && r.valid_from > d) || (r.valid_upto && r.valid_upto < d)) continue;
          const prev = best.get(r.item_code);
          if (!prev || String(r.valid_from || '') >= String(prev.valid_from || '')) best.set(r.item_code, r);
        }
        for (const [c, r] of best) prices.set(c, Number(r.price_list_rate) || 0);
      } catch (e) { console.error('catalog: prices unavailable, using Item standard rate:', e && e.message); }

      // photos: the item's own photo first, then every other image attached to it
      for (const r of fresh) {
        const first = [r.image, r.website_image].map(photoUrl).filter(Boolean);
        images.set(r.item_code, [...new Set(first)]);
      }
      try {
        const files = await erpList('File', {
          fields: ['attached_to_name', 'file_url'],
          filters: [['attached_to_doctype', '=', 'Item'], ['attached_to_name', 'in', codes], ['is_folder', '=', 0]]
        }, deadline);
        for (const f of files) {
          const u = photoUrl(f.file_url);
          const list = images.get(f.attached_to_name);
          if (u && list && !list.includes(u)) list.push(u);
        }
      } catch (e) { console.error('catalog: attached images unavailable, using the item photo only:', e && e.message); }
    }

    const { products, stats } = buildProducts(fresh, {
      collectionField, prices, images, known, skuRe,
      multiplier: Number(process.env.ERP_PRICE_MULTIPLIER) || 1
    });
    stats.items = all.length; stats.new_candidates = fresh.length; stats.collection_field = collectionField;
    if (stats.examples) { console.log('catalog: left out', JSON.stringify(stats.examples)); delete stats.examples; } // item codes go to the Vercel logs, not to customers
    console.log('catalog:', JSON.stringify(stats));

    // Vercel's CDN keeps this for 10 minutes: a piece added in ERP shows in the menu within about 10 minutes
    res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=3600');
    return res.status(200).json({ ok: true, at: new Date().toISOString(), items: products, stats });
  } catch (e) {
    console.error('catalog:', e && e.message);
    return fail(502, String(e && e.message || e).slice(0, 200));
  }
};
