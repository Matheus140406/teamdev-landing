import gabrielPhoto from "./imports/gabriel.jpeg"
import matheusPhoto from "./imports/matheus-novo.jpg"
import eduardoPhoto from "./imports/eduardo.webp"
import danielPhoto from "./imports/daniel.webp"
import dinedropAppImage from "./imports/project-dinedrop-app.jpg"
import imobiliariaImage from "./imports/project-imobiliaria.jpg"
import hptImage from "./imports/project-hpt.jpg"
import dinedropLandingImage from "./imports/project-dinedrop-landing.jpg"
import analiseCorporalImage from "./imports/project-analisecorporal.jpg"

export type Lang = "pt" | "es" | "en"
export type Localized = Record<Lang, string>
export type LocalizedList = Record<Lang, string[]>
export type PageId = "inicio" | "servicos" | "portfolio" | "time" | "processo" | "pagamento" | "contato"
export type Category = "sites" | "apps" | "landing"

export const LANGS: Lang[] = ["pt", "es", "en"]

export const CONTACT = {
  whatsapp: "556192355047",
  whatsappLabel: "+55 61 9235-5047",
  email: "devteam2026tech@gmail.com",
  instagram: "https://instagram.com/devteamtech",
  instagramLabel: "@devteamtech",
  github: "https://github.com/Matheus140406",
  githubLabel: "github.com/Matheus140406",
}

const pt = {
  skip: "Pular para o conteúdo",
  navLabel: "Navegação principal",
  menuOpen: "Abrir menu",
  menuClose: "Fechar menu",
  theme: "Alternar tema claro e escuro",
  language: "Idioma",
  schedule: "Agendar reunião",
  seeWork: "Ver trabalhos",
  open: "Abrir",
  back: "Voltar",
  next: "Próximo",
  prev: "Anterior",
  close: "Fechar",
  cursorView: "Ver",
  navHome: "Início",
  navServices: "Serviços",
  navWork: "Portfólio",
  navTeam: "Time",
  navProcess: "Processo",
  navPayment: "Pagamento",
  navContact: "Contato",
  descServices: "O que fazemos e para quem",
  descWork: "Projetos, desafios e resultados",
  descTeam: "Quem faz cada parte",
  descProcess: "Do primeiro papo ao suporte",
  descPayment: "50% + 50% e 15 dias de suporte",
  descContact: "Marque uma reunião",
  available: "Agenda aberta para novos projetos",
  heroEyebrow: "Sites, apps e landing pages",
  heroL1: "Sites que",
  heroL2: "explicam, vendem",
  heroL3: "e aguentam o tranco.",
  heroBody:
    "A gente desenha, programa, testa e entrega. Você acompanha tudo, do primeiro rascunho ao site no ar.",
  heroImageAlt: "Estação de trabalho da Dev Team Tech com código na tela",
  heroCaption: "Estúdio · Brasília",
  statProjects: "projetos entregues",
  statClients: "clientes atendidos",
  statYears: "anos de estrada",
  statSatisfaction: "de satisfação",
  marqueeLabel: "Tecnologias que usamos",
  manifestoLabel: "Como a gente trabalha",
  manifesto1: "Sem intermediário,",
  manifesto2: "sem jargão,",
  manifesto3: "sem sumir depois.",
  manifestoBody:
    "Você fala direto com quem faz. Os dois CEOs participam do projeto, o QA testa antes de você ver e o marketing produz foto e vídeo quando o projeto pede.",
  indexLabel: "O site por dentro",
  indexTitle1: "Escolha por",
  indexTitle2: "onde começar.",
  featuredLabel: "Trabalhos recentes",
  featuredTitle1: "Alguns projetos",
  featuredTitle2: "que gostamos de mostrar.",
  featuredLink: "Ver portfólio completo",
  ctaLabel: "Próximo passo",
  ctaTitle1: "Tem um projeto",
  ctaTitle2: "na cabeça?",
  ctaBody:
    "Marque 30 minutos com a gente. Se não fizer sentido, a gente fala na hora.",
  servicesTitle1: "Três formatos.",
  servicesTitle2: "Um time inteiro.",
  servicesIntro:
    "Site, app ou landing page: o formato muda, o cuidado não. Passe o mouse ou toque em cada linha para ver o que entra no pacote.",
  forWho: "Para quem",
  delivers: "O que você recebe",
  anyBusinessLabel: "Para qualquer negócio",
  anyBusinessTitle1: "Se o seu negócio precisa ser encontrado,",
  anyBusinessTitle2: "entendido ou contratado, ele cabe aqui.",
  workTitle1: "Trabalho que",
  workTitle2: "se explica sozinho.",
  workIntro:
    "Projetos e estudos de caso. Clique em qualquer um para ver o desafio, a solução e o resultado.",
  filterLabel: "Filtrar por categoria",
  filterAll: "Todos",
  filterSites: "Sites",
  filterApps: "Apps",
  filterLanding: "Landing pages",
  challenge: "Desafio",
  solution: "Solução",
  stack: "Tecnologias",
  outcome: "Resultado",
  visitSite: "Ver site",
  projectCta: "Quero algo nessa linha",
  teamTitle1: "Quatro pessoas.",
  teamTitle2: "Nenhum repasse.",
  teamIntro:
    "Passe o mouse para ver quem é quem. Clique para conhecer o trabalho de cada um.",
  teamPackageLabel: "Incluso no pacote",
  teamPackage:
    "Marketing faz parte do projeto: foto, vídeo e conteúdo visual podem entrar na mesma proposta, sem fornecedor extra.",
  inPractice: "Na prática",
  whatWeDo: "O que fazemos",
  relatedWork: "Trabalhos relacionados",
  processTitle1: "Sem caixa-preta.",
  processTitle2: "Você vê cada etapa.",
  processIntro:
    "Seis etapas, sempre na mesma ordem. Cada uma termina com a sua aprovação antes de começar a próxima.",
  payTitle1: "Metade para começar.",
  payTitle2: "Metade na entrega.",
  payIntro:
    "Sem mensalidade escondida, sem taxa surpresa no fim. O valor fechado na proposta é o valor do projeto. Domínio e projetos de gestão têm mensalidade à parte, sempre informada antes de fechar.",
  payStartLabel: "Para começar",
  payStartText:
    "Pago após a aprovação da proposta. É o que reserva seu lugar na agenda.",
  payEndLabel: "Na entrega",
  payEndText: "Pago quando o projeto está pronto, testado e aprovado por você.",
  supportLabel: "Depois do lançamento",
  supportTitle: "15 dias de suporte grátis",
  supportText:
    "Ajustes, correções e dúvidas por nossa conta durante os 15 dias seguintes à entrega.",
  maintenanceTitle: "E depois?",
  maintenanceText:
    "Se quiser seguir com a gente, montamos uma manutenção do tamanho da sua necessidade: atualizações, melhorias e monitoramento.",
  faqLabel: "Perguntas frequentes",
  faqTitle1: "Antes de perguntar,",
  faqTitle2: "talvez esteja aqui.",
  contactTitle1: "Vamos marcar",
  contactTitle2: "uma conversa.",
  contactIntro:
    "Conte rápido o que você precisa. A gente responde em até um dia útil para combinar o horário da reunião.",
  fName: "Nome",
  fEmail: "E-mail",
  fPhone: "WhatsApp com DDD",
  fProject: "Tipo de projeto",
  fMessage: "O que você precisa?",
  optSite: "Site",
  optApp: "App",
  optLanding: "Landing page",
  optOther: "Ainda não sei",
  consent:
    "Autorizo a Dev Team Tech a usar meus dados apenas para responder este pedido e agendar a reunião, conforme a",
  privacyLink: "Política de Privacidade",
  send: "Enviar e agendar",
  sending: "Enviando",
  sent: "Pronto",
  sentText:
    "Abrimos o WhatsApp com sua mensagem. É só enviar que a gente responde.",
  sendAnother: "Enviar outra mensagem",
  errName: "Diga como podemos te chamar.",
  errEmail: "Confira o e-mail.",
  errPhone: "Informe um WhatsApp com DDD.",
  errProject: "Escolha uma opção.",
  errMessage: "Conte um pouco mais sobre o projeto.",
  errConsent: "Precisamos da sua autorização para responder.",
  directLabel: "Prefere ir direto?",
  directWhatsapp: "Chamar no WhatsApp",
  channels: "Canais",
  channelWhatsapp: "WhatsApp",
  channelEmail: "E-mail",
  channelInstagram: "Instagram",
  channelGithub: "GitHub",
  responseTime: "Resposta em até 1 dia útil",
  waGreeting: "Olá, Dev Team Tech! Quero agendar uma reunião.",
  footerCta: "Vamos conversar?",
  footerText:
    "Sites, apps e landing pages feitos por um time que responde pelo que entrega.",
  footerPages: "Páginas",
  footerContact: "Contato",
  footerLegal: "Legal",
  privacy: "Política de Privacidade",
  terms: "Termos de Uso",
  cookiePrefs: "Preferências de cookies",
  rights: "Todos os direitos reservados.",
  location: "Brasília, Brasil · Atendimento remoto",
  backTop: "Voltar ao topo",
  cookieTitle: "Cookies, só com a sua permissão.",
  cookieBody:
    "Usamos apenas o essencial para o site funcionar: tema, idioma e esta escolha. Análise e marketing ficam desligados até você autorizar.",
  essentialOnly: "Apenas essenciais",
  customize: "Personalizar",
  acceptAll: "Aceitar tudo",
  cookieSettings: "Preferências de cookies",
  essential: "Essenciais",
  essentialDesc:
    "Guardam tema, idioma e sua escolha de cookies. Sem eles o site não funciona direito.",
  analytics: "Análise",
  analyticsDesc: "Medem visitas de forma agregada para melhorar o site.",
  marketing: "Marketing",
  marketingDesc: "Permitem medir campanhas e mostrar anúncios relevantes.",
  save: "Salvar escolha",
  alwaysOn: "Sempre ativo",
  legalLabel: "LGPD",
  dpo: "Encarregado de dados (DPO)",
  dpoText:
    "Para acessar, corrigir, excluir ou portar seus dados, ou revogar o consentimento, escreva para:",
  updated: "Atualizado em outubro de 2026",
}

