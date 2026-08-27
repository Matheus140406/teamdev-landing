import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || 0
      const h = document.documentElement.scrollHeight - window.innerHeight
      setWidth(h > 0 ? (y / h) * 100 : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return <div className="scroll-progress" id="scrollProgress" style={{ width: `${width}%` }} />
}
