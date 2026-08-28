import { useEffect } from "react"
import Lenis from "lenis"

/** Scroll suave + rolagem animada em âncoras internas (mesmas opções do site original). */
export function useLenisScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      syncTouch: true,
    })

    let rafId = requestAnimationFrame(function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    })

    function onAnchorClick(e: MouseEvent) {
      const a = (e.currentTarget as HTMLAnchorElement)
      const id = a.getAttribute("href")
      if (!id || id.length < 2) return
      let target: Element | null = null
      try {
        target = document.querySelector(id)
      } catch {
        target = null
      }
      if (!target) return
      e.preventDefault()
      lenis.scrollTo(target as HTMLElement, { offset: -84, duration: 1.4 })
    }

    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'))
    anchors.forEach((a) => a.addEventListener("click", onAnchorClick))

    ;(window as unknown as { __lenis?: Lenis }).__lenis = lenis

    return () => {
      cancelAnimationFrame(rafId)
      anchors.forEach((a) => a.removeEventListener("click", onAnchorClick))
      lenis.destroy()
      delete (window as unknown as { __lenis?: Lenis }).__lenis
    }
  }, [])
}

/** Usado pelo mock arrastável do hero para pausar/retomar o Lenis durante o drag. */
export function getLenis(): Lenis | undefined {
  return (window as unknown as { __lenis?: Lenis }).__lenis
}
