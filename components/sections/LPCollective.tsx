"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LPCollective() {
  return (
    <section id="lp-collective" className="py-32 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-3 border-2 border-[#ff6b5a] rounded-none">
              <span className="text-lg font-medium text-[#ff6b5a] tracking-wide">Join the LP Collective</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#0a1128] mb-8 leading-tight" style={{ letterSpacing: '-0.01em' }}>
              A small, thoughtful community of investors
            </h2>
            <p className="text-lg sm:text-xl font-light text-[#0a1128]/80 leading-relaxed max-w-3xl mx-auto">
              We are building a small, thoughtful LP Collective — investors who care about learning, contribution, and long-term value creation.
            </p>
          </div>

          {/* Value Props Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 border border-[#2a9a8e]/20 hover:border-[#2a9a8e]/40 transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-mono font-semibold text-[#2a9a8e] mb-3">$20K</div>
              <div className="text-sm sm:text-base font-medium text-[#0a1128] mb-2">Minimum Ticket Size</div>
              <div className="text-sm font-light text-[#0a1128]/70">Accessible entry point for strategic investors</div>
            </div>
            <div className="p-8 border border-[#2a9a8e]/20 hover:border-[#2a9a8e]/40 transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-mono font-semibold text-[#2a9a8e] mb-3">0%</div>
              <div className="text-sm sm:text-base font-medium text-[#0a1128] mb-2">Management Fees</div>
              <div className="text-sm font-light text-[#0a1128]/70">Until final close of LP Collective I</div>
            </div>
          </div>

          {/* What You Get */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-light text-[#0a1128] mb-6 text-center">What You Get</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 bg-[#f5f5f0]/30 border border-[#0a1128]/10">
                <div className="w-2 h-2 rounded-full bg-[#ff6b5a] mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-base font-light text-[#0a1128]/80 leading-relaxed">
                    <span className="font-medium">Early Access</span> to Edge Alpha deal flow and investment insights from frontier markets
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-[#f5f5f0]/30 border border-[#0a1128]/10">
                <div className="w-2 h-2 rounded-full bg-[#ff6b5a] mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-base font-light text-[#0a1128]/80 leading-relaxed">
                    <span className="font-medium">Learning Community</span> with regular updates, founder stories, and market intelligence
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-[#f5f5f0]/30 border border-[#0a1128]/10">
                <div className="w-2 h-2 rounded-full bg-[#ff6b5a] mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-base font-light text-[#0a1128]/80 leading-relaxed">
                    <span className="font-medium">Portfolio Impact</span> supporting deep-tech innovation solving real problems across India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center py-8 border-t border-b border-[#0a1128]/20 mb-12">
            <p className="text-xl sm:text-2xl font-light text-[#0a1128]/90 mb-4">
              If this resonates, we'd be glad to talk.
            </p>
            <p className="text-base font-light text-[#0a1128]/70">
              Upwards & Onwards,<br />
              <span className="font-medium">Jocelyn & Roman</span><br />
              Founding Partners, InnoSphere Ventures
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-[#ff6b5a] text-white hover:bg-[#ff6b5a]/90 font-medium text-base px-12 py-6 transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
