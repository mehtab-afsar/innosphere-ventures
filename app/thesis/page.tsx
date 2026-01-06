"use client";

import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { OceanGradient } from "@/components/OceanGradient";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Target, Globe as GlobeIcon, Users, TrendingUp, Sparkles, GraduationCap, Sprout, DollarSign, Clock } from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ParticleSphere to avoid SSR issues with Three.js
const ParticleSphere = dynamic(() => import("@/components/ParticleSphere").then(mod => ({ default: mod.ParticleSphere })), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-2 border-gray-300 dark:border-gray-600 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const thesisPillars = [
  {
    icon: GlobeIcon,
    title: "India's Innovation Frontier",
    description: "India is transitioning from outsourcing to innovation leadership. With 165,000+ startups, a 55× growth in frontier jobs, and 1,000+ potential deep-tech unicorns, the opportunity is systemic.",
  },
  {
    icon: TrendingUp,
    title: "Deep Tech Focus",
    description: "We invest in foundational technologies — healthcare, clean energy, advanced materials, and infrastructure. Companies building real IP with defensible moats.",
  },
  {
    icon: Users,
    title: "Distributed Innovation",
    description: "The next wave of Indian innovation won't come only from metros. We actively source from Tier 2/3 cities, university labs, and emerging founder ecosystems.",
  },
  {
    icon: Sparkles,
    title: "Edge Alpha Methodology",
    description: "Our proprietary scoring engine evaluates startups across five signal dimensions — surfacing outliers before traction becomes obvious.",
  },
  {
    icon: GraduationCap,
    title: "True Learning Community",
    description: "We build lasting relationships with founders through knowledge sharing, mentorship networks, and collaborative learning across our portfolio ecosystem.",
  },
];

const investmentCriteria = [
  "Pre-seed to Seed stage companies",
  "Deep-tech and frontier sectors",
  "Strong IP or defensible technology",
  "Founders with domain expertise",
  "Systemic impact potential",
  "India-first, global-scale ambition",
];

const pillarColors = [
  { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400", glow: "node-glow-cyan" },
  { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", glow: "node-glow-purple" },
  { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400", glow: "node-glow-amber" },
  { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400", glow: "node-glow-emerald" },
  { bg: "bg-rose-500/10", border: "border-rose-500/30", text: "text-rose-400", glow: "node-glow-rose" },
];

const investmentMetrics = [
  {
    icon: Sprout,
    value: "80-120",
    label: "Seed investments",
    sublabel: "over fund lifecycle",
    color: "emerald",
  },
  {
    icon: DollarSign,
    value: "$50-150K",
    label: "Initial check size",
    sublabel: "with follow-on reserves",
    color: "cyan",
  },
  {
    icon: Clock,
    value: "5-7 years",
    label: "Investment horizon",
    sublabel: "patient capital approach",
    color: "purple",
  },
];

function MetricCard({ metric, index }: { metric: typeof investmentMetrics[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = metric.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add staggered delay based on index
            setTimeout(() => {
              setIsVisible(true);
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const colorClasses = {
    emerald: {
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
      text: "text-emerald-500",
      glow: "group-hover:shadow-emerald-500/20",
    },
    cyan: {
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30",
      text: "text-cyan-500",
      glow: "group-hover:shadow-cyan-500/20",
    },
    purple: {
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      text: "text-purple-500",
      glow: "group-hover:shadow-purple-500/20",
    },
  };

  const colors = colorClasses[metric.color as keyof typeof colorClasses];

  return (
    <div
      ref={cardRef}
      className={`glass-card p-6 group hover:scale-[1.03] transition-all duration-500 hover:shadow-2xl ${colors.glow} hover:shadow-gray-200 dark:hover:shadow-white/10 cursor-default ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: isVisible ? "0ms" : `${index * 150}ms` }}
    >
      {/* Icon with bounce animation */}
      <div
        className={`p-3 ${colors.bg} rounded-xl border ${colors.border} w-fit mb-4 transition-all duration-500 ${
          isVisible ? "scale-100 rotate-0" : "scale-75 -rotate-12"
        }`}
        style={{ transitionDelay: isVisible ? `${index * 150 + 100}ms` : "0ms" }}
      >
        <Icon
          className={`w-6 h-6 ${colors.text} transition-transform duration-300 group-hover:scale-110`}
          strokeWidth={1.5}
        />
      </div>

      {/* Value */}
      <div
        className={`text-3xl lg:text-4xl font-light text-gray-900 dark:text-white mb-2 transition-all duration-500 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}
        style={{ transitionDelay: isVisible ? `${index * 150 + 200}ms` : "0ms" }}
      >
        {metric.value}
      </div>

      {/* Labels */}
      <div
        className={`transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: isVisible ? `${index * 150 + 300}ms` : "0ms" }}
      >
        <div className="text-sm font-light text-gray-700 dark:text-white/70">{metric.label}</div>
        <div className="text-xs font-extralight text-gray-500 dark:text-white/50">{metric.sublabel}</div>
      </div>
    </div>
  );
}

function ThesisPillarsSection() {
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 lg:px-12 overflow-visible">
      <div className="max-w-7xl mx-auto overflow-visible">
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-extralight mb-6 text-gray-900 dark:text-white">
            Thesis <span className="font-light">Pillars</span>
          </h2>
          <p className="text-xl font-extralight text-gray-600 dark:text-white/60 max-w-3xl mx-auto">
            Five core beliefs that guide every investment decision.
          </p>
        </div>

        {/* Circular Particle Sphere Design - Desktop */}
        <div className="hidden lg:block relative w-[850px] h-[850px] mx-auto overflow-visible">
          {/* Particle Sphere in center */}
          <div className="absolute inset-[120px] pointer-events-none opacity-40 dark:opacity-60">
            <ParticleSphere />
          </div>

          {/* Circle ring - matches radius of pillars */}
          <div className="absolute inset-[45px] rounded-full border border-gray-200 dark:border-white/10 pointer-events-none"></div>

          {/* Thesis pillars around the circle */}
          {thesisPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const angle = (index * 72 - 90) * (Math.PI / 180); // 5 items, 72° apart, starting from top
            const radius = 340;

            // Position offsets for fine-tuning each pillar
            const offsets = [
              { x: 0, y: -20 },    // India's Innovation Frontier - move up
              { x: 30, y: 0 },     // Deep Tech Focus - move right
              { x: 0, y: 50 },     // Distributed Innovation - move down more
              { x: 0, y: 50 },     // Edge Alpha Methodology - move down more
              { x: -30, y: 0 },    // True Learning Community - move left
            ];

            const x = Math.cos(angle) * radius + offsets[index].x;
            const y = Math.sin(angle) * radius + offsets[index].y;
            const colors = pillarColors[index];
            const isHovered = hoveredPillar === index;

            // Determine tooltip side based on position
            const isOnLeftSide = x < -50;
            const isOnRightSide = x > 50 || index === 0; // Force India's Innovation Frontier tooltip to right
            const isAtTop = y < -100 && index !== 0; // Don't use top positioning for index 0

            return (
              <div
                key={index}
                className={`absolute w-[220px] text-center transition-all duration-500 cursor-pointer mountain-node ${isHovered ? "scale-105 z-20" : "z-10"}`}
                style={{
                  left: `calc(50% + ${x}px - 110px)`,
                  top: `calc(50% + ${y}px - 70px)`,
                  animationDelay: `${index * 0.2}s`,
                }}
                onMouseEnter={() => setHoveredPillar(index)}
                onMouseLeave={() => setHoveredPillar(null)}
              >
                {/* Icon circle with glow */}
                <div className={`p-5 ${colors.bg} rounded-full border ${colors.border} w-fit mx-auto mb-4 transition-all duration-300 ${isHovered ? "scale-110" : ""} ${colors.glow}`}>
                  <Icon className={`w-10 h-10 ${colors.text}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-medium text-gray-900 dark:text-white mb-2 leading-tight">{pillar.title}</h3>
                <p className={`text-sm font-extralight text-gray-500 dark:text-white/50 leading-snug transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}>
                  {pillar.description.slice(0, 60)}...
                </p>

                {/* Hover tooltip - appears on appropriate side with screen boundary protection */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-[280px] max-w-[90vw] transition-all duration-300 z-50 ${
                    isHovered ? "opacity-100 visible" : "opacity-0 invisible"
                  } ${isOnLeftSide ? "right-full mr-4 text-right" : isOnRightSide ? "left-full ml-4 text-left" : isAtTop ? "top-full mt-8 left-1/2 -translate-x-1/2 text-center" : "bottom-full mb-8 left-1/2 -translate-x-1/2 text-center"}`}
                >
                  <div className={`relative overflow-hidden rounded-2xl border ${colors.border} bg-gradient-to-br from-white/95 via-gray-50/90 to-white/95 dark:from-gray-900/95 dark:via-gray-900/90 dark:to-black/95 backdrop-blur-xl shadow-2xl`}>
                    {/* Glow effect at top */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.text === "text-cyan-400" ? "from-cyan-500 via-cyan-400 to-cyan-500" : colors.text === "text-purple-400" ? "from-purple-500 via-purple-400 to-purple-500" : colors.text === "text-amber-400" ? "from-amber-500 via-amber-400 to-amber-500" : colors.text === "text-emerald-400" ? "from-emerald-500 via-emerald-400 to-emerald-500" : "from-rose-500 via-rose-400 to-rose-500"}`}></div>

                    <div className="p-5">
                      {/* Header with icon and title */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 ${colors.bg} rounded-xl border ${colors.border}`}>
                          <Icon className={`w-5 h-5 ${colors.text}`} strokeWidth={1.5} />
                        </div>
                        <h4 className={`text-lg font-medium ${colors.text}`}>{pillar.title}</h4>
                      </div>

                      {/* Description */}
                      <p className="text-sm font-light text-gray-700 dark:text-white/80 leading-relaxed text-left">
                        {pillar.description}
                      </p>

                      {/* Decorative bottom element */}
                      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
                        <span className="text-xs font-light text-gray-400 dark:text-white/40 uppercase tracking-wider">Pillar {index + 1}</span>
                        <div className={`w-2 h-2 rounded-full ${colors.bg} ${colors.border} border`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Layout - Stacked cards */}
        <div className="lg:hidden space-y-6">
          {thesisPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const colors = pillarColors[index];
            return (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 ${colors.bg} rounded-full border ${colors.border}`}>
                    <Icon className={`w-7 h-7 ${colors.text}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-light text-gray-900 dark:text-white">{pillar.title}</h3>
                </div>
                <p className="font-extralight text-gray-600 dark:text-white/60 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function ThesisPage() {
  return (
    <OceanGradient variant="philosophy">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-[#0a1128]/60 hover:text-[#0a1128] transition-colors duration-200 mb-8 group absolute left-6 lg:left-12 top-28">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-extralight text-sm">Back</span>
          </Link>
          <Badge className="mb-6 font-light bg-[#0a1128]/10 text-[#0a1128] border-[#0a1128]/20 hover:bg-[#0a1128]/20">
            Our Thesis
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extralight mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">Conviction</span> <span className="bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">at the</span>
            <br />
            <span className="font-light bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">frontier</span>
          </h1>
          <p className="text-xl font-extralight text-[#0a1128]/80 max-w-4xl">
            We believe India is at an inflection point. A new generation of founders is building deep-tech companies that will define the next decade of global innovation.
          </p>
        </div>
      </section>

      {/* Core Belief */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
              <Target className="w-8 h-8 text-gray-900 dark:text-white" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-light text-gray-900 dark:text-white">Core Belief</h2>
          </div>
          <p className="text-2xl lg:text-3xl font-extralight text-gray-700 dark:text-white/80 leading-relaxed italic max-w-4xl mx-auto">
            "The best returns come from backing <span className="highlight-word">exceptional founders</span> solving <span className="highlight-word">hard problems</span> at the right moment in time."
          </p>
        </div>
      </section>

      {/* Thesis Pillars */}
      <ThesisPillarsSection />


      {/* Investment Approach */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extralight mb-6 text-gray-900 dark:text-white">
              Investment <span className="font-light">Approach</span>
            </h2>
            <p className="text-xl font-extralight text-gray-600 dark:text-white/60 max-w-3xl mx-auto">
              We deploy conviction capital — going early where others hesitate, backed by systematic signal analysis.
            </p>
          </div>

          {/* Metrics Cards - Staggered Animation */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {investmentMetrics.map((metric, index) => (
              <MetricCard key={index} metric={metric} index={index} />
            ))}
          </div>

          {/* What We Look For Card */}
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-8">
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-6 text-center">What We Look For</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {investmentCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
                    <span className="font-extralight text-gray-600 dark:text-white/70 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{criteria}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </OceanGradient>
  );
}
