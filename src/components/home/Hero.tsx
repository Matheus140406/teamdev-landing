import { useRef } from "react"
import { useI18n } from "@/hooks/useI18n"
import { useHeroParticles, useHeroParallax, useDraggableMock } from "@/hooks/useHeroFx"
import WhatsAppLink from "@/components/ui/WhatsAppLink"
import PixelPC from "@/components/home/PixelPC"

export default function Hero() {
  const { t } = useI18n()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)
  const mockRef = useRef<HTMLDivElement>(null)

  useHeroParticles(canvasRef)
  useHeroParallax(sceneRef, mockRef)
  useDraggableMock(mockRef)

  return (
    <section className="section hero">
      <canvas className="hero-canvas" id="heroCanvas" ref={canvasRef} aria-hidden="true" />
      <span className="float-shape s1" aria-hidden="true" />
      <span className="float-shape s2" aria-hidden="true" />
      <span className="float-shape s3" aria-hidden="true" />
      <div className="px-scene" id="pxScene" ref={sceneRef} aria-hidden="true">
        <div className="px-layer px-stars" data-depth="0.1" />
        <div className="px-layer px-grid" data-depth="0.25" />
        <div className="px-layer px-blob b1" data-depth="0.5" />
        <div className="px-layer px-blob b2" data-depth="0.4" />
        <svg className="px-layer px-rings" data-depth="0.6" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="70" stroke="#4f8bff" strokeOpacity="0.5" />
          <circle cx="200" cy="200" r="120" stroke="#38bdf8" strokeOpacity="0.3" />
          <circle cx="200" cy="200" r="170" stroke="#4f8bff" strokeOpacity="0.18" />
          <circle cx="270" cy="200" r="5" fill="#38bdf8" />
          <circle cx="80" cy="200" r="4" fill="#4f8bff" />
          <circle cx="200" cy="30" r="4" fill="#4f8bff" />
        </svg>
      </div>
      <div className="wrap hero-grid">
        <div>
          <span className="hero-badge reveal">
            <span className="pulse" /> <span>{t("hero.badge", "Disponível para novos projetos")}</span>
          </span>
          <h1 className="reveal">
            <span>{t("hero.h1a", "Sua presença digital virando uma ")}</span>
            <span className="grad">{t("hero.h1b", "máquina de gerar clientes")}</span>.
          </h1>
          <p className="hero-sub reveal">
            {t(
              "hero.sub",
              "Sites e sistemas com design que parece ter custado 5x mais — entregues com prazo definido e transparente, e com suporte real depois do ar.",
            )}
          </p>
          <div className="hero-cta reveal">
            <WhatsAppLink className="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.2-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.3s1 2.7 1.2 2.9c.1.2 2 3.1 5 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3M12 21.5h0a9.4 9.4 0 0 1-4.8-1.3l-.3-.2-3.6.9 1-3.5-.2-.4A9.5 9.5 0 1 1 12 21.5m0-20.9A11.4 11.4 0 0 0 2.1 17.6L.6 23.4l5.9-1.5A11.4 11.4 0 1 0 12 .6" />
              </svg>
              {t("hero.cta1", "Falar no WhatsApp agora")}
            </WhatsAppLink>
            <a className="btn btn-ghost" href="#servicos">
              {t("hero.cta2", "Ver serviços")}
            </a>
          </div>
          <div className="hero-proof reveal">
            <span className="stars">★★★★★</span> <span>{t("hero.proof", "Estratégia · Performance · Suporte pós-entrega")}</span>
          </div>
        </div>
        <div className="hero-visual reveal">
          <div className="mock" id="heroMock" ref={mockRef}>
            <div className="mock-bar">
              <i /><i /><i /><span>devteamtech.com.br</span>
            </div>
            <div className="mock-body">
              <div className="mock-row">
                <div className="mock-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2 3 14h9l-1 8 10-12h-9z" /></svg>
                </div>
                <div>
                  <div className="mock-line" />
                  <div className="mock-line short" style={{ marginTop: 8 }} />
                </div>
              </div>
              <div className="mock-row">
                <div className="mock-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="m7 14 3-3 3 3 5-6" /></svg>
                </div>
                <div>
                  <div className="mock-line" />
                  <div className="mock-line short" style={{ marginTop: 8 }} />
                </div>
              </div>
              <div className="mock-cta">{t("mock.cta", "Falar no WhatsApp")}</div>
            </div>
            <div className="mock-float">
              <span className="dotok" /> <span>{t("mock.float", "Novo lead recebido")}</span>
            </div>
          </div>
          <PixelPC size={0.85} className="pixel-pc-hero" />
        </div>
      </div>
    </section>
  )
}
