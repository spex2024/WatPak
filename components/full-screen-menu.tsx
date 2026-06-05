"use client"

import Image from "next/image"
import { X, ArrowUpRight } from "lucide-react"
import { HugeiconsIcon } from "@hugeicons/react"
import { NewTwitterIcon, Linkedin01Icon, Facebook01Icon, InstagramIcon } from "@hugeicons/core-free-icons"
import { APP_URL } from "@/lib/constants"

const MAIN_LINKS = [
  { label: "Home", href: "/", sub: "Back to homepage", mobileOnly: true },
  { label: "Waste Picker", href: "/waste-picker", sub: "Get paid to collect waste", mobileOnly: false },
  { label: "Waste Generator", href: "/business", sub: "Turn your waste into revenue", mobileOnly: false },
  { label: "Aggregator", href: "/aggregator", sub: "Become a collection hub", mobileOnly: false },
]

const SUB_LINKS = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Contact", href: "/contact" },
]

const SOCIALS = [
  { icon: NewTwitterIcon, label: "X" },
  { icon: Linkedin01Icon, label: "LinkedIn" },
  { icon: Facebook01Icon, label: "Facebook" },
  { icon: InstagramIcon, label: "Instagram" },
]

interface Props {
  isOpen: boolean
  onClose: () => void
}

export function FullScreenMenu({ isOpen, onClose }: Props) {
  const year = new Date().getFullYear()

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col overflow-hidden bg-[#142d26]"
      style={{
        clipPath: isOpen ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
        transition: "clip-path 0.65s cubic-bezier(0.76, 0, 0.24, 1)",
        pointerEvents: isOpen ? "auto" : "none",
      }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-8 py-5 sm:px-12">
        <a href="/" onClick={onClose} className="relative h-10 w-32 sm:h-12 sm:w-44">
          <Image
            src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1777186978/watpack/Yellow_yz973x.png"
            alt="WATPAK"
            fill
            unoptimized
            className="object-contain object-left"
          />
        </a>
        <button
          onClick={onClose}
          className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-widest text-white/50 transition-colors hover:text-white"
        >
          Close <X size={16} />
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">

        {/* Left panel */}
        <div className="hidden w-[36%] flex-col justify-between border-r border-white/10 p-12 xl:flex">
          <div>
            <div className="relative mb-6 overflow-hidden" style={{ paddingTop: "68%" }}>
              <Image
                src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1777181535/watpack/BANNER-HERO_hznq22.png"
                alt=""
                fill
                unoptimized
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/25" />
            </div>
            <p className="font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              From the Field
            </p>
            <p className="mt-1 font-heading text-base font-medium leading-relaxed tracking-tight text-white/70">
              Waste collected.<br />Earnings logged.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-heading text-xs text-white/30">WatPak. Waste to Resource.</p>
            <p className="font-heading text-xs text-white/20">Operating in Accra, Ghana</p>
          </div>
        </div>

        {/* Right panel — main links */}
        <div className="flex flex-1 flex-col justify-center">
          {MAIN_LINKS.map(({ label, href, sub, mobileOnly }, i) => (
            <a
              key={label}
              href={href}
              onClick={onClose}
              className={`group flex items-center justify-between border-b border-white/10 px-8 py-5 transition-all duration-200 hover:bg-white sm:px-12 sm:py-6 ${mobileOnly ? "md:hidden" : ""}`}
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.4s ease ${0.25 + i * 0.08}s, transform 0.4s ease ${0.25 + i * 0.08}s, background 0.2s`,
              }}
            >
              <div>
                <p className="font-heading text-4xl font-black uppercase tracking-tight text-white transition-colors group-hover:text-[#142d26] sm:text-5xl md:text-6xl lg:text-7xl">
                  {label}
                </p>
                <p className="mt-0.5 font-heading text-xs text-white/30 transition-colors group-hover:text-[#142d26]/50">
                  {sub}
                </p>
              </div>
              <ArrowUpRight
                size={24}
                className="shrink-0 text-white/20 transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#142d26]"
              />
            </a>
          ))}

          {/* Secondary links */}
          <div
            className="flex flex-wrap gap-6 px-8 pt-8 sm:px-12"
            style={{
              opacity: isOpen ? 1 : 0,
              transition: `opacity 0.4s ease 0.5s`,
            }}
          >
            {SUB_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={onClose}
                className="font-heading text-xs font-bold uppercase tracking-widest text-white/30 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>

          <div
            className="mt-6 px-8 sm:px-12"
            style={{
              opacity: isOpen ? 1 : 0,
              transition: "opacity 0.4s ease 0.55s",
            }}
          >
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="group inline-flex items-center gap-2 bg-primary px-6 py-3.5 font-heading text-xs font-bold uppercase tracking-tight text-black transition-all hover:bg-primary/90"
            >
              Open App
              <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between border-t border-white/10 px-8 py-4 sm:px-12">
        <p className="font-heading text-[10px] uppercase tracking-widest text-white/20">
          © {year} WatPak. From waste to resource.
        </p>
        <div className="flex items-center gap-4 text-white/30">
          {SOCIALS.map(({ icon, label }) => (
            <a key={label} href="#" aria-label={label} className="transition-colors hover:text-primary">
              <HugeiconsIcon icon={icon} size={16} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>

    </div>
  )
}
