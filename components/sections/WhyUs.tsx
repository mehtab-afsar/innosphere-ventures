import { Badge } from "@/components/ui/badge";
import { Sparkles, Network, Map, TrendingUp } from "lucide-react";

export function WhyUs() {
  return (
    <section id="why-us" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center scroll-reveal">
          <Badge className="mb-4 font-light bg-white text-black border-white hover:bg-white/90">
            Why Us
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-extralight mb-6 text-white">
            Conviction capital meets
            <br />
            <span className="font-light">Edge Alpha precision</span>
          </h2>
        </div>

        {/* Compact 2x2 Grid with Glassmorphism */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          <div className="glass-card p-8 group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 scroll-reveal">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                <Sparkles className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-light text-white">Conviction Capital</h3>
            </div>
            <p className="font-extralight text-white/60 leading-relaxed mb-4 text-sm">
              We go early, where others hesitate. First-check courage backed by systematic signals.
            </p>
            <div className="space-y-1 text-xs font-extralight text-white/40">
              <div>80–120 seed investments</div>
              <div>0% management fee (first close)</div>
              <div>Carry-aligned with ecosystem</div>
            </div>
          </div>

          <div className="glass-card p-8 group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 scroll-reveal">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                <Network className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-light text-white">Ecosystem Power</h3>
            </div>
            <p className="font-extralight text-white/60 leading-relaxed mb-4 text-sm">
              We build with incubators, universities, and local partners. Community-first investing.
            </p>
            <div className="space-y-1 text-xs font-extralight text-white/40">
              <div>KIIT-TBI partnership</div>
              <div>Harvard Trek diaspora bridge</div>
              <div>Portfolio-first value creation</div>
            </div>
          </div>

          <div className="glass-card p-8 group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 scroll-reveal">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                <Map className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-light text-white">Distributed Access</h3>
            </div>
            <p className="font-extralight text-white/60 leading-relaxed mb-4 text-sm">
              Beyond the metros. Tier 2/3 founders, local LP circles, diaspora bridges.
            </p>
            <div className="space-y-1 text-xs font-extralight text-white/40">
              <div>Reaching founders where they are</div>
              <div>Local capital circles</div>
              <div>Inclusive innovation ecosystem</div>
            </div>
          </div>

          <div className="glass-card p-8 group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 scroll-reveal">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                <TrendingUp className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-light text-white">Edge Alpha Approach</h3>
            </div>
            <p className="font-extralight text-white/60 leading-relaxed mb-4 text-sm">
              Signal-driven investing. Portfolio construction meets precision execution.
            </p>
            <div className="space-y-1 text-xs font-extralight text-white/40">
              <div>Systematic signals & data patterns</div>
              <div>Early exit opportunities</div>
              <div>Powered by Edge Alpha frameworks</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
