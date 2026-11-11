import { HugeiconsIcon } from "@hugeicons/react"
import {
  Linkedin01Icon,
  Facebook01Icon,
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons"

export const SOCIAL_LINKS = [
  {
    icon: Linkedin01Icon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/watpak",
  },
  {
    icon: Facebook01Icon,
    label: "Facebook",
    href: "https://www.facebook.com/watpak",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/watpak.gh/",
  },
  {
    icon: TiktokIcon,
    label: "TikTok",
    href: "https://www.tiktok.com/@watpakgh",
  },
  {
    icon: YoutubeIcon,
    label: "YouTube",
    href: "https://www.youtube.com/@watpak",
  },
]

/** The WatPak social icons, as a fragment so each caller keeps its own layout. */
export function SocialLinks({
  size,
  className,
  baseDelay,
}: {
  size: number
  className?: string
  /** When set, each icon fades in one after another, starting this many seconds after the intro. */
  baseDelay?: number
}) {
  return (
    <>
      {SOCIAL_LINKS.map(({ icon, label, href }, i) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={className}
          style={
            baseDelay === undefined
              ? undefined
              : {
                  animationDelay: `calc(var(--intro) + ${(baseDelay + i * 0.1).toFixed(2)}s)`,
                }
          }
        >
          <HugeiconsIcon icon={icon} size={size} strokeWidth={1.5} />
        </a>
      ))}
    </>
  )
}
