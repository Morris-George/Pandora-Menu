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

/* The lower, front arc of a bracelet photo: where the charms are threaded.
   Returns the chain centre line (pixels) with the clasp area left out.                                          */
function chainArc(cut) {
  var w = cut.w, h = cut.h, al = cut.al, low = new Float32Array(w), th = new Float32Array(w), x, y, k;
  var maxT = Math.round(w * 0.16);
  for (x = 0; x < w; x++) {
    low[x] = -1; th[x] = 0;
    for (y = h - 1; y >= 0; y--) if (al[y * w + x] >= 235) { low[x] = y; break; }
    if (low[x] >= 0) { for (k = 0; k < maxT && low[x] - k >= 0 && al[(low[x] - k) * w + x] >= 200; k++); th[x] = k; }
  }
  /* smooth the outline */
  var sm = new Float32Array(w), R = Math.max(2, Math.round(w * 0.012));
  for (x = 0; x < w; x++) { var s = 0, n = 0; for (k = -R; k <= R; k++) { var xx = x + k; if (xx >= 0 && xx < w && low[xx] >= 0) { s += low[xx]; n++; } } sm[x] = n ? s / n : -1; }
  var ths = th.slice().filter(function (v) { return v > 0; }).sort(function (a, b) { return a - b; });
  var med = ths.length ? ths[Math.floor(ths.length * 0.45)] : w * 0.04;
  var ok = new Uint8Array(w);
  for (x = 0; x < w; x++) ok[x] = sm[x] >= 0 && th[x] <= Math.max(med * 1.7, med + 5) ? 1 : 0;
  /* grow the "clasp" gaps so charms stay clear of them */
  var bad = new Uint8Array(w), g = Math.round(w * 0.03);
  for (x = 0; x < w; x++) if (!ok[x]) for (k = -g; k <= g; k++) if (x + k >= 0 && x + k < w) bad[x + k] = 1;
  var lowest = 0; for (x = 0; x < w; x++) if (sm[x] > lowest) lowest = sm[x];
  var band = lowest - h * 0.3, runs = [], cur = null;
  for (x = 0; x < w; x++) {
    var good = sm[x] >= 0 && !bad[x] && sm[x] >= band;
    if (good) { var pt = { x: x, y: sm[x] - Math.max(2, Math.min(th[x], med * 1.2)) / 2 }; if (!cur) { cur = []; runs.push(cur); } cur.push(pt); } else cur = null;
  }
  runs.sort(function (a, b) { return b.length - a.length; });
  return { pts: runs.length ? runs[0] : [], w: w, h: h, thick: med };
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

  /* which photos do we need? */
  var need = {}, list = [];
  function want(p, side) { if (!p || !p.im || !p.im[0]) return; var u = img(p.im[0], side); if (!need[u]) { need[u] = 1; list.push({ p: p, url: u, side: side }); } }
  P.out.br.forEach(function (p) { want(p, 900); });
  var sample = !P.out.br.length && P.out.ch.length ? opt.sample : null;
  if (sample) want(sample, 900);
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
    renderer.setClearColor(0x000000, 0);
    stage.innerHTML = ""; stage.appendChild(renderer.domElement);

    var scene = new T.Scene(), camera = new T.PerspectiveCamera(30, 1, 0.1, 200), disposables = [];
    var track = function (o) { disposables.push(o); return o; };
    var aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy ? renderer.capabilities.getMaxAnisotropy() : 1);

    function texOf(cut) {
      var t = new T.CanvasTexture(cut.cv); t.encoding = T.sRGBEncoding; t.anisotropy = aniso; t.premultiplyAlpha = false; return track(t);
    }
    var order = 0;
    function card(p, side, wWorld) {            // one photo as a floating plane; wWorld = width in world units
      var cut = CUT[img(p.im[0], side)]; if (!cut || cut.missing) return null;
      var hWorld = wWorld * cut.h / cut.w, geo = track(new T.PlaneGeometry(wWorld, hWorld));
      var mat = track(new T.MeshBasicMaterial({ map: texOf(cut), transparent: true, depthWrite: false, toneMapped: false, side: T.DoubleSide }));
      var m = new T.Mesh(geo, mat);
      if (cut.card) { m.material.map.minFilter = T.LinearFilter; }
      return { mesh: m, w: wWorld, h: hWorld, cut: cut };
    }
    function fitMax(p, side, maxSide) {          // plane whose longest side = maxSide
      var cut = CUT[img(p.im[0], side)]; if (!cut || cut.missing) return null;
      var w = cut.w >= cut.h ? maxSide : maxSide * cut.w / cut.h;
      return card(p, side, w);
    }

    /* soft contact shadow (shared) */
    var shTex = (function () {
      var cv = document.createElement("canvas"); cv.width = cv.height = 64; var c = cv.getContext("2d");
      var gr = c.createRadialGradient(32, 32, 2, 32, 32, 31); gr.addColorStop(0, "rgba(70,40,50,.55)"); gr.addColorStop(1, "rgba(70,40,50,0)");
      c.fillStyle = gr; c.fillRect(0, 0, 64, 64); return track(new T.CanvasTexture(cv));
    })();
    var shMat = track(new T.MeshBasicMaterial({ map: shTex, transparent: true, depthWrite: false, toneMapped: false }));
    function shadowPlane(w, h) { return new T.Mesh(track(new T.PlaneGeometry(w, h)), shMat); }

    /* ---- pieces ---- */
    var pieces = [], WB = 3.0, O = P.out, missing = 0;
    function addPiece(kind, g, w, h, ox, oy) {
      var wrap = new T.Group(); wrap.add(g); scene.add(wrap);
      pieces.push({ kind: kind, wrap: wrap, w: w, h: h, cx: ox || 0, cy: oy || 0, tx: 0, ty: 0, tz: 0, s: 0, show: true, ph: Math.random() * 6.28 });
    }

    var CH_SIZE = { Charm: ["max", 0.17], Dangle: ["h", 0.3], Clip: ["max", 0.12], Medallion: ["max", 0.2], Spacer: ["max", 0.09], Link: ["max", 0.16], "Safety Chain": ["max", 0.34] };
    function charmCard(cp) {
      var cut = CUT[img(cp.im[0], 520)]; if (!cut || cut.missing) { missing++; return null; }
      var spec = CH_SIZE[cp.f] || ["max", 0.17], tgt = spec[1] * WB, w;
      if (spec[0] === "h") w = tgt * cut.w / cut.h; else w = cut.w >= cut.h ? tgt : tgt * cut.w / cut.h;
      var c = card(cp, 520, w); if (c) c.dangle = cp.f === "Dangle" || cp.f === "Safety Chain"; return c;
    }

    function braceletPiece(p, charms) {
      var g = new T.Group(), cut = p ? CUT[img(p.im[0], 900)] : null;
      if (!cut || cut.missing) { missing++; if (charms.length === 0) return; cut = null; }
      var base = null, kx = 1, bw = WB, bh = WB * 0.8, arc = null;
      if (cut) { base = card(p, 900, WB); kx = WB / cut.w; bw = WB; bh = base.h; g.add(base.mesh); if (!cut.card && cut.al) arc = chainArc(cut); }
      /* placing zone along the chain (in photo pixels -> world) */
      var zone = [];
      if (arc) { arc.pts.forEach(function (q) { zone.push({ x: (q.x - cut.w / 2) * kx, y: (cut.h / 2 - q.y) * kx }); }); }
      if (zone.length < Math.max(8, (cut ? cut.w : 100) * 0.12)) {                                  // no usable chain: use a plain lower arc
        zone = []; for (var i = 0; i <= 40; i++) { var u = -0.5 + i / 40; zone.push({ x: u * bw * 0.8, y: -bh * 0.5 + 0.2 * Math.cos(u * Math.PI) * bh * 0.5 }); }
      }
      /* arc length along the zone, split where the chain breaks (clasp) */
      var cum = [0], k; for (k = 1; k < zone.length; k++) cum.push(cum[k - 1] + Math.hypot(zone[k].x - zone[k - 1].x, zone[k].y - zone[k - 1].y));
      var total = cum[cum.length - 1];
      function at(s) {                                         // s in [0,1] along the zone
        var L = clamp(s, 0, 1) * total, j = 1; while (j < cum.length - 1 && cum[j] < L) j++;
        var f = (L - cum[j - 1]) / Math.max(1e-6, cum[j] - cum[j - 1]), a = zone[j - 1], b = zone[j];
        return { x: a.x + (b.x - a.x) * f, y: a.y + (b.y - a.y) * f, sl: Math.atan2(b.y - a.y, b.x - a.x) };
      }
      var cards = charms.map(charmCard).filter(Boolean), N = cards.length;
      var avgW = N ? cards.reduce(function (s, c) { return s + c.w; }, 0) / N : 0.4, avgH = N ? cards.reduce(function (s, c) { return s + c.h; }, 0) / N : 0.4;
      var perRow = Math.max(1, Math.floor(total / (avgW * 0.6))), rows = Math.max(1, Math.ceil(N / perRow)), idx = 0;
      var minY = -bh / 2, maxX = bw / 2, minX = -bw / 2, maxY = bh / 2;
      for (var r = 0; r < rows; r++) {
        var cnt = Math.min(perRow, N - idx), rowCards = cards.slice(idx, idx + cnt); idx += cnt;
        var span = Math.min(0.92, 0.3 + 0.12 * cnt), s0 = 0.5 - span / 2;
        rowCards.forEach(function (c, ci) {
          var s = cnt === 1 ? 0.5 : s0 + span * ci / (cnt - 1), pt = at(s);
          var y = pt.y - (c.dangle ? c.h * 0.36 : 0) - r * avgH * 0.55;
          var z = 0.006 + r * 0.004 + ci * 0.0004;
          var holder = new T.Group(); holder.position.set(pt.x, y, z);
          holder.rotation.z = clamp(pt.sl, -0.7, 0.7) * 0.45;
          if (c.dangle) { var sh = shadowPlane(c.w * 1.1, c.h * 0.5); sh.position.set(c.w * 0.04, -c.h * 0.32, -0.003); holder.add(sh); }
          holder.add(c.mesh); g.add(holder);
          c.mesh.renderOrder = 1;
          if (!c.dangle && arc && base && base.mesh.material.map) {            // the real chain photo drawn again over the charm's middle, so the chain runs through it
            var hw = c.w * 0.46, hh = Math.max(0.03, arc.thick * kx * 0.6), x0 = pt.x - hw, x1 = pt.x + hw, y0 = pt.y - hh, y1 = pt.y + hh;
            var sg = track(new T.PlaneGeometry(2 * hw, 2 * hh)), uv = sg.attributes.uv;
            var u0 = x0 / kx / cut.w + 0.5, u1 = x1 / kx / cut.w + 0.5, v0 = y0 / (kx * cut.h) + 0.5, v1 = y1 / (kx * cut.h) + 0.5;
            uv.setXY(0, u0, v1); uv.setXY(1, u1, v1); uv.setXY(2, u0, v0); uv.setXY(3, u1, v0); uv.needsUpdate = true;
            var st = new T.Mesh(sg, base.mesh.material); st.position.set(pt.x, pt.y, z + 0.004); st.renderOrder = 2; g.add(st);
          }
          c.holder = holder;
          minY = Math.min(minY, y - c.h / 2); minX = Math.min(minX, pt.x - c.w / 2); maxX = Math.max(maxX, pt.x + c.w / 2); maxY = Math.max(maxY, y + c.h / 2);
        });
      }
      addPiece("br", g, maxX - minX, maxY - minY, (minX + maxX) / 2, (minY + maxY) / 2);
    }

    var brs = O.br.length ? O.br.map(function (p) { return { p: p, ch: [] }; }) : (O.ch.length ? [{ p: sample, ch: [] }] : []);
    if (brs.length && !brs[0].p && O.ch.length) brs = [];
    O.ch.forEach(function (cp, i) { if (brs.length) brs[i % brs.length].ch.push(cp); });
    brs.forEach(function (b) { braceletPiece(b.p, b.ch); });
    if (!brs.length) O.ch.forEach(function (cp) { var c = fitMax(cp, 520, 1.0); if (c) { var g = new T.Group(); g.add(c.mesh); addPiece("br", g, c.w, c.h); } else missing++; });

    var MAXS = { ne: 2.4, ea: 1.7, ri: 1.1, pn: 1.3 };
    ["ne", "ea", "ri"].forEach(function (k) {
      O[k].forEach(function (p) {
        var kk = k === "ne" && p.f === "Pendant" ? "pn" : k, c = fitMax(p, 760, MAXS[kk]);
        if (!c) { missing++; return; }
        var g = new T.Group(), sh = null; g.add(c.mesh); addPiece(kk, g, c.w, c.h);
      });
    });
    if (!pieces.length) { fallback("We couldn't load the photos for the 3D view."); return; }

    /* sparkles */
    var sparks = (function () {
      var cv = document.createElement("canvas"); cv.width = cv.height = 32; var c = cv.getContext("2d");
      var gr = c.createRadialGradient(16, 16, 0, 16, 16, 16); gr.addColorStop(0, "rgba(255,147,160,1)"); gr.addColorStop(1, "rgba(255,147,160,0)");
      c.fillStyle = gr; c.fillRect(0, 0, 32, 32); var t = track(new T.CanvasTexture(cv));
      var n = 40, arr = new Float32Array(n * 3), seeds = [];
      for (var i = 0; i < n; i++) { arr[i * 3] = (Math.random() - 0.5) * 9; arr[i * 3 + 1] = (Math.random() - 0.5) * 6; arr[i * 3 + 2] = -0.6 - Math.random() * 1.6; seeds.push(Math.random() * 6.28); }
      var geo = track(new T.BufferGeometry()); geo.setAttribute("position", new T.BufferAttribute(arr, 3));
      var pt = new T.Points(geo, track(new T.PointsMaterial({ map: t, size: 0.14, transparent: true, opacity: 0.55, depthWrite: false })));
      scene.add(pt); return { pt: pt, base: arr.slice(), seeds: seeds };
    })();

    /* ---- layout: neat rows, fitted to the screen ---- */
    var filter = "all", box = { w: 3, h: 3, cx: 0, cy: 0 }, aspect = 1;
    function layout() {
      var vis = pieces.filter(function (p) { return filter === "all" || filterOf(p.kind) === filter; });
      pieces.forEach(function (p) { p.show = vis.indexOf(p) > -1; });
      var gap = 0.35, best = null, maxW = 0, sumW = 0;
      vis.forEach(function (p) { maxW = Math.max(maxW, p.w); sumW += p.w + gap; });
      var sorted = vis.slice().sort(function (a, b) { return b.h - a.h; });
      for (var limit = maxW; limit <= sumW + 0.01; limit += Math.max(0.15, (sumW - maxW) / 24)) {
        var rows = [], cur = null;
        sorted.forEach(function (p) {
          if (!cur || cur.w + p.w + gap > limit + 0.001) { cur = { w: 0, h: 0, items: [] }; rows.push(cur); }
          cur.items.push(p); cur.w += p.w + (cur.items.length > 1 ? gap : 0); cur.h = Math.max(cur.h, p.h);
        });
        var W = Math.max.apply(null, rows.map(function (r) { return r.w; })), H = rows.reduce(function (s, r) { return s + r.h; }, 0) + gap * (rows.length - 1);
        var sc = Math.min(aspect >= W / H ? 1 : 1, 1), cost = Math.max(W / aspect, H);   // bigger on screen = smaller cost
        if (!best || cost < best.cost - 1e-6) best = { cost: cost, rows: rows, W: W, H: H };
      }
      if (!best) return;
      var y = best.H / 2;
      best.rows.forEach(function (r) {
        var x = -r.w / 2; y -= r.h / 2;
        r.items.forEach(function (p) { p.tx = x + p.w / 2 - p.cx; p.ty = y - p.cy; p.tz = (p.kind === "br" ? 0 : -0.05); x += p.w + gap; });
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

    var notes = ["These are the photos of your pieces, put together as they would be worn. Sizes are adjusted so everything is easy to see."];
    if (sample) notes.unshift("Your charms are shown on a sample bracelet.");
    if (P.cut) notes.unshift("Showing the first pieces of a large order.");
    if (missing) notes.unshift(missing + " photo" + (missing > 1 ? "s" : "") + " couldn't be loaded.");
    noteEl.textContent = notes.join(" ");

    /* ---- tools, hint ---- */
    var hint = document.createElement("div"); hint.className = "v3hint"; hint.textContent = "Drag to tilt and look around · pinch or scroll to zoom";
    var tools = document.createElement("div"); tools.className = "v3tools";
    tools.innerHTML = '<button type="button" data-t="spin" aria-label="Pause motion" title="Pause / play">❚❚</button><button type="button" data-t="reset" aria-label="Reset view" title="Reset view">⟲</button>';
    stage.appendChild(hint); stage.appendChild(tools);

    /* ---- camera + input ---- */
    var yaw = 0, pitch = 0.08, zoom = 1, dist = 12, auto = true, idle = 99, dragging = false, ptrs = {}, lastPinch = 0, YMAX = 1.2;
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
        yaw = clamp(yaw - (e.clientX - p.x) * 0.008, -YMAX, YMAX); pitch = clamp(pitch + (e.clientY - p.y) * 0.005, -0.45, 0.7);
        ptrs[e.pointerId] = { x: e.clientX, y: e.clientY };
      }
      poke();
    }
    function onUp(e) { delete ptrs[e.pointerId]; lastPinch = 0; if (!Object.keys(ptrs).length) { dragging = false; stage.classList.remove("drag"); } poke(); }
    function onWheel(e) { e.preventDefault(); zoom = clamp(zoom * Math.exp(e.deltaY * 0.001), 0.4, 1.6); poke(); }
    function reset() { yaw = 0; pitch = 0.08; zoom = 1; idle = 99; }
    stage.addEventListener("pointerdown", onDown); stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerup", onUp); stage.addEventListener("pointercancel", onUp);
    stage.addEventListener("wheel", onWheel, { passive: false }); stage.addEventListener("dblclick", reset);
    tools.addEventListener("click", function (e) {
      var b = e.target.closest("[data-t]"); if (!b) return;
      if (b.dataset.t === "reset") reset(); else { auto = !auto; b.textContent = auto ? "❚❚" : "▶"; b.setAttribute("aria-label", auto ? "Pause motion" : "Play motion"); }
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
      if (auto && !dragging && idle > 2.2) {                       // gentle swing so the depth is visible
        var ty = Math.sin(t * 0.55) * 0.22, tp = 0.1 + Math.sin(t * 0.37) * 0.07, e = 1 - Math.exp(-dt * 1.6);
        yaw += (ty - yaw) * e; pitch += (tp - pitch) * e;
      }
      var k = 1 - Math.exp(-dt * 5);
      pieces.forEach(function (p) {
        p.s += ((p.show ? 1 : 0.0001) - p.s) * k * (p.show ? 1 : 1.4);
        var vis = p.s > 0.01; p.wrap.visible = vis; if (!vis) return;
        p.wrap.scale.setScalar(p.s);
        p.wrap.position.x += (p.tx - p.wrap.position.x) * k;
        p.wrap.position.y += (p.ty + Math.sin(t * 1.0 + p.ph) * 0.035 - p.wrap.position.y) * k;
        p.wrap.position.z += (p.tz - p.wrap.position.z) * k;
      });
      var half = camera.fov * Math.PI / 360, th = Math.tan(half), need = Math.max((box.h * 0.5 + 0.2) / th, (box.w * 0.5 + 0.2) / (th * camera.aspect));
      dist += (need * 1.1 * zoom - dist) * (1 - Math.exp(-dt * 4));
      var cp = Math.cos(pitch);
      camera.position.set(Math.sin(yaw) * cp * dist, Math.sin(pitch) * dist, Math.cos(yaw) * cp * dist);
      camera.lookAt(0, 0, 0);
      var arr = sparks.pt.geometry.attributes.position.array;
      for (var i = 0; i < sparks.seeds.length; i++) arr[i * 3 + 1] = sparks.base[i * 3 + 1] + Math.sin(t * 0.5 + sparks.seeds[i]) * 0.25;
      sparks.pt.geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    }
    raf = requestAnimationFrame(frame);
    setTimeout(function () { hint.style.opacity = 0; }, 6000);

    window.__v3 = { get yaw() { return yaw; }, set yaw(v) { yaw = v; auto = false; }, set pitch(v) { pitch = v; auto = false; }, set zoom(v) { zoom = v; }, setFilter: function (k) { filter = k; layout(); }, pieces: pieces };

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
