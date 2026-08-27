import { useMarkLoaded } from "@/hooks/useMarkLoaded"
import { useLenisScroll } from "@/hooks/useLenisScroll"
import { usePageEnterClass } from "@/hooks/usePageEnter"
import CursorFx from "@/components/layout/CursorFx"
import SimpleHeader from "@/components/layout/SimpleHeader"
import MinimalFooter from "@/components/layout/MinimalFooter"
import WhatsAppLink from "@/components/ui/WhatsAppLink"

export default function NotFoundPage() {
  useMarkLoaded()
  useLenisScroll()
  const mainCls = usePageEnterClass("section err-page")

  return (
    <div>
      <CursorFx />
      <SimpleHeader />
      <main className={mainCls}>
        <span className="sec-orb p o1" aria-hidden="true" />
        <span className="sec-orb c o2" aria-hidden="true" />
        <div className="wrap err-wrap">
          <span className="eyebrow">Erro 404</span>
          <h1 className="err-code"><span className="grad">404</span></h1>
          <h2 className="err-title">Essa página não foi encontrada.</h2>
          <p className="err-text">O link pode estar quebrado ou a página foi movida. Mas calma — o caminho de volta é rápido.</p>
          <div className="err-actions">
            <a className="btn btn-primary" href="index.html">Voltar ao início</a>
            <WhatsAppLink className="btn btn-ghost">Falar no WhatsApp</WhatsAppLink>
          </div>
        </div>
      </main>
      <MinimalFooter />
    </div>
  )
}
