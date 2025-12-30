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
        {/* Glowing Ring Effects Container */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Outer Ring - Slow Pulse */}
          <div className="absolute w-[85%] h-[85%] rounded-full border border-cyan-400/20 dark:border-cyan-400/30 animate-pulse-glow"
               style={{
                 boxShadow: '0 0 80px rgba(34, 211, 238, 0.3), inset 0 0 80px rgba(34, 211, 238, 0.1)',
                 animation: 'pulse-glow 4s ease-in-out infinite, rotate-slow 20s linear infinite'
               }} />

          {/* Middle Ring - Medium Pulse with Rotation */}
          <div className="absolute w-[70%] h-[70%] rounded-full border border-purple-400/20 dark:border-purple-400/30"
               style={{
                 boxShadow: '0 0 60px rgba(192, 132, 252, 0.4), inset 0 0 60px rgba(192, 132, 252, 0.15)',
                 animation: 'pulse-glow 3s ease-in-out infinite 0.5s, rotate-medium 15s linear infinite reverse'
               }} />

          {/* Inner Ring - Fast Shimmer */}
          <div className="absolute w-[55%] h-[55%] rounded-full border border-rose-400/20 dark:border-rose-400/30"
               style={{
                 boxShadow: '0 0 40px rgba(251, 113, 133, 0.5), inset 0 0 40px rgba(251, 113, 133, 0.2)',
                 animation: 'pulse-glow 2s ease-in-out infinite 1s, rotate-fast 10s linear infinite'
               }} />

          {/* Core Glow - Breathing Effect */}
          <div className="absolute w-[40%] h-[40%] rounded-full"
               style={{
                 background: 'radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, rgba(192, 132, 252, 0.1) 50%, transparent 70%)',
                 filter: 'blur(20px)',
                 animation: 'breathe 6s ease-in-out infinite'
               }} />
        </div>

        <ParticleSphere />
      </div>

      {/* CSS Keyframe Animations */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rotate-medium {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rotate-fast {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes breathe {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.15);
          }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000 md:-ml-8 lg:-ml-12">
          {/* Press Release Badge */}
          <a
            href="/Press Release/Press Release Full Version 1- FV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-6 sm:mb-8 group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-1000"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-cyan-400/40 dark:border-cyan-400/60 shadow-lg transition-all duration-300 group-hover:border-cyan-400/60 dark:group-hover:border-cyan-400/80">
              <Newspaper className="w-4 h-4 text-cyan-500 dark:text-cyan-400" strokeWidth={1.5} />
              <span className="text-sm font-light text-gray-700 dark:text-gray-200">Press Release</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 group-hover:translate-x-0.5 transition-transform duration-300" />
            </div>
          </a>

          <h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extralight leading-[1.15] mb-4 sm:mb-6 md:mb-8 text-gray-900 dark:text-gray-100"
          >
            Empowering
            <br />
            Innovators.
            <br />
            <span className="font-light">Elevating Futures.</span>
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-extralight text-gray-600 dark:text-gray-400 max-w-2xl mb-6 sm:mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150"
          >
            A new venture force for India's innovation frontier.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button size="lg" className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 font-light text-sm sm:text-base group transition-all duration-300 hover:scale-105" asChild>
              <Link href="/thesis">
                Discover Our Thesis
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 dark:border-white/30 text-gray-900 dark:text-white font-light text-sm sm:text-base hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 hover:border-gray-400 dark:hover:border-white/50" asChild>
              <Link href="/join">Join the Movement</Link>
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}
