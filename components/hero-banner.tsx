"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { FullScreenMenu } from "@/components/full-screen-menu"
import { SocialLinks } from "@/components/social-links"
import { APP_URL } from "@/lib/constants"

const CLIP = `polygon(
  15% 0%,  85% 0%,
  85% 8%,  92% 8%,
  92% 18%, 100% 18%,
  100% 45%, 85% 45%,
  85% 75%, 95% 75%,
  95% 95%, 75% 95%,
  75% 100%, 40% 100%,
  40% 92%, 10% 92%,
  10% 80%, 5% 80%,
  5% 55%,  0% 55%,
  0% 25%,  15% 25%
)`

const STEPS = [
  { num: "01", text: "We collect your waste" },
  { num: "02", text: "Weigh it on-site" },
  { num: "03", text: "Earn on your dashboard" },
]

const HEADLINE = [
  {
    text: "Get Paid",
    delay: 0.45,
    size: "text-[2rem] xs:text-[2.4rem] sm:text-8xl lg:text-[7rem] xl:text-[8rem]",
    color: "text-white",
  },
  {
    text: "For Your",
    delay: 0.55,
    size: "text-lg xs:text-[1.4rem] sm:text-6xl lg:text-[5rem] xl:text-[6rem]",
    color: "text-primary/90",
  },
  {
    text: "Waste.",
    delay: 0.65,
    size: "text-[3rem] xs:text-[3.6rem] sm:text-9xl lg:text-[10rem] xl:text-[12rem]",
    color: "text-white",
  },
]

/** Delay measured from the moment the preloader lifts (see --intro in globals.css). */
const afterIntro = (seconds: number) => `calc(var(--intro) + ${seconds}s)`

