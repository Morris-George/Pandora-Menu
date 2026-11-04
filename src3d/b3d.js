/* Pandora Menu — "See it on your bracelet": a still picture of the customer's list.
   The real bracelet photo, with each charm's real photo placed on the chain where the wire goes through it.
   No 3D: everything shown is the product photography itself (white background removed).
   Served as /b3d.js — rebuild with:  bun build src3d/b3d.js --minify --format esm --outfile b3d.js   */
const PI = Math.PI, TAU = PI * 2;
const clamp = (x, a, b) => x < a ? a : x > b ? b : x;
const TXT = {
  hint: ['Drag to move it', 'اسحب لتحريكها'],
  title: ['Your bracelet', 'سوارك'], titleP: ['Your pieces', 'قطعك'],
  load: ['Putting your charms on the bracelet…', 'جارٍ تركيب التشارمز على السوار…'],
  save: ['Save picture', 'حفظ صورة'], bracelet: ['Bracelet', 'السوار'],
  shown: ['Shown on', 'معروض على'], add: ['+ Add to my list', '+ أضف إلى قائمتي'], added: ['✓ On your list', '✓ في قائمتك'],
  note: ['Made from the product photos — the real pieces are waiting in store.', 'مصنوعة من صور القطع — القطع الحقيقية بانتظارك في الفرع.'],
  fail: ['Could not load the photos. Check the connection and try again.', 'تعذّر تحميل الصور. تحقق من الاتصال وحاول مرة أخرى.'],
  x: ['Close', 'إغلاق'], angle: ['Photo', 'صورة']
};
const loadImg = src => new Promise((res, rej) => { const i = new Image(); i.crossOrigin = 'anonymous'; i.decoding = 'async'; i.onload = () => res(i); i.onerror = rej; i.src = src; });
async function getImg(cfg, u, w) {
  try { return await loadImg(cfg.base + u + (u.includes('?') ? '&' : '?') + 'width=' + w + '&b3=1'); }
  catch (e) { return await loadImg('/api/img?u=' + encodeURIComponent(u) + '&w=' + w); }
}
const isModel = u => /m\d?\.(jpe?g|png|webp)$/i.test(u.replace(/\?.*/, ''));
const angleImgs = im => { const n = u => { const m = u.replace(/\?.*/, '').match(/_(\d)\.(jpe?g|png|webp)$/i); return m ? +m[1] : 9; }; return (im || []).filter(u => !isModel(u)).sort((a, b) => n(a) - n(b)); };
const charmKind = it => { const f = it.f || '', n = (it.n || '').toLowerCase(); if (f == 'Dangle' || f == 'Medallion' || /\bdangle\b/.test(n)) return 'dangle'; if (f == 'Clip' || /\bclip\b/.test(n)) return 'clip'; if (f == 'Spacer' || /spacer/.test(n)) return 'spacer'; return 'bead'; };
const charmSize = (it, kind) => { const n = (it.n || '').toLowerCase(); if (kind == 'dangle') return it.f == 'Medallion' ? 15 : 17; if (kind == 'clip') return 8.6; if (kind == 'spacer') return 6.8; if (/\bmini\b/.test(n)) return 7.6; if (/murano/.test(n)) return 12; return 10.6; };

