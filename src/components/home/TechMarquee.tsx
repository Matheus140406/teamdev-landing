import { useReveal } from "@/hooks/useReveal"
import { useI18n } from "@/hooks/useI18n"

const CHIPS = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind", "GitHub", "Vercel", "Figma"]

export default function TechMarquee() {
  const { t } = useI18n()
  const head = useReveal()
  const row = useReveal()
  return (
    <section className="section" id="tecnologias">
      <div className="wrap">
        <div className={head.className} ref={head.ref}>
          <span className="eyebrow">{t("tech.eyebrow", "Stack")}</span>
          <h2 className="section-title">{t("tech.title", "Tecnologias modernas — as mesmas das big techs.")}</h2>
        </div>
        <div className={`tech-marquee ${row.className}`} ref={row.ref}>
          {CHIPS.map((c) => (
            <span className="chip" key={c}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
