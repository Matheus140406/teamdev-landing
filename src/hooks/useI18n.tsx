import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react"

export const SUPPORTED_LANGS = [
  "pt", "en", "es", "fr", "de", "it", "nl", "pl", "ru", "zh", "ja", "ko", "ar", "hi", "tr", "sv",
] as const
export type Lang = (typeof SUPPORTED_LANGS)[number]

const LANG_STORE = "tdv-lang"
type Dict = Record<string, string>

interface I18nContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  /** Retorna a tradução de `key` no idioma atual, ou `fallbackPt` (o texto em português) se não houver tradução carregada/definida. */
  t: (key: string, fallbackPt: string) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

function readInitialLang(): Lang {
  if (typeof window === "undefined") return "pt"
  try {
    const stored = localStorage.getItem(LANG_STORE)
    if (stored && (SUPPORTED_LANGS as readonly string[]).includes(stored)) return stored as Lang
  } catch {
    /* ignora */
  }
  return "pt"
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang)
  const dictsRef = useRef<Partial<Record<Lang, Dict>>>({})
  const [, forceRender] = useState(0)

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : lang)
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr")
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(LANG_STORE, next)
    } catch {
      /* ignora */
    }
    if (next !== "pt" && !dictsRef.current[next]) {
      fetch(`/assets/i18n/${next}.json`)
        .then((r) => r.json())
        .then((d: Dict) => {
          dictsRef.current[next] = d
          forceRender((n) => n + 1)
        })
        .catch(() => {
          /* mantém fallback PT se o dicionário não carregar */
        })
    }
  }, [])

  useEffect(() => {
    if (lang !== "pt") setLang(lang)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const t = useCallback(
    (key: string, fallbackPt: string) => {
      if (lang === "pt") return fallbackPt
      const dict = dictsRef.current[lang]
      return dict?.[key] ?? fallbackPt
    },
    [lang],
  )

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n precisa estar dentro de <I18nProvider>")
  return ctx
}
