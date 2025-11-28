"use client";

import { Badge } from "@/components/ui/badge";
import { TrendingUp, Globe, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CardData {
  icon: typeof TrendingUp;
  title: string;
  description: string;
  points: string[];
}

const cards: CardData[] = [
  {
    icon: TrendingUp,
    title: "Ecosystem Acceleration",
    description: "Frontier job growth ×55. Deep-tech surge. 1,000+ potential deep-tech unicorns.",
    points: ["The innovation flywheel is accelerating"]
  },
  {
    icon: Globe,
    title: "Geopolitical Realignment",
    description: "Post-China realignment. Global capital seeking trusted, democratic innovation hubs.",
    points: ["India as the next frontier"]
  },
  {
    icon: Users,
    title: "Demographic Supercycle",
    description: "World's largest young tech workforce. Tier 2/3 founders rising.",
    points: ["A demographic window that won't repeat"]
  }
];

function RevealCard({ card, index, total }: { card: CardData; index: number; total: number }) {
  const Icon = card.icon;
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`glass-card p-8 lg:p-10 rounded-2xl border border-white/10 transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="flex items-start gap-5">
        <div className="p-3 bg-white/10 rounded-xl border border-white/20 flex-shrink-0">
          <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
        </div>
        <div className="flex-1">
          <div className="text-xs font-extralight text-white/40 mb-1">
            0{index + 1} / 0{total}
          </div>
          <h3 className="text-xl lg:text-2xl font-light text-white mb-2">
            {card.title}
          </h3>
          <p className="text-sm font-extralight text-white/70 leading-relaxed mb-2">
            {card.description}
          </p>
          <div className="text-xs font-extralight text-white/50">
            {card.points.map((point, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-1 bg-white/40 rounded-full" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function WhyNow() {
  return (
    <section id="why-now" className="relative py-32 px-6 lg:px-12">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 font-light bg-white text-black border-white hover:bg-white/90">
            Why Now
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-extralight mb-6 text-white">
            The Three
            <br />
            <span className="font-light">Drivers</span>
          </h2>
        </div>

        {/* Cards - stack vertically with scroll reveal */}
        <div className="space-y-6">
          {cards.map((card, index) => (
            <RevealCard key={index} card={card} index={index} total={cards.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
