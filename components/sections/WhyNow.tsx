"use client";

import { Badge } from "@/components/ui/badge";
import { TrendingUp, Globe, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
    description: "India's innovation ecosystem is accelerating faster than any major economy: frontier job growth is expanding 55×, deep-tech capacity is surging, and more than 1,000 potential deep-tech unicorns are emerging across the country."
  },
  {
    icon: Globe,
    number: "02",
    title: "Geopolitical Realignment",
    description: "A global post-China realignment is underway, with international capital actively seeking trusted, democratic innovation hubs — and India is rapidly becoming the most strategic destination."
  },
  {
    icon: Users,
    number: "03",
    title: "Demographic Supercycle",
    description: "India now holds the world's largest young tech workforce, with Tier 2/3 founders rising at historic speed — a once-in-a-century demographic window that will not repeat."
  }
];

function ScrollCard({ card, index }: { card: CardData; index: number }) {
  const [progress, setProgress] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = card.icon;

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Trigger animation quickly when card enters viewport
      const start = windowHeight * 0.95;
      const end = windowHeight * 0.6;

      if (rect.top <= start && rect.top >= end) {
        const p = 1 - (rect.top - end) / (start - end);
        setProgress(Math.max(0, Math.min(1, p)));
      } else if (rect.top < end) {
        setProgress(1);
      } else {
        setProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Eased progress for smoother animations
  const easedProgress = progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`py-12 flex ${isLeft ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className="max-w-xl w-full text-center"
        style={{
          opacity: easedProgress,
          transform: `translateY(${(1 - easedProgress) * 40}px)`,
        }}
      >
        {/* Number indicator */}
        <div
          className="flex items-center justify-center gap-4 mb-4"
          style={{ opacity: easedProgress }}
        >
          <div className="h-px bg-white/20 w-8" />
          <span className="text-sm font-extralight text-white/40 tracking-widest">{card.number}</span>
          <div className="h-px bg-white/20 w-8" />
        </div>

        {/* Icon */}
        <div
          className="mb-4 flex justify-center"
          style={{
            opacity: easedProgress,
            transform: `scale(${0.8 + easedProgress * 0.2})`,
          }}
        >
          <Icon className="w-8 h-8 text-white/50" strokeWidth={1} />
        </div>

        {/* Title */}
        <h3
          className="text-2xl lg:text-3xl font-light text-white mb-3"
          style={{ opacity: easedProgress }}
        >
          {card.title}
        </h3>

        {/* Description */}
        <p
          className="text-base font-extralight text-white/60 leading-relaxed"
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
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge className="mb-4 font-light bg-white text-black border-white hover:bg-white/90">
            Why Now
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-extralight text-white">
            A Once-in-a-Generation Opportunity
          </h2>
        </div>

        {/* Scroll Cards - Zig Zag Layout */}
        <div className="relative">
          {cards.map((card, index) => (
            <ScrollCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
