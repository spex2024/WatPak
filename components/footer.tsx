import Image from "next/image"
import { SocialLinks } from "@/components/social-links"
import { APP_URL } from "@/lib/constants"

const LINK_COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Home", href: "/" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Get Started", href: APP_URL, external: true },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Ecosystem",
    links: [
      { label: "Waste Pickers", href: "/waste-picker" },
      { label: "Waste Generator", href: "/business" },
      { label: "Aggregators", href: "/aggregator" },
      { label: "Join the Network", href: APP_URL, external: true },
    ],
  },
  {
    heading: "Coverage",
    links: [
      { label: "Accra", href: "/contact" },
      { label: "Pickup Requests", href: "/contact" },
      { label: "Waste Generator Enquiry", href: "/contact" },
      { label: "Partnerships", href: "/contact" },
    ],
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 md:px-16 lg:px-24">

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:py-20 md:grid-cols-[1fr_auto] md:gap-16 lg:grid-cols-[1fr_auto] lg:py-24">

          {/* Left — logo + tagline + socials */}
          <div data-r="up" className="flex flex-col gap-6">
            <div className="relative h-24 w-80 sm:h-28 sm:w-96">
              <Image
                src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1777186978/watpack/Yellow_yz973x.png"
                alt="WATPAK"
                fill
                unoptimized
                className="object-contain object-left"
              />
            </div>

            <p className="max-w-[220px] font-heading text-sm leading-relaxed text-white/70">
              From waste to resource.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-5 text-white/60">
              <SocialLinks size={20} className="soc hover:text-primary" />
            </div>
          </div>

          {/* Right — link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-14">
            {LINK_COLUMNS.map(({ heading, links }, i) => (
              <div
                key={heading}
                data-r="up"
                data-d={(0.08 + i * 0.08).toFixed(2)}
                className="flex flex-col gap-4"
              >
                <p className="font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                  {heading}
                </p>
                <ul className="flex flex-col gap-3">
                  {links.map(({ label, href, external }) => (
                    <li key={label}>
                      <a
                        href={href}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="ul-link font-heading text-sm text-white/70 hover:text-white"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-2 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading text-[10px] uppercase tracking-widest text-white/55">
            © {year} WatPak. All rights reserved.
          </p>
          <p className="font-heading text-[10px] uppercase tracking-widest text-white/55">
            developed by{" "}
            <a
              href="https://dercolbags.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-primary"
            >
              dercolbags packaging company limited
            </a>
          </p>
        </div>

      </div>
    </footer>
  )
}