export type CopyKey = keyof typeof pt
export type Copy = Record<CopyKey, string>

const es: Copy = {
  skip: "Saltar al contenido",
  navLabel: "Navegación principal",
  menuOpen: "Abrir menú",
  menuClose: "Cerrar menú",
  theme: "Cambiar entre tema claro y oscuro",
  language: "Idioma",
  schedule: "Agendar reunión",
  seeWork: "Ver trabajos",
  open: "Abrir",
  back: "Volver",
  next: "Siguiente",
  prev: "Anterior",
  close: "Cerrar",
  cursorView: "Ver",
  navHome: "Inicio",
  navServices: "Servicios",
  navWork: "Portafolio",
  navTeam: "Equipo",
  navProcess: "Proceso",
  navPayment: "Pago",
  navContact: "Contacto",
  descServices: "Qué hacemos y para quién",
  descWork: "Proyectos, retos y resultados",
  descTeam: "Quién hace cada parte",
  descProcess: "De la primera charla al soporte",
  descPayment: "50% + 50% y 15 días de soporte",
  descContact: "Agenda una reunión",
  available: "Agenda abierta para nuevos proyectos",
  heroEyebrow: "Sitios, apps y landing pages",
  heroL1: "Sitios que",
  heroL2: "explican, venden",
  heroL3: "y aguantan lo que venga.",
  heroBody:
    "Diseñamos, programamos, probamos y entregamos. Tú lo sigues todo, del primer boceto al sitio publicado.",
  heroImageAlt: "Estación de trabajo de Dev Team Tech con código en pantalla",
  heroCaption: "Estudio · Brasilia",
  statProjects: "proyectos entregados",
  statClients: "clientes atendidos",
  statYears: "años de camino",
  statSatisfaction: "de satisfacción",
  marqueeLabel: "Tecnologías que usamos",
  manifestoLabel: "Cómo trabajamos",
  manifesto1: "Sin intermediarios,",
  manifesto2: "sin jerga,",
  manifesto3: "sin desaparecer después.",
  manifestoBody:
    "Hablas directo con quien hace el trabajo. Los dos CEOs participan del proyecto, QA prueba antes de que lo veas y marketing produce foto y vídeo cuando el proyecto lo pide.",
  indexLabel: "El sitio por dentro",
  indexTitle1: "Elige por",
  indexTitle2: "dónde empezar.",
  featuredLabel: "Trabajos recientes",
  featuredTitle1: "Algunos proyectos",
  featuredTitle2: "que nos gusta mostrar.",
  featuredLink: "Ver portafolio completo",
  ctaLabel: "Siguiente paso",
  ctaTitle1: "¿Tienes un proyecto",
  ctaTitle2: "en mente?",
  ctaBody:
    "Reserva 30 minutos con nosotros. Si no tiene sentido, te lo decimos en el momento.",
  servicesTitle1: "Tres formatos.",
  servicesTitle2: "Un equipo completo.",
  servicesIntro:
    "Sitio, app o landing page: cambia el formato, no el cuidado. Pasa el mouse o toca cada línea para ver qué incluye.",
  forWho: "Para quién",
  delivers: "Qué recibes",
  anyBusinessLabel: "Para cualquier negocio",
  anyBusinessTitle1: "Si tu negocio necesita ser encontrado,",
  anyBusinessTitle2: "entendido o contratado, encaja aquí.",
  workTitle1: "Trabajo que",
  workTitle2: "habla por sí solo.",
  workIntro:
    "Proyectos y casos de estudio. Haz clic en cualquiera para ver el reto, la solución y el resultado.",
  filterLabel: "Filtrar por categoría",
  filterAll: "Todos",
  filterSites: "Sitios",
  filterApps: "Apps",
  filterLanding: "Landing pages",
  challenge: "Reto",
  solution: "Solución",
  stack: "Tecnologías",
  outcome: "Resultado",
  visitSite: "Ver sitio",
  projectCta: "Quiero algo así",
  teamTitle1: "Cuatro personas.",
  teamTitle2: "Ningún intermediario.",
  teamIntro:
    "Pasa el mouse para ver quién es quién. Haz clic para conocer el trabajo de cada uno.",
  teamPackageLabel: "Incluido en el paquete",
  teamPackage:
    "El marketing es parte del proyecto: foto, vídeo y contenido visual pueden ir en la misma propuesta, sin proveedor extra.",
  inPractice: "En la práctica",
  whatWeDo: "Lo que hacemos",
  relatedWork: "Trabajos relacionados",
  processTitle1: "Sin caja negra.",
  processTitle2: "Ves cada etapa.",
  processIntro:
    "Seis etapas, siempre en el mismo orden. Cada una termina con tu aprobación antes de empezar la siguiente.",
  payTitle1: "Mitad para empezar.",
  payTitle2: "Mitad al entregar.",
  payIntro:
    "Sin cuotas ocultas ni cargos sorpresa al final. El valor cerrado en la propuesta es el valor del proyecto. El dominio y los proyectos de gestión tienen una cuota mensual aparte, siempre informada antes de cerrar.",
  payStartLabel: "Para empezar",
  payStartText:
    "Se paga al aprobar la propuesta. Es lo que reserva tu lugar en la agenda.",
  payEndLabel: "Al entregar",
  payEndText:
    "Se paga cuando el proyecto está listo, probado y aprobado por ti.",
  supportLabel: "Después del lanzamiento",
  supportTitle: "15 días de soporte gratis",
  supportText:
    "Ajustes, correcciones y dudas corren por nuestra cuenta durante los 15 días siguientes a la entrega.",
  maintenanceTitle: "¿Y después?",
  maintenanceText:
    "Si quieres seguir con nosotros, armamos un mantenimiento a tu medida: actualizaciones, mejoras y monitoreo.",
  faqLabel: "Preguntas frecuentes",
  faqTitle1: "Antes de preguntar,",
  faqTitle2: "quizás esté aquí.",
  contactTitle1: "Agendemos",
  contactTitle2: "una charla.",
  contactIntro:
    "Cuéntanos en pocas palabras qué necesitas. Respondemos en un día hábil para acordar el horario de la reunión.",
  fName: "Nombre",
  fEmail: "E-mail",
  fPhone: "WhatsApp con código de área",
  fProject: "Tipo de proyecto",
  fMessage: "¿Qué necesitas?",
  optSite: "Sitio",
  optApp: "App",
  optLanding: "Landing page",
  optOther: "Aún no lo sé",
  consent:
    "Autorizo a Dev Team Tech a usar mis datos solo para responder esta solicitud y agendar la reunión, según la",
  privacyLink: "Política de Privacidad",
  send: "Enviar y agendar",
  sending: "Enviando",
  sent: "Listo",
  sentText: "Abrimos WhatsApp con tu mensaje. Solo envíalo y te respondemos.",
  sendAnother: "Enviar otro mensaje",
  errName: "Dinos cómo llamarte.",
  errEmail: "Revisa el e-mail.",
  errPhone: "Indica un WhatsApp con código de área.",
  errProject: "Elige una opción.",
  errMessage: "Cuéntanos un poco más del proyecto.",
  errConsent: "Necesitamos tu autorización para responder.",
  directLabel: "¿Prefieres ir directo?",
  directWhatsapp: "Escribir por WhatsApp",
  channels: "Canales",
  channelWhatsapp: "WhatsApp",
  channelEmail: "E-mail",
  channelInstagram: "Instagram",
  channelGithub: "GitHub",
  responseTime: "Respuesta en 1 día hábil",
  waGreeting: "¡Hola, Dev Team Tech! Quiero agendar una reunión.",
  footerCta: "¿Hablamos?",
  footerText:
    "Sitios, apps y landing pages hechos por un equipo que responde por lo que entrega.",
  footerPages: "Páginas",
  footerContact: "Contacto",
  footerLegal: "Legal",
  privacy: "Política de Privacidad",
  terms: "Términos de Uso",
  cookiePrefs: "Preferencias de cookies",
  rights: "Todos los derechos reservados.",
  location: "Brasilia, Brasil · Atención remota",
  backTop: "Volver arriba",
  cookieTitle: "Cookies, solo con tu permiso.",
  cookieBody:
    "Usamos solo lo esencial para que el sitio funcione: tema, idioma y esta elección. Análisis y marketing quedan apagados hasta que lo autorices.",
  essentialOnly: "Solo esenciales",
  customize: "Personalizar",
  acceptAll: "Aceptar todo",
  cookieSettings: "Preferencias de cookies",
  essential: "Esenciales",
  essentialDesc:
    "Guardan tema, idioma y tu elección de cookies. Sin ellas el sitio no funciona bien.",
  analytics: "Análisis",
  analyticsDesc: "Miden visitas de forma agregada para mejorar el sitio.",
  marketing: "Marketing",
  marketingDesc: "Permiten medir campañas y mostrar anuncios relevantes.",
  save: "Guardar elección",
  alwaysOn: "Siempre activo",
  legalLabel: "LGPD",
  dpo: "Encargado de datos (DPO)",
  dpoText:
    "Para acceder, corregir, eliminar o portar tus datos, o revocar el consentimiento, escribe a:",
  updated: "Actualizado en octubre de 2026",
}

