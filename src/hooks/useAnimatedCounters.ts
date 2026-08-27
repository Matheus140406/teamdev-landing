import { useEffect } from "react"

/** Contadores animados + barras de progresso (.num[data-count] / .bar > i[data-w]) quando #stats entra na tela. */
export function useAnimatedCounters(statsRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const stats = statsRef.current
    if (!stats) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    function run() {
      stats!.querySelectorAll<HTMLElement>(".num").forEach((num) => {
        const target = parseInt(num.getAttribute("data-count") || "0", 10) || 0
        const val = num.querySelector<HTMLElement>(".val")
        if (!val) return
        if (reduced) {
          val.textContent = String(target)
          return
        }
        let t0: number | null = null
        const dur = 1400
        function step(ts: number) {
          if (t0 === null) t0 = ts
          const p = Math.min((ts - t0) / dur, 1)
          val!.textContent = String(Math.round((1 - Math.pow(1 - p, 3)) * target))
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      })
      stats!.querySelectorAll<HTMLElement>(".bar > i").forEach((b) => {
        b.style.width = (b.getAttribute("data-w") || "100") + "%"
      })
    }

    if (!("IntersectionObserver" in window) || reduced) {
      run()
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run()
            io.disconnect()
          }
        })
      },
      { threshold: 0.4 },
    )
    io.observe(stats)
    return () => io.disconnect()
  }, [statsRef])
}
