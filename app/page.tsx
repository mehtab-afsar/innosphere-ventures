"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <Hero />
      <Footer />
    </div>
  );
}