const en: Copy = {
  skip: "Skip to content",
  navLabel: "Main navigation",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  theme: "Toggle light and dark theme",
  language: "Language",
  schedule: "Book a meeting",
  seeWork: "See our work",
  open: "Open",
  back: "Back",
  next: "Next",
  prev: "Previous",
  close: "Close",
  cursorView: "View",
  navHome: "Home",
  navServices: "Services",
  navWork: "Work",
  navTeam: "Team",
  navProcess: "Process",
  navPayment: "Pricing",
  navContact: "Contact",
  descServices: "What we do and who it's for",
  descWork: "Projects, challenges and outcomes",
  descTeam: "Who does what",
  descProcess: "From first call to support",
  descPayment: "50% + 50% and 15 days of support",
  descContact: "Book a meeting",
  available: "Taking on new projects",
  heroEyebrow: "Websites, apps and landing pages",
  heroL1: "Websites that",
  heroL2: "explain, sell",
  heroL3: "and hold up.",
  heroBody:
    "We design, build, test and ship. You follow every step, from the first sketch to launch day.",
  heroImageAlt: "Dev Team Tech workstation with code on screen",
  heroCaption: "Studio · Brasília",
  statProjects: "projects shipped",
  statClients: "clients served",
  statYears: "years in the game",
  statSatisfaction: "satisfaction",
  marqueeLabel: "Technologies we use",
  manifestoLabel: "How we work",
  manifesto1: "No middlemen,",
  manifesto2: "no jargon,",
  manifesto3: "no vanishing act.",
  manifestoBody:
    "You talk directly to the people doing the work. Both CEOs stay on the project, QA tests before you see it, and marketing shoots photo and video when the project needs it.",
  indexLabel: "Inside the site",
  indexTitle1: "Pick where",
  indexTitle2: "to start.",
  featuredLabel: "Recent work",
  featuredTitle1: "A few projects",
  featuredTitle2: "we like to show off.",
  featuredLink: "See the full portfolio",
  ctaLabel: "Next step",
  ctaTitle1: "Got a project",
  ctaTitle2: "in mind?",
  ctaBody:
    "Book 30 minutes with us. If it's not a fit, we'll tell you right away.",
  servicesTitle1: "Three formats.",
  servicesTitle2: "One full team.",
  servicesIntro:
    "Website, app or landing page: the format changes, the care doesn't. Hover or tap each row to see what's included.",
  forWho: "Built for",
  delivers: "What you get",
  anyBusinessLabel: "For any business",
  anyBusinessTitle1: "If your business needs to be found,",
  anyBusinessTitle2: "understood or hired, it fits here.",
  workTitle1: "Work that",
  workTitle2: "speaks for itself.",
  workIntro:
    "Projects and case studies. Click any of them to see the challenge, the solution and the outcome.",
  filterLabel: "Filter by category",
  filterAll: "All",
  filterSites: "Websites",
  filterApps: "Apps",
  filterLanding: "Landing pages",
  challenge: "Challenge",
  solution: "Solution",
  stack: "Stack",
  outcome: "Outcome",
  visitSite: "Visit site",
  projectCta: "I want something like this",
  teamTitle1: "Four people.",
  teamTitle2: "Zero handoffs.",
  teamIntro:
    "Hover to see who's who. Click to see what each person actually does.",
  teamPackageLabel: "Included",
  teamPackage:
    "Marketing is part of the deal: photo, video and visual content can go into the same proposal, with no extra vendor.",
  inPractice: "Day to day",
  whatWeDo: "What we do",
  relatedWork: "Related work",
  processTitle1: "No black box.",
  processTitle2: "You see every step.",
  processIntro:
    "Six steps, always in the same order. Each one ends with your sign-off before the next begins.",
  payTitle1: "Half to start.",
  payTitle2: "Half on delivery.",
  payIntro:
    "No hidden monthly fees, no surprise charges at the end. The price in the proposal is the price of the project. Domains and management-type projects do carry a separate monthly fee, always disclosed before you commit.",
  payStartLabel: "To start",
  payStartText:
    "Paid once you approve the proposal. It locks in your spot on our calendar.",
  payEndLabel: "On delivery",
  payEndText: "Paid when the project is ready, tested and approved by you.",
  supportLabel: "After launch",
  supportTitle: "15 days of free support",
  supportText:
    "Tweaks, fixes and questions are on us for the 15 days after delivery.",
  maintenanceTitle: "And after that?",
  maintenanceText:
    "If you want to keep working together, we set up a maintenance plan sized to what you need: updates, improvements and monitoring.",
  faqLabel: "FAQ",
  faqTitle1: "Before you ask,",
  faqTitle2: "it might be here.",
  contactTitle1: "Let's set up",
  contactTitle2: "a conversation.",
  contactIntro:
    "Tell us briefly what you need. We reply within one business day to pick a time for the meeting.",
  fName: "Name",
  fEmail: "E-mail",
  fPhone: "WhatsApp with area code",
  fProject: "Project type",
  fMessage: "What do you need?",
  optSite: "Website",
  optApp: "App",
  optLanding: "Landing page",
  optOther: "Not sure yet",
  consent:
    "I allow Dev Team Tech to use my data only to reply to this request and schedule the meeting, as described in the",
  privacyLink: "Privacy Policy",
  send: "Send and book",
  sending: "Sending",
  sent: "Done",
  sentText:
    "We opened WhatsApp with your message. Just hit send and we'll get back to you.",
  sendAnother: "Send another message",
  errName: "Tell us what to call you.",
  errEmail: "Check your e-mail.",
  errPhone: "Enter a WhatsApp number with area code.",
  errProject: "Pick an option.",
  errMessage: "Tell us a bit more about the project.",
  errConsent: "We need your permission to reply.",
  directLabel: "Rather skip the form?",
  directWhatsapp: "Message us on WhatsApp",
  channels: "Channels",
  channelWhatsapp: "WhatsApp",
  channelEmail: "E-mail",
  channelInstagram: "Instagram",
  channelGithub: "GitHub",
  responseTime: "Reply within 1 business day",
  waGreeting: "Hi, Dev Team Tech! I'd like to book a meeting.",
  footerCta: "Shall we talk?",
  footerText:
    "Websites, apps and landing pages built by a team that owns what it ships.",
  footerPages: "Pages",
  footerContact: "Contact",
  footerLegal: "Legal",
  privacy: "Privacy Policy",
  terms: "Terms of Use",
  cookiePrefs: "Cookie preferences",
  rights: "All rights reserved.",
  location: "Brasília, Brazil · Working remotely",
  backTop: "Back to top",
  cookieTitle: "Cookies, only with your permission.",
  cookieBody:
    "We only use what the site needs to work: theme, language and this choice. Analytics and marketing stay off until you allow them.",
  essentialOnly: "Essential only",
  customize: "Customize",
  acceptAll: "Accept all",
  cookieSettings: "Cookie preferences",
  essential: "Essential",
  essentialDesc:
    "Store theme, language and your cookie choice. The site won't work properly without them.",
  analytics: "Analytics",
  analyticsDesc: "Measure visits in aggregate so we can improve the site.",
  marketing: "Marketing",
  marketingDesc: "Let us measure campaigns and show relevant ads.",
  save: "Save choice",
  alwaysOn: "Always on",
  legalLabel: "LGPD",
  dpo: "Data Protection Officer (DPO)",
  dpoText:
    "To access, correct, delete or port your data, or to withdraw consent, write to:",
  updated: "Updated October 2026",
}

