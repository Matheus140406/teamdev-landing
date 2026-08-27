import { useMarkLoaded } from "@/hooks/useMarkLoaded"
import { usePfReveal } from "@/hooks/usePfReveal"
import PortfolioHeader from "@/components/portfolio/PortfolioHeader"
import PortfolioFooter from "@/components/portfolio/PortfolioFooter"
import { HostedProjectCard, GithubProjectCard } from "@/components/portfolio/ProjectCard"
import { HOSTED_PROJECTS, GITHUB_PROJECTS } from "@/data/projects"

export default function PortfolioPage() {
  useMarkLoaded()
  usePfReveal()

  return (
    <div className="pf-body">
      <PortfolioHeader backHref="index.html" backLabel="Voltar ao site" />
      <main>
        <section className="pf-hero">
          <div className="pf-wrap">
            <span className="pf-eyebrow">Portfólio</span>
            <h1>Projetos que já colocamos no ar.</h1>
            <p>Uma seleção de aplicações hospedadas em produção e projetos desenvolvidos no GitHub — cada um com sua própria stack, propósito e nível de complexidade.</p>
          </div>
        </section>

        <section className="pf-section" id="hospedados">
          <div className="pf-wrap">
            <div className="pf-section-head">
              <div>
                <span className="tag">No ar · Produção</span>
                <h2>Projetos hospedados</h2>
              </div>
              <p>Aplicações completas, publicadas na Vercel e disponíveis para acesso imediato.</p>
            </div>
            <div className="pf-grid">
              {HOSTED_PROJECTS.map((p) => (
                <HostedProjectCard project={p} key={p.name} />
              ))}
            </div>
          </div>
        </section>

        <section className="pf-section" id="github">
          <div className="pf-wrap">
            <div className="pf-section-head">
              <div>
                <span className="tag">Código aberto</span>
                <h2>Projetos no GitHub</h2>
              </div>
              <p>Projetos de estudo e prática, sem hospedagem própria. Clique em um card para ver imagens e detalhes de cada um.</p>
            </div>
            <div className="pf-grid">
              {GITHUB_PROJECTS.map((p) => (
                <GithubProjectCard project={p} key={p.slug} />
              ))}
            </div>
          </div>
        </section>

        <PortfolioFooter rightLink={<a href="index.html#contato">Falar sobre um projeto</a>} />
      </main>
    </div>
  )
}
