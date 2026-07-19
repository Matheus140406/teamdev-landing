/* ============================================================
   TEAM DEV — Interações (fonte legível) | produção: app.min.js
   ============================================================ */
(function () {
  "use strict";

  /* >>> EDITE: número da Dev Team Tech (DDI+DDD+número) e reofusque depois <<< */
  var WHATSAPP = "556194166404";
  var WA_MSG = "Olá! Vim pelo site da Dev Team Tech e quero falar sobre um projeto.";

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return [].slice.call((c || document).querySelectorAll(s)); };
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- i18n ---------- */
  /* dicionários ficam em assets/i18n/<lang>.json e são carregados sob
     demanda — o texto PT já vem no HTML, então o bundle fica pequeno */
  var I18N = {};
  function loadLang(lang, cb) {
    if (lang === "pt" || I18N[lang]) { cb(); return; }
    try {
      fetch("assets/i18n/" + lang + ".json")
        .then(function (r) { return r.json(); })
        .then(function (d) { I18N[lang] = d; cb(); })
        ["catch"](function () { cb(); });
    } catch (e) { cb(); }
  }

  var LANG_STORE = "tdv-lang";
  var ptCache = {};
  function cachePT() {
    $$("[data-i18n]").forEach(function (el) { ptCache[el.getAttribute("data-i18n")] = el.innerHTML; });
    $$("[data-ph]").forEach(function (el) { ptCache["__ph__" + el.getAttribute("data-ph")] = el.getAttribute("placeholder"); });
  }
  function applyLang(lang) {
    loadLang(lang, function () { applyLangNow(lang); });
  }
  function applyLangNow(lang) {
    var dict = (lang === "pt") ? null : (I18N[lang] || null);
    $$("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      var v = (dict && dict[k] != null) ? dict[k] : ptCache[k];
      if (v != null) el.innerHTML = v;
    });
    $$("[data-ph]").forEach(function (el) {
      var k = el.getAttribute("data-ph");
      var v = (dict && dict[k] != null) ? dict[k] : ptCache["__ph__" + k];
      if (v != null) el.setAttribute("placeholder", v);
    });
    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    /* mantém os DOIS seletores (header e menu lateral) em sincronia */
    $$("#langSelect, #langSelectDrawer").forEach(function (sel) {
      if (sel.value !== lang) sel.value = lang;
    });
    try { localStorage.setItem(LANG_STORE, lang); } catch (e) {}
  }
  cachePT();
  var startLang = "pt";
  try { startLang = localStorage.getItem(LANG_STORE) || "pt"; } catch (e) {}
  if (startLang !== "pt") applyLang(startLang);
  /* o seletor do menu lateral (mobile) também precisa aplicar o idioma */
  $$("#langSelect, #langSelectDrawer").forEach(function (sel) {
    sel.value = startLang;
    sel.addEventListener("change", function () { applyLang(sel.value); });
  });

  /* ---------- tema ---------- */
  var THEME_STORE = "tdv-theme";
  var themeSnapT = null;
  function setTheme(tm) {
    /* .theme-snap desliga transições durante a troca — sem "delay" visual */
    document.documentElement.classList.add("theme-snap");
    document.documentElement.setAttribute("data-theme", tm);
    $$(".i-moon").forEach(function (m) { m.style.display = tm === "light" ? "none" : ""; });
    $$(".i-sun").forEach(function (s) { s.style.display = tm === "light" ? "" : "none"; });
    /* barra do navegador acompanha o tema (mobile) */
    var mtc = document.querySelector('meta[name="theme-color"]');
    if (mtc) mtc.setAttribute("content", tm === "light" ? "#f5f8fd" : "#04060f");
    try { localStorage.setItem(THEME_STORE, tm); } catch (e) {}
    clearTimeout(themeSnapT);
    themeSnapT = setTimeout(function () { document.documentElement.classList.remove("theme-snap"); }, 120);
  }
  function toggleTheme() {
    setTheme(document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light");
  }
  var startTheme;
  try { startTheme = localStorage.getItem(THEME_STORE); } catch (e) {}
  if (!startTheme) startTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  setTheme(startTheme);
  $$("#themeBtn, #drawerThemeBtn").forEach(function (b) { b.addEventListener("click", toggleTheme); });

  /* ---------- WhatsApp ---------- */
  function waLink(extra) { return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(extra || WA_MSG); }
  /* data-wa-msg permite mensagem personalizada por botão (ex.: páginas dos membros) */
  /* anti-tabnabbing: noopener corta o window.opener; noreferrer é o
     fallback para navegadores antigos e ainda omite o header Referer */
  $$("[data-wa]").forEach(function (a) { a.href = waLink(a.getAttribute("data-wa-msg") || null); a.target = "_blank"; a.rel = "noopener noreferrer"; });

  /* ---------- header + progress ---------- */
  var header = $("#header"), progress = $("#scrollProgress");
  function onScroll() {
    var y = window.scrollY || 0;
    header.classList.toggle("scrolled", y > 10);
    if (progress) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- menu mobile ---------- */
  var burger = $("#burger");
  if (burger) {
    burger.addEventListener("click", function () { header.classList.toggle("menu-open"); });
    $$(".nav-links a").forEach(function (a) { a.addEventListener("click", function () { header.classList.remove("menu-open"); }); });
  }

  /* ---------- reveal + stagger ---------- */
  var targets = $$(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* ---------- carrossel de depoimentos (loop perfeito) ---------- */
  var track = $("#ttrack");
  if (track && !reduced) { track.innerHTML += track.innerHTML; }

  /* ---------- parallax (mouse + scroll) ---------- */
  var scene = $("#pxScene"), mock = $("#heroMock");
  var coarseP = window.matchMedia("(pointer: coarse)").matches;
  if (scene && !reduced) {
    var layers = $$(".px-layer", scene);
    var mx = 0, my = 0, tmx = 0, tmy = 0, sy = 0;
    /* mouse só no desktop; o parallax de scroll roda também no celular */
    if (!coarseP) window.addEventListener("mousemove", function (e) {
      tmx = (e.clientX / window.innerWidth - 0.5) * 2;
      tmy = (e.clientY / window.innerHeight - 0.5) * 2;
    });
    window.addEventListener("scroll", function () { sy = window.scrollY || 0; }, { passive: true });
    (function loop() {
      mx += (tmx - mx) * 0.06; my += (tmy - my) * 0.06;
      layers.forEach(function (l) {
        var d = parseFloat(l.getAttribute("data-depth")) || 0.2;
        l.style.transform = "translate3d(" + (mx * d * 24) + "px," + (my * d * 24 + sy * d * 0.18) + "px,0)";
      });
      /* enquanto o usuário "segura" o mock, quem manda é o drag (enhance.js) */
      if (mock && !coarseP && !mock.classList.contains("grabbed")) mock.style.transform = "rotateY(" + (-9 + mx * 4) + "deg) rotateX(" + (5 - my * 4) + "deg)";
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- ano ---------- */
  var yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- modal ---------- */
  var modal = $("#privacyModal");
  function openModal() { if (modal) { modal.classList.add("show"); document.body.style.overflow = "hidden"; } }
  function closeModal() { if (modal) { modal.classList.remove("show"); document.body.style.overflow = ""; } }
  $$("[data-modal='privacy']").forEach(function (a) { a.addEventListener("click", function (e) { e.preventDefault(); openModal(); }); });
  if (modal) {
    $$("[data-close]", modal).forEach(function (b) { b.addEventListener("click", closeModal); });
    modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });
  }

  /* ---------- cookies (LGPD) ---------- */
  var cookie = $("#cookie"), CK = "tdv-consent";
  function hasChoice() { try { return !!localStorage.getItem(CK); } catch (e) { return false; } }
  if (cookie && !hasChoice()) setTimeout(function () { cookie.classList.add("show"); }, 1200);
  $$("[data-cookie]", cookie || document).forEach(function (b) {
    b.addEventListener("click", function () { try { localStorage.setItem(CK, b.getAttribute("data-cookie")); } catch (e) {} cookie.classList.remove("show"); });
  });

  /* ---------- formulário -> WhatsApp ---------- */
  var form = $("#leadForm"), msg = $("#formMsg");
  function digits(s) { return (s || "").replace(/\D/g, ""); }
  function tr(k, fb) { var l = document.documentElement.getAttribute("lang") || "pt"; if (l.indexOf("pt") === 0) l = "pt"; return (l !== "pt" && I18N[l] && I18N[l][k]) ? I18N[l][k] : fb; }
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nome = $("#nome"), whats = $("#whats"), d = digits(whats.value);
      nome.classList.remove("invalid"); whats.classList.remove("invalid");
      if (!nome.value.trim()) {
        nome.classList.add("invalid");
        msg.textContent = tr("err.nome", "Como prefere que a gente te chame?");
        nome.focus(); return;
      }
      if (d.length < 10 || d.length > 11) {
        whats.classList.add("invalid");
        msg.textContent = tr("err.whats", "Esse número parece incompleto — confere pra mim?");
        whats.focus(); return;
      }
      msg.textContent = "";
      var prev = form.parentNode.querySelector(".form-ok"); if (prev) prev.remove();
      var ok = document.createElement("p");
      ok.className = "form-ok";
      ok.textContent = tr("ok.msg", "Recebemos sua mensagem — já estamos te respondendo no WhatsApp.");
      form.insertAdjacentElement("afterend", ok);
      /* nome limitado a 80 chars e URL-encoded no waLink — nunca vai para
         innerHTML, então não há vetor de XSS */
      window.open(waLink("Olá! Sou " + nome.value.trim().slice(0, 80) + " e quero falar com a Dev Team Tech sobre um projeto."), "_blank", "noopener,noreferrer");
    });
  }
})();
