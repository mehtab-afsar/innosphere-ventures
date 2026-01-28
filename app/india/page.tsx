"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { OceanGradient } from "@/components/OceanGradient";

export default function IndiaPage() {
  return (
    <OceanGradient variant="landing">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex flex-col justify-center px-6 lg:px-12 py-32">
        <div className="max-w-7xl mx-auto w-full text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            <span className="font-semibold text-white">India as a</span>
            <br />
            <span className="font-light text-[#7affd4]">Deep Tech Nation</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-white/90 max-w-4xl mx-auto leading-relaxed">
            We think of this ecosystem as a forest,
            <br />
            not a race.
          </p>
        </div>
      </section>

      {/* Ecosystem Foundation */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed text-center">
            India's startup ecosystem has grown quietly and steadily over the last decade. More than 200,000 startups have emerged — not as a bubble, but as infrastructure.
          </p>

          <p className="text-base sm:text-lg font-light text-white/80 max-w-3xl mx-auto mb-16 text-center">
            What we see forming is a long-term foundation for:
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Foundation Points */}
            <div className="p-8 border border-white/10 bg-white/5">
              <h3 className="text-xl font-medium text-[#7affd4] mb-4">Homegrown Technological Capability</h3>
              <p className="font-light text-white/80 leading-relaxed">
                With defensible technology and IP, creating competitive products and services
              </p>
            </div>

            <div className="p-8 border border-white/10 bg-white/5">
              <h3 className="text-xl font-medium text-[#7affd4] mb-4">Strong Job Creation</h3>
              <p className="font-light text-white/80 leading-relaxed">
                Where startups create high-value jobs and employment spillovers into entire value chains
              </p>
            </div>

            <div className="p-8 border border-white/10 bg-white/5">
              <h3 className="text-xl font-medium text-[#7affd4] mb-4">Economic Sovereignty</h3>
              <p className="font-light text-white/80 leading-relaxed">
                Through national innovation capacity and industrial networks
              </p>
            </div>

            <div className="p-8 border border-white/10 bg-white/5">
              <h3 className="text-xl font-medium text-[#7affd4] mb-4">Domestic and Export-Led Growth</h3>
              <p className="font-light text-white/80 leading-relaxed">
                Which results in strong investor returns
              </p>
            </div>
          </div>

          <p className="text-base sm:text-lg font-light text-white/80 max-w-3xl mx-auto mt-16 text-center leading-relaxed">
            Our role as early stage investors is not to chase unicorns — but to help strong systems take root and scale.
          </p>
        </div>
      </section>

      {/* Impact and Returns */}
      <section className="py-24 px-6 lg:px-12 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-8 text-center leading-tight">
            Impact and Returns
          </h2>

          <p className="text-lg sm:text-xl font-light text-white/90 mb-12 leading-relaxed text-center max-w-4xl mx-auto">
            Long-term financial returns increasingly depend on solving persistently hard to solve problems
          </p>

          <div className="space-y-8">
            <p className="text-base sm:text-lg font-light text-white/80 leading-relaxed">
              We invest in areas such as <span className="font-medium text-[#ff6b5a]">agriculture, water, healthcare, energy, and frontier technologies</span> — not because it sounds virtuous, but because these are structural markets with real demand, long time horizons, and defensible value creation.
            </p>

            <div className="py-8 px-8 bg-white/5 border-l-4 border-[#7affd4]">
              <p className="text-xl sm:text-2xl font-light text-white/95 mb-4">
                Impact, for us, is not a constraint on returns.
              </p>
              <p className="text-lg font-light text-white/80">
                It is a filter against fragility, hype, and group think. <span className="font-semibold text-[#7affd4]">This is where true alpha is born.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </OceanGradient>
  );
}