export const copy: Record<Lang, Copy> = { pt, es, en }

export const PAGES: Array<{
  id: PageId
  index: string
  labelKey: CopyKey
  descKey: CopyKey
}> = [
  { id: "inicio", index: "00", labelKey: "navHome", descKey: "heroEyebrow" },
  {
    id: "servicos",
    index: "01",
    labelKey: "navServices",
    descKey: "descServices",
  },
  { id: "portfolio", index: "02", labelKey: "navWork", descKey: "descWork" },
  { id: "time", index: "03", labelKey: "navTeam", descKey: "descTeam" },
  {
    id: "processo",
    index: "04",
    labelKey: "navProcess",
    descKey: "descProcess",
  },
  {
    id: "pagamento",
    index: "05",
    labelKey: "navPayment",
    descKey: "descPayment",
  },
  {
    id: "contato",
    index: "06",
    labelKey: "navContact",
    descKey: "descContact",
  },
]

export interface Stat {
  value: number
  suffix: string
  labelKey: CopyKey
}

export const STATS: Stat[] = [
  { value: 24, suffix: "+", labelKey: "statProjects" },
  { value: 18, suffix: "+", labelKey: "statClients" },
  { value: 4, suffix: "", labelKey: "statYears" },
  { value: 100, suffix: "%", labelKey: "statSatisfaction" },
]

export const TECHNOLOGIES = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Vite",
  "Figma",
  "Git",
  "Vercel",
  "Lighthouse",
]

export const BUSINESS_TYPES: LocalizedList = {
  pt: [
    "Clínicas",
    "Escritórios",
    "Restaurantes",
    "Lojas",
    "Imobiliárias",
    "Academias",
    "Startups",
    "Prestadores de serviço",
    "Eventos",
    "Profissionais liberais",
  ],
  es: [
    "Clínicas",
    "Despachos",
    "Restaurantes",
    "Tiendas",
    "Inmobiliarias",
    "Gimnasios",
    "Startups",
    "Servicios",
    "Eventos",
    "Profesionales",
  ],
  en: [
    "Clinics",
    "Law & accounting",
    "Restaurants",
    "Retail",
    "Real estate",
    "Gyms",
    "Startups",
    "Service businesses",
    "Events",
    "Freelancers",
  ],
}

