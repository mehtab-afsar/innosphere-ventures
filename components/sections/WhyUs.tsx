"use client";

import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { ChevronDown } from "lucide-react";

// Dynamically import ParticleSphere to avoid SSR issues
const ParticleSphere = dynamic(() => import("@/components/ParticleSphere").then(mod => ({ default: mod.ParticleSphere })), {
  ssr: false,
});

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
  const [isVisible, setIsVisible] = useState(false);
  const [sphereRotation, setSphereRotation] = useState(0);
  const [slideProgress, setSlideProgress] = useState(0);
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

      // Phase 1 (0-15%): Slide up animation - section comes into view
      // Phase 2 (15-40%): Stick on first card
      // Phase 3 (40-65%): Transition to second card
      // Phase 4 (65-100%): Transition to third card

      // Calculate slide progress (0 to 1) for the first 15% of scroll
      const slideAmount = Math.min(progress / 0.15, 1);
      setSlideProgress(slideAmount);

      // Check if section is visible (fully slid up)
      if (progress > 0.15) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Determine which card to show
      // Always default to first card until we're well into the section
      let index = 0;
      if (progress > 0.65) {
        index = 2;
      } else if (progress > 0.4) {
        index = 1;
      } else {
        index = 0; // Default to first card (Conviction Capital)
      }

      setCurrentIndex(index);

      // Sphere rotation: 0° -> 45° -> 90° based on currentIndex
      // Index 0: 0°, Index 1: 45°, Index 2: 90°
      setSphereRotation(Math.max(0, index) * 45);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative mb-24"
      style={{ height: '350vh', marginTop: '-100vh' }}
    >
      {/* Sticky container - stays fixed in viewport while scrolling, slides up like a page */}
      <div
        className="sticky top-0 h-screen flex flex-col justify-center px-6 lg:px-12 bg-white z-20 overflow-hidden"
        style={{
          transform: `translateY(${(1 - slideProgress) * 100}vh)`,
          willChange: 'transform'
        }}
      >
        {/* Half Sphere on Left - Large */}
        <div className="absolute left-0 top-[45%] -translate-y-1/2 w-[50%] h-full pointer-events-none hidden lg:block overflow-hidden">
          <div className="w-[1000px] h-[1000px] -ml-[500px]">
            <ParticleSphere scale={1.8} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 py-8">
          {/* Header and Navigation - Centered with nav on top right */}
          <div className={`mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <div className="flex justify-between items-start mb-6">
              <div className="text-center flex-1">
                <Badge className="mb-3 font-light bg-black text-white border-black hover:bg-black/90">
                  Why Us
                </Badge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-gray-900">
                  Conviction capital meets
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  <span className="font-light">Edge Alpha precision</span>
                </h2>
              </div>

              {/* Top Right Navigation */}
              <div className="hidden lg:flex gap-6 text-sm">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-300 ${
                      currentIndex === index
                        ? 'text-gray-900 font-medium'
                        : 'text-gray-400 font-light'
                    }`}
                  >
                    {card.title}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* All Three Cards - Active one enlarged */}
          <div className={`space-y-4 max-w-5xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            {cards.map((card, index) => (
              <div
                key={index}
                className={`transition-all duration-[1500ms] ease-in-out ${
                  currentIndex === index
                    ? 'scale-100'
                    : 'scale-95'
                }`}
              >
                <div className={`backdrop-blur-xl bg-white/30 border border-white/20 rounded-2xl transition-all duration-[1200ms] ease-in-out ${
                  currentIndex === index
                    ? 'shadow-2xl p-10'
                    : 'shadow-lg p-8'
                }`}>
                  <h3 className={`font-light text-gray-900 mb-4 transition-all duration-[1200ms] ease-in-out ${
                    currentIndex === index
                      ? 'text-2xl lg:text-3xl'
                      : 'text-xl lg:text-2xl'
                  }`}>
                    {card.title}
                  </h3>
                  <p className="font-extralight text-gray-600 leading-relaxed text-base lg:text-lg">
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
