import { useEffect } from "react"
import { useTheme } from "@/hooks/useTheme"
import { useI18n } from "@/hooks/useI18n"
import ThemeToggle from "@/components/ui/ThemeToggle"
import LangSelect from "@/components/ui/LangSelect"
import WhatsAppLink from "@/components/ui/WhatsAppLink"

const NAV_LINKS: { href: string; key: string; pt: string }[] = [
  { href: "#servicos", key: "nav.services", pt: "Serviços" },
  { href: "#diferenciais", key: "nav.diff", pt: "Diferenciais" },
  { href: "portfolio.html", key: "nav.portfolio", pt: "Portfólio" },
  { href: "#fundadores", key: "nav.about", pt: "Quem somos" },
  { href: "#processo", key: "nav.process", pt: "Processo" },
  { href: "#faq", key: "nav.faq", pt: "FAQ" },
]

export default function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { theme, toggleTheme } = useTheme()
  const { t } = useI18n()

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onEsc)
    return () => document.removeEventListener("keydown", onEsc)
  }, [onClose])

  return (
    <>
      <div
        className={`drawer-backdrop${open ? " open" : ""}`}
        id="drawerBackdrop"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className={`drawer${open ? " open" : ""}`} id="drawer" aria-hidden={!open}>
        <div className="drawer-head">
          <ThemeToggle theme={theme} onToggle={toggleTheme} id="drawerThemeBtn" />
          <LangSelect id="langSelectDrawer" />
          <button id="drawerClose" className="icon-btn" aria-label="Fechar menu" onClick={onClose}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        {NAV_LINKS.map((l) => (
          <a key={l.key} className="dl" href={l.href} onClick={onClose}>
            {t(l.key, l.pt)}
          </a>
        ))}
        <WhatsAppLink className="btn btn-primary drawer-cta" onClick={onClose}>
          {t("nav.cta", "Falar no WhatsApp")}
        </WhatsAppLink>
      </aside>
    </>
  )
}
