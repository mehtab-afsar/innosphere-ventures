"use client";

import { Badge } from "@/components/ui/badge";
import { TrendingUp, Globe, Users } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { easeProgress } from "@/lib/animations";
import dynamic from "next/dynamic";

// Dynamically import ParticleSphere to avoid SSR issues
const ParticleSphere = dynamic(() => import("@/components/ParticleSphere").then(mod => ({ default: mod.ParticleSphere })), {
  ssr: false,
});

interface CardData {
  icon: typeof TrendingUp;
  number: string;
  title: string;
  description: string;
}

const cards: CardData[] = [
  {
    icon: TrendingUp,
    number: "01",
    title: "Ecosystem Acceleration",
    description: "India's innovation ecosystem has moved beyond experimentation. Capabilities are scaling across sectors, regions, and institutions. This is no longer emergence. It is acceleration."
  },
  {
    icon: Globe,
    number: "02",
    title: "Geopolitical Realignment",
    description: "Global capital is reallocating toward trusted, democratic innovation hubs. India is becoming a strategic center of gravity. Not by chance — by necessity."
  },
  {
    icon: Users,
    number: "03",
    title: "Demographic Supercycle",
    description: "India's young, technical workforce is entering its most productive years. A generation of builders is rising — across Tier 1, 2, and 3 cities. This window will not repeat."
  }
];

function ScrollCard({ card, index }: { card: CardData; index: number }) {
  const { ref, progress } = useScrollProgress({ start: 0.9, end: 0.5 });
  const easedProgress = easeProgress(progress);
  const Icon = card.icon;
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`py-12 flex ${isLeft ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className="max-w-xl w-full text-center min-h-[300px] flex flex-col justify-center transition-all duration-700 ease-out"
        style={{
          opacity: easedProgress,
          transform: `translateY(${(1 - easedProgress) * 30}px)`,
        }}
      >
        <div
          className="flex items-center justify-center gap-4 mb-4"
          style={{ opacity: easedProgress }}
        >
          <div className="h-px bg-gray-200 dark:bg-white/20 w-8" />
          <span className="text-sm font-extralight text-gray-400 dark:text-white/40 tracking-widest">{card.number}</span>
          <div className="h-px bg-gray-200 dark:bg-white/20 w-8" />
        </div>

        <div
          className="mb-4 flex justify-center"
          style={{
            opacity: easedProgress,
            transform: `scale(${0.8 + easedProgress * 0.2})`,
          }}
        >
          <Icon className="w-8 h-8 text-gray-500 dark:text-white/50" strokeWidth={1} />
        </div>

        <h3
          className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 dark:text-white mb-3"
          style={{ opacity: easedProgress }}
        >
          {card.title}
        </h3>

        <p
          className="text-sm sm:text-base font-extralight text-gray-600 dark:text-white/60 leading-relaxed"
          style={{ opacity: easedProgress * 0.9 }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
}

export function WhyNow() {
  return (
    <section id="why-now" className="relative min-h-screen flex items-center py-24 px-6 lg:px-12 overflow-hidden">
      {/* Blurred Particle Sphere Background - Enlarged and liquid-like */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
        <div className="w-[100%] h-[100%]" style={{ filter: 'blur(25px)' }}>
          <ParticleSphere scale={1.5} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 font-light bg-black dark:bg-white text-white dark:text-black border-black dark:border-white hover:bg-black/90 dark:hover:bg-white/90">
            Why Now
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-gray-900 dark:text-white mb-6">
            A Once-in-a-Generation Opportunity
          </h2>
          <div className="space-y-1 max-w-xl mx-auto">
            <p className="text-base sm:text-lg font-extralight text-gray-600 dark:text-white/60">
              The foundations are in place.
            </p>
            <p className="text-base sm:text-lg font-extralight text-gray-600 dark:text-white/60">
              The system is forming.
            </p>
            <p className="text-base sm:text-lg font-light text-gray-900 dark:text-white">
              What comes next will compound for decades.
            </p>
          </div>
        </div>

        {/* Scroll Cards - Stacked Layout */}
        <div className="relative space-y-8">
          {cards.map((card, index) => (
            <ScrollCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
