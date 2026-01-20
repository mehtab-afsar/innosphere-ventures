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
    title: "Early Entry",
    description: "We engage way before narratives are formed and valuations become established - promising outside returns at optimal, risk-adjusted entries."
  },
  {
    icon: Users,
    number: "02",
    title: "Shared Risk",
    description: "We invest alongside incubators, governments, angels, and international co-investors who are close to the founders and the technology, and who have real skin as well as significant promise for further commercialization."
  },
  {
    icon: Globe,
    number: "03",
    title: "Catalytic",
    description: "We structure early investments to preserve and expand optionality. For teams building category-defining technologies, we concentrate conviction. Where outcomes mature faster, we retain the ability to realize early liquidity and recycle capital effectively."
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
    <section id="how-we-invest" className="relative py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6 px-6 py-3 border-2 border-[#7affd4] rounded-none">
            <span className="text-lg font-medium text-[#7affd4] tracking-wide">How We Invest</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#7affd4] mb-8" style={{ letterSpacing: '-0.01em' }}>
            Our approach is deliberately simple
          </h2>
          <div className="space-y-2 max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl font-light text-[#f5f5f0]/80 leading-relaxed">
              We focus on three principles that guide our investment decisions and our work with founders.
            </p>
          </div>
        </div>

        {/* Scroll Cards - Stacked Layout */}
        <div className="relative space-y-8 mb-12">
          {cards.map((card, index) => (
            <ScrollCard key={index} card={card} index={index} />
          ))}
        </div>

        {/* Closing Statement */}
        <div className="max-w-2xl mx-auto text-center mt-16">
          <div className="py-8 px-6 border-t border-b border-[#7affd4]/30">
            <p className="text-lg sm:text-xl font-light text-[#f5f5f0]/90 leading-relaxed mb-4">
              But most importantly:{" "}
              <span className="font-semibold text-[#7affd4]">We don't just invest in companies.</span>
            </p>
            <p className="text-base sm:text-lg font-light text-[#f5f5f0]/70 leading-relaxed">
              We help position them for follow-on capital, strategic partnerships, and international market access — so that capital follows performance, and our risks get compensated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
