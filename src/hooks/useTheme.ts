import { useCallback, useEffect, useState } from "react"

export type Theme = "dark" | "light"

const THEME_STORE = "tdv-theme"

function readInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark"
  try {
    const stored = localStorage.getItem(THEME_STORE)
    if (stored === "dark" || stored === "light") return stored
  } catch {
    /* localStorage indisponível (modo privado etc.) */
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.add("theme-snap")
  root.setAttribute("data-theme", theme)
  const metaThemeColor = document.querySelector('meta[name="theme-color"]')
  metaThemeColor?.setAttribute("content", theme === "light" ? "#f5f8fd" : "#04060f")
  try {
    localStorage.setItem(THEME_STORE, theme)
  } catch {
    /* ignora */
  }
  window.setTimeout(() => root.classList.remove("theme-snap"), 120)
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(readInitialTheme)

  useEffect(() => {
    applyTheme(theme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    applyTheme(next)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "light" ? "dark" : "light"
      applyTheme(next)
      return next
    })
  }, [])

  return { theme, setTheme, toggleTheme }
}
