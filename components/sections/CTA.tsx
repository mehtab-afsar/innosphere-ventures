import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl p-12 lg:p-20 border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/5 group">
          <div className="max-w-4xl">
            <div className="text-3xl font-extralight mb-2 text-white">
              InnoSphere <span className="font-normal">Ventures</span>
            </div>
            <div className="space-y-2 text-xl font-extralight text-white/70 mb-8">
              <p>Empowering innovators.</p>
              <p>Elevating futures.</p>
            </div>
            <div className="space-y-3 mb-12">
              <p className="text-2xl font-light text-white">
                WE OPERATE AT THE NEXT FRONTIER
              </p>
              <p className="text-lg font-extralight text-white/60">
                WE ARE POWERED BY EDGE ALPHA
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 font-light text-base group transition-all duration-300 hover:scale-105">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white font-light text-base hover:bg-white/10 transition-all duration-300 hover:border-white/50">
                LP Inquiries
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
