import { useMarkLoaded } from "@/hooks/useMarkLoaded"
import { usePfReveal } from "@/hooks/usePfReveal"
import PortfolioHeader from "@/components/portfolio/PortfolioHeader"
import PortfolioFooter from "@/components/portfolio/PortfolioFooter"
import { getGithubProject } from "@/data/projects"

export default function ProjectDetailPage({ slug }: { slug: string }) {
  useMarkLoaded()
  usePfReveal()
  const project = getGithubProject(slug)
  if (!project) return null

  return (
    <div className="pf-body">
      <PortfolioHeader backHref="portfolio.html#github" backLabel="Voltar ao portfólio" />
      <main>
        <section className="pf-detail-hero">
          <div className="pf-wrap">
            <span className="pf-eyebrow">Projeto no GitHub</span>
            <h1 style={{ fontFamily: "var(--pf-font-d)", fontWeight: 700, fontSize: "clamp(28px,4.4vw,44px)", letterSpacing: "-.02em", margin: "18px 0 8px" }}>
              {project.name}
            </h1>
            <p style={{ color: "var(--pf-ink-soft)", maxWidth: "60ch", fontSize: 16 }}>{project.heroIntro}</p>

            <div className="pf-detail-media">
              <img src={project.image} alt={`Prévia da interface do projeto ${project.name}`} />
            </div>

            <div className="pf-detail-grid">
              <div>
                <h2>Sobre o projeto</h2>
                <p>{project.detail.about}</p>
                <h2>O que foi praticado</h2>
                <p>{project.detail.practiced}</p>
              </div>
              <aside className="pf-side">
                <h3>Ficha técnica</h3>
                <dl>
                  <dt>Tipo</dt>
                  <dd>{project.detail.type}</dd>
                  <dt>Stack</dt>
                  <dd>{project.detail.stack}</dd>
                  <dt>Hospedagem</dt>
                  <dd>{project.detail.hosting}</dd>
                  <dt>Status</dt>
                  <dd>{project.detail.status}</dd>
                </dl>
                <a className="pf-btn primary" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  Ver código no GitHub
                </a>
              </aside>
            </div>
          </div>
        </section>

        <PortfolioFooter rightLink={<a href="portfolio.html">← Ver todos os projetos</a>} />
      </main>
    </div>
  )
}
