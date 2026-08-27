import { useState } from "react"
import { useReveal } from "@/hooks/useReveal"
import { useI18n } from "@/hooks/useI18n"
import { waLink } from "@/lib/whatsapp"
import WhatsAppLink from "@/components/ui/WhatsAppLink"

function digitsOnly(s: string) {
  return (s || "").replace(/\D/g, "")
}

export default function ContactForm() {
  const { t } = useI18n()
  const { ref, className } = useReveal()
  const [nome, setNome] = useState("")
  const [whats, setWhats] = useState("")
  const [nomeInvalid, setNomeInvalid] = useState(false)
  const [whatsInvalid, setWhatsInvalid] = useState(false)
  const [msg, setMsg] = useState("")
  const [ok, setOk] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setNomeInvalid(false)
    setWhatsInvalid(false)
    setOk(false)

    if (!nome.trim()) {
      setNomeInvalid(true)
      setMsg(t("err.nome", "Como prefere que a gente te chame?"))
      return
    }
    const d = digitsOnly(whats)
    if (d.length < 10 || d.length > 11) {
      setWhatsInvalid(true)
      setMsg(t("err.whats", "Esse número parece incompleto — confere pra mim?"))
      return
    }
    setMsg("")
    setOk(true)
    window.open(
      waLink(`Olá! Sou ${nome.trim().slice(0, 80)} e quero falar com a Dev Team Tech sobre um projeto.`),
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <section className="section" id="contato">
      <span className="sec-orb p o1" aria-hidden="true" />
      <span className="sec-orb c o2" aria-hidden="true" />
      <div className="wrap">
        <div className={`final ${className}`} ref={ref}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>{t("final.eyebrow", "Vamos começar")}</span>
          <h2>
            <span>{t("final.h2a", "Seu próximo cliente pode estar te procurando ")}</span>
            <span className="grad">{t("final.h2b", "agora")}</span>.
          </h2>
          <p>{t("final.p", "Deixe seu nome e WhatsApp — a gente te chama para entender seu projeto. Sem compromisso.")}</p>
          <form className="final-form" id="leadForm" noValidate onSubmit={onSubmit}>
            <div className="field">
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder={t("ph.nome", "Seu nome")}
                autoComplete="name"
                required
                className={nomeInvalid ? "invalid" : ""}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="field">
              <input
                type="tel"
                id="whats"
                name="whats"
                placeholder={t("ph.whats", "Seu WhatsApp com DDD")}
                autoComplete="tel"
                inputMode="tel"
                required
                className={whatsInvalid ? "invalid" : ""}
                value={whats}
                onChange={(e) => setWhats(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              {t("final.btn", "Quero meu Site")}
            </button>
          </form>
          <div className="field-msg" id="formMsg" aria-live="polite">{msg}</div>
          {ok && <p className="form-ok">{t("ok.msg", "Recebemos sua mensagem — já estamos te respondendo no WhatsApp.")}</p>}
          <p className="final-alt">
            <span>{t("final.alt", "Prefere já chamar no WhatsApp?")}</span>{" "}
            <WhatsAppLink>{t("final.altlink", "Falar agora →")}</WhatsAppLink>
          </p>
          <p className="final-alt" style={{ fontSize: 12 }}>
            {t("final.lgpd", "Ao enviar, você concorda que a Dev Team Tech use seus dados apenas para entrar em contato sobre seu projeto.")}
          </p>
        </div>
      </div>
    </section>
  )
}
