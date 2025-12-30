"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { PortfolioCarousel } from "@/components/sections/PortfolioCarousel";
import { WhyIndia } from "@/components/sections/WhyIndia";
import { WhyNow } from "@/components/sections/WhyNow";
import { WhyUs } from "@/components/sections/WhyUs";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Ocean Gradient Background - Absolute position covering entire page */}
      <div className="ocean-gradient-container absolute top-0 left-0 w-full min-h-full z-0"
           style={{
             background: `linear-gradient(
               to bottom,
               #e0f7ff 0%,
               #87ceeb 5%,
               #5ba4c9 10%,
               #3d8fb9 15%,
               #2a7fa6 20%,
               #1a6f8f 30%,
               #0d5f7f 40%,
               #084d66 50%,
               #05394d 60%,
               #021a28 80%,
               #000508 100%
             )`
           }}
      />

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <PortfolioCarousel />
        <WhyIndia />
        <WhyNow />
        <WhyUs />
        <Footer />
      </div>
    </div>
  );
}
