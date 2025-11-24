import { Badge } from "@/components/ui/badge";
import { Heart, Battery, TestTube } from "lucide-react";

export function EdgeAlphaSignals() {
  return (
    <section id="signals" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center scroll-reveal">
          <Badge className="mb-4 font-light bg-white text-black border-white hover:bg-white/90">
            Portfolio
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-extralight mb-6 text-white">
            Signals that
            <br />
            <span className="font-light">matter</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-24 max-w-6xl mx-auto">
          {/* Inochi Care */}
          <div className="group scroll-reveal">
            <div className="mb-8 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
              <Heart className="w-12 h-12 text-white" strokeWidth={1} />
            </div>
            <h3 className="text-3xl font-light text-white mb-4">Inochi Care</h3>
            <p className="text-lg font-extralight text-white/50 leading-relaxed">
              Wound healing technology.<br />100+ hospitals.
            </p>
          </div>

          {/* Meine Electric */}
          <div className="group scroll-reveal">
            <div className="mb-8 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
              <Battery className="w-12 h-12 text-white" strokeWidth={1} />
            </div>
            <h3 className="text-3xl font-light text-white mb-4">Meine Electric</h3>
            <p className="text-lg font-extralight text-white/50 leading-relaxed">
              Clean energy cells.<br />Emission-free power.
            </p>
          </div>

          {/* Pragmatech */}
          <div className="group scroll-reveal">
            <div className="mb-8 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
              <TestTube className="w-12 h-12 text-white" strokeWidth={1} />
            </div>
            <h3 className="text-3xl font-light text-white mb-4">Pragmatech</h3>
            <p className="text-lg font-extralight text-white/50 leading-relaxed">
              HPV screening.<br />CDSCO approved.
            </p>
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-sm font-extralight text-white/30">
            Portfolio as of 2025
          </p>
        </div>
      </div>
    </section>
  );
}
