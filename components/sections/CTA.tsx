import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl p-12 lg:p-20 border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/5 group">
          <div className="max-w-4xl">
            <h2 className="text-4xl lg:text-5xl font-extralight mb-6 text-white">
              This is your
              <br />
              <span className="font-light">invitation</span>
            </h2>
            <div className="space-y-4 text-xl font-extralight text-white/70 mb-12">
              <p>To be more than just an LP.</p>
              <p>To help architect the India you want to see.</p>
              <p>To help shape a new kind of venture house.</p>
              <p>To build not only wealth — but a <span className="text-white font-light">legacy</span>.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 font-light text-base group transition-all duration-300 hover:scale-105">
                Join the Collective
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white font-light text-base hover:bg-white/10 transition-all duration-300 hover:border-white/50">
                Explore the Thesis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