function cutout(img, S = 512) {
  const k = Math.min(1, S / Math.max(img.naturalWidth || img.width, img.naturalHeight || img.height));
  const W = Math.max(8, Math.round((img.naturalWidth || img.width) * k)), H = Math.max(8, Math.round((img.naturalHeight || img.height) * k));
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const x = c.getContext('2d', { willReadFrequently: true }); x.fillStyle = '#fff'; x.fillRect(0, 0, W, H); x.drawImage(img, 0, 0, W, H);
  const d = x.getImageData(0, 0, W, H).data, N = W * H;
  // background colour = median of the border
  const br = [], bg = [], bb = [];
  for (let i = 0; i < W; i++) for (const j of [0, H - 1]) { const o = (j * W + i) * 4; br.push(d[o]); bg.push(d[o + 1]); bb.push(d[o + 2]); }
  for (let j = 0; j < H; j++) for (const i of [0, W - 1]) { const o = (j * W + i) * 4; br.push(d[o]); bg.push(d[o + 1]); bb.push(d[o + 2]); }
  const med = a => a.sort((p, q) => p - q)[a.length >> 1];
  const R0 = med(br), G0 = med(bg), B0 = med(bb);
  const dist = new Uint8Array(N);
  for (let i = 0, o = 0; i < N; i++, o += 4) dist[i] = Math.max(Math.abs(d[o] - R0), Math.abs(d[o + 1] - G0), Math.abs(d[o + 2] - B0));
  const TOL = 14, bgm = new Uint8Array(N), q = new Int32Array(N); let qh = 0, qt = 0;
  // background = near the studio colour, or a soft grey shadow that fades smoothly out of it
  const sat = new Uint8Array(N); for (let i = 0, o = 0; i < N; i++, o += 4) sat[i] = Math.max(d[o], d[o + 1], d[o + 2]) - Math.min(d[o], d[o + 1], d[o + 2]);
  const lum = new Uint8Array(N); for (let i = 0, o = 0; i < N; i++, o += 4) lum[i] = (d[o] + d[o + 1] + d[o + 2]) / 3;
  // "soft" = a blurry, slowly fading area (studio shadow), unlike metal whose shading changes quickly
  const bl = new Float32Array(N), tmp = new Float32Array(N), soft = new Uint8Array(N);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { let a = 0, n = 0; for (let k = -2; k <= 2; k++) { const xx = x + k; if (xx >= 0 && xx < W) { a += lum[y * W + xx]; n++; } } tmp[y * W + x] = a / n; }
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { let a = 0, n = 0; for (let k = -2; k <= 2; k++) { const yy = y + k; if (yy >= 0 && yy < H) { a += tmp[yy * W + x]; n++; } } bl[y * W + x] = a / n; }
  for (let y = 3; y < H - 3; y++) for (let x = 3; x < W - 3; x++) { const i = y * W + x; const g = Math.max(Math.abs(bl[i + 3] - bl[i - 3]), Math.abs(bl[i + 3 * W] - bl[i - 3 * W])) / 6; soft[i] = g <= 1.1 * 1100 / Math.max(W, H) * (Math.max(W, H) / 1100) ? 1 : 0; }
  const step = (a, b) => Math.max(Math.abs(d[a * 4] - d[b * 4]), Math.abs(d[a * 4 + 1] - d[b * 4 + 1]), Math.abs(d[a * 4 + 2] - d[b * 4 + 2]));
  const push = (i, f) => { if (bgm[i]) return; if (dist[i] < TOL || (f >= 0 && lum[i] >= 200 && sat[i] < 10 && soft[i])) { bgm[i] = 1; q[qt++] = i; } };
  for (let i = 0; i < W; i++) { push(i, -1); push((H - 1) * W + i, -1); }
  for (let j = 0; j < H; j++) { push(j * W, -1); push(j * W + W - 1, -1); }
  while (qh < qt) { const i = q[qh++], px = i % W, py = (i / W) | 0; if (px > 0) push(i - 1, i); if (px < W - 1) push(i + 1, i); if (py > 0) push(i - W, i); if (py < H - 1) push(i + W, i); }
  // enclosed background (inside of rings / hoops): large, very flat background-coloured islands
  const seen = new Uint8Array(N);
  for (let s = 0; s < N; s++) {
    if (bgm[s] || seen[s] || dist[s] >= 6) continue;
    qh = qt = 0; q[qt++] = s; seen[s] = 1;
    while (qh < qt) { const i = q[qh++], px = i % W, py = (i / W) | 0; for (const n of [px > 0 ? i - 1 : -1, px < W - 1 ? i + 1 : -1, py > 0 ? i - W : -1, py < H - 1 ? i + W : -1]) if (n >= 0 && !seen[n] && !bgm[n] && dist[n] < 6) { seen[n] = 1; q[qt++] = n; } }
    if (qt > N * .006) for (let t = 0; t < qt; t++) bgm[q[t]] = 1;
  }
  // keep the main piece (and any big parts), drop specks
  const lab = new Int32Array(N).fill(-1), sizes = [];
  for (let s = 0; s < N; s++) {
    if (bgm[s] || lab[s] >= 0) continue; const id = sizes.length; qh = qt = 0; q[qt++] = s; lab[s] = id;
    while (qh < qt) { const i = q[qh++], px = i % W, py = (i / W) | 0; for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) { const nx = px + dx, ny = py + dy; if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue; const n = ny * W + nx; if (!bgm[n] && lab[n] < 0) { lab[n] = id; q[qt++] = n; } } }
    sizes.push(qt);
  }
  if (!sizes.length) return null;
  const big = Math.max(...sizes), keep = sizes.map(s => s >= big * .08);
  let x0 = W, y0 = H, x1 = 0, y1 = 0;
  const alpha = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    if (bgm[i] || !keep[lab[i]]) continue;
    const px = i % W, py = (i / W) | 0;
    alpha[i] = 1; if (px < x0) x0 = px; if (px > x1) x1 = px; if (py < y0) y0 = py; if (py > y1) y1 = py;
  }
  if (x1 - x0 < 6 || y1 - y0 < 6) return null;
  // soft edge on the band next to the background
  // a 2px band: alpha from how far the pixel is from the studio colour, and the white mixed into it taken out
  const band = new Uint8Array(N);
  for (let r = 0; r < 2; r++) { const prev = band.slice(); for (let i = 0; i < N; i++) { if (!alpha[i] || band[i]) continue; const px = i % W, py = (i / W) | 0; const nb = [px > 0 ? i - 1 : -1, px < W - 1 ? i + 1 : -1, py > 0 ? i - W : -1, py < H - 1 ? i + W : -1]; if (nb.some(n => n >= 0 && (!alpha[n] || prev[n]))) band[i] = 1; } }
  for (let i = 0; i < N; i++) {
    if (!band[i]) continue; const a = clamp((dist[i] - 5) / 55, 0, 1);
    if (a < .06) { alpha[i] = 0; continue; } alpha[i] = a;
    const o = i * 4; d[o] = clamp((d[o] - (1 - a) * R0) / a, 0, 255); d[o + 1] = clamp((d[o + 1] - (1 - a) * G0) / a, 0, 255); d[o + 2] = clamp((d[o + 2] - (1 - a) * B0) / a, 0, 255);
  }
  const touch = (x0 <= 1) + (y0 <= 1) + (x1 >= W - 2) + (y1 >= H - 2), fill = (x1 - x0) * (y1 - y0) / N;
  const pad = 3; x0 = Math.max(0, x0 - pad); y0 = Math.max(0, y0 - pad); x1 = Math.min(W - 1, x1 + pad); y1 = Math.min(H - 1, y1 + pad);
  const cw = x1 - x0 + 1, ch = y1 - y0 + 1;
  const tc = document.createElement('canvas'); tc.width = cw; tc.height = ch;
  const tx = tc.getContext('2d'), out = tx.createImageData(cw, ch), od = out.data, A = new Float32Array(cw * ch);
  for (let j = 0; j < ch; j++) for (let i = 0; i < cw; i++) {
    const si = (j + y0) * W + i + x0, o = (j * cw + i) * 4; A[j * cw + i] = alpha[si];
    if (alpha[si] > 0) { od[o] = d[si * 4]; od[o + 1] = d[si * 4 + 1]; od[o + 2] = d[si * 4 + 2]; od[o + 3] = 255; }
  }
  // bleed edge colours outward (8 passes) so mipmaps never pick up white
  for (let pass = 0; pass < 8; pass++) {
    const src = new Uint8ClampedArray(od);
    for (let j = 0; j < ch; j++) for (let i = 0; i < cw; i++) {
      const o = (j * cw + i) * 4; if (src[o + 3]) continue; let r = 0, g = 0, b = 0, n = 0;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const nx = i + dx, ny = j + dy; if (nx < 0 || ny < 0 || nx >= cw || ny >= ch) continue; const p = (ny * cw + nx) * 4; if (src[p + 3]) { r += src[p]; g += src[p + 1]; b += src[p + 2]; n++; } }
      if (n) { od[o] = r / n; od[o + 1] = g / n; od[o + 2] = b / n; od[o + 3] = 255; }
    }
  }
  for (let i = 3; i < od.length; i += 4) if (!od[i]) { od[i - 3] = R0 * .8; od[i - 2] = G0 * .8; od[i - 1] = B0 * .8; od[i] = 255; }
  for (let i = 0; i < cw * ch; i++) od[i * 4 + 3] = Math.round(A[i] * 255);
  tx.putImageData(out, 0, 0);
  // sparkle points: bright, high-contrast specks (stones)
  const L = new Float32Array(cw * ch); for (let i = 0; i < cw * ch; i++) L[i] = (od[i * 4] + od[i * 4 + 1] + od[i * 4 + 2]) / 3;
  const sp = [];
  for (let j = 4; j < ch - 4; j += 2) for (let i = 4; i < cw - 4; i += 2) {
    const ix = j * cw + i; if (A[ix] < 1 || L[ix] < 236) continue; let mn = 255, mx = 0;
    for (let dy = -4; dy <= 4; dy += 2) for (let dx = -4; dx <= 4; dx += 2) { const v = L[ix + dy * cw + dx]; if (v < mn) mn = v; if (v > mx) mx = v; }
    if (L[ix] >= mx && L[ix] - mn > 70) sp.push([i, j, L[ix] - mn]);
  }
  sp.sort((a, b) => b[2] - a[2]);
  const spk = []; for (const p of sp) { if (spk.every(s => Math.hypot(s[0] - p[0], s[1] - p[1]) > Math.max(cw, ch) * .1)) spk.push(p); if (spk.length >= 7) break; }
  return { canvas: tc, A, cw, ch, spk, touch, fill };
}


