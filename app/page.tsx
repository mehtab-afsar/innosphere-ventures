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
               #f5f5f0 0%,
               #f0f4f2 5%,
               #e8f2f0 10%,
               #d8ede8 15%,
               #c0e5dd 20%,
               #a8ddd2 25%,
               #8ed5c7 30%,
               #7acdc0 35%,
               #5fc0b5 40%,
               #45b3a8 45%,
               #2a9a8e 50%,
               #1e7a70 55%,
               #145f59 60%,
               #0d4a47 65%,
               #083635 70%,
               #052827 75%,
               #031d1f 80%,
               #021419 85%,
               #010d11 90%,
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
