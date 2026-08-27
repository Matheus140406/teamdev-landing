import { useRef, useState } from "react"
import { I18nProvider } from "@/hooks/useI18n"
import { useMarkLoaded } from "@/hooks/useMarkLoaded"
import { useLenisScroll } from "@/hooks/useLenisScroll"
import { useMagneticAndTilt } from "@/hooks/useMagneticAndTilt"
import CursorFx from "@/components/layout/CursorFx"
import Header from "@/components/layout/Header"
import MobileDrawer from "@/components/layout/MobileDrawer"
import Footer from "@/components/layout/Footer"
import ScrollProgress from "@/components/layout/ScrollProgress"
import WhatsAppFloat from "@/components/layout/WhatsAppFloat"
import CookieConsent from "@/components/layout/CookieConsent"
import Hero from "@/components/home/Hero"
import CredStrip from "@/components/home/CredStrip"
import Stats from "@/components/home/Stats"
import Problem from "@/components/home/Problem"
import Founders from "@/components/home/Founders"
import Services from "@/components/home/Services"
import Differentiators from "@/components/home/Differentiators"
import Comparison from "@/components/home/Comparison"
import TechMarquee from "@/components/home/TechMarquee"
import Projects from "@/components/home/Projects"
import Testimonials from "@/components/home/Testimonials"
import Process from "@/components/home/Process"
import Support from "@/components/home/Support"
import Faq from "@/components/home/Faq"
import Security from "@/components/home/Security"
import ContactForm from "@/components/home/ContactForm"

function HomeContent() {
  useMarkLoaded()
  useLenisScroll()
  const rootRef = useRef<HTMLDivElement>(null)
  useMagneticAndTilt(rootRef)
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div ref={rootRef}>
      <a className="skip-link" href="#topo">Pular para o conteúdo</a>
      <CursorFx />
      <ScrollProgress />
      <div className="tech-grid-bg" aria-hidden="true" />

      <Header onBurgerClick={() => setDrawerOpen(true)} />

      <main id="topo">
        <Hero />
        <CredStrip />
        <Stats />
        <Problem />
        <hr className="glow-line wrap" aria-hidden="true" />
        <Founders />
        <hr className="glow-line wrap" aria-hidden="true" />
        <Services />
        <Differentiators />
        <Comparison />
        <TechMarquee />
        <Projects />
        <Testimonials />
        <Process />
        <Support />
        <Faq />
        <hr className="glow-line wrap" aria-hidden="true" />
        <Security />
        <ContactForm />
      </main>

      <Footer />
      <WhatsAppFloat />
      <CookieConsent />
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  )
}

export default function HomePage() {
  return (
    <I18nProvider>
      <HomeContent />
    </I18nProvider>
  )
}
