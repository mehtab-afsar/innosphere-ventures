"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { OceanGradient } from "@/components/OceanGradient";
import { Users, TrendingUp, Heart, Lightbulb } from "lucide-react";

export default function JoinPage() {
  return (
    <OceanGradient variant="landing">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 lg:px-12 py-32">
        <div className="max-w-7xl mx-auto w-full text-center">
          <div className="inline-block mb-6 px-6 py-3 border-2 border-[#ff6b5a] rounded-none">
            <span className="text-lg font-medium text-[#ff6b5a] tracking-wide">Join the LP Collective</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#0a1128] mb-8 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            <span className="font-semibold text-[#2a9a8e]">A small, thoughtful community</span>
            <br />
            <span className="font-light text-[#0a1128]">of investors backing India's edge founders</span>
          </h1>
          <p className="text-lg sm:text-xl font-light text-[#0a1128]/70 max-w-3xl mx-auto leading-relaxed">
            The LP Collective is our vehicle for individual and institutional investors who want access to India's frontier innovation ecosystem — without the overhead of traditional fund structures.
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 border border-[#2a9a8e]/30 bg-[#2a9a8e]/5">
              <div className="text-4xl sm:text-5xl font-mono font-semibold text-[#2a9a8e] mb-2">$20K</div>
              <p className="text-lg font-light text-[#0a1128]/80">Minimum investment</p>
            </div>
            <div className="p-10 border border-[#2a9a8e]/30 bg-[#2a9a8e]/5">
              <div className="text-4xl sm:text-5xl font-mono font-semibold text-[#2a9a8e] mb-2">0%</div>
              <p className="text-lg font-light text-[#0a1128]/80">Management fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0a1128] mb-6" style={{ letterSpacing: '-0.01em' }}>
              What You Get
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Early Access */}
            <div className="p-8 border border-[#0a1128]/10 hover:border-[#2a9a8e]/30 transition-all duration-300">
              <div className="mb-4">
                <Users className="w-10 h-10 text-[#2a9a8e]/60" strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-medium text-[#2a9a8e] mb-4">Early Access to Deals</h3>
              <p className="font-light text-[#0a1128]/80 leading-relaxed">
                See opportunities before they're widely circulated. Co-invest alongside us in companies tracked through the Edge Alpha platform.
              </p>
            </div>

            {/* Learning Community */}
            <div className="p-8 border border-[#0a1128]/10 hover:border-[#2a9a8e]/30 transition-all duration-300">
              <div className="mb-4">
                <Lightbulb className="w-10 h-10 text-[#2a9a8e]/60" strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-medium text-[#2a9a8e] mb-4">A Learning Community</h3>
              <p className="font-light text-[#0a1128]/80 leading-relaxed">
                Quarterly calls with portfolio founders, insights from the Edge Alpha research process, and access to a network of like-minded investors.
              </p>
            </div>

            {/* Portfolio Impact */}
            <div className="p-8 border border-[#0a1128]/10 hover:border-[#2a9a8e]/30 transition-all duration-300">
              <div className="mb-4">
                <TrendingUp className="w-10 h-10 text-[#2a9a8e]/60" strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-medium text-[#2a9a8e] mb-4">Portfolio Impact</h3>
              <p className="font-light text-[#0a1128]/80 leading-relaxed">
                Your capital goes directly into companies solving hard problems in agriculture, water, healthcare, energy, and frontier technologies.
              </p>
            </div>

            {/* Transparent Operations */}
            <div className="p-8 border border-[#0a1128]/10 hover:border-[#2a9a8e]/30 transition-all duration-300">
              <div className="mb-4">
                <Heart className="w-10 h-10 text-[#2a9a8e]/60" strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-medium text-[#2a9a8e] mb-4">Transparent Operations</h3>
              <p className="font-light text-[#0a1128]/80 leading-relaxed">
                Regular updates, clear reporting, and direct access to the team. No black boxes, no lengthy term sheets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 px-6 lg:px-12 bg-[#2a9a8e]/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0a1128] mb-6" style={{ letterSpacing: '-0.01em' }}>
              Who This Is For
            </h2>
          </div>

          <div className="space-y-6 text-lg font-light text-[#0a1128]/80 leading-relaxed">
            <p>
              <span className="font-medium text-[#2a9a8e]">•</span> Individuals who want exposure to early-stage Indian innovation without committing to a full fund cycle
            </p>
            <p>
              <span className="font-medium text-[#2a9a8e]">•</span> Entrepreneurs and operators who understand the risk and reward dynamics of seed investing
            </p>
            <p>
              <span className="font-medium text-[#2a9a8e]">•</span> Family offices and institutions looking for differentiated access to India's deep tech ecosystem
            </p>
            <p>
              <span className="font-medium text-[#2a9a8e]">•</span> Anyone curious about how conviction capital and Edge Alpha work in practice
            </p>
          </div>
        </div>
      </section>

      {/* Personal Sign-off & CTA */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl sm:text-2xl font-light text-[#0a1128]/90 mb-8 leading-relaxed">
            If this resonates, we'd love to hear from you.
          </p>

          <div className="mb-12">
            <p className="text-lg font-light text-[#0a1128]/70 mb-2">Upwards & Onwards,</p>
            <p className="text-xl font-medium text-[#2a9a8e]">Jocelyn & Roman</p>
          </div>

          <a
            href="/contact"
            className="inline-block px-12 py-4 bg-[#ff6b5a] text-white text-lg font-medium rounded-full hover:bg-[#ff6b5a]/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </OceanGradient>
  );
}
