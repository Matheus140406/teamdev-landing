import { useEffect, useRef, useState } from "react"

/** Ref + classe "in" para animação de entrada ao rolar a página (equivalente a .reveal/.reveal.in). */
export function useReveal<T extends HTMLElement = HTMLDivElement>(rootMargin = "0px 0px -40px 0px") {
  const ref = useRef<T>(null)
  const [isIn, setIsIn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced || !("IntersectionObserver" in window)) {
      setIsIn(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIn(true)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])

  return { ref, className: isIn ? "reveal in" : "reveal" }
}