function wirePoint(cut, kind) {
  const { A, cw, ch } = cut, rows = [];
  for (let j = 0; j < ch; j++) { let a = -1, b = -1; for (let i = 0; i < cw; i++) if (A[j * cw + i] >= .5) { if (a < 0) a = i; b = i; } rows.push(a < 0 ? null : [a, b]); }
  let top = 0, bot = ch - 1; while (top < ch && !rows[top]) top++; while (bot > 0 && !rows[bot]) bot--;
  const hgt = Math.max(1, bot - top), wmax = Math.max(...rows.map(r => r ? r[1] - r[0] : 0));
  if (kind == 'dangle') { // the bail: the narrow part at the top
    let yb = top; while (yb < bot && rows[yb] && rows[yb][1] - rows[yb][0] < wmax * .5) yb++;
    let y = (yb - top) > hgt * .04 && (yb - top) < hgt * .45 ? (top + yb) / 2 : top + hgt * .07;
    const r = rows[Math.round(y)] || rows[top]; return { x: r ? (r[0] + r[1]) / 2 : cw / 2, y, top, bot, wmax, hgt };
  }
  let x0 = cw, x1 = 0; for (const r of rows) if (r) { x0 = Math.min(x0, r[0]); x1 = Math.max(x1, r[1]); }
  return { x: (x0 + x1) / 2, y: (top + bot) / 2, top, bot, wmax, hgt };
}


