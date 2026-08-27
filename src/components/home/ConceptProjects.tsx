import { useI18n } from "@/hooks/useI18n"
import { useReveal } from "@/hooks/useReveal"

const RES_ICON = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m5 12 5 5L20 7" /></svg>

const WORK = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 12 5 5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z" /></svg>, cKey: "w.1.c", cPt: "Saúde", nKey: "w.1.n", nPt: "Plataforma para Clínica Premium", oKey: "w.1.o", oPt: "Agendamento online e prontuário digital com experiência de marca sofisticada.", tech: ["Next.js", "React", "Tailwind"], rKey: "w.1.r", rPt: "Mais agendamentos e menos no-show." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M12 3v18M7 7l5-4 5 4M6 21V9M18 21V9" /></svg>, cKey: "w.2.c", cPt: "Jurídico", nKey: "w.2.n", nPt: "Landing para Escritório de Advocacia", oKey: "w.2.o", oPt: "Autoridade e captação de casos qualificados via formulário e WhatsApp.", tech: ["HTML", "CSS", "JS"], rKey: "w.2.r", rPt: "Leads mais qualificados e autoridade." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 2v7c0 1.1.9 2 2 2h0c1.1 0 2-.9 2-2V2M5 11v11M15 2a4 4 0 0 0 0 8h2v12" /></svg>, cKey: "w.3.c", cPt: "Gastronomia", nKey: "w.3.n", nPt: "Sistema para Restaurante", oKey: "w.3.o", oPt: "Cardápio digital, reservas e pedidos integrados ao WhatsApp.", tech: ["React", "Node.js", "JS"], rKey: "w.3.r", rPt: "Mais pedidos e operação organizada." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" /></svg>, cKey: "w.4.c", cPt: "Imobiliário", nKey: "w.4.n", nPt: "Plataforma Imobiliária", oKey: "w.4.o", oPt: "Catálogo de imóveis com busca, filtros e contato direto.", tech: ["Next.js", "JS", "Vercel"], rKey: "w.4.r", rPt: "Visitas agendadas direto pelo site." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="m7 14 3-3 3 3 5-6" /></svg>, cKey: "w.5.c", cPt: "Corporativo", nKey: "w.5.n", nPt: "Dashboard Empresarial", oKey: "w.5.o", oPt: "Indicadores de negócio em tempo real, em um só painel.", tech: ["TypeScript", "React", "Tailwind"], rKey: "w.5.r", rPt: "Decisões com dados, não achismo." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2v6a6 6 0 0 0 12 0V2M6 22v-6a6 6 0 0 1 12 0v6" /></svg>, cKey: "w.6.c", cPt: "Fitness", nKey: "w.6.n", nPt: "Site para Academia", oKey: "w.6.o", oPt: "Planos, modalidades e matrícula com prova social forte.", tech: ["HTML", "CSS", "JS"], rKey: "w.6.r", rPt: "Mais matrículas e menos atrito." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 21 9-18 9 18M7 21l5-10 5 10" /></svg>, cKey: "w.7.c", cPt: "Arquitetura", nKey: "w.7.n", nPt: "Plataforma para Arquitetura", oKey: "w.7.o", oPt: "Portfólio visual imersivo que valoriza cada projeto.", tech: ["Next.js", "Tailwind", "Vercel"], rKey: "w.7.r", rPt: "Portfólio que fecha contrato." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2 3 14h9l-1 8 10-12h-9z" /></svg>, cKey: "w.8.c", cPt: "Startup", nKey: "w.8.n", nPt: "Landing Page para Startup", oKey: "w.8.o", oPt: "Validação de produto com copy de conversão e captura de leads.", tech: ["React", "Tailwind", "Vercel"], rKey: "w.8.r", rPt: "Tração e lista de espera crescendo." },
]

export default function ConceptProjects() {
  const { t } = useI18n()
  const grid = useReveal()
  return (
    <>
      <div className={`work-grid stagger ${grid.className}`} ref={grid.ref}>
        {WORK.map((w) => (
          <article className="wcard" key={w.nKey}>
            <div className="wic">{w.icon}</div>
            <span className="cat">{t(w.cKey, w.cPt)}</span>
            <h3>{t(w.nKey, w.nPt)}</h3>
            <p className="obj">{t(w.oKey, w.oPt)}</p>
            <div className="wtech">
              {w.tech.map((tc) => (
                <span key={tc}>{tc}</span>
              ))}
            </div>
            <div className="res">
              {RES_ICON}
              <span>{t(w.rKey, w.rPt)}</span>
            </div>
          </article>
        ))}
      </div>
      <span className="demo-badge">{t("pf.note", "Demonstrações conceituais da nossa capacidade — não representam clientes reais.")}</span>
    </>
  )
}
