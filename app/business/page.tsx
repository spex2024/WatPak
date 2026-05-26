import Image from "next/image"
import { PageNav } from "@/components/page-nav"
import { ArrowUpRight } from "lucide-react"
import { APP_URL } from "@/lib/constants"

const BENEFITS = [
  {
    num: "01",
    title: "Zero Logistics Burden",
    body: "You do not organise transport, find buyers, or manage disposal. We come to you, handle the collection, and take care of everything downstream.",
  },
  {
    num: "02",
    title: "Full Transparency",
    body: "Your waste is weighed in front of you at the point of collection. You see the numbers before anything moves. No estimates, no disputes.",
  },
  {
    num: "03",
    title: "Revenue, Not a Cost",
    body: "What you once paid to dispose of now generates income. Your waste becomes a recurring revenue stream directly tied to volume.",
  },
  {
    num: "04",
    title: "Any Scale Welcome",
    body: "Whether you produce a few bags a week or tonnes a month, WatPak works for you. We match pickup frequency to your actual output.",
  },
]

const WASTE_TYPES = [
  {
    title: "Fibre Waste",
    body: "Office paper, newspapers, books, mixed paper packaging, and flat or corrugated cardboard from deliveries, shipping, and storage.",
    soon: false,
  },
  { title: "Plastics", body: "PET bottles, HDPE containers, and food-grade flexible packaging.", soon: true },
  { title: "E-Waste", body: "Discarded electronics, cables, batteries, and office IT equipment.", soon: true },
  { title: "Metal & Scrap", body: "Aluminium cans, scrap metal, and light ferrous materials.", soon: true },
]

const STEPS = [
  { num: "01", title: "Register", body: "Create your business profile and tell us your waste type, volume, and how often you need a pickup." },
  { num: "02", title: "Schedule", body: "Request a pickup through the app or by phone. We confirm within the hour and come to you." },
  { num: "03", title: "Weighed On-Site", body: "The picker weighs everything in your presence. You approve the figures before the pickup is recorded." },
  { num: "04", title: "See Your Earnings", body: "Your pickup is logged instantly. View your earnings, collection history, and metrics on your WatPak dashboard." },
]