export const SERVICES: Array<{
  title: Localized
  line: Localized
  text: Localized
  audience: Localized
  deliverables: LocalizedList
}> = [
  {
    title: { pt: "Sites", es: "Sitios", en: "Websites" },
    line: {
      pt: "Institucionais e de serviços",
      es: "Institucionales y de servicios",
      en: "Company and service sites",
    },
    text: {
      pt: "Para quem precisa ser encontrado no Google e passar confiança logo no primeiro acesso.",
      es: "Para quien necesita aparecer en Google y transmitir confianza desde la primera visita.",
      en: "For businesses that need to show up on Google and earn trust on the very first visit.",
    },
    audience: {
      pt: "Empresas, clínicas, escritórios, comércio local e profissionais liberais.",
      es: "Empresas, clínicas, despachos, comercio local y profesionales.",
      en: "Companies, clinics, firms, local shops and independent professionals.",
    },
    deliverables: {
      pt: [
        "Estrutura e textos pensados para vender",
        "Design sob medida, sem template",
        "SEO técnico e páginas rápidas",
        "Domínio, hospedagem e publicação",
      ],
      es: [
        "Estructura y textos pensados para vender",
        "Diseño a medida, sin plantillas",
        "SEO técnico y páginas rápidas",
        "Dominio, hosting y publicación",
      ],
      en: [
        "Structure and copy built to sell",
        "Custom design, no templates",
        "Technical SEO and fast pages",
        "Domain, hosting and launch",
      ],
    },
  },
  {
    title: { pt: "Apps", es: "Apps", en: "Apps" },
    line: {
      pt: "Aplicações web e sistemas",
      es: "Aplicaciones web y sistemas",
      en: "Web apps and internal tools",
    },
    text: {
      pt: "Para quem tem um processo travado em planilha, papel ou WhatsApp e quer uma ferramenta própria.",
      es: "Para quien tiene un proceso atascado en planillas, papel o WhatsApp y quiere una herramienta propia.",
      en: "For teams stuck with spreadsheets, paper or WhatsApp threads who want a tool of their own.",
    },
    audience: {
      pt: "Operações internas, startups e negócios que estão crescendo.",
      es: "Operaciones internas, startups y negocios en crecimiento.",
      en: "Internal operations, startups and growing businesses.",
    },
    deliverables: {
      pt: [
        "Mapeamento dos fluxos com você",
        "Interface simples para quem usa todo dia",
        "Integrações com APIs e pagamentos",
        "Testes de QA e documentação",
      ],
      es: [
        "Mapeo de los flujos contigo",
        "Interfaz simple para el uso diario",
        "Integraciones con APIs y pagos",
        "Pruebas de QA y documentación",
      ],
      en: [
        "Workflow mapping with you",
        "A simple interface for daily use",
        "API and payment integrations",
        "QA testing and documentation",
      ],
    },
  },
  {
    title: { pt: "Landing pages", es: "Landing pages", en: "Landing pages" },
    line: {
      pt: "Campanhas e lançamentos",
      es: "Campañas y lanzamientos",
      en: "Campaigns and launches",
    },
    text: {
      pt: "Para quem tem uma oferta clara e precisa transformar visita em contato, sem distração.",
      es: "Para quien tiene una oferta clara y necesita convertir visitas en contactos, sin distracciones.",
      en: "For a clear offer that needs to turn visitors into leads, with nothing in the way.",
    },
    audience: {
      pt: "Lançamentos, campanhas pagas, eventos e validação de ideias.",
      es: "Lanzamientos, campañas pagadas, eventos y validación de ideas.",
      en: "Launches, paid campaigns, events and idea validation.",
    },
    deliverables: {
      pt: [
        "Texto focado em uma única ação",
        "Versão mobile pensada primeiro",
        "Formulário ou WhatsApp integrado",
        "Métricas só com consentimento",
      ],
      es: [
        "Texto enfocado en una sola acción",
        "Versión móvil pensada primero",
        "Formulario o WhatsApp integrado",
        "Métricas solo con consentimiento",
      ],
      en: [
        "Copy focused on a single action",
        "Mobile-first layout",
        "Form or WhatsApp built in",
        "Analytics only with consent",
      ],
    },
  },
]

export type Project = {
  id: string
  name: string
  category: Category
  year: string
  image: string
  url?: string
  type: Localized
  challenge: Localized
  solution: Localized
  result: Localized
  tech: string[]
}

