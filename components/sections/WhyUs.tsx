"use client";

import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

const cards = [
  {
    title: "Conviction Capital",
    description: "We go early, where conviction comes before consensus. Our first checks are priced with discipline and backed by the patience to compound — not by momentum, hype, or narrative-driven investing."
  },
  {
    title: "Ecosystem Power",
    description: "Our access is built through deep partnerships with incubators, universities, and local ecosystem players — far beyond the major metros. This embedded position gives us early visibility into frontier innovation across Tier 2 and Tier 3 hubs, university deep-tech labs, and local founder networks, allowing us to reach talent where it rises, not where it is already priced."
  },
  {
    title: "Edge Alpha Approach",
    description: "Conviction alone is not enough. We pair it with signal-driven discovery, disciplined scoring, and repeatable portfolio construction — turning early insight into precision and compounding outcomes."
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
      id="why-us"
      className="relative py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header and Navigation */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-6 px-6 py-3 border-2 border-[#ff6b5a] rounded-none">
            <span className="text-lg font-medium text-[#ff6b5a] tracking-wide">Why Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#ff6b5a] mb-4" style={{ letterSpacing: '-0.01em' }}>
            Conviction capital meets
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="font-semibold text-[#2a9a8e]">Edge Alpha precision</span>
          </h2>
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
