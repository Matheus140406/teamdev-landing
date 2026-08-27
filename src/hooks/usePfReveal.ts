import { useEffect } from "react"

/** Reveal-on-scroll para a família de páginas do portfólio (.pf-reveal), igual ao portfolio.js original. */
export function usePfReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".pf-reveal"))
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in")
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
