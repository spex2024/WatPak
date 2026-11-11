"use client"

import { useEffect, useState } from "react"

/**
 * Page transition. When a visitor clicks a link to another page on this
 * site, a yellow curtain wipes up over the screen showing where they are
 * going, then the browser navigates. The next page loads behind the
 * preloader (same yellow), which lifts straight away on repeat visits, so
 * the two read as one movement.
 */
export function PageCurtain() {
  const [label, setLabel] = useState<string | null>(null)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let timer = 0

    const onClick = (e: MouseEvent) => {
      if (reduce || e.defaultPrevented || e.button !== 0) return
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as Element | null)?.closest?.("a")
      if (!a || !a.href) return
      if (a.target && a.target !== "_self") return
      if (a.hasAttribute("download")) return

      const url = new URL(a.href, window.location.href)
      if (url.origin !== window.location.origin) return
      // Same page (for example a #section link): let the browser scroll.
      if (url.pathname === window.location.pathname) return

      e.preventDefault()
      const text = (a.dataset.label ?? a.textContent ?? "")
        .replace(/[←→]/g, "")
        .replace(/\s+/g, " ")
        .trim()
      setLabel(text.slice(0, 28))
      timer = window.setTimeout(() => {
        window.location.href = url.href
      }, 650)
    }

    // Coming back with the browser's back button restores the old page
    // as it was left, curtain included, so clear it.
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) setLabel(null)
    }

    document.addEventListener("click", onClick)
    window.addEventListener("pageshow", onPageShow)
    return () => {
      window.clearTimeout(timer)
      document.removeEventListener("click", onClick)
      window.removeEventListener("pageshow", onPageShow)
    }
  }, [])

  return (
    <div
      className="page-curtain"
      data-on={label === null ? "no" : "yes"}
      aria-hidden="true"
    >
      <span className="block overflow-hidden pr-[0.15em] pb-[0.12em]">
        <span className="page-curtain-label block font-heading text-[2.5rem] leading-[0.9] font-black tracking-tighter text-[#142d26] uppercase italic sm:text-7xl lg:text-[7rem]">
          {label}
        </span>
      </span>
    </div>
  )
}
