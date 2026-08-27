import type { Theme } from "@/hooks/useTheme"

export default function ThemeToggle({ theme, onToggle, id }: { theme: Theme; onToggle: () => void; id?: string }) {
  return (
    <button className="icon-btn" id={id} aria-label="Alternar tema claro/escuro" title="Tema" onClick={onToggle}>
      <svg
        className="i-moon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        style={{ display: theme === "light" ? "none" : undefined }}
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      <svg
        className="i-sun"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        style={{ display: theme === "light" ? undefined : "none" }}
      >
        <circle cx="12" cy="12" r="4.4" />
        <path d="M12 2.2v2.4M12 19.4v2.4M2.2 12h2.4M19.4 12h2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" />
      </svg>
    </button>
  )
}