export const PROJECTS: Project[] = [
  {
    id: "dinedrop-app",
    name: "DineDrop",
    category: "apps",
    year: "2026",
    image: dinedropAppImage,
    url: "https://dinedrop-app.vercel.app",
    type: {
      pt: "Sistema para restaurantes",
      es: "Sistema para restaurantes",
      en: "Restaurant management system",
    },
    challenge: {
      pt: "Cardápio, pedidos e entregas espalhados entre papel, WhatsApp e plataformas de terceiros com comissão por pedido.",
      es: "Menú, pedidos y entregas repartidos entre papel, WhatsApp y plataformas de terceros con comisión por pedido.",
      en: "Menu, orders and deliveries scattered across paper, WhatsApp and third-party platforms that charge a commission per order.",
    },
    solution: {
      pt: "Painel completo com cardápio digital por QR Code, pedidos em tempo real, mesas, entregas e cupons — mensalidade fixa, sem comissão.",
      es: "Panel completo con menú digital por QR Code, pedidos en tiempo real, mesas, entregas y cupones — cuota fija, sin comisión.",
      en: "A full dashboard with a QR-code digital menu, real-time orders, tables, deliveries and coupons — flat monthly fee, no commission.",
    },
    result: {
      pt: "Restaurante com visão ao vivo de pedidos, mesas ocupadas e entregas em um só painel.",
      es: "Restaurante con visión en vivo de pedidos, mesas ocupadas y entregas en un solo panel.",
      en: "The restaurant now sees orders, occupied tables and deliveries live, in one dashboard.",
    },
    tech: ["React", "TypeScript", "Supabase"],
  },
  {
    id: "imobiliaria",
    name: "BS Imobiliária",
    category: "apps",
    year: "2026",
    image: imobiliariaImage,
    url: "https://controle-imobiliario.vercel.app",
    type: {
      pt: "Gestão imobiliária",
      es: "Gestión inmobiliaria",
      en: "Real estate management",
    },
    challenge: {
      pt: "Contratos, aluguéis e inadimplência controlados manualmente, sem visão única do financeiro.",
      es: "Contratos, alquileres y morosidad controlados a mano, sin una vista única del financiero.",
      en: "Contracts, rent and overdue payments tracked by hand, with no single view of the finances.",
    },
    solution: {
      pt: "Dashboard com contratos, imóveis, financeiro e fila de atraso, com baixa manual e sincronização automática.",
      es: "Dashboard con contratos, inmuebles, financiero y cola de atraso, con baja manual y sincronización automática.",
      en: "A dashboard with contracts, properties, finances and an overdue-payments queue, with manual write-off and automatic sync.",
    },
    result: {
      pt: "Receita do mês, inadimplência e vencimentos próximos visíveis em um painel só.",
      es: "Ingresos del mes, morosidad y próximos vencimientos visibles en un solo panel.",
      en: "Monthly revenue, overdue accounts and upcoming due dates, all visible in one dashboard.",
    },
    tech: ["React", "TypeScript", "Supabase"],
  },
  {
    id: "hpt",
    name: "High-Performance Team",
    category: "landing",
    year: "2026",
    image: hptImage,
    url: "https://www.highperformanceteam.com.br",
    type: {
      pt: "Consultoria fitness online",
      es: "Consultoría fitness online",
      en: "Online fitness coaching",
    },
    challenge: {
      pt: "Consultoria 100% online que precisava de uma presença com cara de resultado, não de perfil de rede social.",
      es: "Consultoría 100% online que necesitaba una presencia con cara de resultado, no un perfil de red social.",
      en: "A fully online coaching business that needed a presence that looked like results, not a social media profile.",
    },
    solution: {
      pt: "Landing page institucional com planos, equipe, FAQ e contato direto pelo WhatsApp.",
      es: "Landing page institucional con planes, equipo, FAQ y contacto directo por WhatsApp.",
      en: "An institutional landing page with plans, team, FAQ and direct WhatsApp contact.",
    },
    result: {
      pt: "Site publicado com planos claros e canal de contato direto para fechar consultoria.",
      es: "Sitio publicado con planes claros y canal de contacto directo para cerrar consultoría.",
      en: "A live site with clear plans and a direct contact channel for closing new coaching clients.",
    },
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    id: "dinedrop-landing",
    name: "DineDrop — Landing",
    category: "landing",
    year: "2026",
    image: dinedropLandingImage,
    url: "https://dinedrop-landing.vercel.app",
    type: {
      pt: "Landing page de SaaS",
      es: "Landing page de SaaS",
      en: "SaaS landing page",
    },
    challenge: {
      pt: "Apresentar o DineDrop para donos de restaurante e deixar claro que não há comissão por pedido, só mensalidade fixa.",
      es: "Presentar DineDrop a dueños de restaurantes y dejar claro que no hay comisión por pedido, solo cuota fija.",
      en: "Introduce DineDrop to restaurant owners and make it clear there's no per-order commission, only a flat fee.",
    },
    solution: {
      pt: "Landing page com vantagens, nichos atendidos, como funciona, planos e perguntas frequentes.",
      es: "Landing page con ventajas, nichos atendidos, cómo funciona, planes y preguntas frecuentes.",
      en: "A landing page covering benefits, served niches, how it works, plans and FAQs.",
    },
    result: {
      pt: "Página pronta para captar restaurantes com teste grátis de 17 dias.",
      es: "Página lista para captar restaurantes con prueba gratis de 17 días.",
      en: "A page ready to bring in restaurants with a free 17-day trial.",
    },
    tech: ["React", "TypeScript", "Vite"],
  },
  {
    id: "analise-corporal",
    name: "Análise Corporal — Elisângela Jeane",
    category: "landing",
    year: "2026",
    image: analiseCorporalImage,
    url: "https://analisecorporal.vercel.app",
    type: {
      pt: "Página de profissional liberal",
      es: "Página de profesional independiente",
      en: "Independent professional's page",
    },
    challenge: {
      pt: "Divulgar um método próprio de análise corporal e permitir o agendamento de consultas sem depender só das redes sociais.",
      es: "Difundir un método propio de análisis corporal y permitir agendar consultas sin depender solo de las redes sociales.",
      en: "Promote a personal body-analysis method and let clients book consultations without relying only on social media.",
    },
    solution: {
      pt: "Site com método, como funciona, benefícios, depoimentos e botão de agendamento em destaque.",
      es: "Sitio con método, cómo funciona, beneficios, testimonios y botón de agendamiento destacado.",
      en: "A site covering the method, how it works, benefits, testimonials and a prominent booking button.",
    },
    result: {
      pt: "Presença profissional no ar, com agendamento de consulta a um clique.",
      es: "Presencia profesional publicada, con agendamiento de consulta a un clic.",
      en: "A professional presence live online, with consultation booking one click away.",
    },
    tech: ["React", "TypeScript", "Vite"],
  },
]

export type Member = {
  id: string
  name: string
  fullName: string
  initials: string
  photo?: string
  role: Localized
  focus: Localized
  practice: Localized
  does: LocalizedList
  related: string[]
}

export const TEAM: Member[] = [
  {
    id: "matheus",
    name: "Matheus",
    fullName: "Matheus Carvalho",
    initials: "MC",
    photo: matheusPhoto,
    role: { pt: "Fundador & CEO", es: "Fundador y CEO", en: "Founder & CEO" },
    focus: {
      pt: "Visão, atendimento e estratégia",
      es: "Visión, atención y estrategia",
      en: "Vision, clients and strategy",
    },
    practice: {
      pt: "É quem conversa com você primeiro e acompanha o projeto até o fim. Traduz o que o negócio precisa em escopo, prazo e prioridade, e garante que nada saia do combinado.",
      es: "Es quien habla contigo primero y sigue el proyecto hasta el final. Convierte lo que el negocio necesita en alcance, plazo y prioridades, y cuida que nada se salga de lo acordado.",
      en: "He's the first person you talk to and he stays with the project to the end. He turns what the business needs into scope, timeline and priorities, and makes sure nothing drifts from the plan.",
    },
    does: {
      pt: [
        "Conduz a reunião inicial e o diagnóstico",
        "Monta a proposta e o plano do projeto",
        "Define estratégia de conteúdo e conversão",
        "Acompanha cada etapa até a entrega",
      ],
      es: [
        "Conduce la reunión inicial y el diagnóstico",
        "Arma la propuesta y el plan del proyecto",
        "Define la estrategia de contenido y conversión",
        "Sigue cada etapa hasta la entrega",
      ],
      en: [
        "Runs the kickoff call and diagnosis",
        "Writes the proposal and project plan",
        "Sets content and conversion strategy",
        "Follows every step through delivery",
      ],
    },
    related: ["dinedrop-app", "dinedrop-landing"],
  },
  {
    id: "edu",
    name: "Edu",
    fullName: "Eduardo Vilanova",
    initials: "EV",
    photo: eduardoPhoto,
    role: { pt: "CEO & Sócio", es: "CEO y socio", en: "CEO & Partner" },
    focus: {
      pt: "Gestão e desenvolvimento",
      es: "Gestión y desarrollo",
      en: "Management and development",
    },
    practice: {
      pt: "Cuida para o projeto andar no ritmo certo e coloca a mão no código. Organiza as entregas da semana, resolve a parte técnica e mantém tudo documentado.",
      es: "Se asegura de que el proyecto avance al ritmo correcto y mete las manos en el código. Organiza las entregas de la semana, resuelve lo técnico y deja todo documentado.",
      en: "He keeps the project moving at the right pace and writes a lot of the code. He plans the week's deliverables, solves the technical side and keeps everything documented.",
    },
    does: {
      pt: [
        "Organiza cronograma e entregas",
        "Desenvolve front-end e integrações",
        "Escolhe a tecnologia certa para cada caso",
        "Prepara publicação, domínio e hospedagem",
      ],
      es: [
        "Organiza cronograma y entregas",
        "Desarrolla front-end e integraciones",
        "Elige la tecnología adecuada para cada caso",
        "Prepara publicación, dominio y hosting",
      ],
      en: [
        "Plans the schedule and deliverables",
        "Builds front-end and integrations",
        "Picks the right tech for each case",
        "Handles launch, domain and hosting",
      ],
    },
    related: ["imobiliaria", "hpt"],
  },
  {
    id: "daniel",
    name: "Daniel",
    fullName: "Daniel",
    initials: "DN",
    photo: danielPhoto,
    role: { pt: "QA · Qualidade", es: "QA · Calidad", en: "QA · Quality" },
    focus: {
      pt: "Testes antes de cada entrega",
      es: "Pruebas antes de cada entrega",
      en: "Testing before every release",
    },
    practice: {
      pt: "Antes de qualquer coisa chegar até você, passa pelo Daniel. Ele tenta quebrar o site de todos os jeitos possíveis para que ninguém precise descobrir os erros depois.",
      es: "Antes de que algo llegue a ti, pasa por Daniel. Intenta romper el sitio de todas las formas posibles para que nadie tenga que descubrir los errores después.",
      en: "Nothing reaches you without going through Daniel first. He tries to break the site every way he can, so nobody has to find the bugs later.",
    },
    does: {
      pt: [
        "Funcionalidade: formulários, links e fluxos",
        "Responsividade em celular, tablet e desktop",
        "Performance e tempo de carregamento",
        "Segurança básica e proteção de dados",
      ],
      es: [
        "Funcionalidad: formularios, enlaces y flujos",
        "Responsive en móvil, tablet y escritorio",
        "Rendimiento y tiempo de carga",
        "Seguridad básica y protección de datos",
      ],
      en: [
        "Functionality: forms, links and flows",
        "Responsiveness on phone, tablet and desktop",
        "Performance and load time",
        "Basic security and data protection",
      ],
    },
    related: ["hpt", "analise-corporal"],
  },
  {
    id: "gabriel",
    name: "Gabriel",
    fullName: "Gabriel",
    initials: "GB",
    photo: gabrielPhoto,
    role: {
      pt: "Marketing · Foto e vídeo",
      es: "Marketing · Foto y vídeo",
      en: "Marketing · Photo & video",
    },
    focus: {
      pt: "Conteúdo visual",
      es: "Contenido visual",
      en: "Visual content",
    },
    practice: {
      pt: "Produz as imagens que fazem o site parecer de verdade: fotos do seu espaço, da equipe e dos produtos, além de vídeos e cortes para redes sociais.",
      es: "Produce las imágenes que hacen que el sitio se sienta real: fotos de tu local, del equipo y de los productos, además de vídeos y clips para redes.",
      en: "He makes the images that make a site feel real: photos of your space, your team and your products, plus videos and cuts for social media.",
    },
    does: {
      pt: [
        "Fotografia de produto, equipe e ambiente",
        "Captação e edição de vídeo",
        "Cortes e conteúdo para redes sociais",
        "Direção visual das peças do projeto",
      ],
      es: [
        "Fotografía de producto, equipo y espacios",
        "Grabación y edición de vídeo",
        "Clips y contenido para redes sociales",
        "Dirección visual de las piezas",
      ],
      en: [
        "Product, team and space photography",
        "Video shooting and editing",
        "Social media cuts and content",
        "Visual direction for every asset",
      ],
    },
    related: ["dinedrop-landing", "analise-corporal"],
  },
]

