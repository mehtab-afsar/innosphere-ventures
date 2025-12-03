"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CTA() {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.9;
      const end = windowHeight * 0.4;

      if (rect.top <= start && rect.top >= end) {
        const p = 1 - (rect.top - end) / (start - end);
        setProgress(Math.max(0, Math.min(1, p)));
      } else if (rect.top < end) {
        setProgress(1);
      } else {
        setProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const easedProgress = progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

  return (
    <section id="contact" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div
          ref={sectionRef}
          className="rounded-2xl p-12 lg:p-20 border border-gray-200 dark:border-white/20 hover:border-gray-300 dark:hover:border-white/40 transition-all duration-500 hover:bg-gray-50 dark:hover:bg-white/5 group relative overflow-hidden"
          style={{
            opacity: easedProgress,
            transform: `translateY(${(1 - easedProgress) * 30}px)`,
          }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl relative z-10">
            {/* Logo/Brand */}
            <div
              className="text-3xl font-extralight mb-2 text-gray-900 dark:text-white"
              style={{
                opacity: easedProgress,
                transform: `translateX(${(1 - easedProgress) * -20}px)`,
              }}
            >
              InnoSphere <span className="font-normal">Ventures</span>
            </div>

            {/* Tagline */}
            <div
              className="space-y-1 text-xl font-extralight text-gray-700 dark:text-white/70 mb-12"
              style={{
                opacity: easedProgress * 0.9,
                transform: `translateX(${(1 - easedProgress) * -15}px)`,
              }}
            >
              <p>Empowering innovators.</p>
              <p>Elevating futures.</p>
            </div>

            {/* Main Headlines */}
            <div className="space-y-4 mb-12">
              <h2
                className="text-4xl lg:text-5xl font-extralight text-gray-900 dark:text-white tracking-wide"
                style={{
                  opacity: easedProgress,
                  transform: `translateY(${(1 - easedProgress) * 20}px)`,
                }}
              >
                WE OPERATE AT THE
                <br />
                <span className="font-light">NEXT FRONTIER</span>
              </h2>
              <div
                className="flex items-center gap-4"
                style={{
                  opacity: easedProgress * 0.8,
                  transform: `translateY(${(1 - easedProgress) * 25}px)`,
                }}
              >
                <div className="h-px bg-gray-300 dark:bg-white/30 w-12" />
                <p className="text-xl lg:text-2xl font-extralight text-gray-600 dark:text-white/60 tracking-widest">
                  POWERED BY <span className="font-light text-gray-800 dark:text-white/80">EDGE ALPHA</span>
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{
                opacity: easedProgress,
                transform: `translateY(${(1 - easedProgress) * 30}px)`,
              }}
            >
              <Button size="lg" className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 font-light text-base group transition-all duration-300 hover:scale-105">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 dark:border-white/30 text-gray-900 dark:text-white font-light text-base hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 hover:border-gray-400 dark:hover:border-white/50">
                LP Inquiries
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
