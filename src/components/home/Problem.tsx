import { useReveal } from "@/hooks/useReveal"
import { useI18n } from "@/hooks/useI18n"

const COSTS = [
  { key: "problem.c1", pt: "Cliente busca no Google e encontra o concorrente primeiro" },
  { key: "problem.c2", pt: "Site lento ou amador derruba a confiança em segundos" },
  { key: "problem.c3", pt: "Sem WhatsApp claro, o lead some antes de falar com você" },
  { key: "problem.c4", pt: "Cada dia sem presença forte = oportunidade que não volta" },
]

export default function Problem() {
  const { t } = useI18n()
  const left = useReveal()
  const right = useReveal()
  return (
    <section className="section" id="problema">
      <div className="wrap problem-grid">
        <div className={left.className} ref={left.ref}>
          <span className="eyebrow">{t("problem.eyebrow", "O problema")}</span>
          <h2 className="section-title">
            <span>{t("problem.titleA", "Seu negócio está perdendo clientes ")}</span>
            <span className="grad">{t("problem.titleB", "todos os dias")}</span>.
          </h2>
          <p className="section-sub">
            {t(
              "problem.sub",
              "Enquanto seu site não impressiona — ou nem existe — o cliente que procurava você agora mesmo fecha com o concorrente que apareceu melhor. Não é falta de demanda. É falta de presença.",
            )}
          </p>
        </div>
        <div className={`cost-card ${right.className}`} ref={right.ref}>
          {COSTS.map((c) => (
            <div className="cost-row" key={c.key}>
              <span className="x">✕</span>
              <span>{t(c.key, c.pt)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
