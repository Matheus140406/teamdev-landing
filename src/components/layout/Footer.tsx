import { useRef } from "react"
import { useI18n } from "@/hooks/useI18n"
import { useFooterIconPop } from "@/hooks/useFooterIconPop"
import WhatsAppLink from "@/components/ui/WhatsAppLink"

export default function Footer() {
  const { t } = useI18n()
  const ref = useRef<HTMLElement>(null)
  useFooterIconPop(ref)

  return (
    <footer className="footer" ref={ref}>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <a className="brand" href="#topo">
              <span className="dot" /> Dev Team <span className="grad">Tech</span>
            </a>
            <div className="social-row">
              <a className="icon-btn social-ig" href="https://www.instagram.com/devteamtech" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
                <svg viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="igg" x1="0" y1="1" x2="1" y2="0">
                      <stop offset="0" stopColor="#FEDA75" />
                      <stop offset=".35" stopColor="#FA7E1E" />
                      <stop offset=".65" stopColor="#D62976" />
                      <stop offset="1" stopColor="#962FBF" />
                    </linearGradient>
                  </defs>
                  <rect x="2.2" y="2.2" width="19.6" height="19.6" rx="5.5" stroke="url(#igg)" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4.2" stroke="url(#igg)" strokeWidth="2" />
                  <circle cx="17.3" cy="6.7" r="1.2" fill="url(#igg)" />
                </svg>
              </a>
              <WhatsAppLink className="icon-btn social-wa" aria-label="WhatsApp" title="WhatsApp">
                <svg viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.55 15.2L2 22l4.9-1.28A10 10 0 1 0 12 2z" />
                </svg>
              </WhatsAppLink>
              <a className="icon-btn social-mail" href="mailto:devteam2026tech@gmail.com" aria-label="E-mail" title="E-mail">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </a>
              <a className="icon-btn social-gh" href="https://github.com/Matheus140406" target="_blank" rel="noopener noreferrer" aria-label="GitHub — Matheus" title="GitHub — Matheus">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.5A10.5 10.5 0 0 0 1.5 12c0 4.64 3.01 8.57 7.18 9.96.53.1.72-.23.72-.5v-1.76c-2.92.63-3.54-1.41-3.54-1.41-.48-1.21-1.17-1.53-1.17-1.53-.96-.65.07-.64.07-.64 1.06.08 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.07.88.1-.68.37-1.15.67-1.41-2.33-.27-4.78-1.17-4.78-5.18 0-1.15.41-2.08 1.09-2.81-.11-.27-.47-1.34.1-2.79 0 0 .89-.28 2.91 1.07a10.1 10.1 0 0 1 5.3 0c2.02-1.35 2.9-1.07 2.9-1.07.58 1.45.22 2.52.11 2.79.68.73 1.09 1.66 1.09 2.81 0 4.02-2.45 4.9-4.79 5.16.38.33.71.97.71 1.96v2.91c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5z" /></svg>
              </a>
              <a className="icon-btn social-gh" href="https://github.com/Eduardovilanova" target="_blank" rel="noopener noreferrer" aria-label="GitHub — Eduardo" title="GitHub — Eduardo">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.5A10.5 10.5 0 0 0 1.5 12c0 4.64 3.01 8.57 7.18 9.96.53.1.72-.23.72-.5v-1.76c-2.92.63-3.54-1.41-3.54-1.41-.48-1.21-1.17-1.53-1.17-1.53-.96-.65.07-.64.07-.64 1.06.08 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.07.88.1-.68.37-1.15.67-1.41-2.33-.27-4.78-1.17-4.78-5.18 0-1.15.41-2.08 1.09-2.81-.11-.27-.47-1.34.1-2.79 0 0 .89-.28 2.91 1.07a10.1 10.1 0 0 1 5.3 0c2.02-1.35 2.9-1.07 2.9-1.07.58 1.45.22 2.52.11 2.79.68.73 1.09 1.66 1.09 2.81 0 4.02-2.45 4.9-4.79 5.16.38.33.71.97.71 1.96v2.91c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5z" /></svg>
              </a>
            </div>
          </div>
          <div>
            <h3>{t("foot.nav", "Navegação")}</h3>
            <a href="#servicos">{t("nav.services", "Serviços")}</a>
            <a href="#diferenciais">{t("nav.diff", "Diferenciais")}</a>
            <a href="#processo">{t("nav.process", "Processo")}</a>
            <a href="#suporte">{t("sup.eyebrow", "Garantia & Otimização Contínua")}</a>
            <a href="#faq">{t("nav.faq", "FAQ")}</a>
          </div>
          <div>
            <h3>{t("foot.contact", "Contato")}</h3>
            <WhatsAppLink>WhatsApp</WhatsAppLink>
            <a href="mailto:devteam2026tech@gmail.com">devteam2026tech@gmail.com</a>
            <a href="privacidade.html" target="_blank" rel="noopener noreferrer">{t("foot.privacy", "Política de Privacidade")}</a>
            <a href="cookies.html" target="_blank" rel="noopener noreferrer">{t("foot.cookies", "Cookies")}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© <span id="year">{new Date().getFullYear()}</span> Dev Team Tech. <span>{t("foot.rights", "Todos os direitos reservados.")}</span></span>
          <a className="btn btn-ghost" href="privacidade.html" target="_blank" rel="noopener noreferrer">
            Política de Privacidade · LGPD
          </a>
        </div>
      </div>
    </footer>
  )
}