export function HeroBanner() {
  const [menuOpen, setMenuOpen] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)

  // Depth: the photo and the headline shift against each other with the
  // pointer, and drift apart as the hero scrolls away.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const hero = heroRef.current
    if (!hero) return

    let targetX = 0
    let targetY = 0
    let x = 0
    let y = 0
    let raf = 0

    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect()
      targetX = (e.clientX - r.left) / r.width - 0.5
      targetY = (e.clientY - r.top) / r.height - 0.5
    }

    const tick = () => {
      x += (targetX - x) * 0.07
      y += (targetY - y) * 0.07
      const r = hero.getBoundingClientRect()
      const p = Math.max(0, Math.min(1, -r.top / r.height))
      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(${(x * 22).toFixed(2)}px, ${(y * 14 + p * 110).toFixed(2)}px, 0) scale(${(1 + p * 0.08).toFixed(4)})`
      }
      if (copyRef.current) {
        copyRef.current.style.transform = `translate3d(${(x * -16).toFixed(2)}px, ${(y * -10 - p * 70).toFixed(2)}px, 0)`
        copyRef.current.style.opacity = String(1 - Math.min(1, p * 1.3))
      }
      // Stop once the hero is fully off screen; the scroll listener restarts it.
      raf = r.bottom > 0 ? requestAnimationFrame(tick) : 0
    }
    const wake = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }

    hero.addEventListener("mousemove", onMove)
    window.addEventListener("scroll", wake, { passive: true })
    wake()
    return () => {
      hero.removeEventListener("mousemove", onMove)
      window.removeEventListener("scroll", wake)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Nav — absolute, scrolls away with the hero */}
      <nav className="h-nav absolute top-0 right-0 left-0 z-[60] flex items-center justify-between px-5 pt-5 pb-3 sm:px-10 sm:py-6 md:px-16 lg:px-24">
        {/* Logo */}
        <div className="relative ml-1 h-14 w-36 sm:ml-10 sm:h-24 sm:w-80 md:ml-14 md:h-28 md:w-96 lg:ml-16 lg:h-36 lg:w-[30rem]">
          <Image
            src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1777186978/watpack/Yellow_yz973x.png"
            alt="WATPAK"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Get Started — opens full-screen menu */}
        <button
          data-magnetic
          onClick={() => setMenuOpen(true)}
          className="group mr-1 flex items-center gap-1.5 bg-primary px-3.5 py-2 font-heading text-[9px] font-bold tracking-tighter text-black uppercase hover:bg-primary/90 sm:mr-6 sm:px-5 sm:py-2.5 sm:text-xs md:mr-8"
        >
          Get Started
          <ArrowUpRight
            size={12}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </nav>

      <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main
        ref={heroRef}
        className="relative flex min-h-svh w-full items-center justify-center overflow-hidden px-4 pt-24 pb-20 text-foreground selection:bg-primary selection:text-primary-foreground sm:p-8 sm:pb-24 md:p-12 md:pb-28 lg:p-20 lg:pb-32"
        style={{
          backgroundColor: "#142d26",
        }}
      >
        {/* WATPAK concept icons: background pattern */}
        <div className="pointer-events-none absolute inset-0 animate-[breathe_12s_ease-in-out_infinite] overflow-hidden opacity-[0.2]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><g fill='none' stroke='white' stroke-width='0.8' opacity='0.5'><path d='M10 10h10M12 10V8h6v2M19 10l-1 8a1 1 0 01-1 .8H12a1 1 0 01-1-.8L10 10'/><path d='M50 15h8l1.5 3v3H50v-6zM42 12h8v9h-8z'/><circle cx='44' cy='23' r='1.5'/><circle cx='56' cy='23' r='1.5'/><path d='M15 55l2-2h4l2 2-2 2h-4z'/><path d='M18 48l-3 3M21 48l3 3'/><path d='M50 50l4 4M54 50l-4 4'/><circle cx='65' cy='60' r='1'/><path d='M55 12h5'/></g></svg>")`,
              backgroundSize: "200px 200px",
              maskImage:
                "radial-gradient(circle at center, black, transparent 95%)",
            }}
          />
        </div>

        {/* Vertical guide lines — draw down from the top */}
        <div className="pointer-events-none fixed inset-0 z-50 flex justify-between px-[4vw] sm:px-[6vw]">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="h-guide relative h-full w-px bg-foreground/10"
            >
              <div className="absolute top-[8vh] -left-[3px] hidden h-1.5 w-1.5 border border-white/40 bg-[#142d26] sm:block" />
              <div className="absolute bottom-[8vh] -left-[3px] hidden h-1.5 w-1.5 border border-white/40 bg-[#142d26] sm:block" />
            </div>
          ))}
        </div>

        {/* Social strip — right edge, vertically centered */}
        <div className="h-soc absolute top-1/2 right-5 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
          <div
            className="h-10 w-px bg-white/15"
            style={{ animationDelay: afterIntro(1.25) }}
          />
          <SocialLinks
            size={13}
            baseDelay={1.35}
            className="soc text-white/30 hover:text-primary"
          />
          <div
            className="h-10 w-px bg-white/15"
            style={{ animationDelay: afterIntro(1.9) }}
          />
        </div>

        {/* Process steps — pinned to bottom, always horizontal row */}
        <div className="absolute right-0 bottom-0 left-0 z-20 px-3 sm:px-8 md:px-12 lg:px-20">
          <div className="relative mx-auto w-full max-w-[1400px]">
            {/* Top rule draws across before the steps rise */}
            <div className="h-rule absolute inset-x-0 top-0 h-px bg-white/25" />
            <div className="flex w-full divide-x divide-white/25">
              {STEPS.map(({ num, text }, i) => (
                <div
                  key={num}
                  className="group/step h-step flex flex-1 cursor-pointer items-center gap-2 px-3 py-3 transition-colors hover:bg-white/5 sm:gap-4 sm:px-6 sm:py-5 md:gap-5 md:px-8"
                  style={{ animationDelay: afterIntro(1.1 + i * 0.12) }}
                >
                  <span className="shrink-0 font-heading text-base leading-none font-bold text-primary transition-transform group-hover/step:scale-110 sm:text-2xl md:text-3xl">
                    {num}
                  </span>
                  <div className="h-4 w-px shrink-0 bg-white/30 sm:h-7" />
                  <span className="font-heading text-[9px] leading-tight font-bold tracking-tight text-white uppercase sm:text-[11px] md:text-sm">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Composition box */}
        <div className="relative z-10 mt-6 flex aspect-[3/4] w-full max-w-[1400px] items-center justify-center sm:mt-0 sm:aspect-[4/5] md:aspect-[4/3] lg:aspect-[16/9]">
          {/* Image inside brutalist polygon shape — opens out from the centre */}
          <div
            className="h-poly absolute inset-0 z-0 overflow-hidden shadow-2xl shadow-black/30"
            style={{ clipPath: CLIP }}
          >
            <div ref={imageRef} className="h-par absolute -inset-[6%]">
              <Image
                src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1777181535/watpack/BANNER-HERO_hznq22.png"
                alt=""
                fill
                priority
                className="h-img object-cover object-center"
              />
            </div>
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/45 to-black/15" />
          </div>

          {/* Content layer */}
          <div className="pointer-events-none absolute inset-0 z-10">
            {/* Headline + CTA as one anchored block */}
            <div className="pointer-events-auto absolute inset-x-0 top-[32%] -translate-y-1/2 px-5 sm:inset-x-auto sm:top-1/2 sm:left-8 sm:w-[90%] sm:-translate-y-[55%] sm:px-0 md:left-[10%] md:w-[75%]">
              <div ref={copyRef} className="h-par">
                <h1 className="flex flex-col font-heading leading-[0.75] font-black tracking-tighter uppercase italic">
                  {HEADLINE.map(({ text, delay, size, color }) => (
                    <div key={text} className="overflow-hidden pr-4 pb-1">
                      <div
                        className={`${size} ${color}`}
                        style={{
                          animation: `slide-up 1.2s cubic-bezier(0.16,1,0.3,1) ${afterIntro(delay)} both`,
                          filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.6))",
                        }}
                      >
                        {text === "Waste." ? (
                          <span className="relative inline-block">
                            {text}
                            <span className="h-ul absolute -bottom-2 left-0 -z-10 h-[0.15em] w-full bg-primary/40" />
                          </span>
                        ) : (
                          text
                        )}
                      </div>
                    </div>
                  ))}
                </h1>

                {/* CTA — the mask gives the magnetic button room to move */}
                <div className="-mb-3 -ml-3 overflow-hidden p-3 pt-0">
                  <div className="h-cta mt-4 inline-block sm:mt-8">
                    <a
                      data-magnetic
                      href={APP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-fill group pointer-events-auto inline-flex items-center gap-2 border border-white/30 bg-white/5 px-4 py-2.5 font-heading text-xs font-bold tracking-tighter text-white uppercase backdrop-blur-sm hover:border-primary hover:text-primary-foreground sm:px-6 sm:py-3 sm:text-sm md:text-base"
                    >
                      <span>Earn Now</span>
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-5 sm:w-5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium scroll indicator */}
            <div className="h-scroll pointer-events-auto absolute bottom-[8%] left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 sm:bottom-[10%]">
              <div className="relative">
                <div className="absolute -inset-2.5 animate-ping rounded-full border border-white/20" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/10 text-white backdrop-blur-sm md:h-14 md:w-14">
                  <ArrowDown size={16} className="animate-bounce" />
                </div>
              </div>
              <span className="font-heading text-[8px] font-bold tracking-[0.45em] text-white/40 uppercase">
                Scroll
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
