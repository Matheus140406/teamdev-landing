import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ChangeEvent,
  type CSSProperties,
  type FormEvent,
  type ReactNode,
} from "react"
import heroImage from "./imports/image.png"
import { LogoHorizontal, LogoIcon } from "./Logo"
import { BrandIcon, Icon, type IconName } from "./Icons"
import {
  BUSINESS_TYPES,
  CONTACT,
  FAQS,
  LANGS,
  LEGAL,
  PAGES,
  PROCESS,
  PROJECTS,
  SERVICES,
  STATS,
  TEAM,
  TECHNOLOGIES,
  copy,
  type Category,
  type Copy,
  type CopyKey,
  type Lang,
  type Member,
  type PageId,
  type Project,
} from "./content"
import {
  EASE_OUT,
  canUseRichMotion,
  initCursor,
  initHeader,
  initMagnetic,
  initParallax,
  initReveal,
  initScrollProgress,
  initSmoothScroll,
  initTilt,
  initTimeline,
  lockScroll,
  prefersReducedMotion,
  resetScroll,
  unlockScroll,
} from "./motion"

type Theme = "dark" | "light"
type LegalKind = "privacy" | "terms"
type Consent = {
  essential: true
  analytics: boolean
  marketing: boolean
  date: string
}
type Filter = "all" | Category

type SiteContextValue = {
  lang: Lang
  t: Copy
  navigate: (page: PageId) => void
  openProject: (id: string) => void
  openMember: (index: number) => void
  openLegal: (kind: LegalKind) => void
}

const SiteContext = createContext<SiteContextValue | null>(null)

function useSite() {
  const value = useContext(SiteContext)
  if (!value) throw new Error("SiteContext is missing")
  return value
}

const cssVars = (vars: Record<string, string | number>) => vars as CSSProperties
const pad = (value: number) => String(value).padStart(2, "0")
const waLink = (text?: string) =>
  `https://wa.me/${CONTACT.whatsapp}${
    text ? `?text=${encodeURIComponent(text)}` : ""
  }`

const CATEGORY_KEY: Record<Category, CopyKey> = {
  sites: "filterSites",
  apps: "filterApps",
  landing: "filterLanding",
}

function readStorage(storage: "local" | "session", key: string) {
  try {
    return (storage === "local" ? localStorage : sessionStorage).getItem(key)
  } catch {
    return null
  }
}

function writeStorage(
  storage: "local" | "session",
  key: string,
  value: string,
) {
  try {
    ;(storage === "local" ? localStorage : sessionStorage).setItem(key, value)
  } catch {
    return
  }
}

function getInitialLang(): Lang {
  const stored = readStorage("local", "dtt-language") as Lang | null
  if (stored && LANGS.includes(stored)) return stored
  const browser = (navigator.language || "pt").toLowerCase()
  if (browser.startsWith("es")) return "es"
  if (browser.startsWith("en")) return "en"
  return "pt"
}

function getInitialTheme(): Theme {
  const stored = readStorage("local", "dtt-theme")
  const theme: Theme =
    stored === "light" || stored === "dark"
      ? stored
      : window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark"
  document.documentElement.dataset.theme = theme
  return theme
}

function readConsent(): Consent | null {
  const raw = readStorage("local", "dtt-cookies")
  if (!raw) return null
  try {
    return JSON.parse(raw) as Consent
  } catch {
    return null
  }
}

function parsePage(): PageId {
  const id = window.location.hash.replace(/^#\/?/, "")
  return PAGES.some((page) => page.id === id) ? id as PageId : "inicio"
}

function NavLink({
  to,
  className,
  children,
  label,
  current,
  style,
}: {
  to: PageId
  className?: string
  children: ReactNode
  label?: string
  current?: boolean
  style?: CSSProperties
}) {
  const { navigate } = useSite()
  return (
    <a
      href={`#/${to}`}
      className={className}
      aria-label={label}
      aria-current={current ? "page" : undefined}
      style={style}
      onClick={(event) => {
        if (
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.button !== 0
        )
          return
        event.preventDefault()
        navigate(to)
      }}
    >
      {children}
    </a>
  )
}

function Button({
  to,
  href,
  onClick,
  children,
  variant = "primary",
  small,
  icon = "arrow",
  iconNode,
  external,
  wrapClass = "",
}: {
  to?: PageId
  href?: string
  onClick?: () => void
  children: ReactNode
  variant?: "primary" | "ghost" | "accent"
  small?: boolean
  icon?: IconName | null
  iconNode?: ReactNode
  external?: boolean
  wrapClass?: string
}) {
  const { navigate } = useSite()
  const className = `button button-${variant}${small ? " button-small" : ""}`
  const content = (
    <>
      <span className="button-fill" aria-hidden="true" />
      <span className="button-label">{children}</span>
      {(iconNode || icon) && (
        <span className="button-icon" aria-hidden="true">
          {iconNode ?? (icon && <Icon name={icon} size={18} />)}
        </span>
      )}
    </>
  )
  let element: ReactNode
  if (to) {
    element = (
      <a
        href={`#/${to}`}
        className={className}
        onClick={(event) => {
          event.preventDefault()
          onClick?.()
          navigate(to)
        }}
      >
        {content}
      </a>
    )
  } else if (href) {
    element = (
      <a
        href={href}
        className={className}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        onClick={onClick}
      >
        {content}
      </a>
    )
  } else {
    element = (
      <button type="button" className={className} onClick={onClick}>
        {content}
      </button>
    )
  }
  return (
    <span className={`magnetic ${wrapClass}`} data-magnetic>
      {element}
    </span>
  )
}

function MaskTitle({
  lines,
  as: Tag = "h2",
  className = "",
  mode = "reveal",
  id,
}: {
  lines: ReactNode[]
  as?: "h1" | "h2" | "h3" | "p"
  className?: string
  mode?: "reveal" | "enter"
  id?: string
}) {
  return (
    <Tag
      id={id}
      className={`mask-title ${
        mode === "enter" ? "is-enter" : ""
      } ${className}`}
      data-reveal={mode === "reveal" ? "mask" : undefined}
    >
      {lines.map((line, index) => (
        <span className="line" key={index}>
          <span style={cssVars({ "--l": index })}>{line}</span>
        </span>
      ))}
    </Tag>
  )
}

interface SocialLink {
  href: string
  label: string
  icon: ReactNode
}

interface CounterProps {
  value: number
  suffix: string
}

function Counter({ value, suffix }: CounterProps) {
  const [current, setCurrent] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (prefersReducedMotion()) {
      setCurrent(value)
      return
    }
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / 1400, 1)
          setCurrent(Math.round(value * (1 - Math.pow(1 - progress, 4))))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])
  return (
    <span ref={ref} className="counter">
      <span className="counter-ghost" aria-hidden="true">
        {value}
        {suffix}
      </span>
      <span className="counter-value">
        {current}
        {suffix}
      </span>
    </span>
  )
}

function Rule() {
  return <span className="rule" data-reveal aria-hidden="true" />
}

function SectionHead({
  index,
  label,
  lines,
  intro,
}: {
  index: string
  label: string
  lines: ReactNode[]
  intro?: string
}) {
  return (
    <header className="section-head">
      <p className="eyebrow" data-reveal>
        <span>{index}</span>
        {label}
      </p>
      <MaskTitle lines={lines} />
      {intro && (
        <p className="section-intro" data-reveal>
          {intro}
        </p>
      )}
    </header>
  )
}

function PageHero({
  index,
  label,
  lines,
  intro,
}: {
  index: string
  label: string
  lines: ReactNode[]
  intro?: string
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <span className="page-number" aria-hidden="true">
          <span data-parallax="1">{index}</span>
        </span>
        <p className="eyebrow enter-item" style={cssVars({ "--d": 0 })}>
          <span>{index}</span>
          {label}
        </p>
        <MaskTitle as="h1" lines={lines} mode="enter" />
        {intro && (
          <p className="page-intro enter-item" style={cssVars({ "--d": 4 })}>
            {intro}
          </p>
        )}
      </div>
      <div className="container">
        <Rule />
      </div>
    </section>
  )
}