/* find the chain in the bracelet photo: an ellipse (centre, radii, chain thickness) and where the clasp is */
function findRing(cut) {
  const { A, cw, ch } = cut, on = (x, y) => { x = Math.round(x); y = Math.round(y); return x >= 0 && y >= 0 && x < cw && y < ch && A[y * cw + x] >= .5; };
  let x0 = cw, x1 = 0, y0 = ch, y1 = 0;
  for (let y = 0; y < ch; y++) for (let x = 0; x < cw; x++) if (A[y * cw + x] >= .5) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  const cy0 = (y0 + y1) / 2;
  let t = 0; for (let x = x0; x < x1 && on(x, cy0); x++) t++;
  let t2 = 0; for (let x = x1; x > x0 && on(x, cy0); x--) t2++;
  t = clamp(Math.min(t || 8, t2 || 8), 3, (x1 - x0) * .12);
  const ring = { cx: (x0 + x1) / 2, cy: cy0, a: (x1 - x0) / 2 - t / 2, b: (y1 - y0) / 2 - t / 2, t };
  // thickness all round → the clasp is the thickest place
  const th = [];
  for (let i = 0; i < 180; i++) {
    const q = i / 180 * TAU, c = Math.cos(q), s = Math.sin(q); let n = 0;
    for (let r = -t * 3; r <= t * 3; r += .5) if (on(ring.cx + (ring.a + r) * c, ring.cy + (ring.b + r) * s)) n++;
    th.push(n / 2);
  }
  const sm = th.map((v, i) => (th[(i + 178) % 180] + th[(i + 179) % 180] + v + th[(i + 1) % 180] + th[(i + 2) % 180]) / 5);
  let bi = 0; for (let i = 1; i < 180; i++) if (sm[i] > sm[bi]) bi = i;
  ring.clasp = sm[bi] > t * 1.7 ? bi / 180 * TAU : null;
  if (ring.clasp != null) { let w = 0; while (w < 30 && sm[(bi + w) % 180] > t * 1.35) w++; let w2 = 0; while (w2 < 30 && sm[(bi - w2 + 180) % 180] > t * 1.35) w2++; ring.claspW = Math.max(w, w2) / 180 * TAU + .05; }
  return ring;
}

