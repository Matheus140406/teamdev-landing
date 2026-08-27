import { useReveal } from "@/hooks/useReveal"
import { useI18n } from "@/hooks/useI18n"
import HtmlText from "@/components/ui/HtmlText"

const NOTE_PT =
  'Somos apaixonados por tecnologia, IA e desenvolvimento de sistemas. Criamos a Dev Team Tech com uma promessa simples: <span class="grad">transformar sua presença digital em uma máquina de gerar clientes</span> — com design que parece ter custado 5x mais, entregue no prazo combinado e com suporte real depois do ar. Você foca no seu negócio; a gente cuida do digital.'

const FOUNDERS = [
  { href: "matheus.html", img: "/assets/img/matheus.webp", name: "Matheus Carvalho Dias", roleKey: "about.role", rolePt: "COFUNDADOR · DEV", tags: ["Full-stack", "IA", "Sistemas"], alt: "Matheus Carvalho Dias, cofundador da Dev Team Tech" },
  { href: "eduardo.html", img: "/assets/img/eduardo.webp", name: "Eduardo Vilanova", roleKey: "about.role", rolePt: "COFUNDADOR · DEV", tags: ["Front-end", "Design", "UX"], alt: "Eduardo Vilanova, cofundador da Dev Team Tech" },
  { href: "daniel.html", img: "/assets/img/daniel.webp", name: "Daniel", roleKey: "about.role2", rolePt: "MARKETING · QA", tags: ["Marketing", "QA", "Testes"], alt: "Daniel, marketing e QA da Dev Team Tech" },
]

export default function Founders() {
  const { t } = useI18n()
  const head = useReveal()
  const grid = useReveal()
  return (
    <section className="section" id="fundadores">
      <span className="sec-orb p o1" aria-hidden="true" />
      <div className="wrap">
        <div className={head.className} ref={head.ref}>
          <span className="eyebrow">{t("about.eyebrow", "Quem somos")}</span>
          <h2 className="section-title">{t("about.title", "Nosso time, uma obsessão: o seu resultado.")}</h2>
        </div>
        <div className={`founders stagger ${grid.className}`} ref={grid.ref}>
          {FOUNDERS.map((f) => (
            <a className="founder" href={f.href} aria-label={`Ver perfil de ${f.name}`} style={{ display: "block" }} key={f.name}>
              <img src={f.img} alt={f.alt} loading="lazy" />
              <figcaption className="meta">
                <b>{f.name}</b>
                <small>{t(f.roleKey, f.rolePt)}</small>
                <span className="tags">
                  {f.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </span>
              </figcaption>
            </a>
          ))}
          <HtmlText as="p" className="founder-note" html={t("about.note", NOTE_PT)} />
        </div>
      </div>
    </section>
  )
}
