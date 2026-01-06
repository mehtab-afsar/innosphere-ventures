"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { PortfolioCarousel } from "@/components/sections/PortfolioCarousel";
import { WhyIndia } from "@/components/sections/WhyIndia";
import { WhyNow } from "@/components/sections/WhyNow";
import { WhyUs } from "@/components/sections/WhyUs";
import { Footer } from "@/components/sections/Footer";
import { OceanGradient } from "@/components/OceanGradient";

export default function Home() {
  return (
    <OceanGradient variant="landing">
      <Navigation />
      <Hero />
      <PortfolioCarousel />
      <WhyIndia />
      <WhyNow />
      <WhyUs />
      <Footer />
    </OceanGradient>
  );
}
