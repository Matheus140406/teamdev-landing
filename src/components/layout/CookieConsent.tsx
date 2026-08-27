import { useEffect, useState } from "react"
import { useI18n } from "@/hooks/useI18n"
import HtmlText from "@/components/ui/HtmlText"

const CONSENT_KEY = "tdv-consent"
const PREFS_KEY = "tdv-consent-prefs"

export default function CookieConsent() {
  const { t } = useI18n()
  const [visible, setVisible] = useState(false)
  const [customizing, setCustomizing] = useState(false)
  const [analytics, setAnalytics] = useState(true)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    let hasChoice = false
    try {
      hasChoice = !!localStorage.getItem(CONSENT_KEY)
    } catch {
      /* ignora */
    }
    if (!hasChoice) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  function choose(value: "accept" | "reject") {
    try {
      localStorage.setItem(CONSENT_KEY, value)
    } catch {
      /* ignora */
    }
    setVisible(false)
  }

  function save() {
    try {
      localStorage.setItem(CONSENT_KEY, "custom")
      localStorage.setItem(PREFS_KEY, JSON.stringify({ essential: true, analytics, marketing }))
    } catch {
      /* ignora */
    }
    setVisible(false)
  }

  return (
    <div className={`cookie${visible ? " show" : ""}`} id="cookie" role="dialog" aria-label="Aviso de cookies">
      <HtmlText
        as="p"
        html={t(
          "ck.text",
          'Usamos cookies para melhorar sua experiência e medir o uso do site. Ao continuar, você concorda com a nossa <a href="privacidade.html" target="_blank" rel="noopener noreferrer">Política de Privacidade</a>.',
        )}
      />
      <div className={`ck-prefs${customizing ? " show" : ""}`} id="ckPrefs">
        <div className="ck-opt">
          <span>
            {t("ck.cat1", "Essenciais")} <small>Necessários para o site funcionar</small>
          </span>
          <label className="switch">
            <input type="checkbox" checked disabled />
            <span className="sl" />
          </label>
        </div>
        <div className="ck-opt">
          <span>
            {t("ck.cat2", "Análise")} <small>Métricas de uso (anônimas)</small>
          </span>
          <label className="switch">
            <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
            <span className="sl" />
          </label>
        </div>
        <div className="ck-opt">
          <span>
            {t("ck.cat3", "Marketing")} <small>Remarketing e campanhas</small>
          </span>
          <label className="switch">
            <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
            <span className="sl" />
          </label>
        </div>
      </div>
      <div className="cookie-actions">
        <button className="btn btn-primary" onClick={() => choose("accept")}>{t("ck.accept", "Aceitar")}</button>
        <button className="btn btn-ghost" onClick={() => choose("reject")}>{t("ck.reject", "Rejeitar")}</button>
        <button className="btn btn-ghost" onClick={() => setCustomizing((s) => !s)}>{t("ck.custom", "Personalizar")}</button>
        {customizing && (
          <button className="btn btn-ghost" onClick={save}>{t("ck.save", "Salvar preferências")}</button>
        )}
      </div>
    </div>
  )
}
