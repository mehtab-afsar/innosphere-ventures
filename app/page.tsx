"use client";

import { Separator } from "@/components/ui/separator";
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { PortfolioCarousel } from "@/components/sections/PortfolioCarousel";
import { WhyIndia } from "@/components/sections/WhyIndia";
import { WhyNow } from "@/components/sections/WhyNow";
import { WhyUs } from "@/components/sections/WhyUs";
import { OurCollective } from "@/components/sections/OurCollective";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Navigation />
      <Hero />
      <PortfolioCarousel />
      <WhyIndia />
      <Separator className="bg-gray-200 dark:bg-white/10" />
      <WhyNow />
      <Separator className="bg-gray-200 dark:bg-white/10" />
      <WhyUs />
      <Separator className="bg-gray-200 dark:bg-white/10" />
      <OurCollective />
      <CTA />
      <Footer />
    </div>
  );
}
