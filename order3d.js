/* Pandora Menu — "Your order in 3D"
   Shows the customer's real pieces, exactly as photographed:
   - every product photo is cut out of its white background,
   - charms are placed on the chain of the bracelet in the order (same photos, not drawings),
   - the whole set floats in a 3D scene you can turn, tilt and zoom (three.js).
   Public API:  V3.mount(hostEl, items, {img:(file,width)=>url, sample:product})   items = [{p:product, q:quantity}]
                V3.destroy()                                                        (the app calls this before every re-render) */
(function () {
"use strict";

var THREE_SRC = window.PDM_THREE_SRC || "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
var loading = null, live = null, CUT = {};          // CUT caches the cut-outs between visits

function loadThree() {
  if (window.THREE) return Promise.resolve();
  if (loading) return loading;
  loading = new Promise(function (res, rej) {
    var s = document.createElement("script");
    s.src = THREE_SRC; s.async = true; s.onload = res;
    s.onerror = function () { loading = null; rej(new Error("three.js failed to load")); };
    document.head.appendChild(s);
  });
  return loading;
}

/* ---------- styles (injected once) ---------- */
function css() {
  if (document.getElementById("v3css")) return;
  var s = document.createElement("style"); s.id = "v3css";
  s.textContent =
    ".v3stage{position:relative;width:100%;height:min(58vh,520px);min-height:340px;border-radius:20px;overflow:hidden;border:1px solid var(--line);" +
    "background:radial-gradient(ellipse at 50% 42%,#fff 0%,#fff 48%,#fff4f5 82%,#ffe9ec 100%);touch-action:none;cursor:grab;user-select:none;-webkit-user-select:none}" +
    ".v3stage.drag{cursor:grabbing}.v3stage canvas{display:block;width:100%;height:100%}" +
    ".v3hint{position:absolute;left:0;right:0;bottom:12px;text-align:center;font-size:12px;color:var(--mute);pointer-events:none;transition:opacity .6s}" +
    ".v3tools{position:absolute;right:10px;top:10px;display:flex;gap:8px}" +
    ".v3tools button{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.9);border:1px solid var(--line);font-size:16px;line-height:1;color:var(--ink)}" +
    ".v3load{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;text-align:center;padding:20px;color:var(--mute);font-size:12px;letter-spacing:.14em;text-transform:uppercase}" +
    ".v3chips{display:flex;gap:8px;overflow-x:auto;padding:14px 0 4px;margin:0 -20px;padding-left:20px;padding-right:20px;scrollbar-width:none}.v3chips::-webkit-scrollbar{display:none}" +
    ".v3chips .chip{white-space:nowrap;flex:none}" +
    ".v3note{font-size:12px;color:var(--mute);margin:10px 0 0}" +
    ".v3leg{margin:16px 0 0;border-top:1px solid var(--line)}" +
    ".v3li{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--line);font-size:13px}" +
    ".v3li img,.v3li i{width:44px;height:44px;border-radius:10px;object-fit:cover;background:#fff;border:1px solid var(--line);flex:none}" +
    ".v3li span{flex:1;min-width:0}.v3li b{font-weight:400;color:var(--mute);white-space:nowrap}" +
    ".v3fb{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:10px;padding:14px 0}" +
    ".v3fb img{width:100%;aspect-ratio:1/1;object-fit:cover;border-radius:12px;background:#fff;border:1px solid var(--line)}" +
    "@media (min-width:800px){.v3stage{height:min(66vh,620px)}.v3chips{margin:0;padding-left:0;padding-right:0;flex-wrap:wrap}}";
  document.head.appendChild(s);
}

/* ---------- small helpers ---------- */
var FILTERS = { all: "Whole order", br: "Bracelet & charms", ne: "Necklaces", ea: "Earrings", ri: "Rings" };
var CAPS = { br: 3, ch: 20, ne: 3, ea: 3, ri: 4 };
var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
var kindOf = function (p) { return ["br", "ne", "ea", "ri", "ch"][p.c]; };
var filterOf = function (kind) { return kind === "pn" ? "ne" : kind; };

function plan(items) {
  var out = { br: [], ch: [], ne: [], ea: [], ri: [] }, cut = false;
  items.forEach(function (it) {
    var k = kindOf(it.p); if (!k) return;
    for (var i = 0; i < it.q; i++) { if (out[k].length >= CAPS[k]) { cut = true; break; } out[k].push(it.p); }
  });
  return { out: out, cut: cut };
}

/* ---------- photo -> cut-out ----------
   Pandora shoots every piece on plain white. We remove that white (everything connected to the edge, plus big
   enclosed gaps like the inside of a ring) and keep the soft contact shadow. If a photo is not on white, it is
   shown as a framed photo instead.                                                                              */
function loadImage(url) {
  return new Promise(function (res) {
    var im = new Image(), done = false, t = setTimeout(function () { if (!done) { done = true; res(null); } }, 20000);
    im.crossOrigin = "anonymous";
    im.onload = function () { if (!done) { done = true; clearTimeout(t); res(im); } };
    im.onerror = function () { if (!done) { done = true; clearTimeout(t); res(null); } };
    im.src = url;
  });
}

function cutout(im, maxSide) {
  var sw = im.naturalWidth, sh = im.naturalHeight, sc = Math.min(1, maxSide / Math.max(sw, sh));
  var W = Math.max(2, Math.round(sw * sc)), H = Math.max(2, Math.round(sh * sc)), N = W * H;
  var c = document.createElement("canvas"); c.width = W; c.height = H;
  var ctx = c.getContext("2d", { willReadFrequently: true }); ctx.drawImage(im, 0, 0, W, H);
  var id = ctx.getImageData(0, 0, W, H), d = id.data, i, x, y;
  var bg = new Uint8Array(N), stack = new Int32Array(N), sp = 0;
  function near(j, th, sat) { var r = d[j * 4], g = d[j * 4 + 1], b = d[j * 4 + 2], mn = Math.min(r, g, b); return mn >= th && Math.max(r, g, b) - mn <= sat; }

  /* is the photo really on white? */
  var tot = 0, wh = 0;
  for (x = 0; x < W; x++) { tot += 2; if (near(x, 240, 12)) wh++; if (near((H - 1) * W + x, 240, 12)) wh++; }
  for (y = 0; y < H; y++) { tot += 2; if (near(y * W, 240, 12)) wh++; if (near(y * W + W - 1, 240, 12)) wh++; }
  if (wh / tot < 0.8) return { card: true, cv: c, w: W, h: H };

  /* 1) background connected to the edge */
  function seed(j) { if (!bg[j] && near(j, 241, 12)) { bg[j] = 1; stack[sp++] = j; } }
  for (x = 0; x < W; x++) { seed(x); seed((H - 1) * W + x); }
  for (y = 0; y < H; y++) { seed(y * W); seed(y * W + W - 1); }
  while (sp) {
    i = stack[--sp]; x = i % W; y = (i / W) | 0;
    if (x > 0) seed(i - 1); if (x < W - 1) seed(i + 1); if (y > 0) seed(i - W); if (y < H - 1) seed(i + W);
  }
  /* 2) big enclosed gaps (inside a ring / bracelet) */
  var seen = new Uint8Array(N), minGap = Math.max(300, N * 0.0015), comp = new Int32Array(N);
  for (i = 0; i < N; i++) {
    if (bg[i] || seen[i] || !near(i, 246, 7)) continue;
    var n = 0; seen[i] = 1; stack[sp++] = i;
    while (sp) {
      var j = stack[--sp]; comp[n++] = j; x = j % W; y = (j / W) | 0;
      if (x > 0 && !seen[j - 1] && !bg[j - 1] && near(j - 1, 246, 7)) { seen[j - 1] = 1; stack[sp++] = j - 1; }
      if (x < W - 1 && !seen[j + 1] && !bg[j + 1] && near(j + 1, 246, 7)) { seen[j + 1] = 1; stack[sp++] = j + 1; }
      if (y > 0 && !seen[j - W] && !bg[j - W] && near(j - W, 246, 7)) { seen[j - W] = 1; stack[sp++] = j - W; }
      if (y < H - 1 && !seen[j + W] && !bg[j + W] && near(j + W, 246, 7)) { seen[j + W] = 1; stack[sp++] = j + W; }
    }
    if (n >= minGap) for (var q = 0; q < n; q++) bg[comp[q]] = 1;
  }
  /* 3) alpha: soft edge, fringe un-whitened */
  var al = new Uint8Array(N), x0 = W, y0 = H, x1 = -1, y1 = -1;
  for (i = 0; i < N; i++) {
    if (bg[i]) continue;
    x = i % W; y = (i / W) | 0;
    var edge = (x > 0 && bg[i - 1]) || (x < W - 1 && bg[i + 1]) || (y > 0 && bg[i - W]) || (y < H - 1 && bg[i + W]);
    var a = 1;
    if (edge) {
      var mn = Math.min(d[i * 4], d[i * 4 + 1], d[i * 4 + 2]);
      a = clamp((255 - mn) / 42, 0.18, 1);
      if (a < 1) for (var ch = 0; ch < 3; ch++) d[i * 4 + ch] = clamp(Math.round((d[i * 4 + ch] - 255 * (1 - a)) / a), 0, 255);
    }
    al[i] = Math.round(a * 255);
    if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
  }
  if (x1 < 0) return { card: true, cv: c, w: W, h: H };
  for (i = 0; i < N; i++) d[i * 4 + 3] = al[i];
  ctx.putImageData(id, 0, 0);
  var pad = 3; x0 = Math.max(0, x0 - pad); y0 = Math.max(0, y0 - pad); x1 = Math.min(W - 1, x1 + pad); y1 = Math.min(H - 1, y1 + pad);
  var cw = x1 - x0 + 1, chh = y1 - y0 + 1, out = document.createElement("canvas"); out.width = cw; out.height = chh;
  out.getContext("2d").drawImage(c, x0, y0, cw, chh, 0, 0, cw, chh);
  var alc = new Uint8Array(cw * chh);
  for (y = 0; y < chh; y++) for (x = 0; x < cw; x++) alc[y * cw + x] = al[(y + y0) * W + x + x0];
  return { cv: out, w: cw, h: chh, al: alc };
}

/* ---------- cut-out photo -> solid with depth ----------
   The photo's outline is kept; thickness is "inflated" from it (rounded edges, like a real bead or band),
   the photo is the surface colour, and the back is the mirror of the front. So the piece can be turned all the way round. */
function inflate(T, cut, wWorld, hcap, grid) {
  var Wd = wWorld, Hd = wWorld * cut.h / cut.w, Gx, Gy, i, j, k;
  if (cut.w >= cut.h) { Gx = grid; Gy = Math.max(4, Math.round(grid * cut.h / cut.w)); } else { Gy = grid; Gx = Math.max(4, Math.round(grid * cut.w / cut.h)); }
  var VX = Gx + 1, VY = Gy + 1, NV = VX * VY, inside = new Uint8Array(NV), d = new Float32Array(NV);
  for (j = 0; j < VY; j++) for (i = 0; i < VX; i++) {
    var px = Math.round(i / Gx * (cut.w - 1)), py = Math.round(j / Gy * (cut.h - 1));
    var a = cut.al ? cut.al[py * cut.w + px] : 255, id = j * VX + i;
    inside[id] = a >= 128 ? 1 : 0; d[id] = inside[id] ? 1e6 : 0;
  }
  /* distance to the outline (chamfer) */
  var D1 = 1, D2 = 1.414;
  for (j = 0; j < VY; j++) for (i = 0; i < VX; i++) {
    k = j * VX + i; if (!d[k]) continue; var m = d[k];
    if (i > 0) m = Math.min(m, d[k - 1] + D1); if (j > 0) m = Math.min(m, d[k - VX] + D1);
    if (i > 0 && j > 0) m = Math.min(m, d[k - VX - 1] + D2); if (i < VX - 1 && j > 0) m = Math.min(m, d[k - VX + 1] + D2);
    d[k] = m;
  }
  var dmax = 0;
  for (j = VY - 1; j >= 0; j--) for (i = VX - 1; i >= 0; i--) {
    k = j * VX + i; if (!d[k]) continue; var m2 = d[k];
    if (i < VX - 1) m2 = Math.min(m2, d[k + 1] + D1); if (j < VY - 1) m2 = Math.min(m2, d[k + VX] + D1);
    if (i < VX - 1 && j < VY - 1) m2 = Math.min(m2, d[k + VX + 1] + D2); if (i > 0 && j < VY - 1) m2 = Math.min(m2, d[k + VX - 1] + D2);
    d[k] = m2; if (m2 > dmax) dmax = m2;
  }
  var cw = Wd / Gx, hc = Math.min(hcap, Math.max(dmax, 1) * cw * 0.95), Dbig = Math.max(1, Math.min(dmax * 0.95, 0.12 / cw));
  var h = new Float32Array(NV);
  for (k = 0; k < NV; k++) if (inside[k]) { var t = Math.min(1, d[k] / Dbig); h[k] = hc * Math.sqrt(1 - (1 - t) * (1 - t)); }
  var h2 = h.slice();                                          // soften
  for (j = 1; j < VY - 1; j++) for (i = 1; i < VX - 1; i++) {
    k = j * VX + i; if (!inside[k]) continue;
    h2[k] = (h[k] * 4 + h[k - 1] + h[k + 1] + h[k - VX] + h[k + VX]) / 8;
  }
  var pos = new Float32Array(NV * 2 * 3), uv = new Float32Array(NV * 2 * 2);
  for (j = 0; j < VY; j++) for (i = 0; i < VX; i++) {
    k = j * VX + i; var x = (i / Gx - 0.5) * Wd, y = (0.5 - j / Gy) * Hd, u = i / Gx, v = 1 - j / Gy;
    pos[k * 3] = x; pos[k * 3 + 1] = y; pos[k * 3 + 2] = h2[k];
    var b = (NV + k); pos[b * 3] = x; pos[b * 3 + 1] = y; pos[b * 3 + 2] = -h2[k];
    uv[k * 2] = u; uv[k * 2 + 1] = v; uv[b * 2] = u; uv[b * 2 + 1] = v;
  }
  var idx = [];
  for (j = 0; j < Gy; j++) for (i = 0; i < Gx; i++) {
    var A = j * VX + i, B = A + 1, C = A + VX, E = C + 1;
    if (!(inside[A] || inside[B] || inside[C] || inside[E])) continue;
    idx.push(A, C, B, B, C, E);                                // front
    idx.push(NV + A, NV + B, NV + C, NV + B, NV + E, NV + C);  // back
  }
  var g = new T.BufferGeometry();
  g.setAttribute("position", new T.BufferAttribute(pos, 3)); g.setAttribute("uv", new T.BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  return { geo: g, w: Wd, h: Hd };
}

/* ====================================================================== */
function mount(host, items, opt) {
  destroy();
  css();
  opt = opt || {};
  var img = opt.img || function (u) { return u; };

  host.innerHTML =
    '<div class="v3stage" id="v3stage" role="img" aria-label="Interactive 3D preview of your order. Drag to turn it."><div class="v3load" id="v3load">Preparing your pieces…</div></div>' +
    '<div class="v3chips" id="v3chips"></div><div class="v3note" id="v3note"></div><div class="v3leg" id="v3leg"></div>';
  var stage = host.querySelector("#v3stage"), chipsEl = host.querySelector("#v3chips"), noteEl = host.querySelector("#v3note"), legEl = host.querySelector("#v3leg"), loadEl = host.querySelector("#v3load");

  legEl.innerHTML = items.map(function (it) {
    var p = it.p, u = p.im && p.im[0] ? '<img src="' + esc(img(p.im[0], 120)) + '" alt="" loading="lazy" onerror="this.style.visibility=\'hidden\'">' : "<i></i>";
    return '<div class="v3li">' + u + "<span>" + esc(p.n) + "</span><b>× " + it.q + "</b></div>";
  }).join("");

  var P = plan(items), ctl = { dead: false, destroy: function () {} };
  live = ctl;

  function fallback(msg) {
    stage.style.height = "auto"; stage.style.minHeight = "0"; stage.style.touchAction = "auto"; stage.style.cursor = "default";
    stage.innerHTML = '<div style="padding:18px;font-size:13px;color:var(--mute)">' + esc(msg) + " Here are your pieces:</div><div class=\"v3fb\" style=\"padding:0 18px 18px\">" +
      items.map(function (it) { var p = it.p; return p.im && p.im[0] ? '<img src="' + esc(img(p.im[0], 300)) + '" alt="">' : ""; }).join("") + "</div>";
    chipsEl.innerHTML = ""; noteEl.textContent = "";
  }

  /* which photos do we need? (the bracelet itself is built in 3D, so only its colour comes from the catalogue) */
  var need = {}, list = [];
  function want(p, side) { if (!p || !p.im || !p.im[0]) return; var u = img(p.im[0], side); if (!need[u]) { need[u] = 1; list.push({ p: p, url: u, side: side }); } }
  P.out.br.forEach(function (p) { want(p, 420); });
  ["ne", "ea", "ri", "ch"].forEach(function (k) { P.out[k].forEach(function (p) { want(p, k === "ch" ? 520 : 760); }); });

  var doneN = 0;
  var photos = Promise.all(list.map(function (e) {
    if (CUT[e.url]) { doneN++; return Promise.resolve(); }
    return loadImage(e.url).then(function (im) {
      if (ctl.dead) return;
      CUT[e.url] = im ? cutout(im, e.side) : { missing: true };
      doneN++; if (loadEl) loadEl.textContent = "Preparing your pieces… " + doneN + " / " + list.length;
    });
  }));

  Promise.all([loadThree(), photos]).then(function () {
    if (ctl.dead) return;
    try { start(); } catch (e) { console.warn(e); fallback("Your device couldn't open the 3D view."); }
  }).catch(function () { if (!ctl.dead) fallback("The 3D view needs an internet connection."); });

  /* ------------------------------------------------------------------ */
  function start() {
    var T = window.THREE, renderer;
    try { renderer = new T.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" }); }
    catch (e) { fallback("Your device couldn't open the 3D view."); return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputEncoding = T.sRGBEncoding;
    renderer.toneMapping = T.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
    renderer.setClearColor(0x000000, 0);
    stage.innerHTML = ""; stage.appendChild(renderer.domElement);

    var scene = new T.Scene(), camera = new T.PerspectiveCamera(30, 1, 0.1, 200), disposables = [];
    var track = function (o) { disposables.push(o); return o; };
    var aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy ? renderer.capabilities.getMaxAnisotropy() : 1);

    /* ---- studio reflections (so metal looks like metal) ---- */
    (function env() {
      var es = new T.Scene(), i;
      var g = new T.SphereGeometry(40, 48, 24), pos = g.attributes.position, col = [];
      for (i = 0; i < pos.count; i++) {
        var y = pos.getY(i) / 40, t = (y + 1) / 2, c = new T.Color();
        c.setRGB(0.42 + 0.58 * t * t, 0.32 + 0.62 * t * t, 0.34 + 0.62 * t * t); col.push(c.r, c.g, c.b);
      }
      g.setAttribute("color", new T.Float32BufferAttribute(col, 3));
      es.add(new T.Mesh(g, new T.MeshBasicMaterial({ vertexColors: true, side: T.BackSide })));
      function panel(w, h, x, y, z, v, rgb) {
        var m = new T.Mesh(new T.PlaneGeometry(w, h), new T.MeshBasicMaterial({ side: T.DoubleSide }));
        m.material.color.setRGB(rgb ? rgb[0] * v : v, rgb ? rgb[1] * v : v, rgb ? rgb[2] * v : v);
        m.position.set(x, y, z); m.lookAt(0, 0, 0); es.add(m);
      }
      panel(26, 10, 0, 30, 6, 5); panel(8, 22, 28, 6, 10, 4); panel(8, 22, -28, 6, 10, 4); panel(14, 8, 0, 8, -32, 3);
      panel(10, 30, 30, 0, -14, 0.04); panel(10, 30, -30, 0, -14, 0.04); panel(18, 6, 0, -14, 28, 1.6, [1, 0.72, 0.76]);
      var pm = new T.PMREMGenerator(renderer), rt = pm.fromScene(es, 0.015);
      scene.environment = rt.texture; pm.dispose(); track(rt); track(g);
    })();
    scene.add(new T.AmbientLight(0xffffff, 0.45));
    var key = new T.DirectionalLight(0xffffff, 0.8); key.position.set(3, 6, 6); scene.add(key);

    /* ---- materials ---- */
    var MET = {
      silver: { color: 0xeceef2, metalness: 1, roughness: 0.2, envMapIntensity: 1.3 },
      gold:   { color: 0xf2c76a, metalness: 1, roughness: 0.22, envMapIntensity: 1.3 },
      rose:   { color: 0xeeaf9d, metalness: 1, roughness: 0.22, envMapIntensity: 1.3 }
    };
    var metalKey = function (p) { return p && p.m === "Gold" ? "gold" : p && p.m === "Rose" ? "rose" : "silver"; };
    function texOf(cut) { var t = new T.CanvasTexture(cut.cv); t.encoding = T.sRGBEncoding; t.anisotropy = aniso; return track(t); }
    function photoMat(cut) {                      // the real photo is the surface; a little reflection is added so it shines as it turns
      var t = texOf(cut);
      return track(new T.MeshStandardMaterial({ map: t, emissive: 0xffffff, emissiveMap: t, emissiveIntensity: 0.55, metalness: 0.3, roughness: 0.38, envMapIntensity: 0.9,
        alphaTest: 0.4, alphaToCoverage: true, toneMapped: false, side: T.FrontSide }));
    }
    function solid(p, side, wWorld, hcap, grid) {
      var cut = CUT[img(p.im[0], side)]; if (!cut || cut.missing) return null;
      var inf = inflate(T, cut, wWorld, hcap, grid); track(inf.geo);
      var m = new T.Mesh(inf.geo, photoMat(cut)); return { mesh: m, w: inf.w, h: inf.h };
    }
    function solidFit(p, side, maxSide, hcap, grid) {
      var cut = CUT[img(p.im[0], side)]; if (!cut || cut.missing) return null;
      return solid(p, side, cut.w >= cut.h ? maxSide : maxSide * cut.w / cut.h, hcap, grid);
    }

    /* ---- bracelet: a real 3D chain hoop ---- */
    var R = 1.5, TILT = 0.85;
    function ribs(kind) {                          // surface pattern, used as a bump map
      var cv = document.createElement("canvas"); cv.width = cv.height = 128; var c = cv.getContext("2d"), k;
      c.fillStyle = "#6a6a6a"; c.fillRect(0, 0, 128, 128);
      function band(w, col, off, slope) { c.strokeStyle = col; c.lineWidth = w; for (k = -6; k < 10; k++) { c.beginPath(); c.moveTo(-20, k * 32 + off - 20 * slope); c.lineTo(150, k * 32 + off + 150 * slope); c.stroke(); } }
      if (kind === "snake") { band(15, "#8a8a8a", 0, 1); band(9, "#c8c8c8", 0, 1); band(3, "#ffffff", 0, 1); }
      else if (kind === "braid") { band(20, "#9a9a9a", 0, 1); band(11, "#e0e0e0", 0, 1); band(20, "#7a7a7a", 16, -1); band(8, "#c0c0c0", 16, -1); }
      else if (kind === "leather") { for (k = 0; k < 900; k++) { c.fillStyle = "rgba(" + (k % 2 ? "255,255,255" : "0,0,0") + ",.12)"; c.fillRect(Math.random() * 128, Math.random() * 128, 3, 3); } }
      var t = new T.CanvasTexture(cv); t.wrapS = t.wrapT = T.RepeatWrapping; t.anisotropy = aniso; return track(t);
    }
    var clText = (function () {                    // engraved "PANDORA" on the ball clasp
      var cv = document.createElement("canvas"); cv.width = 512; cv.height = 256; var c = cv.getContext("2d");
      c.fillStyle = "#888"; c.fillRect(0, 0, 512, 256); c.fillStyle = "#222"; c.font = "bold 46px Georgia, serif"; c.textAlign = "center"; c.textBaseline = "middle";
      c.fillText("PANDORA", 256, 128); var t = new T.CanvasTexture(cv); return track(t);
    })();
    function avgColor(cut) {                       // for coloured / woven bracelets take the colour from the photo
      if (!cut || !cut.al) return null; var d = cut.cv.getContext("2d").getImageData(0, 0, cut.w, cut.h).data, r = 0, g = 0, b = 0, n = 0, s = 0;
      for (var i = 0; i < cut.w * cut.h; i += 3) { if (cut.al[i] < 250) continue; var R0 = d[i * 4], G0 = d[i * 4 + 1], B0 = d[i * 4 + 2], mx = Math.max(R0, G0, B0), mn = Math.min(R0, G0, B0); if (mx > 235 || mx < 40) continue; r += R0; g += G0; b += B0; s += (mx - mn) / (mx || 1); n++; }
      return n ? { r: r / n, g: g / n, b: b / n, sat: s / n } : null;
    }

    var order = 0, missing = 0;
    var CH = { Charm: ["max", 0.17, 0.27], Dangle: ["h", 0.3, 0.12], Clip: ["max", 0.13, 0.33], Medallion: ["max", 0.2, 0.22], Spacer: ["max", 0.09, 0.33], Link: ["max", 0.16, 0.25], "Safety Chain": ["max", 0.34, 0.1] };
    function charmSolid(cp) {
      var cut = CUT[img(cp.im[0], 520)]; if (!cut || cut.missing) { missing++; return null; }
      var sp = CH[cp.f] || CH.Charm, tgt = sp[1] * (2 * R), w;
      if (sp[0] === "h") w = tgt * cut.w / cut.h; else w = cut.w >= cut.h ? tgt : tgt * cut.w / cut.h;
      var h = w * cut.h / cut.w, s = solid(cp, 520, w, sp[2] * Math.min(w, h), 70);
      if (s) s.dangle = cp.f === "Dangle" || cp.f === "Safety Chain"; return s;
    }

    function braceletPiece(p, charms) {
      var cut = p && p.im && p.im[0] ? CUT[img(p.im[0], 420)] : null, name = (p && p.n || "").toLowerCase(), mk = metalKey(p);
      var pattern = p && p.f === "Bangle" ? "plain" : /leather|cord/.test(name) ? "leather" : /braid|woven|rope|twist|foxtail|weave/.test(name) ? "braid" : "snake";
      var tube = pattern === "plain" ? 0.1 : pattern === "braid" ? 0.085 : 0.07;
      var mat = { color: MET[mk].color, metalness: 1, roughness: MET[mk].roughness, envMapIntensity: MET[mk].envMapIntensity };
      var av = (pattern === "leather" || (p && /enamel|blue|black|pink|red|green|purple|cord|leather/.test(name))) ? avgColor(cut) : null;
      if (av && av.sat > 0.18 || pattern === "leather") { var cc = av || { r: 90, g: 58, b: 43 }; mat.color = (Math.round(cc.r) << 16) | (Math.round(cc.g) << 8) | Math.round(cc.b); mat.metalness = pattern === "leather" ? 0 : 0.6; mat.roughness = pattern === "leather" ? 0.6 : 0.4; mat.envMapIntensity = 0.7; }
      var chainMat = new T.MeshStandardMaterial(mat); track(chainMat);
      if (pattern !== "plain") { var bt = ribs(pattern); bt.repeat.set(pattern === "braid" ? 46 : 70, 1); chainMat.bumpMap = bt; chainMat.bumpScale = pattern === "leather" ? 0.5 : 2.2; }

      var hoop = new T.Group(); hoop.rotation.x = -TILT;
      var pts = []; for (var i = 0; i < 160; i++) { var a = i / 160 * Math.PI * 2; pts.push(new T.Vector3(Math.sin(a) * R, Math.cos(a) * R, 0)); }
      var tg = track(new T.TubeGeometry(new T.CatmullRomCurve3(pts, true), 480, tube, 18, true));
      hoop.add(new T.Mesh(tg, chainMat));

      /* ball clasp at the back of the hoop (top) */
      var clMat = track(new T.MeshStandardMaterial({ color: MET[mk].color, metalness: 1, roughness: 0.2, envMapIntensity: 1.3, bumpMap: clText, bumpScale: 1.2 }));
      var ball = new T.Mesh(track(new T.SphereGeometry(tube * 1.9, 40, 28)), clMat); ball.position.set(0, R, 0); hoop.add(ball);
      var barrelMat = track(new T.MeshStandardMaterial(MET[mk])), bg = track(new T.CylinderGeometry(tube * 1.25, tube * 1.25, tube * 2.6, 20));
      [-1, 1].forEach(function (sd) { var b = new T.Mesh(bg, barrelMat); b.rotation.z = Math.PI / 2; b.position.set(sd * tube * 3.4, R, 0); hoop.add(b); });

      /* charms: solid bodies threaded on the chain (the chain passes through the middle of each) */
      var solids = charms.map(charmSolid).filter(Boolean), N = solids.length, gap = 0.03;
      var total = solids.reduce(function (s, c) { return s + c.w + gap; }, 0) / R, avail = 2 * (Math.PI - 0.6), f = N ? Math.min(1, avail / total) : 1;
      var cum = -total * f / 2;
      solids.forEach(function (c, k) {
        var span = (c.w + gap) / R * f, a = cum + span / 2; cum += span;
        var holder = new T.Group(); holder.position.set(Math.sin(a) * R, -Math.cos(a) * R, (f < 0.8 ? (k % 2 ? 0.03 : -0.03) : 0));
        holder.rotation.z = a;
        var inner = new T.Group(); inner.rotation.x = TILT * 0.6;
        if (c.dangle) { inner.rotation.y = 1.05; c.mesh.position.y = -c.h * 0.36; }
        inner.add(c.mesh); holder.add(inner); hoop.add(holder); c.holder = holder;
      });
      var g = new T.Group(); g.add(hoop);
      addPiece("br", g, 2 * R + 0.5, 2 * R * Math.cos(TILT) + 0.9, 0, 0);
    }

    /* ---- pieces ---- */
    var pieces = [], O = P.out;
    function addPiece(kind, g, w, h, cx, cy) {
      var wrap = new T.Group(), inner = new T.Group(); inner.add(g); inner.position.set(-(cx || 0), -(cy || 0), 0); wrap.add(inner); scene.add(wrap);
      pieces.push({ kind: kind, wrap: wrap, w: w, h: h, tx: 0, ty: 0, tz: 0, s: 0, show: true, ph: Math.random() * 6.28 });
    }
    var sample = false, brs = O.br.map(function (p) { return { p: p, ch: [] }; });
    if (!brs.length && O.ch.length) { brs = [{ p: { m: "Silver", f: "Chain", n: "" }, ch: [] }]; sample = true; }
    O.ch.forEach(function (cp, i) { brs[i % brs.length].ch.push(cp); });
    brs.forEach(function (b) { braceletPiece(b.p, b.ch); });

    var MAXS = { ne: 2.4, ea: 1.7, ri: 1.1, pn: 1.3 }, HCAP = { ne: 0.05, ea: 0.06, ri: 0.07, pn: 0.05 };
    ["ne", "ea", "ri"].forEach(function (k) {
      O[k].forEach(function (p) {
        var kk = k === "ne" && p.f === "Pendant" ? "pn" : k, s = solidFit(p, 760, MAXS[kk], HCAP[kk], 120);
        if (!s) { missing++; return; }
        var g = new T.Group(); g.add(s.mesh); addPiece(kk, g, s.w, s.h, 0, 0);
      });
    });
    if (!pieces.length) { fallback("We couldn't load the photos for the 3D view."); return; }

    /* sparkles */
    var sparks = (function () {
      var cv = document.createElement("canvas"); cv.width = cv.height = 32; var c = cv.getContext("2d");
      var gr = c.createRadialGradient(16, 16, 0, 16, 16, 16); gr.addColorStop(0, "rgba(255,147,160,1)"); gr.addColorStop(1, "rgba(255,147,160,0)");
      c.fillStyle = gr; c.fillRect(0, 0, 32, 32); var t = track(new T.CanvasTexture(cv));
      var n = 40, arr = new Float32Array(n * 3), seeds = [];
      for (var i = 0; i < n; i++) { arr[i * 3] = (Math.random() - 0.5) * 9; arr[i * 3 + 1] = (Math.random() - 0.5) * 6; arr[i * 3 + 2] = -2.2 - Math.random() * 1.6; seeds.push(Math.random() * 6.28); }
      var geo = track(new T.BufferGeometry()); geo.setAttribute("position", new T.BufferAttribute(arr, 3));
      var pt = new T.Points(geo, track(new T.PointsMaterial({ map: t, size: 0.14, transparent: true, opacity: 0.55, depthWrite: false })));
      scene.add(pt); return { pt: pt, base: arr.slice(), seeds: seeds };
    })();

    /* ---- layout: neat rows, fitted to the screen; every piece turns on its own spot ---- */
    var filter = "all", box = { w: 3, h: 3 }, aspect = 1;
    function layout() {
      var vis = pieces.filter(function (p) { return filter === "all" || filterOf(p.kind) === filter; });
      pieces.forEach(function (p) { p.show = vis.indexOf(p) > -1; });
      var gap = 0.3, best = null, maxW = 0, sumW = 0;
      vis.forEach(function (p) { maxW = Math.max(maxW, p.w); sumW += p.w + gap; });
      var sorted = vis.slice().sort(function (a, b) { return b.h - a.h; });
      for (var limit = maxW; limit <= sumW + 0.01; limit += Math.max(0.15, (sumW - maxW) / 24)) {
        var rows = [], cur = null;
        sorted.forEach(function (p) {
          if (!cur || cur.w + p.w + gap > limit + 0.001) { cur = { w: 0, h: 0, items: [] }; rows.push(cur); }
          cur.items.push(p); cur.w += p.w + (cur.items.length > 1 ? gap : 0); cur.h = Math.max(cur.h, p.h);
        });
        var W = Math.max.apply(null, rows.map(function (r) { return r.w; })), H = rows.reduce(function (s, r) { return s + r.h; }, 0) + gap * (rows.length - 1);
        var cost = Math.max(W / aspect, H);
        if (!best || cost < best.cost - 1e-6) best = { cost: cost, rows: rows, W: W, H: H };
      }
      if (!best) return;
      var y = best.H / 2;
      best.rows.forEach(function (r) {
        var x = -r.w / 2; y -= r.h / 2;
        r.items.forEach(function (p) { p.tx = x + p.w / 2; p.ty = y; p.tz = 0; x += p.w + gap; });
        y -= r.h / 2 + gap;
      });
      box = { w: best.W, h: best.H };
    }

    /* chips */
    var avail = ["all"].concat(["br", "ne", "ea", "ri"].filter(function (k) { return pieces.some(function (p) { return filterOf(p.kind) === k; }); }));
    if (avail.length > 2) {
      chipsEl.innerHTML = avail.map(function (k) { return '<button class="chip' + (k === "all" ? " on" : "") + '" data-k="' + k + '">' + FILTERS[k] + "</button>"; }).join("");
      chipsEl.addEventListener("click", function (e) {
        var b = e.target.closest("[data-k]"); if (!b) return;
        filter = b.dataset.k; chipsEl.querySelectorAll(".chip").forEach(function (c) { c.classList.toggle("on", c === b); });
        layout(); zoom = 1; poke();
      });
    } else chipsEl.style.display = "none";

    var notes = ["Each piece is built from its real photo, so the colours and designs match. Sizes are adjusted so everything is easy to see."];
    if (sample) notes.unshift("Your charms are shown on a sample silver bracelet.");
    if (P.cut) notes.unshift("Showing the first pieces of a large order.");
    if (missing) notes.unshift(missing + " photo" + (missing > 1 ? "s" : "") + " couldn't be loaded.");
    noteEl.textContent = notes.join(" ");

    /* ---- tools, hint ---- */
    var hint = document.createElement("div"); hint.className = "v3hint"; hint.textContent = "Drag to turn it around · pinch or scroll to zoom";
    var tools = document.createElement("div"); tools.className = "v3tools";
    tools.innerHTML = '<button type="button" data-t="spin" aria-label="Pause turning" title="Pause / play">❚❚</button><button type="button" data-t="reset" aria-label="Reset view" title="Reset view">⟲</button>';
    stage.appendChild(hint); stage.appendChild(tools);

    /* ---- input: drag turns the pieces, up/down changes the viewing angle ---- */
    var yaw = 0.5, pitch = 0.22, zoom = 1, dist = 12, auto = true, idle = 99, dragging = false, ptrs = {}, lastPinch = 0;
    var poke = function () { idle = 0; };
    function onDown(e) {
      if (e.target.closest(".v3tools")) return;
      stage.setPointerCapture && stage.setPointerCapture(e.pointerId);
      ptrs[e.pointerId] = { x: e.clientX, y: e.clientY }; dragging = true; stage.classList.add("drag"); poke(); hint.style.opacity = 0;
      var k = Object.keys(ptrs); if (k.length === 2) lastPinch = Math.hypot(ptrs[k[0]].x - ptrs[k[1]].x, ptrs[k[0]].y - ptrs[k[1]].y);
    }
    function onMove(e) {
      var p = ptrs[e.pointerId]; if (!p) return; var ks = Object.keys(ptrs);
      if (ks.length === 2) {
        ptrs[e.pointerId] = { x: e.clientX, y: e.clientY };
        var d = Math.hypot(ptrs[ks[0]].x - ptrs[ks[1]].x, ptrs[ks[0]].y - ptrs[ks[1]].y);
        if (lastPinch) zoom = clamp(zoom * lastPinch / d, 0.4, 1.6); lastPinch = d;
      } else {
        yaw += (e.clientX - p.x) * 0.012; pitch = clamp(pitch + (e.clientY - p.y) * 0.005, -0.2, 1.0);
        ptrs[e.pointerId] = { x: e.clientX, y: e.clientY };
      }
      poke();
    }
    function onUp(e) { delete ptrs[e.pointerId]; lastPinch = 0; if (!Object.keys(ptrs).length) { dragging = false; stage.classList.remove("drag"); } poke(); }
    function onWheel(e) { e.preventDefault(); zoom = clamp(zoom * Math.exp(e.deltaY * 0.001), 0.4, 1.6); poke(); }
    function reset() { yaw = 0.5; pitch = 0.22; zoom = 1; idle = 99; }
    stage.addEventListener("pointerdown", onDown); stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerup", onUp); stage.addEventListener("pointercancel", onUp);
    stage.addEventListener("wheel", onWheel, { passive: false }); stage.addEventListener("dblclick", reset);
    tools.addEventListener("click", function (e) {
      var b = e.target.closest("[data-t]"); if (!b) return;
      if (b.dataset.t === "reset") reset(); else { auto = !auto; b.textContent = auto ? "❚❚" : "▶"; b.setAttribute("aria-label", auto ? "Pause turning" : "Play turning"); }
    });

    function resize() {
      var w = stage.clientWidth || 300, h = stage.clientHeight || 300;
      renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); aspect = w / h; layout();
    }
    var ro = window.ResizeObserver ? new ResizeObserver(resize) : null; if (ro) ro.observe(stage); else window.addEventListener("resize", resize);
    resize();

    /* ---- loop ---- */
    var last = performance.now(), t = 0, raf = 0;
    function frame(now) {
      if (ctl.dead) return;
      raf = requestAnimationFrame(frame);
      var dt = Math.min(0.05, (now - last) / 1000); last = now; t += dt; idle += dt;
      if (auto && !dragging && idle > 1.5) yaw += dt * 0.55;            // slow full turn
      var k = 1 - Math.exp(-dt * 5);
      pieces.forEach(function (p) {
        p.s += ((p.show ? 1 : 0.0001) - p.s) * k * (p.show ? 1 : 1.4);
        var vis = p.s > 0.01; p.wrap.visible = vis; if (!vis) return;
        p.wrap.scale.setScalar(p.s);
        p.wrap.position.x += (p.tx - p.wrap.position.x) * k;
        p.wrap.position.y += (p.ty + Math.sin(t * 1.0 + p.ph) * 0.035 - p.wrap.position.y) * k;
        p.wrap.position.z += (p.tz - p.wrap.position.z) * k;
        p.wrap.rotation.y = yaw;
      });
      var half = camera.fov * Math.PI / 360, th = Math.tan(half), need = Math.max((box.h * 0.5 + 0.25) / th, (box.w * 0.5 + 0.25) / (th * camera.aspect));
      dist += (need * 1.12 * zoom - dist) * (1 - Math.exp(-dt * 4));
      var cp = Math.cos(pitch);
      camera.position.set(0, Math.sin(pitch) * dist, cp * dist);
      camera.lookAt(0, 0, 0);
      var arr = sparks.pt.geometry.attributes.position.array;
      for (var i = 0; i < sparks.seeds.length; i++) arr[i * 3 + 1] = sparks.base[i * 3 + 1] + Math.sin(t * 0.5 + sparks.seeds[i]) * 0.25;
      sparks.pt.geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    }
    raf = requestAnimationFrame(frame);
    setTimeout(function () { hint.style.opacity = 0; }, 6000);

    window.__v3 = { get yaw() { return yaw; }, set yaw(v) { yaw = v; auto = false; }, set pitch(v) { pitch = v; }, set zoom(v) { zoom = v; }, setFilter: function (k) { filter = k; layout(); }, pieces: pieces };

    ctl.destroy = function () {
      ctl.dead = true; cancelAnimationFrame(raf);
      if (ro) ro.disconnect(); else window.removeEventListener("resize", resize);
      disposables.forEach(function (o) { try { o.dispose && o.dispose(); } catch (e) {} });
      renderer.dispose(); try { renderer.forceContextLoss(); } catch (e) {}
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }
}

function destroy() {
  if (live) { live.dead = true; try { live.destroy(); } catch (e) {} live = null; }
}

window.V3 = { mount: mount, destroy: destroy };
})();