/* place the charms on the front of the chain and paint the picture */
function compose(bc, ring, charms, sizeCm) {
  const k = (2 * ring.a) / ((sizeCm || 18) * 10 / PI) * .97; // px per mm
  // front arc (bottom of the photo), sampled by arc length
  const N = 720, P = []; let L = 0;
  for (let i = 0; i <= N; i++) { const q = i / N * TAU, x = ring.cx + ring.a * Math.cos(q), y = ring.cy + ring.b * Math.sin(q); if (i) L += Math.hypot(x - P[i - 1].x, y - P[i - 1].y); P.push({ q, x, y, s: L }); }
  const at = s => { s = ((s % L) + L) % L; let lo = 0, hi = N; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (P[m].s < s) lo = m; else hi = m; } const p = P[lo], r = P[hi], f = (s - p.s) / Math.max(1e-6, r.s - p.s); return { x: p.x + (r.x - p.x) * f, y: p.y + (r.y - p.y) * f, ang: Math.atan2(r.y - p.y, r.x - p.x), q: p.q + (r.q - p.q) * f }; };
  const sOf = q => P[Math.round(((q % TAU) + TAU) % TAU / TAU * N)].s;
  const front = sOf(PI / 2), blocked = [];
  if (ring.clasp != null) { const c = sOf(ring.clasp), w = (ring.claspW || .3) * (ring.a + ring.b) / 2; blocked.push([c - w, c + w], [c - w + L, c + w + L], [c - w - L, c + w - L]); }
  const hit = (a, b) => blocked.some(o => a < o[1] && b > o[0]);
  const gap = .6 * k, placed = [];
  let rgt = front, lft = front, first = true;
  charms.forEach((c, i) => {
    const w = (c.kind == 'dangle' ? c.wmm * .6 : c.wmm) * k + gap;
    let s;
    if (first) { s = front; if (hit(s - w / 2, s + w / 2)) { let a = s; while (hit(a - w / 2, a + w / 2)) a += 2; s = a; } rgt = s + w / 2; lft = s - w / 2; first = false; }
    else if (i % 2) { let a = rgt; while (hit(a, a + w)) a += 2; s = a + w / 2; rgt = a + w; }
    else { let b = lft; while (hit(b - w, b)) b -= 2; s = b - w / 2; lft = b - w; }
    placed.push({ c, s });
  });
  // canvas big enough for dangles hanging below
  const pad = Math.round(22 * k), out = document.createElement('canvas');
  out.width = bc.width + pad * 2; out.height = bc.height + pad * 2;
  const x = out.getContext('2d'); x.imageSmoothingQuality = 'high';
  x.drawImage(bc, pad, pad);
  const items = placed.map(({ c, s }) => ({ c, p: at(s) })).sort((u, v) => u.p.y - v.p.y);
  const base = document.createElement('canvas'); base.width = out.width; base.height = out.height; base.getContext('2d').drawImage(bc, pad, pad);
  const layers = [];
  for (const { c, p } of items) {
    const hpx = c.hmm * k, sc = hpx / Math.max(1, c.wp.hgt), rot = c.kind == 'dangle' ? 0 : (p.ang > PI / 2 || p.ang < -PI / 2 ? p.ang + PI : p.ang);
    x.save(); x.translate(pad + p.x, pad + p.y); x.rotate(rot);
    x.shadowColor = 'rgba(60,38,44,.28)'; x.shadowBlur = 6 * k / 4; x.shadowOffsetY = 1.2 * k / 4;
    x.drawImage(c.cut.canvas, -c.wp.x * sc, -c.wp.y * sc, c.cut.cw * sc, c.cut.ch * sc);
    x.restore();
    layers.push({ cv: c.cut.canvas, px: pad + p.x, py: pad + p.y, ox: c.wp.x * sc, oy: c.wp.y * sc, w: c.cut.cw * sc, h: c.cut.ch * sc, rot, dangle: c.kind == 'dangle' });
  }
  return withLayers(out, base, layers);
}
function withLayers(full, base, layers) {
  const t = trim(full); t.base = base; t.layers = layers; return t;
}
function row(charms) { // no bracelet photo: the charms side by side
  const k = 14, W = charms.reduce((s, c) => s + c.wmm * k + 12, 40), H = 22 * k, out = document.createElement('canvas'); out.width = W; out.height = H; const x = out.getContext('2d');
  let cx = 20; for (const c of charms) { const sc = c.hmm * k / c.wp.hgt; x.drawImage(c.cut.canvas, cx + c.wmm * k / 2 - c.wp.x * sc, H * .35 - c.wp.y * sc, c.cut.cw * sc, c.cut.ch * sc); cx += c.wmm * k + 12; }
  return trim(out);
}
function trim(c) {
  const d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data; let x0 = c.width, y0 = c.height, x1 = 0, y1 = 0;
  for (let y = 0; y < c.height; y++) for (let x = 0; x < c.width; x++) if (d[(y * c.width + x) * 4 + 3] > 8) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  if (x1 <= x0) { c.dx = 0; c.dy = 0; return c; } const m = 12, o = document.createElement('canvas'); o.width = x1 - x0 + 1 + m * 2; o.height = y1 - y0 + 1 + m * 2; o.getContext("2d").drawImage(c, m - x0, m - y0); o.dx = m - x0; o.dy = m - y0; return o;
}

async function prepCharm(cfg, it) {
  const u = angleImgs(it.im)[0] || (it.im || [])[0]; if (!u) return null;
  const cut = cutout(await getImg(cfg, u, 720), 600); if (!cut) return null;
  const kind = charmKind(it), wp = wirePoint(cut, kind), hmm = charmSize(it, kind);
  return { it, kind, cut, wp, hmm, wmm: wp.wmax * hmm / Math.max(1, wp.hgt) };
}

