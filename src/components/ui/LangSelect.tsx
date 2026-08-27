import { useI18n, type Lang } from "@/hooks/useI18n"

const OPTIONS: { value: Lang; label: string }[] = [
  { value: "pt", label: "🇧🇷 BR" },
  { value: "en", label: "🇺🇸 EN" },
  { value: "es", label: "🇪🇸 ES" },
  { value: "fr", label: "🇫🇷 FR" },
  { value: "de", label: "🇩🇪 DE" },
  { value: "it", label: "🇮🇹 IT" },
  { value: "nl", label: "🇳🇱 NL" },
  { value: "pl", label: "🇵🇱 PL" },
  { value: "ru", label: "🇷🇺 RU" },
  { value: "zh", label: "🇨🇳 ZH" },
  { value: "ja", label: "🇯🇵 JA" },
  { value: "ko", label: "🇰🇷 KO" },
  { value: "ar", label: "🇸🇦 AR" },
  { value: "hi", label: "🇮🇳 HI" },
  { value: "tr", label: "🇹🇷 TR" },
  { value: "sv", label: "🇸🇪 SV" },
]

export default function LangSelect({ id }: { id?: string }) {
  const { lang, setLang } = useI18n()
  return (
    <select
      className="lang-select"
      id={id}
      aria-label="Idioma / Language"
      value={lang}
      onChange={(e) => setLang(e.target.value as Lang)}
    >
      {OPTIONS.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  )
}