export const PROCESS: Array<{
  title: Localized
  text: Localized
  meta: Localized
}> = [
  {
    title: { pt: "Reunião", es: "Reunión", en: "Meeting" },
    text: {
      pt: "Uma conversa de 30 minutos para entender o negócio, o prazo e o que precisa mudar.",
      es: "Una charla de 30 minutos para entender el negocio, el plazo y lo que debe cambiar.",
      en: "A 30-minute call to understand the business, the deadline and what needs to change.",
    },
    meta: { pt: "Dia 1", es: "Día 1", en: "Day 1" },
  },
  {
    title: { pt: "Proposta", es: "Propuesta", en: "Proposal" },
    text: {
      pt: "Escopo, prazo e investimento por escrito. Sem letra miúda.",
      es: "Alcance, plazo e inversión por escrito. Sin letra pequeña.",
      en: "Scope, timeline and price in writing. No fine print.",
    },
    meta: { pt: "Até 3 dias", es: "Hasta 3 días", en: "Within 3 days" },
  },
  {
    title: { pt: "Desenvolvimento", es: "Desarrollo", en: "Build" },
    text: {
      pt: "Design e código em ciclos curtos. Você aprova cada etapa antes de seguir.",
      es: "Diseño y código en ciclos cortos. Apruebas cada etapa antes de seguir.",
      en: "Design and code in short cycles. You approve each stage before we move on.",
    },
    meta: {
      pt: "Conforme o escopo",
      es: "Según el alcance",
      en: "Depends on scope",
    },
  },
  {
    title: { pt: "Testes com QA", es: "Pruebas de QA", en: "QA testing" },
    text: {
      pt: "O Daniel testa funcionalidade, celular, velocidade e segurança antes de você ver.",
      es: "Daniel prueba funcionalidad, móvil, velocidad y seguridad antes de que lo veas.",
      en: "Daniel tests functionality, mobile, speed and security before you see it.",
    },
    meta: {
      pt: "Antes de cada entrega",
      es: "Antes de cada entrega",
      en: "Before every release",
    },
  },
  {
    title: { pt: "Entrega", es: "Entrega", en: "Launch" },
    text: {
      pt: "Publicamos, passamos os acessos e explicamos como tudo funciona.",
      es: "Publicamos, entregamos los accesos y explicamos cómo funciona todo.",
      en: "We go live, hand over access and walk you through how everything works.",
    },
    meta: {
      pt: "Dia do lançamento",
      es: "Día del lanzamiento",
      en: "Launch day",
    },
  },
  {
    title: { pt: "Suporte", es: "Soporte", en: "Support" },
    text: {
      pt: "15 dias de ajustes grátis. Depois, manutenção se você quiser.",
      es: "15 días de ajustes gratis. Después, mantenimiento si lo quieres.",
      en: "15 days of free tweaks. After that, maintenance if you want it.",
    },
    meta: {
      pt: "15 dias + manutenção",
      es: "15 días + mantenimiento",
      en: "15 days + maintenance",
    },
  },
]

export interface Faq {
  q: Localized
  a: Localized
}

export const FAQS: Faq[] = [
  {
    q: {
      pt: "Quanto tempo leva um projeto?",
      es: "¿Cuánto tarda un proyecto?",
      en: "How long does a project take?",
    },
    a: {
      pt: "Uma landing page costuma levar de 2 a 4 semanas. Sites e apps ganham cronograma próprio, podendo chegar a 90 dias conforme o escopo.",
      es: "Una landing page suele tardar de 2 a 4 semanas. Sitios y apps tienen cronograma propio, de hasta 90 días según el alcance.",
      en: "A landing page usually takes 2 to 4 weeks. Websites and apps get their own schedule, up to 90 days depending on scope.",
    },
  },
  {
    q: {
      pt: "Como funciona o pagamento?",
      es: "¿Cómo funciona el pago?",
      en: "How does payment work?",
    },
    a: {
      pt: "50% após a aprovação da proposta e 50% na entrega. Aceitamos Pix, boleto e transferência.",
      es: "50% al aprobar la propuesta y 50% al entregar. Aceptamos transferencia y los principales medios locales.",
      en: "50% when you approve the proposal and 50% on delivery. We accept bank transfer and Brazilian Pix.",
    },
  },
  {
    q: {
      pt: "O que entra nos 15 dias de suporte?",
      es: "¿Qué incluyen los 15 días de soporte?",
      en: "What do the 15 days of support cover?",
    },
    a: {
      pt: "Correções, pequenos ajustes de texto e layout e dúvidas de uso do que foi entregue. Funcionalidades novas entram como manutenção.",
      es: "Correcciones, pequeños ajustes de texto y diseño, y dudas de uso de lo entregado. Funciones nuevas van como mantenimiento.",
      en: "Bug fixes, small copy and layout tweaks, and questions about what we delivered. New features go under maintenance.",
    },
  },
  {
    q: {
      pt: "O código e os acessos ficam comigo?",
      es: "¿El código y los accesos quedan conmigo?",
      en: "Do I keep the code and access?",
    },
    a: {
      pt: "Sim. Na entrega, repositório, arquivos, domínio e credenciais ficam sob o seu controle.",
      es: "Sí. Al entregar, el repositorio, los archivos, el dominio y las credenciales quedan bajo tu control.",
      en: "Yes. On delivery, the repository, files, domain and credentials are all under your control.",
    },
  },
  {
    q: {
      pt: "Vocês atendem fora de Brasília?",
      es: "¿Trabajan fuera de Brasilia?",
      en: "Do you work outside Brasília?",
    },
    a: {
      pt: "Sim. As reuniões são por vídeo e atendemos todo o Brasil e o exterior. Produções de foto e vídeo presenciais são combinadas à parte.",
      es: "Sí. Las reuniones son por vídeo y atendemos todo Brasil y el exterior. Las sesiones presenciales de foto y vídeo se acuerdan aparte.",
      en: "Yes. Meetings happen over video and we work with clients across Brazil and abroad. On-site photo and video shoots are arranged separately.",
    },
  },
]

