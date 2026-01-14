"use client";

import { Badge } from "@/components/ui/badge";
import { TrendingUp, Globe, Users } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { easeProgress } from "@/lib/animations";

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

  // Color mapping for each card - teal for titles
  const titleColor = '#2a9a8e';

  return (
    <div
      ref={ref}
      className={`py-12 flex ${isLeft ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className="max-w-xl w-full text-center flex flex-col justify-center transition-all duration-700 ease-out"
        style={{
          opacity: easedProgress,
          transform: `translateY(${(1 - easedProgress) * 30}px)`,
        }}
      >
        <div
          className="flex items-center justify-center gap-4 mb-4"
          style={{ opacity: easedProgress }}
        >
          <div className="h-px bg-[#2a9a8e]/30 w-8" />
          <span className="text-base font-light text-[#f5f5f0]/50 tracking-widest">{card.number}</span>
          <div className="h-px bg-[#2a9a8e]/30 w-8" />
        </div>

        <div
          className="mb-4 flex justify-center"
          style={{
            opacity: easedProgress,
            transform: `scale(${0.8 + easedProgress * 0.2})`,
          }}
        >
          <Icon className="w-10 h-10 text-[#2a9a8e]/60" strokeWidth={1} />
        </div>

        <h3
          className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4"
          style={{ opacity: easedProgress, color: titleColor }}
        >
          {card.title}
        </h3>

        <p
          className="text-base sm:text-lg font-light text-[#f5f5f0]/70 leading-relaxed"
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
    <section id="why-now" className="relative py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6 px-6 py-3 border-2 border-[#7affd4] rounded-none">
            <span className="text-lg font-medium text-[#7affd4] tracking-wide">Why Now</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#7affd4] mb-8" style={{ letterSpacing: '-0.01em' }}>
            A Once-in-a-Generation Opportunity
          </h2>
          <div className="space-y-2 max-w-xl mx-auto">
            <p className="text-lg sm:text-xl font-light text-[#f5f5f0]/60">
              The foundations are in place.
            </p>
            <p className="text-lg sm:text-xl font-light text-[#f5f5f0]/60">
              The system is forming.
            </p>
            <p className="text-lg sm:text-xl font-semibold text-[#f5f5f0]">
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
