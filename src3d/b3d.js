/* Pandora Menu — live 360° view of the customer's list.
   Charms are turned into real 3D solids from their own product photos (background removed, rounded
   thickness, the photo on both faces), threaded onto a modelled chain whose clasp opens.
   Source of /b3d.js — rebuild with:  bun build src3d/b3d.js --minify --outfile b3d.js --format esm   */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Object3D, Mesh, BufferGeometry, Float32BufferAttribute,
  MeshPhysicalMaterial, MeshBasicMaterial, CanvasTexture, SRGBColorSpace, PMREMGenerator, Vector3, Matrix4,
  Quaternion, Color, TubeGeometry, Curve, SphereGeometry, LatheGeometry, Vector2, ExtrudeGeometry, Shape,
  PlaneGeometry, Raycaster, RepeatWrapping, NeutralToneMapping, DoubleSide, Sprite, SpriteMaterial,
  AdditiveBlending, TorusGeometry
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const PI = Math.PI, TAU = PI * 2;
const clamp = (x, a, b) => x < a ? a : x > b ? b : x;
const sm = x => (x = clamp(x, 0, 1), x * x * (3 - 2 * x));
const eio = x => (x = clamp(x, 0, 1), x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
const eo = x => 1 - Math.pow(1 - clamp(x, 0, 1), 3);

const METAL = { Silver: '#e4e5ea', Gold: '#f2c98a', Rose: '#f0bcaa' };
const TXT = {
  title: ['Your pieces in 360°', 'قطعك بزاوية 360°'],
  load: ['Preparing your pieces…', 'جارٍ تجهيز قطعك…'],
  hint: ['Drag to turn · pinch to zoom · tap a piece', 'اسحب للتدوير · قرّب بإصبعين · اضغط على أي قطعة'],
  replay: ['Replay', 'إعادة'],
  open: ['Open clasp', 'افتح القفل'], close: ['Close clasp', 'أغلق القفل'],
  save: ['Save picture', 'حفظ صورة'],
  bracelet: ['Bracelet', 'السوار'],
  shown: ['Shown on', 'معروض على'],
  add: ['+ Add to my list', '+ أضف إلى قائمتي'], added: ['✓ On your list', '✓ في قائمتك'],
  note: ['Preview made from the product photos — the real pieces are waiting in store.', 'معاينة من صور القطع — القطع الحقيقية بانتظارك في الفرع.'],
  fail: ['3D view is not available on this device.', 'العرض ثلاثي الأبعاد غير متاح على هذا الجهاز.'],
  x: ['Close', 'إغلاق'], skip: ['Tap to skip', 'اضغط للتخطي']
};

/* ---------------- images ---------------- */
const loadImg = src => new Promise((res, rej) => { const i = new Image(); i.crossOrigin = 'anonymous'; i.decoding = 'async'; i.onload = () => res(i); i.onerror = rej; i.src = src; });
async function getImg(cfg, u, w) {
  try { return await loadImg(cfg.base + u + (u.includes('?') ? '&' : '?') + 'width=' + w + '&b3=1'); }
  catch (e) { return await loadImg('/api/img?u=' + encodeURIComponent(u) + '&w=' + w); }
}
const frontImg = im => (im || []).find(u => /_1\.(jpe?g|png|webp)/i.test(u)) || (im || []).find(u => !/_M\d?\./.test(u)) || (im || [])[0];

/* Photo → cut-out: removes the studio background (flood fill from the edges + enclosed holes such as the
   inside of a ring), keeps the piece, soft edges, and spreads edge colours outward so no white fringe shows. */
function cutout(img) {
  const S = 512, k = Math.min(1, S / Math.max(img.naturalWidth || img.width, img.naturalHeight || img.height));
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
  const push = i => { if (!bgm[i] && dist[i] < TOL) { bgm[i] = 1; q[qt++] = i; } };
  for (let i = 0; i < W; i++) { push(i); push((H - 1) * W + i); }
  for (let j = 0; j < H; j++) { push(j * W); push(j * W + W - 1); }
  while (qh < qt) { const i = q[qh++], px = i % W, py = (i / W) | 0; if (px > 0) push(i - 1); if (px < W - 1) push(i + 1); if (py > 0) push(i - W); if (py < H - 1) push(i + W); }
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
  for (let i = 0; i < N; i++) {
    if (!alpha[i]) continue; const px = i % W, py = (i / W) | 0;
    const edge = (px > 0 && !alpha[i - 1]) || (px < W - 1 && !alpha[i + 1]) || (py > 0 && !alpha[i - W]) || (py < H - 1 && !alpha[i + W]);
    if (edge) alpha[i] = clamp((dist[i] - 4) / 26, .35, 1);
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

/* Cut-out → a real 3D solid: a grid over the silhouette, lifted into a rounded "pillow" (dome for beads,
   flat top with rounded edges for dangles/rings), mirrored to the back, and closed with side walls. */
function solid(cut, o) {
  const { A, cw, ch } = cut, Ng = o.grid || 84, cell = Math.max(cw, ch) / Ng;
  const nx = Math.ceil(cw / cell), ny = Math.ceil(ch / cell);
  const sa = (x, y) => { // bilinear alpha
    x = clamp(x, 0, cw - 1.001); y = clamp(y, 0, ch - 1.001); const i = x | 0, j = y | 0, fx = x - i, fy = y - j, b = j * cw + i;
    return A[b] * (1 - fx) * (1 - fy) + A[b + 1] * fx * (1 - fy) + A[b + cw] * (1 - fx) * fy + A[b + cw + 1] * fx * fy;
  };
  const V = (nx + 1) * (ny + 1), inside = new Uint8Array(V), vx = new Float32Array(V), vy = new Float32Array(V);
  for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) { const v = j * (nx + 1) + i; vx[v] = i * cell; vy[v] = j * cell; inside[v] = sa(i * cell, j * cell) >= .5 ? 1 : 0; }
  const tris = [];
  const cross = (a, b, c) => (vx[b] - vx[a]) * (-(vy[c] - vy[a])) - (-(vy[b] - vy[a])) * (vx[c] - vx[a]);
  const add = (a, b, c) => { if (cross(a, b, c) < 0) tris.push(a, c, b); else tris.push(a, b, c); };
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const a = j * (nx + 1) + i, b = a + 1, c = a + nx + 1, e = c + 1, n = inside[a] + inside[b] + inside[c] + inside[e];
    if (n == 4) { add(a, b, e); add(a, e, c); }
    else if (n == 3) { const q = [a, b, e, c].filter(v => inside[v]); add(q[0], q[1], q[2]); }
  }
  if (tris.length < 6) return null;
  // boundary edges
  const em = new Map();
  for (let t = 0; t < tris.length; t += 3) for (let k = 0; k < 3; k++) { const a = tris[t + k], b = tris[t + (k + 1) % 3], key = a < b ? a * 1e6 + b : b * 1e6 + a, r = em.get(key); if (r) r.n++; else em.set(key, { a, b, n: 1 }); }
  const bnd = [...em.values()].filter(e => e.n == 1), isB = new Uint8Array(V), nb = new Map();
  for (const e of bnd) { isB[e.a] = isB[e.b] = 1; (nb.get(e.a) || nb.set(e.a, []).get(e.a)).push(e.b); (nb.get(e.b) || nb.set(e.b, []).get(e.b)).push(e.a); }
  // smooth the silhouette (removes the grid staircase)
  for (let it = 0; it < 3; it++) { const px = vx.slice(), py = vy.slice(); for (const [v, n] of nb) if (n.length == 2) { vx[v] = .5 * px[v] + .25 * (px[n[0]] + px[n[1]]); vy[v] = .5 * py[v] + .25 * (py[n[0]] + py[n[1]]); } }
  // distance to edge (chamfer) → height
  const used = new Uint8Array(V); for (const t of tris) used[t] = 1;
  const D = new Float32Array(V).fill(1e9);
  for (let v = 0; v < V; v++) if (!used[v] || isB[v]) D[v] = used[v] ? 1 : 0;
  const W1 = nx + 1;
  for (let pass = 0; pass < 2; pass++) {
    for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) { const v = j * W1 + i; if (D[v] <= 1) continue; let m = D[v]; if (i > 0) m = Math.min(m, D[v - 1] + 1); if (j > 0) m = Math.min(m, D[v - W1] + 1); if (i > 0 && j > 0) m = Math.min(m, D[v - W1 - 1] + 1.414); if (i < nx && j > 0) m = Math.min(m, D[v - W1 + 1] + 1.414); D[v] = m; }
    for (let j = ny; j >= 0; j--) for (let i = nx; i >= 0; i--) { const v = j * W1 + i; if (D[v] <= 1) continue; let m = D[v]; if (i < nx) m = Math.min(m, D[v + 1] + 1); if (j < ny) m = Math.min(m, D[v + W1] + 1); if (i < nx && j < ny) m = Math.min(m, D[v + W1 + 1] + 1.414); if (i > 0 && j < ny) m = Math.min(m, D[v + W1 - 1] + 1.414); D[v] = m; }
  }
  let dmax = 1; for (let v = 0; v < V; v++) if (used[v] && D[v] < 1e8 && D[v] > dmax) dmax = D[v];
  const cap = Math.max(1.5, Math.min(dmax, o.capF * Math.min(nx, ny))), hmin = .2, Hh = new Float32Array(V);
  for (let v = 0; v < V; v++) if (used[v]) { const t = clamp((D[v] - 1) / (cap - 1 || 1), 0, 1); Hh[v] = hmin + (1 - hmin) * Math.sqrt(1 - (1 - t) * (1 - t)); }
  for (let it = 0; it < 2; it++) { const h = Hh.slice(); for (let j = 1; j < ny; j++) for (let i = 1; i < nx; i++) { const v = j * W1 + i; if (!used[v] || isB[v]) continue; let s = h[v] * 2, n = 2; for (const u of [v - 1, v + 1, v - W1, v + W1]) if (used[u]) { s += h[u]; n++; } Hh[v] = s / n; } }
  // build
  const mm = o.mm, ox = o.wx, oy = o.wy, Hd = o.half;
  const P = [], UV = [], I = [], map = new Int32Array(V).fill(-1), mapB = new Int32Array(V).fill(-1);
  const X = v => (vx[v] - ox) * mm, Y = v => -(vy[v] - oy) * mm, U = v => clamp(vx[v] / cw, 0, 1), Vv = v => 1 - clamp(vy[v] / ch, 0, 1);
  const vert = (v, back) => { const m = back ? mapB : map; if (m[v] < 0) { m[v] = P.length / 3; P.push(X(v), Y(v), (back ? -1 : 1) * Hh[v] * Hd); UV.push(U(v), Vv(v)); } return m[v]; };
  for (let t = 0; t < tris.length; t += 3) { const a = tris[t], b = tris[t + 1], c = tris[t + 2]; I.push(vert(a), vert(b), vert(c)); I.push(vert(a, 1), vert(c, 1), vert(b, 1)); }
  // walls: boundary edges in CCW triangles have the outside on their right
  const dir = new Map(); for (let t = 0; t < tris.length; t += 3) for (let k = 0; k < 3; k++) { const a = tris[t + k], b = tris[t + (k + 1) % 3]; dir.set(a * 1e6 + b, 1); }
  for (const e of bnd) {
    let a = e.a, b = e.b; if (!dir.has(a * 1e6 + b)) { const s = a; a = b; b = s; }
    const s = P.length / 3, ha = Hh[a] * Hd, hb = Hh[b] * Hd;
    P.push(X(a), Y(a), ha, X(b), Y(b), hb, X(b), Y(b), -hb, X(a), Y(a), -ha);
    UV.push(U(a), Vv(a), U(b), Vv(b), U(b), Vv(b), U(a), Vv(a));
    I.push(s + 1, s, s + 3, s + 1, s + 3, s + 2);
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(P, 3)); g.setAttribute('uv', new Float32BufferAttribute(UV, 2)); g.setIndex(I); g.computeVertexNormals(); g.computeBoundingBox(); g.computeBoundingSphere();
  // height lookup for sparkles
  g.userData.hAt = (px, py) => { const i = clamp(Math.round(px / cell), 0, nx), j = clamp(Math.round(py / cell), 0, ny); return Hh[j * W1 + i] * Hd; };
  return g;
}

