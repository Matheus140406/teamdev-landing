import { useTheme } from "@/hooks/useTheme"
import ThemeToggle from "@/components/ui/ThemeToggle"
import WhatsAppLink from "@/components/ui/WhatsAppLink"

export default function SimpleHeader({ waMessage }: { waMessage?: string }) {
  const { theme, toggleTheme } = useTheme()
  return (
    <header className="header scrolled" id="header">
      <div className="wrap nav">
        <a className="brand" href="index.html">
          <span className="dot" /> Dev Team <span className="grad">Tech</span>
        </a>
        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={toggleTheme} id="themeBtn" />
          <WhatsAppLink className="btn btn-primary nav-cta" message={waMessage}>
            WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </header>
  )
}
