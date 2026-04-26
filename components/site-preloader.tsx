"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

type Phase = "text" | "logo" | "exit"

export function SitePreloader() {
  const [phase, setPhase] = useState<Phase>("text")
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase("logo"), 1300)
    const t2 = window.setTimeout(() => setPhase("exit"), 2400)
    const t3 = window.setTimeout(() => setVisible(false), 3200)
    return () => { window.clearTimeout(t1); window.clearTimeout(t2); window.clearTimeout(t3) }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center overflow-hidden bg-[#fcd404]"
      style={{
        transform: phase === "exit" ? "translateY(-100%)" : "translateY(0)",
        transition: phase === "exit" ? "transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)" : "none",
      }}
      aria-hidden="true"
    >
      {/* Phase 1 — text */}
      <div
        className="absolute flex flex-col items-center text-center"
        style={{
          opacity: phase !== "text" ? 0 : 1,
          transform: phase !== "text" ? "translateY(-8%) scale(0.96)" : "translateY(0) scale(1)",
          transition: "opacity 0.45s ease, transform 0.55s cubic-bezier(0.76,0,0.24,1)",
          pointerEvents: "none",
        }}
      >
        <div className="overflow-hidden pb-2 pr-6">
          <div
            className="font-heading text-3xl font-black uppercase italic leading-none tracking-tighter text-[#142d26] sm:text-5xl"
            style={{ animation: "slide-up 0.7s cubic-bezier(0.16,1,0.3,1) 0s both" }}
          >
            Earn From
          </div>
        </div>
        <div className="overflow-hidden pb-4">
          <div
            className="font-heading text-[5.5rem] font-black uppercase italic leading-[0.82] tracking-tighter text-[#142d26] sm:text-[9rem]"
            style={{ animation: "slide-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
          >
            Waste.
          </div>
        </div>
      </div>

      {/* Phase 2 — logo */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          opacity: phase === "text" ? 0 : 1,
          transition: "opacity 0.35s ease",
          pointerEvents: "none",
        }}
      >
        {phase !== "text" && (
          <div className="preloader-logo-wrap w-[16rem] sm:w-[24rem]">
            <Image
              src="/watpak-full-logo.png"
              alt="WatPak"
              width={960}
              height={320}
              priority
              className="h-auto w-full"
            />
          </div>
        )}
      </div>
    </div>
  )
}
