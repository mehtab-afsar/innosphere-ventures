"use client";

import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

const cards = [
  {
    title: "The Old Paradigm",
    description: "Early-stage investing has long been treated as an exclusive art — shaped by intuition, experience, and personal networks. VC has been a highly concentrated domain — historically male-dominated, closed circles, and defined by restricted access to information and opportunities."
  },
  {
    title: "The Radical Shift",
    description: "Today, AI and large language models make it possible to identify winning patterns across teams, technologies, company trajectories and valuations, and track entire innovation ecosystems — at a scale and consistency that was previously impossible."
  },
  {
    title: "Edge Alpha is Built on This",
    description: "Our investment platform allows us to detect investment readiness earlier, compare signals more systematically, and allocate conviction with greater precision — particularly in frontier and under-mapped markets such as India."
  }
];

export function WhyUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const scrollableHeight = sectionHeight - window.innerHeight;

      // How far we've scrolled into the section
      const scrolled = -rect.top;

      // Progress from 0 to 1 through the section
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      // Determine which card to show based on scroll progress
      let index = 0;
      if (progress > 0.65) {
        index = 2;
      } else if (progress > 0.35) {
        index = 1;
      } else {
        index = 0;
      }

      setCurrentIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="edge-alpha"
      className="relative py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header and Navigation */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-6 px-6 py-3 border-2 border-[#ff6b5a] rounded-none">
            <span className="text-lg font-medium text-[#ff6b5a] tracking-wide">Edge Alpha</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#ff6b5a] mb-4" style={{ letterSpacing: '-0.01em' }}>
            A New Paradigm for
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="font-semibold text-[#2a9a8e]">Venture Investing</span>
          </h2>
          <p className="text-base sm:text-lg font-light text-[#f5f5f0]/80 max-w-2xl mx-auto mt-6">
            Judgment mattered, and it still does. But the game has changed.
          </p>
        </div>

        {/* Navigation Pills */}
        <div className="hidden lg:flex justify-center gap-6 text-base mb-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                currentIndex === index
                  ? 'text-[#ff6b5a] font-medium'
                  : 'text-[#f5f5f0]/60 font-light'
              }`}
            >
              {card.title}
            </div>
          ))}
        </div>

        {/* All Three Cards */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`transition-all duration-[1500ms] ease-in-out ${
                currentIndex === index
                  ? 'scale-100'
                  : 'scale-95'
              }`}
            >
              <div className={`transition-all duration-[1200ms] ease-in-out ${
                currentIndex === index
                  ? 'p-10'
                  : 'p-8'
              }`}>
                <h3 className={`font-medium text-[#2a9a8e] mb-4 transition-all duration-[1200ms] ease-in-out ${
                  currentIndex === index
                    ? 'text-2xl lg:text-4xl'
                    : 'text-xl lg:text-3xl'
                }`}>
                  {card.title}
                </h3>
                <p className="font-light text-[#f5f5f0]/70 leading-relaxed text-lg lg:text-xl">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
