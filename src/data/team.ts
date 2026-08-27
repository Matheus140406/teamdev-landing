export interface TeamMember {
  slug: "matheus" | "eduardo" | "daniel"
  name: string
  title: string
  metaDescription: string
  ogImage: string
  photo: string
  role: string
  /** Mensagem usada no CTA do header e no botão flutuante (data-wa-msg). */
  waMessage: string
  githubUrl?: string
  /**
   * O botão "Falar comigo" do bloco de contato: alguns membros usam o número
   * compartilhado da empresa (mesma mensagem do waMessage); Eduardo e Daniel
   * têm número pessoal próprio, preservado do site original.
   */
  falarComigo: { mode: "shared" } | { mode: "personal"; number: string; message: string }
  historia: string
  experiencia: string
  especialidades: string[]
  curiosidades: string
  valores: string
}

export const TEAM: Record<TeamMember["slug"], TeamMember> = {
  matheus: {
    slug: "matheus",
    name: "Matheus Carvalho Dias",
    title: "Matheus Carvalho Dias — Cofundador · Dev Team Tech",
    metaDescription: "Conheça Matheus Carvalho Dias, cofundador e desenvolvedor da Dev Team Tech.",
    ogImage: "/assets/img/matheus.webp",
    photo: "/assets/img/matheus.webp",
    role: "COFUNDADOR · DESENVOLVEDOR",
    waMessage: "Olá Matheus! Vi seu perfil no site da Dev Team Tech e quero falar com você sobre um projeto.",
    githubUrl: "https://github.com/Matheus140406",
    falarComigo: { mode: "shared" },
    historia:
      "Apaixonado por tecnologia desde cedo, transformei a curiosidade por sistemas e inteligência artificial em profissão. Na Dev Team Tech, cuido da parte full-stack e das integrações que fazem um projeto realmente funcionar — não só parecer bonito.",
    experiencia: "Desenvolvimento de sistemas web, APIs, automações e integração com IA.",
    especialidades: ["Back-end", "APIs", "Banco de Dados", "Automações", "Integração com IA"],
    curiosidades: "Faço artes marciais, leio mangás e assisto animes — disciplina e criatividade que acabam influenciando o jeito como eu programo.",
    valores: "Transparência, código limpo e entregar resultado de verdade — não só um site bonito.",
  },
  eduardo: {
    slug: "eduardo",
    name: "Eduardo Vilanova",
    title: "Eduardo Vilanova — Cofundador · Dev Team Tech",
    metaDescription: "Conheça Eduardo Vilanova, cofundador e desenvolvedor da Dev Team Tech.",
    ogImage: "/assets/img/eduardo.webp",
    photo: "/assets/img/eduardo.webp",
    role: "COFUNDADOR · DESENVOLVEDOR",
    waMessage: "Olá Eduardo! Vi seu trabalho no site da Dev Team Tech e quero um site com design de outro nível. Podemos conversar?",
    githubUrl: "https://github.com/Eduardovilanova",
    falarComigo: {
      mode: "personal",
      number: "556195851679",
      message: "Olá Eduardo! Vi seu trabalho no site da Dev Team Tech e quero um site com design de outro nível. Podemos conversar?",
    },
    historia:
      "Meu caminho começou pelo design e pela vontade de fazer as coisas parecerem — e funcionarem — melhor. Trazer na bagagem a experiência com marketing visual e edição para o mercado imobiliário afiou o meu olhar para o que realmente atrai e converte o usuário. Hoje, na Dev Team Tech, sou responsável por front-end, UI/UX e pela parte visual dos projetos; pego a estratégia que o Matheus monta e transformo em uma interface bonita e fluida. Pra mim, um bom site é aquele que a pessoa usa sem perceber o trabalho que teve por trás.",
    experiencia: "Desenvolvimento de sistemas web, APIs, automações e integração com IA.",
    especialidades: ["Front-end", "UI/UX", "Design", "Responsividade", "Performance"],
    curiosidades: "Design de interfaces, estética automotiva e marketing imobiliário. Gosto de aplicar tecnologia e cuidado visual em tudo o que crio.",
    valores: "Transparência, código limpo e entregar resultado de verdade — não só um site bonito.",
  },
  daniel: {
    slug: "daniel",
    name: "Daniel",
    title: "Daniel — Marketing & QA · Dev Team Tech",
    metaDescription: "Conheça Daniel, responsável por marketing e QA na Dev Team Tech.",
    ogImage: "/assets/img/daniel.webp",
    photo: "/assets/img/daniel.webp",
    role: "MARKETING · QA",
    waMessage: "Olá Daniel! Vi seu perfil no site da Dev Team Tech e quero atrair mais clientes para o meu negócio. Pode me ajudar com o marketing?",
    falarComigo: {
      mode: "personal",
      number: "556194117921",
      message: "Olá Daniel! Vi seu perfil no site da Dev Team Tech e quero atrair mais clientes para o meu negócio. Pode me ajudar com o marketing?",
    },
    historia:
      "Entrei na Dev Team Tech pra cuidar da parte que faz o projeto ser visto e chegar até quem realmente importa: o cliente. Levo a marca pras redes, cuido da presença digital do time e, antes de qualquer site sair do ar, sou eu quem testa cada detalhe pra garantir que tudo funciona do jeito certo.",
    experiencia: "Marketing digital, gestão de redes sociais e testes de qualidade (QA) em sites e sistemas antes da entrega.",
    especialidades: ["Marketing Digital", "Redes Sociais", "QA", "Testes de Software"],
    curiosidades: "Curto anime, sou apaixonado por futebol e não dispenso uma partida de jogos online — a mesma atenção aos detalhes que treino nos jogos é o que uso pra caçar qualquer bug antes que o usuário veja.",
    valores: "Transparência, atenção aos detalhes e entregar resultado de verdade — não só um site bonito.",
  },
}
