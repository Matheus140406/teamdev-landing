import { useReveal } from "@/hooks/useReveal"
import { useI18n } from "@/hooks/useI18n"
import ConceptProjects from "@/components/home/ConceptProjects"
import Showcase from "@/components/home/Showcase"

export default function Projects() {
  const { t } = useI18n()
  const head = useReveal()
  return (
    <section className="section" id="projetos">
      <div className="wrap">
        <div className={head.className} ref={head.ref}>
          <span className="eyebrow">{t("pf.eyebrow", "Projetos")}</span>
          <h2 className="section-title">{t("pf.title", "O tipo de projeto que entregamos.")}</h2>
        </div>
        <ConceptProjects />
        <Showcase />
      </div>
    </section>
  )
}
