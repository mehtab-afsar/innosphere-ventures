"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/sections/Footer";
import { OceanGradient } from "@/components/OceanGradient";

export default function Home() {
  return (
    <OceanGradient variant="landing">
      <Navigation />
      <Hero />
      <Footer />
    </OceanGradient>
  );
}
