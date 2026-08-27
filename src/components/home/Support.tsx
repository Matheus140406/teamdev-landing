import { useReveal } from "@/hooks/useReveal"
import { useI18n } from "@/hooks/useI18n"
import HtmlText from "@/components/ui/HtmlText"

const FEATURES: { icon: React.ReactNode; iconCls: string; key: string; pt: string }[] = [
  {
    iconCls: "s-ic ok",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="m5 12 5 5L20 7" /></svg>,
    key: "sup.f1",
    pt: "<b>Correções e ajustes</b> nos primeiros 15 dias — por nossa conta.",
  },
  {
    iconCls: "s-ic in",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a4.5 4.5 0 0 0-6 6L3 18v3h3l5.7-5.7a4.5 4.5 0 0 0 6-6L14 13l-3-3z" /></svg>,
    key: "sup.f2",
    pt: "<b>Manutenções</b> após esse período são cobradas à parte, sempre com orçamento aprovado antes.",
  },
  {
    iconCls: "s-ic in",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>,
    key: "sup.f3",
    pt: "<b>Adições solicitadas pelo cliente</b> — novas funcionalidades ou alterações fora do escopo original — recebem um novo orçamento, por escrito, e você aprova antes de qualquer cobrança.",
  },
  {
    iconCls: "s-ic in",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" /></svg>,
    key: "sup.f4",
    pt: "<b>Atualizações técnicas importantes</b> que impactem o funcionamento do site são comunicadas previamente a você.",
  },
]

export default function Support() {
  const { t } = useI18n()
  const head = useReveal()
  const card = useReveal()
  return (
    <section className="section" id="suporte">
      <span className="sec-orb c o1" aria-hidden="true" />
      <div className="wrap">
        <div className={head.className} ref={head.ref}>
          <span className="eyebrow">{t("sup.eyebrow", "Suporte & manutenção")}</span>
          <h2 className="section-title">{t("sup.title", "Entregamos — e continuamos por perto.")}</h2>
          <p className="section-sub">
            {t("sup.sub", "Transparência total sobre o que está incluído no seu projeto e o que é cobrado à parte. Sem surpresa, sem letra miúda.")}
          </p>
        </div>
        <div className={`support-card ${card.className}`} ref={card.ref}>
          <div className="support-head">
            <span className="support-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5z" /><path d="m9 12 2 2 4-4" /></svg>{" "}
              <span>{t("sup.badge", "15 dias de suporte gratuito")}</span>
            </span>
            <HtmlText as="p" html={t("sup.lead", "Todo projeto inclui <b>15 dias de suporte gratuito</b> após a entrega — ajustes, correções e acompanhamento para o seu site decolar com segurança.")} />
          </div>
          <ul className="support-list">
            {FEATURES.map((f) => (
              <li key={f.key}>
                <span className={f.iconCls}>{f.icon}</span>
                <HtmlText html={t(f.key, f.pt)} />
              </li>
            ))}
          </ul>
          <p className="support-note">{t("sup.note", "Você sabe exatamente o que está incluído — e decide o que contratar depois.")}</p>
        </div>
      </div>
    </section>
  )
}
