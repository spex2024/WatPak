const COPIES = 6

export function TaglineMarquee() {
  return (
    <div className="overflow-hidden bg-primary py-4 sm:py-5">
      <div className="flex w-max animate-[marquee_18s_linear_infinite]">
        {Array.from({ length: COPIES }).map((_, i) => (
          <div key={i} className="flex items-center gap-6 pr-10 sm:pr-14">
            <span className="font-heading text-lg font-black uppercase tracking-tight text-primary-foreground sm:text-xl md:text-2xl">
              From Waste to Resource.
            </span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-foreground/40" />
          </div>
        ))}
      </div>
    </div>
  )
}
