type Cleanup = () => void

const noop: Cleanup = () => {}

export const EASE_OUT = "cubic-bezier(0.22, 1, 0.36, 1)"

const matches = (query: string) => window.matchMedia(query).matches

export const prefersReducedMotion = () =>
  matches("(prefers-reduced-motion: reduce)")

export const canUseRichMotion = () =>
  !prefersReducedMotion() &&
  matches("(hover: hover) and (pointer: fine)") &&
  window.innerWidth >= 900 &&
  (navigator.hardwareConcurrency || 8) > 4

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

let locks = 0

export function lockScroll() {
  locks += 1
  document.documentElement.classList.add("is-locked")
}

export function unlockScroll() {
  locks = Math.max(0, locks - 1)
  if (!locks) document.documentElement.classList.remove("is-locked")
}

export function resetScroll() {
  window.dispatchEvent(new Event("dtt:scroll-reset"))
  window.scrollTo(0, 0)
}

function onScrollFrame(render: () => void): Cleanup {
  let frame = 0
  const schedule = () => {
    if (!frame)
      frame = requestAnimationFrame(() => {
        frame = 0
        render()
      })
  }
  const resize = new ResizeObserver(schedule)
  resize.observe(document.body)
  window.addEventListener("scroll", schedule, { passive: true })
  window.addEventListener("resize", schedule, { passive: true })
  render()
  return () => {
    cancelAnimationFrame(frame)
    resize.disconnect()
    window.removeEventListener("scroll", schedule)
    window.removeEventListener("resize", schedule)
  }
}

export function initSmoothScroll(): Cleanup {
  if (!canUseRichMotion()) return noop
  let target = window.scrollY
  let current = window.scrollY
  let frame = 0
  const maxScroll = () =>
    document.documentElement.scrollHeight - window.innerHeight
  const step = () => {
    current += (target - current) * 0.12
    if (Math.abs(target - current) < 0.5) {
      current = target
      frame = 0
      window.scrollTo(0, current)
      return
    }
    window.scrollTo(0, current)
    frame = requestAnimationFrame(step)
  }
  const onWheel = (event: WheelEvent) => {
    if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return
    if (document.documentElement.classList.contains("is-locked")) return
    if (
      (event.target as Element).closest?.(
        "[data-native-scroll], textarea, select",
      )
    )
      return
    event.preventDefault()
    if (!frame) {
      target = window.scrollY
      current = window.scrollY
    }
    const delta = event.deltaMode === 1 ? event.deltaY * 16 : event.deltaY
    target = clamp(target + delta, 0, maxScroll())
    if (!frame) frame = requestAnimationFrame(step)
  }
  const onScroll = () => {
    if (!frame) {
      target = window.scrollY
      current = window.scrollY
    }
  }
  const stop = () => {
    cancelAnimationFrame(frame)
    frame = 0
    target = 0
    current = 0
  }
  window.addEventListener("wheel", onWheel, { passive: false })
  window.addEventListener("scroll", onScroll, { passive: true })
  window.addEventListener("dtt:scroll-reset", stop)
  return () => {
    stop()
    window.removeEventListener("wheel", onWheel)
    window.removeEventListener("scroll", onScroll)
    window.removeEventListener("dtt:scroll-reset", stop)
  }
}

export function initScrollProgress(bar: HTMLElement): Cleanup {
  return onScrollFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    const progress = max > 0 ? clamp(window.scrollY / max, 0, 1) : 0
    bar.style.transform = `scaleX(${progress.toFixed(4)})`
  })
}

export function initHeader(header: HTMLElement): Cleanup {
  let last = window.scrollY
  const show = () => header.classList.remove("is-hidden")
  const stopFrames = onScrollFrame(() => {
    const y = window.scrollY
    const delta = y - last
    last = y
    header.classList.toggle("is-scrolled", y > 24)
    if (document.documentElement.classList.contains("menu-open") || y < 140) {
      show()
      return
    }
    if (delta > 1) header.classList.add("is-hidden")
    else if (delta < -1) show()
  })
  header.addEventListener("focusin", show)
  window.addEventListener("dtt:scroll-reset", show)
  return () => {
    stopFrames()
    header.removeEventListener("focusin", show)
    window.removeEventListener("dtt:scroll-reset", show)
  }
}

export function initCursor(dot: HTMLElement, ring: HTMLElement): Cleanup {
  if (!canUseRichMotion()) return noop
  const root = document.documentElement
  root.classList.add("has-cursor")
  let x = 0
  let y = 0
  let ringX = 0
  let ringY = 0
  let frame = 0
  let visible = false
  const loop = () => {
    ringX += (x - ringX) * 0.18
    ringY += (y - ringY) * 0.18
    dot.style.transform = `translate3d(${x}px, ${y}px, 0)`
    ring.style.transform = `translate3d(${ringX.toFixed(1)}px, ${ringY.toFixed(1)}px, 0)`
    frame =
      Math.abs(x - ringX) + Math.abs(y - ringY) > 0.2
        ? requestAnimationFrame(loop)
        : 0
  }
  const onMove = (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return
    x = event.clientX
    y = event.clientY
    if (!visible) {
      ringX = x
      ringY = y
      visible = true
      root.classList.add("cursor-visible")
    }
    const target = event.target as Element
    const view = target.closest?.("[data-cursor='view']")
    const interactive = target.closest?.(
      "a, button, label, select, input, textarea",
    )
    ring.dataset.state = view ? "view" : interactive ? "hover" : ""
    if (!frame) frame = requestAnimationFrame(loop)
  }
  const onLeave = () => {
    visible = false
    root.classList.remove("cursor-visible")
  }
  const onDown = () => root.classList.add("cursor-down")
  const onUp = () => root.classList.remove("cursor-down")
  document.addEventListener("pointermove", onMove, { passive: true })
  document.documentElement.addEventListener("mouseleave", onLeave)
  document.addEventListener("pointerdown", onDown, { passive: true })
  document.addEventListener("pointerup", onUp, { passive: true })
  return () => {
    cancelAnimationFrame(frame)
    root.classList.remove("has-cursor", "cursor-visible", "cursor-down")
    document.removeEventListener("pointermove", onMove)
    document.documentElement.removeEventListener("mouseleave", onLeave)
    document.removeEventListener("pointerdown", onDown)
    document.removeEventListener("pointerup", onUp)
  }
}

