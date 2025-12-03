"use client";

import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Target, Globe, Users, TrendingUp, Sparkles, GraduationCap, Sprout, DollarSign, Clock } from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useState } from "react";

const thesisPillars = [
  {
    icon: Globe,
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

// Mountain positions: center at peak, descending on both sides
// Adjusted to align icon centers with the steeper SVG lines
const mountainPositions = [
  { left: "2%", top: "66%", tooltipSide: "top" },      // Far left, lowest (India's Innovation Frontier) - moved up
  { left: "24%", top: "32%", tooltipSide: "top" },     // Left mid (Deep Tech Focus) - moved up
  { left: "37%", top: "-5%", tooltipSide: "bottom", isCenter: true },  // Center peak (Distributed Innovation) - moved up and left
  { left: "66%", top: "30%", tooltipSide: "top" },     // Right mid (Edge Alpha Methodology) - moved up and left
  { left: "86%", top: "66%", tooltipSide: "top" },     // Far right, lowest (True Learning Community) - moved up and left
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
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-extralight mb-6 text-gray-900 dark:text-white">
            Thesis <span className="font-light">Pillars</span>
          </h2>
          <p className="text-xl font-extralight text-gray-600 dark:text-white/60 max-w-3xl mx-auto">
            Five core beliefs that guide every investment decision.
          </p>
        </div>

        {/* Mountain Design - Desktop */}
        <div className="hidden lg:block relative h-[450px]">
          {/* Connecting lines between nodes - lines stop at circle edges */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 450" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(34, 211, 238, 0.9)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0.9)" />
              </linearGradient>
              <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.9)" />
                <stop offset="100%" stopColor="rgba(251, 191, 36, 0.9)" />
              </linearGradient>
              <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(251, 191, 36, 0.9)" />
                <stop offset="100%" stopColor="rgba(52, 211, 153, 0.9)" />
              </linearGradient>
              <linearGradient id="lineGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(52, 211, 153, 0.9)" />
                <stop offset="100%" stopColor="rgba(251, 113, 133, 0.9)" />
              </linearGradient>
            </defs>
            {/* Line 1: Node 1 to Node 2 - adjusted to stop at circle edges (radius ~40px) */}
            <path
              d="M 110 318 L 252 198"
              stroke="url(#lineGradient1)"
              strokeWidth="3"
              fill="none"
            />
            {/* Line 2: Node 2 to Node 3 - adjusted to stop at circle edges */}
            <path
              d="M 302 156 L 394 54"
              stroke="url(#lineGradient2)"
              strokeWidth="3"
              fill="none"
            />
            {/* Line 3: Node 3 to Node 4 - adjusted to stop at circle edges */}
            <path
              d="M 448 54 L 692 158"
              stroke="url(#lineGradient3)"
              strokeWidth="3"
              fill="none"
            />
            {/* Line 4: Node 4 to Node 5 - adjusted to stop at circle edges */}
            <path
              d="M 748 200 L 890 318"
              stroke="url(#lineGradient4)"
              strokeWidth="3"
              fill="none"
            />
          </svg>

          {/* Mountain nodes - center at peak, descending on both sides */}
          {thesisPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const pos = mountainPositions[index];
            const colors = pillarColors[index];
            const isHovered = hoveredPillar === index;

            return (
              <div
                key={index}
                className="absolute mountain-node"
                style={{
                  left: pos.left,
                  top: pos.top,
                  transform: "translate(-50%, -50%)",
                  animationDelay: `${index * 0.2}s`,
                }}
                onMouseEnter={() => setHoveredPillar(index)}
                onMouseLeave={() => setHoveredPillar(null)}
              >
                <div className="flex flex-col items-center text-center cursor-pointer group">
                  <div className={`p-5 ${colors.bg} rounded-full border ${colors.border} mb-3 transition-all duration-300 ${isHovered ? "scale-110" : ""} ${colors.glow}`}>
                    <Icon className={`w-10 h-10 ${colors.text}`} strokeWidth={1.5} />
                  </div>
                  <h3 className={`text-base font-medium text-gray-900 dark:text-white leading-tight max-w-[140px] transition-all duration-300 ${isHovered ? "text-gray-900 dark:text-white" : ""}`}>
                    {pillar.title}
                  </h3>
                </div>

                {/* Hover card - big designed card */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-[360px] transition-all duration-500 ease-out z-50 ${
                    isHovered ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
                  } ${pos.tooltipSide === "top" ? "bottom-full mb-6" : "top-full mt-6"}`}
                >
                  <div className={`relative overflow-hidden rounded-2xl border ${colors.border} bg-gradient-to-br from-white/95 via-gray-50/90 to-white/95 dark:from-gray-900/95 dark:via-gray-900/90 dark:to-black/95 backdrop-blur-xl shadow-2xl`}>
                    {/* Glow effect at top */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.text === "text-cyan-400" ? "from-cyan-500 via-cyan-400 to-cyan-500" : colors.text === "text-purple-400" ? "from-purple-500 via-purple-400 to-purple-500" : colors.text === "text-amber-400" ? "from-amber-500 via-amber-400 to-amber-500" : colors.text === "text-emerald-400" ? "from-emerald-500 via-emerald-400 to-emerald-500" : "from-rose-500 via-rose-400 to-rose-500"}`}></div>

                    <div className="p-6">
                      {/* Header with icon and title */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 ${colors.bg} rounded-xl border ${colors.border}`}>
                          <Icon className={`w-6 h-6 ${colors.text}`} strokeWidth={1.5} />
                        </div>
                        <h4 className={`text-xl font-medium ${colors.text}`}>{pillar.title}</h4>
                      </div>

                      {/* Description */}
                      <p className="text-base font-light text-gray-700 dark:text-white/80 leading-relaxed">
                        {pillar.description}
                      </p>

                      {/* Decorative bottom element */}
                      <div className="mt-5 pt-4 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
                        <span className="text-xs font-light text-gray-400 dark:text-white/40 uppercase tracking-wider">Thesis Pillar {index + 1}</span>
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
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-8 group absolute left-6 lg:left-12 top-28">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-extralight text-sm">Back</span>
          </Link>
          <Badge className="mb-6 font-light bg-black dark:bg-white text-white dark:text-black border-black dark:border-white hover:bg-black/90 dark:hover:bg-white/90">
            Our Thesis
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extralight mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">Conviction</span> <span className="bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">at the</span>
            <br />
            <span className="font-light bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">frontier</span>
          </h1>
          <p className="text-xl font-extralight text-gray-600 dark:text-white/60 max-w-4xl">
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

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-extralight mb-6 text-gray-900 dark:text-white">
            Ready to <span className="font-light">build together?</span>
          </h2>
          <p className="text-xl font-extralight text-gray-600 dark:text-white/60 mb-8 max-w-2xl mx-auto">
            Whether you're a founder building at the frontier or an LP seeking systematic exposure to India's innovation ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 font-light text-base group transition-all duration-300 hover:scale-105">
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 dark:border-white/30 text-gray-900 dark:text-white font-light text-base hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 hover:border-gray-400 dark:hover:border-white/50" asChild>
              <a href="/signals">View Portfolio</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
