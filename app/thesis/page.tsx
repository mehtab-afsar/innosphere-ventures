"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { OceanGradient } from "@/components/OceanGradient";
import { ArrowLeft, Target, Sprout, DollarSign, Clock } from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useState } from "react";

const investmentCriteria = [
  "Pre-seed to Seed stage companies",
  "Deep-tech and frontier sectors",
  "Strong IP or defensible technology",
  "Founders with domain expertise",
  "Systemic impact potential",
  "India-first, global-scale ambition",
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
        className={`text-3xl lg:text-4xl font-light text-[#f5f5f0] mb-2 transition-all duration-500 ${
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
        <div className="text-sm font-light text-[#f5f5f0]/80">{metric.label}</div>
        <div className="text-xs font-extralight text-[#f5f5f0]/60">{metric.sublabel}</div>
      </div>
    </div>
  );
}

export default function ThesisPage() {
  return (
    <OceanGradient variant="landing">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-[#0a1128]/60 hover:text-[#0a1128] transition-colors duration-200 mb-8 group absolute left-6 lg:left-12 top-28">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-extralight text-sm">Back</span>
          </Link>
          <div className="inline-block mb-6 px-6 py-3 border-2 border-[#ff6b5a] rounded-none">
            <span className="text-lg font-medium text-[#ff6b5a] tracking-wide">Our Thesis</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight mb-8">
            <span className="text-[#ff6b5a]">Conviction</span> <span className="text-[#0a1128]">at the</span>
            <br />
            <span className="font-light text-[#2a9a8e]">frontier</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-extralight text-[#0a1128]/80 max-w-4xl leading-relaxed">
            We believe India is at an inflection point. A new generation of founders is building deep-tech companies that will define the next decade of global innovation.
          </p>
        </div>
      </section>

      {/* Core Belief */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="p-3 bg-[#f5f5f0]/10 rounded-xl border border-[#f5f5f0]/20">
              <Target className="w-8 h-8 text-[#0a1128]" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#d4a017]">Core Belief</h2>
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extralight leading-relaxed italic max-w-4xl mx-auto">
            "The best returns come from backing <span className="text-[#ff6b5a] font-medium">exceptional founders</span> solving <span className="text-[#2a9a8e] font-medium">hard problems</span> at the <span className="text-[#0a1128]">right moment in time.</span>"
          </p>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight mb-6">
              <span className="text-[#ff6b5a]">Investment</span> <span className="font-light text-[#7affd4]">Approach</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-extralight text-[#f5f5f0]/70 max-w-3xl mx-auto">
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
              <h3 className="text-xl sm:text-2xl font-light text-[#f5f5f0] mb-6 text-center">What We Look For</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {investmentCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
                    <span className="font-extralight text-[#f5f5f0]/80 group-hover:text-[#f5f5f0] transition-colors duration-300">{criteria}</span>
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