function PixelComputer({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 30 24"
      fill="currentColor"
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M2 0h26v1H2zM1 1h1v11H1zM28 1h1v11h-1zM1 11h28v1H1zM13 13h4v1h-4zM12 14h6v1h-6zM8 15h14v1H8zM1 18h28v1H1zM1 22h28v1H1zM1 19h1v3H1zM28 19h1v3h-1z" />
      <path
        opacity=".5"
        d="M4 3h8v1H4zM4 5h14v1H4zM4 7h10v1H4zM6 9h6v1H6zM3 20h24v1H3z"
      />
    </svg>
  )
}

interface MemberPhotoProps {
  member: Member
  eager?: boolean
}

function MemberPhoto({ member, eager }: MemberPhotoProps) {
  return (
    <span className="member-photo">
      {member.photo ? (
        <img
          src={member.photo}
          alt={member.fullName}
          width={960}
          height={1280}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
      ) : (
        <span
          className="member-placeholder"
          role="img"
          aria-label={member.fullName}
        >
          <span>{member.initials}</span>
        </span>
      )}
    </span>
  )
}

function layoutFor(index: number) {
  return [
    "is-wide",
    "is-narrow is-offset",
    "is-narrow",
    "is-wide is-offset",
    "is-full",
  ][index % 5]
}

interface ProjectCardProps {
  project: Project
  layout: string
}

function ProjectCard({ project, layout }: ProjectCardProps) {
  const { lang, t, openProject } = useSite()
  const ratio = layout.includes("is-narrow")
    ? "4 / 5"
    : layout.includes("is-full")
      ? "21 / 9"
      : "4 / 3"
  return (
    <button
      type="button"
      className="project-card"
      data-reveal
      data-cursor="view"
      onClick={() => openProject(project.id)}
      aria-label={`${project.name}, ${project.type[lang]}`}
    >
      <span className="project-media" style={cssVars({ "--ratio": ratio })}>
        <span className="project-parallax" data-parallax="1">
          <img
            src={project.image}
            alt=""
            width={1400}
            height={1000}
            loading="lazy"
            decoding="async"
          />
        </span>
        <span className="project-overlay" aria-hidden="true" />
        <span className="project-hover" aria-hidden="true">
          <span className="project-hover-type">{project.type[lang]}</span>
          <span className="project-hover-name">{project.name}</span>
          <span className="project-hover-result">{project.result[lang]}</span>
        </span>
      </span>
      <span className="project-info">
        <span className="project-name">{project.name}</span>
        <span className="project-type">
          {t[CATEGORY_KEY[project.category]]} · {project.year}
        </span>
      </span>
    </button>
  )
}

