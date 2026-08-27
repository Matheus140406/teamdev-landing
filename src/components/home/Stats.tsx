import { useRef } from "react"
import { useReveal } from "@/hooks/useReveal"
import { useAnimatedCounters } from "@/hooks/useAnimatedCounters"
import { useI18n } from "@/hooks/useI18n"

const STATS = [
  { count: 100, suffix: "%", barW: 100, key: "st.1", pt: "Foco em conversão" },
  { count: 7, suffix: "+", barW: 100, key: "st.2", pt: "Etapas no processo" },
  { count: 12, suffix: "", barW: 85, key: "st.3", pt: "Tecnologias no stack" },
  { count: 100, suffix: "%", barW: 100, key: "st.4", pt: "Código que é seu" },
]

export default function Stats() {
  const { t } = useI18n()
  const { ref: revealRef, className } = useReveal()
  const statsRef = useRef<HTMLDivElement>(null)
  useAnimatedCounters(statsRef)

  return (
    <section className="section" id="numeros">
      <div className="wrap">
        <div
          className={`stats ${className}`}
          id="stats"
          ref={(el) => {
            statsRef.current = el
            revealRef.current = el
          }}
        >
          {STATS.map((s) => (
            <div className="stat" key={s.key}>
              <div className="num" data-count={s.count}>
                <span className="val">0</span>
                <span className="suf">{s.suffix}</span>
              </div>
              <div className="lbl">{t(s.key, s.pt)}</div>
              <div className="bar">
                <i data-w={s.barW} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
