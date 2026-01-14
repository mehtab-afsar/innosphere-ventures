import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import ParticleSphere to avoid SSR issues with Three.js
const ParticleSphere = dynamic(() => import("@/components/ParticleSphere").then(mod => ({ default: mod.ParticleSphere })), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-2 border-gray-300 dark:border-gray-600 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 overflow-hidden py-24 md:py-0">
      {/* 3D Particle Sphere Background - Hidden on mobile, visible on tablet+ */}
      <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 w-[60%] md:w-[55%] lg:w-[50%] h-[70%] md:h-[80%] lg:h-[90%]">
        <ParticleSphere />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000 md:-ml-8 lg:-ml-12">
          {/* Press Release Badge */}
          <a
            href="/assets/documents/Press Release/Press Release Full Version 1- FV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-6 sm:mb-8 group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-1000"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a1128]/10 backdrop-blur-sm border border-[#1a6f8f]/40 shadow-lg transition-all duration-300 group-hover:border-[#1a6f8f]/60 group-hover:bg-[#0a1128]/15">
              <Newspaper className="w-4 h-4 text-[#1a6f8f]" strokeWidth={1.5} />
              <span className="text-sm font-light text-[#0a1128]">Press Release</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#1a6f8f] group-hover:translate-x-0.5 transition-transform duration-300" />
            </div>
          </a>

          <h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extralight leading-[1.15] mb-4 sm:mb-6 md:mb-8"
            style={{ letterSpacing: '-0.02em' }}
          >
            <span className="text-[#ff6b5a]">Empowering
            <br />
            Innovators.</span>
            <br />
            <span className="font-light text-[#2a9a8e]">Elevating Futures.</span>
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-[#0a1128]/80 max-w-2xl mb-6 sm:mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150"
            style={{ letterSpacing: '0.01em' }}
          >
            A new venture force for India's innovation frontier.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button size="lg" className="bg-[#ff6b5a] text-white hover:bg-[#ff6b5a]/90 font-medium text-sm sm:text-base group transition-all duration-300 hover:scale-105" asChild>
              <Link href="/thesis">
                Discover Our Thesis
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-[#2a9a8e] text-[#2a9a8e] font-light text-sm sm:text-base hover:bg-[#2a9a8e]/10 hover:border-[#2a9a8e] transition-all duration-300" asChild>
              <Link href="/join">Join the Movement</Link>
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}
