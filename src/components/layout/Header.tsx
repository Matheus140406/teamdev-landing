import { useEffect, useState } from "react"
import { useTheme } from "@/hooks/useTheme"
import { useI18n } from "@/hooks/useI18n"
import ThemeToggle from "@/components/ui/ThemeToggle"
import LangSelect from "@/components/ui/LangSelect"
import WhatsAppLink from "@/components/ui/WhatsAppLink"
import { LogoIcon } from "@/components/layout/Logo"

const NAV_LINKS: { href: string; key: string; pt: string }[] = [
  { href: "#servicos", key: "nav.services", pt: "Serviços" },
  { href: "#diferenciais", key: "nav.diff", pt: "Diferenciais" },
  { href: "portfolio.html", key: "nav.portfolio", pt: "Portfólio" },
  { href: "#fundadores", key: "nav.about", pt: "Quem somos" },
  { href: "#processo", key: "nav.process", pt: "Processo" },
  { href: "#faq", key: "nav.faq", pt: "FAQ" },
]

export default function Header({ onBurgerClick }: { onBurgerClick: () => void }) {
  const { theme, toggleTheme } = useTheme()
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled((window.scrollY || 0) > 10)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`} id="header">
      <div className="wrap nav">
        <a className="brand" href="#topo">
          <LogoIcon size={28} variant="light" /> Dev Team <span className="grad">Tech</span>
        </a>
        <nav className="nav-links" aria-label="Navegação principal">
          {NAV_LINKS.map((l) => (
            <a key={l.key} href={l.href}>
              {t(l.key, l.pt)}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={toggleTheme} id="themeBtn" />
          <LangSelect id="langSelect" />
          <WhatsAppLink className="btn btn-primary nav-cta">{t("nav.cta", "Falar no WhatsApp")}</WhatsAppLink>
          <button className="nav-burger" id="burger" aria-label="Abrir menu" onClick={onBurgerClick}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
