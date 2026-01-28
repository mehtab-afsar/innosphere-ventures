import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper } from "lucide-react";
import Link from "next/link";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { IndiaMap } from "@/components/IndiaMap";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 overflow-hidden py-24 md:py-0">
      {/* India Map Background - Hidden on mobile, visible on tablet+ */}
      <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 w-[60%] md:w-[55%] lg:w-[50%] h-[70%] md:h-[80%] lg:h-[90%]">
        <IndiaMap />
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
            className="leading-[1.15] mb-4 sm:mb-6 md:mb-8"
            style={{
              fontSize: 'clamp(2rem, 5vw + 1rem, 8rem)',
              letterSpacing: '-0.02em',
              fontWeight: 200
            }}
          >
            <span className="text-[#0a1128]">Conviction Capital
            <br />
            for India's</span>
            <br />
            <span style={{ fontWeight: 400 }} className="text-[#ff6b5a]">Edge Founders</span>
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl font-light text-[#0a1128]/80 max-w-2xl mb-8 sm:mb-10 md:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150"
          >
            InnoSphere Ventures exists to support deep-tech entrepreneurs across India who are building foundational technologies, often far from the spotlight.
          </p>

          {/* Stats Row - With Animated Counters inspired by YC/BVP */}
          <div className="flex flex-wrap gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-250">
            <div>
              <AnimatedCounter
                end={18}
                suffix="+"
                className="text-2xl sm:text-3xl font-mono font-medium text-[#0a1128] mb-1"
              />
              <div className="text-xs sm:text-sm font-light text-[#0a1128]/70">Companies Tracked</div>
            </div>
            <div>
              <AnimatedCounter
                end={5}
                className="text-2xl sm:text-3xl font-mono font-medium text-[#0a1128] mb-1"
              />
              <div className="text-xs sm:text-sm font-light text-[#0a1128]/70">Initial Investments</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-mono font-medium text-[#0a1128] mb-1 flex items-center gap-0">
                <span>$</span>
                <AnimatedCounter end={20} className="inline" />
                <span>K</span>
              </div>
              <div className="text-xs sm:text-sm font-light text-[#0a1128]/70">Min LP Ticket</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button size="lg" className="bg-[#ff6b5a] text-white hover:bg-[#ff6b5a]/90 font-medium text-sm sm:text-base group transition-all duration-300 hover:scale-105" asChild>
              <Link href="/approach">
                Our Approach
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-[#0a1128] text-[#0a1128] font-light text-sm sm:text-base hover:bg-[#0a1128]/10 hover:border-[#0a1128] transition-all duration-300" asChild>
              <Link href="/join">Join LP Collective</Link>
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}
