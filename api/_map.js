// Turns ERPNext Items into menu products (the same shape as the catalogue baked into index.html).
// Pure functions only: no network, so they can be tested offline. The leading underscore keeps Vercel from exposing this file.
//
// Menu product:  {i,n,c,p,s,f,m,x,h,o,g,w,e,z,l,u,k,im,d}
//   i id  n name  c category (0 Bracelets, 1 Necklaces & pendants, 2 Earrings, 3 Rings, 4 Charms)  p price  s in stock
//   f form  m metal (Silver|Gold|Rose)  x stones/materials  h collections  o occasions  g for him  w mini  e engravable
//   z sizes [[label, inStock, sku]]  l size label  u website handle (empty for ERP-only pieces)  k base SKU  im photos  d description

// ---- category + form, from the name (Pandora names read "<theme> <metal> <FORM> with <stones>") ----
const FORMS = [ // keyword in the part of the name before "with" -> [form shown in the menu, category]
  ['bracelet', 'Bracelet', 0], ['bracelets', 'Bracelet', 0], ['bangle', 'Bangle', 0],
  ['ring', 'Ring', 3], ['rings', 'Ring', 3],
  ['stud', 'Stud', 2], ['studs', 'Stud', 2], ['hoop', 'Hoop', 2], ['hoops', 'Hoop', 2], ['earring', 'Earring', 2], ['earrings', 'Earring', 2], ['cuff', 'Ear Cuff', 2],
  ['necklace', 'Necklace', 1], ['collier', 'Collier', 1], ['pendant', 'Pendant', 1], ['choker', null, 1],
  ['charm', 'Charm', 4], ['charms', 'Charm', 4], ['dangle', 'Dangle', 4], ['dangles', 'Dangle', 4], ['clip', 'Clip', 4], ['clips', 'Clip', 4],
  ['medallion', 'Medallion', 4], ['spacer', 'Spacer', 4], ['link', 'Link', 4],
  ['chain', 'Chain', 1]
];
const FORM_BY_WORD = new Map(FORMS.map(f => [f[0], f]));
const GROUP_HINTS = [[/bracelet|bangle/i, 0], [/necklace|pendant|collier|choker/i, 1], [/earring|stud|hoop/i, 2], [/\brings?\b/i, 3], [/charm|dangle|clip|medallion|spacer/i, 4]];

const METAL_RE = /sterling silver|\bsilver\b|gold[- ]plated|rose[- ]gold|\bgold\b|leather|metal blend/i;
function classify(name, group) {
  const full = String(name || '');
  const m = METAL_RE.exec(full);
  // Pandora names read "<theme> <metal> <FORM> with <stones>": the theme can itself contain "with", so start at the first metal word
  const head = (m ? full.slice(m.index) : full).split(/\bwith\b/i)[0].toLowerCase();
  const words = head.split(/[^a-z]+/).filter(Boolean);
  for (let i = words.length - 1; i >= 0; i--) {
    const f = FORM_BY_WORD.get(words[i]);
    if (!f) continue;
    let [, form, c] = f;
    if (words[i] === 'chain' && words[i - 1] === 'safety') return { c: 4, f: 'Clip' }; // the menu files safety chains under Clip
    if (words[i] === 'ring' && /ear$/.test(words[i - 1] || '')) continue;
    if (words[i] === 'earring' || words[i] === 'earrings') { const prev = words[i - 1]; form = prev === 'drop' ? 'Drop' : prev === 'stud' ? 'Stud' : prev === 'hoop' ? 'Hoop' : 'Earring'; }
    if (c === 1 && words[i] === 'necklace' && words.includes('pendant')) form = 'Pendant'; // "Pendant Necklace" is filed as a pendant
    if (c === 0 && form === 'Bracelet' && /\bchain\b/.test(full.toLowerCase())) form = 'Chain';
    return { c, f: form };
  }
  // "Snake Chain Bracelet", "Box Chain Bracelet": the menu files these under the form "Chain"
  const lc = full.toLowerCase();
  if (/\bchain\b/.test(lc) && /\b(bracelet|bangle)\b/.test(lc)) return { c: 0, f: 'Chain' };
  for (const [re, c] of GROUP_HINTS) if (re.test(String(group || ''))) return { c, f: null };
  return null;
}

