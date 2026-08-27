import { useReveal } from "@/hooks/useReveal"
import { useI18n } from "@/hooks/useI18n"

const CORE = [
  {
    cls: "card span-3 feature tall",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 21h8" /></svg>,
    tKey: "srv.lp.t", tPt: "Landing Pages que convertem",
    dKey: "srv.lp.d", dPt: "Páginas pensadas para uma única missão: transformar visitante em cliente no WhatsApp — com copy estratégica e velocidade de carregamento.",
  },
  {
    cls: "card span-3",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V7l8-4 8 4v14M9 9h.01M9 13h.01" /></svg>,
    tKey: "srv.inst.t", tPt: "Sites Institucionais",
    dKey: "srv.inst.d", dPt: "Autoridade percebida desde o primeiro segundo. Sua marca passando a impressão de empresa grande.",
  },
  {
    cls: "card span-3",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
    tKey: "srv.sys.t", tPt: "Sistemas Web",
    dKey: "srv.sys.d", dPt: "Software sob medida que tira processos do papel e da planilha.",
  },
  {
    cls: "card span-3",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="m7 14 3-3 3 3 5-6" /></svg>,
    tKey: "srv.dash.t", tPt: "Dashboards",
    dKey: "srv.dash.d", dPt: "Seus números em tempo real, para decidir com dados — não no achismo.",
  },
  {
    cls: "card span-3",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4" /><circle cx="12" cy="12" r="3" /></svg>,
    tKey: "srv.auto.t", tPt: "Automações & Integrações",
    dKey: "srv.auto.d", dPt: "Tarefas repetitivas no automático e seus sistemas conversando entre si.",
  },
]

const ADDONS = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="8" rx="2" /><rect x="2" y="13" width="20" height="8" rx="2" /><path d="M6 7h.01M6 17h.01" /></svg>,
    tKey: "srv.host.t", tPt: "Hospedagem",
    dKey: "srv.host.d", dPt: "Cuidamos da hospedagem do seu site, com domínio e SSL configurados.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11l19-9-9 19-2-8-8-2z" /></svg>,
    tKey: "srv.ads.t", tPt: "Tráfego Pago",
    dKey: "srv.ads.d", dPt: "Gestão de anúncios (Google/Meta) para trazer mais clientes ao seu site.",
  },
]

export default function Services() {
  const { t } = useI18n()
  const head = useReveal()
  const bento = useReveal()
  const addon = useReveal()
  return (
    <section className="section" id="servicos">
      <span className="sec-orb p o1" aria-hidden="true" />
      <span className="sec-orb c o2" aria-hidden="true" />
      <div className="wrap">
        <div className={head.className} ref={head.ref}>
          <span className="eyebrow">{t("sol.eyebrow", "A solução")}</span>
          <h2 className="section-title">{t("sol.title", "A gente cuida do digital. Você foca no seu negócio.")}</h2>
          <p className="section-sub">
            {t("sol.sub", "Você não recebe só um site. Recebe estratégia, performance, suporte real depois da entrega e uma base pronta para crescer junto com o seu negócio.")}
          </p>
        </div>
        <div className={`bento bento-services stagger ${bento.className}`} ref={bento.ref}>
          {CORE.map((c) => (
            <article className={c.cls} key={c.tKey}>
              <div className="ic">{c.icon}</div>
              <h3>{t(c.tKey, c.tPt)}</h3>
              <p>{t(c.dKey, c.dPt)}</p>
            </article>
          ))}
        </div>
        <div className={`addon stagger ${addon.className}`} ref={addon.ref}>
          {ADDONS.map((a) => (
            <article className="card" key={a.tKey}>
              <div className="ic">{a.icon}</div>
              <div>
                <h3>{t(a.tKey, a.tPt)}</h3>
                <p>{t(a.dKey, a.dPt)}</p>
                <span className="badge-apart">{t("srv.apart", "Serviço à parte")}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
