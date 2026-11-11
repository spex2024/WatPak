import { PageNav } from "@/components/page-nav"
import { ArrowUpRight } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <PageNav />
      <main className="min-h-svh bg-background text-foreground">

        <section className="mx-auto max-w-[1400px] px-6 pt-32 pb-20 sm:px-10 sm:pt-40 md:px-16 lg:px-24">

          <nav className="p-fade mb-10 flex items-center gap-2">
            <a href="/" className="font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 transition-colors hover:text-white/60">Home</a>
            <span className="font-heading text-[10px] text-white/20">/</span>
            <span className="font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Contact</span>
          </nav>

          <div className="relative flex flex-col gap-4 pb-12 sm:pb-16">
            {/* Bottom rule draws across after the heading */}
            <div className="p-rule absolute inset-x-0 bottom-0 h-px bg-white/10" aria-hidden />
            <p className="p-fade2 font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
              Get In Touch
            </p>
            <h1 className="font-heading text-5xl font-black uppercase leading-[0.85] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="p-line"><span className="block">Contact</span></span>
              <span className="p-line"><span className="block">WatPak.</span></span>
            </h1>
          </div>

          <div className="stagger mt-16 grid grid-cols-1 gap-12 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">

            {/* General */}
            <div data-r="up" className="flex flex-col items-start gap-4">
              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                General Enquiries
              </p>
              <a href="mailto:hello@watpak.com" className="ul-link font-heading text-lg font-bold text-white hover:text-primary">
                hello@watpak.com
              </a>
              <p className="font-heading text-sm text-white/40">
                For partnerships, media, and general questions.
              </p>
            </div>

            {/* Operations */}
            <div data-r="up" className="flex flex-col items-start gap-4">
              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                Operations
              </p>
              <a href="mailto:ops@watpak.com" className="ul-link font-heading text-lg font-bold text-white hover:text-primary">
                ops@watpak.com
              </a>
              <p className="font-heading text-sm text-white/40">
                Pickup scheduling, collections, and logistics.
              </p>
            </div>

            {/* Join */}
            <div data-r="up" className="flex flex-col items-start gap-4">
              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                Join the Network
              </p>
              <a href="mailto:join@watpak.com" className="ul-link font-heading text-lg font-bold text-white hover:text-primary">
                join@watpak.com
              </a>
              <p className="font-heading text-sm text-white/40">
                Waste pickers, businesses, and aggregators.
              </p>
            </div>

          </div>

          {/* CTA */}
          <div data-r="up" className="mt-20 border-t border-white/10 pt-12 sm:mt-24 sm:pt-16">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md font-heading text-base text-white/40 leading-relaxed">
                Based in Accra, Ghana. Serving pickup requests in Accra while we prepare to expand.
              </p>
              <a
                href="/"
                className="group inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 font-heading text-sm font-bold uppercase tracking-tight text-white/70 transition-all hover:border-white hover:text-white"
              >
                ← Back to Home
              </a>
            </div>
          </div>

        </section>
      </main>
    </>
  )
}
