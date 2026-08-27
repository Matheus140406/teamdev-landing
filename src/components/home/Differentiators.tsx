import { useReveal } from "@/hooks/useReveal"
import { useI18n } from "@/hooks/useI18n"

const ITEMS = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /></svg>, tKey: "d.1.t", tPt: "Design Estratégico", dKey: "d.1.d", dPt: "Cada elemento existe para mover o visitante até o contato." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m8 6-6 6 6 6M16 6l6 6-6 6" /></svg>, tKey: "d.2.t", tPt: "Código Limpo", dKey: "d.2.d", dPt: "Manutenção fácil e base que cresce sem retrabalho." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2 3 14h9l-1 8 10-12h-9z" /></svg>, tKey: "d.3.t", tPt: "Performance", dKey: "d.3.d", dPt: "Carregamento rápido — cada segundo conta na conversão." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5z" /></svg>, tKey: "d.4.t", tPt: "Segurança", dKey: "d.4.d", dPt: "HTTPS, boas práticas e conformidade com a LGPD." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7V4h16v3M9 20h6M12 4v16" /></svg>, tKey: "d.5.t", tPt: "UX de verdade", dKey: "d.5.d", dPt: "Navegação intuitiva no celular e no desktop." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 9h6v6H9z" /></svg>, tKey: "d.6.t", tPt: "Integração com IA", dKey: "d.6.d", dPt: "Atendimento e automações inteligentes quando faz sentido." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 0 1 9-9M21 12a9 9 0 0 1-9 9" /><path d="m16 8 5-5M8 16l-5 5" /></svg>, tKey: "d.7.t", tPt: "Escalabilidade", dKey: "d.7.d", dPt: "Estrutura pronta para blog, novos serviços e idiomas." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 1 1 7.6-12.3" /><path d="m9 11 3 3L22 4" /></svg>, tKey: "d.8.t", tPt: "Suporte Pós-Entrega", dKey: "d.8.d", dPt: "A gente continua junto depois que o site entra no ar." },
]

export default function Differentiators() {
  const { t } = useI18n()
  const head = useReveal()
  const bento = useReveal()
  return (
    <section className="section" id="diferenciais">
      <span className="sec-orb b o2" aria-hidden="true" />
      <div className="wrap">
        <div className={head.className} ref={head.ref}>
          <span className="eyebrow">{t("diff.eyebrow", "Diferenciais")}</span>
          <h2 className="section-title">
            <span>{t("diff.titleA", "Por que isso vira ")}</span>
            <span className="grad">{t("diff.titleB", "resultado")}</span>
            <span>{t("diff.titleC", ", e não só um site bonito.")}</span>
          </h2>
        </div>
        <div className={`bento bento-diff stagger ${bento.className}`} ref={bento.ref}>
          {ITEMS.map((it) => (
            <article className="card" key={it.tKey}>
              <div className="ic">{it.icon}</div>
              <h3>{t(it.tKey, it.tPt)}</h3>
              <p>{t(it.dKey, it.dPt)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
