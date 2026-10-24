/* Pandora Menu — "Your order in 3D"
   A floating, draggable 360° preview of everything on the customer's list.
   - Bracelets are built as chains / bangles / leather bands; charms hang from them.
   - Necklaces, earrings and rings are built as simple metal shapes, with the real product photo on the pendant / charm / stud.
   - Needs three.js (r128), loaded on demand the first time the screen opens.
   Public API:  V3.mount(hostEl, items, {img:(file,width)=>url})   items = [{p:product, q:quantity}]
                V3.destroy()                                      (called by the app before every re-render)       */
(function () {
"use strict";

var THREE_SRC = window.PDM_THREE_SRC || "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
var loading = null, live = null;

function loadThree() {
  if (window.THREE) return Promise.resolve();
  if (loading) return loading;
  loading = new Promise(function (res, rej) {
    var s = document.createElement("script");
    s.src = THREE_SRC; s.async = true;
    s.onload = res; s.onerror = function () { loading = null; rej(new Error("three.js failed to load")); };
    document.head.appendChild(s);
  });
  return loading;
}

/* ---------- styles (injected once) ---------- */
function css() {
  if (document.getElementById("v3css")) return;
  var s = document.createElement("style"); s.id = "v3css";
  s.textContent =
    ".v3stage{position:relative;width:100%;height:min(54vh,480px);min-height:320px;border-radius:20px;overflow:hidden;border:1px solid var(--line);" +
    "background:radial-gradient(ellipse at 50% 38%,#fff 0%,#fff3f4 45%,#ffe3e7 100%);touch-action:none;cursor:grab;user-select:none;-webkit-user-select:none}" +
    ".v3stage.drag{cursor:grabbing}.v3stage canvas{display:block;width:100%;height:100%}" +
    ".v3hint{position:absolute;left:0;right:0;bottom:12px;text-align:center;font-size:12px;color:var(--mute);pointer-events:none;transition:opacity .6s}" +
    ".v3tools{position:absolute;right:10px;top:10px;display:flex;gap:8px}" +
    ".v3tools button{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.85);border:1px solid var(--line);font-size:16px;line-height:1;color:var(--ink)}" +
    ".v3load{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:var(--mute);font-size:13px;letter-spacing:.14em;text-transform:uppercase}" +
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

/* ---------- helpers ---------- */
var KIND = ["br", "ne", "ea", "ri", "ch"];            // product category index -> kind
var FILTERS = { all: "Whole order", br: "Bracelet & charms", ne: "Necklaces", ea: "Earrings", ri: "Rings" };
var CAPS = { br: 3, ch: 20, ne: 3, ea: 3, ri: 4 };    // how many of each we draw at once
var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
var isLeather = function (p) { return (p.x && p.x.indexOf("Leather") > -1) || /leather/i.test(p.n || ""); };
var metalKey = function (p) { return p && p.m === "Gold" ? "gold" : p && p.m === "Rose" ? "rose" : "silver"; };

function plan(items) {
  var out = { br: [], ch: [], ne: [], ea: [], ri: [] }, cut = false;
  items.forEach(function (it) {
    var k = KIND[it.p.c]; if (!k) return;
    for (var i = 0; i < it.q; i++) { if (out[k].length >= CAPS[k]) { cut = true; break; } out[k].push(it.p); }
  });
  return { out: out, cut: cut };
}

/* ====================================================================== */
function mount(host, items, opt) {
  destroy();
  css();
  opt = opt || {};
  var img = opt.img || function (u) { return u; };

  host.innerHTML =
    '<div class="v3stage" id="v3stage" role="img" aria-label="Interactive 3D preview of your order. Drag to rotate."><div class="v3load">Preparing your preview…</div></div>' +
    '<div class="v3chips" id="v3chips"></div><div class="v3note" id="v3note"></div><div class="v3leg" id="v3leg"></div>';
  var stage = host.querySelector("#v3stage"), chipsEl = host.querySelector("#v3chips"), noteEl = host.querySelector("#v3note"), legEl = host.querySelector("#v3leg");

  /* legend (plain HTML — works even if WebGL is unavailable) */
  legEl.innerHTML = items.map(function (it) {
    var p = it.p, u = p.im && p.im[0] ? '<img src="' + esc(img(p.im[0], 120)) + '" alt="" loading="lazy" onerror="this.style.visibility=\'hidden\'">' : "<i></i>";
    return '<div class="v3li">' + u + "<span>" + esc(p.n) + "</span><b>× " + it.q + "</b></div>";
  }).join("");

  var P = plan(items), total = items.reduce(function (s, it) { return s + it.q; }, 0);

  var ctl = { dead: false, destroy: function () {} };
  live = ctl;

  loadThree().then(function () {
    if (ctl.dead) return;
    try { start(); } catch (e) { console.warn(e); fallback("Your device couldn't open the 3D view."); }
  }).catch(function () { if (!ctl.dead) fallback("The 3D view needs an internet connection."); });

  function fallback(msg) {
    stage.style.height = "auto"; stage.style.minHeight = "0"; stage.style.touchAction = "auto"; stage.style.cursor = "default";
    stage.innerHTML = '<div style="padding:18px;font-size:13px;color:var(--mute)">' + esc(msg) + " Here are your pieces:</div><div class=\"v3fb\" style=\"padding:0 18px 18px\">" +
      items.map(function (it) { var p = it.p; return p.im && p.im[0] ? '<img src="' + esc(img(p.im[0], 300)) + '" alt="">' : ""; }).join("") + "</div>";
    chipsEl.innerHTML = ""; noteEl.textContent = "";
  }

  function start() {
    var T = window.THREE;
    var renderer;
    try { renderer = new T.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" }); }
    catch (e) { fallback("Your device couldn't open the 3D view."); return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputEncoding = T.sRGBEncoding;
    renderer.toneMapping = T.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.setClearColor(0x000000, 0);
    stage.innerHTML = "";
    stage.appendChild(renderer.domElement);

    var scene = new T.Scene();
    var camera = new T.PerspectiveCamera(36, 1, 0.1, 100);
    var disposables = [];
    var track = function (o) { disposables.push(o); return o; };

    /* ---- studio reflections so the metal looks like metal ---- */
    (function env() {
      var es = new T.Scene(), n, i;
      var g = new T.SphereGeometry(40, 48, 24), pos = g.attributes.position, col = [];
      for (i = 0; i < pos.count; i++) {
        var y = pos.getY(i) / 40, t = (y + 1) / 2, c = new T.Color();
        c.setRGB(0.42 + 0.58 * t * t, 0.30 + 0.62 * t * t, 0.32 + 0.62 * t * t);   // warm rose floor -> bright white top
        col.push(c.r, c.g, c.b);
      }
      g.setAttribute("color", new T.Float32BufferAttribute(col, 3));
      es.add(new T.Mesh(g, new T.MeshBasicMaterial({ vertexColors: true, side: T.BackSide })));
      function panel(w, h, x, y, z, v, rgb) {
        var m = new T.Mesh(new T.PlaneGeometry(w, h), new T.MeshBasicMaterial({ side: T.DoubleSide }));
        m.material.color.setRGB(rgb ? rgb[0] * v : v, rgb ? rgb[1] * v : v, rgb ? rgb[2] * v : v);
        m.position.set(x, y, z); m.lookAt(0, 0, 0); es.add(m);
      }
      panel(26, 10, 0, 30, 6, 5);            // big overhead softbox
      panel(8, 22, 28, 6, 10, 4);            // side strip lights
      panel(8, 22, -28, 6, 10, 4);
      panel(14, 8, 0, 8, -32, 3);            // back light
      panel(10, 30, 30, 0, -14, 0.04);       // dark flags give the metal contrast
      panel(10, 30, -30, 0, -14, 0.04);
      panel(18, 6, 0, -14, 28, 1.6, [1, 0.72, 0.76]);   // pink bounce from below
      var pm = new T.PMREMGenerator(renderer), rt = pm.fromScene(es, 0.015);
      scene.environment = rt.texture; pm.dispose(); track(rt); track(g);
    })();

    scene.add(new T.AmbientLight(0xffffff, 0.35));
    var key = new T.DirectionalLight(0xffffff, 0.9); key.position.set(3, 6, 5); scene.add(key);

    /* ---- materials ---- */
    var MET = {
      silver: new T.MeshStandardMaterial({ color: 0xeceef2, metalness: 1, roughness: 0.16, envMapIntensity: 1.25 }),
      gold:   new T.MeshStandardMaterial({ color: 0xf2c76a, metalness: 1, roughness: 0.2,  envMapIntensity: 1.25 }),
      rose:   new T.MeshStandardMaterial({ color: 0xeeaf9d, metalness: 1, roughness: 0.2,  envMapIntensity: 1.25 })
    };
    var LEATHER = new T.MeshStandardMaterial({ color: 0x5b3a2b, metalness: 0, roughness: 0.62, envMapIntensity: 0.4 });
    Object.keys(MET).forEach(function (k) { track(MET[k]); }); track(LEATHER);

    /* ---- product photo -> round texture ---- */
    var texCache = {};
    function tex(p, crop) {
      var url = p && p.im && p.im[0] ? img(p.im[0], 512) : null, key = (url || "none") + "|" + crop.join(",");
      if (texCache[key]) return texCache[key];
      var cv = document.createElement("canvas"); cv.width = cv.height = 256;
      var cx = cv.getContext("2d");
      function base() {
        var gr = cx.createRadialGradient(128, 110, 10, 128, 128, 140); gr.addColorStop(0, "#ffffff"); gr.addColorStop(1, "#ffd9de");
        cx.fillStyle = gr; cx.fillRect(0, 0, 256, 256);
        cx.fillStyle = "#ff93a0"; cx.beginPath(); cx.moveTo(128, 78); cx.lineTo(166, 128); cx.lineTo(128, 178); cx.lineTo(90, 128); cx.closePath(); cx.fill();
      }
      base();
      var t = new T.CanvasTexture(cv); t.encoding = T.sRGBEncoding; t.anisotropy = 4; track(t);
      if (url) {
        var im = new Image(); im.crossOrigin = "anonymous";
        im.onload = function () {
          if (ctl.dead) return;
          var w = im.naturalWidth, h = im.naturalHeight, m = Math.min(w, h), s = m * crop[2];
          var sx = Math.max(0, Math.min(w - s, crop[0] * w - s / 2)), sy = Math.max(0, Math.min(h - s, crop[1] * h - s / 2));
          cx.save(); cx.fillStyle = "#fff"; cx.fillRect(0, 0, 256, 256); cx.drawImage(im, sx, sy, s, s, 0, 0, 256, 256); cx.restore();
          t.needsUpdate = true;
        };
        im.src = url;
      }
      texCache[key] = t; return t;
    }

    /* ---- building blocks ---- */
    var linkGeo = {};
    function linkG(r, tube, stretch) {
      var k = r + "|" + tube + "|" + stretch;
      if (!linkGeo[k]) { var g = new T.TorusGeometry(r, tube, 8, 18); g.scale(stretch, 1, 1); linkGeo[k] = track(g); }
      return linkGeo[k];
    }
    var X = new T.Vector3(), Y = new T.Vector3(), Z = new T.Vector3(), M4 = new T.Matrix4();
    function placeLink(mesh, pos, tan, nrm, alt) {
      X.copy(tan).normalize();
      Z.copy(nrm).addScaledVector(X, -nrm.dot(X)).normalize();
      Y.crossVectors(Z, X);
      if (alt) { var oy = Y.clone(); Y.copy(Z); Z.copy(oy).negate(); }
      M4.makeBasis(X, Y, Z); mesh.quaternion.setFromRotationMatrix(M4); mesh.position.copy(pos);
    }

    function medallion(p, r, mk, crop, withBail) {
      var g = new T.Group(), m = MET[mk];
      var rim = new T.Mesh(track(new T.TorusGeometry(r, r * 0.12, 14, 60)), m); g.add(rim);
      var body = new T.Mesh(track(new T.CylinderGeometry(r, r, r * 0.16, 60, 1, true)), m); body.rotation.x = Math.PI / 2; g.add(body);
      var fm = new T.MeshBasicMaterial({ map: tex(p, crop), toneMapped: false }); track(fm);
      var fg = track(new T.CircleGeometry(r * 0.99, 60));
      var f = new T.Mesh(fg, fm); f.position.z = r * 0.075; g.add(f);
      var b = new T.Mesh(fg, fm); b.position.z = -r * 0.075; b.rotation.y = Math.PI; g.add(b);
      if (withBail) {
        var bail = new T.Mesh(track(new T.TorusGeometry(r * 0.17, r * 0.05, 8, 20)), m);
        bail.position.y = r * 1.17; bail.rotation.y = Math.PI / 2; g.add(bail);
      }
      return g;
    }

    /* ---- bracelet ---- */
    var BR = 1.3;
    function bracelet(p, charms) {
      var g = new T.Group(), mk = metalKey(p), m = MET[mk], form = p ? p.f : "Chain";
      var inner = new T.Group(); g.add(inner);
      if (p && isLeather(p)) {
        var band = new T.Mesh(track(new T.TorusGeometry(BR, 0.05, 12, 120)), LEATHER); band.rotation.x = Math.PI / 2; inner.add(band);
        var band2 = new T.Mesh(track(new T.TorusGeometry(BR, 0.05, 12, 120)), LEATHER); band2.rotation.x = Math.PI / 2; band2.position.y = 0.07; inner.add(band2);
      } else if (form === "Bangle") {
        var bg = new T.TorusGeometry(BR, 0.07, 20, 140); bg.scale(1, 1, 0.8); track(bg);
        var bangle = new T.Mesh(bg, m); bangle.rotation.x = Math.PI / 2; inner.add(bangle);
      } else {
        var n = 56, geo = linkG(0.075, 0.017, 1.45), pos = new T.Vector3(), tan = new T.Vector3(), up = new T.Vector3(0, 1, 0);
        for (var i = 0; i < n; i++) {
          var a = i / n * Math.PI * 2, lk = new T.Mesh(geo, m);
          pos.set(Math.sin(a) * BR, 0, Math.cos(a) * BR); tan.set(Math.cos(a), 0, -Math.sin(a));
          placeLink(lk, pos, tan, up, i % 2); inner.add(lk);
        }
      }
      /* clasp at the back */
      var clasp = new T.Mesh(track(new T.SphereGeometry(0.1, 24, 16)), m); clasp.scale.set(1.5, 0.8, 0.8); clasp.position.set(0, 0, -BR); inner.add(clasp);
      var cring = new T.Mesh(track(new T.TorusGeometry(0.07, 0.016, 8, 20)), m); cring.position.set(0.22, 0, -BR); inner.add(cring);

      /* charms */
      var swing = [], N = charms.length;
      charms.forEach(function (cp, i) {
        var gap = 70 * Math.PI / 180, a0 = Math.PI + gap / 2, span = Math.PI * 2 - gap;
        var a = N === 1 ? 0 : a0 + span * (i / (N - 1));
        var pivot = new T.Group();
        pivot.position.set(Math.sin(a) * BR, 0, Math.cos(a) * BR);
        pivot.rotation.y = a + (i % 2 ? 0.35 : -0.35);
        var jr = new T.Mesh(track(new T.TorusGeometry(0.05, 0.013, 8, 18)), m); jr.position.y = -0.02; pivot.add(jr);
        var cr = N > 12 ? 0.15 : 0.18, drop = (i % 2 ? 0.2 : 0.42) + cr;
        var md = medallion(cp, cr, metalKey(cp), cp.f === "Medallion" ? [0.5, 0.5, 0.92] : [0.5, 0.5, 0.86], true);
        md.position.y = -drop; pivot.add(md);
        swing.push({ o: pivot, ph: Math.random() * 6.28, amp: 0.1 + Math.random() * 0.05 });
        inner.add(pivot);
      });
      return { group: g, rad: BR + 0.3, h: 1.0, swing: swing, shift: 0.18 };
    }

    /* ---- necklace ---- */
    function necklace(p) {
      var g = new T.Group(), inner = new T.Group(); g.add(inner);
      var mk = metalKey(p), m = MET[mk], Rn = 0.95, cy = 0.45, a0 = 1.18, n = 30;
      var geo = linkG(0.05, 0.012, 1.5), pos = new T.Vector3(), tan = new T.Vector3(), nz = new T.Vector3(0, 0, 1);
      for (var i = 0; i <= n; i++) {
        var f = -a0 + 2 * a0 * i / n, lk = new T.Mesh(geo, m);
        pos.set(Math.sin(f) * Rn, cy - Math.cos(f) * Rn, 0); tan.set(Math.cos(f), Math.sin(f), 0);
        placeLink(lk, pos, tan, nz, i % 2); inner.add(lk);
      }
      [-1, 1].forEach(function (sd) {
        var cl = new T.Mesh(track(new T.SphereGeometry(0.06, 16, 12)), m); cl.position.set(sd * Math.sin(a0) * Rn, cy - Math.cos(a0) * Rn, 0); inner.add(cl);
      });
      var sw = [];
      if (p.f !== "Chain") {
        var md = medallion(p, 0.27, mk, [0.5, 0.56, 0.5], true);
        var pivot = new T.Group(); pivot.position.set(0, cy - Rn, 0); md.position.y = -0.34; pivot.add(md); inner.add(pivot);
        sw.push({ o: pivot, ph: Math.random() * 6.28, amp: 0.07 });
      }
      inner.position.y = -0.1;
      return { group: g, rad: 1.1, h: 0.9, swing: sw, shift: 0 };
    }

    /* ---- earrings (a pair) ---- */
    function earrings(p) {
      var g = new T.Group(), mk = metalKey(p), m = MET[mk], sw = [], f = p.f || "";
      [-1, 1].forEach(function (sd) {
        var e = new T.Group(); e.position.x = sd * 0.5;
        if (/hoop/i.test(f)) {
          var h = new T.Mesh(track(new T.TorusGeometry(0.34, 0.04, 14, 64)), m); e.add(h);
          var bead = new T.Mesh(track(new T.SphereGeometry(0.07, 16, 12)), m); bead.position.set(0, 0.34, 0); e.add(bead);
        } else if (/stud/i.test(f)) {
          e.add(medallion(p, 0.26, mk, [0.5, 0.5, 0.7], false));
        } else {
          var wire = new T.Mesh(track(new T.TorusGeometry(0.09, 0.015, 8, 24)), m); wire.position.y = 0.42; e.add(wire);
          var md = medallion(p, 0.2, mk, [0.5, 0.5, 0.7], false); md.position.y = 0.0; e.add(md);
          sw.push({ o: e, ph: Math.random() * 6.28, amp: 0.06 });
        }
        g.add(e);
      });
      return { group: g, rad: 0.86, h: 0.5, swing: sw, shift: 0 };
    }

    /* ---- ring ---- */
    function ring(p) {
      var g = new T.Group(), mk = metalKey(p), m = MET[mk], R = 0.34;
      var inner = new T.Group(); g.add(inner);
      var band = new T.Mesh(track(new T.TorusGeometry(R, 0.05, 18, 72)), m); inner.add(band);
      var head = new T.Group(); head.position.set(0, R + 0.05, 0.0); head.rotation.x = -0.95;
      var md = medallion(p, 0.19, mk, [0.5, 0.5, 0.62], false); md.position.z = 0.0; head.add(md); inner.add(head);
      inner.rotation.y = 0.5;
      return { group: g, rad: 0.5, h: 0.5, swing: [], shift: 0 };
    }

    /* ---- assemble pieces ---- */
    var pieces = [], O = P.out;
    var brs = O.br.length ? O.br.map(function (p) { return { p: p, ch: [] }; }) : (O.ch.length ? [{ p: null, ch: [], sample: true }] : []);
    O.ch.forEach(function (cp, i) { brs[i % brs.length].ch.push(cp); });
    function add(kind, built, scale, name) {
      var wrap = new T.Group(); wrap.add(built.group); scene.add(wrap);
      pieces.push({ kind: kind, wrap: wrap, rad: built.rad * scale, scale: scale, swing: built.swing, shift: built.shift || 0, bob: Math.random() * 6.28, s: 0, tx: 0, tz: 0, ta: 0, show: true, name: name });
    }
    brs.forEach(function (b) { add("br", bracelet(b.p || { m: "Silver", f: "Chain", x: [], n: "" }, b.ch), 1); });
    O.ne.forEach(function (p) { add("ne", necklace(p), 1.25); });
    O.ea.forEach(function (p) { add("ea", earrings(p), 1.5); });
    O.ri.forEach(function (p) { add("ri", ring(p), 2.1); });

    /* ---- floor shadow + sparkles ---- */
    var shadow = (function () {
      var cv = document.createElement("canvas"); cv.width = cv.height = 128; var c = cv.getContext("2d");
      var gr = c.createRadialGradient(64, 64, 4, 64, 64, 62); gr.addColorStop(0, "rgba(120,60,75,.38)"); gr.addColorStop(1, "rgba(120,60,75,0)");
      c.fillStyle = gr; c.fillRect(0, 0, 128, 128);
      var t = new T.CanvasTexture(cv); track(t);
      var m = new T.Mesh(track(new T.PlaneGeometry(1, 1)), track(new T.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false })));
      m.rotation.x = -Math.PI / 2; scene.add(m); return m;
    })();
    var sparks = (function () {
      var cv = document.createElement("canvas"); cv.width = cv.height = 32; var c = cv.getContext("2d");
      var gr = c.createRadialGradient(16, 16, 0, 16, 16, 16); gr.addColorStop(0, "rgba(255,147,160,1)"); gr.addColorStop(1, "rgba(255,147,160,0)");
      c.fillStyle = gr; c.fillRect(0, 0, 32, 32);
      var t = new T.CanvasTexture(cv); track(t);
      var N = 46, arr = new Float32Array(N * 3), seeds = [];
      for (var i = 0; i < N; i++) { var r = 2.2 + Math.random() * 2.6, a = Math.random() * 6.28, y = (Math.random() - 0.5) * 4; arr[i * 3] = Math.cos(a) * r; arr[i * 3 + 1] = y; arr[i * 3 + 2] = Math.sin(a) * r; seeds.push(Math.random() * 6.28); }
      var geo = new T.BufferGeometry(); geo.setAttribute("position", new T.BufferAttribute(arr, 3)); track(geo);
      var pt = new T.Points(geo, track(new T.PointsMaterial({ map: t, size: 0.16, transparent: true, opacity: 0.8, depthWrite: false })));
      scene.add(pt); return { pt: pt, base: arr.slice(), seeds: seeds };
    })();

    /* ---- layout + filters ---- */
    var filter = "all", fitR = 2;
    function layout() {
      var vis = pieces.filter(function (p) { return filter === "all" || p.kind === filter; });
      pieces.forEach(function (p) { p.show = vis.indexOf(p) > -1; });
      var n = vis.length, Rl = 0;
      if (n > 1) {
        var sum = 0, mx = 0; vis.forEach(function (p) { sum += 2 * p.rad; mx = Math.max(mx, p.rad); });
        Rl = Math.max(sum / (2 * Math.PI) * 1.12, mx * 0.95);
        if (n === 2) Rl = Math.max(Rl, (vis[0].rad + vis[1].rad) / 2 * 1.08 + 0.1);
      }
      var start = n === 2 ? Math.PI / 2 : 0, reach = 0;
      vis.forEach(function (p, i) {
        var a = start + i * Math.PI * 2 / Math.max(n, 1);
        p.tx = n > 1 ? Math.sin(a) * Rl : 0; p.tz = n > 1 ? Math.cos(a) * Rl : 0; p.ta = n > 1 ? a : 0;
        reach = Math.max(reach, Math.hypot(p.tx, p.tz) + p.rad);
      });
      fitR = Math.max(reach, 1.2);
      shadow.scale.setScalar(Math.max(2.4, fitR * 2.1));
    }

    /* chips */
    var avail = ["all"].concat(["br", "ne", "ea", "ri"].filter(function (k) { return pieces.some(function (p) { return p.kind === k; }); }));
    if (avail.length > 2) {
      chipsEl.innerHTML = avail.map(function (k) { return '<button class="chip' + (k === "all" ? " on" : "") + '" data-k="' + k + '">' + FILTERS[k] + "</button>"; }).join("");
      chipsEl.addEventListener("click", function (e) {
        var b = e.target.closest("[data-k]"); if (!b) return;
        filter = b.dataset.k; chipsEl.querySelectorAll(".chip").forEach(function (c) { c.classList.toggle("on", c === b); });
        layout(); zoom = 1; poke();
      });
    } else chipsEl.style.display = "none";

    var notes = ["Pieces are shown larger than life so you can see the detail. Colours and finish may differ slightly in store."];
    if (O.ch.length && !O.br.length) notes.unshift("Your charms are shown on a sample silver bracelet.");
    if (P.cut) notes.unshift("Showing the first pieces of a large order.");
    noteEl.textContent = notes.join(" ");

    /* ---- tools + hint ---- */
    var hint = document.createElement("div"); hint.className = "v3hint"; hint.textContent = "Drag to turn · pinch or scroll to zoom";
    var tools = document.createElement("div"); tools.className = "v3tools";
    tools.innerHTML = '<button type="button" data-t="spin" aria-label="Pause rotation" title="Pause / play">❚❚</button><button type="button" data-t="reset" aria-label="Reset view" title="Reset view">⟲</button>';
    stage.appendChild(hint); stage.appendChild(tools);

    /* ---- camera + input ---- */
    var yaw = 0.5, pitch = 0.36, zoom = 1, dist = 8, auto = true, idle = 0, dragging = false, ptrs = {}, lastPinch = 0;
    var poke = function () { idle = 0; };
    function onDown(e) {
      if (e.target.closest(".v3tools")) return;
      stage.setPointerCapture && stage.setPointerCapture(e.pointerId);
      ptrs[e.pointerId] = { x: e.clientX, y: e.clientY }; dragging = true; stage.classList.add("drag"); poke(); hint.style.opacity = 0;
      if (Object.keys(ptrs).length === 2) { var k = Object.keys(ptrs); lastPinch = Math.hypot(ptrs[k[0]].x - ptrs[k[1]].x, ptrs[k[0]].y - ptrs[k[1]].y); }
    }
    function onMove(e) {
      var p = ptrs[e.pointerId]; if (!p) return;
      var ks = Object.keys(ptrs);
      if (ks.length === 2) {
        ptrs[e.pointerId] = { x: e.clientX, y: e.clientY };
        var d = Math.hypot(ptrs[ks[0]].x - ptrs[ks[1]].x, ptrs[ks[0]].y - ptrs[ks[1]].y);
        if (lastPinch) zoom = Math.max(0.45, Math.min(1.7, zoom * lastPinch / d)); lastPinch = d;
      } else {
        yaw -= (e.clientX - p.x) * 0.009; pitch = Math.max(-0.2, Math.min(1.15, pitch + (e.clientY - p.y) * 0.006));
        ptrs[e.pointerId] = { x: e.clientX, y: e.clientY };
      }
      poke();
    }
    function onUp(e) { delete ptrs[e.pointerId]; lastPinch = 0; if (!Object.keys(ptrs).length) { dragging = false; stage.classList.remove("drag"); } poke(); }
    function onWheel(e) { e.preventDefault(); zoom = Math.max(0.45, Math.min(1.7, zoom * Math.exp(e.deltaY * 0.001))); poke(); }
    function reset() { yaw = 0.5; pitch = 0.36; zoom = 1; poke(); }
    stage.addEventListener("pointerdown", onDown); stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerup", onUp); stage.addEventListener("pointercancel", onUp);
    stage.addEventListener("wheel", onWheel, { passive: false }); stage.addEventListener("dblclick", reset);
    tools.addEventListener("click", function (e) {
      var b = e.target.closest("[data-t]"); if (!b) return;
      if (b.dataset.t === "reset") reset(); else { auto = !auto; b.textContent = auto ? "❚❚" : "▶"; b.setAttribute("aria-label", auto ? "Pause rotation" : "Play rotation"); }
    });

    function resize() {
      var w = stage.clientWidth || 300, h = stage.clientHeight || 300;
      renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    }
    var ro = window.ResizeObserver ? new ResizeObserver(resize) : null; if (ro) ro.observe(stage); else window.addEventListener("resize", resize);
    resize(); layout();

    /* ---- loop ---- */
    var last = performance.now(), t = 0, raf = 0, ease = function (x) { return 1 - Math.pow(1 - x, 3); };
    function frame(now) {
      if (ctl.dead) return;
      raf = requestAnimationFrame(frame);
      var dt = Math.min(0.05, (now - last) / 1000); last = now; t += dt;
      idle += dt; if (auto && !dragging && idle > 1.8) yaw += dt * 0.32;

      var k = 1 - Math.exp(-dt * 5);
      pieces.forEach(function (p, i) {
        var goal = p.show ? p.scale : 0.0001;
        p.s += (goal - p.s) * k * (p.show ? 1 : 1.4);
        var vis = p.s > 0.002; p.wrap.visible = vis; if (!vis) return;
        p.wrap.scale.setScalar(p.s);
        p.wrap.position.x += (p.tx - p.wrap.position.x) * k;
        p.wrap.position.z += (p.tz - p.wrap.position.z) * k;
        p.wrap.position.y = Math.sin(t * 1.1 + p.bob) * 0.06 * p.scale + p.shift * p.scale;
        if (p.kind !== "br") p.wrap.rotation.y += (p.ta - p.wrap.rotation.y) * k; else p.wrap.rotation.y = Math.sin(t * 0.4 + p.bob) * 0.06;
        p.wrap.rotation.z = Math.sin(t * 0.8 + p.bob) * 0.025;
        p.swing.forEach(function (s) { s.o.rotation.z = Math.sin(t * 1.5 + s.ph) * s.amp; });
      });

      var half = Math.min(camera.fov * Math.PI / 360, Math.atan(Math.tan(camera.fov * Math.PI / 360) * camera.aspect));
      var want = (fitR * 1.06) / Math.sin(half) * zoom;
      dist += (want - dist) * (1 - Math.exp(-dt * 4));
      var cp = Math.cos(pitch);
      camera.position.set(Math.sin(yaw) * cp * dist, Math.sin(pitch) * dist, Math.cos(yaw) * cp * dist);
      camera.lookAt(0, 0, 0);

      shadow.position.y = -Math.max(1.35, fitR * 0.55);
      var arr = sparks.pt.geometry.attributes.position.array;
      for (var i = 0; i < sparks.seeds.length; i++) arr[i * 3 + 1] = sparks.base[i * 3 + 1] + Math.sin(t * 0.6 + sparks.seeds[i]) * 0.25;
      sparks.pt.geometry.attributes.position.needsUpdate = true;
      sparks.pt.rotation.y = t * 0.03;

      renderer.render(scene, camera);
    }
    raf = requestAnimationFrame(frame);
    setTimeout(function () { hint.style.opacity = 0; }, 6000);

    window.__v3 = { texCache: texCache, get yaw() { return yaw; }, set yaw(v) { yaw = v; auto = false; }, set pitch(v) { pitch = v; }, set zoom(v) { zoom = v; }, setFilter: function (k) { filter = k; layout(); }, pieces: pieces };

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
