"use client";

import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";
import { StartupEcosystemChart } from "@/components/StartupEcosystemChart";

export function WhyIndia() {
  return (
    <section id="why-india" className="py-32 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <Badge className="mb-4 font-light bg-[#7affd4]/10 text-[#f5f5f0] border-[#7affd4]/30 hover:bg-[#7affd4]/20">
            Why India
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-[#f5f5f0] leading-tight" style={{ letterSpacing: '-0.01em' }}>
            India's innovation story is accelerating.
            <br />
            <span className="font-semibold text-[#2a9a8e]">A deep tech nation is emerging.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-light text-[#f5f5f0]/70 max-w-3xl mx-auto mb-4" style={{ letterSpacing: '0.01em' }}>
            The country is transitioning from services-led growth to systems-led growth — powered by digital infrastructure, deep tech capabilities, industrial policy, and distributed talent.
          </p>
          <p className="text-sm sm:text-base md:text-lg font-light text-[#f5f5f0]/60 max-w-3xl mx-auto mb-6">
            This is not the familiar "startup surge" narrative. This is structural transformation.
          </p>
          <div className="max-w-2xl mx-auto mb-8 py-6 border-t border-b border-[#7affd4]/20">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#2a9a8e] mb-4" style={{ letterSpacing: '0.01em' }}>
              Conviction comes before consensus.
            </p>
            <p className="text-sm sm:text-base font-light text-[#f5f5f0]/60">
              India's innovation economy has reached a transition point. It is no longer defined by isolated success stories, but by reinforcing systems — infrastructure, talent, policy, and demand compounding together. This is the phase where conviction matters most: before consensus is obvious, but after fundamentals are in place.
            </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="max-w-5xl mx-auto space-y-6">

          {/* Combined Stats Row */}
          <div className="glass-card group hover:scale-[1.01] transition-all duration-500 hover:shadow-2xl hover:shadow-[#7affd4]/5 scroll-reveal">
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
                {/* Startups */}
                <div className="text-center md:pl-16">
                  <AnimatedCounter target={165000} suffix="+" className="text-4xl md:text-5xl font-medium text-[#ff6b5a] mb-1" />
                  <p className="text-base font-light text-[#f5f5f0]">Startups</p>
                  <p className="text-sm font-light text-[#f5f5f0]/60 mt-1">
                    Distributed innovation across India
                  </p>
                </div>

                {/* Divider - visible on md+ */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-px h-20 bg-[#7affd4]/20"></div>
                </div>
                {/* Mobile divider */}
                <div className="md:hidden w-full h-px bg-[#7affd4]/20"></div>

                {/* Deep Tech */}
                <div className="text-center">
                  <AnimatedCounter target={1000} suffix="+" className="text-4xl md:text-5xl font-medium text-[#ff6b5a] mb-1" />
                  <p className="text-base font-light text-[#f5f5f0]">Deep Tech Unicorn Potential</p>
                </div>
              </div>
            </div>
          </div>

          {/* Startup Ecosystem Chart - Full Width */}
          <div className="glass-card group hover:scale-[1.01] transition-all duration-500 hover:shadow-2xl hover:shadow-[#7affd4]/5 scroll-reveal">
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