interface LegalSection {
  title: string
  text: string
}

export const LEGAL: Record<Lang, {
  privacy: LegalSection[]
  terms: LegalSection[]
}> = {
  pt: {
    privacy: [
      {
        title: "Quais dados coletamos",
        text: "Nome, e-mail, WhatsApp, tipo de projeto e a mensagem que você envia pelo formulário. Se você autorizar, também dados de navegação agregados, como páginas visitadas e tipo de dispositivo.",
      },
      {
        title: "Para que usamos",
        text: "Para responder seu contato, agendar reuniões, montar propostas e cumprir o contrato, se ele acontecer. Nada além disso.",
      },
      {
        title: "Base legal",
        text: "Seu consentimento (art. 7º, I, da LGPD) para o contato, e a execução de contrato ou de procedimentos preliminares (art. 7º, V) quando houver proposta.",
      },
      {
        title: "Por quanto tempo guardamos",
        text: "Contatos que não viraram contrato: até 12 meses. Clientes: durante o contrato e pelo prazo exigido por lei, de até 5 anos para fins fiscais.",
      },
      {
        title: "Com quem compartilhamos",
        text: "Apenas com serviços necessários para operar, como hospedagem, e-mail e WhatsApp. Não vendemos nem alugamos dados.",
      },
      {
        title: "Seus direitos",
        text: "Você pode pedir acesso, correção, exclusão e portabilidade dos seus dados, além de revogar o consentimento a qualquer momento, sem custo.",
      },
    ],
    terms: [
      {
        title: "Sobre este site",
        text: "Este site apresenta os serviços da Dev Team Tech. As informações aqui não substituem a proposta comercial.",
      },
      {
        title: "Propostas e contratos",
        text: "Escopo, prazo, valor e forma de pagamento (50% no início e 50% na entrega) são definidos por escrito antes de começar.",
      },
      {
        title: "Conteúdos e marcas",
        text: "Textos, imagens e marcas enviados pelo cliente precisam ter autorização de uso. Os projetos do portfólio são exibidos para apresentação do nosso trabalho.",
      },
      {
        title: "Suporte",
        text: "Os 15 dias de suporte gratuito contam a partir da entrega e cobrem correções e ajustes do escopo contratado.",
      },
    ],
  },
  es: {
    privacy: [
      {
        title: "Qué datos recopilamos",
        text: "Nombre, e-mail, WhatsApp, tipo de proyecto y el mensaje que envías por el formulario. Si lo autorizas, también datos de navegación agregados, como páginas visitadas y tipo de dispositivo.",
      },
      {
        title: "Para qué los usamos",
        text: "Para responder tu contacto, agendar reuniones, preparar propuestas y cumplir el contrato, si lo hay. Nada más.",
      },
      {
        title: "Base legal",
        text: "Tu consentimiento (art. 7, I, de la LGPD) para el contacto, y la ejecución de contrato o de trámites previos (art. 7, V) cuando haya una propuesta.",
      },
      {
        title: "Cuánto tiempo los guardamos",
        text: "Contactos sin contrato: hasta 12 meses. Clientes: durante el contrato y el plazo que exija la ley, de hasta 5 años por motivos fiscales.",
      },
      {
        title: "Con quién los compartimos",
        text: "Solo con servicios necesarios para operar, como hosting, e-mail y WhatsApp. No vendemos ni alquilamos datos.",
      },
      {
        title: "Tus derechos",
        text: "Puedes solicitar acceso, corrección, eliminación y portabilidad de tus datos, y revocar el consentimiento en cualquier momento, sin costo.",
      },
    ],
    terms: [
      {
        title: "Sobre este sitio",
        text: "Este sitio presenta los servicios de Dev Team Tech. La información aquí no reemplaza la propuesta comercial.",
      },
      {
        title: "Propuestas y contratos",
        text: "Alcance, plazo, valor y forma de pago (50% al inicio y 50% al entregar) se definen por escrito antes de empezar.",
      },
      {
        title: "Contenidos y marcas",
        text: "Los textos, imágenes y marcas enviados por el cliente deben contar con autorización de uso. Los proyectos del portafolio se muestran para presentar nuestro trabajo.",
      },
      {
        title: "Soporte",
        text: "Los 15 días de soporte gratuito cuentan desde la entrega y cubren correcciones y ajustes del alcance contratado.",
      },
    ],
  },
  en: {
    privacy: [
      {
        title: "What we collect",
        text: "Your name, e-mail, WhatsApp number, project type and the message you send through the form. If you allow it, also aggregated browsing data such as pages visited and device type.",
      },
      {
        title: "Why we use it",
        text: "To reply to you, book meetings, prepare proposals and fulfil the contract if there is one. Nothing else.",
      },
      {
        title: "Legal basis",
        text: "Your consent (LGPD art. 7, I) for contact, and performance of a contract or pre-contract steps (art. 7, V) when there is a proposal.",
      },
      {
        title: "How long we keep it",
        text: "Leads that don't become clients: up to 12 months. Clients: for the length of the contract and as required by law, up to 5 years for tax purposes.",
      },
      {
        title: "Who we share it with",
        text: "Only services we need to operate, such as hosting, e-mail and WhatsApp. We never sell or rent data.",
      },
      {
        title: "Your rights",
        text: "You can request access, correction, deletion and portability of your data, and withdraw consent at any time, free of charge.",
      },
    ],
    terms: [
      {
        title: "About this site",
        text: "This site presents Dev Team Tech's services. Nothing here replaces the commercial proposal.",
      },
      {
        title: "Proposals and contracts",
        text: "Scope, timeline, price and payment terms (50% upfront and 50% on delivery) are agreed in writing before we start.",
      },
      {
        title: "Content and brands",
        text: "Text, images and brands supplied by the client must be cleared for use. Portfolio projects are shown to present our work.",
      },
      {
        title: "Support",
        text: "The 15 days of free support start on delivery and cover fixes and adjustments within the agreed scope.",
      },
    ],
  },
}
