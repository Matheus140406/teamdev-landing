export interface HostedProject {
  name: string
  description: string
  tech: string[]
  image: string
  liveUrl: string
}

export interface GithubProject {
  slug: string
  name: string
  title: string
  metaDescription: string
  cardDescription: string
  heroIntro: string
  tech: string[]
  image: string
  repoUrl: string
  detail: {
    about: string
    practiced: string
    type: string
    stack: string
    hosting: string
    status: string
  }
}

export const HOSTED_PROJECTS: HostedProject[] = [
  {
    name: "High Performance Team",
    description: "Site institucional de performance pessoal e saúde, com foco em conversão e apresentação de serviços.",
    tech: ["Next.js", "Vercel", "Responsivo"],
    image: "/assets/img/wallpaper-high-performance-team.png",
    liveUrl: "https://high-performance-team-personal-e-sa.vercel.app",
  },
  {
    name: "Imobiliária",
    description: "Plataforma para divulgação de imóveis, com catálogo, filtros e páginas de detalhe pensadas para captação de leads.",
    tech: ["Next.js", "Vercel", "UI/UX"],
    image: "/assets/img/wallpaper-imobiliaria.png",
    liveUrl: "https://imobiliaria-my.vercel.app",
  },
  {
    name: "Análise Corporal",
    description: "Aplicação web para avaliação e acompanhamento de indicadores corporais, com formulários e resultados dinâmicos.",
    tech: ["Next.js", "Vercel", "Formulários"],
    image: "/assets/img/wallpaper-analise-corporal.png",
    liveUrl: "https://analise-corporal.vercel.app",
  },
]

export const GITHUB_PROJECTS: GithubProject[] = [
  {
    slug: "cafeteria-aroma-sabor",
    name: "Cafeteria Aroma & Sabor",
    title: "Cafeteria Aroma & Sabor — Portfólio | Dev Team Tech",
    metaDescription: "Site institucional para cafeteria, com cardápio e apresentação de produtos. Projeto de estudo hospedado no GitHub.",
    cardDescription: "Site institucional para uma cafeteria, com cardápio, apresentação de produtos e seção de contato.",
    heroIntro: "Site institucional para uma cafeteria fictícia, com apresentação da marca, cardápio de bebidas e produtos, e seção de contato — desenvolvido como projeto de prática front-end.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/assets/img/projects/cafeteria-aroma-sabor.svg",
    repoUrl: "https://github.com/Matheus140406/CafeteriaAroma-Sabor",
    detail: {
      about: "O objetivo foi construir uma landing page de cafeteria com identidade visual quente e acolhedora, aplicando boas práticas de estruturação HTML, estilização em CSS e pequenas interações em JavaScript — sem frameworks, para reforçar a base da linguagem.",
      practiced: "Layout responsivo com Flexbox/Grid, componentização visual de cards de produto, tipografia e paleta de cores consistentes, e organização de código para fácil manutenção.",
      type: "Site institucional",
      stack: "HTML, CSS, JS",
      hosting: "Apenas GitHub",
      status: "Projeto de estudo",
    },
  },
  {
    slug: "modo-dark",
    name: "ModoDark",
    title: "ModoDark — Portfólio | Dev Team Tech",
    metaDescription: "Interface com alternância entre tema claro e escuro. Projeto de estudo hospedado no GitHub.",
    cardDescription: "Interface com alternância entre tema claro e escuro, salvando a preferência do usuário.",
    heroIntro: "Interface de exemplo com alternância suave entre tema claro e escuro, salvando a preferência do usuário para a próxima visita.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/assets/img/projects/modo-dark.svg",
    repoUrl: "https://github.com/Matheus140406/ModoDark",
    detail: {
      about: "O ModoDark foi criado para praticar a implementação de temas dinâmicos: um botão alterna entre modo claro e escuro em toda a interface, com transição suave e persistência da escolha via armazenamento local do navegador.",
      practiced: "Uso de variáveis CSS para tematização, manipulação de classes via JavaScript, armazenamento em localStorage e cuidado com contraste e acessibilidade em ambos os temas.",
      type: "UI / componente",
      stack: "HTML, CSS, JS",
      hosting: "Apenas GitHub",
      status: "Projeto de estudo",
    },
  },
  {
    slug: "relogio-digital",
    name: "Relógio Digital",
    title: "Relógio Digital — Portfólio | Dev Team Tech",
    metaDescription: "Relógio digital em tempo real no navegador, com cronômetro e alarme. Projeto de estudo hospedado no GitHub.",
    cardDescription: "Relógio digital em tempo real no navegador, com data, cronômetro e alarme.",
    heroIntro: "Relógio digital que roda direto no navegador, exibindo horas, data e recursos auxiliares como cronômetro e alarme.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/assets/img/projects/relogio-digital.svg",
    repoUrl: "https://github.com/Matheus140406/Relogio-digital",
    detail: {
      about: "Um relógio digital estilizado, atualizado em tempo real, com data por extenso e um painel com cronômetro, alarme e fuso horário — pensado como exercício de manipulação de data/hora em JavaScript.",
      practiced: "Uso do objeto Date, atualização de interface com setInterval, formatação de horário e construção de um layout com estética neon/tecnológica em CSS.",
      type: "Utilitário web",
      stack: "HTML, CSS, JS",
      hosting: "Apenas GitHub",
      status: "Projeto de estudo",
    },
  },
]

export function getGithubProject(slug: string): GithubProject | undefined {
  return GITHUB_PROJECTS.find((p) => p.slug === slug)
}