// ---- metal ----
const metalOf = name => { const n = String(name || '').toLowerCase(); return /rose[- ]gold/.test(n) ? 'Rose' : /gold[- ]plated/.test(n) ? 'Gold' : /silver/.test(n) ? 'Silver' : ''; };

// ---- stones and materials, in the menu's own vocabulary ----
const STONES = [ // [pattern, labels the menu uses]; the menu's vocabulary lists Murano Glass under Glass too, Bioresin under Resin, and cultured pearls under Pearl
  [/lab[- ]grown diamond/, ['Lab-Grown Diamond']], [/freshwater cultured pearl/, ['Freshwater Cultured Pearl', 'Pearl']], [/man[- ]made mother[- ]of[- ]pearl/, ['Man-Made Mother Of Pearl']],
  [/(?<!made )mother[- ]of[- ]pearl/, ['Mother Of Pearl']], [/murano glass/, ['Murano Glass', 'Glass']], [/bioresin/, ['Bioresin', 'Resin']], [/\bresin\b/, ['Resin']],
  [/cubic zirconia/, ['Cubic Zirconia']], [/enamel/, ['Enamel']], [/crystal/, ['Crystal']], [/synthetic/, ['Synthetic Stone']], [/leather/, ['Leather']]
];
function stonesOf(name) {
  const n = String(name || '').toLowerCase(); const out = [];
  for (const [re, labels] of STONES) if (re.test(n)) for (const l of labels) if (!out.includes(l)) out.push(l);
  if (/\bpearls?\b/.test(n) && !out.some(x => /pearl/i.test(x))) out.push('Pearl');
  if (/\bglass\b/.test(n) && !out.includes('Glass')) out.push('Glass');
  return out;
}

// ---- collections: ERPNext spelling -> the menu's spelling ("Essence" is the menu's "Luxurious" row, stored as "Organic") ----
const COLLECTION_ALIASES = { essence: 'Organic', 'pandora essence': 'Organic', organic: 'Organic', 'disney': 'Disney x Pandora', 'marvel': 'Marvel x Pandora' };
function collectionsOf(raw) {
  return [...new Set(String(raw == null ? '' : raw).split(/[,;\n|]+/).map(s => s.trim()).filter(Boolean)
    .map(s => COLLECTION_ALIASES[s.toLowerCase()] || s.slice(0, 60)))].slice(0, 6);
}

// ---- description: ERPNext keeps HTML; the menu wants a short plain sentence. Empty when it only repeats the name. ----
function cleanDescription(html, name) {
  const t = String(html || '')
    .replace(/<\s*(br|\/p|\/div|\/li|\/h\d)\s*\/?>/gi, ' ').replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ').replace(/&amp;/gi, '&').replace(/&#?\w+;/g, ' ').replace(/[<>]/g, '')
    .replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim();
  if (t.length < 12) return '';
  const a = t.toLowerCase().replace(/[^a-z0-9]/g, ''), b = String(name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  if (!a || a === b) return '';
  return t.length > 500 ? t.slice(0, 497).replace(/\s+\S*$/, '') + '…' : t;
}

// ---- SKU families: "164827C01-48" belongs to "164827C01" (size 48) ----
function baseSku(code, variantOf) {
  if (variantOf) return String(variantOf).trim();
  const m = /^(.{5,}?)-([0-9A-Z]{1,3})$/i.exec(String(code).trim());
  return m ? m[1] : String(code).trim();
}
function sizeLabel(c, code, base, itemName) {
  const suffix = code.length > base.length ? code.slice(base.length).replace(/^-/, '') : '';
  const cm = /(\d{2}(?:\.\d{1,2})?)\s?cm\b/i.exec(itemName || '');
  const mm = /(\d{2,3})\s?mm\b/i.exec(itemName || '');
  if (c === 3) return /^\d{2}$/.test(suffix) ? suffix : (suffix || 'One size');
  if (cm) return cm[1] + ' cm';
  if (mm) return mm[1] + ' mm';
  if ((c === 0 || c === 1) && /^\d{2}$/.test(suffix)) return suffix + ' cm';
  return suffix || 'One size';
}
const SIZE_LABEL = ['Length', 'Length', 'Size', 'Ring size (EU)', 'Size'];
const sizeSort = (a, b) => (parseFloat(a[0]) || 0) - (parseFloat(b[0]) || 0) || String(a[0]).localeCompare(String(b[0]));

// a stable number per SKU, far above Shopify's 14-digit ids, so the menu can use it as p.i (the list, orders and sizes all key on it)
function idOf(sku) {
  let h = 2166136261; for (const ch of String(sku)) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619) >>> 0; }
  return 8000000000000000 + h;
}

