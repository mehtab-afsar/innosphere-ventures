"use client";

import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Heart, Battery, TestTube, Droplets, Leaf, Target, Lightbulb, Shield, Users, ArrowLeft, TrendingUp } from "lucide-react";
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
    animation: "animate-heartbeat",
    color: "text-rose-400",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/30",
  },
  {
    icon: Droplets,
    name: "Cluix",
    tagline: "Building the Stripe of water governance.",
    animation: "animate-droplet",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
  },
  {
    icon: TestTube,
    name: "Pragmatech",
    tagline: "Making cervical cancer screening as accessible as a pregnancy test.",
    animation: "animate-pulse-glow",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
  },
  {
    icon: Battery,
    name: "Meine Electric",
    tagline: "Building the Duracell of India's clean energy future.",
    animation: "animate-battery",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
  },
  {
    icon: Leaf,
    name: "Gocarin Industries",
    tagline: "Becoming the Coca-Cola of sustainable livestock feed.",
    animation: "animate-leaf",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
  },
];

export default function SignalsPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [hoveredSignal, setHoveredSignal] = useState<number | null>(null);

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
    <div className="min-h-screen bg-black text-gray-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 mb-8 group absolute left-6 lg:left-12 top-28">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-extralight text-sm">Back</span>
          </Link>
          <Badge className="mb-6 font-light bg-white text-black border-white hover:bg-white/90 fade-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            Signals
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extralight mb-8 text-white fade-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "100ms" }}>
            The <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">Edge Alpha</span>
            <br />
            <span className="font-light bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">Company Universe</span>
          </h1>
          <p className="text-xl font-extralight text-white/60 max-w-4xl fade-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "200ms" }}>
            Our portfolio begins long before we invest. Using the Edge Alpha scoring engine, we map India's frontier innovation universe, surface high-signal founders, and identify companies with systemic potential.
          </p>
        </div>
      </section>

      {/* Edge Alpha Signals Explanation */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extralight mb-6 text-white fade-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              Edge Alpha <span className="font-light">Signals</span>
            </h2>
            <p className="text-xl font-extralight text-white/60 max-w-3xl mx-auto mb-4 fade-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "100ms" }}>
              The Edge Alpha scoring model separates signal from noise.
            </p>
            <p className="text-lg font-extralight text-white/50 max-w-3xl mx-auto fade-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "200ms" }}>
              We evaluate every company across five systemic signal dimensions.
            </p>
          </div>

          {/* Signal Dimensions Circle */}
          <div className="fade-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "300ms" }}>
            {/* Desktop: Circle Layout */}
            <div className="hidden lg:block relative w-[850px] h-[850px] mx-auto">
              {/* Center text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center justify-center">
                <p className="text-3xl font-extralight text-white/50">Edge Alpha</p>
                <p className="text-5xl font-light text-white">Signals</p>
              </div>

              {/* Circle ring - matches radius of 340px from center */}
              <div className="absolute inset-[65px] rounded-full border border-white/10"></div>

              {signalDimensions.map((dimension, index) => {
                const Icon = dimension.icon;
                const angle = (index * 72 - 90) * (Math.PI / 180);
                const radius = 340;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                // Determine if signal is on left or right side of circle
                const isOnLeftSide = x < 0;

                return (
                  <div
                    key={index}
                    className={`absolute w-[220px] text-center transition-all duration-500 cursor-pointer ${hoveredSignal === index ? "scale-110" : ""}`}
                    style={{
                      left: `calc(50% + ${x}px - 110px)`,
                      top: `calc(50% + ${y}px - 70px)`,
                    }}
                    onMouseEnter={() => setHoveredSignal(index)}
                    onMouseLeave={() => setHoveredSignal(null)}
                  >
                    <div className={`p-5 bg-white/5 rounded-full border border-white/20 w-fit mx-auto mb-4 transition-all duration-300 ${hoveredSignal === index ? "bg-white/10 border-white/40" : ""}`}>
                      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base font-medium text-white mb-2 leading-tight">{dimension.label}</h3>
                    <p className={`text-sm font-extralight text-white/50 leading-snug transition-opacity duration-300 ${hoveredSignal === index ? "opacity-0" : "opacity-100"}`}>{dimension.description}</p>

                    {/* Hover tooltip - appears on same side */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-[280px] transition-all duration-300 ${
                        hoveredSignal === index ? "opacity-100 visible" : "opacity-0 invisible"
                      } ${isOnLeftSide ? "right-full mr-8 text-right" : "left-full ml-8 text-left"}`}
                    >
                      <p className="text-xl font-light text-white leading-relaxed">
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
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">{dimension.label}</h3>
                      <p className="text-base font-extralight text-white/50">{dimension.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Edge Alpha Companies */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-extralight mb-6 text-white fade-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              Edge Alpha <span className="font-light">Companies</span>
            </h2>
            <p className="text-xl font-extralight text-white/50 fade-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "100ms" }}>
              The frontier innovators we back
            </p>
          </div>

          <h3 className="text-2xl lg:text-3xl font-extralight text-white/80 mb-8 text-center fade-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "150ms" }}>
            2025 Edge Alpha Companies
          </h3>

          {/* Horizontal expanding cards */}
          <div className="fade-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "200ms" }}>
            <div className="hidden lg:flex gap-2 h-[300px]">
              {companies.map((company, index) => {
                const Icon = company.icon;
                return (
                  <div
                    key={index}
                    className="group relative flex-1 hover:flex-[3] transition-all duration-500 ease-out cursor-pointer glass-card overflow-hidden"
                  >
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Content */}
                    <div className="relative z-10 h-full p-6 flex flex-col items-center justify-center text-center">
                      {/* Icon */}
                      <div className={`p-4 ${company.bgColor} rounded-full border ${company.borderColor} group-hover:border-opacity-60 transition-all duration-300 mb-4`}>
                        <Icon className={`w-8 h-8 ${company.color} ${company.animation}`} strokeWidth={1.5} />
                      </div>

                      {/* Name and tagline */}
                      <h3 className="text-2xl font-light text-white mb-2">{company.name}</h3>
                      <p className="text-base font-extralight text-white/50 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {company.tagline}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile: Stacked cards */}
            <div className="lg:hidden space-y-4">
              {companies.map((company, index) => {
                const Icon = company.icon;
                return (
                  <div
                    key={index}
                    className="glass-card p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 ${company.bgColor} rounded-full border ${company.borderColor}`}>
                        <Icon className={`w-7 h-7 ${company.color} ${company.animation}`} strokeWidth={1.5} />
                      </div>
                      <span className="text-4xl font-extralight text-white/10">0{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-light text-white mb-2">{company.name}</h3>
                    <p className="text-base font-extralight text-white/50">
                      {company.tagline}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
