import { useEffect } from "react"

/** Libera o fade-in inicial do body (body{opacity:0} até a página "carregar"). */
export function useMarkLoaded() {
  useEffect(() => {
    document.body.classList.add("is-loaded")
  }, [])
}
