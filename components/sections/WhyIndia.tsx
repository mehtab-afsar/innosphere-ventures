"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, MapPin, Users, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
          <Badge className="mb-4 font-light bg-white text-black border-white hover:bg-white/90">
            Why India
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-extralight mb-6 text-gray-900 dark:text-white leading-tight">
            India's innovation flywheel is accelerating —
            <br />
            <span className="font-light">a Deep Tech Nation is emerging.</span>
          </h2>
          <p className="text-xl font-extralight text-gray-600 dark:text-white/60 max-w-3xl mx-auto mb-6">
            India's startup ecosystem is a fast-expanding galaxy.
          </p>
          <p className="text-lg font-extralight text-gray-500 dark:text-white/50 max-w-3xl mx-auto mb-8">
            This is the new innovation cosmos of India — distributed, diverse, and accelerating.
            <br />
            A nation moving from outsourcing to innovation and tech leadership:
          </p>
          <Button size="sm" className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 font-medium text-sm">
            Be Part of Next India
          </Button>
        </div>

        {/* Simple 2-Column Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Large Feature Card - Startups */}
          <div className="glass-card group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200 dark:hover:shadow-white/10 scroll-reveal">
            <div className="h-full flex flex-col justify-between p-8">
              <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 w-fit group-hover:bg-gray-200 dark:group-hover:bg-white/10 transition-all duration-300">
                <Users className="w-8 h-8 text-gray-900 dark:text-white" strokeWidth={1.5} />
              </div>
              <div className="text-center">
                <AnimatedCounter target={165000} suffix="+" className="text-8xl font-light text-gray-900 dark:text-white mb-4" />
                <p className="text-2xl font-light text-gray-900 dark:text-white mb-3">Startups</p>
                <p className="text-base font-extralight text-gray-500 dark:text-white/50">
                  Distributed innovation across every corner of India
                </p>
              </div>
            </div>
          </div>

          {/* Row with two smaller stat cards */}
          <div className="flex gap-4 justify-center">
            {/* Stat Card - Deep Tech Unicorns */}
            <div className="glass-card group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200 dark:hover:shadow-white/10 scroll-reveal flex-1 max-w-[200px]">
              <div className="h-full flex flex-col justify-center items-center p-4">
                <div className="text-center">
                  <AnimatedCounter target={1000} suffix="+" className="text-4xl font-light text-gray-900 dark:text-white mb-1" />
                  <p className="text-sm font-extralight text-gray-600 dark:text-white/60">Deep tech unicorn potential</p>
                </div>
              </div>
            </div>

            {/* Stat Card - Job Growth */}
            <div className="glass-card group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200 dark:hover:shadow-white/10 scroll-reveal flex-1 max-w-[200px]">
              <div className="h-full flex flex-col justify-center items-center p-4">
                <div className="text-center">
                  <div className="text-4xl font-light text-gray-900 dark:text-white mb-1">
                    <AnimatedCounter target={55} />×
                  </div>
                  <p className="text-sm font-extralight text-gray-600 dark:text-white/60">Job growth in frontier sectors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Card - Systemic Impact */}
          <div className="glass-card group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200 dark:hover:shadow-white/10 scroll-reveal">
            <div className="h-full p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-100 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 w-fit group-hover:bg-gray-200 dark:group-hover:bg-white/10 transition-all duration-300">
                  <Target className="w-6 h-6 text-gray-900 dark:text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-light text-gray-900 dark:text-white">Systemic Impact</h3>
              </div>
              <p className="text-lg font-extralight text-gray-600 dark:text-white/60 leading-relaxed mb-4">
                Every investment creates ripples across the innovation ecosystem.
              </p>
              <div className="space-y-2 text-base font-extralight text-gray-500 dark:text-white/50">
                <div>R&D + IP generation</div>
                <div>High-quality job creation</div>
                <div>Economic growth acceleration</div>
              </div>
            </div>
          </div>

          {/* Content Card - Homegrown Innovation */}
          <div className="glass-card group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200 dark:hover:shadow-white/10 scroll-reveal">
            <div className="h-full p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-100 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 w-fit group-hover:bg-gray-200 dark:group-hover:bg-white/10 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-gray-900 dark:text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-light text-gray-900 dark:text-white">Homegrown Innovation</h3>
              </div>
              <p className="text-lg font-extralight text-gray-600 dark:text-white/60 leading-relaxed mb-4">
                India's rise won't be outsourced. Innovation from every corner.
              </p>
              <div className="space-y-2 text-base font-extralight text-gray-500 dark:text-white/50">
                <div>Tier 2/3 city breakthroughs</div>
                <div>IITs, ISRO, DRDO ecosystem</div>
                <div>World-class engineering at scale</div>
              </div>
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
