import type { Metadata } from "next"
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google"

import "./globals.css"

export const metadata: Metadata = {
  title: "WATPAK — From Waste to Resource",
  description:
    "WATPAK connects waste generators with certified waste pickers and aggregators in Ghana. Specialising in fibre, paper, and cardboard waste collection. Schedule a pickup, get your waste weighed on-site, and earn money. Operating in Accra, Kumasi, and Tema.",
  keywords: [
    "waste collection Ghana",
    "get paid for waste",
    "waste management Accra",
    "waste picker Ghana",
    "fibre waste collection Ghana",
    "paper waste collection Ghana",
    "cardboard waste Ghana",
    "fibre recycling Ghana",
    "paper recycling Accra",
    "corrugated waste collection",
    "recycling Ghana",
    "waste to resource",
    "earn from waste",
    "waste pickup Accra",
    "waste pickup Kumasi",
    "waste pickup Tema",
    "solid waste management",
    "plastic waste Ghana",
    "scrap collection Ghana",
    "circular economy Ghana",
    "WatPak",
    "waste aggregator Ghana",
    "SME waste management",
    "sustainable waste Ghana",
    "office paper waste Ghana",
    "packaging waste collection",
  ],
  openGraph: {
    title: "WATPAK — From Waste to Resource",
    description:
      "Ghana's fibre, paper, and waste collection platform. Schedule a pickup, get weighed on-site, and earn money.",
    type: "website",
    locale: "en_GH",
    siteName: "WATPAK",
  },
  twitter: {
    card: "summary_large_image",
    title: "WATPAK — From Waste to Resource",
    description:
      "Ghana's fibre, paper, and waste collection platform. Schedule a pickup, get weighed on-site, and earn money.",
  },
  icons: {
    icon: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1777217085/watpack/favicon_gnnwpg.ico",
  },
}
import { FloatingChat } from "@/components/floating-chat"
import { SitePreloader } from "@/components/site-preloader"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const geistMonoHeading = Geist_Mono({subsets:['latin'],variable:'--font-heading'});

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, "font-mono", jetbrainsMono.variable, geistMonoHeading.variable)}
    >
      <body>
        <ThemeProvider>
          <SitePreloader />
          {children}
          <FloatingChat />
        </ThemeProvider>
      </body>
    </html>
  )
}
