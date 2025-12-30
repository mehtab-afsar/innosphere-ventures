"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { PortfolioCarousel } from "@/components/sections/PortfolioCarousel";
import { WhyIndia } from "@/components/sections/WhyIndia";
import { WhyNow } from "@/components/sections/WhyNow";
import { WhyUs } from "@/components/sections/WhyUs";
import { Footer } from "@/components/sections/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Move the gradient background as you scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const gradient = document.querySelector('.ocean-gradient-container');
      if (gradient) {
        (gradient as HTMLElement).style.transform = `translateY(-${scrolled}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 relative">
      {/* Ocean Gradient Background - Fixed position with scroll effect */}
      <div className="ocean-gradient-container fixed top-0 left-0 w-full z-0"
           style={{
             height: '400vh',
             background: `linear-gradient(
               to bottom,
               #e0f7ff 0%,
               #87ceeb 10%,
               #5ba4c9 20%,
               #3d8fb9 30%,
               #2a7fa6 40%,
               #1a6f8f 50%,
               #0d5f7f 60%,
               #084d66 70%,
               #05394d 80%,
               #021a28 90%,
               #000508 100%
             )`,
             willChange: 'transform'
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
