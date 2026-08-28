import { useEffect } from "react"

/**
 * Anima o preenchimento da linha da timeline (.timeline::after) conforme o
 * usuário rola a página, e marca os itens já "passados" com a classe
 * `tl-item--done` para acender os pontos correspondentes.
 */
export function useTimelineProgress(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!container || reduced) return

    const items = Array.from(container.querySelectorAll<HTMLElement>(".tl-item"))
    let raf = 0

    function update() {
      const rect = container!.getBoundingClientRect()
      const viewportRef = window.innerHeight * 0.7
      const progress = rect.height > 0 ? (viewportRef - rect.top) / rect.height : 0
      const clamped = Math.min(1, Math.max(0, progress))
      container!.style.setProperty("--tl-progress", clamped.toFixed(4))

      items.forEach((item, i) => {
        const threshold = items.length > 1 ? i / (items.length - 1) : 0
        item.classList.toggle("tl-item--done", clamped >= threshold)
      })
      raf = 0
    }
    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [containerRef])
}
