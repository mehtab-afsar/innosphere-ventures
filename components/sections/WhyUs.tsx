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

      // Determine which card to show (0, 1, or 2)
      const index = Math.min(2, Math.floor(progress * 3));
      setCurrentIndex(Math.max(0, index));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative mb-32"
      style={{ height: '180vh' }}
    >
      {/* Sticky container - stays fixed in viewport while scrolling */}
      <div className="sticky top-0 h-screen flex flex-col justify-start pt-24 sm:pt-28 md:pt-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto w-full">
          {/* Header */}
          <div className="mb-8 text-center">
            <Badge className="mb-3 font-light bg-black dark:bg-white text-white dark:text-black border-black dark:border-white hover:bg-black/90 dark:hover:bg-white/90">
              Why Us
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight mb-4 text-gray-900 dark:text-white">
              Conviction capital meets
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="font-light">Edge Alpha precision</span>
            </h2>

            {/* Section navigation - shows all titles, highlights revealed */}
            <div className="flex items-center justify-center gap-8 sm:gap-14 md:gap-20 mt-8">
              {cards.map((card, index) => (
                <span
                  key={index}
                  className={`text-base sm:text-lg md:text-xl transition-all duration-300 ${
                    currentIndex >= index
                      ? 'font-semibold text-gray-900 dark:text-white'
                      : 'font-extralight text-gray-400 dark:text-white/40'
                  }`}
                >
                  {card.title}
                </span>
              ))}
            </div>

            {/* Progress indicators (dots) - cumulative */}
            <div className="flex gap-3 justify-center mt-6">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex >= index
                      ? 'bg-gray-900 dark:bg-white'
                      : 'bg-gray-300 dark:bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Card display area - cards stack as you scroll */}
          <div className="space-y-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ease-out ${
                  currentIndex >= index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4 h-0 overflow-hidden'
                }`}
              >
                <div className="pl-4 lg:pl-6 border-l-2 border-gray-300 dark:border-white/20">
                  <h3 className="text-xl lg:text-2xl font-light text-gray-900 dark:text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-base lg:text-lg font-extralight text-gray-600 dark:text-white/60 leading-relaxed max-w-2xl">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
