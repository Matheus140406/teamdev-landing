import { useEffect } from "react"

/** Botões magnéticos (.btn-primary) + tilt 3D (.card, .wcard, .founder) dentro do container. */
export function useMagneticAndTilt(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = containerRef.current
    if (!root) return
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!fine || reduced) return

    const cleanups: (() => void)[] = []

    root.querySelectorAll<HTMLElement>(".btn-primary, [data-magnetic]").forEach((el) => {
      function onMove(e: MouseEvent) {
        const r = el.getBoundingClientRect()
        const mx = e.clientX - r.left - r.width / 2
        const my = e.clientY - r.top - r.height / 2
        el.style.transform = `translate(${mx * 0.22}px,${my * 0.3}px)`
      }
      function onLeave() {
        el.style.transform = ""
      }
      el.addEventListener("mousemove", onMove)
      el.addEventListener("mouseleave", onLeave)
      cleanups.push(() => {
        el.removeEventListener("mousemove", onMove)
        el.removeEventListener("mouseleave", onLeave)
      })
    })

    root.querySelectorAll<HTMLElement>(".card, .wcard, .founder").forEach((el) => {
      function onMove(e: MouseEvent) {
        const r = el.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        el.style.transform = `perspective(800px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg) translateY(-4px)`
      }
      function onLeave() {
        el.style.transform = ""
      }
      el.addEventListener("mousemove", onMove)
      el.addEventListener("mouseleave", onLeave)
      cleanups.push(() => {
        el.removeEventListener("mousemove", onMove)
        el.removeEventListener("mouseleave", onLeave)
      })
    })

    return () => cleanups.forEach((c) => c())
  }, [containerRef])
}