const tidyName = (n, c) => { // a variant's own name may end with its size ("... Ring - 52"): the product keeps the plain name
  let s = String(n || '').replace(/\s+/g, ' ').trim();
  if (c === 0 || c === 1 || c === 3) s = s.replace(/[\s,\-–]+(?:size\s*)?\d{2}(?:\.\d{1,2})?\s?(?:cm)?$/i, '');
  return s;
};

// rows: ERPNext Item rows. ctx: {collectionField, prices:Map(code->rate), images:Map(code->[urls]), multiplier, known:Set(UPPERCASE skus), skuRe, imgUrl(path)->url}
// Returns {products, stats}.
function buildProducts(rows, ctx) {
  const stats = { items: rows.length, skipped: { not_a_piece_code: 0, already_in_menu: 0, no_photo: 0, no_price: 0, unclassified: 0 }, products: 0 };
  const fam = new Map();
  for (const r of rows) {
    const code = String(r.item_code || r.name || '').trim();
    if (!code || !ctx.skuRe.test(code)) { stats.skipped.not_a_piece_code++; continue; }
    const base = baseSku(code, r.variant_of);
    if (!fam.has(base)) fam.set(base, []);
    fam.get(base).push({ ...r, _code: code });
  }
  const products = [];
  for (const [base, list] of fam) {
    if (ctx.known.has(base.toUpperCase()) || list.some(r => ctx.known.has(r._code.toUpperCase()))) { stats.skipped.already_in_menu++; continue; }
    list.sort((a, b) => a._code.localeCompare(b._code, 'en', { numeric: true }));
    const lead = list.find(r => !r.variant_of || r._code === base) || list[0];
    const name0 = tidyName(lead.item_name || lead.name, 0);
    const cls = classify(name0, lead.item_group);
    if (!cls) { stats.skipped.unclassified++; (stats.examples ||= {}).unclassified = [...((stats.examples || {}).unclassified || []), base].slice(0, 15); continue; }
    const name = tidyName(lead.item_name || lead.name, cls.c);
    const photos = [];
    for (const r of list) for (const u of (ctx.images.get(r._code) || [])) if (!photos.includes(u)) photos.push(u);
    if (!photos.length) { stats.skipped.no_photo++; (stats.examples ||= {}).no_photo = [...((stats.examples || {}).no_photo || []), base].slice(0, 15); continue; }
    let price = 0;
    for (const r of list) { const v = ctx.prices.get(r._code) || Number(r.standard_rate) || 0; if (v > 0) { price = v; break; } }
    price = Math.round(price * (ctx.multiplier || 1));
    if (!(price > 0)) { stats.skipped.no_price++; (stats.examples ||= {}).no_price = [...((stats.examples || {}).no_price || []), base].slice(0, 15); continue; }
    const hRaw = ctx.collectionField ? lead[ctx.collectionField] : '';
    const h = collectionsOf(hRaw);
    const z = list.map(r => [sizeLabel(cls.c, r._code, base, r.item_name), 1, r._code.toUpperCase()]).sort(sizeSort);
    const seen = new Set(); const zz = z.filter(x => !seen.has(x[0]) && seen.add(x[0]));
    const d = cleanDescription(lead.description, name);
    products.push({
      i: idOf(base.toUpperCase()), n: name, c: cls.c, p: price, s: 1, f: cls.f, m: metalOf(name), x: stonesOf(name), h, o: [],
      g: /\b(men|mens|men's|gents?|for him)\b/i.test(name + ' ' + h.join(' ')) ? 1 : 0,
      w: /\bmini\b/i.test(name) ? 1 : 0, e: /engravable/i.test(name) ? 1 : 0,
      z: zz.length ? zz : [['One size', 1, base.toUpperCase()]], l: SIZE_LABEL[cls.c], u: '', k: base.toUpperCase(), im: photos.slice(0, 4), ...(d ? { d } : {})
    });
  }
  stats.products = products.length;
  return { products, stats };
}

module.exports = { classify, metalOf, stonesOf, collectionsOf, cleanDescription, baseSku, sizeLabel, idOf, tidyName, buildProducts };