export default function BusinessPage() {
  return (
    <>
      <PageNav active="/business" />
      <main className="bg-background text-foreground">

        {/* Hero — full-bleed image */}
        <section className="relative min-h-svh overflow-hidden">
          <Image
            src="https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto:good,w_1920,c_fill/v1777192234/watpack/scene-2-request-pickup_hqdm3h.png"
            alt="Waste generator scheduling a pickup"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

          <div className="relative flex min-h-svh flex-col justify-end px-6 pb-20 pt-32 sm:px-10 md:px-16 lg:px-24">
            <div className="mx-auto w-full max-w-[1400px]">
              <nav className="mb-8 flex items-center gap-2">
                <a href="/" className="font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 transition-colors hover:text-white/60">Home</a>
                <span className="font-heading text-[10px] text-white/20">/</span>
                <span className="font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Waste Generator</span>
              </nav>
              <p className="mb-6 font-heading text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                For Waste Generators
              </p>
              <h1 className="max-w-3xl font-heading font-black uppercase italic leading-[0.82] tracking-tighter">
                <span className="block text-[2.8rem] text-white sm:text-7xl lg:text-8xl">Turn Your</span>
                <span className="block text-[1.9rem] text-white/60 sm:text-5xl lg:text-6xl">Waste Into</span>
                <span className="block text-[3.6rem] text-primary sm:text-8xl lg:text-9xl">Revenue.</span>
              </h1>
              <p className="mt-8 max-w-xl font-heading text-sm leading-relaxed text-white/60 sm:text-base">
                Businesses generate waste every day. Most pay to get rid of it. WatPak turns that cost into income. No logistics, no disruption to your operations, and full transparency on every pickup.
              </p>
              <div className="mt-10">
                <a
                  href={APP_URL}
                  className="group inline-flex items-center gap-2 bg-primary px-7 py-4 font-heading text-sm font-bold uppercase tracking-tight text-black transition-all hover:bg-primary/90"
                >
                  Register as a Waste Generator
                  <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Role description */}
        <section className="border-t border-white/10 px-6 py-20 sm:px-10 sm:py-24 md:px-16 lg:px-24">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
              <div>
                <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Your Role</p>
                <h2 className="font-heading text-4xl font-black uppercase leading-[0.88] tracking-tight text-white sm:text-5xl">
                  Where the<br />Chain Begins.
                </h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-heading text-base leading-relaxed text-white/55">
                  Waste generators are where recyclable material enters the system. Whether you run a market stall, a printing office, a warehouse, or a manufacturing floor. The paper, cardboard, fibre, and packaging you produce has real value.
                </p>
                <p className="font-heading text-base leading-relaxed text-white/55">
                  WatPak connects you directly to a verified picker who collects on your schedule, weighs on-site, and ensures your waste moves into a certified aggregation hub. Your earnings appear on your dashboard after every pickup. The material gets recycled. Nothing goes to landfill.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What we collect */}
        <section className="border-t border-white/10 px-6 py-20 sm:px-10 sm:py-24 md:px-16 lg:px-24">
          <div className="mx-auto max-w-[1400px]">
            <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-[0.4em] text-primary">What We Collect</p>
            <h2 className="mb-16 font-heading text-4xl font-black uppercase leading-[0.88] tracking-tight text-white sm:text-5xl">
              Waste Types<br />We Accept
            </h2>
            <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {WASTE_TYPES.map(({ title, body, soon }, i) => (
                <div key={title} className={`group relative bg-background p-8 transition-colors hover:bg-white/[0.03] ${soon ? "opacity-50" : ""}`}>
                  {soon && (
                    <span className="absolute right-4 top-4 bg-primary/20 border border-primary/40 px-2.5 py-1 font-heading text-[9px] font-bold uppercase tracking-[0.25em] text-primary">
                      Coming Soon
                    </span>
                  )}
                  <span className="mb-6 block font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-4 font-heading text-xl font-black uppercase leading-tight tracking-tight text-white">{title}</h3>
                  <p className="font-heading text-sm leading-relaxed text-white/45">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-t border-white/10 px-6 py-20 sm:px-10 sm:py-24 md:px-16 lg:px-24">
          <div className="mx-auto max-w-[1400px]">
            <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Why WatPak</p>
            <h2 className="mb-16 font-heading text-4xl font-black uppercase leading-[0.88] tracking-tight text-white sm:text-5xl">
              What You<br />Get
            </h2>
            <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {BENEFITS.map(({ num, title, body }) => (
                <div key={num} className="group bg-background p-8 transition-colors hover:bg-white/[0.03]">
                  <span className="mb-6 block font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-primary">{num}</span>
                  <h3 className="mb-4 font-heading text-xl font-black uppercase leading-tight tracking-tight text-white">{title}</h3>
                  <p className="font-heading text-sm leading-relaxed text-white/45">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works + CTA */}
        <section className="border-t border-white/10 px-6 py-20 sm:px-10 sm:py-24 md:px-16 lg:px-24">
          <div className="mx-auto max-w-[1400px]">
            <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-[0.4em] text-primary">The Process</p>
            <h2 className="mb-16 font-heading text-4xl font-black uppercase leading-[0.88] tracking-tight text-white sm:text-5xl">
              How It<br />Works
            </h2>
            <div className="mb-20 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map(({ num, title, body }) => (
                <div key={num} className="bg-background p-8">
                  <div className="mb-8 font-heading text-[5rem] font-black leading-none text-primary/20 sm:text-[6rem]">{num}</div>
                  <div className="border-l-2 border-primary pl-5">
                    <h3 className="mb-3 font-heading text-xl font-black uppercase tracking-tight text-white">{title}</h3>
                    <p className="font-heading text-sm leading-relaxed text-white/45">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-white/10 bg-white/[0.03] p-10 lg:p-14">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
                <div>
                  <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Get Started</p>
                  <h3 className="font-heading text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl">
                    Your Waste<br />Has Value.
                  </h3>
                </div>
                <div className="flex flex-col justify-between gap-8">
                  <p className="font-heading text-sm leading-relaxed text-white/45">
                    Stop treating waste as a cost. Register today and we will schedule your first pickup within 24 hours. No commitment, no minimum volume required.
                  </p>
                  <a
                    href={APP_URL}
                    className="group inline-flex w-fit items-center gap-2 bg-primary px-7 py-4 font-heading text-sm font-bold uppercase tracking-tight text-black transition-all hover:bg-primary/90"
                  >
                    Register Now
                    <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
