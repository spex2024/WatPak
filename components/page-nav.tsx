"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { HugeiconsIcon } from "@hugeicons/react"
import { NewTwitterIcon, Linkedin01Icon, Facebook01Icon, InstagramIcon } from "@hugeicons/core-free-icons"
import { FullScreenMenu } from "@/components/full-screen-menu"

const LINKS = [
  { label: "Home",             href: "/"             },
  { label: "Waste Pickers",    href: "/waste-picker" },
  { label: "Waste Generator",  href: "/business"     },
  { label: "Aggregator",       href: "/aggregator"   },
  { label: "Contact",          href: "/contact"      },
]

const SOCIALS = [
  { icon: NewTwitterIcon, label: "X"         },
  { icon: Linkedin01Icon, label: "LinkedIn"  },
  { icon: Facebook01Icon, label: "Facebook"  },
  { icon: InstagramIcon,  label: "Instagram" },
]

export function PageNav({ active }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-[60] flex items-center justify-between border-b border-white/10 bg-background/90 px-6 py-4 backdrop-blur-md sm:px-10 md:px-16 lg:px-24">

        {/* Logo */}
        <a href="/" className="relative h-10 w-32 shrink-0 sm:h-12 sm:w-40">
          <Image
            src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1777186978/watpack/Yellow_yz973x.png"
            alt="WATPAK"
            fill
            unoptimized
            className="object-contain object-left"
          />
        </a>

        {/* Nav links — hidden below md */}
        <div className="hidden items-center gap-7 md:flex lg:gap-10">
          {LINKS.map(({ label, href }) => {
            const isActive = active === href
            return (
              <a
                key={href}
                href={href}
                className={`relative font-heading text-[11px] font-bold uppercase tracking-[0.18em] transition-colors ${
                  isActive ? "text-primary" : "text-white/45 hover:text-white"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-[17px] left-0 h-px w-full bg-primary" />
                )}
              </a>
            )
          })}
        </div>

        {/* Mobile: Get Started button — opens full-screen menu */}
        <button
          onClick={() => setMenuOpen(true)}
          className="group flex items-center gap-1.5 bg-primary px-3.5 py-2 font-heading text-[9px] font-bold uppercase tracking-tighter text-black transition-all hover:bg-primary/90 md:hidden"
        >
          Get Started
          <ArrowUpRight size={11} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>

        {/* Desktop: Social icons */}
        <div className="hidden items-center gap-3.5 md:flex">
          {SOCIALS.map(({ icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="text-white/30 transition-colors hover:text-primary"
            >
              <HugeiconsIcon icon={icon} size={15} strokeWidth={1.5} />
            </a>
          ))}
        </div>

      </nav>

      <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
