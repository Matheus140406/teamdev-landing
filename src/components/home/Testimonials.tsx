import { useEffect, useRef, useState } from "react"
import { useReveal } from "@/hooks/useReveal"
import { useI18n } from "@/hooks/useI18n"

const QUOTES = [
  { av: "TR", key: "t.1", pt: '"O site novo deixou a empresa com cara de gente grande. Começamos a receber contato pelo WhatsApp já na primeira semana."', name: "Thiago Ramos", role: "Restaurante · proprietário" },
  { av: "CS", key: "t.2", pt: '"Entregaram rápido e explicaram tudo sem enrolação. O suporte depois da entrega fez toda a diferença pra gente."', name: "Camila Schmidt", role: "Clínica · gestora" },
  { av: "MM", key: "t.3", pt: '"Profissionais e atenciosos. O sistema que fizeram organizou um processo que vivia dando dor de cabeça."', name: "Mateus Rocha Mendes", role: "Imobiliária · corretor" },
  { av: "MF", key: "t.4", pt: '"Atendimento próximo do começo ao fim. Me senti seguro em cada etapa do projeto."', name: "Mariana Frota", role: "Loja · proprietária" },
  { av: "RV", key: "t.5", pt: '"Caprichosos no design e no prazo. O resultado superou o que eu imaginava."', name: "Ricardo Barros Veiga", role: "Advocacia · sócio" },
  { av: "LG", key: "t.6", pt: '"Recomendo de olhos fechados. Site rápido, bonito e que realmente trouxe contato novo."', name: "Letícia Guimarães", role: "Academia · gerente" },
]

export default function Testimonials() {
  const { t } = useI18n()
  const head = useReveal()
  const track = useReveal()
  const [selected, setSelected] = useState<number | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function clear() {
      setSelected(null)
    }
    document.addEventListener("click", clear)
    return () => document.removeEventListener("click", clear)
  }, [])

  // duplica a lista para o loop de marquee sem costura (equivalente ao track.innerHTML += track.innerHTML)
  const items = [...QUOTES, ...QUOTES]

  return (
    <section className="section" id="prova">
      <div className="wrap">
        <div className={head.className} ref={head.ref}>
          <span className="eyebrow">{t("proof.eyebrow", "Prova social")}</span>
          <h2 className="section-title">{t("proof.title", "Quem confiou, voltou a recomendar.")}</h2>
        </div>
      </div>
      <div className={`tcarousel ${track.className}`} aria-label="Depoimentos" ref={track.ref}>
        <div className={`ttrack${selected !== null ? " tpaused" : ""}`} id="ttrack" ref={trackRef}>
          {items.map((q, i) => (
            <figure
              className={`quote${selected === i ? " sel" : ""}`}
              key={i}
              onClick={(e) => {
                e.stopPropagation()
                setSelected((prev) => (prev === i ? null : i))
              }}
              onTouchStart={() => setSelected(i)}
              onTouchEnd={() => setSelected(null)}
            >
              <div className="stars">★★★★★</div>
              <p>{t(q.key, q.pt)}</p>
              <figcaption className="who">
                <span className="av">{q.av}</span>
                <span>
                  <b>{q.name}</b>
                  <small>{q.role}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="wrap" />
    </section>
  )
}
