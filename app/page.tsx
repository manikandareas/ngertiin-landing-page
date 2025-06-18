"use client" 

import AwardsSection from "../components/sections/AwardsSection"
import CtaSection from "../components/sections/CtaSection"
import FaqSection from "../components/sections/FaqSection"
import FeaturesSection from "../components/sections/FeaturesSection"
import FooterSection from "../components/sections/FooterSection"
import HeaderSection from "../components/sections/HeaderSection"
import HeroSection from "../components/sections/HeroSection"
import PricingSection from "../components/sections/PricingSection"
import TestimonialsSection from "../components/sections/TestimonialsSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50">
      <HeaderSection />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <AwardsSection />
      <CtaSection />
      <FooterSection />
    </div>
  )
}
