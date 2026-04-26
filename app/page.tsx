import { HeroBanner } from "@/components/hero-banner"
import { HowItWorks } from "@/components/how-it-works"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <HeroBanner />
      <HowItWorks />
      <CtaSection />
      <Footer />
    </>
  )
}
