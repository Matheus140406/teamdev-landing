import { useState } from "react"

/** "page-enter" só quando o usuário não pediu movimento reduzido (mesma checagem do enhance.js). */
export function usePageEnterClass(base: string): string {
  const [reduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )
  return reduced ? base : `${base} page-enter`
}
