import Image from "next/image"
import { PageNav } from "@/components/page-nav"
import { ArrowUpRight } from "lucide-react"
import { APP_URL } from "@/lib/constants"

const BENEFITS = [
  {
    num: "01",
    title: "Consistent Supply",
    body: "As the WatPak picker network grows, so does your incoming volume. You are not hunting for material. It comes to you on a predictable schedule.",
  },
  {
    num: "02",
    title: "Pre-Sorted at Source",
    body: "Pickers categorise fibre, paper, and cardboard before leaving the collection point. You receive material that is already sorted, reducing your handling time and processing costs.",
  },
  {
    num: "03",
    title: "Verified at Every Step",
    body: "Each delivery arrives with a full digital manifest: waste type, weight, picker ID, and timestamp. Full traceability from source to your gate.",
  },
  {
    num: "04",
    title: "Scale at Your Pace",
    body: "Start with the volume your facility can handle. As your capacity grows, WatPak routes more pickups to your hub. No lock-in, no pressure.",
  },
]

const STEPS = [
  { num: "01", title: "Apply", body: "Submit your facility details, storage capacity, and waste processing capabilities. The process is straightforward." },
  { num: "02", title: "Site Assessment", body: "Our team visits your facility to assess capacity, compliance, and how you fit into the WatPak logistics zone." },
  { num: "03", title: "Onboarding", body: "Your hub is assigned a coverage zone and integrated into the platform. Pickers in your area are connected to your intake." },
  { num: "04", title: "Receive and Move", body: "Start receiving sorted, weighed waste from verified pickers. Sell to downstream processors at current market rates." },
]

export default function AggregatorPage() {
  return (
    <>
      <PageNav active="/aggregator" />
      <main className="bg-background text-foreground">

        {/* Hero — full-bleed image */}
        <section className="relative min-h-svh overflow-hidden">
          <Image
            src="https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto:good,w_1920,c_fill/v1777192075/watpack/scene-9-arrive-aggregator_ft36r9.png"
            alt="WatPak aggregation hub"
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
                <span className="font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Aggregator</span>
              </nav>
              <p className="mb-6 font-heading text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                Partner with WatPak
              </p>
              <h1 className="max-w-3xl font-heading font-black uppercase italic leading-[0.82] tracking-tighter">
                <span className="block text-[2.6rem] text-white sm:text-7xl lg:text-8xl">Become an</span>
                <span className="block text-[1.9rem] text-white/60 sm:text-5xl lg:text-6xl">Aggregation</span>
                <span className="block text-[3.6rem] text-primary sm:text-8xl lg:text-9xl">Hub.</span>
              </h1>
              <p className="mt-8 max-w-xl font-heading text-sm leading-relaxed text-white/60 sm:text-base">
                Aggregation hubs are where collected fibre, paper, and cardboard consolidates before entering the recycling supply chain. If you have the facility and the capacity, WatPak brings the material to your gate. Sorted, weighed, and verified.
              </p>
              <div className="mt-10">
                <a
                  href={APP_URL}
                  className="group inline-flex items-center gap-2 bg-primary px-7 py-4 font-heading text-sm font-bold uppercase tracking-tight text-black transition-all hover:bg-primary/90"
                >
                  Apply as Aggregator
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
                  The Processing<br />Backbone.
                </h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-heading text-base leading-relaxed text-white/55">
                  As a certified WatPak aggregation hub, your facility becomes a central node in the collection network. Pickers deliver their sorted loads to you directly. You receive, consolidate, and move the material to processors or recyclers at scale.
                </p>
                <p className="font-heading text-base leading-relaxed text-white/55">
                  Your hub is assigned a geographic zone. All pickups completed within that zone are routed to you. The digital manifest for every delivery gives you full visibility into what arrives, when, and from whom. Your inventory and compliance records are always current.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-t border-white/10 px-6 py-20 sm:px-10 sm:py-24 md:px-16 lg:px-24">
          <div className="mx-auto max-w-[1400px]">
            <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Why Partner</p>
            <h2 className="mb-16 font-heading text-4xl font-black uppercase leading-[0.88] tracking-tight text-white sm:text-5xl">
              What the<br />Partnership Offers
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

        {/* Partnership steps + requirements + CTA */}
        <section className="border-t border-white/10 px-6 py-20 sm:px-10 sm:py-24 md:px-16 lg:px-24">
          <div className="mx-auto max-w-[1400px]">
            <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-[0.4em] text-primary">The Process</p>
            <h2 className="mb-16 font-heading text-4xl font-black uppercase leading-[0.88] tracking-tight text-white sm:text-5xl">
              How to<br />Partner
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

            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div>
                <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Eligibility</p>
                <h2 className="mb-10 font-heading text-4xl font-black uppercase leading-[0.88] tracking-tight text-white sm:text-5xl">
                  Hub<br />Requirements
                </h2>
                <ul className="space-y-5">
                  {[
                    "Registered waste facility in Ghana with valid EPA certification",
                    "Minimum storage capacity to receive multiple daily deliveries",
                    "Basic weighing and sorting equipment on-site",
                    "Accessible location for picker drop-offs",
                    "An existing or planned downstream offtake arrangement",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="font-heading text-sm leading-relaxed text-white/55">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center">
                <div className="w-full border border-white/10 bg-white/[0.03] p-10">
                  <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Join the Network</p>
                  <h3 className="mb-4 font-heading text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl">
                    Power the<br />Circular Economy.
                  </h3>
                  <p className="mb-8 font-heading text-sm leading-relaxed text-white/45">
                    Aggregation hubs are the backbone of everything WatPak does. Apply today and our team will assess your facility within five business days.
                  </p>
                  <a
                    href={APP_URL}
                    className="group inline-flex items-center gap-2 bg-primary px-7 py-4 font-heading text-sm font-bold uppercase tracking-tight text-black transition-all hover:bg-primary/90"
                  >
                    Apply as Aggregator
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
