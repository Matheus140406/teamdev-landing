import { useEffect, useRef } from "react"
import { getLenis } from "@/hooks/useLenisScroll"

/** Partículas do canvas do hero (mesma lógica do enhance.js). */
export function useHeroParticles(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const cv = canvasRef.current
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!cv || reduced) {
      if (cv) cv.style.display = "none"
      return
    }
    const ctx = cv.getContext("2d")
    if (!ctx) return
    let W = 0
    let H = 0
    let pts: { x: number; y: number; vx: number; vy: number }[] = []
    const DP = Math.min(window.devicePixelRatio || 1, 2)

    function resize() {
      const host = cv!.parentElement!
      W = host.offsetWidth
      H = host.offsetHeight
      cv!.width = W * DP
      cv!.height = H * DP
      cv!.style.width = W + "px"
      cv!.style.height = H + "px"
      ctx!.setTransform(DP, 0, 0, DP, 0, 0)
      const n = Math.min(70, Math.floor(W / 18))
      pts = []
      for (let i = 0; i < n; i++) {
        pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35 })
      }
    }
    resize()
    window.addEventListener("resize", resize)

    let raf = 0
    function tick() {
      ctx!.clearRect(0, 0, W, H)
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, 1.6, 0, 6.283)
        ctx!.fillStyle = "rgba(120,170,255,0.7)"
        ctx!.fill()
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d = dx * dx + dy * dy
          if (d < 13000) {
            ctx!.beginPath()
            ctx!.moveTo(p.x, p.y)
            ctx!.lineTo(q.x, q.y)
            ctx!.strokeStyle = `rgba(79,139,255,${0.16 * (1 - d / 13000)})`
            ctx!.stroke()
          }
        }
      }
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(raf)
    }
  }, [canvasRef])
}

/** Parallax (mouse + scroll) das camadas do hero e rotação sutil do mock. */
export function useHeroParallax(
  sceneRef: React.RefObject<HTMLDivElement | null>,
  mockRef: React.RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const scene = sceneRef.current
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!scene || reduced) return
    const coarse = window.matchMedia("(pointer: coarse)").matches
    const layers = Array.from(scene.querySelectorAll<HTMLElement>(".px-layer"))
    let mx = 0
    let my = 0
    let tmx = 0
    let tmy = 0
    let sy = 0

    function onMouseMove(e: MouseEvent) {
      tmx = (e.clientX / window.innerWidth - 0.5) * 2
      tmy = (e.clientY / window.innerHeight - 0.5) * 2
    }
    function onScroll() {
      sy = window.scrollY || 0
    }
    if (!coarse) window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("scroll", onScroll, { passive: true })

    let raf = 0
    function loop() {
      mx += (tmx - mx) * 0.06
      my += (tmy - my) * 0.06
      layers.forEach((l) => {
        const d = parseFloat(l.getAttribute("data-depth") || "0.2") || 0.2
        l.style.transform = `translate3d(${mx * d * 24}px,${my * d * 24 + sy * d * 0.18}px,0)`
      })
      const mock = mockRef.current
      if (mock && !coarse && !mock.classList.contains("grabbed")) {
        mock.style.transform = `rotateY(${-9 + mx * 4}deg) rotateX(${5 - my * 4}deg)`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [sceneRef, mockRef])
}

/** Mock do hero arrastável (gira ao arrastar, PC e celular). */
export function useDraggableMock(mockRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const mock = mockRef.current
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!mock || reduced) return
    const coarse = window.matchMedia("(pointer: coarse)").matches
    const baseX = coarse ? 0 : 5
    const baseY = coarse ? 0 : -9
    let dragging = false
    let sx = 0
    let sy = 0
    let tx = baseX
    let ty = baseY
    let cx = baseX
    let cy = baseY
    let raf: number | null = null

    function loop() {
      cx += (tx - cx) * 0.16
      cy += (ty - cy) * 0.16
      mock!.style.transform = `perspective(1100px) rotateX(${cx.toFixed(2)}deg) rotateY(${cy.toFixed(2)}deg)`
      if (dragging || Math.abs(tx - cx) > 0.25 || Math.abs(ty - cy) > 0.25) {
        raf = requestAnimationFrame(loop)
      } else {
        raf = null
        cx = tx
        cy = ty
        mock!.classList.remove("grabbed")
        if (!coarse) mock!.style.transform = ""
      }
    }
    function kick() {
      if (!raf) raf = requestAnimationFrame(loop)
    }
    function onPointerDown(e: PointerEvent) {
      dragging = true
      sx = e.clientX
      sy = e.clientY
      mock!.classList.add("grabbed")
      try {
        mock!.setPointerCapture(e.pointerId)
      } catch {
        /* ignora */
      }
      getLenis()?.stop()
      kick()
    }
    function onPointerMove(e: PointerEvent) {
      if (!dragging) return
      ty = Math.max(-20, Math.min(20, baseY + (e.clientX - sx) * 0.18))
      tx = Math.max(-16, Math.min(16, baseX - (e.clientY - sy) * 0.18))
    }
    function release() {
      if (!dragging) return
      dragging = false
      tx = baseX
      ty = baseY
      getLenis()?.start()
      kick()
    }
    function onTouchMove(e: TouchEvent) {
      if (dragging) {
        e.preventDefault()
        e.stopPropagation()
      }
    }

    mock.addEventListener("pointerdown", onPointerDown)
    mock.addEventListener("pointermove", onPointerMove)
    mock.addEventListener("pointerup", release)
    mock.addEventListener("pointercancel", release)
    mock.addEventListener("touchmove", onTouchMove, { passive: false })

    return () => {
      mock.removeEventListener("pointerdown", onPointerDown)
      mock.removeEventListener("pointermove", onPointerMove)
      mock.removeEventListener("pointerup", release)
      mock.removeEventListener("pointercancel", release)
      mock.removeEventListener("touchmove", onTouchMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [mockRef])
}
