import { useReveal } from "@/hooks/useReveal"
import { useI18n } from "@/hooks/useI18n"

const ITEMS = [
  { qKey: "faq.1.q", qPt: "Vocês são novos — têm experiência o suficiente?", aKey: "faq.1.a", aPt: "Sim. Trabalhamos com processo estruturado em etapas e tecnologias modernas. Você acompanha cada fase e aprova o resultado antes de ir ao ar." },
  { qKey: "faq.2.q", qPt: "Qual é o prazo de entrega?", aKey: "faq.2.a", aPt: "Depende do escopo. Em geral o prazo é de até 90 dias, definido por escrito no planejamento conforme a complexidade do projeto." },
  { qKey: "faq.3.q", qPt: "Quanto custa?", aKey: "faq.3.a", aPt: "Varia conforme o projeto. Mas pense no custo de não ter: cada dia sem presença forte é um cliente fechando com o concorrente. Chama no WhatsApp que fazemos um diagnóstico, sem compromisso." },
  { qKey: "faq.4.q", qPt: "E o suporte depois que o site estiver no ar?", aKey: "faq.4.a", aPt: "Continua com a gente. Suporte pós-entrega é diferencial explícito, não letra miúda — você não fica sozinho depois da entrega." },
  { qKey: "faq.5.q", qPt: "De quem é a hospedagem e o código?", aKey: "faq.5.a", aPt: "O projeto é seu. Entregamos o código e orientamos a hospedagem, ou hospedamos para você. Transparência total." },
]

export default function Faq() {
  const { t } = useI18n()
  const head = useReveal()
  const list = useReveal()
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className={head.className} ref={head.ref}>
          <span className="eyebrow">{t("faq.eyebrow", "Dúvidas")}</span>
          <h2 className="section-title">{t("faq.title", "As perguntas que todo mundo faz.")}</h2>
        </div>
        <div className={`faq ${list.className}`} ref={list.ref}>
          {ITEMS.map((it) => (
            <details className="q" key={it.qKey}>
              <summary>
                <span>{t(it.qKey, it.qPt)}</span> <span className="plus" />
              </summary>
              <div className="a">{t(it.aKey, it.aPt)}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
