"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper } from "lucide-react";
import Link from "next/link";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { BackgroundPaths } from "@/components/ui/background-paths";

// ─── Hero ────────────────────────────────────────────────────────────────────

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 overflow-hidden py-24 md:py-0 bg-white">

      {/* Animated background paths */}
      <BackgroundPaths />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">

          {/* Press Release Badge */}
          <a
            href="/assets/documents/Press Release/Press Release Full Version 1- FV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-10 group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-300">
              <Newspaper className="w-3.5 h-3.5 text-gray-400" strokeWidth={1.5} />
              <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Press Release</span>
              <ArrowRight className="w-3 h-3 text-gray-400 group-hover:translate-x-0.5 transition-transform duration-300" />
            </div>
          </a>

          <h1
            className="leading-[1.08] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100"
            style={{
              fontSize: "clamp(2.8rem, 5vw + 1rem, 7rem)",
              letterSpacing: "-0.03em",
              fontWeight: 200,
            }}
          >
            <span className="text-[#0a1128]">Conviction Capital</span>
            <br />
            <span className="text-[#0a1128]">for India's </span>
            <span style={{ fontWeight: 400, fontStyle: 'italic', letterSpacing: '-0.01em' }} className="text-[#ff6b5a]">Edge Founders</span>
          </h1>

          <p className="text-base sm:text-lg font-light text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Scaling early-stage venture for India's deep tech expansion — powered by Edge Alpha, our proprietary investment operating system.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-10 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="border-l border-gray-200 pl-5 text-left">
              <AnimatedCounter end={18} suffix="+" className="text-2xl font-mono font-medium text-[#0a1128] mb-0.5" />
              <div className="text-xs font-light text-gray-400 uppercase tracking-wider">Companies Tracked</div>
            </div>
            <div className="border-l border-gray-200 pl-5 text-left">
              <AnimatedCounter end={5} className="text-2xl font-mono font-medium text-[#0a1128] mb-0.5" />
              <div className="text-xs font-light text-gray-400 uppercase tracking-wider">Investments</div>
            </div>
            <div className="border-l border-gray-200 pl-5 text-left">
              <div className="text-2xl font-mono font-medium text-[#0a1128] mb-0.5">
                $<AnimatedCounter end={20} className="inline" />K
              </div>
              <div className="text-xs font-light text-gray-400 uppercase tracking-wider">Min LP Ticket</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <Button
              size="lg"
              className="bg-[#0a1128] text-white hover:bg-[#0a1128]/90 font-medium text-sm group transition-all duration-300 rounded-none px-8"
              asChild
            >
              <Link href="/approach">
                Our Approach
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border border-gray-200 text-[#0a1128] font-light text-sm hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 rounded-none px-8"
              asChild
            >
              <Link href="/join">Join LP Collective</Link>
            </Button>
          </div>

      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-100" />
    </section>
  );
}
