import { useEffect } from "react"

/** Animação "pop" ao clicar nos ícones sociais do rodapé. */
export function useFooterIconPop(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = containerRef.current
    if (!root) return
    const icons = Array.from(root.querySelectorAll<HTMLElement>(".social-row .icon-btn"))
    function onClick(this: HTMLElement) {
      this.classList.remove("pop")
      void this.offsetWidth
      this.classList.add("pop")
      setTimeout(() => this.classList.remove("pop"), 620)
    }
    icons.forEach((a) => a.addEventListener("click", onClick))
    return () => icons.forEach((a) => a.removeEventListener("click", onClick))
  }, [containerRef])
}
