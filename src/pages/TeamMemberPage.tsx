import { useRef } from "react"
import { useMarkLoaded } from "@/hooks/useMarkLoaded"
import { useLenisScroll } from "@/hooks/useLenisScroll"
import { useMagneticAndTilt } from "@/hooks/useMagneticAndTilt"
import { usePageEnterClass } from "@/hooks/usePageEnter"
import CursorFx from "@/components/layout/CursorFx"
import SimpleHeader from "@/components/layout/SimpleHeader"
import WhatsAppFloat from "@/components/layout/WhatsAppFloat"
import WhatsAppLink from "@/components/ui/WhatsAppLink"
import { TEAM, type TeamMember } from "@/data/team"
import { waLink } from "@/lib/whatsapp"

// Ordem original: História, Experiência, Especialidades (renderizado à parte), Curiosidades, Valores.
const TEXT_BLOCKS_BEFORE_ESPECIALIDADES: { key: keyof TeamMember; label: string; icon: React.ReactNode }[] = [
  { key: "historia", label: "História", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" /></svg> },
  { key: "experiencia", label: "Experiência", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg> },
]
const TEXT_BLOCKS_AFTER_ESPECIALIDADES: { key: keyof TeamMember; label: string; icon: React.ReactNode }[] = [
  { key: "curiosidades", label: "Curiosidades", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" /></svg> },
  { key: "valores", label: "Valores", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5z" /></svg> },
]

export default function TeamMemberPage({ slug }: { slug: TeamMember["slug"] }) {
  const member = TEAM[slug]
  useMarkLoaded()
  useLenisScroll()
  const rootRef = useRef<HTMLDivElement>(null)
  useMagneticAndTilt(rootRef)
  const pageEnterCls = usePageEnterClass("section member")

  const falarComigoHref =
    member.falarComigo.mode === "shared"
      ? waLink(member.waMessage)
      : `https://wa.me/${member.falarComigo.number}?text=${encodeURIComponent(member.falarComigo.message)}`

  return (
    <div ref={rootRef}>
      <CursorFx />
      <SimpleHeader waMessage={member.waMessage} />

      <main className={pageEnterCls} id="topo">
        <div className="wrap">
          <a className="back-link" href="index.html#fundadores">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg> Voltar para a equipe
          </a>
          <div className="member-grid">
            <div className="member-photo">
              <img src={member.photo} alt={member.name} />
            </div>
            <div>
              <h1>{member.name}</h1>
              <div className="role">{member.role}</div>

              {TEXT_BLOCKS_BEFORE_ESPECIALIDADES.map((b) => (
                <div className="block" key={String(b.key)}>
                  <h2>{b.icon} {b.label}</h2>
                  <p>{member[b.key] as string}</p>
                </div>
              ))}

              <div className="block">
                <h2>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m13 2-3 7h6l-3 7" /></svg> Especialidades
                </h2>
                <div className="pills">
                  {member.especialidades.map((esp) => (
                    <span key={esp}>{esp}</span>
                  ))}
                </div>
              </div>

              {TEXT_BLOCKS_AFTER_ESPECIALIDADES.map((b) => (
                <div className="block" key={String(b.key)}>
                  <h2>{b.icon} {b.label}</h2>
                  <p>{member[b.key] as string}</p>
                </div>
              ))}

              <div className="block">
                <h2>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" /></svg> Redes &amp; contato
                </h2>
                <div className="socials">
                  {member.githubUrl && (
                    <a className="icon-btn" href={member.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .3.3.6.9.6 1.8v2.7c0 .3.2.6.7.5A10 10 0 0 0 22 12 10 10 0 0 0 12 2z" /></svg>
                    </a>
                  )}
                  <a className="btn btn-primary" href={falarComigoHref} target="_blank" rel="noopener noreferrer" style={{ padding: "10px 18px" }}>
                    Falar comigo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <WhatsAppLink className="wa-float" message={member.waMessage} aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.2-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.3s1 2.7 1.2 2.9c.1.2 2 3.1 5 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3M12 21.5h0a9.4 9.4 0 0 1-4.8-1.3l-.3-.2-3.6.9 1-3.5-.2-.4A9.5 9.5 0 1 1 12 21.5m0-20.9A11.4 11.4 0 0 0 2.1 17.6L.6 23.4l5.9-1.5A11.4 11.4 0 1 0 12 .6" /></svg>
        WhatsApp
      </WhatsAppLink>
    </div>
  )
}
