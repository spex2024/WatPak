import Image from "next/image"
import { PageNav } from "@/components/page-nav"
import { ArrowUpRight } from "lucide-react"
import { APP_URL } from "@/lib/constants"

const BENEFITS = [
  {
    num: "01",
    title: "Earn on Your Own Terms",
    body: "You choose when and where you work. Accept pickups that fit your schedule, your route, and your capacity. No fixed shifts, no supervisor.",
  },
  {
    num: "02",
    title: "Paid for Every Kilogram",
    body: "Your income is directly tied to what you collect. The more you pick up, the more you earn. Real-time rates and no hidden deductions.",
  },
  {
    num: "03",
    title: "Every Job Is Protected",
    body: "Pickups are confirmed, weighed, and logged digitally before you leave the site. Your record is clear and your earnings are never in dispute.",
  },
  {
    num: "04",
    title: "Money Straight to Your Phone",
    body: "Every verified pickup updates your WatPak dashboard in real time. See your metrics, track your collection history, and monitor what you have earned.",
  },
]

const STEPS = [
  { num: "01", title: "Apply", body: "Submit your details and area of operation. The process takes less than five minutes." },
  { num: "02", title: "Get Verified", body: "Complete a short onboarding session and receive your official WatPak Picker ID." },
  { num: "03", title: "Track Your Earnings", body: "Accept jobs near you, collect and weigh on-site. Every pickup is logged to your dashboard instantly so you can see exactly what you have earned." },
]

export default function WastePickerPage() {
  return (
    <>
      <PageNav active="/waste-picker" />
      <main className="bg-background text-foreground">

        {/* Hero — full-bleed image */}
        <section className="relative min-h-svh overflow-hidden">
          <Image
            src="https://res.cloudinary.com/ddwet1dzj/image/upload/f_auto,q_auto:good,w_1920,c_fill/v1777192078/watpack/scene-6-arrived-weighed_zgra1u.png"
            alt="WatPak waste picker at work"
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
                <span className="font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Waste Pickers</span>
              </nav>
              <p className="mb-6 font-heading text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                Join the Network
              </p>
              <h1 className="max-w-3xl font-heading font-black uppercase italic leading-[0.82] tracking-tighter">
                <span className="block text-[3rem] text-white sm:text-7xl lg:text-8xl">Get Paid</span>
                <span className="block text-[1.9rem] text-white/60 sm:text-5xl lg:text-6xl">to Pick Up</span>
                <span className="block text-[3.6rem] text-primary sm:text-8xl lg:text-9xl">Waste.</span>
              </h1>
              <p className="mt-8 max-w-xl font-heading text-sm leading-relaxed text-white/60 sm:text-base">
                Waste pickers are the most important link in the WatPak chain. You are the ones who move waste off the street and into a working system. Every pickup is logged to your dashboard. Your earnings are tracked and visible after every collection.
              </p>
              <div className="mt-10">
                <a
                  href={APP_URL}
                  className="group inline-flex items-center gap-2 bg-primary px-7 py-4 font-heading text-sm font-bold uppercase tracking-tight text-black transition-all hover:bg-primary/90"
                >
                  Apply to Join
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
                  The Backbone<br />of the System.
                </h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-heading text-base leading-relaxed text-white/55">
                  As a WatPak picker, you respond to waste pickup requests from homes, shops, and businesses in your area. You travel to the site, collect the waste, weigh it on the spot using the WatPak app, and deliver it to the nearest aggregation hub.
                </p>
                <p className="font-heading text-base leading-relaxed text-white/55">
                  Every pickup is recorded digitally. Every kilogram is counted. Your contribution is transparent, verified, and rewarded. Building a track record that grows your standing in the network over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-t border-white/10 px-6 py-20 sm:px-10 sm:py-24 md:px-16 lg:px-24">
          <div className="mx-auto max-w-[1400px]">
            <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Why Join</p>
            <h2 className="mb-16 font-heading text-4xl font-black uppercase leading-[0.88] tracking-tight text-white sm:text-5xl">
              What Being<br />a Picker Means
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

        {/* Steps */}
        <section className="border-t border-white/10 px-6 py-20 sm:px-10 sm:py-24 md:px-16 lg:px-24">
          <div className="mx-auto max-w-[1400px]">
            <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Getting Started</p>
            <h2 className="mb-16 font-heading text-4xl font-black uppercase leading-[0.88] tracking-tight text-white sm:text-5xl">
              Three Steps<br />to Your First Job
            </h2>
            <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
              {STEPS.map(({ num, title, body }) => (
                <div key={num} className="bg-background p-8 sm:p-10">
                  <div className="mb-8 font-heading text-[5rem] font-black leading-none text-primary/20 sm:text-[6rem]">{num}</div>
                  <div className="border-l-2 border-primary pl-5">
                    <h3 className="mb-3 font-heading text-2xl font-black uppercase tracking-tight text-white">{title}</h3>
                    <p className="font-heading text-sm leading-relaxed text-white/45">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements + CTA */}
        <section className="border-t border-white/10 px-6 py-20 sm:px-10 sm:py-24 md:px-16 lg:px-24">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div>
                <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Requirements</p>
                <h2 className="mb-10 font-heading text-4xl font-black uppercase leading-[0.88] tracking-tight text-white sm:text-5xl">
                  What You<br />Need
                </h2>
                <ul className="space-y-5">
                  {[
                    "Valid Ghana ID: National ID, Voter ID, or Passport",
                    "Smartphone with internet access",
                    "Any means of transport: bicycle, motorbike, or on foot",
                    "Willingness to complete a short onboarding session",
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
                  <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Ready?</p>
                  <h3 className="mb-4 font-heading text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl">
                    Start Earning<br />Today.
                  </h3>
                  <p className="mb-8 font-heading text-sm leading-relaxed text-white/45">
                    Applications take less than five minutes. Onboarding is done within 48 hours. Your first pickup could be this week.
                  </p>
                  <a
                    href={APP_URL}
                    className="group inline-flex items-center gap-2 bg-primary px-7 py-4 font-heading text-sm font-bold uppercase tracking-tight text-black transition-all hover:bg-primary/90"
                  >
                    Apply to Join
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
