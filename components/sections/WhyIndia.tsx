"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { StartupEcosystemChart } from "@/components/StartupEcosystemChart";

export function WhyIndia() {
  return (
    <section id="why-india" className="py-32 px-6 lg:px-12 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <Badge className="mb-4 font-light bg-black dark:bg-white text-white dark:text-black border-black dark:border-white hover:bg-black/90 dark:hover:bg-white/90">
            Why India
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight mb-6 text-gray-900 dark:text-white leading-tight">
            India's innovation flywheel is accelerating —
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="font-light">a Deep Tech Nation is emerging.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-extralight text-gray-600 dark:text-white/60 max-w-3xl mx-auto mb-6">
            India's startup ecosystem is a fast-expanding galaxy.
          </p>
          <p className="text-sm sm:text-base md:text-lg font-extralight text-gray-500 dark:text-white/50 max-w-3xl mx-auto mb-8">
            This is the new innovation cosmos of India — distributed, diverse, and accelerating.
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>A nation moving from outsourcing to innovation and tech leadership:
          </p>
          <Button size="sm" className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 font-medium text-sm">
            Be Part of Next India
          </Button>
        </div>

        {/* Bento Grid Layout */}
        <div className="max-w-5xl mx-auto space-y-6">

          {/* Combined Stats Row */}
          <div className="glass-card group hover:scale-[1.01] transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200 dark:hover:shadow-white/10 scroll-reveal">
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Startups */}
                <div className="text-center md:text-left">
                  <AnimatedCounter target={165000} suffix="+" className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-1" />
                  <p className="text-base font-light text-gray-900 dark:text-white">Startups</p>
                  <p className="text-sm font-extralight text-gray-500 dark:text-white/50 mt-1">
                    Distributed innovation across India
                  </p>
                </div>

                {/* Divider - visible on md+ */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-px h-20 bg-gray-200 dark:bg-white/10"></div>
                </div>
                {/* Mobile divider */}
                <div className="md:hidden w-full h-px bg-gray-200 dark:bg-white/10"></div>

                {/* Deep Tech + Job Growth */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <AnimatedCounter target={1000} suffix="+" className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-1" />
                    <p className="text-xs md:text-sm font-extralight text-gray-500 dark:text-white/50">Deep tech unicorn potential</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-1">
                      <AnimatedCounter target={55} suffix="×" />
                    </div>
                    <p className="text-xs md:text-sm font-extralight text-gray-500 dark:text-white/50">Job growth in frontier sectors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Startup Ecosystem Chart - Full Width */}
          <div className="glass-card group hover:scale-[1.01] transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200 dark:hover:shadow-white/10 scroll-reveal">
            <div className="p-6 md:p-8">
              <StartupEcosystemChart />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Animated Counter Component
function AnimatedCounter({
  target,
  suffix = "",
  className = ""
}: {
  target: number;
  suffix?: string;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCounter();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  const animateCounter = () => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
  };

  return (
    <div ref={countRef} className={className}>
      {count.toLocaleString()}{suffix}
    </div>
  );
}