/* where the wire passes through a piece (image px in the cut-out) */
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

const charmKind = it => { const f = it.f || '', n = (it.n || '').toLowerCase(); if (f == 'Dangle' || f == 'Medallion' || /\bdangle\b/.test(n)) return 'dangle'; if (f == 'Clip' || /\bclip\b/.test(n)) return 'clip'; if (f == 'Spacer' || /spacer/.test(n)) return 'spacer'; if (f == 'Link' || /openable link/.test(n)) return 'link'; return 'bead'; };
const charmSize = (it, kind) => { const n = (it.n || '').toLowerCase(); if (kind == 'dangle') return it.f == 'Medallion' ? 15 : 17; if (kind == 'clip') return 8.6; if (kind == 'spacer') return 6.8; if (kind == 'link') return 9; if (/\bmini\b/.test(n)) return 7.6; if (/murano/.test(n)) return 12; return 10.6; };

/* ---------------- procedural textures ---------------- */
function normalTex(kind) {
  const w = 256, h = 64, c = document.createElement('canvas'); c.width = w; c.height = h; const x = c.getContext('2d'), im = x.createImageData(w, h), d = im.data;
  const ht = (i, j) => {
    i = (i + w) % w; j = (j + h) % h;
    if (kind == 'cord') { const a = Math.sin((i * 2 + j * 4) / w * TAU * 4), b = Math.sin((i * 2 - j * 4) / w * TAU * 4); return Math.max(a, b) * .5 + .5; }
    if (kind == 'leather') return .5 + .08 * Math.sin(i * .9) * Math.sin(j * 1.3);
    const p = 32, ph = ((i + j * (kind == 'twist' ? 2 : .5)) % p) / p; return Math.pow(Math.sin(PI * ph), .55);
  };
  const s = kind == 'cord' ? 2.2 : kind == 'leather' ? 1 : 2.6;
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) { let nx = -(ht(i + 1, j) - ht(i - 1, j)) * s, ny = -(ht(i, j + 1) - ht(i, j - 1)) * s, nz = 1; const l = Math.hypot(nx, ny, nz); const o = (j * w + i) * 4; d[o] = (nx / l * .5 + .5) * 255; d[o + 1] = (ny / l * .5 + .5) * 255; d[o + 2] = (nz / l * .5 + .5) * 255; d[o + 3] = 255; }
  x.putImageData(im, 0, 0); const t = new CanvasTexture(c); t.wrapS = t.wrapT = RepeatWrapping; return t;
}
function glowTex() {
  const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
  const g = x.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(.12, 'rgba(255,255,255,.75)'); g.addColorStop(.35, 'rgba(255,240,245,.14)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  x.globalCompositeOperation = 'lighter';
  for (const [a, l] of [[0, 62], [PI / 2, 62], [PI / 4, 30], [-PI / 4, 30]]) { x.save(); x.translate(64, 64); x.rotate(a); const lg = x.createLinearGradient(-l, 0, l, 0); lg.addColorStop(0, 'rgba(255,255,255,0)'); lg.addColorStop(.5, 'rgba(255,255,255,.95)'); lg.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = lg; x.fillRect(-l, -1.2, l * 2, 2.4); x.restore(); }
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; return t;
}
function shadowTex(ring) {
  const c = document.createElement('canvas'); c.width = c.height = 256; const x = c.getContext('2d'), g = x.createRadialGradient(128, 128, 0, 128, 128, 128);
  if (ring) { g.addColorStop(0, 'rgba(74,47,53,0.04)'); g.addColorStop(.52, 'rgba(74,47,53,0.10)'); g.addColorStop(.74, 'rgba(74,47,53,0.42)'); g.addColorStop(.86, 'rgba(74,47,53,0.16)'); g.addColorStop(1, 'rgba(74,47,53,0)'); }
  else { g.addColorStop(0, 'rgba(74,47,53,0.40)'); g.addColorStop(.5, 'rgba(74,47,53,0.16)'); g.addColorStop(1, 'rgba(74,47,53,0)'); }
  x.fillStyle = g; x.fillRect(0, 0, 256, 256); const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; return t;
}

/* ---------------- the carrier (chain / bangle) ---------------- */
function carrierSpec(it) {
  const n = (it ? it.n : '').toLowerCase(), m = it ? it.m || 'Silver' : 'Silver';
  const lenMm = it && /(\d+(\.\d+)?)\s*cm/i.test(it.size || '') ? parseFloat(RegExp.$1) * 10 : 180;
  let kind = 'snake', col = METAL[m] || METAL.Silver, rough = .2, rw = 1.5;
  if (it && it.f == 'Bangle') { kind = 'bangle'; rw = 1.7; rough = .14; }
  else if (/textile cord|braided/.test(n)) { kind = 'cord'; rw = 1.65; rough = .85; const cc = { blue: '#2e4a8f', red: '#a3242f', purple: '#5d3f8e', black: '#26232a', turquoise: '#2aa3a8', pink: '#e89aa8' }; const k = Object.keys(cc).find(k => n.includes(k)); col = k ? cc[k] : '#5d3f8e'; }
  else if (/leather/.test(n)) { kind = 'leather'; rw = 1.9; rough = .7; col = /black/.test(n) ? '#2a2326' : /pink/.test(n) ? '#d99aa5' : /blue/.test(n) ? '#33476e' : '#6b4231'; }
  else if (/twisted/.test(n)) kind = 'twist';
  else if (/studded/.test(n)) kind = 'stud';
  const clasp = kind == 'bangle' ? 'ball' : /heart[- ](shaped )?clasp|t-bar heart/.test(n) ? 'heart' : 'barrel';
  const claspCol = /14k gold-plated (heart )?clasp/.test(n) ? METAL.Gold : /14k rose gold-plated (heart )?clasp/.test(n) ? METAL.Rose : (kind == 'cord' || kind == 'leather' ? METAL[m] || METAL.Silver : col);
  return { kind, col, rough, rw, clasp, claspCol, metal: m, R: clamp(lenMm, 150, 240) / TAU };
}

/* ---------------- main ---------------- */
export function open(cfg) {
  const ar = cfg.lang == 'ar', T = k => TXT[k][ar ? 1 : 0];
  injectCSS();
  const ov = document.createElement('div'); ov.className = 'b3'; ov.dir = ar ? 'rtl' : 'ltr';
  ov.innerHTML = `<div class="b3-top"><div class="b3-tt"><span class="b3-k">PANDORA</span><b>${T('title')}</b></div><button class="b3-x" aria-label="${T('x')}">×</button></div>
  <div class="b3-st"></div><div class="b3-lb" hidden></div><div class="b3-ld"><i></i><span>${T('load')}</span></div>
  <div class="b3-bot"><div class="b3-hint">${T('hint')}</div><div class="b3-tabs"></div><div class="b3-act"></div><div class="b3-card" hidden></div><div class="b3-note">${T('note')}</div></div>`;
  document.body.appendChild(ov); document.documentElement.classList.add('b3-on');
  requestAnimationFrame(() => ov.classList.add('in'));
  const $ = s => ov.querySelector(s);
  let closed = false;
  const onPop = () => close(true);
  try { history.pushState({ b3: 1 }, ''); addEventListener('popstate', onPop); } catch (e) { }

  let R;
  try { R = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' }); }
  catch (e) { $('.b3-ld span').textContent = T('fail'); $('.b3-ld i').remove(); $('.b3-x').onclick = () => close(); return; }
  R.setPixelRatio(Math.min(2, devicePixelRatio || 1)); R.setClearColor(0, 0); R.toneMapping = NeutralToneMapping; R.toneMappingExposure = 1.05;
  $('.b3-st').appendChild(R.domElement);
  const scene = new Scene(), pm = new PMREMGenerator(R), env = pm.fromScene(new RoomEnvironment(), .035).texture; scene.environment = env;
  const cam = new PerspectiveCamera(28, 1, 1, 3000);
  const world = new Group(), spin = new Group(); scene.add(world); world.add(spin);
  const shadow = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ transparent: true, depthWrite: false, opacity: .55, map: shadowTex(true) })); shadow.rotation.x = -PI / 2; scene.add(shadow);
  const glow = glowTex();
  const disposables = [env, glow, shadow.material.map, shadow.geometry, shadow.material];

  const V = { yaw: 0, el: .48, dist: 210, vy: 0, tgtDist: 210, auto: true, lastUser: 0, cy: 0 };
  let mode = null, B = null; // B = bracelet state
  const meshes = [], sparkles = [];

  function size() { const w = ov.clientWidth, h = ov.clientHeight; R.setSize(w, h, false); cam.aspect = w / h; V.fit = clamp(.78 / (w / h), 1.3, 1.85); cam.setViewOffset(w, h, 0, h * (w / h < 1 ? .075 : .03), w, h); cam.updateProjectionMatrix(); }
  size(); const onRs = () => size(); addEventListener('resize', onRs);

  /* ----- materials ----- */
  const metalMat = (col, rough, nm, rep) => { const m = new MeshPhysicalMaterial({ color: new Color(col), metalness: 1, roughness: rough, envMapIntensity: 1.25, side: DoubleSide }); if (nm) { m.normalMap = nm; m.normalScale = new Vector2(.7, .7); if (rep) nm.repeat.set(rep, 1); } disposables.push(m); return m; };
  const softMat = (col, rough, nm, rep) => { const m = new MeshPhysicalMaterial({ color: new Color(col), metalness: 0, roughness: rough, sheen: .6, sheenColor: new Color('#ffffff'), sheenRoughness: .6, normalMap: nm || null }); if (nm && rep) nm.repeat.set(rep, 1); disposables.push(m); return m; };
  const photoMat = tex => { const m = new MeshPhysicalMaterial({ map: tex, roughness: .34, metalness: 0, clearcoat: .55, clearcoatRoughness: .18, emissive: new Color('#ffffff'), emissiveMap: tex, emissiveIntensity: .2, envMapIntensity: .75 }); disposables.push(m, tex); return m; };

  /* ----- build a piece from its photo ----- */
  /* every angle photo of the piece, exactly as photographed (on-model shots skipped) */
  const angleImgs = im => { const L = (im || []).filter(u => !/m\d?\.(jpe?g|png|webp)$/i.test(u.replace(/\?.*/, ''))), n = u => { const m = u.replace(/\?.*/, '').match(/_(\d)\.(jpe?g|png|webp)$/i); return m ? +m[1] : 9; }; return L.sort((x, y) => n(x) - n(y)).slice(0, 4); };
  const viewMat = tex => { const m = new MeshBasicMaterial({ map: tex, transparent: true, alphaTest: .06, depthWrite: true, toneMapped: false, side: DoubleSide }); disposables.push(m, tex); return m; };
  async function pieceFromPhoto(it, kind, target) {
    const urls = angleImgs(it.im); if (!urls.length) return null;
    const cuts = await Promise.all(urls.map(async (u, i) => { try { const c = cutout(await getImg(cfg, u, 720)); return c && (i == 0 || (c.touch < 2 && c.fill < .9)) ? c : null; } catch (e) { return null; } }));
    if (closed || !cuts[0]) return null;
    const bb = new Object3D(), views = [];
    let wmm = 0, hmm = 0;
    cuts.forEach((cut, i) => {
      if (!cut) return;
      const wp = wirePoint(cut, kind);
      const mm = i == 0 ? (target.mmFrom == 'w' ? target.mm / Math.max(1, wp.wmax) : target.mm / Math.max(1, wp.hgt)) : hmm / Math.max(1, wp.hgt);
      if (i == 0) { wmm = wp.wmax * mm; hmm = wp.hgt * mm; }
      const ox = target.center ? cut.cw / 2 : wp.x, oy = target.center ? (wp.top + wp.bot) / 2 : wp.y;
      const g = new PlaneGeometry(cut.cw * mm, cut.ch * mm).translate((cut.cw / 2 - ox) * mm, -(cut.ch / 2 - oy) * mm, 0); disposables.push(g);
      const tex = new CanvasTexture(cut.canvas); tex.colorSpace = SRGBColorSpace; tex.anisotropy = 8;
      const m = new Mesh(g, viewMat(tex)); m.userData.item = it; m.visible = !views.length; bb.add(m); views.push(m);
    });
    // spread the photos around the piece: 1 = front, the others in their numbered order
    views.forEach((m, i) => m.userData.ang = i * TAU / views.length);
    bb.userData = { views, cur: 0, off: target.off || 0 };
    return { mesh: bb, views, wmm, hmm, kind, it };
  }

  /* ----- bracelet scene ----- */
  async function buildBracelet() {
    const sp = carrierSpec(cfg.carrier), Rr = sp.R;
    const charms = [];
    for (const it of cfg.charms) for (let k = 0; k < (it.q || 1); k++) charms.push(it);
    const built = await Promise.all(charms.slice(0, 24).map(async it => {
      const kind = charmKind(it), h = charmSize(it, kind);
      try {
        return await pieceFromPhoto(it, kind, {
          mm: h, mmFrom: 'h', off: kind == 'dangle' ? 1.6 : kind == 'link' ? 2.2 : kind == 'spacer' ? 3 : 4.2
        });
      } catch (e) { return null; }
    }));
    if (closed) return;
    const pcs = built.filter(Boolean);
    // wire geometry & layout
    const clen = sp.clasp == 'heart' ? 11 : sp.clasp == 'ball' ? 5.4 : 9.6, g = (clen / 2) / Rr, Lw = Rr * (TAU - 2 * g);
    const st = { open: 0, R: Rr, g, rigid: sp.kind == 'bangle' };
    const pt = (s, out) => {
      const th = PI + g + s * (TAU - 2 * g), x = Math.sin(th), z = Math.cos(th);
      out.set(Rr * x, 0, Rr * z);
      if (!st.rigid && st.open > 0) { let w = sm((s - .74) / .26); w *= w; const o = st.open * w; out.x += x * 13 * o; out.z += z * 13 * o; out.y += 15 * o; }
      return out;
    };
    const curve = new (class extends Curve { getPoint(t, o = new Vector3()) { return pt(t, o); } })();
    const frame = (s, obj) => {
      const p = pt(s, new Vector3()), a = pt(Math.max(0, s - .002), new Vector3()), b = pt(Math.min(1, s + .002), new Vector3());
      const t = b.sub(a).normalize(), n = new Vector3(0, 1, 0), r = new Vector3().crossVectors(t, n).normalize(); n.crossVectors(r, t);
      obj.position.copy(p); obj.quaternion.setFromRotationMatrix(new Matrix4().makeBasis(t, n, r));
    };
    const hasThreads = sp.kind != 'cord' && sp.kind != 'leather';
    const threads = hasThreads ? (sp.kind == 'bangle' ? [.12, .88] : [1 / 3, 2 / 3]) : [];
    // place clips on the threads first, then the rest from the front outward, alternating sides
    const gap = .7, toS = mmv => mmv / Lw, occ = [];
    const clipsP = pcs.filter(p => p.kind == 'clip'), rest = pcs.filter(p => p.kind != 'clip');
    for (const p of clipsP) {
      const free = threads.filter(t => !occ.some(o => Math.abs(o.c - t) < .01));
      if (free.length) { const t = free.sort((a, b) => Math.abs(a - .5) - Math.abs(b - .5))[0]; p.s = t; occ.push({ c: t, a: t - toS(p.wmm / 2), b: t + toS(p.wmm / 2) }); } else rest.push(p);
    }
    for (const t of threads) if (!occ.some(o => Math.abs(o.c - t) < .01)) occ.push({ c: t, a: t - toS(1.6), b: t + toS(1.6) });
    const hit = (a, b) => occ.some(o => a < o.b + toS(.3) && b > o.a - toS(.3));
    let rgt = .5, lft = .5, first = true, total = rest.reduce((s, p) => s + toS((p.kind == 'dangle' ? p.wmm * .55 : p.wmm) + gap), 0);
    const squeeze = total > .9 ? .9 / total : 1;
    rest.forEach((p, i) => {
      const w = toS(((p.kind == 'dangle' ? p.wmm * .55 : p.wmm) + gap) * squeeze);
      if (first) { p.s = .5; rgt = .5 + w / 2; lft = .5 - w / 2; first = false; }
      else if (i % 2) { let a = rgt; while (hit(a, a + w) && a < .98) a += toS(.5); p.s = a + w / 2; rgt = a + w; }
      else { let b = lft; while (hit(b - w, b) && b > .02) b -= toS(.5); p.s = b - w / 2; lft = b - w; }
      p.s = clamp(p.s, .04, .96);
      if (squeeze < 1) p.mesh.scale.setScalar(Math.max(.6, squeeze));
    });
    // meshes
    const nm = sp.kind == 'bangle' ? null : normalTex(sp.kind == 'stud' ? 'snake' : sp.kind);
    if (nm) disposables.push(nm);
    const wireM = sp.kind == 'cord' || sp.kind == 'leather' ? softMat(sp.col, sp.rough, nm, Lw / 8) : metalMat(sp.col, sp.rough, nm, Lw / 8);
    const claspM = metalMat(sp.claspCol, .16), darkM = metalMat(sp.claspCol, .5), threadM = metalMat(sp.claspCol, .32);
    const wire = new Mesh(new TubeGeometry(curve, 300, sp.rw, 14, false), wireM); spin.add(wire);
    const rebuildWire = () => { wire.geometry.dispose(); wire.geometry = new TubeGeometry(curve, 300, sp.rw, 14, false); };
    // chain ends: end A (into the clasp) and end B (the tongue that clicks in)
    const endA = new Mesh(new SphereGeometry(sp.rw * 1.05, 18, 12), claspM), endB = new Object3D();
    const tongue = new Mesh(new SphereGeometry(sp.rw * 1.25, 20, 14), claspM); tongue.position.x = .9; endB.add(tongue);
    const neck = new Mesh(new LatheGeometry([new Vector2(.01, -1.6), new Vector2(sp.rw * 1.1, -1.4), new Vector2(sp.rw * .9, 0), new Vector2(.01, .2)], 18).rotateZ(-PI / 2), claspM); endB.add(neck);
    spin.add(endA, endB); frame(0, endA);
    // clasp
    const clasp = new Group(); clasp.position.set(0, 0, -Rr); clasp.quaternion.setFromRotationMatrix(new Matrix4().makeBasis(new Vector3(-1, 0, 0), new Vector3(0, 1, 0), new Vector3(0, 0, -1)));
    spin.add(clasp);
    let lid = null, ballB = null;
    if (sp.clasp == 'barrel') {
      const prof = []; const hl = clen / 2, rr = 4.1;
      for (let i = 0; i <= 24; i++) { const y = -hl + clen * i / 24, t = Math.abs(y) / hl; let r = rr * Math.sqrt(Math.max(0, 1 - Math.pow(t, 3.2))); r = Math.max(r, sp.rw * 1.15); if (Math.abs(y) < .45) r -= .28; prof.push(new Vector2(r, y)); }
      const lower = new Mesh(new LatheGeometry(prof, 30, 0, PI).rotateZ(-PI / 2), claspM);
      const lidG = new LatheGeometry(prof, 30, PI, PI).rotateZ(-PI / 2);
      lid = new Group(); lid.position.set(0, 0, -rr); const lm = new Mesh(lidG, claspM); lm.position.z = rr; lid.add(lm);
      const rim = new Mesh(new TorusGeometry(rr - .2, .2, 8, 40).rotateY(PI / 2), darkM); lower.add(rim);
      clasp.add(lower, lid);
    } else if (sp.clasp == 'heart') {
      const hs = new Shape(), s = .62; hs.moveTo(0, -5 * s); hs.bezierCurveTo(-1.5 * s, -3.4 * s, -7.6 * s, 0, -7.6 * s, 3.4 * s); hs.bezierCurveTo(-7.6 * s, 7 * s, -2.6 * s, 7.9 * s, 0, 4.5 * s); hs.bezierCurveTo(2.6 * s, 7.9 * s, 7.6 * s, 7 * s, 7.6 * s, 3.4 * s); hs.bezierCurveTo(7.6 * s, 0, 1.5 * s, -3.4 * s, 0, -5 * s);
      const eg = d => new ExtrudeGeometry(hs, { depth: d, bevelEnabled: true, bevelThickness: .7, bevelSize: .7, bevelSegments: 4, curveSegments: 24 });
      const back = new Mesh(eg(1.6).translate(0, -1.2, -2.3), claspM); clasp.add(back);
      lid = new Group(); lid.position.set(0, -5 * s - 1.2, 0); const lm = new Mesh(eg(1.2).translate(0, 0, 0), claspM); lm.position.y = 5 * s; lid.add(lm); clasp.add(lid);
    } else { // bangle ball ends
      const ballA = new Mesh(new SphereGeometry(2.7, 28, 20), claspM); ballA.position.x = 2.7 - .1; clasp.add(ballA);
      ballB = new Group(); const bm = new Mesh(new SphereGeometry(2.7, 28, 20), claspM); ballB.add(bm); const groove = new Mesh(new TorusGeometry(2.62, .12, 6, 40).rotateY(PI / 2), darkM); bm.add(groove); ballB.position.x = -2.6; clasp.add(ballB);
    }
    // threads (where clips screw on) and studs
    const extras = [];
    for (const t of threads) { const pr = [new Vector2(sp.rw * .9, -1.35)]; for (let i = 0; i <= 40; i++) { const y = -1.2 + 2.4 * i / 40, e = Math.sin(PI * i / 40); pr.push(new Vector2(sp.rw + (.1 + .16 * (.5 + .5 * Math.cos(y * TAU / .45))) * Math.pow(e, .3), y)); } pr.push(new Vector2(sp.rw * .9, 1.35)); const m = new Mesh(new LatheGeometry(pr, 32).rotateZ(-PI / 2), threadM); frame(t, m); spin.add(m); extras.push(m); }
    if (sp.kind == 'stud') for (let s = .06; s < .95; s += toS(7.5)) { if (pcs.some(p => Math.abs(p.s - s) < toS(p.wmm / 2 + 2)) || threads.some(t => Math.abs(t - s) < toS(3))) continue; const m = new Mesh(new SphereGeometry(sp.rw * 1.35, 16, 12), claspM); frame(s, m); spin.add(m); }
    // charms into holders (holder = sits on the wire; swing = pendulum for dangles)
    for (const p of pcs) {
      const holder = new Object3D(); holder.add(p.mesh); spin.add(holder);
      p.holder = holder; p.phx = 0; p.vx = 0; p.phz = 0; p.vz = 0; p.prev = null; p.pv = new Vector3(); p.acc = new Vector3();
      meshes.push(...p.views);
    }
    B = { sp, st, pcs, frame, pt, rebuildWire, endB, lid, ballB, clasp, t0: performance.now() / 1000, open: 0, playing: true, lastOpen: -1, Rr };
    shadow.material.map.dispose(); shadow.material.map = shadowTex(true); shadow.scale.setScalar(Rr * 2.75); shadow.position.y = -26; disposables.push(shadow.material.map);
    V.cy = -5; V.yaw = PI; V.tgtDist = V.dist = Rr * 7.1 * (V.fit || 1); V.el = .5;
    timeline(0);
  }

  // timeline of the threading story
  function timeline(t) {
    if (!B) return;
    const n = B.pcs.length, order = [...B.pcs].sort((a, b) => a.s - b.s), stg = n > 8 ? .3 : .45, dur = 1.55;
    const tOpen = .5, tThread = 1.45, tEnd = tThread + (n ? (n - 1) * stg + dur : .6), tClose = tEnd + .15;
    B.tEnd = tClose + .9;
    const op = t < tOpen ? 0 : t < tThread ? eio((t - tOpen) / (tThread - tOpen - .1)) : t < tClose ? 1 : 1 - eio((t - tClose) / .75);
    setOpen(op);
    order.forEach((p, i) => {
      const u = (t - tThread - i * stg) / dur;
      if (u <= 0) { p.holder.visible = false; return; }
      p.holder.visible = true;
      if (u >= 1) { B.frame(p.s, p.holder); p.mesh.scale.setScalar(p.mesh.userData.sc || p.mesh.scale.x); return; }
      p.mesh.userData.sc = p.mesh.userData.sc || p.mesh.scale.x;
      if (u < .28) { const k = eo(u / .28); B.frame(1, p.holder); p.holder.position.y += 26 * (1 - k); p.holder.position.add(new Vector3(p.holder.position.x, 0, p.holder.position.z).setLength(6 * (1 - k))); p.mesh.scale.setScalar(p.mesh.userData.sc * (.4 + .6 * k)); }
      else { const k = eio((u - .28) / .72); B.frame(1 - (1 - p.s) * k, p.holder); p.mesh.scale.setScalar(p.mesh.userData.sc); }
    });
    if (!V.userSpun) V.yaw = PI * (1 - eio((t - tThread + .2) / Math.max(1.2, tEnd - tThread + .2)));
    if (t >= tClose + .75 && !B.clicked) { B.clicked = true; click(); }
    if (t >= B.tEnd) { B.playing = false; setOpenBtn(); }
  }
  function setOpen(o) {
    if (!B) return; o = clamp(o, 0, 1); B.open = o;
    if (Math.abs(o - B.lastOpen) > 1e-4) {
      B.st.open = o; if (!B.st.rigid) B.rebuildWire(); B.frame(1, B.endB); B.lastOpen = o;
      if (B.lid) B.lid.rotation.x = B.sp.clasp == 'heart' ? o * 1.55 : -o * 1.8;
      if (B.ballB) { B.ballB.position.set(-2.6 - 7 * o, 5 * o, 0); B.ballB.rotation.x = o * TAU * 1.5; }
      if (!B.playing) for (const p of B.pcs) if (p.s > .7) B.frame(p.s, p.holder);
    }
  }
  function click() {
    try { if (navigator.vibrate && (!navigator.userActivation || navigator.userActivation.hasBeenActive)) navigator.vibrate(18); } catch (e) { }
    V.shake = 1;
    for (const s of sparkles) s.userData.boost = 1;
  }

  /* ----- single piece scene ----- */
  async function buildPiece(it) {
    const c = it.c, kind = c == 3 ? 'ring' : c == 2 ? 'ear' : c == 1 ? 'neck' : 'other';
    const p = await pieceFromPhoto(it, 'piece', { mm: 46, mmFrom: 'w', center: true });
    if (closed || !p) return false;
    const holder = new Object3D(); holder.add(p.mesh); spin.add(holder); meshes.push(...p.views); PIECE = holder;
    const bb = { min: { y: -p.hmm / 2 }, max: { y: p.hmm / 2 } };
    shadow.material.map.dispose(); shadow.material.map = shadowTex(false); disposables.push(shadow.material.map); shadow.scale.set(Math.max(30, p.wmm * 1.2), 1, 1); shadow.scale.setScalar(Math.max(34, p.wmm * 1.25)); shadow.position.y = -(bb.max.y - bb.min.y) / 2 - 8;
    V.cy = 0; V.yaw = 0; V.el = .12; V.tgtDist = V.dist = Math.max(p.wmm, p.hmm) * 3.6 * (V.fit || 1);
    return true;
  }

  let PIECE = null;
  function clearScene() {
    B = null; PIECE = null; meshes.length = 0; sparkles.length = 0;
    for (const ch of [...spin.children]) { spin.remove(ch); ch.traverse(o => { if (o.geometry) o.geometry.dispose(); }); }
  }

  /* ----- tabs / actions ----- */
  const scenes = [];
  if (cfg.charms.length || cfg.carrier) scenes.push({ k: 'b', label: T('bracelet') });
  for (const it of cfg.pieces) scenes.push({ k: 'p', it, label: it.n });
  let cur = -1, loading = false;
  async function show(i) {
    if (loading || i == cur) return; loading = true; cur = i; clearScene(); ov.classList.add('busy'); $('.b3-lb').hidden = true;
    renderTabs(); renderActs();
    const s = scenes[i];
    try { if (s.k == 'b') await buildBracelet(); else await buildPiece(s.it); } catch (e) { console.warn('b3d', e); }
    ov.classList.remove('busy'); loading = false; renderActs(); renderCard();
    $('.b3-ld').hidden = true;
  }
  function renderTabs() {
    const el = $('.b3-tabs'); el.hidden = scenes.length < 2;
    el.innerHTML = scenes.map((s, i) => `<button class="${i == cur ? 'on' : ''}" data-i="${i}">${s.k == 'b' ? '◯ ' : ''}${esc(short(s.label))}</button>`).join('');
  }
  function renderActs() {
    const el = $('.b3-act'), isB = scenes[cur] && scenes[cur].k == 'b';
    el.innerHTML = (isB ? `<button data-a="replay">↻ ${T('replay')}</button>` : '') + `<button data-a="save">⤓ ${T('save')}</button>`;
    setOpenBtn();
  }
  function setOpenBtn() { const b = ov.querySelector('.b3-cl'); if (b && B) b.textContent = B.open > .5 && !B.playing ? T('close') : T('open'); }
  function renderCard() {
    const el = $('.b3-card'), f = cfg.fallback; const isB = scenes[cur] && scenes[cur].k == 'b';
    if (!isB || !f) { el.hidden = true; return; }
    el.hidden = false; const on = cfg.isOnList(f.id);
    el.innerHTML = `<div><small>${T('shown')}</small><b>${esc(f.n)}</b><span>${cfg.fmt(f.p)}</span></div><button data-a="addc" ${on ? 'disabled' : ''}>${on ? T('added') : T('add')}</button>`;
  }
  ov.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.classList.contains('b3-x')) return close();
    if (b.dataset.i != null) return show(+b.dataset.i);
    const a = b.dataset.a;
    if (a == 'replay' && B) { B.t0 = performance.now() / 1000; B.playing = true; B.clicked = false; V.userSpun = false; for (const p of B.pcs) { p.phx = p.vx = p.phz = p.vz = 0; p.prev = null; } }
    if (a == 'clasp' && B && !B.playing) { B.anim = { from: B.open, to: B.open > .5 ? 0 : 1, t0: performance.now() / 1000 }; b.textContent = B.open > .5 ? T('open') : T('close'); }
    if (a == 'save') savePic();
    if (a == 'addc' && cfg.fallback) { cfg.onAdd(cfg.fallback.id); renderCard(); }
  });

  /* ----- controls: spin, tilt, zoom, tap ----- */
  const ptrs = new Map(); let drag = null, pinch = null;
  const cv = R.domElement; cv.style.touchAction = 'none';
  cv.addEventListener('pointerdown', e => {
    cv.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (B && B.playing && (performance.now() / 1000 - B.t0) > .4) { B.t0 = performance.now() / 1000 - 100; }
    V.lastUser = performance.now();
    if (ptrs.size == 1) drag = { x: e.clientX, y: e.clientY, t: performance.now(), moved: 0 };
    else if (ptrs.size == 2) { const [a, b] = [...ptrs.values()]; pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), dist: V.tgtDist }; drag = null; }
  });
  cv.addEventListener('pointermove', e => {
    if (!ptrs.has(e.pointerId)) return; ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY }); V.lastUser = performance.now();
    if (pinch && ptrs.size == 2) { const [a, b] = [...ptrs.values()]; const d = Math.hypot(a.x - b.x, a.y - b.y); V.tgtDist = clamp(pinch.dist * pinch.d / Math.max(20, d), zmin(), zmax()); return; }
    if (!drag) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y, now = performance.now(), dt = Math.max(1, now - drag.t);
    drag.moved += Math.abs(dx) + Math.abs(dy);
    V.yaw += dx * .0085; V.el = clamp(V.el + dy * .006, -.15, 1.25); V.vy = dx * .0085 / (dt / 1000) * .9; V.userSpun = true;
    drag.x = e.clientX; drag.y = e.clientY; drag.t = now;
  });
  const up = e => {
    if (!ptrs.has(e.pointerId)) return; ptrs.delete(e.pointerId);
    if (drag && drag.moved < 8) tap(e); if (ptrs.size < 2) pinch = null; if (!ptrs.size) drag = null;
    if (drag && performance.now() - drag.t > 80) V.vy = 0;
  };
  cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  cv.addEventListener('wheel', e => { e.preventDefault(); V.tgtDist = clamp(V.tgtDist * Math.exp(e.deltaY * .0012), zmin(), zmax()); V.lastUser = performance.now(); }, { passive: false });
  let lastTap = 0;
  const zmin = () => (B ? B.Rr * 3.2 : 60), zmax = () => (B ? B.Rr * 12 : 400);
  const rc = new Raycaster();
  function tap(e) {
    const now = performance.now(); if (now - lastTap < 300) { V.tgtDist = B ? B.Rr * 7.1 * (V.fit || 1) : V.tgtDist; V.el = B ? .5 : .18; }
    lastTap = now;
    const r = cv.getBoundingClientRect(); rc.setFromCamera(new Vector2((e.clientX - r.left) / r.width * 2 - 1, -(e.clientY - r.top) / r.height * 2 + 1), cam);
    const h = rc.intersectObjects(meshes.filter(m => m.visible), false)[0], lb = $('.b3-lb');
    if (h) {
      const it = h.object.userData.item; lb.innerHTML = `<b>${esc(it.n)}</b><span>${cfg.fmt(it.p)}</span>`; lb.hidden = false; clearTimeout(lb._t); lb._t = setTimeout(() => lb.hidden = true, 4000);
      const p = B && B.pcs.find(p => p.views.includes(h.object)); if (p) p.vz += 5;
      h.object.userData.pop = 1;
    } else lb.hidden = true;
  }

  /* ----- save a transparent picture ----- */
  async function savePic() {
    const pr = R.getPixelRatio(); R.setPixelRatio(Math.min(3, pr * 1.5)); size(); R.render(scene, cam);
    const blob = await new Promise(r => R.domElement.toBlob(r, 'image/png'));
    R.setPixelRatio(pr); size();
    if (!blob) return;
    const f = new File([blob], 'pandora-360.png', { type: 'image/png' });
    try { if (navigator.canShare && navigator.canShare({ files: [f] })) { await navigator.share({ files: [f], title: 'Pandora' }); return; } } catch (e) { if (e && e.name == 'AbortError') return; }
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'pandora-360.png'; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  }

  /* ----- loop ----- */
  let raf = 0, last = performance.now();
  const gW = new Vector3(), tmpQ = new Quaternion(), wp = new Vector3();
  function loop(now) {
    raf = requestAnimationFrame(loop);
    const dt = Math.min(.05, (now - last) / 1000); last = now; const ts = now / 1000;
    if (B && B.playing) timeline((ts - B.t0) * (cfg.timeScale || 1));
    else if (B && B.anim) { const k = eio((ts - B.anim.t0) / .8); setOpen(B.anim.from + (B.anim.to - B.anim.from) * k); if (k >= 1) { if (B.anim.to == 0) click(); B.anim = null; setOpenBtn(); } }
    // spin inertia + idle auto-turn
    if (!drag) { V.yaw += V.vy * dt; V.vy *= Math.pow(.06, dt); if (Math.abs(V.vy) < .02) V.vy = 0; }
    const idle = now - V.lastUser > 3500 && !(B && (B.playing || B.anim));
    if (idle && !drag) V.yaw += dt * .32;
    V.dist += (V.tgtDist - V.dist) * (1 - Math.pow(.001, dt));
    spin.rotation.y = V.yaw;
    world.position.y = V.cy + Math.sin(ts * 1.1) * .9;
    let sx = 0, sy = 0; if (V.shake) { V.shake = Math.max(0, V.shake - dt * 3); sx = (Math.random() - .5) * V.shake * .8; sy = (Math.random() - .5) * V.shake * .8; }
    cam.position.set(sx, Math.sin(V.el) * V.dist + sy, Math.cos(V.el) * V.dist); cam.lookAt(0, V.cy * .4, 0);
    // dangles: sway driven by gravity + the motion of the bracelet
    if (B) for (const p of B.pcs) {
      if (p.kind != 'dangle' || !p.holder.visible) continue;
      p.holder.getWorldPosition(wp);
      if (p.prev) { const v = wp.clone().sub(p.prev).divideScalar(Math.max(dt, 1e-3)); const a = v.clone().sub(p.pv).divideScalar(Math.max(dt, 1e-3)); p.acc.lerp(a, .35); p.pv.copy(v); }
      p.prev = wp.clone();
      gW.set(0, -9800, 0).addScaledVector(p.acc, -9).applyQuaternion(cam.quaternion.clone().invert());
      const az = Math.atan2(gW.x, -gW.y), gz = Math.hypot(gW.x, gW.y) / 70;
      p.vz += (gz * Math.sin(az - p.phz) - 2.4 * p.vz) * dt; p.phz = clamp(p.phz + p.vz * dt, -.6, .6);
    }
    // every piece faces the viewer as its real photo; the photo shown follows the angle it is seen from
    for (const holder of (B ? B.pcs.map(p => p.holder) : PIECE ? [PIECE] : [])) {
      const bb = holder.children[0]; if (!bb || !holder.visible || !bb.userData.views) continue;
      holder.getWorldPosition(wp); holder.getWorldQuaternion(tmpQ);
      const toCam = cam.position.clone().sub(wp).normalize(), rW = new Vector3(0, 0, 1).applyQuaternion(tmpQ);
      const ang = Math.atan2(rW.z * toCam.x - rW.x * toCam.z, rW.x * toCam.x + rW.z * toCam.z), u = bb.userData, n = u.views.length;
      if (n > 1) {
        const dA = i => { let d = Math.abs(((ang - u.views[i].userData.ang) % TAU + TAU) % TAU); return Math.min(d, TAU - d); };
        let best = u.cur; for (let i = 0; i < n; i++) if (dA(i) < dA(best) - .2) best = i;
        if (best != u.cur) { u.views[u.cur].visible = false; u.views[best].visible = true; u.cur = best; }
      }
      const inv = tmpQ.clone().invert();
      bb.quaternion.copy(inv).multiply(cam.quaternion);
      const p = B && B.pcs.find(q => q.holder == holder); if (p && p.kind == 'dangle') bb.rotateZ(p.phz);
      bb.position.copy(toCam.multiplyScalar(u.off)).applyQuaternion(inv);
    }
    // sparkles twinkle with time and as the piece turns
    for (const s of sparkles) {
      const u = s.userData; s.getWorldPosition(wp); const vd = cam.position.clone().sub(wp).normalize();
      const k = Math.pow(Math.max(0, Math.sin(ts * u.sp + u.ph + spin.rotation.y * 5 + vd.y * 6)), 10);
      u.boost = Math.max(0, (u.boost || 0) - dt * 1.2);
      s.material.opacity = clamp(k * .95 + u.boost, 0, 1); s.visible = s.parent && s.parent.parent && s.parent.parent.visible !== false;
    }
    for (const m of meshes) if (m.userData.pop) { m.userData.pop = Math.max(0, m.userData.pop - dt * 3); const k = 1 + Math.sin(m.userData.pop * PI) * .12; m.scale.setScalar((m.userData.sc || 1) * k); if (!m.userData.pop) m.scale.setScalar(m.userData.sc || 1); }
    shadow.position.x = 0; shadow.position.z = 0;
    R.render(scene, cam);
  }
  raf = requestAnimationFrame(loop);
  $('.b3-x').onclick = () => close();
  const onKey = e => { if (e.key == 'Escape') close(); }; addEventListener('keydown', onKey);
  const onVis = () => { if (document.hidden) { cancelAnimationFrame(raf); raf = 0; } else if (!raf && !closed) { last = performance.now(); raf = requestAnimationFrame(loop); } };
  document.addEventListener('visibilitychange', onVis);

  function close(fromPop) {
    if (closed) return; closed = true; cancelAnimationFrame(raf);
    removeEventListener('resize', onRs); removeEventListener('keydown', onKey); removeEventListener('popstate', onPop); document.removeEventListener('visibilitychange', onVis);
    if (!fromPop) { try { if (history.state && history.state.b3) history.back(); } catch (e) { } }
    ov.classList.remove('in'); document.documentElement.classList.remove('b3-on');
    setTimeout(() => {
      clearScene(); for (const d of disposables) { try { d.dispose(); } catch (e) { } }
      pm.dispose(); R.dispose(); try { R.forceContextLoss(); } catch (e) { } ov.remove(); cfg.onClose && cfg.onClose();
    }, 260);
  }

  if (!scenes.length) { close(); return; }
  show(0);
}

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const short = s => s.length > 34 ? s.slice(0, 32).replace(/\s+\S*$/, '') + '…' : s;