function initPointerEffect(
  selector: string,
  apply: (element: HTMLElement, x: number, y: number) => void,
  activeClass: string,
): Cleanup {
  if (!canUseRichMotion()) return noop
  let active: HTMLElement | null = null
  let frame = 0
  let pointerX = 0
  let pointerY = 0
  const release = (element: HTMLElement) => {
    element.style.transform = ""
    element.style.willChange = ""
    element.classList.remove(activeClass)
  }
  const render = () => {
    frame = 0
    if (active) apply(active, pointerX, pointerY)
  }
  const onMove = (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return
    const element =
      (event.target as Element).closest?.<HTMLElement>(selector) ?? null
    if (element !== active) {
      if (active) release(active)
      active = element
      if (element) {
        element.style.willChange = "transform"
        element.classList.add(activeClass)
      }
    }
    if (!active) return
    pointerX = event.clientX
    pointerY = event.clientY
    if (!frame) frame = requestAnimationFrame(render)
  }
  const onLeave = () => {
    if (active) release(active)
    active = null
  }
  document.addEventListener("pointermove", onMove, { passive: true })
  document.documentElement.addEventListener("mouseleave", onLeave)
  window.addEventListener("dtt:scroll-reset", onLeave)
  return () => {
    cancelAnimationFrame(frame)
    onLeave()
    document.removeEventListener("pointermove", onMove)
    document.documentElement.removeEventListener("mouseleave", onLeave)
    window.removeEventListener("dtt:scroll-reset", onLeave)
  }
}

export function initMagnetic(): Cleanup {
  return initPointerEffect(
    "[data-magnetic]",
    (element, x, y) => {
      const rect = element.getBoundingClientRect()
      const dx = clamp(
        (x - (rect.left + rect.width / 2)) / (rect.width / 2),
        -1,
        1,
      )
      const dy = clamp(
        (y - (rect.top + rect.height / 2)) / (rect.height / 2),
        -1,
        1,
      )
      element.style.transform = `translate3d(${(dx * 10).toFixed(2)}px, ${(dy * 8).toFixed(2)}px, 0)`
    },
    "is-magnetic",
  )
}

export function initTilt(): Cleanup {
  return initPointerEffect(
    "[data-tilt]",
    (element, x, y) => {
      const rect = element.getBoundingClientRect()
      const px = clamp((x - rect.left) / rect.width, 0, 1)
      const py = clamp((y - rect.top) / rect.height, 0, 1)
      element.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`)
      element.style.setProperty("--my", `${(py * 100).toFixed(1)}%`)
      element.style.transform = `perspective(1000px) translate3d(0, -6px, 0) rotateX(${((0.5 - py) * 12).toFixed(2)}deg) rotateY(${((px - 0.5) * 12).toFixed(2)}deg)`
    },
    "is-tilting",
  )
}

export function initReveal(): Cleanup {
  document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((group) => {
    Array.from(group.children).forEach((child, index) => {
      const element = child as HTMLElement
      const target = element.matches("[data-reveal]")
        ? element
        : element.querySelector<HTMLElement>("[data-reveal]")
      target?.style.setProperty("--i", String(Math.min(index, 8)))
    })
  })
  const items = document.querySelectorAll<HTMLElement>(
    "[data-reveal]:not(.is-visible)",
  )
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"))
    return noop
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add("is-visible")
        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.15 },
  )
  items.forEach((item) => observer.observe(item))
  return () => observer.disconnect()
}

export function initParallax(): Cleanup {
  if (!canUseRichMotion()) return noop
  return onScrollFrame(() => {
    const viewport = window.innerHeight
    document
      .querySelectorAll<HTMLElement>("[data-parallax]")
      .forEach((element) => {
        const host = element.parentElement
        if (!host) return
        const rect = host.getBoundingClientRect()
        if (rect.bottom < -100 || rect.top > viewport + 100) return
        const progress = (rect.top + rect.height / 2 - viewport / 2) / viewport
        const strength = Number(element.dataset.parallax) || 1
        const offset = clamp(-progress * 20 * strength, -20, 20)
        element.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`
      })
  })
}

export function initTimeline(): Cleanup {
  const timeline = document.querySelector<HTMLElement>(".timeline")
  if (!timeline) return noop
  const bar = timeline.querySelector<HTMLElement>(".timeline-progress")
  const steps = Array.from(
    timeline.querySelectorAll<HTMLElement>(".timeline-step"),
  )
  return onScrollFrame(() => {
    const viewport = window.innerHeight
    const rect = timeline.getBoundingClientRect()
    const progress = clamp((viewport * 0.6 - rect.top) / rect.height, 0, 1)
    if (bar) bar.style.transform = `scaleY(${progress.toFixed(4)})`
    steps.forEach((step) => {
      step.classList.toggle(
        "is-active",
        step.getBoundingClientRect().top < viewport * 0.6,
      )
    })
  })
}
