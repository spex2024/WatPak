import { PageNav } from "@/components/page-nav"
import { ArrowUpRight } from "lucide-react"

export default function AggregatorPage() {
  return (
    <>
      <PageNav active="/aggregator" />
      <main className="min-h-svh bg-background text-foreground">

        {/* Hero */}
        <section className="flex min-h-svh flex-col justify-center px-6 pt-24 pb-16 sm:px-10 md:px-16 lg:px-24">
          <div className="mx-auto w-full max-w-[1400px]">

            <p className="mb-5 font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
              Partner with WatPak
            </p>

            <h1 className="font-heading text-5xl font-black uppercase leading-[0.85] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]">
              Become an<br />
              Aggregation<br />
              <span className="text-primary">Hub.</span>
            </h1>

            <p className="mt-8 max-w-lg font-heading text-base leading-relaxed text-white/50 sm:text-lg">
              Partner with WatPak as a certified aggregation hub. Receive sorted, weighed waste from our picker network and feed it directly into the recycling economy.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#"
                className="group inline-flex items-center gap-2 bg-primary px-7 py-4 font-heading text-sm font-bold uppercase tracking-tight text-primary-foreground transition-all hover:bg-primary/90"
              >
                Apply as Aggregator
                <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-2 border border-white/20 px-7 py-4 font-heading text-sm font-bold uppercase tracking-tight text-white/70 transition-all hover:border-white hover:text-white"
              >
                ← Back to Home
              </a>
            </div>

            <div className="mt-20 border-t border-white/10 pt-10">
              <p className="font-heading text-xs uppercase tracking-widest text-white/20">
                Full page coming soon — hub requirements, onboarding process, and revenue model.
              </p>
            </div>

          </div>
        </section>

      </main>
    </>
  )
}
