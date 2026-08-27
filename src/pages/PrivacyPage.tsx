import { useMarkLoaded } from "@/hooks/useMarkLoaded"
import { useLenisScroll } from "@/hooks/useLenisScroll"
import { usePageEnterClass } from "@/hooks/usePageEnter"
import CursorFx from "@/components/layout/CursorFx"
import SimpleHeader from "@/components/layout/SimpleHeader"
import MinimalFooter from "@/components/layout/MinimalFooter"

export default function PrivacyPage() {
  useMarkLoaded()
  useLenisScroll()
  const mainCls = usePageEnterClass("section legal")

  return (
    <div>
      <CursorFx />
      <SimpleHeader />
      <main className={mainCls}>
        <div className="wrap">
          <a className="back-link" href="index.html">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg> Voltar ao site
          </a>
          <h1>Política de Privacidade</h1>
          <p className="upd">Última atualização: 2026</p>
          <p>Esta política descreve como a Dev Team Tech coleta e trata seus dados, em conformidade com a LGPD (Lei nº 13.709/2018).</p>
          <h2>1. Quais dados coletamos</h2>
          <p>
            Coletamos apenas o <b>nome</b> e o <b>número de WhatsApp</b> informados nos nossos formulários e canais de contato. Também
            podemos coletar dados de navegação anônimos via cookies (veja a <a href="cookies.html">Política de Cookies</a>).
          </p>
          <h2>2. Para que usamos</h2>
          <p>
            Os dados têm uma finalidade única: <b>entrar em contato sobre o seu projeto</b>. Não vendemos nem compartilhamos seus
            dados com terceiros para fins de marketing.
          </p>
          <h2>3. Base legal</h2>
          <p>O tratamento se baseia no seu <b>consentimento</b> e no <b>legítimo interesse</b> de responder à sua solicitação de contato.</p>
          <h2>4. Seus direitos</h2>
          <p>A qualquer momento você pode solicitar acesso, correção, portabilidade ou exclusão dos seus dados, além de revogar o consentimento.</p>
          <h2>5. Encarregado de Dados (DPO) e contato do responsável</h2>
          <p>
            Nos termos do art. 41 da LGPD, a Dev Team Tech, na qualidade de controladora, designa o canal abaixo como ponto de contato
            do Encarregado de Proteção de Dados (DPO) para tratar de solicitações de titulares e da Autoridade Nacional de Proteção de
            Dados (ANPD).
          </p>
          <div className="card">
            Para exercer seus direitos ou tirar dúvidas sobre privacidade, escreva para{" "}
            <a href="mailto:devteam2026tech@gmail.com">devteam2026tech@gmail.com</a>.
          </div>
          <p style={{ marginTop: "var(--s-3)", color: "var(--ink-dim)", fontSize: 13 }}>
            Documento modelo — recomendamos revisão por apoio jurídico antes do uso definitivo.
          </p>
        </div>
      </main>
      <MinimalFooter />
    </div>
  )
}
