import { useReveal } from "@/hooks/useReveal"
import { useI18n } from "@/hooks/useI18n"

const TRUST = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5z" /><path d="m9 12 2 2 4-4" /></svg>, key: "sec.t1", pt: "LGPD · Lei 13.709/2018" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>, key: "sec.t2", pt: "Criptografia HTTPS/TLS" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.4 8.4 0 1 1-4.9-7.6" /><path d="m9 11 3 3L22 4" /></svg>, key: "sec.t3", pt: "Consentimento de cookies" },
]

const CARDS = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5z" /><path d="m9 12 2 2 4-4" /></svg>, tKey: "sc.1.t", tPt: "Conformidade com a LGPD", dKey: "sc.1.d", dPt: "Coleta com finalidade clara e base legal — do jeito que a lei pede." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /><path d="m3 3 18 18" /></svg>, tKey: "sc.2.t", tPt: "Privacidade por padrão", dKey: "sc.2.d", dPt: "Coletamos só o necessário e nunca vendemos seus dados." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>, tKey: "sc.3.t", tPt: "Segurança de dados", dKey: "sc.3.d", dPt: "Boas práticas de proteção em cada camada do projeto." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><circle cx="12" cy="16" r="1.5" /><path d="M7 11V8a5 5 0 0 1 9.9-1" /></svg>, tKey: "sc.4.t", tPt: "Criptografia (HTTPS)", dKey: "sc.4.d", dPt: "Conexão segura por padrão e criptografia quando aplicável." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" /></svg>, tKey: "sc.5.t", tPt: "Transparência total", dKey: "sc.5.d", dPt: "Você sabe o que coletamos, por quê e por quanto tempo." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.4 8.4 0 1 1-4.9-7.6" /><path d="m9 11 3 3L22 4" /></svg>, tKey: "sc.6.t", tPt: "Consentimento de cookies", dKey: "sc.6.d", dPt: "Banner com aceitar, rejeitar e personalizar — escolha do usuário." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m8 6-6 6 6 6M16 6l6 6-6 6" /></svg>, tKey: "sc.7.t", tPt: "Boas práticas de dev", dKey: "sc.7.d", dPt: "Código limpo e seguro, pensado para durar e escalar." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5z" /></svg>, tKey: "sc.8.t", tPt: "Confiança que se vê", dKey: "sc.8.d", dPt: "Um site seguro também transmite credibilidade ao seu cliente.", cls: "card feature" },
]

export default function Security() {
  const { t } = useI18n()
  const head = useReveal()
  const grid = useReveal()
  return (
    <section className="section" id="seguranca">
      <span className="sec-orb b o2" aria-hidden="true" />
      <div className="wrap">
        <div className={head.className} ref={head.ref}>
          <span className="eyebrow">{t("sec.eyebrow", "Segurança & conformidade")}</span>
          <h2 className="section-title">{t("sec.title", "Seus dados — e os do seu cliente — tratados com responsabilidade.")}</h2>
          <p className="section-sub">{t("sec.sub", "Privacidade e segurança não são detalhe: são parte de como construímos cada projeto.")}</p>
          <div className="sec-trust reveal" aria-label="Selos de conformidade">
            {TRUST.map((tr) => (
              <span className="trust-pill" key={tr.key}>
                {tr.icon} <span>{t(tr.key, tr.pt)}</span>
              </span>
            ))}
          </div>
        </div>
        <div className={`bento bento-diff stagger ${grid.className}`} ref={grid.ref}>
          {CARDS.map((c) => (
            <article className={c.cls ?? "card"} key={c.tKey}>
              <div className="ic">{c.icon}</div>
              <h3>{t(c.tKey, c.tPt)}</h3>
              <p>{t(c.dKey, c.dPt)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
