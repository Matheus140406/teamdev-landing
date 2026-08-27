import type { HostedProject, GithubProject } from "@/data/projects"

export function HostedProjectCard({ project }: { project: HostedProject }) {
  return (
    <article className="pf-card pf-reveal">
      <div className="pf-thumb">
        <span className="pf-badge live">● Online</span>
        <img src={project.image} alt={`Prévia do projeto ${project.name}`} loading="lazy" />
      </div>
      <div className="pf-card-body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="pf-tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="pf-card-actions">
          <a className="pf-btn primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Ver ao vivo
          </a>
        </div>
      </div>
    </article>
  )
}

export function GithubProjectCard({ project }: { project: GithubProject }) {
  const detailHref = `projeto-${project.slug}.html`
  return (
    <article className="pf-card pf-reveal">
      <a href={detailHref}>
        <div className="pf-thumb">
          <span className="pf-badge code">◆ GitHub</span>
          <img src={project.image} alt={`Prévia do projeto ${project.name}`} loading="lazy" />
        </div>
      </a>
      <div className="pf-card-body">
        <h3>{project.name}</h3>
        <p>{project.cardDescription}</p>
        <div className="pf-tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="pf-card-actions">
          <a className="pf-btn primary" href={detailHref}>Ver projeto</a>
          <a className="pf-btn ghost" href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </article>
  )
}
