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
  var I18N = {
    en: {
      "nav.services": "Services", "nav.diff": "Why us", "nav.about": "About",
      "nav.process": "Process", "nav.faq": "FAQ", "nav.cta": "WhatsApp", "nav.lang": "Language",
      "hero.badge": "Available for new projects",
      "hero.h1a": "Turn your digital presence into a ", "hero.h1b": "client-generating machine",
      "hero.sub": "Websites and systems with design that looks 5x more expensive — delivered on a defined, transparent timeline, with real support after launch.",
      "hero.cta1": "Talk on WhatsApp now", "hero.cta2": "See services",
      "hero.proof": "Strategy · Performance · Post-launch support",
      "mock.cta": "Chat on WhatsApp", "mock.float": "New lead received",
      "cred.1": "Responsive Sites", "cred.2": "High Performance", "cred.3": "Fast Delivery",
      "cred.4": "SEO Optimized", "cred.5": "Premium Design", "cred.6": "Post-launch Support",
      "problem.eyebrow": "The problem",
      "problem.titleA": "Your business is losing customers ", "problem.titleB": "every single day",
      "problem.sub": "While your site doesn't impress — or doesn't exist — the customer looking for you right now closes with the competitor who showed up better. It's not lack of demand. It's lack of presence.",
      "problem.c1": "Customers search Google and find the competitor first",
      "problem.c2": "A slow or amateur site kills trust in seconds",
      "problem.c3": "Without a clear WhatsApp, the lead vanishes before reaching you",
      "problem.c4": "Every day without a strong presence = an opportunity that won't return",
      "sol.eyebrow": "The solution", "sol.title": "We handle the digital. You focus on your business.",
      "sol.sub": "You don't just get a website. You get strategy, performance, real support after launch and a base ready to grow with your business.",
      "srv.lp.t": "Landing Pages that convert", "srv.lp.d": "Pages built for one mission: turn a visitor into a customer on WhatsApp — with strategic copy and fast loading.",
      "srv.inst.t": "Company Websites", "srv.inst.d": "Perceived authority from the first second. Your brand looking like a big company.",
      "srv.sys.t": "Web Systems", "srv.sys.d": "Custom software that takes processes off paper and spreadsheets.",
      "srv.dash.t": "Dashboards", "srv.dash.d": "Your numbers in real time, to decide with data — not guesswork.",
      "srv.auto.t": "Automation & Integrations", "srv.auto.d": "Repetitive tasks on autopilot and your systems talking to each other.",
      "diff.eyebrow": "Why us", "diff.titleA": "Why this becomes ", "diff.titleB": "results", "diff.titleC": ", not just a pretty site.",
      "d.1.t": "Strategic Design", "d.1.d": "Every element exists to move the visitor toward contact.",
      "d.2.t": "Clean Code", "d.2.d": "Easy maintenance and a base that grows without rework.",
      "d.3.t": "Performance", "d.3.d": "Fast loading — every second counts for conversion.",
      "d.4.t": "Security", "d.4.d": "HTTPS, best practices and LGPD compliance.",
      "d.5.t": "Real UX", "d.5.d": "Intuitive navigation on mobile and desktop.",
      "d.6.t": "AI Integration", "d.6.d": "Smart support and automation when it makes sense.",
      "d.7.t": "Scalability", "d.7.d": "Structure ready for blog, new services and languages.",
      "d.8.t": "Post-launch Support", "d.8.d": "We stay with you after the site goes live.",
      "cmp.eyebrow": "Honest comparison", "cmp.title": "Off-the-shelf site vs. a custom site built with strategy.",
      "cmp.bad.t": "Off-the-shelf site (builder)", "cmp.bad.lbl": "Common in the market", "cmp.good.lbl": "Our standard", "cmp.good.badge": "Recommended",
      "cmp.bad.1": "A template identical to a thousand competitors",
      "cmp.bad.2": "Pretty, but with no conversion strategy",
      "cmp.bad.3": "Slow, hurting your SEO and Google ranking",
      "cmp.bad.4": "Your time spent instead of on your business",
      "cmp.good.t": "Dev Team Tech",
      "cmp.good.1": "Exclusive design, tailored to your business",
      "cmp.good.2": "Every section built to generate contact",
      "cmp.good.3": "Fast, optimized for Google and mobile",
      "cmp.good.4": "We build it; you focus on selling",
      "tech.eyebrow": "Stack", "tech.title": "Modern technologies — the same as the big techs.",
      "proof.eyebrow": "Social proof", "proof.title": "Those who trusted us recommended us again.",
      "t.1": "\"The new site made the company look top-tier. We started getting WhatsApp contacts in the first week.\"",
      "t.2": "\"Delivered fast and explained everything clearly. The post-launch support made all the difference.\"",
      "t.3": "\"Professional and attentive. The system they built organized a process that was always a headache.\"",
      "t.4": "\"Close support from start to finish. I felt safe at every stage of the project.\"",
      "t.5": "\"Careful with both design and deadline. The result beat what I had imagined.\"",
      "t.6": "\"I recommend them with my eyes closed. Fast, beautiful site that actually brought new contacts.\"",
      "proof.note": "// Sample testimonials — replace with real ones (full name + result) before publishing. Never use fabricated data.",
      "about.eyebrow": "About us", "about.title": "Two founders, one obsession: your result.",
      "about.role": "CO-FOUNDER · DEV",
      "about.note": "We're passionate about technology, AI and software development. We created Dev Team Tech with a simple promise: turn your digital presence into a client-generating machine — with design that looks 5x more expensive, delivered on the agreed timeline and with real support after launch. You focus on your business; we handle the digital.",
      "proc.eyebrow": "How we work", "proc.title": "A clear process, no surprises along the way.",
      "proc.sub": "You know exactly which stage the project is in, from the first chat to support after launch.",
      "proc.1.t": "Discovery", "proc.1.d": "We understand your business and goal.",
      "proc.2.t": "Planning", "proc.2.d": "Structure, copy and strategy.",
      "proc.3.t": "Design", "proc.3.d": "Visual identity and prototype.",
      "proc.4.t": "Development", "proc.4.d": "Clean, performant code.",
      "proc.5.t": "Testing", "proc.5.d": "Responsive, fast and bug-free.",
      "proc.6.t": "Delivery", "proc.6.d": "Live, with you in control.",
      "proc.7.t": "Support", "proc.7.d": "Ongoing follow-up.",
      "faq.eyebrow": "FAQ", "faq.title": "The questions everyone asks.",
      "faq.1.q": "You're new — do you have enough experience?",
      "faq.1.a": "Yes. We work with a structured, staged process and modern technologies. You follow each phase and approve the result before it goes live.",
      "faq.2.q": "What's the delivery time?",
      "faq.2.a": "It depends on scope. As a rule, the timeline is up to 90 days, set in writing during planning according to the project's complexity.",
      "faq.3.q": "How much does it cost?",
      "faq.3.a": "It varies by project. But think about the cost of not having one: every day without a strong presence is a customer closing with a competitor. Message us on WhatsApp for a no-commitment assessment.",
      "faq.4.q": "What about support after the site is live?",
      "faq.4.a": "It stays with us. Post-launch support is an explicit advantage, not fine print — you're not left alone after delivery.",
      "faq.5.q": "Who owns the hosting and the code?",
      "faq.5.a": "The project is yours. We deliver the code and guide the hosting, or host it for you. Full transparency.",
      "final.eyebrow": "Let's start", "final.h2a": "Your next customer might be looking for you ", "final.h2b": "right now",
      "final.p": "Leave your name and WhatsApp — we'll reach out to understand your project. No commitment.",
      "final.btn": "I want my site", "final.alt": "Prefer to message on WhatsApp?", "final.altlink": "Talk now →",
      "final.lgpd": "By submitting, you agree that Dev Team Tech uses your data only to contact you about your project.",
      "ph.nome": "Your name", "ph.whats": "Your WhatsApp with area code",
      "foot.tag": "Websites, landing pages and systems that turn digital presence into customers. Brazil and abroad.",
      "foot.nav": "Navigation", "foot.contact": "Contact", "foot.privacy": "Privacy Policy", "foot.rights": "All rights reserved.",
      "pp.title": "Privacy Policy",
      "pp.intro": "This policy describes how Dev Team Tech collects and processes your data, in compliance with the Brazilian LGPD (Law 13.709/2018).",
      "pp.h1": "What data we collect", "pp.p1": "We only collect the name and WhatsApp number provided in our forms and contact channels.",
      "pp.h2": "How we use it", "pp.p2": "The data has a single purpose: to contact you about your project. We do not sell or share your data for marketing.",
      "pp.h3": "Your rights", "pp.p3": "You can request access, correction or deletion of your data at any time via devteam2026tech@gmail.com.",
      "pp.h4": "Cookies", "pp.p4": "We use essential cookies and, with your consent, measurement cookies to improve the experience.",
      "ck.text": "We use cookies to improve your experience and measure site usage. By continuing, you agree to our Privacy Policy.",
      "ck.accept": "Accept", "ck.reject": "Reject",
      "err.nome": "How should we call you?",
      "err.whats": "That number looks incomplete — can you check it?",
      "ok.msg": "Got your message — we're replying on WhatsApp right now.",
      "st.1": "Conversion-focused", "st.2": "Steps in our process", "st.3": "Technologies in our stack", "st.4": "Code that's yours",
      "st.note": "// Illustrative figures of what we deliver — update with real metrics as projects roll in.",
      "pf.eyebrow": "Work", "pf.title": "The kind of project we deliver.",
      "pf.1.t": "Conversion landing page", "pf.1.d": "[ sample project ]",
      "pf.2.t": "Management dashboard", "pf.2.d": "[ sample project ]",
      "pf.3.t": "Company website", "pf.3.d": "[ sample project ]",
      "pf.note": "// Illustrative cards — replace with screenshots/links of real projects as delivered.",
      "ba.eyebrow": "Before & After", "ba.title": "The difference a strategic site makes.",
      "ba.before": "Amateur site / no strategy", "ba.after": "Dev Team Tech site",
      "lg.eyebrow": "Trust", "lg.note": "// Illustrative logos — replace with real clients (with permission) before publishing.",
      "proc.msg": "A transparent, organized process with no surprises throughout development.",
      "ck.cat1": "Essential <small>Required for the site to work</small>",
      "ck.cat2": "Analytics <small>Usage metrics (anonymous)</small>",
      "ck.cat3": "Marketing <small>Remarketing and campaigns</small>",
      "ck.custom": "Customize", "ck.save": "Save preferences",
      "pf.note": "Conceptual demos of our capability — they do not represent real clients.",
      "w.1.c": "Healthcare", "w.1.n": "Premium Clinic Platform", "w.1.o": "Online booking and digital records with a sophisticated brand experience.", "w.1.r": "More bookings, fewer no-shows.",
      "w.2.c": "Legal", "w.2.n": "Law Firm Landing Page", "w.2.o": "Authority and qualified case capture via form and WhatsApp.", "w.2.r": "More qualified leads and authority.",
      "w.3.c": "Food", "w.3.n": "Restaurant System", "w.3.o": "Digital menu, reservations and orders integrated with WhatsApp.", "w.3.r": "More orders, organized operation.",
      "w.4.c": "Real Estate", "w.4.n": "Real Estate Platform", "w.4.o": "Property catalog with search, filters and direct contact.", "w.4.r": "Visits booked straight from the site.",
      "w.5.c": "Corporate", "w.5.n": "Business Dashboard", "w.5.o": "Real-time business metrics in a single panel.", "w.5.r": "Decisions with data, not guesswork.",
      "w.6.c": "Fitness", "w.6.n": "Gym Website", "w.6.o": "Plans, classes and sign-up with strong social proof.", "w.6.r": "More sign-ups, less friction.",
      "w.7.c": "Architecture", "w.7.n": "Architecture Platform", "w.7.o": "Immersive visual portfolio that elevates every project.", "w.7.r": "A portfolio that wins contracts.",
      "w.8.c": "Startup", "w.8.n": "Startup Landing Page", "w.8.o": "Product validation with conversion copy and lead capture.", "w.8.r": "Traction and a growing waitlist.",
      "sec.eyebrow": "Security & compliance", "sec.title": "Your data — and your clients' — handled responsibly.",
      "sec.sub": "Privacy and security aren't a detail: they're part of how we build every project.",
      "sc.1.t": "LGPD compliance", "sc.1.d": "Collection with a clear purpose and legal basis — the way the law requires.",
      "sc.2.t": "Privacy by default", "sc.2.d": "We collect only what's needed and never sell your data.",
      "sc.3.t": "Data security", "sc.3.d": "Protection best practices at every layer of the project.",
      "sc.4.t": "Encryption (HTTPS)", "sc.4.d": "Secure connection by default and encryption where applicable.",
      "sc.5.t": "Full transparency", "sc.5.d": "You know what we collect, why and for how long.",
      "sc.6.t": "Cookie consent", "sc.6.d": "Banner with accept, reject and customize — the user's choice.",
      "sc.7.t": "Dev best practices", "sc.7.d": "Clean, secure code built to last and to scale.",
      "sc.8.t": "Trust you can see", "sc.8.d": "A secure site also conveys credibility to your client.",
      "srv.host.t": "Hosting", "srv.host.d": "We handle your site's hosting, with domain and SSL set up.",
      "srv.ads.t": "Paid Traffic", "srv.ads.d": "Ad management (Google/Meta) to bring more clients to your site.",
      "srv.apart": "Add-on service",
      "ba.after": "Real project: Cafeteria Aroma & Sabor",
      "ba.cap": "A real project built by Dev Team Tech — a responsive, fast front-end with direct WhatsApp contact.",
      "ba.link": "View on GitHub",
      "sc.before": "Before: a generic site, no strategy", "sc.depois": "After — strategic version", "sc.antes": "Before — initial version",
      "sc.seeBefore": "See the \"before\"", "sc.seeAfter": "See the \"after\"", "sc.open": "Visit the site"
    }
  };
  I18N.es = {
    "nav.services": "Servicios", "nav.diff": "Diferenciales", "nav.about": "Nosotros", "nav.process": "Proceso", "nav.faq": "FAQ", "nav.cta": "WhatsApp", "nav.lang": "Idioma",
    "hero.badge": "Disponibles para nuevos proyectos",
    "hero.h1a": "Tu presencia digital convertida en una ", "hero.h1b": "máquina de generar clientes",
    "hero.sub": "Sitios y sistemas con un diseño que parece costar 5x más — entregados con un plazo definido y transparente, y con soporte real después del lanzamiento.",
    "hero.cta1": "Hablar por WhatsApp ahora", "hero.cta2": "Ver servicios",
    "hero.proof": "Estrategia · Rendimiento · Soporte posventa",
    "mock.cta": "Hablar por WhatsApp", "mock.float": "Nuevo lead recibido",
    "cred.1": "Sitios Responsivos", "cred.2": "Alto Rendimiento", "cred.3": "Entrega Ágil", "cred.4": "SEO Optimizado", "cred.5": "Diseño Premium", "cred.6": "Soporte Posventa",
    "problem.eyebrow": "El problema",
    "problem.titleA": "Tu negocio pierde clientes ", "problem.titleB": "todos los días",
    "problem.sub": "Mientras tu sitio no impresiona — o no existe — el cliente que te buscaba ahora mismo cierra con el competidor que apareció mejor. No es falta de demanda. Es falta de presencia.",
    "problem.c1": "El cliente busca en Google y encuentra primero al competidor",
    "problem.c2": "Un sitio lento o amateur derriba la confianza en segundos",
    "problem.c3": "Sin un WhatsApp claro, el lead desaparece antes de hablar contigo",
    "problem.c4": "Cada día sin una presencia fuerte = una oportunidad que no vuelve",
    "sol.eyebrow": "La solución", "sol.title": "Nosotros cuidamos lo digital. Tú te enfocas en tu negocio.",
    "sol.sub": "No recibes solo un sitio. Recibes estrategia, rendimiento, soporte real después de la entrega y una base lista para crecer con tu negocio.",
    "srv.lp.t": "Landing Pages que convierten", "srv.lp.d": "Páginas con una sola misión: convertir al visitante en cliente por WhatsApp — con copy estratégico y carga rápida.",
    "srv.inst.t": "Sitios Institucionales", "srv.inst.d": "Autoridad percibida desde el primer segundo. Tu marca con cara de gran empresa.",
    "srv.sys.t": "Sistemas Web", "srv.sys.d": "Software a medida que saca los procesos del papel y de la planilla.",
    "srv.dash.t": "Dashboards", "srv.dash.d": "Tus números en tiempo real, para decidir con datos — no por intuición.",
    "srv.auto.t": "Automatizaciones e Integraciones", "srv.auto.d": "Tareas repetitivas en automático y tus sistemas conversando entre sí.",
    "srv.host.t": "Hospedaje", "srv.host.d": "Cuidamos el hospedaje de tu sitio, con dominio y SSL configurados.",
    "srv.ads.t": "Tráfico Pago", "srv.ads.d": "Gestión de anuncios (Google/Meta) para traer más clientes a tu sitio.",
    "srv.apart": "Servicio aparte",
    "diff.eyebrow": "Diferenciales", "diff.titleA": "Por qué esto se vuelve ", "diff.titleB": "resultado", "diff.titleC": ", y no solo un sitio bonito.",
    "d.1.t": "Diseño Estratégico", "d.1.d": "Cada elemento existe para llevar al visitante al contacto.",
    "d.2.t": "Código Limpio", "d.2.d": "Mantenimiento fácil y una base que crece sin retrabajo.",
    "d.3.t": "Rendimiento", "d.3.d": "Carga rápida — cada segundo cuenta para la conversión.",
    "d.4.t": "Seguridad", "d.4.d": "HTTPS, buenas prácticas y conformidad con la LGPD.",
    "d.5.t": "UX de verdad", "d.5.d": "Navegación intuitiva en el móvil y en el escritorio.",
    "d.6.t": "Integración con IA", "d.6.d": "Atención y automatizaciones inteligentes cuando tiene sentido.",
    "d.7.t": "Escalabilidad", "d.7.d": "Estructura lista para blog, nuevos servicios e idiomas.",
    "d.8.t": "Soporte Posventa", "d.8.d": "Seguimos contigo después de que el sitio esté en línea.",
    "cmp.eyebrow": "Comparación honesta", "cmp.title": "Sitio de plantilla vs. sitio a medida con estrategia.",
    "cmp.bad.t": "Sitio de plantilla (constructor)", "cmp.bad.lbl": "Común en el mercado", "cmp.good.lbl": "Nuestro estándar", "cmp.good.badge": "Recomendado",
    "cmp.bad.1": "Una plantilla idéntica a la de mil competidores",
    "cmp.bad.2": "Bonito, pero sin estrategia de conversión",
    "cmp.bad.3": "Lento, perjudicando tu SEO y tu posición en Google",
    "cmp.bad.4": "Tu tiempo gastado en lugar de en tu negocio",
    "cmp.good.t": "Dev Team Tech",
    "cmp.good.1": "Diseño exclusivo, a la medida de tu negocio",
    "cmp.good.2": "Cada sección pensada para generar contacto",
    "cmp.good.3": "Rápido, optimizado para Google y móvil",
    "cmp.good.4": "Nosotros lo hacemos; tú te enfocas en vender",
    "tech.eyebrow": "Stack", "tech.title": "Tecnologías modernas — las mismas de las big techs.",
    "proof.eyebrow": "Prueba social", "proof.title": "Quien confió, volvió a recomendarnos.",
    "t.1": "\"El nuevo sitio le dio a la empresa cara de primer nivel. Empezamos a recibir contactos por WhatsApp en la primera semana.\"",
    "t.2": "\"Entregaron rápido y explicaron todo con claridad. El soporte posventa marcó la diferencia.\"",
    "t.3": "\"Profesionales y atentos. El sistema que hicieron organizó un proceso que siempre era un dolor de cabeza.\"",
    "t.4": "\"Acompañamiento cercano de principio a fin. Me sentí seguro en cada etapa del proyecto.\"",
    "t.5": "\"Cuidadosos con el diseño y con el plazo. El resultado superó lo que imaginaba.\"",
    "t.6": "\"Los recomiendo con los ojos cerrados. Sitio rápido, bonito y que de verdad trajo contactos nuevos.\"",
    "proof.note": "// Testimonios de ejemplo — reemplazar por reales (nombre completo + resultado) antes de publicar. Nunca usar datos inventados.",
    "about.eyebrow": "Nosotros", "about.title": "Dos fundadores, una obsesión: tu resultado.",
    "about.role": "COFUNDADOR · DEV",
    "about.note": "Somos apasionados por la tecnología, la IA y el desarrollo de sistemas. Creamos Dev Team Tech con una promesa simple: convertir tu presencia digital en una máquina de generar clientes — con un diseño que parece costar 5x más, entregado en el plazo acordado y con soporte real después del lanzamiento. Tú te enfocas en tu negocio; nosotros cuidamos lo digital.",
    "proc.eyebrow": "Cómo trabajamos", "proc.title": "Un proceso claro, sin sorpresas en el camino.",
    "proc.sub": "Sabes exactamente en qué etapa está el proyecto, desde la primera charla hasta el soporte posventa.",
    "proc.1.t": "Descubrimiento", "proc.1.d": "Entendemos tu negocio, tu público y el objetivo del proyecto.",
    "proc.2.t": "Planificación", "proc.2.d": "Estructura, copy y arquitectura definidas por escrito.",
    "proc.3.t": "Diseño", "proc.3.d": "Identidad visual y prototipo navegable para aprobar.",
    "proc.4.t": "Desarrollo", "proc.4.d": "Código limpio, rápido y listo para escalar.",
    "proc.5.t": "Pruebas", "proc.5.d": "Responsivo, rápido y sin bugs en cualquier pantalla.",
    "proc.6.t": "Entrega", "proc.6.d": "En línea, con vos en control total.",
    "proc.7.t": "Soporte", "proc.7.d": "Acompañamiento continuo después del lanzamiento.",
    "proc.msg": "Proceso transparente, organizado y sin sorpresas durante todo el desarrollo.",
    "faq.eyebrow": "Dudas", "faq.title": "Las preguntas que todos hacen.",
    "faq.1.q": "Son nuevos — ¿tienen suficiente experiencia?",
    "faq.1.a": "Sí. Trabajamos con un proceso estructurado por etapas y tecnologías modernas. Acompañas cada fase y apruebas el resultado antes de salir en línea.",
    "faq.2.q": "¿Cuál es el plazo de entrega?",
    "faq.2.a": "Depende del alcance. Por lo general el plazo es de hasta 90 días, definido por escrito en la planificación según la complejidad del proyecto.",
    "faq.3.q": "¿Cuánto cuesta?",
    "faq.3.a": "Varía según el proyecto. Pero piensa en el costo de no tenerlo: cada día sin una presencia fuerte es un cliente cerrando con la competencia. Escríbenos por WhatsApp para un diagnóstico sin compromiso.",
    "faq.4.q": "¿Y el soporte después de que el sitio esté en línea?",
    "faq.4.a": "Sigue con nosotros. El soporte posventa es un diferencial explícito, no letra pequeña — no te quedas solo tras la entrega.",
    "faq.5.q": "¿De quién es el hospedaje y el código?",
    "faq.5.a": "El proyecto es tuyo. Entregamos el código y orientamos el hospedaje, o lo alojamos por ti. Transparencia total.",
    "final.eyebrow": "Empecemos", "final.h2a": "Tu próximo cliente podría estar buscándote ", "final.h2b": "ahora",
    "final.p": "Deja tu nombre y WhatsApp — te contactamos para entender tu proyecto. Sin compromiso.",
    "final.btn": "Quiero mi sitio", "final.alt": "¿Prefieres escribir por WhatsApp?", "final.altlink": "Hablar ahora →",
    "final.lgpd": "Al enviar, aceptas que Dev Team Tech use tus datos solo para contactarte sobre tu proyecto.",
    "ph.nome": "Tu nombre", "ph.whats": "Tu WhatsApp con código de área",
    "foot.tag": "Sitios, landing pages y sistemas que convierten la presencia digital en clientes. Brasil y exterior.",
    "foot.nav": "Navegación", "foot.contact": "Contacto", "foot.privacy": "Política de Privacidad", "foot.rights": "Todos los derechos reservados.",
    "pp.title": "Política de Privacidad",
    "pp.intro": "Esta política describe cómo Dev Team Tech recopila y trata tus datos, conforme a la LGPD (Ley 13.709/2018 de Brasil).",
    "pp.h1": "Qué datos recopilamos", "pp.p1": "Solo recopilamos el nombre y el número de WhatsApp informados en nuestros formularios y canales de contacto.",
    "pp.h2": "Para qué los usamos", "pp.p2": "Los datos tienen una única finalidad: contactarte sobre tu proyecto. No vendemos ni compartimos tus datos con fines de marketing.",
    "pp.h3": "Tus derechos", "pp.p3": "Puedes solicitar acceso, corrección o eliminación de tus datos en cualquier momento por devteam2026tech@gmail.com.",
    "pp.h4": "Cookies", "pp.p4": "Usamos cookies esenciales y, con tu consentimiento, cookies de medición para mejorar la experiencia.",
    "ck.text": "Usamos cookies para mejorar tu experiencia y medir el uso del sitio. Al continuar, aceptas nuestra Política de Privacidad.",
    "ck.accept": "Aceptar", "ck.reject": "Rechazar", "ck.custom": "Personalizar", "ck.save": "Guardar preferencias",
    "ck.cat1": "Esenciales <small>Necesarias para que el sitio funcione</small>",
    "ck.cat2": "Análisis <small>Métricas de uso (anónimas)</small>",
    "ck.cat3": "Marketing <small>Remarketing y campañas</small>",
    "err.nome": "¿Cómo prefieres que te llamemos?",
    "err.whats": "Ese número parece incompleto — ¿lo revisas?",
    "ok.msg": "Recibimos tu mensaje — ya te estamos respondiendo por WhatsApp.",
    "st.1": "Enfoque en conversión", "st.2": "Etapas en el proceso", "st.3": "Tecnologías en el stack", "st.4": "Código que es tuyo",
    "st.note": "// Cifras ilustrativas de lo que entregamos — ajusta con métricas reales según los proyectos.",
    "pf.eyebrow": "Proyectos", "pf.title": "El tipo de proyecto que entregamos.",
    "pf.note": "Demostraciones conceptuales de nuestra capacidad — no representan clientes reales.",
    "w.1.c": "Salud", "w.1.n": "Plataforma para Clínica Premium", "w.1.o": "Agenda online y ficha digital con una experiencia de marca sofisticada.", "w.1.r": "Más citas y menos ausencias.",
    "w.2.c": "Legal", "w.2.n": "Landing para Estudio Jurídico", "w.2.o": "Autoridad y captación de casos calificados vía formulario y WhatsApp.", "w.2.r": "Leads más calificados y autoridad.",
    "w.3.c": "Gastronomía", "w.3.n": "Sistema para Restaurante", "w.3.o": "Menú digital, reservas y pedidos integrados con WhatsApp.", "w.3.r": "Más pedidos y operación organizada.",
    "w.4.c": "Inmobiliario", "w.4.n": "Plataforma Inmobiliaria", "w.4.o": "Catálogo de inmuebles con búsqueda, filtros y contacto directo.", "w.4.r": "Visitas agendadas desde el sitio.",
    "w.5.c": "Corporativo", "w.5.n": "Dashboard Empresarial", "w.5.o": "Indicadores de negocio en tiempo real, en un solo panel.", "w.5.r": "Decisiones con datos, no por intuición.",
    "w.6.c": "Fitness", "w.6.n": "Sitio para Gimnasio", "w.6.o": "Planes, clases e inscripción con prueba social fuerte.", "w.6.r": "Más inscripciones y menos fricción.",
    "w.7.c": "Arquitectura", "w.7.n": "Plataforma para Arquitectura", "w.7.o": "Portafolio visual inmersivo que realza cada proyecto.", "w.7.r": "Un portafolio que cierra contratos.",
    "w.8.c": "Startup", "w.8.n": "Landing Page para Startup", "w.8.o": "Validación de producto con copy de conversión y captación de leads.", "w.8.r": "Tracción y lista de espera creciendo.",
    "sec.eyebrow": "Seguridad y conformidad", "sec.title": "Tus datos — y los de tu cliente — tratados con responsabilidad.",
    "sec.sub": "La privacidad y la seguridad no son un detalle: son parte de cómo construimos cada proyecto.",
    "sc.1.t": "Conformidad con la LGPD", "sc.1.d": "Recolección con finalidad clara y base legal — como exige la ley.",
    "sc.2.t": "Privacidad por defecto", "sc.2.d": "Recopilamos solo lo necesario y nunca vendemos tus datos.",
    "sc.3.t": "Seguridad de datos", "sc.3.d": "Buenas prácticas de protección en cada capa del proyecto.",
    "sc.4.t": "Cifrado (HTTPS)", "sc.4.d": "Conexión segura por defecto y cifrado cuando aplica.",
    "sc.5.t": "Transparencia total", "sc.5.d": "Sabes qué recopilamos, por qué y por cuánto tiempo.",
    "sc.6.t": "Consentimiento de cookies", "sc.6.d": "Banner con aceptar, rechazar y personalizar — elección del usuario.",
    "sc.7.t": "Buenas prácticas de dev", "sc.7.d": "Código limpio y seguro, pensado para durar y escalar.",
    "sc.8.t": "Confianza que se ve", "sc.8.d": "Un sitio seguro también transmite credibilidad a tu cliente.",
    "ba.eyebrow": "Antes y Después", "ba.title": "La diferencia que hace un sitio estratégico.",
    "ba.before": "Sitio amateur / sin estrategia", "ba.after": "Proyecto real: Cafeteria Aroma & Sabor",
    "ba.cap": "Un proyecto real desarrollado por Dev Team Tech — front-end responsivo, rápido y con contacto directo por WhatsApp.", "ba.link": "Ver en GitHub",
    "sc.before": "Antes: sitio genérico, sin estrategia", "sc.depois": "Después — versión estratégica", "sc.antes": "Antes — versión inicial", "sc.seeBefore": "Ver el \"antes\"", "sc.seeAfter": "Ver el \"después\"", "sc.open": "Visitar el sitio",
    "lg.eyebrow": "Confianza", "lg.note": "// Logos ilustrativos — reemplazar por clientes reales (con autorización) antes de publicar."
  };

  I18N.fr = {
    "nav.services": "Services", "nav.diff": "Atouts", "nav.about": "À propos", "nav.process": "Processus", "nav.faq": "FAQ", "nav.cta": "WhatsApp", "nav.lang": "Langue",
    "hero.badge": "Disponibles pour de nouveaux projets",
    "hero.h1a": "Votre présence digitale transformée en une ", "hero.h1b": "machine à générer des clients",
    "hero.sub": "Des sites et systèmes au design qui semble coûter 5x plus — livrés dans un délai défini et transparent, avec un vrai support après la mise en ligne.",
    "hero.cta1": "Parler sur WhatsApp", "hero.cta2": "Voir les services", "hero.proof": "Stratégie · Performance · Support après-vente",
    "mock.cta": "Parler sur WhatsApp", "mock.float": "Nouveau lead reçu",
    "cred.1": "Sites Responsives", "cred.2": "Haute Performance", "cred.3": "Livraison Rapide", "cred.4": "SEO Optimisé", "cred.5": "Design Premium", "cred.6": "Support Après-vente",
    "problem.eyebrow": "Le problème", "problem.titleA": "Votre entreprise perd des clients ", "problem.titleB": "chaque jour",
    "problem.sub": "Tant que votre site n'impressionne pas — ou n'existe pas — le client qui vous cherchait choisit le concurrent qui paraissait meilleur. Ce n'est pas un manque de demande, mais de présence.",
    "problem.c1": "Le client cherche sur Google et trouve d'abord le concurrent",
    "problem.c2": "Un site lent ou amateur détruit la confiance en quelques secondes",
    "problem.c3": "Sans WhatsApp clair, le lead disparaît avant de vous parler",
    "problem.c4": "Chaque jour sans présence forte = une opportunité perdue",
    "sol.eyebrow": "La solution", "sol.title": "Nous gérons le digital. Vous vous concentrez sur votre activité.",
    "sol.sub": "Vous ne recevez pas qu'un site. Vous recevez de la stratégie, de la performance, un vrai support après livraison et une base prête à grandir.",
    "srv.lp.t": "Landing Pages qui convertissent", "srv.lp.d": "Des pages avec une seule mission : convertir le visiteur en client via WhatsApp — copy stratégique et chargement rapide.",
    "srv.inst.t": "Sites Vitrines", "srv.inst.d": "Une autorité perçue dès la première seconde. Votre marque avec une allure de grande entreprise.",
    "srv.sys.t": "Systèmes Web", "srv.sys.d": "Des logiciels sur mesure qui sortent vos processus du papier et du tableur.",
    "srv.dash.t": "Tableaux de bord", "srv.dash.d": "Vos chiffres en temps réel, pour décider avec des données.",
    "srv.auto.t": "Automatisations & Intégrations", "srv.auto.d": "Les tâches répétitives en automatique et vos systèmes qui se parlent.",
    "srv.host.t": "Hébergement", "srv.host.d": "Nous gérons l'hébergement de votre site, avec domaine et SSL configurés.",
    "srv.ads.t": "Publicité payante", "srv.ads.d": "Gestion d'annonces (Google/Meta) pour amener plus de clients sur votre site.",
    "srv.apart": "Service à part",
    "diff.eyebrow": "Atouts", "diff.titleA": "Pourquoi cela devient ", "diff.titleB": "un résultat", "diff.titleC": ", et pas juste un joli site.",
    "d.1.t": "Design Stratégique", "d.1.d": "Chaque élément existe pour mener le visiteur au contact.",
    "d.2.t": "Code Propre", "d.2.d": "Maintenance facile et une base qui grandit sans refonte.",
    "d.3.t": "Performance", "d.3.d": "Chargement rapide — chaque seconde compte pour la conversion.",
    "d.4.t": "Sécurité", "d.4.d": "HTTPS, bonnes pratiques et conformité RGPD/LGPD.",
    "d.5.t": "Vraie UX", "d.5.d": "Navigation intuitive sur mobile et ordinateur.",
    "d.6.t": "Intégration IA", "d.6.d": "Support et automatisations intelligents quand c'est pertinent.",
    "d.7.t": "Évolutivité", "d.7.d": "Structure prête pour blog, nouveaux services et langues.",
    "d.8.t": "Support Après-vente", "d.8.d": "Nous restons avec vous après la mise en ligne.",
    "cmp.eyebrow": "Comparaison honnête", "cmp.title": "Site standard vs. site sur mesure avec stratégie.",
    "cmp.bad.t": "Site standard (constructeur)", "cmp.bad.lbl": "Courant sur le marché", "cmp.good.lbl": "Notre standard", "cmp.good.badge": "Recommandé",
    "cmp.bad.1": "Un modèle identique à des dizaines de concurrents",
    "cmp.bad.2": "Joli, mais sans focalisation sur la conversion",
    "cmp.bad.3": "Lent, ce qui nuit au SEO et à Google",
    "cmp.bad.4": "Votre temps dépensé au lieu de votre activité",
    "cmp.good.t": "Dev Team Tech",
    "cmp.good.1": "Design sur mesure, à l'image de votre activité",
    "cmp.good.2": "Chaque section pensée pour générer du contact",
    "cmp.good.3": "Rapide, optimisé pour Google et mobile",
    "cmp.good.4": "On le fait ; vous vous concentrez sur la vente",
    "tech.eyebrow": "Stack", "tech.title": "Des technologies modernes — celles des big techs.",
    "proof.eyebrow": "Preuve sociale", "proof.title": "Ceux qui ont fait confiance nous recommandent.",
    "t.1": "\"Le nouveau site a donné à l'entreprise une allure de premier plan. Des contacts WhatsApp dès la première semaine.\"",
    "t.2": "\"Livraison rapide et tout expliqué clairement. Le support après-vente a fait la différence.\"",
    "t.3": "\"Professionnels et attentifs. Le système a organisé un processus toujours pénible.\"",
    "t.4": "\"Un suivi proche du début à la fin. Je me suis senti en confiance à chaque étape.\"",
    "t.5": "\"Soigneux sur le design et les délais. Le résultat a dépassé mes attentes.\"",
    "t.6": "\"Je les recommande les yeux fermés. Site rapide, beau et qui a vraiment apporté des contacts.\"",
    "proof.note": "// Témoignages illustratifs (noms fictifs) — exemples de mise en page.",
    "about.eyebrow": "À propos", "about.title": "Deux fondateurs, une obsession : votre résultat.",
    "about.role": "COFONDATEUR · DEV",
    "about.note": "Passionnés de technologie, d'IA et de développement de systèmes, nous avons créé Dev Team Tech avec une promesse simple : transformer votre présence digitale en une machine à générer des clients — un design qui semble coûter 5x plus, livré dans le délai convenu, avec un vrai support. Vous gérez votre activité ; nous gérons le digital.",
    "proc.eyebrow": "Notre méthode", "proc.title": "Un processus clair, sans surprises en chemin.",
    "proc.sub": "Vous savez exactement à quelle étape se trouve le projet, du premier échange au support après-vente.",
    "proc.1.t": "Découverte", "proc.1.d": "Nous comprenons votre activité, votre public et l'objectif.",
    "proc.2.t": "Planification", "proc.2.d": "Structure, copy et architecture définies par écrit.",
    "proc.3.t": "Design", "proc.3.d": "Identité visuelle et prototype navigable à valider.",
    "proc.4.t": "Développement", "proc.4.d": "Code propre, rapide et prêt à évoluer.",
    "proc.5.t": "Tests", "proc.5.d": "Responsive, rapide et sans bug sur tout écran.",
    "proc.6.t": "Livraison", "proc.6.d": "En ligne, avec vous aux commandes.",
    "proc.7.t": "Support", "proc.7.d": "Un accompagnement continu après la mise en ligne.",
    "proc.msg": "Un processus transparent, organisé et sans surprises tout au long du développement.",
    "faq.eyebrow": "Questions", "faq.title": "Les questions que tout le monde pose.",
    "faq.1.q": "Vous êtes nouveaux — avez-vous assez d'expérience ?",
    "faq.1.a": "Oui. Nous travaillons avec un processus structuré par étapes et des technologies modernes. Vous suivez chaque phase et validez avant la mise en ligne.",
    "faq.2.q": "Quel est le délai de livraison ?",
    "faq.2.a": "Cela dépend du périmètre. En général, le délai est de 90 jours maximum, fixé par écrit lors de la planification selon la complexité du projet.",
    "faq.3.q": "Combien ça coûte ?",
    "faq.3.a": "Cela varie selon le projet. Mais pensez au coût de ne pas l'avoir : chaque jour sans présence forte est un client qui choisit la concurrence. Écrivez-nous sur WhatsApp pour un diagnostic sans engagement.",
    "faq.4.q": "Et le support après la mise en ligne ?",
    "faq.4.a": "Il continue. Le support après-vente est un atout explicite, pas une clause cachée — vous n'êtes pas seul après la livraison.",
    "faq.5.q": "À qui appartiennent l'hébergement et le code ?",
    "faq.5.a": "Le projet est le vôtre. Nous livrons le code et orientons l'hébergement, ou nous l'hébergeons pour vous. Transparence totale.",
    "final.eyebrow": "Commençons", "final.h2a": "Votre prochain client pourrait vous chercher ", "final.h2b": "maintenant",
    "final.p": "Laissez votre nom et WhatsApp — nous vous contactons pour comprendre votre projet. Sans engagement.",
    "final.btn": "Je veux mon site", "final.alt": "Vous préférez écrire sur WhatsApp ?", "final.altlink": "Parler maintenant →",
    "final.lgpd": "En envoyant, vous acceptez que Dev Team Tech utilise vos données uniquement pour vous contacter au sujet de votre projet.",
    "ph.nome": "Votre nom", "ph.whats": "Votre WhatsApp avec indicatif",
    "foot.tag": "Sites, landing pages et systèmes qui transforment la présence digitale en clients. Brésil et international.",
    "foot.nav": "Navigation", "foot.contact": "Contact", "foot.privacy": "Politique de Confidentialité", "foot.rights": "Tous droits réservés.",
    "pp.title": "Politique de Confidentialité",
    "pp.intro": "Cette politique décrit comment Dev Team Tech collecte et traite vos données, conformément à la LGPD/RGPD.",
    "pp.h1": "Données collectées", "pp.p1": "Nous ne collectons que le nom et le numéro WhatsApp fournis dans nos formulaires et canaux de contact.",
    "pp.h2": "Utilisation", "pp.p2": "Les données ont une seule finalité : vous contacter au sujet de votre projet. Nous ne vendons ni ne partageons vos données à des fins marketing.",
    "pp.h3": "Vos droits", "pp.p3": "Vous pouvez demander l'accès, la correction ou la suppression de vos données à tout moment via devteam2026tech@gmail.com.",
    "pp.h4": "Cookies", "pp.p4": "Nous utilisons des cookies essentiels et, avec votre consentement, des cookies de mesure.",
    "ck.text": "Nous utilisons des cookies pour améliorer votre expérience et mesurer l'usage du site. En continuant, vous acceptez notre Politique de Confidentialité.",
    "ck.accept": "Accepter", "ck.reject": "Refuser", "ck.custom": "Personnaliser", "ck.save": "Enregistrer",
    "ck.cat1": "Essentiels <small>Nécessaires au fonctionnement du site</small>",
    "ck.cat2": "Analyse <small>Mesures d'usage (anonymes)</small>",
    "ck.cat3": "Marketing <small>Remarketing et campagnes</small>",
    "err.nome": "Comment souhaitez-vous être appelé ?", "err.whats": "Ce numéro semble incomplet — pouvez-vous vérifier ?",
    "ok.msg": "Message reçu — nous vous répondons sur WhatsApp.",
    "st.1": "Axé sur la conversion", "st.2": "Étapes du processus", "st.3": "Technologies du stack", "st.4": "Du code qui est à vous",
    "st.note": "// Chiffres illustratifs de ce que nous livrons — à ajuster avec de vraies métriques.",
    "pf.eyebrow": "Projets", "pf.title": "Le type de projet que nous livrons.",
    "pf.note": "Démonstrations conceptuelles de notre capacité — elles ne représentent pas de vrais clients.",
    "w.1.c": "Santé", "w.1.n": "Plateforme pour Clinique Premium", "w.1.o": "Prise de rendez-vous en ligne et dossier digital avec une expérience de marque soignée.", "w.1.r": "Plus de rendez-vous, moins d'absences.",
    "w.2.c": "Juridique", "w.2.n": "Landing pour Cabinet d'Avocats", "w.2.o": "Autorité et captation de dossiers qualifiés via formulaire et WhatsApp.", "w.2.r": "Des leads plus qualifiés et de l'autorité.",
    "w.3.c": "Gastronomie", "w.3.n": "Système pour Restaurant", "w.3.o": "Menu digital, réservations et commandes intégrés à WhatsApp.", "w.3.r": "Plus de commandes, opération organisée.",
    "w.4.c": "Immobilier", "w.4.n": "Plateforme Immobilière", "w.4.o": "Catalogue de biens avec recherche, filtres et contact direct.", "w.4.r": "Des visites réservées depuis le site.",
    "w.5.c": "Entreprise", "w.5.n": "Tableau de bord d'Entreprise", "w.5.o": "Indicateurs métier en temps réel, dans un seul panneau.", "w.5.r": "Décider avec des données, pas au feeling.",
    "w.6.c": "Fitness", "w.6.n": "Site pour Salle de Sport", "w.6.o": "Offres, cours et inscription avec une forte preuve sociale.", "w.6.r": "Plus d'inscriptions, moins de friction.",
    "w.7.c": "Architecture", "w.7.n": "Plateforme pour Architecture", "w.7.o": "Portfolio visuel immersif qui valorise chaque projet.", "w.7.r": "Un portfolio qui décroche des contrats.",
    "w.8.c": "Startup", "w.8.n": "Landing Page pour Startup", "w.8.o": "Validation produit avec copy de conversion et captation de leads.", "w.8.r": "De la traction et une liste d'attente qui grandit.",
    "sec.eyebrow": "Sécurité & conformité", "sec.title": "Vos données — et celles de vos clients — traitées de façon responsable.",
    "sec.sub": "La confidentialité et la sécurité ne sont pas un détail : elles font partie de notre façon de construire.",
    "sc.1.t": "Conformité LGPD/RGPD", "sc.1.d": "Collecte avec finalité claire et base légale — comme la loi l'exige.",
    "sc.2.t": "Confidentialité par défaut", "sc.2.d": "Nous collectons le strict nécessaire et ne vendons jamais vos données.",
    "sc.3.t": "Sécurité des données", "sc.3.d": "Bonnes pratiques de protection à chaque couche du projet.",
    "sc.4.t": "Chiffrement (HTTPS)", "sc.4.d": "Connexion sécurisée par défaut et chiffrement quand c'est pertinent.",
    "sc.5.t": "Transparence totale", "sc.5.d": "Vous savez ce que nous collectons, pourquoi et combien de temps.",
    "sc.6.t": "Consentement cookies", "sc.6.d": "Bannière avec accepter, refuser et personnaliser — au choix de l'utilisateur.",
    "sc.7.t": "Bonnes pratiques de dev", "sc.7.d": "Un code propre et sûr, pensé pour durer et évoluer.",
    "sc.8.t": "Une confiance visible", "sc.8.d": "Un site sûr transmet aussi de la crédibilité à votre client.",
    "ba.eyebrow": "Avant & Après", "ba.title": "La différence que fait un site stratégique.",
    "ba.before": "Site amateur / sans stratégie", "ba.after": "Projet réel : Cafeteria Aroma & Sabor",
    "ba.cap": "Un projet réel développé par Dev Team Tech — un front-end responsive et rapide avec contact WhatsApp direct.", "ba.link": "Voir sur GitHub",
    "sc.before": "Avant : un site générique, sans stratégie", "sc.depois": "Après — version stratégique", "sc.antes": "Avant — version initiale", "sc.seeBefore": "Voir l'\"avant\"", "sc.seeAfter": "Voir l'\"après\"", "sc.open": "Visiter le site",
    "lg.eyebrow": "Confiance", "lg.note": "// Logos illustratifs."
  };

  I18N.it = {
    "nav.services": "Servizi", "nav.diff": "Vantaggi", "nav.about": "Chi siamo", "nav.process": "Processo", "nav.faq": "FAQ", "nav.cta": "WhatsApp", "nav.lang": "Sprache",
    "hero.badge": "Disponibili per nuovi progetti",
    "hero.h1a": "La tua presenza digitale trasformata in una ", "hero.h1b": "macchina per generare clienti",
    "hero.sub": "Siti e sistemi con un design che sembra costare 5 volte di più — consegnati con tempi definiti e trasparenti, con un supporto reale dopo il lancio.",
    "hero.cta1": "Scrivere su WhatsApp", "hero.cta2": "Vedi i servizi", "hero.proof": "Strategia · Performance · Supporto post-vendita",
    "mock.cta": "Scrivere su WhatsApp", "mock.float": "Nuovo lead ricevuto",
    "cred.1": "Siti Responsive", "cred.2": "Alte Prestazioni", "cred.3": "Consegna Rapida", "cred.4": "SEO Ottimizzato", "cred.5": "Design Premium", "cred.6": "Supporto Post-vendita",
    "problem.eyebrow": "Il problema", "problem.titleA": "La tua attività perde clienti ", "problem.titleB": "ogni giorno",
    "problem.sub": "Finché il tuo sito non colpisce — o non esiste — il cliente che ti cercava sceglie il concorrente che appariva migliore. Non è mancanza di domanda, ma di presenza.",
    "problem.c1": "Il cliente cerca su Google e trova prima il concorrente",
    "problem.c2": "Un sito lento o amatoriale distrugge la fiducia in pochi secondi",
    "problem.c3": "Senza un WhatsApp chiaro, il lead sparisce prima di parlarti",
    "problem.c4": "Ogni giorno senza una presenza forte = un'opportunità persa",
    "sol.eyebrow": "La soluzione", "sol.title": "Noi gestiamo il digitale. Tu ti concentri sul tuo lavoro.",
    "sol.sub": "Non ricevi solo un sito. Ricevi strategia, performance, supporto reale dopo la consegna e una base pronta a crescere.",
    "srv.lp.t": "Landing Page che convertono", "srv.lp.d": "Pagine con un'unica missione: convertire il visitatore in cliente via WhatsApp — copy strategico e caricamento rapido.",
    "srv.inst.t": "Siti Istituzionali", "srv.inst.d": "Autorevolezza percepita dal primo secondo. Il tuo brand con l'aspetto di una grande azienda.",
    "srv.sys.t": "Sistemi Web", "srv.sys.d": "Software su misura che tolgono i processi dalla carta e dai fogli di calcolo.",
    "srv.dash.t": "Dashboard", "srv.dash.d": "I tuoi numeri in tempo reale, per decidere con i dati.",
    "srv.auto.t": "Automazioni & Integrazioni", "srv.auto.d": "Attività ripetitive in automatico e i tuoi sistemi che si parlano.",
    "srv.host.t": "Hosting", "srv.host.d": "Gestiamo l'hosting del tuo sito, con dominio e SSL configurati.",
    "srv.ads.t": "Traffico a Pagamento", "srv.ads.d": "Gestione annunci (Google/Meta) per portare più clienti al tuo sito.",
    "srv.apart": "Servizio a parte",
    "diff.eyebrow": "Vantaggi", "diff.titleA": "Perché questo diventa ", "diff.titleB": "un risultato", "diff.titleC": ", e non solo un bel sito.",
    "d.1.t": "Design Strategico", "d.1.d": "Ogni elemento esiste per portare il visitatore al contatto.",
    "d.2.t": "Codice Pulito", "d.2.d": "Manutenzione semplice e una base che cresce senza rifacimenti.",
    "d.3.t": "Performance", "d.3.d": "Caricamento rapido — ogni secondo conta per la conversione.",
    "d.4.t": "Sicurezza", "d.4.d": "HTTPS, buone pratiche e conformità GDPR/LGPD.",
    "d.5.t": "Vera UX", "d.5.d": "Navigazione intuitiva su mobile e desktop.",
    "d.6.t": "Integrazione IA", "d.6.d": "Assistenza e automazioni intelligenti quando ha senso.",
    "d.7.t": "Scalabilità", "d.7.d": "Struttura pronta per blog, nuovi servizi e lingue.",
    "d.8.t": "Supporto Post-vendita", "d.8.d": "Restiamo con te dopo che il sito è online.",
    "cmp.eyebrow": "Confronto onesto", "cmp.title": "Sito preconfezionato vs. sito su misura con strategia.",
    "cmp.bad.t": "Sito preconfezionato (builder)", "cmp.bad.lbl": "Comune sul mercato", "cmp.good.lbl": "Il nostro standard", "cmp.good.badge": "Consigliato",
    "cmp.bad.1": "Un modello identico a decine di concorrenti",
    "cmp.bad.2": "Bello, ma senza focus sulla conversione",
    "cmp.bad.3": "Lento, danneggia la SEO e Google",
    "cmp.bad.4": "Il tuo tempo speso invece del tuo lavoro",
    "cmp.good.t": "Dev Team Tech",
    "cmp.good.1": "Design su misura, con l'identità della tua attività",
    "cmp.good.2": "Ogni sezione pensata per generare contatti",
    "cmp.good.3": "Veloce, ottimizzato per Google e mobile",
    "cmp.good.4": "Lo facciamo noi; tu ti concentri sul vendere",
    "tech.eyebrow": "Stack", "tech.title": "Tecnologie moderne — le stesse delle big tech.",
    "proof.eyebrow": "Riprova sociale", "proof.title": "Chi si è fidato ci raccomanda.",
    "t.1": "\"Il nuovo sito ha dato all'azienda un aspetto di primo livello. Contatti su WhatsApp già dalla prima settimana.\"",
    "t.2": "\"Consegna rapida e tutto spiegato con chiarezza. Il supporto post-vendita ha fatto la differenza.\"",
    "t.3": "\"Professionali e attenti. Il sistema ha organizzato un processo sempre faticoso.\"",
    "t.4": "\"Un accompagnamento vicino dall'inizio alla fine. Mi sono sentito sicuro a ogni fase.\"",
    "t.5": "\"Curati nel design e nei tempi. Il risultato ha superato le aspettative.\"",
    "t.6": "\"Li raccomando a occhi chiusi. Sito veloce, bello e che ha portato contatti nuovi.\"",
    "proof.note": "// Testimonianze illustrative (nomi fittizi) — esempi di layout.",
    "about.eyebrow": "Chi siamo", "about.title": "Due fondatori, un'ossessione: il tuo risultato.",
    "about.role": "COFONDATORE · DEV",
    "about.note": "Appassionati di tecnologia, IA e sviluppo di sistemi, abbiamo creato Dev Team Tech con una promessa semplice: trasformare la tua presenza digitale in una macchina per generare clienti — un design che sembra costare 5 volte di più, consegnato nei tempi concordati, con un supporto reale. Tu pensi al tuo lavoro; noi al digitale.",
    "proc.eyebrow": "Come lavoriamo", "proc.title": "Un processo chiaro, senza sorprese lungo il percorso.",
    "proc.sub": "Sai esattamente a che punto è il progetto, dal primo contatto al supporto post-vendita.",
    "proc.1.t": "Scoperta", "proc.1.d": "Capiamo la tua attività, il pubblico e l'obiettivo.",
    "proc.2.t": "Pianificazione", "proc.2.d": "Struttura, copy e architettura definite per iscritto.",
    "proc.3.t": "Design", "proc.3.d": "Identità visiva e prototipo navigabile da approvare.",
    "proc.4.t": "Sviluppo", "proc.4.d": "Codice pulito, veloce e pronto a scalare.",
    "proc.5.t": "Test", "proc.5.d": "Responsive, veloce e senza bug su ogni schermo.",
    "proc.6.t": "Consegna", "proc.6.d": "Online, con te al comando.",
    "proc.7.t": "Supporto", "proc.7.d": "Un accompagnamento continuo dopo il lancio.",
    "proc.msg": "Un processo trasparente, organizzato e senza sorprese durante tutto lo sviluppo.",
    "faq.eyebrow": "Dubbi", "faq.title": "Le domande che fanno tutti.",
    "faq.1.q": "Siete nuovi — avete abbastanza esperienza?",
    "faq.1.a": "Sì. Lavoriamo con un processo strutturato per fasi e tecnologie moderne. Segui ogni fase e approvi prima della messa online.",
    "faq.2.q": "Qual è il tempo di consegna?",
    "faq.2.a": "Dipende dall'ambito. In genere il tempo è fino a 90 giorni, fissato per iscritto nella pianificazione in base alla complessità del progetto.",
    "faq.3.q": "Quanto costa?",
    "faq.3.a": "Varia in base al progetto. Ma pensa al costo di non averlo: ogni giorno senza una presenza forte è un cliente che sceglie la concorrenza. Scrivici su WhatsApp per una diagnosi senza impegno.",
    "faq.4.q": "E il supporto dopo la messa online?",
    "faq.4.a": "Continua. Il supporto post-vendita è un vantaggio esplicito, non una clausola nascosta — non resti solo dopo la consegna.",
    "faq.5.q": "Di chi sono l'hosting e il codice?",
    "faq.5.a": "Il progetto è tuo. Consegniamo il codice e guidiamo l'hosting, oppure lo ospitiamo noi. Trasparenza totale.",
    "final.eyebrow": "Iniziamo", "final.h2a": "Il tuo prossimo cliente potrebbe cercarti ", "final.h2b": "adesso",
    "final.p": "Lascia il tuo nome e WhatsApp — ti contattiamo per capire il tuo progetto. Senza impegno.",
    "final.btn": "Voglio il mio sito", "final.alt": "Preferisci scrivere su WhatsApp?", "final.altlink": "Scrivi ora →",
    "final.lgpd": "Inviando, accetti che Dev Team Tech usi i tuoi dati solo per contattarti riguardo al tuo progetto.",
    "ph.nome": "Il tuo nome", "ph.whats": "Il tuo WhatsApp con prefisso",
    "foot.tag": "Siti, landing page e sistemi che trasformano la presenza digitale in clienti. Brasile ed estero.",
    "foot.nav": "Navigazione", "foot.contact": "Contatto", "foot.privacy": "Informativa sulla Privacy", "foot.rights": "Tutti i diritti riservati.",
    "pp.title": "Informativa sulla Privacy",
    "pp.intro": "Questa informativa descrive come Dev Team Tech raccoglie e tratta i tuoi dati, in conformità con GDPR/LGPD.",
    "pp.h1": "Dati raccolti", "pp.p1": "Raccogliamo solo il nome e il numero WhatsApp forniti nei nostri moduli e canali di contatto.",
    "pp.h2": "Utilizzo", "pp.p2": "I dati hanno un'unica finalità: contattarti riguardo al tuo progetto. Non vendiamo né condividiamo i tuoi dati per marketing.",
    "pp.h3": "I tuoi diritti", "pp.p3": "Puoi richiedere accesso, correzione o cancellazione dei tuoi dati in qualsiasi momento via devteam2026tech@gmail.com.",
    "pp.h4": "Cookie", "pp.p4": "Usiamo cookie essenziali e, con il tuo consenso, cookie di misurazione.",
    "ck.text": "Usiamo i cookie per migliorare la tua esperienza e misurare l'uso del sito. Continuando, accetti la nostra Informativa sulla Privacy.",
    "ck.accept": "Accetta", "ck.reject": "Rifiuta", "ck.custom": "Personalizza", "ck.save": "Salva preferenze",
    "ck.cat1": "Essenziali <small>Necessari al funzionamento del sito</small>",
    "ck.cat2": "Analisi <small>Metriche d'uso (anonime)</small>",
    "ck.cat3": "Marketing <small>Remarketing e campagne</small>",
    "err.nome": "Come preferisci essere chiamato?", "err.whats": "Questo numero sembra incompleto — puoi controllare?",
    "ok.msg": "Messaggio ricevuto — ti rispondiamo su WhatsApp.",
    "st.1": "Focus sulla conversione", "st.2": "Fasi del processo", "st.3": "Tecnologie nello stack", "st.4": "Codice che è tuo",
    "st.note": "// Cifre illustrative di ciò che consegniamo — da aggiornare con metriche reali.",
    "pf.eyebrow": "Progetti", "pf.title": "Il tipo di progetto che consegniamo.",
    "pf.note": "Dimostrazioni concettuali della nostra capacità — non rappresentano clienti reali.",
    "w.1.c": "Salute", "w.1.n": "Piattaforma per Clinica Premium", "w.1.o": "Prenotazione online e cartella digitale con un'esperienza di marca curata.", "w.1.r": "Più prenotazioni, meno assenze.",
    "w.2.c": "Legale", "w.2.n": "Landing per Studio Legale", "w.2.o": "Autorevolezza e acquisizione di casi qualificati via modulo e WhatsApp.", "w.2.r": "Lead più qualificati e autorevolezza.",
    "w.3.c": "Ristorazione", "w.3.n": "Sistema per Ristorante", "w.3.o": "Menu digitale, prenotazioni e ordini integrati con WhatsApp.", "w.3.r": "Più ordini, operatività organizzata.",
    "w.4.c": "Immobiliare", "w.4.n": "Piattaforma Immobiliare", "w.4.o": "Catalogo immobili con ricerca, filtri e contatto diretto.", "w.4.r": "Visite prenotate dal sito.",
    "w.5.c": "Aziendale", "w.5.n": "Dashboard Aziendale", "w.5.o": "Indicatori di business in tempo reale, in un unico pannello.", "w.5.r": "Decisioni con i dati, non a sensazione.",
    "w.6.c": "Fitness", "w.6.n": "Sito per Palestra", "w.6.o": "Piani, corsi e iscrizione con forte riprova sociale.", "w.6.r": "Più iscrizioni, meno attrito.",
    "w.7.c": "Architettura", "w.7.n": "Piattaforma per Architettura", "w.7.o": "Portfolio visivo immersivo che valorizza ogni progetto.", "w.7.r": "Un portfolio che chiude contratti.",
    "w.8.c": "Startup", "w.8.n": "Landing Page per Startup", "w.8.o": "Validazione del prodotto con copy di conversione e acquisizione lead.", "w.8.r": "Trazione e lista d'attesa in crescita.",
    "sec.eyebrow": "Sicurezza & conformità", "sec.title": "I tuoi dati — e quelli dei tuoi clienti — trattati con responsabilità.",
    "sec.sub": "Privacy e sicurezza non sono un dettaglio: sono parte di come costruiamo.",
    "sc.1.t": "Conformità GDPR/LGPD", "sc.1.d": "Raccolta con finalità chiara e base legale — come richiede la legge.",
    "sc.2.t": "Privacy by default", "sc.2.d": "Raccogliamo solo il necessario e non vendiamo mai i tuoi dati.",
    "sc.3.t": "Sicurezza dei dati", "sc.3.d": "Buone pratiche di protezione a ogni livello del progetto.",
    "sc.4.t": "Crittografia (HTTPS)", "sc.4.d": "Connessione sicura per impostazione e crittografia quando serve.",
    "sc.5.t": "Trasparenza totale", "sc.5.d": "Sai cosa raccogliamo, perché e per quanto tempo.",
    "sc.6.t": "Consenso cookie", "sc.6.d": "Banner con accetta, rifiuta e personalizza — scelta dell'utente.",
    "sc.7.t": "Buone pratiche di dev", "sc.7.d": "Codice pulito e sicuro, pensato per durare e scalare.",
    "sc.8.t": "Una fiducia che si vede", "sc.8.d": "Un sito sicuro trasmette anche credibilità al tuo cliente.",
    "ba.eyebrow": "Prima & Dopo", "ba.title": "La differenza che fa un sito strategico.",
    "ba.before": "Sito amatoriale / senza strategia", "ba.after": "Progetto reale: Cafeteria Aroma & Sabor",
    "ba.cap": "Un progetto reale sviluppato da Dev Team Tech — un front-end responsive e veloce con contatto WhatsApp diretto.", "ba.link": "Vedi su GitHub",
    "sc.before": "Prima: un sito generico, senza strategia", "sc.depois": "Dopo — versione strategica", "sc.antes": "Prima — versione iniziale", "sc.seeBefore": "Vedi il \"prima\"", "sc.seeAfter": "Vedi il \"dopo\"", "sc.open": "Visita il sito",
    "lg.eyebrow": "Fiducia", "lg.note": "// Loghi illustrativi."
  };

  I18N.de = {
    "nav.services": "Leistungen", "nav.diff": "Vorteile", "nav.about": "Über uns", "nav.process": "Ablauf", "nav.faq": "FAQ", "nav.cta": "WhatsApp", "nav.lang": "Lingua",
    "hero.badge": "Verfügbar für neue Projekte",
    "hero.h1a": "Ihre digitale Präsenz wird zu einer ", "hero.h1b": "Maschine, die Kunden gewinnt",
    "hero.sub": "Websites und Systeme mit einem Design, das nach dem 5-Fachen aussieht — mit definiertem, transparentem Termin geliefert, mit echtem Support nach dem Launch.",
    "hero.cta1": "Auf WhatsApp schreiben", "hero.cta2": "Leistungen ansehen", "hero.proof": "Strategie · Performance · After-Sales-Support",
    "mock.cta": "Auf WhatsApp schreiben", "mock.float": "Neuer Lead erhalten",
    "cred.1": "Responsive Websites", "cred.2": "Hohe Performance", "cred.3": "Schnelle Lieferung", "cred.4": "SEO-optimiert", "cred.5": "Premium-Design", "cred.6": "After-Sales-Support",
    "problem.eyebrow": "Das Problem", "problem.titleA": "Ihr Unternehmen verliert ", "problem.titleB": "jeden Tag Kunden",
    "problem.sub": "Solange Ihre Website nicht überzeugt — oder nicht existiert — wählt der Kunde, der Sie suchte, den Wettbewerber, der besser wirkte. Es fehlt nicht an Nachfrage, sondern an Präsenz.",
    "problem.c1": "Der Kunde sucht bei Google und findet zuerst den Wettbewerber",
    "problem.c2": "Eine langsame oder amateurhafte Seite zerstört Vertrauen in Sekunden",
    "problem.c3": "Ohne klares WhatsApp verschwindet der Lead, bevor er Sie kontaktiert",
    "problem.c4": "Jeder Tag ohne starke Präsenz = eine verlorene Chance",
    "sol.eyebrow": "Die Lösung", "sol.title": "Wir kümmern uns ums Digitale. Sie um Ihr Geschäft.",
    "sol.sub": "Sie erhalten nicht nur eine Website. Sie erhalten Strategie, Performance, echten Support nach der Lieferung und eine Basis, die mit Ihnen wächst.",
    "srv.lp.t": "Landingpages, die konvertieren", "srv.lp.d": "Seiten mit einer Mission: den Besucher per WhatsApp zum Kunden machen — strategischer Text und schnelles Laden.",
    "srv.inst.t": "Unternehmensseiten", "srv.inst.d": "Wahrgenommene Autorität ab der ersten Sekunde. Ihre Marke wie ein großes Unternehmen.",
    "srv.sys.t": "Web-Systeme", "srv.sys.d": "Maßgeschneiderte Software, die Prozesse von Papier und Tabellen befreit.",
    "srv.dash.t": "Dashboards", "srv.dash.d": "Ihre Zahlen in Echtzeit, um mit Daten zu entscheiden.",
    "srv.auto.t": "Automatisierungen & Integrationen", "srv.auto.d": "Wiederkehrende Aufgaben automatisch und Ihre Systeme im Austausch.",
    "srv.host.t": "Hosting", "srv.host.d": "Wir übernehmen das Hosting Ihrer Website, mit Domain und SSL eingerichtet.",
    "srv.ads.t": "Bezahlte Werbung", "srv.ads.d": "Anzeigenverwaltung (Google/Meta), um mehr Kunden auf Ihre Seite zu bringen.",
    "srv.apart": "Separate Leistung",
    "diff.eyebrow": "Vorteile", "diff.titleA": "Warum daraus ", "diff.titleB": "ein Ergebnis wird", "diff.titleC": " und nicht nur eine schöne Seite.",
    "d.1.t": "Strategisches Design", "d.1.d": "Jedes Element führt den Besucher zum Kontakt.",
    "d.2.t": "Sauberer Code", "d.2.d": "Einfache Wartung und eine Basis, die ohne Neuaufbau wächst.",
    "d.3.t": "Performance", "d.3.d": "Schnelles Laden — jede Sekunde zählt für die Conversion.",
    "d.4.t": "Sicherheit", "d.4.d": "HTTPS, Best Practices und DSGVO/LGPD-Konformität.",
    "d.5.t": "Echte UX", "d.5.d": "Intuitive Navigation auf Mobil und Desktop.",
    "d.6.t": "KI-Integration", "d.6.d": "Intelligenter Support und Automatisierung, wo sinnvoll.",
    "d.7.t": "Skalierbarkeit", "d.7.d": "Struktur bereit für Blog, neue Leistungen und Sprachen.",
    "d.8.t": "After-Sales-Support", "d.8.d": "Wir bleiben nach dem Launch an Ihrer Seite.",
    "cmp.eyebrow": "Ehrlicher Vergleich", "cmp.title": "Vorgefertigte Seite vs. maßgeschneiderte Seite mit Strategie.",
    "cmp.bad.t": "Vorgefertigte Seite (Baukasten)", "cmp.bad.lbl": "Marktüblich", "cmp.good.lbl": "Unser Standard", "cmp.good.badge": "Empfohlen",
    "cmp.bad.1": "Eine Vorlage wie bei Dutzenden Wettbewerbern",
    "cmp.bad.2": "Schön, aber ohne Fokus auf Conversion",
    "cmp.bad.3": "Langsam, schadet SEO und Google",
    "cmp.bad.4": "Ihre Zeit verbraucht statt Ihr Geschäft",
    "cmp.good.t": "Dev Team Tech",
    "cmp.good.1": "Maßgeschneidertes Design, mit der Identität Ihres Unternehmens",
    "cmp.good.2": "Jeder Abschnitt darauf ausgelegt, Kontakte zu erzeugen",
    "cmp.good.3": "Schnell, optimiert für Google und Mobil",
    "cmp.good.4": "Wir machen es; Sie konzentrieren sich aufs Verkaufen",
    "tech.eyebrow": "Stack", "tech.title": "Moderne Technologien — dieselben der Big-Techs.",
    "proof.eyebrow": "Soziale Beweise", "proof.title": "Wer uns vertraut hat, empfiehlt uns weiter.",
    "t.1": "\"Die neue Website ließ das Unternehmen erstklassig wirken. Schon in der ersten Woche WhatsApp-Kontakte.\"",
    "t.2": "\"Schnelle Lieferung und alles klar erklärt. Der After-Sales-Support machte den Unterschied.\"",
    "t.3": "\"Professionell und aufmerksam. Das System hat einen lästigen Prozess organisiert.\"",
    "t.4": "\"Enge Begleitung von Anfang bis Ende. Ich fühlte mich in jeder Phase sicher.\"",
    "t.5": "\"Sorgfältig bei Design und Termin. Das Ergebnis übertraf meine Erwartungen.\"",
    "t.6": "\"Ich empfehle sie blind. Schnelle, schöne Seite, die wirklich neue Kontakte brachte.\"",
    "proof.note": "// Illustrative Referenzen (fiktive Namen) — Layout-Beispiele.",
    "about.eyebrow": "Über uns", "about.title": "Zwei Gründer, eine Obsession: Ihr Ergebnis.",
    "about.role": "MITGRÜNDER · DEV",
    "about.note": "Begeistert von Technologie, KI und Systementwicklung haben wir Dev Team Tech mit einem einfachen Versprechen gegründet: Ihre digitale Präsenz in eine Maschine zu verwandeln, die Kunden gewinnt — ein Design, das nach dem 5-Fachen aussieht, im vereinbarten Termin geliefert, mit echtem Support. Sie kümmern sich um Ihr Geschäft; wir ums Digitale.",
    "proc.eyebrow": "So arbeiten wir", "proc.title": "Ein klarer Ablauf, ohne Überraschungen.",
    "proc.sub": "Sie wissen genau, in welcher Phase das Projekt ist — vom ersten Gespräch bis zum After-Sales-Support.",
    "proc.1.t": "Entdeckung", "proc.1.d": "Wir verstehen Ihr Geschäft, Ihr Publikum und das Ziel.",
    "proc.2.t": "Planung", "proc.2.d": "Struktur, Text und Architektur schriftlich festgelegt.",
    "proc.3.t": "Design", "proc.3.d": "Visuelle Identität und navigierbarer Prototyp zur Freigabe.",
    "proc.4.t": "Entwicklung", "proc.4.d": "Sauberer, schneller und skalierbarer Code.",
    "proc.5.t": "Tests", "proc.5.d": "Responsive, schnell und fehlerfrei auf jedem Bildschirm.",
    "proc.6.t": "Lieferung", "proc.6.d": "Online, mit Ihnen am Steuer.",
    "proc.7.t": "Support", "proc.7.d": "Kontinuierliche Begleitung nach dem Launch.",
    "proc.msg": "Ein transparenter, organisierter Ablauf ohne Überraschungen während der gesamten Entwicklung.",
    "faq.eyebrow": "Fragen", "faq.title": "Die Fragen, die alle stellen.",
    "faq.1.q": "Sie sind neu — haben Sie genug Erfahrung?",
    "faq.1.a": "Ja. Wir arbeiten mit einem strukturierten Prozess in Phasen und modernen Technologien. Sie begleiten jede Phase und geben vor dem Launch frei.",
    "faq.2.q": "Wie lange dauert die Lieferung?",
    "faq.2.a": "Es hängt vom Umfang ab. In der Regel beträgt der Termin bis zu 90 Tage, je nach Komplexität schriftlich in der Planung festgelegt.",
    "faq.3.q": "Was kostet es?",
    "faq.3.a": "Das variiert je nach Projekt. Aber bedenken Sie die Kosten, es nicht zu haben: Jeder Tag ohne starke Präsenz ist ein Kunde, der zur Konkurrenz geht. Schreiben Sie uns auf WhatsApp für eine unverbindliche Analyse.",
    "faq.4.q": "Und der Support nach dem Launch?",
    "faq.4.a": "Er läuft weiter. Der After-Sales-Support ist ein ausdrücklicher Vorteil, kein Kleingedrucktes — Sie bleiben nach der Lieferung nicht allein.",
    "faq.5.q": "Wem gehören Hosting und Code?",
    "faq.5.a": "Das Projekt gehört Ihnen. Wir liefern den Code und beraten zum Hosting, oder wir hosten für Sie. Volle Transparenz.",
    "final.eyebrow": "Los geht's", "final.h2a": "Ihr nächster Kunde könnte gerade ", "final.h2b": "jetzt nach Ihnen suchen",
    "final.p": "Hinterlassen Sie Name und WhatsApp — wir melden uns, um Ihr Projekt zu verstehen. Unverbindlich.",
    "final.btn": "Ich will meine Website", "final.alt": "Lieber auf WhatsApp schreiben?", "final.altlink": "Jetzt schreiben →",
    "final.lgpd": "Mit dem Senden stimmen Sie zu, dass Dev Team Tech Ihre Daten nur nutzt, um Sie zu Ihrem Projekt zu kontaktieren.",
    "ph.nome": "Ihr Name", "ph.whats": "Ihr WhatsApp mit Vorwahl",
    "foot.tag": "Websites, Landingpages und Systeme, die digitale Präsenz in Kunden verwandeln. Brasilien und international.",
    "foot.nav": "Navigation", "foot.contact": "Kontakt", "foot.privacy": "Datenschutzerklärung", "foot.rights": "Alle Rechte vorbehalten.",
    "pp.title": "Datenschutzerklärung",
    "pp.intro": "Diese Erklärung beschreibt, wie Dev Team Tech Ihre Daten gemäß DSGVO/LGPD erhebt und verarbeitet.",
    "pp.h1": "Erhobene Daten", "pp.p1": "Wir erheben nur Name und WhatsApp-Nummer, die in unseren Formularen und Kontaktkanälen angegeben werden.",
    "pp.h2": "Verwendung", "pp.p2": "Die Daten haben einen einzigen Zweck: Sie zu Ihrem Projekt zu kontaktieren. Wir verkaufen oder teilen Ihre Daten nicht zu Marketingzwecken.",
    "pp.h3": "Ihre Rechte", "pp.p3": "Sie können jederzeit Zugang, Korrektur oder Löschung Ihrer Daten über devteam2026tech@gmail.com verlangen.",
    "pp.h4": "Cookies", "pp.p4": "Wir verwenden essenzielle Cookies und, mit Ihrer Zustimmung, Mess-Cookies.",
    "ck.text": "Wir verwenden Cookies, um Ihr Erlebnis zu verbessern und die Nutzung zu messen. Wenn Sie fortfahren, stimmen Sie unserer Datenschutzerklärung zu.",
    "ck.accept": "Akzeptieren", "ck.reject": "Ablehnen", "ck.custom": "Anpassen", "ck.save": "Einstellungen speichern",
    "ck.cat1": "Essenziell <small>Für den Betrieb der Seite nötig</small>",
    "ck.cat2": "Analyse <small>Nutzungsmetriken (anonym)</small>",
    "ck.cat3": "Marketing <small>Remarketing und Kampagnen</small>",
    "err.nome": "Wie möchten Sie genannt werden?", "err.whats": "Diese Nummer scheint unvollständig — bitte prüfen?",
    "ok.msg": "Nachricht erhalten — wir antworten gerade auf WhatsApp.",
    "st.1": "Conversion-fokussiert", "st.2": "Schritte im Ablauf", "st.3": "Technologien im Stack", "st.4": "Code, der Ihnen gehört",
    "st.note": "// Illustrative Zahlen dessen, was wir liefern — mit echten Kennzahlen anpassen.",
    "pf.eyebrow": "Projekte", "pf.title": "Die Art von Projekt, die wir liefern.",
    "pf.note": "Konzeptionelle Demonstrationen unserer Fähigkeit — sie stellen keine echten Kunden dar.",
    "w.1.c": "Gesundheit", "w.1.n": "Plattform für Premium-Klinik", "w.1.o": "Online-Termine und digitale Akte mit gehobenem Markenerlebnis.", "w.1.r": "Mehr Termine, weniger Ausfälle.",
    "w.2.c": "Recht", "w.2.n": "Landing für Anwaltskanzlei", "w.2.o": "Autorität und Gewinnung qualifizierter Fälle über Formular und WhatsApp.", "w.2.r": "Qualifiziertere Leads und Autorität.",
    "w.3.c": "Gastronomie", "w.3.n": "System für Restaurant", "w.3.o": "Digitale Karte, Reservierungen und Bestellungen mit WhatsApp integriert.", "w.3.r": "Mehr Bestellungen, organisierter Betrieb.",
    "w.4.c": "Immobilien", "w.4.n": "Immobilien-Plattform", "w.4.o": "Objektkatalog mit Suche, Filtern und Direktkontakt.", "w.4.r": "Besichtigungen direkt über die Seite.",
    "w.5.c": "Unternehmen", "w.5.n": "Unternehmens-Dashboard", "w.5.o": "Geschäftskennzahlen in Echtzeit, in einem Panel.", "w.5.r": "Entscheiden mit Daten, nicht aus dem Bauch.",
    "w.6.c": "Fitness", "w.6.n": "Website für Fitnessstudio", "w.6.o": "Tarife, Kurse und Anmeldung mit starker sozialer Beweiskraft.", "w.6.r": "Mehr Anmeldungen, weniger Reibung.",
    "w.7.c": "Architektur", "w.7.n": "Plattform für Architektur", "w.7.o": "Immersives visuelles Portfolio, das jedes Projekt aufwertet.", "w.7.r": "Ein Portfolio, das Aufträge gewinnt.",
    "w.8.c": "Startup", "w.8.n": "Landingpage für Startup", "w.8.o": "Produktvalidierung mit Conversion-Text und Lead-Erfassung.", "w.8.r": "Traktion und wachsende Warteliste.",
    "sec.eyebrow": "Sicherheit & Konformität", "sec.title": "Ihre Daten — und die Ihrer Kunden — verantwortungsvoll behandelt.",
    "sec.sub": "Datenschutz und Sicherheit sind kein Detail: Sie sind Teil davon, wie wir bauen.",
    "sc.1.t": "DSGVO/LGPD-Konformität", "sc.1.d": "Erhebung mit klarem Zweck und Rechtsgrundlage — wie das Gesetz es verlangt.",
    "sc.2.t": "Datenschutz als Standard", "sc.2.d": "Wir erheben nur das Nötige und verkaufen Ihre Daten nie.",
    "sc.3.t": "Datensicherheit", "sc.3.d": "Schutz-Best-Practices auf jeder Ebene des Projekts.",
    "sc.4.t": "Verschlüsselung (HTTPS)", "sc.4.d": "Sichere Verbindung als Standard und Verschlüsselung, wo zutreffend.",
    "sc.5.t": "Volle Transparenz", "sc.5.d": "Sie wissen, was wir erheben, warum und wie lange.",
    "sc.6.t": "Cookie-Zustimmung", "sc.6.d": "Banner mit Akzeptieren, Ablehnen und Anpassen — Wahl des Nutzers.",
    "sc.7.t": "Dev-Best-Practices", "sc.7.d": "Sauberer, sicherer Code, gebaut für Dauer und Skalierung.",
    "sc.8.t": "Sichtbares Vertrauen", "sc.8.d": "Eine sichere Seite vermittelt auch Ihrem Kunden Glaubwürdigkeit.",
    "ba.eyebrow": "Vorher & Nachher", "ba.title": "Der Unterschied, den eine strategische Seite macht.",
    "ba.before": "Amateurseite / ohne Strategie", "ba.after": "Echtes Projekt: Cafeteria Aroma & Sabor",
    "ba.cap": "Ein echtes von Dev Team Tech entwickeltes Projekt — ein responsives, schnelles Front-end mit direktem WhatsApp-Kontakt.", "ba.link": "Auf GitHub ansehen",
    "sc.before": "Vorher: eine generische Seite, ohne Strategie", "sc.depois": "Nachher — strategische Version", "sc.antes": "Vorher — erste Version", "sc.seeBefore": "Das \"Vorher\" ansehen", "sc.seeAfter": "Das \"Nachher\" ansehen", "sc.open": "Seite besuchen",
    "lg.eyebrow": "Vertrauen", "lg.note": "// Illustrative Logos."
  };

  var LANG_STORE = "tdv-lang";
  var ptCache = {};
  function cachePT() {
    $$("[data-i18n]").forEach(function (el) { ptCache[el.getAttribute("data-i18n")] = el.innerHTML; });
    $$("[data-ph]").forEach(function (el) { ptCache["__ph__" + el.getAttribute("data-ph")] = el.getAttribute("placeholder"); });
  }
  function applyLang(lang) {
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
    var sel = $("#langSelect");
    if (sel && sel.value !== lang) sel.value = lang;
    try { localStorage.setItem(LANG_STORE, lang); } catch (e) {}
  }
  cachePT();
  var startLang = "pt";
  try { startLang = localStorage.getItem(LANG_STORE) || "pt"; } catch (e) {}
  if (I18N[startLang]) applyLang(startLang);
  var langSelect = $("#langSelect");
  if (langSelect) {
    langSelect.value = startLang;
    langSelect.addEventListener("change", function () { applyLang(langSelect.value); });
  }

  /* ---------- tema ---------- */
  var THEME_STORE = "tdv-theme";
  function setTheme(tm) {
    document.documentElement.setAttribute("data-theme", tm);
    $$(".i-moon").forEach(function (m) { m.style.display = tm === "light" ? "none" : ""; });
    $$(".i-sun").forEach(function (s) { s.style.display = tm === "light" ? "" : "none"; });
    try { localStorage.setItem(THEME_STORE, tm); } catch (e) {}
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
  $$("[data-wa]").forEach(function (a) { a.href = waLink(); a.target = "_blank"; a.rel = "noopener"; });

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
  if (scene && !reduced && !coarseP) {
    var layers = $$(".px-layer", scene);
    var mx = 0, my = 0, tmx = 0, tmy = 0, sy = 0;
    window.addEventListener("mousemove", function (e) {
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
      if (mock) mock.style.transform = "rotateY(" + (-9 + mx * 4) + "deg) rotateX(" + (5 - my * 4) + "deg)";
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
      window.open(waLink("Olá! Sou " + nome.value.trim() + " e quero falar com a Dev Team Tech sobre um projeto."), "_blank", "noopener");
    });
  }
})();
