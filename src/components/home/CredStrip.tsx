import { useReveal } from "@/hooks/useReveal"
import { useI18n } from "@/hooks/useI18n"

const ITEMS: { key: string; pt: string; icon: React.ReactNode }[] = [
  {
    key: "cred.1",
    pt: "Sites Responsivos",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 21h8" /></svg>,
  },
  {
    key: "cred.2",
    pt: "Alta Performance",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2 3 14h9l-1 8 10-12h-9z" /></svg>,
  },
  {
    key: "cred.3",
    pt: "Entrega Ágil",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v6l4 2" /><circle cx="12" cy="13" r="8" /></svg>,
  },
  {
    key: "cred.4",
    pt: "SEO Otimizado",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>,
  },
  {
    key: "cred.5",
    pt: "Design Premium",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3 3 7l9 4 9-4z" /><path d="M3 12l9 4 9-4M3 17l9 4 9-4" /></svg>,
  },
  {
    key: "cred.6",
    pt: "Suporte Pós-Entrega",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 1 1 7.6-12.3" /><path d="m9 11 3 3L22 4" /></svg>,
  },
]

export default function CredStrip() {
  const { t } = useI18n()
  const { ref, className } = useReveal()
  return (
    <section className="cred">
      <div className={`wrap cred-row stagger ${className}`} ref={ref}>
        {ITEMS.map((it) => (
          <div className="cred-item" key={it.key}>
            {it.icon} <span>{t(it.key, it.pt)}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
