import { useState } from "react"
import { useI18n } from "@/hooks/useI18n"
import { useReveal } from "@/hooks/useReveal"

type ProjKey = "cafe" | "ac"

const PROJ: Record<ProjKey, {
  link: string
  tech: string[]
  after: { url: string; name: string; shot: string }
  before: { url: string; name: string; shot: string }
}> = {
  cafe: {
    link: "https://github.com/Matheus140406/CafeteriaAroma-Sabor",
    tech: ["HTML", "CSS", "JavaScript"],
    after: { url: "cafeteria-aroma-sabor", name: "Cafeteria Aroma & Sabor", shot: "/assets/img/cafe-after.webp" },
    before: { url: "cafe-aroma", name: "Café Aroma", shot: "/assets/img/cafearoma-after.webp" },
  },
  ac: {
    link: "https://github.com/Matheus140406/Web-Site-Ar-condicionado",
    tech: ["HTML", "Tailwind", "JavaScript"],
    after: { url: "ronaldo-refrigeracao", name: "Ronaldo Refrigeração", shot: "/assets/img/ac-after.webp" },
    before: { url: "climacerto", name: "ClimaCerto", shot: "/assets/img/climacerto-after.webp" },
  },
}

export default function Showcase() {
  const { t } = useI18n()
  const { ref, className } = useReveal()
  const [curKey, setCurKey] = useState<ProjKey>("cafe")
  const [showBefore, setShowBefore] = useState(false)

  const p = PROJ[curKey]
  const v = showBefore ? p.before : p.after

  return (
    <div className={`ba-fx ${className}`} style={{ marginTop: "var(--s-6)" }} ref={ref}>
      <span className="sec-orb p o1" aria-hidden="true" />
      <span className="sec-orb c o2" aria-hidden="true" />
      <span className="ba-glow" aria-hidden="true" />
      <span className="ba-dot d1" aria-hidden="true" />
      <span className="ba-dot d2" aria-hidden="true" />
      <span className="ba-dot d3" aria-hidden="true" />
      <div>
        <span className="eyebrow">{t("ba.eyebrow", "Antes & Depois")}</span>
        <h2 className="section-title">{t("ba.title", "A diferença que um site estratégico faz.")}</h2>
      </div>
      <div className="showcase" id="showcase">
        <div className="sc-tabs" role="tablist">
          <button
            className={`sc-tab${curKey === "cafe" ? " active" : ""}`}
            role="tab"
            onClick={() => {
              setCurKey("cafe")
              setShowBefore(false)
            }}
          >
            Cafeteria Aroma &amp; Sabor
          </button>
          <button
            className={`sc-tab${curKey === "ac" ? " active" : ""}`}
            role="tab"
            onClick={() => {
              setCurKey("ac")
              setShowBefore(false)
            }}
          >
            Ronaldo Refrigeração
          </button>
        </div>
        <div className="sc-grid">
          <div className={`sc-view${showBefore ? " show-before" : ""}`} id="scView">
            <div className="chrome">
              <i /><i /><i /><span id="scUrl">{v.url}</span>
            </div>
            <div className="shot" id="scShot" style={{ backgroundImage: `url('${v.shot}')` }} />
            <span className="sc-flag depois">{t("sc.depois", "Depois — versão estratégica")}</span>
            <span className="sc-flag antes">{t("sc.antes", "Antes — versão inicial")}</span>
          </div>
          <div className="sc-meta">
            <h3 id="scName">{v.name}</h3>
            <p id="scDesc">{t("ba.cap", "Projeto real desenvolvido pela Dev Team Tech — front-end responsivo, rápido e com contato direto no WhatsApp.")}</p>
            <div className="sc-tech" id="scTech">
              {p.tech.map((tc) => (
                <span key={tc}>{tc}</span>
              ))}
            </div>
            <div className="sc-actions">
              <button className="btn btn-ghost sc-toggle" id="scToggle" onClick={() => setShowBefore((s) => !s)}>
                <span className="lbl-a">{t("sc.seeBefore", 'Ver o "antes"')}</span>
                <span className="lbl-b">{t("sc.seeAfter", 'Ver o "depois"')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
