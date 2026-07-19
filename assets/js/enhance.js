/* ============================================================
   TEAM DEV — enhance.js (detalhes premium V4) | prod: enhance.min.js
   Carrega depois do app.js. Cada módulo é independente e tolerante a falha.
   ============================================================ */
(function () {
  "use strict";
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return [].slice.call((c || document).querySelectorAll(s)); };
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---- scroll suave (Lenis) ---- */
  var lenis = null;
  if (!reduced && typeof Lenis !== "undefined") {
    /* duração maior + easing mais longo = descida bem mais suave;
       syncTouch estende a suavização para o toque (celular) */
    lenis = new Lenis({ duration: 1.75, easing: function (t) { return 1 - Math.pow(1 - t, 4); }, smoothWheel: true, wheelMultiplier: 0.95, syncTouch: true });
    (function raf(time) { lenis.raf(time); requestAnimationFrame(raf); })();
    $$('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (!id || id.length < 2) return;
        var target;
        try { target = document.querySelector(id); } catch (err) { target = null; }
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: -84, duration: 1.4 });
      });
    });
  }

  /* ---- cursor personalizado ---- */
  (function () {
    var dot = $("#cursorDot"), ring = $("#cursorRing");
    if (!fine || !dot || !ring) { document.body.classList.remove("has-cursor"); if (dot) dot.style.display = "none"; if (ring) ring.style.display = "none"; return; }
    var rx = 0, ry = 0, x = 0, y = 0;
    window.addEventListener("mousemove", function (e) {
      x = e.clientX; y = e.clientY;
      dot.style.transform = "translate(" + x + "px," + y + "px) translate(-50%,-50%)";
    });
    (function loop() { rx += (x - rx) * 0.35; ry += (y - ry) * 0.35; ring.style.transform = "translate(" + rx + "px," + ry + "px) translate(-50%,-50%)"; requestAnimationFrame(loop); })();
    $$("a, button, .card, .founder, input, summary, .chip").forEach(function (el) {
      el.addEventListener("mouseenter", function () { ring.classList.add("hot"); });
      el.addEventListener("mouseleave", function () { ring.classList.remove("hot"); });
    });
  })();

  /* ---- botões magnéticos ---- */
  if (fine && !reduced) {
    $$(".btn-primary, [data-magnetic]").forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var mx = e.clientX - r.left - r.width / 2, my = e.clientY - r.top - r.height / 2;
        el.style.transform = "translate(" + mx * 0.22 + "px," + my * 0.3 + "px)";
      });
      el.addEventListener("mouseleave", function () { el.style.transform = ""; });
    });
  }

  /* ---- partículas no hero ---- */
  (function () {
    var cv = $("#heroCanvas");
    if (!cv || reduced) { if (cv) cv.style.display = "none"; return; }
    var ctx = cv.getContext("2d"), W, H, pts = [], DP = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      var host = cv.parentElement; W = host.offsetWidth; H = host.offsetHeight;
      cv.width = W * DP; cv.height = H * DP; cv.style.width = W + "px"; cv.style.height = H + "px"; ctx.setTransform(DP, 0, 0, DP, 0, 0);
      var n = Math.min(70, Math.floor(W / 18)); pts = [];
      for (var i = 0; i < n; i++) pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35 });
    }
    resize(); window.addEventListener("resize", resize);
    function tick() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i]; p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, 6.283); ctx.fillStyle = "rgba(120,170,255,0.7)"; ctx.fill();
        for (var j = i + 1; j < pts.length; j++) {
          var q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = dx * dx + dy * dy;
          if (d < 13000) { ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.strokeStyle = "rgba(79,139,255," + (0.16 * (1 - d / 13000)) + ")"; ctx.stroke(); }
        }
      }
      requestAnimationFrame(tick);
    }
    tick();
  })();

  /* ---- contadores + barras ---- */
  (function () {
    var stats = $("#stats"); if (!stats) return;
    function run() {
      $$(".num", stats).forEach(function (num) {
        var target = parseInt(num.getAttribute("data-count"), 10) || 0;
        var val = $(".val", num); if (!val) return;
        if (reduced) { val.textContent = target; return; }
        var t0 = null, dur = 1400;
        function step(ts) { if (!t0) t0 = ts; var p = Math.min((ts - t0) / dur, 1); val.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target); if (p < 1) requestAnimationFrame(step); }
        requestAnimationFrame(step);
      });
      $$(".bar > i", stats).forEach(function (b) { b.style.width = (b.getAttribute("data-w") || "100") + "%"; });
    }
    if (!("IntersectionObserver" in window) || reduced) { run(); return; }
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { run(); io.disconnect(); } }); }, { threshold: 0.4 });
    io.observe(stats);
  })();

  /* ---- showcase: 2 projetos, comparação antes/depois (link sempre p/ site no ar) ---- */
  (function () {
    var view = $("#scView"); if (!view) return;
    var PROJ = {
      cafe: {
        link: "https://github.com/Matheus140406/CafeteriaAroma-Sabor",
        tech: ["HTML", "CSS", "JavaScript"],
        after: { url: "cafeteria-aroma-sabor", name: "Cafeteria Aroma & Sabor", shot: "assets/img/cafe-after.webp" },
        before: { url: "cafe-aroma", name: "Café Aroma", shot: "assets/img/cafearoma-after.webp" }
      },
      ac: {
        link: "https://github.com/Matheus140406/Web-Site-Ar-condicionado",
        tech: ["HTML", "Tailwind", "JavaScript"],
        after: { url: "ronaldo-refrigeracao", name: "Ronaldo Refrigeração", shot: "assets/img/ac-after.webp" },
        before: { url: "climacerto", name: "ClimaCerto", shot: "assets/img/climacerto-after.webp" }
      }
    };
    var shot = $("#scShot"), url = $("#scUrl"), name = $("#scName"), tech = $("#scTech"), link = $("#scLink");
    var curKey = "cafe";
    function render() {
      var p = PROJ[curKey]; if (!p) return;
      var v = view.classList.contains("show-before") ? p.before : p.after;
      view.classList.add("swapping");
      setTimeout(function () {
        if (shot) shot.style.backgroundImage = "url('" + v.shot + "')";
        if (url) url.textContent = v.url;
        if (name) name.textContent = v.name;
        if (link) link.href = p.link;
        if (tech) tech.innerHTML = p.tech.map(function (t) { return "<span>" + t + "</span>"; }).join("");
        view.classList.remove("swapping");
      }, 160);
    }
    $$(".sc-tab").forEach(function (t) {
      t.addEventListener("click", function () {
        $$(".sc-tab").forEach(function (x) { x.classList.remove("active"); });
        t.classList.add("active");
        curKey = t.getAttribute("data-proj");
        view.classList.remove("show-before");
        render();
      });
    });
    var toggle = $("#scToggle");
    if (toggle) toggle.addEventListener("click", function () { view.classList.toggle("show-before"); render(); });
  })();

  /* ---- idioma no drawer (sincroniza com o principal) ---- */
  (function () {
    var lsd = $("#langSelectDrawer"), ls = $("#langSelect");
    if (!lsd || !ls) return;
    lsd.value = ls.value;
    lsd.addEventListener("change", function () { ls.value = lsd.value; ls.dispatchEvent(new Event("change")); });
    ls.addEventListener("change", function () { lsd.value = ls.value; });
  })();

  /* ---- off-canvas (mobile) ---- */
  (function () {
    var burger = $("#burger"), drawer = $("#drawer"), back = $("#drawerBackdrop"), close = $("#drawerClose");
    if (!burger || !drawer) return;
    // remove o handler antigo do app.js (clona o nó)
    var fresh = burger.cloneNode(true); burger.parentNode.replaceChild(fresh, burger); burger = fresh;
    var header = $("#header"); if (header) header.classList.remove("menu-open");
    function open() { drawer.classList.add("open"); back.classList.add("open"); drawer.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; }
    function shut() { drawer.classList.remove("open"); back.classList.remove("open"); drawer.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }
    burger.addEventListener("click", open);
    if (close) close.addEventListener("click", shut);
    if (back) back.addEventListener("click", shut);
    $$(".dl, .drawer-cta", drawer).forEach(function (a) { a.addEventListener("click", shut); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") shut(); });
  })();

  /* ---- cookies: personalizar + salvar ---- */
  (function () {
    var prefs = $("#ckPrefs"), custom = $("#ckCustomize"), save = $("#ckSave"), cookie = $("#cookie");
    if (!custom || !prefs) return;
    custom.addEventListener("click", function () {
      prefs.classList.toggle("show");
      var on = prefs.classList.contains("show");
      save.style.display = on ? "" : "none";
    });
    if (save) save.addEventListener("click", function () {
      var pref = { essential: true, analytics: !!($("#ckAnalytics") || {}).checked, marketing: !!($("#ckMarketing") || {}).checked };
      try { localStorage.setItem("tdv-consent", "custom"); localStorage.setItem("tdv-consent-prefs", JSON.stringify(pref)); } catch (e) {}
      if (cookie) cookie.classList.remove("show");
    });
  })();

  /* ---- prova social: clicar destaca + pausa, fora volta (hover NÃO pausa) ---- */
  (function () {
    var track = $("#ttrack"); if (!track) return;
    function clearSel() { $$(".quote.sel", track).forEach(function (q) { q.classList.remove("sel"); }); track.classList.remove("tpaused"); }
    $$(".quote", track).forEach(function (q) {
      q.addEventListener("click", function (e) {
        e.stopPropagation();
        var was = q.classList.contains("sel");
        clearSel();
        if (!was) { q.classList.add("sel"); track.classList.add("tpaused"); }
      });
      // mobile: enquanto pressiona, aumenta e pausa; ao soltar, volta
      q.addEventListener("touchstart", function () { q.classList.add("sel"); track.classList.add("tpaused"); }, { passive: true });
      q.addEventListener("touchend", function () { q.classList.remove("sel"); track.classList.remove("tpaused"); }, { passive: true });
    });
    document.addEventListener("click", clearSel);
  })();

  /* ---- tilt 3D nos cards (mais fluidez) ---- */
  if (fine && !reduced) {
    var tiltEls = $$(".card, .wcard, .founder");
    tiltEls.forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = "perspective(800px) rotateX(" + (-py * 6).toFixed(2) + "deg) rotateY(" + (px * 6).toFixed(2) + "deg) translateY(-4px)";
      });
      el.addEventListener("mouseleave", function () { el.style.transform = ""; });
    });
  }

  /* ---- mock do hero interativo: arraste para girar (PC e celular) ---- */
  (function () {
    var mock = $("#heroMock"); if (!mock || reduced) return;
    var coarse = window.matchMedia("(pointer: coarse)").matches;
    /* ângulo de descanso: no desktop o mock vive inclinado; no celular, reto */
    var baseX = coarse ? 0 : 5, baseY = coarse ? 0 : -9;
    var dragging = false, sx = 0, sy = 0, tx = baseX, ty = baseY, cx = baseX, cy = baseY, raf = null;
    function loop() {
      cx += (tx - cx) * 0.16; cy += (ty - cy) * 0.16;
      mock.style.transform = "perspective(1100px) rotateX(" + cx.toFixed(2) + "deg) rotateY(" + cy.toFixed(2) + "deg)";
      if (dragging || Math.abs(tx - cx) > 0.25 || Math.abs(ty - cy) > 0.25) { raf = requestAnimationFrame(loop); }
      else { raf = null; cx = tx; cy = ty; mock.classList.remove("grabbed"); if (!coarse) mock.style.transform = ""; }
    }
    function kick() { if (!raf) raf = requestAnimationFrame(loop); }
    mock.addEventListener("pointerdown", function (e) {
      dragging = true; sx = e.clientX; sy = e.clientY;
      mock.classList.add("grabbed");
      try { mock.setPointerCapture(e.pointerId); } catch (err) {}
      if (lenis) lenis.stop(); /* segurando o mock, a página não rola junto */
      kick();
    });
    mock.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      ty = Math.max(-20, Math.min(20, baseY + (e.clientX - sx) * 0.18));
      tx = Math.max(-16, Math.min(16, baseX - (e.clientY - sy) * 0.18));
    });
    function release() {
      if (!dragging) return;
      dragging = false; tx = baseX; ty = baseY; /* volta com efeito de mola */
      if (lenis) lenis.start();
      kick();
    }
    mock.addEventListener("pointerup", release);
    mock.addEventListener("pointercancel", release);
    /* impede que o gesto no mock role a página por baixo */
    mock.addEventListener("touchmove", function (e) { if (dragging) e.stopPropagation(); }, { passive: true });
  })();

  /* ---- page-enter (transição app-like nas páginas internas) ---- */
  var main = $("main.member"); if (main && !reduced) main.classList.add("page-enter");
})();

(function(){var y=document.getElementById("yr");if(y)y.textContent=new Date().getFullYear();})();

/* ícones do footer: animação "pop" ao clicar */
(function () {
  var ico = document.querySelectorAll(".social-row .icon-btn");
  ico.forEach(function (a) {
    a.addEventListener("click", function () {
      a.classList.remove("pop"); void a.offsetWidth; a.classList.add("pop");
      setTimeout(function () { a.classList.remove("pop"); }, 620);
    });
  });
})();
