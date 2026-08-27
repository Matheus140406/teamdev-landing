import { useEffect, useRef } from "react"

const HOVER_TARGETS = "a, button, .card, .founder, input, summary, .chip"

/** Cursor customizado (ponto + anel com atraso) — só em ponteiros finos com hover (mouse). */
export default function CursorFx() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    if (!fine || !dot || !ring) {
      document.body.classList.remove("has-cursor")
      if (dot) dot.style.display = "none"
      if (ring) ring.style.display = "none"
      return
    }

    document.body.classList.add("has-cursor")
    let x = 0
    let y = 0
    let rx = 0
    let ry = 0

    function onMouseMove(e: MouseEvent) {
      x = e.clientX
      y = e.clientY
      dot!.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`
    }
    window.addEventListener("mousemove", onMouseMove)

    let raf = requestAnimationFrame(function loop() {
      rx += (x - rx) * 0.35
      ry += (y - ry) * 0.35
      ring!.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`
      raf = requestAnimationFrame(loop)
    })

    function onEnter() {
      ring?.classList.add("hot")
    }
    function onLeave() {
      ring?.classList.remove("hot")
    }
    const targets = Array.from(document.querySelectorAll(HOVER_TARGETS))
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter)
      el.addEventListener("mouseleave", onLeave)
    })

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      cancelAnimationFrame(raf)
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter)
        el.removeEventListener("mouseleave", onLeave)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" id="cursorDot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" id="cursorRing" ref={ringRef} aria-hidden="true" />
    </>
  )
}
