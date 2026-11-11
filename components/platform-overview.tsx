const ACTORS = [
  "Waste Generators",
  "Waste Pickers",
  "Recyclers",
  "Manufacturers",
  "Businesses",
]

// The mission quote, split into words so each can light up as the visitor
// scrolls through it (see data-words in components/motion.tsx).
const QUOTE =
  "Watpak connects the entire value chain — from the person collecting waste on the street to the business receiving sustainable packaging — ensuring".split(
    " "
  )
const QUOTE_HIGHLIGHT = "every metric ton is accounted for.".split(" ")

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
              data-r="up"
              className="absolute -left-3 top-0 hidden h-full w-px bg-primary/60 sm:-left-4 sm:block"
              aria-hidden
            />
            <blockquote
              data-words
              className="font-heading text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl md:text-3xl lg:text-[2rem] lg:leading-[1.25]"
            >
              {QUOTE.map((word, i) => (
                <span key={`q-${i}`} data-w>
                  {word}{" "}
                </span>
              ))}
              {QUOTE_HIGHLIGHT.map((word, i) => (
                <span key={`h-${i}`} data-w className="text-primary">
                  {word}{" "}
                </span>
              ))}
            </blockquote>
          </figure>

          {/* Overview copy */}
          <div className="flex flex-col gap-5 border-white/10 lg:col-span-5 lg:border-l lg:pl-12 xl:pl-16">
            <p
              data-r="up"
              className="font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-primary"
            >
              Overview
            </p>
            <h2
              id="overview-heading"
              data-r="lines"
              className="font-heading text-2xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-3xl"
            >
              <span className="line">
                <span>One ecosystem.</span>
              </span>
              <span className="line">
                <span>Full traceability.</span>
              </span>
            </h2>
            <p
              data-r="up"
              data-d="0.1"
              className="max-w-prose text-sm leading-relaxed text-white/60 sm:text-base"
            >
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
              {ACTORS.map((actor, i) => (
                <li
                  key={actor}
                  data-r="up"
                  data-d={(0.15 + i * 0.07).toFixed(2)}
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
