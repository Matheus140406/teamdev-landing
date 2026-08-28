import { useReveal } from "@/hooks/useReveal"
import { useI18n } from "@/hooks/useI18n"
import { useTimelineProgress } from "@/hooks/useTimelineProgress"

const STEPS = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>, n: "ETAPA 01", tKey: "proc.1.t", tPt: "Descoberta", dKey: "proc.1.d", dPt: "Entendemos seu negócio, seu público e o objetivo do projeto." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 11H3v10h6zM21 3h-6v18h6zM15 9H9v12h6z" /></svg>, n: "ETAPA 02", tKey: "proc.2.t", tPt: "Planejamento", dKey: "proc.2.d", dPt: "Estrutura, copy estratégica e arquitetura definidas por escrito." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /></svg>, n: "ETAPA 03", tKey: "proc.3.t", tPt: "Design", dKey: "proc.3.d", dPt: "Identidade visual e protótipo navegável para você aprovar." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m8 6-6 6 6 6M16 6l6 6-6 6" /></svg>, n: "ETAPA 04", tKey: "proc.4.t", tPt: "Desenvolvimento", dKey: "proc.4.d", dPt: "Código limpo, performático e pronto para escalar." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 11.5a8.4 8.4 0 1 1-4.9-7.6" /><path d="m9 11 3 3L22 4" /></svg>, n: "ETAPA 05", tKey: "proc.5.t", tPt: "Testes", dKey: "proc.5.d", dPt: "Responsivo, rápido e sem bug em qualquer tela." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>, n: "ETAPA 06", tKey: "proc.6.t", tPt: "Entrega", dKey: "proc.6.d", dPt: "No ar, com você no controle total do projeto." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5z" /></svg>, n: "ETAPA 07", tKey: "proc.7.t", tPt: "Suporte", dKey: "proc.7.d", dPt: "Acompanhamento contínuo depois que o site entra no ar." },
]

export default function Process() {
  const { t } = useI18n()
  const head = useReveal()
  const timeline = useReveal<HTMLDivElement>()
  useTimelineProgress(timeline.ref)
  return (
    <section className="section" id="processo">
      <div className="wrap">
        <div className={head.className} ref={head.ref}>
          <span className="eyebrow">{t("proc.eyebrow", "Como trabalhamos")}</span>
          <h2 className="section-title">{t("proc.title", "Processo claro, sem surpresa no meio do caminho.")}</h2>
          <p className="section-sub">{t("proc.sub", "Você sabe exatamente em que etapa o projeto está, do primeiro papo até o suporte depois do ar.")}</p>
        </div>
        <div className={`timeline stagger ${timeline.className}`} ref={timeline.ref}>
          {STEPS.map((s) => (
            <div className="tl-item" key={s.n}>
              <span className="tl-dot">{s.icon}</span>
              <span className="n">{s.n}</span>
              <h3>{t(s.tKey, s.tPt)}</h3>
              <p>{t(s.dKey, s.dPt)}</p>
            </div>
          ))}
        </div>
        <p className="section-sub reveal" style={{ marginTop: "var(--s-3)" }}>
          {t("proc.msg", "Processo transparente, organizado e sem surpresas durante todo o desenvolvimento.")}
        </p>
      </div>
    </section>
  )
}
