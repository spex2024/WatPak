"use client"

import { useState } from "react"
import { ArrowUpRight, Mail } from "lucide-react"
import { NewsletterModal } from "@/components/newsletter-modal"
import { FullScreenMenu } from "@/components/full-screen-menu"

export function CtaSection() {
  const [modalOpen, setModalOpen]   = useState(false)
  const [menuOpen,  setMenuOpen]    = useState(false)

  return (
    <>
      <section
        className="px-6 py-20 sm:px-10 sm:py-24 md:px-16 md:py-28 lg:px-24 lg:py-32"
        style={{ backgroundColor: "#c69c6d" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">

            {/* Headline */}
            <div className="flex flex-col gap-5">
              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-black/50">
                Get Started Today
              </p>
              <h2 className="font-heading text-5xl font-black uppercase leading-[0.85] tracking-tight text-black sm:text-6xl lg:text-7xl xl:text-8xl">
                Your waste<br />is worth<br />money.
              </h2>
            </div>

            {/* Sub + CTAs */}
            <div className="flex flex-col gap-6 md:items-end">
              <p className="max-w-xs font-heading text-sm font-medium leading-relaxed text-black/60 md:text-right">
                Schedule your first pickup today. We collect, weigh, and log every kilogram to your dashboard. No sorting. No trips.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setMenuOpen(true)}
                  className="group inline-flex items-center gap-2 bg-black px-7 py-4 font-heading text-sm font-bold uppercase tracking-tight text-white transition-all hover:bg-[#142d26]"
                >
                  Earn Now
                  <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 border-2 border-black px-7 py-4 font-heading text-sm font-bold uppercase tracking-tight text-black transition-all hover:bg-black hover:text-white"
                >
                  <Mail size={15} />
                  Subscribe to Newsletter
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <NewsletterModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <FullScreenMenu  isOpen={menuOpen}  onClose={() => setMenuOpen(false)}  />
    </>
  )
}