function injectCSS() {
  if (document.getElementById('b3css')) return;
  const s = document.createElement('style'); s.id = 'b3css';
  s.textContent = `
html.b3-on,html.b3-on body{overflow:hidden}
.b3{position:fixed;inset:0;z-index:9000;display:flex;flex-direction:column;background:radial-gradient(120% 80% at 50% 45%,rgba(255,255,255,.55),rgba(253,243,243,.82) 60%,rgba(253,243,243,.92));-webkit-backdrop-filter:blur(18px) saturate(1.1);backdrop-filter:blur(18px) saturate(1.1);opacity:0;transition:opacity .25s;color:#4a2f35;font-family:inherit;-webkit-user-select:none;user-select:none}
.b3.in{opacity:1}
.b3-st{position:absolute;inset:0}.b3-st canvas{width:100%;height:100%;display:block;outline:none;cursor:grab}.b3-st canvas:active{cursor:grabbing}
.b3-top{position:relative;z-index:2;display:flex;justify-content:space-between;align-items:flex-start;padding:calc(18px + env(safe-area-inset-top,0px)) 18px 0;pointer-events:none}
.b3-tt{display:flex;flex-direction:column;gap:6px}.b3-k{font-size:10px;letter-spacing:.38em;color:#a58f94}.b3-tt b{font:400 24px/1.15 Lora,Georgia,serif}
html[dir=rtl] .b3-tt b{font-family:Cairo,system-ui,sans-serif;font-weight:500}
.b3-x{pointer-events:auto;width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.9);border:1px solid #f5dcdf;font-size:26px;line-height:1;color:#4a2f35;box-shadow:0 8px 22px -12px rgba(74,47,53,.5)}
.b3-lb{position:absolute;z-index:3;left:50%;top:calc(84px + env(safe-area-inset-top,0px));transform:translateX(-50%);max-width:min(88vw,460px);background:#4a2f35;color:#fdf3f3;border-radius:16px;padding:10px 16px;text-align:center;font-size:13px;line-height:1.35;box-shadow:0 14px 30px -16px rgba(74,47,53,.7);animation:b3in .25s both}
.b3-lb b{display:block;font-weight:400}.b3-lb span{color:#ff9aa2;font-size:13px}
.b3-ld{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;z-index:1;font-size:13px;letter-spacing:.06em;color:#a58f94;pointer-events:none}
.b3-ld i{width:56px;height:56px;border-radius:50%;border:2px solid #f5dcdf;border-top-color:#ff9aa2;animation:b3r 1s linear infinite}
.b3-ld[hidden]{display:none}
.b3.busy .b3-st{opacity:.25}
@keyframes b3r{to{transform:rotate(360deg)}}@keyframes b3in{from{opacity:0;transform:translate(-50%,6px)}}
.b3-bot{position:absolute;z-index:2;left:0;right:0;bottom:0;padding:0 14px calc(14px + env(safe-area-inset-bottom,0px));display:flex;flex-direction:column;align-items:center;gap:10px;pointer-events:none}
.b3-bot>*{pointer-events:auto}
.b3-hint{font-size:11.5px;color:#a58f94;letter-spacing:.04em;pointer-events:none;text-align:center}
.b3-tabs{display:flex;gap:6px;overflow-x:auto;max-width:100%;padding:2px;scrollbar-width:none}.b3-tabs::-webkit-scrollbar{display:none}.b3-tabs[hidden]{display:none}
.b3-tabs button{flex:none;font-size:12.5px;padding:8px 14px;border-radius:99px;border:1px solid #f5dcdf;background:rgba(255,255,255,.85);color:#4a2f35;white-space:nowrap}
.b3-tabs button.on{background:#4a2f35;color:#fdf3f3;border-color:#4a2f35}
.b3-act{display:flex;gap:8px;flex-wrap:wrap;justify-content:center}
.b3-act button{font-size:13px;padding:11px 18px;border-radius:99px;background:rgba(255,255,255,.92);border:1px solid #f5dcdf;color:#4a2f35;box-shadow:0 8px 20px -14px rgba(74,47,53,.55)}
.b3-act .b3-cl{background:#ff9aa2;border-color:#ff9aa2}
.b3-card{display:flex;align-items:center;gap:12px;background:rgba(255,255,255,.94);border:1px solid #f5dcdf;border-radius:16px;padding:10px 10px 10px 14px;max-width:min(94vw,520px);width:100%}
.b3-card[hidden]{display:none}
.b3-card div{flex:1;min-width:0;display:flex;flex-direction:column;font-size:12.5px;line-height:1.3}.b3-card small{color:#a58f94;font-size:11px;letter-spacing:.04em}.b3-card b{font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.b3-card button{flex:none;font-size:12.5px;padding:10px 14px;border-radius:99px;background:#4a2f35;color:#fdf3f3}.b3-card button[disabled]{background:#f5dcdf;color:#4a2f35}
.b3-note{font-size:10.5px;color:#a58f94;text-align:center;max-width:420px;pointer-events:none}
@media(min-width:800px){.b3-tt b{font-size:30px}.b3-top{padding:26px 34px 0}.b3-bot{padding-bottom:26px}}
`;
  document.head.appendChild(s);
}
