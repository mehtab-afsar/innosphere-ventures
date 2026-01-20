"use client";

import { useState, useEffect } from "react";

// Sample portfolio companies - replace with actual data
const portfolioCompanies = [
  { name: "Company 1", sector: "AgTech" },
  { name: "Company 2", sector: "WaterTech" },
  { name: "Company 3", sector: "HealthTech" },
  { name: "Company 4", sector: "SpaceTech" },
  { name: "Company 5", sector: "CleanTech" },
  { name: "Company 6", sector: "AI/ML" },
  { name: "Company 7", sector: "BioTech" },
  { name: "Company 8", sector: "FinTech" },
];

export function PortfolioCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="portfolio" className="py-32 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Impact and Returns */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-3 border-2 border-[#2a9a8e] rounded-none">
              <span className="text-lg font-medium text-[#2a9a8e] tracking-wide">Impact and Returns</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#f5f5f0] mb-8 leading-tight max-w-4xl mx-auto" style={{ letterSpacing: '-0.01em' }}>
              <span className="font-semibold text-[#ff6b5a]">Long-term financial returns</span>{" "}
              <span className="font-light text-[#f5f5f0]">increasingly depend on solving</span>{" "}
              <span className="font-semibold text-[#7affd4]">persistently hard to solve problems</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg sm:text-xl font-light text-[#f5f5f0]/90 leading-relaxed">
              We invest in areas such as <span className="font-medium text-[#ff6b5a]">agriculture, water, healthcare, energy, and frontier technologies</span> — not because it sounds virtuous, but because these are structural markets with real demand, long time horizons, and defensible value creation.
            </p>

            <div className="py-8 px-8 bg-white/5 border-l-4 border-[#7affd4]">
              <p className="text-xl sm:text-2xl font-light text-[#f5f5f0]/95 mb-4">
                Impact, for us, is not a constraint on returns.
              </p>
              <p className="text-lg font-light text-[#f5f5f0]/80">
                It is a filter against fragility, hype, and group think. <span className="font-semibold text-[#7affd4]">This is where true alpha is born.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Our Portfolio */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-3 border-2 border-[#ff6b5a] rounded-none">
              <span className="text-lg font-medium text-[#ff6b5a] tracking-wide">Our Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#f5f5f0] mb-6" style={{ letterSpacing: '-0.01em' }}>
              Building the future, one founder at a time
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center p-8 border border-[#ff6b5a]/40 bg-white/5">
              <div className="text-4xl sm:text-5xl font-mono font-semibold text-[#ff6b5a] mb-2">18+</div>
              <div className="text-sm sm:text-base font-light text-[#f5f5f0]/80">Edge Alpha Companies Tracked</div>
            </div>
            <div className="text-center p-8 border border-[#ff6b5a]/40 bg-white/5">
              <div className="text-4xl sm:text-5xl font-mono font-semibold text-[#ff6b5a] mb-2">5</div>
              <div className="text-sm sm:text-base font-light text-[#f5f5f0]/80">Initial Investments Made</div>
            </div>
            <div className="text-center p-8 border border-[#ff6b5a]/40 bg-white/5">
              <div className="text-4xl sm:text-5xl font-mono font-semibold text-[#ff6b5a] mb-2">4+</div>
              <div className="text-sm sm:text-base font-light text-[#f5f5f0]/80">Sectors Covered</div>
            </div>
          </div>

          {/* Portfolio Logos Carousel - Inspired by Kleiner Perkins */}
          <div className="relative overflow-hidden mb-12">
            <div className="flex gap-8 animate-scroll-slow hover:pause-animation">
              {[...portfolioCompanies, ...portfolioCompanies].map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center w-48 h-24 bg-white/5 border border-white/10 hover:border-[#7affd4]/50 transition-all duration-300 rounded-lg group cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-lg font-medium text-[#7affd4] mb-1 group-hover:scale-105 transition-transform">
                      {company.name}
                    </div>
                    <div className="text-xs font-light text-[#f5f5f0]/70">{company.sector}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sectors */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg font-light text-[#f5f5f0]/90 text-center mb-8">
              Across sectors including <span className="font-medium text-[#7affd4]">agriculture, water, healthcare, and spacetech</span>
            </p>

            {/* CTA Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/approach"
                className="inline-flex items-center gap-2 text-base font-medium text-[#ff6b5a] hover:text-[#ff8b7a] transition-colors"
              >
                Explore our approach
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <span className="text-[#f5f5f0]/40">|</span>
              <a
                href="/join"
                className="inline-flex items-center gap-2 text-base font-medium text-[#7affd4] hover:text-[#7affd4]/80 transition-colors"
              >
                Join the LP Collective
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
