import { useMarkLoaded } from "@/hooks/useMarkLoaded"
import { useLenisScroll } from "@/hooks/useLenisScroll"
import { usePageEnterClass } from "@/hooks/usePageEnter"
import CursorFx from "@/components/layout/CursorFx"
import SimpleHeader from "@/components/layout/SimpleHeader"
import MinimalFooter from "@/components/layout/MinimalFooter"

export default function CookiesPage() {
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
          <h1>Política de Cookies</h1>
          <p className="upd">Última atualização: 2026</p>
          <p>Usamos cookies para melhorar sua experiência e entender como o site é utilizado. Você controla o que aceita pelo banner de cookies, e pode mudar a escolha a qualquer momento.</p>
          <h2>O que são cookies</h2>
          <p>São pequenos arquivos guardados no seu navegador que ajudam o site a funcionar e a medir o uso de forma anônima.</p>
          <h2>Categorias que usamos</h2>
          <ul>
            <li><b>Essenciais</b> — necessários para o site funcionar (não podem ser desativados).</li>
            <li><b>Análise</b> — métricas de uso anônimas, para melhorar o site.</li>
            <li><b>Marketing</b> — remarketing e campanhas (só com o seu consentimento).</li>
          </ul>
          <h2>Como gerenciar</h2>
          <p>
            No primeiro acesso, o banner permite <b>Aceitar</b>, <b>Rejeitar</b> ou <b>Personalizar</b> por categoria. Você também pode
            apagar os cookies nas configurações do seu navegador.
          </p>
          <h2>Mais informações</h2>
          <div className="card">
            Dúvidas sobre dados pessoais? Veja a <a href="privacidade.html">Política de Privacidade</a> ou escreva para{" "}
            <a href="mailto:devteam2026tech@gmail.com">devteam2026tech@gmail.com</a>.
          </div>
        </div>
      </main>
      <MinimalFooter />
    </div>
  )
}
