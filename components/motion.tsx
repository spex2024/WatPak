"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const clamp = (v: number) => Math.max(0, Math.min(1, v))

/**
 * Site-wide motion driver. Renders nothing; it wires up the data attributes
 * that pages put on their markup:
 *
 *  - data-r="up|left|clip|lines|card"  reveal when scrolled into view
 *    (data-d="0.2" adds a delay in seconds)
 *  - data-px-hero   hero image drifts down as its section scrolls away
 *  - data-fade-out  hero copy lifts and fades as its section scrolls away
 *  - data-px        image moves slower than the page (parent must clip)
 *  - data-words     children marked data-w light up word by word
 *  - data-magnetic  element pulls toward the cursor
 *
 * The inline script in app/layout.tsx sets data-js on <html> (unless the
 * visitor prefers reduced motion); without it this component does nothing
 * and every element stays in its final, visible state.
 */
export function Motion() {
  const pathname = usePathname()

  useEffect(() => {
    const root = document.documentElement
    if (!root.hasAttribute("data-js")) return
    ;(window as unknown as { __wpMotion?: boolean }).__wpMotion = true

    // ── Scroll reveals ─────────────────────────────────────────────
    // Wait for the preloader to lift so reveals are not spent behind it.
    const startDelay = root.hasAttribute("data-loaded")
      ? 80
      : root.hasAttribute("data-seen")
        ? 500
        : 2300

    let io: IntersectionObserver | undefined
    const show = (el: HTMLElement) => {
      const d = el.getAttribute("data-d")
      // --d is read by the element and, for clip/card reveals, its children.
      if (d) el.style.setProperty("--d", `${d}s`)
      el.setAttribute("data-in", "1")
    }
    const startTimer = window.setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>(
        "[data-r]:not([data-in])"
      )
      if (typeof IntersectionObserver === "undefined") {
        els.forEach(show)
        return
      }
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            show(entry.target as HTMLElement)
            io?.unobserve(entry.target)
          })
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      )
      els.forEach((el) => io?.observe(el))
    }, startDelay)

    // ── Scroll-linked movement ─────────────────────────────────────
    let raf = 0
    const update = () => {
      raf = 0
      const vh = window.innerHeight

      document
        .querySelectorAll<HTMLElement>("[data-px-hero], [data-fade-out]")
        .forEach((el) => {
          const host = el.closest("section, main")
          if (!host) return
          const r = host.getBoundingClientRect()
          const p = clamp(-r.top / r.height)
          if (el.hasAttribute("data-px-hero")) {
            el.style.transform = `translate3d(0, ${(p * 120).toFixed(2)}px, 0)`
          } else {
            el.style.transform = `translate3d(0, ${(p * -50).toFixed(2)}px, 0)`
            el.style.opacity = String(1 - clamp(p * 1.4))
          }
        })

      document.querySelectorAll<HTMLElement>("[data-px]").forEach((el) => {
        const host = el.parentElement
        if (!host) return
        const r = host.getBoundingClientRect()
        const p = clamp((vh - r.top) / (vh + r.height))
        el.style.transform = `translate3d(0, ${((p - 0.5) * -18).toFixed(2)}%, 0)`
      })

      document.querySelectorAll<HTMLElement>("[data-words]").forEach((el) => {
        const words = el.querySelectorAll<HTMLElement>("[data-w]")
        const r = el.getBoundingClientRect()
        const p = clamp((vh * 0.88 - r.top) / (vh * 0.55))
        const n = words.length
        words.forEach((w, i) => {
          w.style.opacity = (0.18 + 0.82 * clamp(p * (n + 3) - i)).toFixed(3)
        })
      })
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    update()

    // ── Magnetic buttons ───────────────────────────────────────────
    let active: HTMLElement | null = null
    let rect: DOMRect | null = null
    const release = () => {
      if (active) active.style.transform = ""
      active = null
      rect = null
    }
    const onMove = (e: MouseEvent) => {
      const target = e.target as Element | null
      const el = target?.closest?.<HTMLElement>("[data-magnetic]") ?? null
      if (el !== active) {
        release()
        if (!el) return
        active = el
        rect = el.getBoundingClientRect()
      }
      if (!active || !rect) return
      const x = e.clientX - (rect.left + rect.width / 2)
      const y = e.clientY - (rect.top + rect.height / 2)
      active.style.transform = `translate(${(x * 0.25).toFixed(1)}px, ${(y * 0.35).toFixed(1)}px)`
    }
    document.addEventListener("mousemove", onMove)
    document.addEventListener("mouseleave", release)

    return () => {
      window.clearTimeout(startTimer)
      io?.disconnect()
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", release)
      release()
    }
  }, [pathname])

  return null
}
