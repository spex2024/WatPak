import Image from "next/image"

const STAKEHOLDERS = [
  { label: "Waste Pickers", href: "/waste-picker" },
  { label: "Waste Generator", href: "/business" },
  { label: "Aggregator",    href: "/aggregator" },
]

export function PageNav({ active }: { active?: string }) {
  return (
    <nav className="fixed left-0 right-0 top-0 z-[60] flex items-center justify-between border-b border-white/10 bg-background/90 px-6 py-4 backdrop-blur-md sm:px-10 md:px-16 lg:px-24">
      <a href="/" className="relative h-10 w-36 sm:h-12 sm:w-44">
        <Image
          src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1777186978/watpack/Yellow_yz973x.png"
          alt="WATPAK"
          fill
          unoptimized
          className="object-contain object-left"
        />
      </a>

      <div className="flex items-center gap-1.5">
        {STAKEHOLDERS.map(({ label, href }) => {
          const isActive = active === href
          return (
            <a
              key={label}
              href={href}
              className={`font-heading text-[10px] font-bold uppercase tracking-tighter px-3 py-2 transition-all lg:px-4 lg:text-xs ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "border border-white/20 text-white/70 hover:border-primary hover:text-primary"
              }`}
            >
              {label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
