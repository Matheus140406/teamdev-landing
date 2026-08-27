import { useReveal } from "@/hooks/useReveal"
import { useI18n } from "@/hooks/useI18n"

const X_ICON = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="m18 6-12 12M6 6l12 12" /></svg>
const OK_ICON = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="m5 12 5 5L20 7" /></svg>

const BAD = ["cmp.bad.1", "cmp.bad.2", "cmp.bad.3", "cmp.bad.4"]
const BAD_PT = [
  "Modelo idêntico ao de dezenas de concorrentes",
  "Visual bonito, mas sem foco em conversão",
  "Carregamento lento, prejudicando SEO e Google",
  "Seu tempo consumido em vez do seu negócio",
]
const GOOD = ["cmp.good.1", "cmp.good.2", "cmp.good.3", "cmp.good.4"]
const GOOD_PT = [
  "Design sob medida, com a identidade do seu negócio",
  "Cada seção pensada para gerar contato",
  "Rápido, otimizado para Google e mobile",
  "A gente faz; você foca em vender",
]

export default function Comparison() {
  const { t } = useI18n()
  const head = useReveal()
  const grid = useReveal()
  return (
    <section className="section" id="comparacao">
      <div className="wrap">
        <div className={head.className} ref={head.ref}>
          <span className="eyebrow">{t("cmp.eyebrow", "Comparação honesta")}</span>
          <h2 className="section-title">{t("cmp.title", "Site de prateleira vs. site sob medida com estratégia.")}</h2>
        </div>
        <div className={`compare ${grid.className}`} ref={grid.ref}>
          <div className="comp bad">
            <span className="comp-tag">{t("cmp.bad.lbl", "Comum no mercado")}</span>
            <h3>
              <span className="comp-ic x">{X_ICON}</span> <span>{t("cmp.bad.t", "Site de prateleira (construtor)")}</span>
            </h3>
            <ul>
              {BAD.map((k, i) => (
                <li key={k}>
                  <span className="comp-ic x sm">{X_ICON}</span>
                  <span>{t(k, BAD_PT[i])}</span>
                </li>
              ))}
            </ul>
          </div>
          <span className="comp-vs" aria-hidden="true">VS</span>
          <div className="comp good">
            <span className="comp-badge">{t("cmp.good.badge", "Recomendado")}</span>
            <span className="comp-tag">{t("cmp.good.lbl", "Nosso padrão")}</span>
            <h3>
              <span className="comp-ic ok">{OK_ICON}</span> <span>{t("cmp.good.t", "Dev Team Tech")}</span>
            </h3>
            <ul>
              {GOOD.map((k, i) => (
                <li key={k}>
                  <span className="comp-ic ok sm">{OK_ICON}</span>
                  <span>{t(k, GOOD_PT[i])}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
