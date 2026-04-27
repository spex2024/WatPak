"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { HugeiconsIcon } from "@hugeicons/react"
import { NewTwitterIcon, Linkedin01Icon, Facebook01Icon, InstagramIcon } from "@hugeicons/core-free-icons"
import { FullScreenMenu } from "@/components/full-screen-menu"

const SOCIALS = [
  { icon: NewTwitterIcon, label: "X"         },
  { icon: Linkedin01Icon, label: "LinkedIn"  },
  { icon: Facebook01Icon, label: "Facebook"  },
  { icon: InstagramIcon,  label: "Instagram" },
]

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




export function HeroBanner() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Nav — absolute, scrolls away with the hero */}
      <nav className="absolute top-0 left-0 right-0 z-[60] flex items-center justify-between px-5 pt-5 pb-3 sm:px-10 sm:py-6 md:px-16 lg:px-24">
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
          onClick={() => setMenuOpen(true)}
          className="group mr-1 flex items-center gap-1.5 bg-primary px-3.5 py-2 font-heading text-[9px] font-bold uppercase tracking-tighter text-black transition-all hover:bg-primary/90 sm:mr-6 sm:px-5 sm:py-2.5 sm:text-xs md:mr-8"
        >
          Get Started
          <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>

      </nav>

      <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />


      <main
        className="relative flex min-h-svh w-full items-center justify-center overflow-hidden px-4 pt-24 pb-20 text-foreground selection:bg-primary selection:text-primary-foreground sm:p-8 sm:pb-24 md:p-12 md:pb-28 lg:p-20 lg:pb-32"
        style={{
          backgroundColor: "#142d26",
        }}
      >

        {/* WATPAK concept icons: background pattern */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.2] animate-[breathe_12s_ease-in-out_infinite]">
           <div 
             className="absolute inset-0" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><g fill='none' stroke='white' stroke-width='0.8' opacity='0.5'><path d='M10 10h10M12 10V8h6v2M19 10l-1 8a1 1 0 01-1 .8H12a1 1 0 01-1-.8L10 10'/><path d='M50 15h8l1.5 3v3H50v-6zM42 12h8v9h-8z'/><circle cx='44' cy='23' r='1.5'/><circle cx='56' cy='23' r='1.5'/><path d='M15 55l2-2h4l2 2-2 2h-4z'/><path d='M18 48l-3 3M21 48l3 3'/><path d='M50 50l4 4M54 50l-4 4'/><circle cx='65' cy='60' r='1'/><path d='M55 12h5'/></g></svg>")`,
               backgroundSize: "200px 200px",
               maskImage: 'radial-gradient(circle at center, black, transparent 95%)'
             }}
           />
        </div>

        {/* Vertical guide lines */}
        <div className="pointer-events-none fixed inset-0 z-50 flex justify-between px-[4vw] sm:px-[6vw]">
          {[0, 1].map((i) => (
            <div key={i} className="relative h-full w-px bg-foreground/10">
              <div className="absolute top-[8vh] -left-[3px] h-1.5 w-1.5 border border-white/40 bg-[#142d26] hidden sm:block" />
              <div className="absolute bottom-[8vh] -left-[3px] h-1.5 w-1.5 border border-white/40 bg-[#142d26] hidden sm:block" />
            </div>
          ))}
        </div>

        {/* Social strip — right edge, vertically centered */}
        <div className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
          <div className="h-10 w-px bg-white/15" />
          {SOCIALS.map(({ icon, label }) => (
            <a key={label} href="#" aria-label={label} className="text-white/30 transition-colors hover:text-primary">
              <HugeiconsIcon icon={icon} size={13} strokeWidth={1.5} />
            </a>
          ))}
          <div className="h-10 w-px bg-white/15" />
        </div>


        {/* Process steps — pinned to bottom, always horizontal row */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-3 sm:px-8 md:px-12 lg:px-20">
          <div className="mx-auto flex w-full max-w-[1400px] divide-x divide-white/25 border-t border-white/25">
            {[
              { num: "01", text: "We collect your waste" },
              { num: "02", text: "Weigh it on-site"      },
              { num: "03", text: "Earn on your dashboard" },
            ].map(({ num, text }) => (
              <div key={num} className="group/step flex flex-1 cursor-pointer items-center gap-2 px-3 py-3 transition-colors hover:bg-white/5 sm:gap-4 sm:px-6 sm:py-5 md:gap-5 md:px-8">
                <span className="font-heading text-base font-bold leading-none text-primary shrink-0 transition-transform group-hover/step:scale-110 sm:text-2xl md:text-3xl">
                  {num}
                </span>
                <div className="h-4 w-px shrink-0 bg-white/30 sm:h-7" />
                <span className="font-heading text-[9px] font-bold uppercase leading-tight tracking-tight text-white sm:text-[11px] md:text-sm">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Composition box */}
        <div className="relative z-10 mt-6 flex w-full max-w-[1400px] items-center justify-center aspect-[3/4] sm:mt-0 sm:aspect-[4/5] md:aspect-[4/3] lg:aspect-[16/9]">

          {/* Image inside brutalist polygon shape */}
          <div
            className="absolute inset-0 z-0 overflow-hidden animate-[breathe_6s_ease-in-out_infinite] shadow-2xl shadow-black/30"
            style={{ clipPath: CLIP }}
          >
            <Image
              src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1777181535/watpack/BANNER-HERO_hznq22.png"
              alt=""
              fill
              priority
              className="object-cover object-center"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/45 to-black/15" />
          </div>

          {/* Content layer */}
          <div className="pointer-events-none absolute inset-0 z-10">

            {/* Headline + CTA as one anchored block */}
            <div className="pointer-events-auto absolute inset-x-0 top-[32%] -translate-y-1/2 px-5 sm:inset-x-auto sm:left-8 sm:top-1/2 sm:w-[90%] sm:-translate-y-[55%] sm:px-0 md:left-[10%] md:w-[75%]">
              <h1 className="flex flex-col font-heading font-black uppercase leading-[0.75] tracking-tighter italic">
                {[
                  { text: "Get Paid", slideDelay: "0.1s", size: "text-[2rem] xs:text-[2.4rem] sm:text-8xl lg:text-[7rem] xl:text-[8rem]", color: "text-white" },
                  { text: "For Your", slideDelay: "0.2s", size: "text-lg xs:text-[1.4rem] sm:text-6xl lg:text-[5rem] xl:text-[6rem]", color: "text-primary/90" },
                  { text: "Waste.",   slideDelay: "0.3s", size: "text-[3rem] xs:text-[3.6rem] sm:text-9xl lg:text-[10rem] xl:text-[12rem]", color: "text-white" },
                ].map(({ text, slideDelay, size, color }) => (
                  <div key={text} className="overflow-hidden pb-1 pr-4">
                    <div
                      className={`${size} ${color} transition-all duration-700`}
                      style={{
                        animation: `slide-up 1.2s cubic-bezier(0.16,1,0.3,1) ${slideDelay} both`,
                        filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.6))",
                      }}
                    >
                      {text === "Waste." ? (
                        <span className="relative inline-block">
                          {text}
                          <span className="absolute -bottom-2 left-0 -z-10 h-[0.15em] w-full bg-primary/40 skew-x-[-12deg]" />
                        </span>
                      ) : text}
                    </div>
                  </div>
                ))}
              </h1>

              {/* CTA — flows directly below headline */}
              <button
                onClick={() => setMenuOpen(true)}
                className="group mt-4 inline-flex items-center gap-2 border border-white/30 bg-white/5 px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-tighter text-white backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground sm:mt-8 sm:px-6 sm:py-3 sm:text-sm md:text-base"
                style={{ animation: "slide-up 1.2s cubic-bezier(0.16,1,0.3,1) 0.5s both" }}
              >
                <span>Earn Now</span>
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Premium scroll indicator */}
            <div className="pointer-events-auto absolute bottom-[8%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 sm:bottom-[10%]">
              <div className="relative">
                <div className="absolute -inset-2.5 animate-ping rounded-full border border-white/20" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/10 text-white backdrop-blur-sm md:h-14 md:w-14">
                  <ArrowDown size={16} className="animate-bounce" />
                </div>
              </div>
              <span className="font-heading text-[8px] font-bold uppercase tracking-[0.45em] text-white/40">
                Scroll
              </span>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}
