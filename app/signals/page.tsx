"use client";

import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { OceanGradient } from "@/components/OceanGradient";
import { ParticleSphere } from "@/components/ParticleSphere";
import { Heart, Battery, TestTube, Droplets, Leaf, Target, Lightbulb, Shield, Users, ArrowLeft, TrendingUp, X, Linkedin, Link2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const signalDimensions = [
  { icon: Target, label: "Market Readiness", description: "Is the market ready to adopt this now?" },
  { icon: TrendingUp, label: "Market Potential", description: "How big can this become if it works?" },
  { icon: Lightbulb, label: "Innovation & Technology Depth", description: "Is the technology truly novel, hard, and defensible?" },
  { icon: Shield, label: "IP Defensibility & Systemic Impact", description: "Does the solution create durable advantage and system-level impact?" },
  { icon: Users, label: "Team Strength & Execution Capacity", description: "Is this the team that can execute fast and win?" },
];

const companies = [
  {
    icon: Heart,
    name: "Inochi Care",
    tagline: "On a mission to make advanced wound care as common as a bandage.",
    sector: "Healthcare",
    stage: "Pre-Seed",
    status: "Active",
    year: "2025",
  },
  {
    icon: Droplets,
    name: "Cluix",
    tagline: "Building the Stripe of water governance.",
    sector: "Climate Tech",
    stage: "Pre-Seed",
    status: "Active",
    year: "2025",
  },
  {
    icon: TestTube,
    name: "Pragmatech",
    tagline: "Making cervical cancer screening as accessible as a pregnancy test.",
    sector: "Healthcare",
    stage: "Pre-Seed",
    status: "Active",
    year: "2025",
  },
  {
    icon: Battery,
    name: "Meine Electric",
    tagline: "Building the Duracell of India's clean energy future.",
    sector: "Clean Energy",
    stage: "Pre-Seed",
    status: "Active",
    year: "2025",
  },
  {
    icon: Leaf,
    name: "Gocarin Industries",
    tagline: "Becoming the Coca-Cola of sustainable livestock feed.",
    sector: "AgriTech",
    stage: "Pre-Seed",
    status: "Active",
    year: "2025",
  },
];

export default function SignalsPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [hoveredSignal, setHoveredSignal] = useState<number | null>(null);
  const [expandedCompany, setExpandedCompany] = useState<number | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".fade-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <OceanGradient variant="technical">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-[#0a1128]/60 hover:text-[#0a1128] transition-colors duration-200 mb-8 group absolute left-0 lg:left-0 -top-12">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-extralight text-sm">Back</span>
          </Link>
          <Badge className="mb-6 font-light bg-[#0a1128]/10 text-[#0a1128] border-[#0a1128]/20 hover:bg-[#0a1128]/20 fade-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            Signals
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extralight mb-8 fade-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "100ms" }}>
            <span className="text-[#0a1128]">The</span> <span className="text-[#ff6b5a]">Edge Alpha</span>
            <br />
            <span className="font-light text-[#2a9a8e]">Company Universe</span>
          </h1>
          <p className="text-xl font-extralight text-[#0a1128]/80 max-w-3xl fade-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "200ms" }}>
            Our portfolio begins long before we invest. Using the Edge Alpha scoring engine, we map India's frontier innovation universe, surface high-signal founders, and identify companies with systemic potential.
          </p>
        </div>
      </section>

      {/* Edge Alpha Signals Explanation */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extralight mb-6 fade-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <span className="text-[#ff6b5a]">Edge Alpha</span> <span className="font-light text-[#2a9a8e]">Signals</span>
            </h2>
            <p className="text-xl font-extralight text-[#f5f5f0]/80 max-w-3xl mx-auto mb-4 fade-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "100ms" }}>
              The Edge Alpha scoring model separates signal from noise.
            </p>
            <p className="text-lg font-extralight text-[#f5f5f0]/60 max-w-3xl mx-auto fade-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "200ms" }}>
              We evaluate every company across five systemic signal dimensions.
            </p>
          </div>

          {/* Signal Dimensions Circle */}
          <div className="fade-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "300ms" }}>
            {/* Desktop: Circle Layout */}
            <div className="hidden lg:block relative w-[850px] h-[850px] mx-auto">
              {/* Particle Sphere inside circle */}
              <div className="absolute inset-[120px] pointer-events-none opacity-40 dark:opacity-60">
                <ParticleSphere
                  pulseAngle={hoveredSignal !== null ? (hoveredSignal * 72 - 90) * (Math.PI / 180) : null}
                />
              </div>

              {/* Center text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center justify-center z-10">
                <p className="text-3xl font-extralight text-[#ff6b5a]/80">Edge Alpha</p>
                <p className="text-5xl font-light text-[#2a9a8e]">Signals</p>
              </div>

              {/* Circle ring - matches radius of 340px from center */}
              <div className="absolute inset-[65px] rounded-full border border-gray-200 dark:border-white/10"></div>

              {signalDimensions.map((dimension, index) => {
                const Icon = dimension.icon;
                const angle = (index * 72 - 90) * (Math.PI / 180);
                const radius = 340;
                const x = Math.cos(angle) * radius;
                let y = Math.sin(angle) * radius;

                // Custom vertical offset for specific items
                // Index 2: "Innovation & Technology Depth", Index 3: "IP Defensibility & Systemic Impact"
                const yOffset = index === 2 ? 20 : index === 3 ? 20 : 0;

                // Determine if signal is on left or right side of circle
                const isOnLeftSide = x < 0;

                return (
                  <div
                    key={index}
                    className={`absolute w-[220px] text-center transition-all duration-500 cursor-pointer ${hoveredSignal === index ? "scale-110" : ""}`}
                    style={{
                      left: `calc(50% + ${x}px - 110px)`,
                      top: `calc(50% + ${y + yOffset}px - 70px)`,
                    }}
                    onMouseEnter={() => setHoveredSignal(index)}
                    onMouseLeave={() => setHoveredSignal(null)}
                  >
                    <div className={`p-5 bg-white/5 rounded-full border border-white/20 w-fit mx-auto mb-4 transition-all duration-300 ${hoveredSignal === index ? "bg-white/10 border-white/40" : ""}`}>
                      <Icon className="w-10 h-10 text-[#f5f5f0]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base font-medium text-[#f5f5f0] mb-2 leading-tight">{dimension.label}</h3>
                    <p className={`text-sm font-extralight text-[#f5f5f0]/60 leading-snug transition-opacity duration-300 ${hoveredSignal === index ? "opacity-0" : "opacity-100"}`}>{dimension.description}</p>

                    {/* Hover tooltip - appears on same side */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-[280px] transition-all duration-300 ${
                        hoveredSignal === index ? "opacity-100 visible" : "opacity-0 invisible"
                      } ${isOnLeftSide ? "right-full mr-8 text-right" : "left-full ml-8 text-left"}`}
                    >
                      <p className="text-xl font-light text-[#f5f5f0] leading-relaxed">
                        {dimension.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile/Tablet: List Layout */}
            <div className="lg:hidden space-y-8">
              {signalDimensions.map((dimension, index) => {
                const Icon = dimension.icon;
                return (
                  <div key={index} className="flex items-start gap-5 group">
                    <div className="p-4 bg-white/5 rounded-full border border-white/20 shrink-0 group-hover:bg-white/10 transition-all duration-300">
                      <Icon className="w-8 h-8 text-[#f5f5f0]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[#f5f5f0] mb-1">{dimension.label}</h3>
                      <p className="text-base font-extralight text-[#f5f5f0]/70">{dimension.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </OceanGradient>
  );
}
