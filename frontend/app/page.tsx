import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MarqueeBanner } from "@/components/marquee-banner"
import { ServicesSection } from "@/components/services-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MarqueeBanner />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  )
}
