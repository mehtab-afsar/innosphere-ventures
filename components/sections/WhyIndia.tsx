"use client";

import { Badge } from "@/components/ui/badge";

export function WhyIndia() {
  return (
    <section id="why-india" className="py-32 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-block mb-6 px-6 py-3 border-2 border-[#ff6b5a] rounded-none">
            <span className="text-lg font-medium text-[#ff6b5a] tracking-wide">India as a Deep Tech Nation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight" style={{ letterSpacing: '-0.01em' }}>
            <span className="font-semibold text-[#ff6b5a]">We think of this ecosystem as a forest,</span>
            <br />
            <span className="font-light text-[#2a9a8e]">not a race.</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-[#0a1128]/90 max-w-3xl mx-auto mb-8 leading-relaxed" style={{ letterSpacing: '0.01em' }}>
            India's startup ecosystem has grown quietly and steadily over the last decade. More than 200,000 startups have emerged — not as a bubble, but as infrastructure.
          </p>
        </div>

        {/* What We See Forming - 4 Points */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl sm:text-2xl font-medium text-[#f5f5f0] mb-8 text-center">
            What we see forming is a long-term foundation for:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Point 1 */}
            <div className="p-8 border border-[#ff6b5a]/40 hover:border-[#ff6b5a]/60 transition-all duration-300 bg-white/5">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#ff6b5a] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-medium text-[#ff6b5a] mb-2">Homegrown Technological Capability</h3>
                  <p className="text-base font-light text-[#f5f5f0]/80 leading-relaxed">
                    With defensible technology and IP, creating competitive products and services
                  </p>
                </div>
              </div>
            </div>

            {/* Point 2 */}
            <div className="p-8 border border-[#ff6b5a]/40 hover:border-[#ff6b5a]/60 transition-all duration-300 bg-white/5">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#ff6b5a] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-medium text-[#ff6b5a] mb-2">Strong Job Creation</h3>
                  <p className="text-base font-light text-[#f5f5f0]/80 leading-relaxed">
                    Where startups create high-value jobs and employment spillovers into entire value chains
                  </p>
                </div>
              </div>
            </div>

            {/* Point 3 */}
            <div className="p-8 border border-[#ff6b5a]/40 hover:border-[#ff6b5a]/60 transition-all duration-300 bg-white/5">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#ff6b5a] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-medium text-[#ff6b5a] mb-2">Economic Sovereignty</h3>
                  <p className="text-base font-light text-[#f5f5f0]/80 leading-relaxed">
                    Through national innovation capacity and industrial networks
                  </p>
                </div>
              </div>
            </div>

            {/* Point 4 */}
            <div className="p-8 border border-[#ff6b5a]/40 hover:border-[#ff6b5a]/60 transition-all duration-300 bg-white/5">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#ff6b5a] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-medium text-[#ff6b5a] mb-2">Domestic and Export-Led Growth</h3>
                  <p className="text-base font-light text-[#f5f5f0]/80 leading-relaxed">
                    Which results in strong investor returns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Role Statement */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="py-8 px-6 border-t border-b border-[#7affd4]/30">
            <p className="text-xl sm:text-2xl font-light text-[#f5f5f0]/90 leading-relaxed">
              Our role as early stage investors is not to chase unicorns —{" "}
              <span className="font-semibold text-[#7affd4]">but to help strong systems take root and scale.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