export function open(cfg) {
  const ar = cfg.lang == 'ar', T = k => TXT[k][ar ? 1 : 0];
  injectCSS();
  const ov = document.createElement('div'); ov.className = 'b3'; ov.dir = ar ? 'rtl' : 'ltr';
  ov.innerHTML = `<div class="b3-top"><div class="b3-tt"><span class="b3-k">PANDORA</span><b></b></div><button class="b3-x" aria-label="${T('x')}">×</button></div>
  <div class="b3-st"><div class="b3-sc"><div class="b3-3d"></div></div></div><div class="b3-ld"><i></i><span>${T('load')}</span></div>
  <div class="b3-bot"><div class="b3-hint">${T('hint')}</div><div class="b3-dots"></div><div class="b3-tabs"></div><div class="b3-act"><button data-a="save">⤓ ${T('save')}</button></div><div class="b3-card" hidden></div><div class="b3-note">${T('note')}</div></div>`;
  document.body.appendChild(ov); document.documentElement.classList.add('b3-on'); requestAnimationFrame(() => ov.classList.add('in'));
  const $ = s => ov.querySelector(s), st = $('.b3-st'), sc3 = $('.b3-sc'), l3 = $('.b3-3d');
  let closed = false, cur = -1, canvas = null;
  const onPop = () => close(true); try { history.pushState({ b3: 1 }, ''); addEventListener('popstate', onPop); } catch (e) { }
  const onKey = e => { if (e.key == 'Escape') close(); }; addEventListener('keydown', onKey);
  const scenes = [];
  if (cfg.charms.length || cfg.carrier) scenes.push({ k: 'b', label: T('bracelet') });
  for (const it of cfg.pieces) scenes.push({ k: 'p', it, label: it.n });
  const cache = {};
  let dangles = [];
  function setPic(c) {
    canvas = c; l3.innerHTML = ''; dangles = []; sc3.classList.remove('on'); if (!c) return;
    const W = c.width, H = c.height; l3.style.width = W + 'px'; l3.style.height = H + 'px';
    const put = (cv, x, y, w, h, z, cls) => { const e = document.createElement('canvas'); e.width = cv.width; e.height = cv.height; e.getContext('2d').drawImage(cv, 0, 0); e.className = cls || ''; Object.assign(e.style, { left: x + 'px', top: y + 'px', width: w + 'px', height: h + 'px' }); e.style.setProperty('--z', z + 'px'); l3.appendChild(e); return e; };
    if (c.base) {
      put(c.base, c.dx, c.dy, c.base.width, c.base.height, 0);
      c.layers.forEach((L, i) => {
        const e = put(L.cv, c.dx + L.px - L.ox, c.dy + L.py - L.oy, L.w, L.h, 26 + i * 1.5, 'b3-ch');
        e.style.transformOrigin = L.ox + 'px ' + L.oy + 'px'; e.dataset.rot = L.rot; if (L.dangle) dangles.push({ e, a: 0, v: 0 }); else e.style.setProperty('--r', L.rot + 'rad');
      });
    } else put(c, 0, 0, W, H, 0);
    fit(); requestAnimationFrame(() => requestAnimationFrame(() => sc3.classList.add('on')));
  }
  function fit() { if (!canvas) return; const r = st.getBoundingClientRect(), k = Math.min((r.width - 24) / canvas.width, (r.height - 16) / canvas.height, 1.6); l3.style.setProperty('--k', k); sc3.style.width = canvas.width * k + 'px'; sc3.style.height = canvas.height * k + 'px'; }
  const onRs = () => fit(); addEventListener('resize', onRs);
  // gentle movement: drag (or tilt the phone) to turn the picture a little; charms float just above the chain and dangles swing
  const M = { rx: 0, ry: 0, tx: 0, ty: 0, drag: null, t0: performance.now(), user: 0, tilt: null };
  st.addEventListener('pointerdown', e => { M.drag = { x: e.clientX, y: e.clientY, rx: M.tx, ry: M.ty }; M.user = performance.now(); try { st.setPointerCapture(e.pointerId); } catch (_) { } });
  st.addEventListener('pointermove', e => { if (!M.drag) return; M.ty = clamp(M.drag.ry + (e.clientX - M.drag.x) * .12, -24, 24); M.tx = clamp(M.drag.rx - (e.clientY - M.drag.y) * .1, -16, 16); M.user = performance.now(); });
  const end = e => { if (!M.drag) return; const s = scenes[cur], d = e.clientX - M.drag.x; M.drag = null; M.user = performance.now(); if (s && s.k == 'p' && s.urls && s.urls.length > 1 && Math.abs(d) > 60) show(cur, ((s.view || 0) + (d < 0 ? 1 : -1) + s.urls.length) % s.urls.length); };
  st.addEventListener('pointerup', end); st.addEventListener('pointercancel', end);
  const onTilt = e => { if (e.gamma == null) return; if (!M.tilt) M.tilt = { g: e.gamma, b: e.beta }; if (M.drag || performance.now() - M.user < 1500) return; M.ty = clamp((e.gamma - M.tilt.g) * .6, -20, 20); M.tx = clamp(-(e.beta - M.tilt.b) * .4, -14, 14); M.tiltAt = performance.now(); };
  addEventListener('deviceorientation', onTilt);
  let raf = 0, last = performance.now();
  const loop = now => {
    raf = requestAnimationFrame(loop); const dt = Math.min(.05, (now - last) / 1000); last = now;
    const idle = !M.drag && now - M.user > 2500 && !(M.tiltAt && now - M.tiltAt < 800);
    if (idle) { const t = (now - M.t0) / 1000; M.ty += (Math.sin(t * .55) * 9 - M.ty) * Math.min(1, dt * 1.5); M.tx += (Math.sin(t * .37) * 3 - M.tx) * Math.min(1, dt * 1.5); }
    const pry = M.ry; M.rx += (M.tx - M.rx) * Math.min(1, dt * 9); M.ry += (M.ty - M.ry) * Math.min(1, dt * 9);
    l3.style.transform = `scale(var(--k)) rotateX(${M.rx.toFixed(2)}deg) rotateY(${M.ry.toFixed(2)}deg)`;
    const w = (M.ry - pry) / Math.max(dt, 1e-3);
    for (const D of dangles) { D.v += (-D.a * 38 - D.v * 3.2 - w * .9 - M.ry * .25) * dt; D.a = clamp(D.a + D.v * dt, -28, 28); D.e.style.setProperty('--r', D.a.toFixed(2) + 'deg'); }
  };
  raf = requestAnimationFrame(loop);
  async function build(s) {
    if (s.k == 'b') {
      const list = []; for (const it of cfg.charms) for (let i = 0; i < (it.q || 1); i++) list.push(it);
      const [bc, ...cs] = await Promise.all([
        (async () => { try { const u = cfg.carrier && (angleImgs(cfg.carrier.im)[0] || (cfg.carrier.im || [])[0]); return u ? cutout(await getImg(cfg, u, 1200), 1100) : null; } catch (e) { return null; } })(),
        ...list.slice(0, 20).map(it => prepCharm(cfg, it).catch(() => null))
      ]);
      const charms = cs.filter(Boolean);
      if (bc) { const sz = cfg.carrier && /(\d+(\.\d+)?)\s*cm/i.test(cfg.carrier.size || '') ? parseFloat(RegExp.$1) : 18; return compose(bc.canvas, findRing(bc), charms, sz); }
      return charms.length ? row(charms) : null;
    }
    const urls = angleImgs(s.it.im); s.urls = urls.length ? urls : (s.it.im || []).slice(0, 1); s.view = s.view || 0;
    const c = cutout(await getImg(cfg, s.urls[s.view], 1000), 900); return c ? trim(c.canvas) : null;
  }
  async function show(i, view) {
    cur = i; const s = scenes[i]; if (view != null) s.view = view;
    $('.b3-tt b').textContent = s.k == 'b' ? T('title') : T('titleP');
    renderTabs(); renderCard(); $('.b3-ld').hidden = false; $('.b3-dots').innerHTML = ''; setPic(null);
    const key = i + ':' + (s.view || 0);
    let c = cache[key]; if (!c) { try { c = await build(s); } catch (e) { c = null; } cache[key] = c; }
    if (closed || cur != i) return;
    $('.b3-ld').hidden = true;
    if (!c) { $('.b3-ld').hidden = false; $('.b3-ld i').style.display = 'none'; $('.b3-ld span').textContent = T('fail'); return; }
    $('.b3-ld i').style.display = '';
    setPic(c);
    $('.b3-dots').innerHTML = s.k == 'p' && s.urls.length > 1 ? s.urls.map((u, j) => `<button class="${j == (s.view || 0) ? 'on' : ''}" data-v="${j}" aria-label="${T('angle')} ${j + 1}"></button>`).join('') : '';
  }
  function renderTabs() { const el = $('.b3-tabs'); el.hidden = scenes.length < 2; el.innerHTML = scenes.map((s, i) => `<button class="${i == cur ? 'on' : ''}" data-i="${i}">${esc(short(s.label))}</button>`).join(''); }
  function renderCard() {
    const el = $('.b3-card'), f = cfg.fallback; if (!f || scenes[cur].k != 'b') { el.hidden = true; return; }
    el.hidden = false; const on = cfg.isOnList(f.id);
    el.innerHTML = `<div><small>${T('shown')}</small><b>${esc(f.n)}</b><span>${cfg.fmt(f.p)}</span></div><button data-a="addc" ${on ? 'disabled' : ''}>${on ? T('added') : T('add')}</button>`;
  }
  ov.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.classList.contains('b3-x')) return close();
    if (b.dataset.i != null) return show(+b.dataset.i);
    if (b.dataset.v != null) return show(cur, +b.dataset.v);
    if (b.dataset.a == 'save') savePic();
    if (b.dataset.a == 'addc' && cfg.fallback) { cfg.onAdd(cfg.fallback.id); renderCard(); }
  });
  async function savePic() {
    if (!canvas) return; const blob = await new Promise(r => canvas.toBlob(r, 'image/png')); if (!blob) return;
    const f = new File([blob], 'pandora-bracelet.png', { type: 'image/png' });
    try { if (navigator.canShare && navigator.canShare({ files: [f] })) { await navigator.share({ files: [f], title: 'Pandora' }); return; } } catch (e) { if (e && e.name == 'AbortError') return; }
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'pandora-bracelet.png'; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  }
  $('.b3-x').onclick = () => close();
  function close(fromPop) {
    if (closed) return; closed = true; cancelAnimationFrame(raf); removeEventListener('resize', onRs); removeEventListener('deviceorientation', onTilt); removeEventListener('keydown', onKey); removeEventListener('popstate', onPop);
    if (!fromPop) { try { if (history.state && history.state.b3) history.back(); } catch (e) { } }
    ov.classList.remove('in'); document.documentElement.classList.remove('b3-on'); setTimeout(() => { ov.remove(); cfg.onClose && cfg.onClose(); }, 260);
  }
  if (!scenes.length) return close();
  show(0);
}
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const short = s => s.length > 34 ? s.slice(0, 32).replace(/\s+\S*$/, '') + '…' : s;
function injectCSS() {
  if (document.getElementById('b3css')) return;
  const s = document.createElement('style'); s.id = 'b3css';
  s.textContent = `
html.b3-on,html.b3-on body{overflow:hidden}
.b3{position:fixed;inset:0;z-index:9000;display:flex;flex-direction:column;background:rgba(253,243,243,.9);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);opacity:0;transition:opacity .25s;color:#4a2f35;font-family:inherit}
.b3.in{opacity:1}
.b3-top{display:flex;justify-content:space-between;align-items:flex-start;padding:calc(18px + env(safe-area-inset-top,0px)) 18px 0}
.b3-tt{display:flex;flex-direction:column;gap:6px}.b3-k{font-size:10px;letter-spacing:.38em;color:#a58f94}.b3-tt b{font:400 26px/1.15 Lora,Georgia,serif}
html[dir=rtl] .b3-tt b{font-family:Cairo,system-ui,sans-serif;font-weight:500}
.b3-x{width:44px;height:44px;border-radius:50%;background:#fff;border:1px solid #f5dcdf;font-size:26px;line-height:1;color:#4a2f35}
.b3-st{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:10px 16px}
.b3-st{touch-action:none;cursor:grab;perspective:1400px;position:relative}.b3-st:active{cursor:grabbing}
.b3-sc{position:relative;opacity:0;transform:translateY(10px);transition:opacity .5s,transform .6s cubic-bezier(.2,.8,.2,1)}.b3-sc.on{opacity:1;transform:none}
.b3-3d{position:absolute;left:0;top:0;transform-origin:0 0;transform-style:preserve-3d;will-change:transform}
.b3-3d canvas{position:absolute;display:block;transform:translateZ(var(--z,0px)) rotate(var(--r,0rad));filter:drop-shadow(0 16px 22px rgba(74,47,53,.13))}
.b3-3d canvas.b3-ch{filter:drop-shadow(0 6px 8px rgba(74,47,53,.22))}
.b3-ld{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;font-size:13px;color:#a58f94;pointer-events:none;text-align:center;padding:0 30px}
.b3-ld[hidden]{display:none}.b3-ld i{width:52px;height:52px;border-radius:50%;border:2px solid #f5dcdf;border-top-color:#ff9aa2;animation:b3r 1s linear infinite}@keyframes b3r{to{transform:rotate(360deg)}}
.b3-bot{padding:0 14px calc(14px + env(safe-area-inset-bottom,0px));display:flex;flex-direction:column;align-items:center;gap:10px}
.b3-dots{display:flex;gap:8px}.b3-dots button{width:9px;height:9px;border-radius:50%;background:#f5dcdf}.b3-dots button.on{background:#ff9aa2;width:22px;border-radius:9px}
.b3-tabs{display:flex;gap:6px;overflow-x:auto;max-width:100%;scrollbar-width:none}.b3-tabs::-webkit-scrollbar{display:none}.b3-tabs[hidden]{display:none}
.b3-tabs button{flex:none;font-size:12.5px;padding:8px 14px;border-radius:99px;border:1px solid #f5dcdf;background:#fff;white-space:nowrap}.b3-tabs button.on{background:#4a2f35;color:#fdf3f3;border-color:#4a2f35}
.b3-act button{font-size:13px;padding:11px 20px;border-radius:99px;background:#fff;border:1px solid #f5dcdf}
.b3-card{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid #f5dcdf;border-radius:16px;padding:10px 10px 10px 14px;max-width:min(94vw,520px);width:100%}.b3-card[hidden]{display:none}
.b3-card div{flex:1;min-width:0;display:flex;flex-direction:column;font-size:12.5px;line-height:1.3}.b3-card small{color:#a58f94;font-size:11px}.b3-card b{font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.b3-card button{flex:none;font-size:12.5px;padding:10px 14px;border-radius:99px;background:#4a2f35;color:#fdf3f3}.b3-card button[disabled]{background:#f5dcdf;color:#4a2f35}
.b3-hint{font-size:11.5px;color:#a58f94}.b3-note{font-size:10.5px;color:#a58f94;text-align:center;max-width:420px}
@media(min-width:800px){.b3-tt b{font-size:32px}.b3-top{padding:26px 34px 0}.b3-st{padding:20px 60px}}
`;
  document.head.appendChild(s);
}
