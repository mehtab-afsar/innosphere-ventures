"use client";

import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
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
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-8 group absolute left-0 lg:left-0 -top-12">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-extralight text-sm">Back</span>
          </Link>
          <Badge className="mb-6 font-light bg-black dark:bg-white text-white dark:text-black border-black dark:border-white hover:bg-black/90 dark:hover:bg-white/90 fade-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            Signals
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extralight mb-8 text-gray-900 dark:text-white fade-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "100ms" }}>
            The <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">Edge Alpha</span>
            <br />
            <span className="font-light bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">Company Universe</span>
          </h1>
          <p className="text-xl font-extralight text-gray-600 dark:text-white/60 max-w-3xl fade-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "200ms" }}>
            Our portfolio begins long before we invest. Using the Edge Alpha scoring engine, we map India's frontier innovation universe, surface high-signal founders, and identify companies with systemic potential.
          </p>
        </div>
      </section>

      {/* Edge Alpha Signals Explanation */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extralight mb-6 text-gray-900 dark:text-white fade-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              Edge Alpha <span className="font-light">Signals</span>
            </h2>
            <p className="text-xl font-extralight text-gray-600 dark:text-white/60 max-w-3xl mx-auto mb-4 fade-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "100ms" }}>
              The Edge Alpha scoring model separates signal from noise.
            </p>
            <p className="text-lg font-extralight text-gray-500 dark:text-white/50 max-w-3xl mx-auto fade-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "200ms" }}>
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
                <p className="text-3xl font-extralight text-gray-500 dark:text-white/50">Edge Alpha</p>
                <p className="text-5xl font-light text-gray-900 dark:text-white">Signals</p>
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
                    <div className={`p-5 bg-gray-100 dark:bg-white/5 rounded-full border border-gray-300 dark:border-white/20 w-fit mx-auto mb-4 transition-all duration-300 ${hoveredSignal === index ? "bg-gray-200 dark:bg-white/10 border-gray-400 dark:border-white/40" : ""}`}>
                      <Icon className="w-10 h-10 text-gray-900 dark:text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base font-medium text-gray-900 dark:text-white mb-2 leading-tight">{dimension.label}</h3>
                    <p className={`text-sm font-extralight text-gray-500 dark:text-white/50 leading-snug transition-opacity duration-300 ${hoveredSignal === index ? "opacity-0" : "opacity-100"}`}>{dimension.description}</p>

                    {/* Hover tooltip - appears on same side */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-[280px] transition-all duration-300 ${
                        hoveredSignal === index ? "opacity-100 visible" : "opacity-0 invisible"
                      } ${isOnLeftSide ? "right-full mr-8 text-right" : "left-full ml-8 text-left"}`}
                    >
                      <p className="text-xl font-light text-gray-900 dark:text-white leading-relaxed">
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
                    <div className="p-4 bg-gray-100 dark:bg-white/5 rounded-full border border-gray-300 dark:border-white/20 shrink-0 group-hover:bg-gray-200 dark:group-hover:bg-white/10 transition-all duration-300">
                      <Icon className="w-8 h-8 text-gray-900 dark:text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{dimension.label}</h3>
                      <p className="text-base font-extralight text-gray-500 dark:text-white/50">{dimension.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Edge Alpha Companies - Table Style Portfolio */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 dark:text-white mb-4">
              Portfolio
            </h2>
            <div className="flex items-center gap-6">
              <p className="text-lg font-extralight text-gray-500 dark:text-white/50">
                2025 Edge Alpha Companies
              </p>
              <span className="text-sm font-light text-gray-400 dark:text-white/40">
                {companies.length} companies
              </span>
            </div>
          </div>

          {/* Table Header - Desktop */}
          <div className="hidden lg:grid grid-cols-12 gap-6 px-8 py-5 border-b border-gray-200 dark:border-white/10 text-base font-light text-gray-400 dark:text-white/40">
            <div className="col-span-5">Company</div>
            <div className="col-span-2">Sector</div>
            <div className="col-span-2">Partnered</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1"></div>
          </div>

          {/* Company List */}
          <div className="divide-y divide-gray-200 dark:divide-white/10">
            {companies.map((company, index) => {
              const Icon = company.icon;
              const isExpanded = expandedCompany === index;
              return (
                <div key={index}>
                  {/* Row */}
                  <div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-8 py-8 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-200"
                    onClick={() => setExpandedCompany(isExpanded ? null : index)}
                  >
                    {/* Company Info */}
                    <div className="lg:col-span-5 flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                        <Icon className="w-8 h-8 text-gray-600 dark:text-white/60" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                          {company.name}
                        </h3>
                        <p className="text-base font-light text-gray-500 dark:text-white/50 lg:hidden mt-1">
                          {company.sector} • {company.stage}
                        </p>
                      </div>
                    </div>

                    {/* Sector - Desktop */}
                    <div className="hidden lg:flex lg:col-span-2 items-center text-base text-gray-600 dark:text-white/60">
                      {company.sector}
                    </div>

                    {/* Partnered - Desktop */}
                    <div className="hidden lg:flex lg:col-span-2 items-center text-base text-gray-600 dark:text-white/60">
                      {company.year} • {company.stage}
                    </div>

                    {/* Status - Desktop */}
                    <div className="hidden lg:flex lg:col-span-2 items-center">
                      <span className="flex items-center gap-2 text-base text-gray-600 dark:text-white/60">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        {company.status}
                      </span>
                    </div>

                    {/* Expand Icon */}
                    <div className="hidden lg:flex lg:col-span-1 items-center justify-end">
                      <svg
                        className={`w-6 h-6 text-gray-400 dark:text-white/40 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Detail Modal/Drawer */}
      {expandedCompany !== null && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
            onClick={() => setExpandedCompany(null)}
          />

          {/* Drawer */}
          <div className="fixed inset-y-0 right-0 w-full max-w-4xl bg-white dark:bg-gray-950 z-50 shadow-2xl overflow-y-auto transform transition-transform duration-500 ease-out">
            {(() => {
              const company = companies[expandedCompany];
              const Icon = company.icon;
              return (
                <div className="min-h-full">
                  {/* Close Button */}
                  <button
                    onClick={() => setExpandedCompany(null)}
                    className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 dark:text-white/40 dark:hover:text-white/70 transition-colors z-10"
                  >
                    <X className="w-8 h-8" strokeWidth={1} />
                  </button>

                  {/* Two Column Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                    {/* Left Column - Company Info */}
                    <div className="p-10 lg:p-16 bg-gray-50 dark:bg-white/[0.02]">
                      {/* Logo */}
                      <div className="w-20 h-20 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center mb-10 shadow-sm border border-gray-200 dark:border-white/10">
                        <Icon className="w-10 h-10 text-gray-700 dark:text-white/70" strokeWidth={1.5} />
                      </div>

                      {/* Tagline */}
                      <h2 className="text-3xl lg:text-4xl font-light text-gray-900 dark:text-white leading-tight mb-8">
                        {company.tagline}
                      </h2>

                      {/* Social Links */}
                      <div className="flex items-center gap-4 mb-10">
                        <a href="#" className="text-gray-400 hover:text-gray-600 dark:text-white/40 dark:hover:text-white/70 transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-600 dark:text-white/40 dark:hover:text-white/70 transition-colors">
                          <Link2 className="w-5 h-5" />
                        </a>
                      </div>

                      {/* Description */}
                      <p className="text-lg font-light text-gray-600 dark:text-white/60 leading-relaxed">
                        {company.name} is building transformative solutions in the {company.sector.toLowerCase()} space.
                        As part of the InnoSphere Edge Alpha portfolio, they represent the next wave of innovation
                        emerging from India's frontier technology ecosystem.
                      </p>
                    </div>

                    {/* Right Column - Details */}
                    <div className="p-10 lg:p-16 border-l border-gray-200 dark:border-white/10">
                      <div className="space-y-10">
                        {/* Domain */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 dark:text-white/40 uppercase tracking-[0.2em] mb-3">
                            Domain
                          </h4>
                          <p className="text-xl text-gray-900 dark:text-white">
                            {company.sector}
                          </p>
                        </div>

                        {/* First Partnered */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 dark:text-white/40 uppercase tracking-[0.2em] mb-3">
                            First Partnered
                          </h4>
                          <p className="text-xl text-gray-900 dark:text-white">
                            {company.stage}
                          </p>
                        </div>

                        {/* Current Status */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 dark:text-white/40 uppercase tracking-[0.2em] mb-3">
                            Current Status
                          </h4>
                          <p className="text-xl text-gray-900 dark:text-white flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                            {company.status}
                          </p>
                        </div>

                        {/* Year */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 dark:text-white/40 uppercase tracking-[0.2em] mb-3">
                            Year
                          </h4>
                          <p className="text-xl text-gray-900 dark:text-white">
                            {company.year}
                          </p>
                        </div>

                        {/* Partner */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 dark:text-white/40 uppercase tracking-[0.2em] mb-3">
                            Partner
                          </h4>
                          <p className="text-xl text-gray-900 dark:text-white">
                            InnoSphere Ventures
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}