function Marquee() {
  const { t } = useSite()
  return (
    <section className="marquee" aria-label={t.marqueeLabel}>
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <ul
            className="marquee-group"
            key={group}
            aria-hidden={group === 1 ? true : undefined}
          >
            {TECHNOLOGIES.map((name) => (
              <li className="marquee-item" key={name}>
                {name}
                <i aria-hidden="true" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}

function CtaBand() {
  const { t } = useSite()
  return (
    <section className="section cta-band">
      <div className="container cta-grid">
        <p className="eyebrow" data-reveal>
          <span>→</span>
          {t.ctaLabel}
        </p>
        <MaskTitle
          lines={[t.ctaTitle1, <em key="b">{t.ctaTitle2}</em>]}
          className="display-xl"
        />
        <div className="cta-side" data-reveal>
          <p>{t.ctaBody}</p>
          <Button to="contato">{t.schedule}</Button>
        </div>
      </div>
    </section>
  )
}

function HomePage() {
  const { t } = useSite()
  return (
    <>
      <section className="hero">
        <div className="hero-deco" aria-hidden="true">
          <div className="hero-deco-inner" data-parallax="1">
            <span className="deco-line deco-line-a" />
            <span className="deco-line deco-line-b" />
            <span className="deco-ring" />
            <PixelComputer className="hero-pixel" />
          </div>
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p
              className="availability enter-item"
              style={cssVars({ "--d": 0 })}
            >
              <span className="pulse-dot" aria-hidden="true" />
              {t.available}
            </p>
            <p className="eyebrow enter-item" style={cssVars({ "--d": 1 })}>
              <span>00</span>
              {t.heroEyebrow}
            </p>
            <MaskTitle
              as="h1"
              className="hero-title"
              mode="enter"
              lines={[t.heroL1, t.heroL2, <em key="c">{t.heroL3}</em>]}
            />
          </div>
          <div className="hero-bottom">
            <div>
              <p className="hero-body enter-item" style={cssVars({ "--d": 5 })}>
                {t.heroBody}
              </p>
              <div
                className="hero-actions enter-item"
                style={cssVars({ "--d": 6 })}
              >
                <Button to="contato">{t.schedule}</Button>
                <Button to="portfolio" variant="ghost" icon="arrowUpRight">
                  {t.seeWork}
                </Button>
              </div>
            </div>
            <figure
              className="hero-media enter-item"
              style={cssVars({ "--d": 4 })}
            >
              <span className="hero-media-frame">
                <img
                  src={heroImage}
                  alt={t.heroImageAlt}
                  width={1024}
                  height={572}
                />
              </span>
              <figcaption>
                <span>{t.heroCaption}</span>
                <span>DTT / 2026</span>
              </figcaption>
            </figure>
          </div>
          <dl className="hero-stats" data-stagger>
            {STATS.map((stat) => (
              <div key={stat.labelKey} data-reveal>
                <dt>{t[stat.labelKey]}</dt>
                <dd>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Marquee />

      <section className="section manifesto">
        <div className="container manifesto-grid">
          <p className="eyebrow" data-reveal>
            <span>—</span>
            {t.manifestoLabel}
          </p>
          <div>
            <MaskTitle
              className="display-l"
              lines={[
                t.manifesto1,
                t.manifesto2,
                <em key="c">{t.manifesto3}</em>,
              ]}
            />
            <p className="manifesto-body" data-reveal>
              {t.manifestoBody}
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <SectionHead
            index="—"
            label={t.indexLabel}
            lines={[t.indexTitle1, <em key="b">{t.indexTitle2}</em>]}
          />
          <ol className="page-index" data-stagger>
            {PAGES.filter((page) => page.id !== "inicio").map((page) => (
              <li key={page.id} data-reveal>
                <NavLink to={page.id} className="page-index-link">
                  <span className="pi-num">{page.index}</span>
                  <span className="pi-title">{t[page.labelKey]}</span>
                  <span className="pi-desc">{t[page.descKey]}</span>
                  <Icon name="arrowUpRight" size={24} className="pi-icon" />
                </NavLink>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            index="02"
            label={t.featuredLabel}
            lines={[t.featuredTitle1, <em key="b">{t.featuredTitle2}</em>]}
          />
          <div className="project-grid" data-stagger>
            {PROJECTS.slice(0, 3).map((project, index) => {
              const layout = ["is-wide", "is-narrow is-offset", "is-full"][
                index
              ]
              return (
                <div className={`project-slot ${layout}`} key={project.id}>
                  <ProjectCard project={project} layout={layout} />
                </div>
              )
            })}
          </div>
          <div className="section-foot" data-reveal>
            <Button to="portfolio" variant="ghost" icon="arrowUpRight">
              {t.featuredLink}
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

function ServicesPage() {
  const { t, lang } = useSite()
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]))
  const hoverCapable = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(hover: hover)").matches,
  )
  const toggle = (index: number) =>
    setOpen((current) => {
      const next = new Set(current)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  return (
    <>
      <PageHero
        index="01"
        label={t.navServices}
        lines={[t.servicesTitle1, <em key="b">{t.servicesTitle2}</em>]}
        intro={t.servicesIntro}
      />
      <section className="section section-tight">
        <div className="container">
          <ol className="service-list" data-stagger>
            {SERVICES.map((service, index) => {
              const isOpen = open.has(index)
              return (
                <li
                  key={service.title.en}
                  className={`service-row ${isOpen ? "is-open" : ""}`}
                  data-reveal
                  onMouseEnter={() =>
                    hoverCapable.current &&
                    setOpen((current) => new Set(current).add(index))
                  }
                >
                  <h2 className="service-heading">
                    <button
                      type="button"
                      className="service-head"
                      aria-expanded={isOpen}
                      aria-controls={`service-${index}`}
                      onClick={() => toggle(index)}
                    >
                      <span className="service-num">{pad(index + 1)}</span>
                      <span className="service-title">
                        {service.title[lang]}
                      </span>
                      <span className="service-line">{service.line[lang]}</span>
                      <span className="toggle-icon" aria-hidden="true">
                        <span />
                        <span />
                      </span>
                    </button>
                  </h2>
                  <div
                    className="service-panel"
                    id={`service-${index}`}
                    inert={!isOpen}
                  >
                    <div className="collapse-inner">
                      <div className="service-content">
                        <p className="service-text">{service.text[lang]}</p>
                        <div>
                          <h3 className="meta-label">{t.forWho}</h3>
                          <p className="service-audience">
                            {service.audience[lang]}
                          </p>
                        </div>
                        <div>
                          <h3 className="meta-label">{t.delivers}</h3>
                          <ul className="check-list">
                            {service.deliverables[lang].map((item) => (
                              <li key={item}>
                                <Icon name="check" size={16} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>
      <section className="section business">
        <div className="container business-grid">
          <p className="eyebrow" data-reveal>
            <span>∞</span>
            {t.anyBusinessLabel}
          </p>
          <div>
            <MaskTitle
              className="display-m"
              lines={[
                t.anyBusinessTitle1,
                <em key="b">{t.anyBusinessTitle2}</em>,
              ]}
            />
            <ul className="chips" data-stagger>
              {BUSINESS_TYPES[lang].map((item) => (
                <li className="chip" key={item} data-reveal>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

function PortfolioPage() {
  const { t } = useSite()
  const [filter, setFilter] = useState<Filter>("all")
  const [leaving, setLeaving] = useState<string[]>([])
  const slots = useRef(new Map<string, HTMLElement>())
  const before = useRef(new Map<string, DOMRect>())
  const busy = useRef(false)
  const visible = PROJECTS.filter(
    (project) => filter === "all" || project.category === filter,
  )
  const filters: Array<[Filter, CopyKey]> = [
    ["all", "filterAll"],
    ["sites", "filterSites"],
    ["apps", "filterApps"],
    ["landing", "filterLanding"],
  ]

  const select = (next: Filter) => {
    if (next === filter || busy.current) return
    const outgoing = visible
      .filter((project) => next !== "all" && project.category !== next)
      .map((project) => project.id)
    const commit = () => {
      before.current = new Map()
      slots.current.forEach((element, id) =>
        before.current.set(id, element.getBoundingClientRect()),
      )
      setLeaving([])
      setFilter(next)
      busy.current = false
    }
    if (prefersReducedMotion() || !outgoing.length) {
      commit()
      return
    }
    busy.current = true
    setLeaving(outgoing)
    window.setTimeout(commit, 280)
  }

  useLayoutEffect(() => {
    if (!before.current.size) return
    const reduced = prefersReducedMotion()
    slots.current.forEach((element, id) => {
      if (reduced) return
      const previous = before.current.get(id)
      if (!previous) {
        element.animate(
          [
            { opacity: 0, transform: "scale(0.96)" },
            { opacity: 1, transform: "none" },
          ],
          { duration: 500, delay: 80, easing: EASE_OUT, fill: "backwards" },
        )
        return
      }
      const next = element.getBoundingClientRect()
      const dx = previous.left - next.left
      const dy = previous.top - next.top
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        element.animate(
          [{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "none" }],
          {
            duration: 600,
            easing: EASE_OUT,
          },
        )
      }
    })
    before.current = new Map()
  }, [filter])

  useEffect(() => initReveal(), [filter])

  return (
    <>
      <PageHero
        index="02"
        label={t.navWork}
        lines={[t.workTitle1, <em key="b">{t.workTitle2}</em>]}
        intro={t.workIntro}
      />
      <section className="section section-tight">
        <div className="container">
          <div
            className="filters"
            role="group"
            aria-label={t.filterLabel}
            data-reveal
          >
            {filters.map(([value, key]) => (
              <button
                key={value}
                type="button"
                className="filter"
                aria-pressed={filter === value}
                onClick={() => select(value)}
              >
                {t[key]}
                <sup>
                  {pad(
                    value === "all"
                      ? PROJECTS.length
                      : PROJECTS.filter((project) => project.category === value)
                          .length,
                  )}
                </sup>
              </button>
            ))}
          </div>
          <div className="project-grid" data-stagger aria-live="polite">
            {visible.map((project, index) => {
              const layout = layoutFor(index)
              return (
                <div
                  key={project.id}
                  className={`project-slot ${layout} ${
                    leaving.includes(project.id) ? "is-leaving" : ""
                  }`}
                  ref={(element) => {
                    if (element) slots.current.set(project.id, element)
                    else slots.current.delete(project.id)
                  }}
                >
                  <ProjectCard project={project} layout={layout} />
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

function TeamPage() {
  const { t, lang, openMember } = useSite()
  const [hovered, setHovered] = useState<number | null>(null)
  const listRef = useRef<HTMLOListElement>(null)
  const floatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const list = listRef.current
    const float = floatRef.current
    if (!list || !float || !canUseRichMotion()) return
    let x = 0
    let y = 0
    let currentX = 0
    let currentY = 0
    let frame = 0
    let primed = false
    const loop = () => {
      currentX += (x - currentX) * 0.16
      currentY += (y - currentY) * 0.16
      float.style.transform = `translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, 0)`
      frame =
        Math.abs(x - currentX) + Math.abs(y - currentY) > 0.3
          ? requestAnimationFrame(loop)
          : 0
    }
    const onMove = (event: PointerEvent) => {
      x = event.clientX
      y = event.clientY
      if (!primed) {
        currentX = x
        currentY = y
        primed = true
      }
      if (!frame) frame = requestAnimationFrame(loop)
    }
    const onLeave = () => {
      primed = false
    }
    list.addEventListener("pointermove", onMove, { passive: true })
    list.addEventListener("pointerleave", onLeave)
    return () => {
      cancelAnimationFrame(frame)
      list.removeEventListener("pointermove", onMove)
      list.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  return (
    <>
      <PageHero
        index="03"
        label={t.navTeam}
        lines={[t.teamTitle1, <em key="b">{t.teamTitle2}</em>]}
        intro={t.teamIntro}
      />
      <section className="section section-tight">
        <div className="container">
          <ol className="team-list" ref={listRef} data-stagger>
            {TEAM.map((member, index) => (
              <li key={member.id} data-reveal>
                <button
                  type="button"
                  className="team-row"
                  data-cursor="view"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => openMember(index)}
                >
                  <span className="team-index">{pad(index + 1)}</span>
                  <span className="team-name">{member.name}</span>
                  <span className="team-role">
                    {member.role[lang]}
                    <small>{member.focus[lang]}</small>
                  </span>
                  <Icon name="arrowUpRight" size={26} className="team-arrow" />
                </button>
              </li>
            ))}
          </ol>
          <aside className="team-package" data-reveal>
            <span className="meta-label">{t.teamPackageLabel}</span>
            <p>{t.teamPackage}</p>
          </aside>
        </div>
        <div
          className={`team-float ${hovered !== null ? "is-visible" : ""}`}
          ref={floatRef}
          aria-hidden="true"
        >
          <div className="team-float-inner">
            {TEAM.map((member, index) => (
              <div
                key={member.id}
                className={`team-float-photo ${
                  hovered === index ? "is-current" : ""
                }`}
              >
                <MemberPhoto member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

function ProcessPage() {
  const { t, lang } = useSite()
  return (
    <>
      <PageHero
        index="04"
        label={t.navProcess}
        lines={[t.processTitle1, <em key="b">{t.processTitle2}</em>]}
        intro={t.processIntro}
      />
      <section className="section section-tight">
        <div className="container">
          <div className="timeline">
            <span className="timeline-track" aria-hidden="true" />
            <span className="timeline-progress" aria-hidden="true" />
            <ol>
              {PROCESS.map((step, index) => (
                <li className="timeline-step" key={step.title.en} data-reveal>
                  <span className="timeline-dot" aria-hidden="true" />
                  <span className="timeline-num">{pad(index + 1)}</span>
                  <h2 className="timeline-title">{step.title[lang]}</h2>
                  <div className="timeline-body">
                    <span className="timeline-meta">{step.meta[lang]}</span>
                    <p>{step.text[lang]}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

function Faq() {
  const { lang } = useSite()
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]))
  const toggle = (index: number) =>
    setOpen((current) => {
      const next = new Set(current)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  return (
    <div className="faq-list" data-stagger>
      {FAQS.map((item, index) => {
        const isOpen = open.has(index)
        return (
          <div
            className={`faq-item ${isOpen ? "is-open" : ""}`}
            key={item.q.en}
            data-reveal
          >
            <h3 className="faq-heading">
              <button
                type="button"
                className="faq-trigger"
                id={`faq-q-${index}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a-${index}`}
                onClick={() => toggle(index)}
              >
                <span className="faq-num">{pad(index + 1)}</span>
                <span className="faq-q">{item.q[lang]}</span>
                <span className="toggle-icon" aria-hidden="true">
                  <span />
                  <span />
                </span>
              </button>
            </h3>
            <div
              className="faq-panel"
              id={`faq-a-${index}`}
              role="region"
              aria-labelledby={`faq-q-${index}`}
              inert={!isOpen}
            >
              <div className="collapse-inner">
                <p>{item.a[lang]}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function PaymentPage() {
  const { t } = useSite()
  return (
    <>
      <PageHero
        index="05"
        label={t.navPayment}
        lines={[t.payTitle1, <em key="b">{t.payTitle2}</em>]}
        intro={t.payIntro}
      />
      <section className="section section-tight">
        <div className="container">
          <div className="payment-split" data-stagger>
            <div data-reveal>
              <article className="tilt-card pay-card" data-tilt>
                <span className="meta-label">01 · {t.payStartLabel}</span>
                <strong className="pay-value">
                  50<span>%</span>
                </strong>
                <p>{t.payStartText}</p>
              </article>
            </div>
            <div className="pay-plus" data-reveal aria-hidden="true">
              +
            </div>
            <div data-reveal>
              <article className="tilt-card pay-card" data-tilt>
                <span className="meta-label">02 · {t.payEndLabel}</span>
                <strong className="pay-value">
                  50<span>%</span>
                </strong>
                <p>{t.payEndText}</p>
              </article>
            </div>
          </div>
          <div className="support-grid" data-stagger>
            <div data-reveal>
              <article className="tilt-card support-card" data-tilt>
                <span className="support-num">15</span>
                <div>
                  <span className="meta-label">{t.supportLabel}</span>
                  <h2>{t.supportTitle}</h2>
                  <p>{t.supportText}</p>
                </div>
              </article>
            </div>
            <div data-reveal>
              <article className="tilt-card maintenance-card" data-tilt>
                <h2>{t.maintenanceTitle}</h2>
                <p>{t.maintenanceText}</p>
                <Button to="contato" variant="ghost">
                  {t.schedule}
                </Button>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container faq-grid">
          <SectionHead
            index="?"
            label={t.faqLabel}
            lines={[t.faqTitle1, <em key="b">{t.faqTitle2}</em>]}
          />
          <Faq />
        </div>
      </section>
    </>
  )
}

type FieldKey = "name" | "email" | "phone" | "project" | "message"
type FormValues = Record<FieldKey, string>
type ErrorKey = FieldKey | "consent"
const EMPTY_FORM: FormValues = {
  name: "",
  email: "",
  phone: "",
  project: "",
  message: "",
}
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function Field({
  name,
  label,
  value,
  error,
  shaking,
  onChange,
  type = "text",
  autoComplete,
  kind = "input",
  children,
}: {
  name: FieldKey
  label: string
  value: string
  error?: string
  shaking: boolean
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => void
  type?: string
  autoComplete?: string
  kind?: "input" | "select" | "textarea"
  children?: ReactNode
}) {
  const id = `field-${name}`
  const describedBy = `${id}-error`
  const shared = {
    id,
    name,
    value,
    onChange,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
  }
  return (
    <div
      className={`field ${value ? "is-filled" : ""} ${
        error ? "has-error" : ""
      } ${error && shaking ? "is-shaking" : ""}`}
    >
      <div className="field-control">
        {kind === "textarea" ? (
          <textarea {...shared} rows={4} placeholder=" " />
        ) : kind === "select" ? (
          <>
            <select {...shared}>{children}</select>
            <Icon name="chevron" size={18} className="field-chevron" />
          </>
        ) : (
          <input
            {...shared}
            type={type}
            autoComplete={autoComplete}
            placeholder=" "
          />
        )}
        <label htmlFor={id}>{label}</label>
        <span className="field-line" aria-hidden="true" />
      </div>
      <span className="field-error" id={describedBy} aria-live="polite">
        {error}
      </span>
    </div>
  )
}

function ContactPage() {
  const { t, openLegal } = useSite()
  const [values, setValues] = useState<FormValues>(EMPTY_FORM)
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<ErrorKey, CopyKey>>>({})
  const [shaking, setShaking] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")
  const formRef = useRef<HTMLFormElement>(null)
  const timers = useRef<number[]>([])

  useEffect(
    () => () => timers.current.forEach((timer) => window.clearTimeout(timer)),
    [],
  )

  const update =
    (key: FieldKey) =>
    (
      event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
      const next = event.target.value
      setValues((current) => ({ ...current, [key]: next }))
      setErrors((current) => ({ ...current, [key]: undefined }))
    }

  const validate = () => {
    const next: Partial<Record<ErrorKey, CopyKey>> = {}
    if (!values.name.trim()) next.name = "errName"
    if (!EMAIL_PATTERN.test(values.email.trim())) next.email = "errEmail"
    if (values.phone.replace(/\D/g, "").length < 10) next.phone = "errPhone"
    if (!values.project) next.project = "errProject"
    if (values.message.trim().length < 10) next.message = "errMessage"
    if (!consent) next.consent = "errConsent"
    return next
  }

  const projectLabel: Record<string, CopyKey> = {
    site: "optSite",
    app: "optApp",
    landing: "optLanding",
    other: "optOther",
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === "loading") return
    const next = validate()
    setErrors(next)
    const invalid = Object.keys(next)
    if (invalid.length) {
      setShaking(false)
      requestAnimationFrame(() => setShaking(true))
      timers.current.push(window.setTimeout(() => setShaking(false), 520))
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${invalid[0]}"]`)
        ?.focus()
      return
    }
    const message = [
      t.waGreeting,
      `${t.fName}: ${values.name.trim()}`,
      `${t.fEmail}: ${values.email.trim()}`,
      `${t.fPhone}: ${values.phone.trim()}`,
      `${t.fProject}: ${t[projectLabel[values.project]]}`,
      `${t.fMessage} ${values.message.trim()}`,
    ].join("\n")
    window.open(waLink(message), "_blank", "noopener")
    setStatus("loading")
    timers.current.push(window.setTimeout(() => setStatus("success"), 900))
  }

  const reset = () => {
    setValues(EMPTY_FORM)
    setConsent(false)
    setErrors({})
    setStatus("idle")
  }

  const fieldError = (key: FieldKey) =>
    errors[key] ? t[(errors[key] as CopyKey)] : undefined

  const channels: Array<{
    href: string
    label: string
    value: string
    icon: ReactNode
    external: boolean
  }> = [
    {
      href: waLink(),
      label: t.channelWhatsapp,
      value: CONTACT.whatsappLabel,
      icon: <BrandIcon name="whatsapp" size={18} />,
      external: true,
    },
    {
      href: `mailto:${CONTACT.email}`,
      label: t.channelEmail,
      value: CONTACT.email,
      icon: <Icon name="mail" size={18} />,
      external: false,
    },
    {
      href: CONTACT.instagram,
      label: t.channelInstagram,
      value: CONTACT.instagramLabel,
      icon: <BrandIcon name="instagram" size={18} />,
      external: true,
    },
    {
      href: CONTACT.github,
      label: t.channelGithub,
      value: CONTACT.githubLabel,
      icon: <BrandIcon name="github" size={18} />,
      external: true,
    },
  ]

  return (
    <>
      <PageHero
        index="06"
        label={t.navContact}
        lines={[t.contactTitle1, <em key="b">{t.contactTitle2}</em>]}
        intro={t.contactIntro}
      />
      <section className="section section-tight">
        <div className="container contact-grid">
          <div className="contact-form-wrap" data-reveal>
            {status === "success" ? (
              <div className="form-success" role="status">
                <span className="success-mark">
                  <Icon name="check" size={30} />
                </span>
                <h2>{t.sent}</h2>
                <p>{t.sentText}</p>
                <Button onClick={reset} variant="ghost" icon="arrow">
                  {t.sendAnother}
                </Button>
              </div>
            ) : (
              <form
                className="contact-form"
                ref={formRef}
                onSubmit={submit}
                noValidate
              >
                <div className="field-row">
                  <Field
                    name="name"
                    label={t.fName}
                    value={values.name}
                    onChange={update("name")}
                    error={fieldError("name")}
                    shaking={shaking}
                    autoComplete="name"
                  />
                  <Field
                    name="email"
                    label={t.fEmail}
                    type="email"
                    value={values.email}
                    onChange={update("email")}
                    error={fieldError("email")}
                    shaking={shaking}
                    autoComplete="email"
                  />
                </div>
                <div className="field-row">
                  <Field
                    name="phone"
                    label={t.fPhone}
                    type="tel"
                    value={values.phone}
                    onChange={update("phone")}
                    error={fieldError("phone")}
                    shaking={shaking}
                    autoComplete="tel"
                  />
                  <Field
                    name="project"
                    label={t.fProject}
                    kind="select"
                    value={values.project}
                    onChange={update("project")}
                    error={fieldError("project")}
                    shaking={shaking}
                  >
                    <option value="" disabled hidden />
                    <option value="site">{t.optSite}</option>
                    <option value="app">{t.optApp}</option>
                    <option value="landing">{t.optLanding}</option>
                    <option value="other">{t.optOther}</option>
                  </Field>
                </div>
                <Field
                  name="message"
                  label={t.fMessage}
                  kind="textarea"
                  value={values.message}
                  onChange={update("message")}
                  error={fieldError("message")}
                  shaking={shaking}
                />
                <div
                  className={`consent ${errors.consent ? "has-error" : ""} ${
                    errors.consent && shaking ? "is-shaking" : ""
                  }`}
                >
                  <input
                    id="field-consent"
                    name="consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(event) => {
                      setConsent(event.target.checked)
                      setErrors((current) => ({
                        ...current,
                        consent: undefined,
                      }))
                    }}
                    aria-describedby="field-consent-error"
                    aria-invalid={errors.consent ? true : undefined}
                  />
                  <label htmlFor="field-consent">
                    {t.consent}{" "}
                    <button
                      type="button"
                      className="inline-link"
                      onClick={() => openLegal("privacy")}
                    >
                      {t.privacyLink}
                    </button>
                    .
                  </label>
                  <span
                    className="field-error"
                    id="field-consent-error"
                    aria-live="polite"
                  >
                    {errors.consent ? t[errors.consent] : ""}
                  </span>
                </div>
                <span className="magnetic submit-wrap" data-magnetic>
                  <button
                    type="submit"
                    className={`button button-primary submit-button is-${status}`}
                    aria-busy={status === "loading"}
                  >
                    <span className="button-fill" aria-hidden="true" />
                    <span className="submit-states">
                      <span
                        className={`submit-state ${
                          status === "idle" ? "is-current" : ""
                        }`}
                      >
                        {t.send}
                        <Icon name="arrow" size={18} />
                      </span>
                      <span
                        className={`submit-state ${
                          status === "loading" ? "is-current" : ""
                        }`}
                        aria-hidden={status !== "loading"}
                      >
                        <span className="spinner" aria-hidden="true" />
                        {t.sending}
                      </span>
                    </span>
                  </button>
                </span>
              </form>
            )}
          </div>
          <aside className="contact-aside" data-reveal>
            <div>
              <span className="meta-label">{t.directLabel}</span>
              <Button
                href={waLink(t.waGreeting)}
                external
                variant="accent"
                iconNode={<BrandIcon name="whatsapp" size={18} />}
              >
                {t.directWhatsapp}
              </Button>
              <p className="aside-note">{t.responseTime}</p>
            </div>
            <div>
              <span className="meta-label">{t.channels}</span>
              <ul className="channel-list">
                {channels.map((channel) => (
                  <li key={channel.label}>
                    <a
                      className="channel"
                      href={channel.href}
                      target={channel.external ? "_blank" : undefined}
                      rel={channel.external ? "noreferrer" : undefined}
                    >
                      <span className="channel-icon">{channel.icon}</span>
                      <span className="channel-copy">
                        <small>{channel.label}</small>
                        <strong>{channel.value}</strong>
                      </span>
                      <Icon
                        name="arrowUpRight"
                        size={18}
                        className="channel-arrow"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

function Dialog({
  open,
  onClose,
  labelledBy,
  variant = "modal",
  children,
}: {
  open: boolean
  onClose: () => void
  labelledBy: string
  variant?: "modal" | "wide" | "panel"
  children: ReactNode
}) {
  const [mounted, setMounted] = useState(open)
  const [shown, setShown] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const openerRef = useRef<HTMLElement | null>(null)
  const closeRef = useRef(onClose)
  closeRef.current = onClose

  useEffect(() => {
    if (open) {
      openerRef.current = (document.activeElement as HTMLElement | null)
      setMounted(true)
      let inner = 0
      const outer = requestAnimationFrame(() => {
        inner = requestAnimationFrame(() => setShown(true))
      })
      return () => {
        cancelAnimationFrame(outer)
        cancelAnimationFrame(inner)
      }
    }
    setShown(false)
    const timer = window.setTimeout(
      () => {
        setMounted(false)
        openerRef.current?.focus?.({ preventScroll: true })
      },
      prefersReducedMotion() ? 20 : 620,
    )
    return () => window.clearTimeout(timer)
  }, [open])

  useEffect(() => {
    if (!mounted) return
    lockScroll()
    return () => unlockScroll()
  }, [mounted])

  useEffect(() => {
    if (!shown) return
    const target =
      panelRef.current?.querySelector<HTMLElement>("[data-autofocus]") ??
      panelRef.current?.querySelector<HTMLElement>("button, a[href], input")
    target?.focus({ preventScroll: true })
  }, [shown])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        closeRef.current()
        return
      }
      if (event.key !== "Tab" || !panelRef.current) return
      const items = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      )
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  if (!mounted) return null
  return (
    <div className={`dialog-root is-${variant} ${shown ? "is-shown" : ""}`}>
      <div className="dialog-backdrop" onClick={onClose} aria-hidden="true" />
      <div
        className="dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        ref={panelRef}
        data-native-scroll
      >
        {children}
      </div>
    </div>
  )
}

function TeamDialog({
  index,
  onClose,
  onNavigate,
  onOpenProject,
}: {
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
  onOpenProject: (id: string) => void
}) {
  const { t, lang } = useSite()
  const last = useRef(0)
  if (index !== null) last.current = index
  const current = last.current
  const member = TEAM[current]
  const total = TEAM.length
  const previous = (current - 1 + total) % total
  const next = (current + 1) % total

  useEffect(() => {
    if (index === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") onNavigate(next)
      if (event.key === "ArrowLeft") onNavigate(previous)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [index, next, previous, onNavigate])

  return (
    <Dialog
      open={index !== null}
      onClose={onClose}
      labelledBy="member-name"
      variant="panel"
    >
      <div className="panel-bar">
        <button
          type="button"
          className="panel-back"
          onClick={onClose}
          data-autofocus
        >
          <Icon name="arrowLeft" size={18} />
          {t.back}
        </button>
        <span className="panel-count">
          {pad(current + 1)} / {pad(total)}
        </span>
        <div className="panel-nav">
          <button
            type="button"
            className="round-button"
            onClick={() => onNavigate(previous)}
            aria-label={`${t.prev}: ${TEAM[previous].name}`}
          >
            <Icon name="arrowLeft" size={18} />
          </button>
          <button
            type="button"
            className="round-button"
            onClick={() => onNavigate(next)}
            aria-label={`${t.next}: ${TEAM[next].name}`}
          >
            <Icon name="arrow" size={18} />
          </button>
        </div>
      </div>
      <div className="member-layout" key={member.id}>
        <div className="member-visual member-swap">
          <MemberPhoto member={member} eager />
        </div>
        <div className="member-body">
          <p className="eyebrow member-swap" style={cssVars({ "--d": 1 })}>
            <span>{pad(current + 1)}</span>
            {member.role[lang]}
          </p>
          <MaskTitle
            as="h2"
            id="member-name"
            className="member-name"
            lines={[member.name]}
            mode="enter"
          />
          <section
            className="member-section member-swap"
            style={cssVars({ "--d": 2 })}
          >
            <h3 className="meta-label">{t.inPractice}</h3>
            <p className="member-practice">{member.practice[lang]}</p>
          </section>
          <section
            className="member-section member-swap"
            style={cssVars({ "--d": 3 })}
          >
            <h3 className="meta-label">{t.whatWeDo}</h3>
            <ol className="member-does">
              {member.does[lang].map((item, itemIndex) => (
                <li key={item}>
                  <span>{pad(itemIndex + 1)}</span>
                  {item}
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </Dialog>
  )
}

function ProjectDialog({
  id,
  onClose,
  onContact,
}: {
  id: string | null
  onClose: () => void
  onContact: () => void
}) {
  const { t, lang } = useSite()
  const last = useRef<Project>(PROJECTS[0])
  const found = PROJECTS.find((project) => project.id === id)
  if (found) last.current = found
  const project = last.current
  return (
    <Dialog
      open={Boolean(id)}
      onClose={onClose}
      labelledBy="project-title"
      variant="wide"
    >
      <button
        type="button"
        className="dialog-close"
        onClick={onClose}
        aria-label={t.close}
      >
        <Icon name="close" size={20} />
      </button>
      <div className="project-detail">
        <div className="project-detail-media">
          <img
            src={project.image}
            alt={`${project.name}, ${project.type[lang]}`}
            width={1400}
            height={1000}
          />
        </div>
        <div className="project-detail-body">
          <p className="eyebrow">
            <span>{t[CATEGORY_KEY[project.category]]}</span>
            {project.type[lang]} · {project.year}
          </p>
          <h2 id="project-title" className="project-detail-title">
            {project.name}
          </h2>
          <dl className="project-detail-grid">
            <div>
              <dt className="meta-label">{t.challenge}</dt>
              <dd>{project.challenge[lang]}</dd>
            </div>
            <div>
              <dt className="meta-label">{t.solution}</dt>
              <dd>{project.solution[lang]}</dd>
            </div>
            <div>
              <dt className="meta-label">{t.outcome}</dt>
              <dd>{project.result[lang]}</dd>
            </div>
            <div>
              <dt className="meta-label">{t.stack}</dt>
              <dd>
                <ul className="tag-list">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
          <div className="project-detail-actions">
            {project.url && (
              <Button href={project.url} external variant="ghost">
                {t.visitSite}
              </Button>
            )}
            <Button onClick={onContact}>{t.projectCta}</Button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

function LegalDialog({
  kind,
  onClose,
  onSwitch,
}: {
  kind: LegalKind | null
  onClose: () => void
  onSwitch: (kind: LegalKind) => void
}) {
  const { t, lang } = useSite()
  const last = useRef<LegalKind>("privacy")
  if (kind) last.current = kind
  const current = last.current
  return (
    <Dialog
      open={Boolean(kind)}
      onClose={onClose}
      labelledBy="legal-title"
      variant="wide"
    >
      <button
        type="button"
        className="dialog-close"
        onClick={onClose}
        aria-label={t.close}
      >
        <Icon name="close" size={20} />
      </button>
      <div className="legal">
        <p className="eyebrow">
          <span>{t.legalLabel}</span>
          {t.updated}
        </p>
        <div className="legal-tabs" role="group">
          {(["privacy", "terms"] as LegalKind[]).map((item) => (
            <button
              key={item}
              type="button"
              className="filter"
              aria-pressed={current === item}
              onClick={() => onSwitch(item)}
            >
              {t[item]}
            </button>
          ))}
        </div>
        <h2 id="legal-title" className="legal-title">
          {t[current]}
        </h2>
        <ol className="legal-list" key={`${current}-${lang}`}>
          {LEGAL[lang][current].map((section, index) => (
            <li key={section.title}>
              <span>{pad(index + 1)}</span>
              <div>
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="dpo">
          <span className="meta-label">{t.dpo}</span>
          <p>{t.dpoText}</p>
          <a href={`mailto:${CONTACT.email}`}>
            <Icon name="mail" size={18} />
            {CONTACT.email}
          </a>
        </div>
      </div>
    </Dialog>
  )
}

function CookieDialog({
  open,
  consent,
  onClose,
  onSave,
}: {
  open: boolean
  consent: Consent | null
  onClose: () => void
  onSave: (analytics: boolean, marketing: boolean) => void
}) {
  const { t } = useSite()
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)
  useEffect(() => {
    if (!open) return
    setAnalytics(consent?.analytics ?? false)
    setMarketing(consent?.marketing ?? false)
  }, [open, consent])
  const rows: Array<{
    key: string
    title: string
    text: string
    checked: boolean
    onChange?: (value: boolean) => void
  }> = [
    {
      key: "essential",
      title: t.essential,
      text: t.essentialDesc,
      checked: true,
    },
    {
      key: "analytics",
      title: t.analytics,
      text: t.analyticsDesc,
      checked: analytics,
      onChange: setAnalytics,
    },
    {
      key: "marketing",
      title: t.marketing,
      text: t.marketingDesc,
      checked: marketing,
      onChange: setMarketing,
    },
  ]
  return (
    <Dialog open={open} onClose={onClose} labelledBy="cookie-title">
      <button
        type="button"
        className="dialog-close"
        onClick={onClose}
        aria-label={t.close}
      >
        <Icon name="close" size={20} />
      </button>
      <p className="eyebrow">
        <span>{t.legalLabel}</span>
        Cookies
      </p>
      <h2 id="cookie-title" className="dialog-title">
        {t.cookieSettings}
      </h2>
      <div className="preference-list">
        {rows.map((row) => (
          <label
            className="preference"
            key={row.key}
            htmlFor={`pref-${row.key}`}
          >
            <span>
              <strong>{row.title}</strong>
              <small>
                {row.onChange ? row.text : `${row.text} ${t.alwaysOn}.`}
              </small>
            </span>
            <input
              id={`pref-${row.key}`}
              type="checkbox"
              className="switch"
              checked={row.checked}
              disabled={!row.onChange}
              onChange={(event) => row.onChange?.(event.target.checked)}
            />
          </label>
        ))}
      </div>
      <div className="dialog-actions">
        <Button onClick={() => onSave(analytics, marketing)} icon="check">
          {t.save}
        </Button>
      </div>
    </Dialog>
  )
}

function Footer({ onCookies }: { onCookies: () => void }) {
  const { t, openLegal, navigate } = useSite()
  const contacts: Array<{
    href: string
    label: string
    icon: ReactNode
    external: boolean
  }> = [
    {
      href: waLink(),
      label: CONTACT.whatsappLabel,
      icon: <BrandIcon name="whatsapp" size={16} />,
      external: true,
    },
    {
      href: `mailto:${CONTACT.email}`,
      label: CONTACT.email,
      icon: <Icon name="mail" size={16} />,
      external: false,
    },
    {
      href: CONTACT.instagram,
      label: CONTACT.instagramLabel,
      icon: <BrandIcon name="instagram" size={16} />,
      external: true,
    },
    {
      href: CONTACT.github,
      label: "GitHub",
      icon: <BrandIcon name="github" size={16} />,
      external: true,
    },
  ]
  const socials: SocialLink[] = [
    {
      href: waLink(),
      label: "WhatsApp",
      icon: <BrandIcon name="whatsapp" size={19} />,
    },
    {
      href: `mailto:${CONTACT.email}`,
      label: "E-mail",
      icon: <Icon name="mail" size={19} />,
    },
    {
      href: CONTACT.instagram,
      label: "Instagram",
      icon: <BrandIcon name="instagram" size={19} />,
    },
    {
      href: CONTACT.github,
      label: "GitHub",
      icon: <BrandIcon name="github" size={19} />,
    },
  ]
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <NavLink to="contato" className="footer-cta">
            <span>{t.footerCta}</span>
            <Icon name="arrowUpRight" size={48} />
          </NavLink>
        </div>
        <Rule />
        <div className="footer-cols">
          <div className="footer-brand">
            <LogoHorizontal />
            <p>{t.footerText}</p>
            <ul className="social-row">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    className="social-link"
                    href={social.href}
                    aria-label={social.label}
                    target={
                      social.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel={
                      social.href.startsWith("mailto")
                        ? undefined
                        : "noreferrer"
                    }
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <nav className="footer-col" aria-label={t.footerPages}>
            <h2>{t.footerPages}</h2>
            <ul>
              {PAGES.map((page) => (
                <li key={page.id}>
                  <NavLink to={page.id} className="footer-link">
                    {t[page.labelKey]}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-col">
            <h2>{t.footerContact}</h2>
            <ul>
              {contacts.map((contact) => (
                <li key={contact.label}>
                  <a
                    className="footer-link footer-contact"
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noreferrer" : undefined}
                  >
                    <span className="footer-icon">{contact.icon}</span>
                    {contact.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h2>{t.footerLegal}</h2>
            <ul>
              <li>
                <button
                  type="button"
                  className="footer-link"
                  onClick={() => openLegal("privacy")}
                >
                  {t.privacy}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link"
                  onClick={() => openLegal("terms")}
                >
                  {t.terms}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link"
                  onClick={onCookies}
                >
                  {t.cookiePrefs}
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Dev Team Tech. {t.rights}
          </span>
          <span>{t.location}</span>
          <button
            type="button"
            className="footer-link"
            onClick={() => {
              if (window.scrollY < 10) navigate("inicio")
              else
                window.scrollTo({
                  top: 0,
                  behavior: prefersReducedMotion() ? "auto" : "smooth",
                })
            }}
          >
            {t.backTop} ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

function ThemeToggle({
  onToggle,
  label,
}: {
  onToggle: () => void
  label: string
}) {
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={label}
    >
      <span className="theme-icon icon-sun">
        <Icon name="sun" size={18} />
      </span>
      <span className="theme-icon icon-moon">
        <Icon name="moon" size={18} />
      </span>
    </button>
  )
}

function LangSwitch({
  value,
  onChange,
  label,
}: {
  value: Lang
  onChange: (lang: Lang) => void
  label: string
}) {
  return (
    <div
      className="lang-switch"
      role="group"
      aria-label={label}
      style={cssVars({ "--idx": LANGS.indexOf(value) })}
    >
      <span className="lang-indicator" aria-hidden="true" />
      {LANGS.map((item) => (
        <button
          key={item}
          type="button"
          aria-pressed={value === item}
          onClick={() => onChange(item)}
          lang={item}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

function App() {
  const [lang, setLang] = useState<Lang>(getInitialLang)
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [page, setPage] = useState<PageId>(parsePage)
  const [curtain, setCurtain] = useState<"idle" | "cover" | "reveal">("idle")
  const [intro, setIntro] = useState<"loading" | "leaving" | "done">(() =>
    readStorage("session", "dtt-intro") ? "done" : "loading",
  )
  const [menuOpen, setMenuOpen] = useState(false)
  const [langFading, setLangFading] = useState(false)
  const [projectId, setProjectId] = useState<string | null>(null)
  const [memberIndex, setMemberIndex] = useState<number | null>(null)
  const [legal, setLegal] = useState<LegalKind | null>(null)
  const [cookieDialog, setCookieDialog] = useState(false)
  const [consent, setConsent] = useState<Consent | null>(readConsent)
  const [bannerLeaving, setBannerLeaving] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pageRef = useRef(page)
  const transitioning = useRef(false)
  pageRef.current = page
  const t = copy[lang]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    writeStorage("local", "dtt-theme", theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang
    writeStorage("local", "dtt-language", lang)
  }, [lang])

  useEffect(() => {
    const current = PAGES.find((item) => item.id === page)
    document.title =
      page === "inicio" || !current
        ? `Dev Team Tech — ${copy[lang].heroEyebrow}`
        : `${copy[lang][current.labelKey]} — Dev Team Tech`
  }, [page, lang])

  useEffect(() => {
    if (intro !== "loading") return
    writeStorage("session", "dtt-intro", "1")
    const reduced = prefersReducedMotion()
    const leave = window.setTimeout(
      () => setIntro("leaving"),
      reduced ? 200 : 1000,
    )
    const done = window.setTimeout(() => setIntro("done"), reduced ? 400 : 1500)
    return () => {
      window.clearTimeout(leave)
      window.clearTimeout(done)
    }
  }, [intro])

  useEffect(() => {
    const cleanups = [initSmoothScroll(), initMagnetic(), initTilt()]
    if (progressRef.current)
      cleanups.push(initScrollProgress(progressRef.current))
    if (headerRef.current) cleanups.push(initHeader(headerRef.current))
    if (dotRef.current && ringRef.current)
      cleanups.push(initCursor(dotRef.current, ringRef.current))
    return () => cleanups.forEach((cleanup) => cleanup())
  }, [])

  useEffect(() => {
    const cleanups = [initReveal(), initParallax(), initTimeline()]
    return () => cleanups.forEach((cleanup) => cleanup())
  }, [page])

  useEffect(() => {
    if (!menuOpen) return
    const root = document.documentElement
    root.classList.add("menu-open")
    lockScroll()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => {
      root.classList.remove("menu-open")
      unlockScroll()
      document.removeEventListener("keydown", onKey)
    }
  }, [menuOpen])

  const navigate = useCallback((next: PageId, push = true) => {
    setMenuOpen(false)
    if (transitioning.current) return
    if (next === pageRef.current) {
      window.dispatchEvent(new Event("dtt:scroll-reset"))
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      })
      return
    }
    const swap = () => {
      resetScroll()
      setPage(next)
      if (push) window.history.pushState(null, "", `#/${next}`)
      requestAnimationFrame(() =>
        document.getElementById("main")?.focus({ preventScroll: true }),
      )
    }
    if (prefersReducedMotion()) {
      swap()
      return
    }
    transitioning.current = true
    setCurtain("cover")
    window.setTimeout(() => {
      swap()
      setCurtain("reveal")
      window.setTimeout(() => {
        setCurtain("idle")
        transitioning.current = false
      }, 440)
    }, 420)
  }, [])

  useEffect(() => {
    const onPop = () => {
      const next = parsePage()
      if (next !== pageRef.current) navigate(next, false)
    }
    window.addEventListener("popstate", onPop)
    return () => window.removeEventListener("popstate", onPop)
  }, [navigate])

  const changeLang = (next: Lang) => {
    if (next === lang) return
    if (prefersReducedMotion()) {
      setLang(next)
      return
    }
    setLangFading(true)
    window.setTimeout(() => {
      setLang(next)
      requestAnimationFrame(() => setLangFading(false))
    }, 150)
  }

  const toggleTheme = () => {
    const root = document.documentElement
    root.classList.add("theme-changing")
    setTheme((current) => (current === "dark" ? "light" : "dark"))
    window.setTimeout(() => root.classList.remove("theme-changing"), 450)
  }

  const saveConsent = (analytics: boolean, marketing: boolean) => {
    const value: Consent = {
      essential: true,
      analytics,
      marketing,
      date: new Date().toISOString(),
    }
    writeStorage("local", "dtt-cookies", JSON.stringify(value))
    setCookieDialog(false)
    if (consent) {
      setConsent(value)
      return
    }
    setBannerLeaving(true)
    window.setTimeout(
      () => {
        setConsent(value)
        setBannerLeaving(false)
      },
      prefersReducedMotion() ? 0 : 400,
    )
  }

  const openMember = useCallback((index: number) => setMemberIndex(index), [])
  const openProject = useCallback((id: string) => setProjectId(id), [])
  const openLegal = useCallback((kind: LegalKind) => setLegal(kind), [])
  const closeMember = useCallback(() => setMemberIndex(null), [])
  const closeProject = useCallback(() => setProjectId(null), [])
  const closeLegal = useCallback(() => setLegal(null), [])
  const closeCookies = useCallback(() => setCookieDialog(false), [])

  const context: SiteContextValue = {
    lang,
    t,
    navigate,
    openProject,
    openMember,
    openLegal,
  }

  const pages: Record<PageId, ReactNode> = {
    inicio: <HomePage />,
    servicos: <ServicesPage />,
    portfolio: <PortfolioPage />,
    time: <TeamPage />,
    processo: <ProcessPage />,
    pagamento: <PaymentPage />,
    contato: <ContactPage />,
  }

  return (
    <SiteContext.Provider value={context}>
      <div
        className={`site-shell ${intro !== "loading" ? "is-ready" : ""} ${
          langFading ? "is-lang-fading" : ""
        }`}
      >
        <a
          className="skip-link"
          href="#main"
          onClick={(event) => {
            event.preventDefault()
            document.getElementById("main")?.focus()
          }}
        >
          {t.skip}
        </a>
        <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
        <div className="cursor" aria-hidden="true">
          <div className="cursor-dot" ref={dotRef} />
          <div className="cursor-ring" ref={ringRef}>
            <span className="cursor-ring-inner">
              <span className="cursor-label">{t.cursorView}</span>
            </span>
          </div>
        </div>

        <header className="topbar" ref={headerRef}>
          <div className="topbar-inner">
            <NavLink to="inicio" className="logo-link" label="Dev Team Tech">
              <LogoHorizontal />
            </NavLink>
            <nav className="desktop-nav" aria-label={t.navLabel}>
              {PAGES.filter((item) => item.id !== "inicio").map((item) => (
                <NavLink
                  key={item.id}
                  to={item.id}
                  className={`nav-link ${page === item.id ? "is-active" : ""}`}
                  current={page === item.id}
                >
                  {t[item.labelKey]}
                </NavLink>
              ))}
            </nav>
            <div className="header-actions">
              <LangSwitch
                value={lang}
                onChange={changeLang}
                label={t.language}
              />
              <ThemeToggle onToggle={toggleTheme} label={t.theme} />
              <Button to="contato" small wrapClass="header-cta" icon={null}>
                {t.schedule}
              </Button>
              <button
                type="button"
                className={`menu-button ${menuOpen ? "is-open" : ""}`}
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={menuOpen ? t.menuClose : t.menuOpen}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <span />
                <span />
              </button>
            </div>
          </div>
        </header>

        <div
          id="mobile-menu"
          className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
          inert={!menuOpen}
          aria-hidden={!menuOpen}
        >
          <nav className="mobile-menu-nav" aria-label={t.navLabel}>
            {PAGES.map((item, index) => (
              <NavLink
                key={item.id}
                to={item.id}
                className={`mobile-menu-link ${
                  page === item.id ? "is-active" : ""
                }`}
                current={page === item.id}
                style={cssVars({ "--i": index })}
              >
                <span>{item.index}</span>
                {t[item.labelKey]}
              </NavLink>
            ))}
          </nav>
          <div
            className="mobile-menu-foot"
            style={cssVars({ "--i": PAGES.length })}
          >
            <LangSwitch value={lang} onChange={changeLang} label={t.language} />
            <Button to="contato">{t.schedule}</Button>
          </div>
        </div>

        <main id="main" tabIndex={-1} key={page} className="page">
          {pages[page]}
        </main>

        <Footer onCookies={() => setCookieDialog(true)} />

        <a
          className="whatsapp-fab"
          href={waLink(t.waGreeting)}
          target="_blank"
          rel="noreferrer"
          aria-label={t.directWhatsapp}
        >
          <BrandIcon name="whatsapp" size={26} />
        </a>

        {!consent && intro === "done" && (
          <aside
            className={`cookie-banner ${bannerLeaving ? "is-leaving" : ""}`}
            aria-labelledby="cookie-banner-title"
          >
            <h2 id="cookie-banner-title">{t.cookieTitle}</h2>
            <p>
              {t.cookieBody}{" "}
              <button
                type="button"
                className="inline-link"
                onClick={() => openLegal("privacy")}
              >
                {t.privacyLink}
              </button>
            </p>
            <div className="cookie-actions">
              <button
                type="button"
                className="text-button"
                onClick={() => saveConsent(false, false)}
              >
                {t.essentialOnly}
              </button>
              <button
                type="button"
                className="text-button"
                onClick={() => setCookieDialog(true)}
              >
                {t.customize}
              </button>
              <Button onClick={() => saveConsent(true, true)} small icon={null}>
                {t.acceptAll}
              </Button>
            </div>
          </aside>
        )}

        <TeamDialog
          index={memberIndex}
          onClose={closeMember}
          onNavigate={openMember}
          onOpenProject={(id) => {
            setMemberIndex(null)
            window.setTimeout(() => setProjectId(id), 460)
          }}
        />
        <ProjectDialog
          id={projectId}
          onClose={closeProject}
          onContact={() => {
            setProjectId(null)
            window.setTimeout(() => navigate("contato"), 420)
          }}
        />
        <LegalDialog kind={legal} onClose={closeLegal} onSwitch={setLegal} />
        <CookieDialog
          open={cookieDialog}
          consent={consent}
          onClose={closeCookies}
          onSave={saveConsent}
        />

        <div className={`curtain is-${curtain}`} aria-hidden="true">
          <LogoIcon size={44} />
        </div>

        {intro !== "done" && (
          <div
            className={`preloader ${intro === "leaving" ? "is-leaving" : ""}`}
            aria-hidden="true"
          >
            <div className="preloader-inner">
              <span className="preloader-logo">
                <LogoIcon size={56} />
              </span>
              <span className="preloader-word">DEV TEAM TECH</span>
              <span className="preloader-line">
                <span />
              </span>
            </div>
          </div>
        )}
      </div>
    </SiteContext.Provider>
  )
}

export default App
