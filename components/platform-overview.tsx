const ACTORS = [
  "Waste Generators",
  "Waste Pickers",
  "Recyclers",
  "Manufacturers",
  "Businesses",
]

export function PlatformOverview() {
  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="border-t border-white/10 bg-background"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="grid gap-12 py-16 sm:gap-14 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">

          {/* Pull quote — value chain mission */}
          <figure className="relative lg:col-span-7">
            <div
              className="absolute -left-3 top-0 hidden h-full w-px bg-primary/60 sm:-left-4 sm:block"
              aria-hidden
            />
            <blockquote className="font-heading text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl md:text-3xl lg:text-[2rem] lg:leading-[1.25]">
              Watpak connects the entire value chain&nbsp;&mdash; from the person
              collecting waste on the street to the business receiving sustainable
              packaging&nbsp;&mdash; ensuring{" "}
              <span className="text-primary">every metric ton is accounted for.</span>
            </blockquote>
          </figure>

          {/* Overview copy */}
          <div className="flex flex-col gap-5 border-white/10 lg:col-span-5 lg:border-l lg:pl-12 xl:pl-16">
            <p className="font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
              Overview
            </p>
            <h2
              id="overview-heading"
              className="font-heading text-2xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-3xl"
            >
              One ecosystem.<br />Full traceability.
            </h2>
            <p className="max-w-prose text-sm leading-relaxed text-white/60 sm:text-base">
              Watpak is a waste-to-packaging digital platform that connects waste
              generators, waste pickers, recyclers, manufacturers, and businesses
              in one seamless ecosystem, ensuring end-to-end traceability and
              circularity.
            </p>

            {/* Value chain actors */}
            <ul
              className="mt-1 flex flex-wrap gap-2"
              aria-label="Connected ecosystem participants"
            >
              {ACTORS.map((actor) => (
                <li
                  key={actor}
                  className="border border-white/15 bg-white/[0.03] px-3 py-1.5 font-heading text-[9px] font-bold uppercase tracking-[0.12em] text-white/50 sm:text-[10px]"
                >
                  {actor}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
