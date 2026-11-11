"use client"

import { useState } from "react"
import { ArrowUpRight, Mail } from "lucide-react"
import { NewsletterModal } from "@/components/newsletter-modal"
import { APP_URL } from "@/lib/constants"

export function CtaSection() {
  const [modalOpen, setModalOpen] = useState(false)

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
              <p
                data-r="up"
                className="font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-black/50"
              >
                Get Started Today
              </p>
              <h2
                data-r="lines"
                className="font-heading text-5xl font-black uppercase leading-[0.85] tracking-tight text-black sm:text-6xl lg:text-7xl xl:text-8xl"
              >
                <span className="line">
                  <span>Your waste</span>
                </span>
                <span className="line">
                  <span>is worth</span>
                </span>
                <span className="line">
                  <span>money.</span>
                </span>
              </h2>
            </div>

            {/* Sub + CTAs */}
            <div className="flex flex-col gap-6 md:items-end">
              <p
                data-r="up"
                data-d="0.15"
                className="max-w-xs font-heading text-sm font-medium leading-relaxed text-black/60 md:text-right"
              >
                Schedule your first pickup today. We collect, weigh, and log every kilogram to your dashboard. No sorting. No trips.
              </p>
              <div data-r="up" data-d="0.28" className="flex flex-wrap gap-3">
                <a
                  data-magnetic
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ "--fill": "#142d26" } as React.CSSProperties}
                  className="btn-fill group inline-flex items-center gap-2 bg-black px-7 py-4 font-heading text-sm font-bold uppercase tracking-tight text-white"
                >
                  Earn Now
                  <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <button
                  onClick={() => setModalOpen(true)}
                  style={{ "--fill": "#000000" } as React.CSSProperties}
                  className="btn-fill inline-flex items-center gap-2 border-2 border-black px-7 py-4 font-heading text-sm font-bold uppercase tracking-tight text-black hover:text-white"
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
    </>
  )
}
