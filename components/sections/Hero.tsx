import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-6xl lg:text-8xl font-extralight leading-[1.1] mb-8 text-gray-100">
            Empowering
            <br />
            Innovators.
            <br />
            <span className="font-light">Elevating Futures.</span>
          </h1>
          <p className="text-xl lg:text-2xl font-extralight text-gray-400 max-w-2xl mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            A new venture force for India's innovation frontier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 font-light text-base group transition-all duration-300 hover:scale-105">
              Discover Our Thesis
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white font-light text-base hover:bg-white/10 transition-all duration-300 hover:border-white/50">
              Join the Movement
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
