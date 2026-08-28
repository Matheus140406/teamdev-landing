import { useEffect, useRef, useState } from "react"

/**
 * Item de accordion com altura animada via JS (max-height medido pelo
 * scrollHeight do conteúdo). Evita depender de <details> nativo, cuja
 * transição de abertura/fechamento não é suave em todos os navegadores.
 */
export default function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [maxHeight, setMaxHeight] = useState(0)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    if (open) {
      const measure = () => setMaxHeight(el.scrollHeight)
      measure()
      window.addEventListener("resize", measure)
      return () => window.removeEventListener("resize", measure)
    }
    setMaxHeight(0)
  }, [open, answer])

  return (
    <div className={`q${open ? " open" : ""}`}>
      <h3 className="q-h">
        <button type="button" className="q-trigger" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span>{question}</span> <span className="plus" />
        </button>
      </h3>
      <div className="a-wrap" style={{ maxHeight }}>
        <div className="a" ref={contentRef}>
          {answer}
        </div>
      </div>
    </div>
  )
}
