"use client";

import { Badge } from "@/components/ui/badge";
import { Sparkles, Network, Map, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CardProps {
  icon: typeof Sparkles;
  title: string;
  description: string;
  points: string[];
  index: number;
}

function AnimatedCard({ icon: Icon, title, description, points, index }: CardProps) {
  const [progress, setProgress] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.9;
      const end = windowHeight * 0.5;

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

  const easedProgress = progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

  return (
    <div
      ref={cardRef}
      className="glass-card p-10 group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200 dark:hover:shadow-white/10"
      style={{
        opacity: easedProgress,
        transform: `translateY(${(1 - easedProgress) * 30}px)`,
      }}
    >
      {/* Icon */}
      <div
        className="flex items-center gap-5 mb-5"
        style={{
          opacity: easedProgress,
          transform: `translateX(${(1 - easedProgress) * -20}px)`,
        }}
      >
        <div className="p-4 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 group-hover:bg-gray-200 dark:group-hover:bg-white/10 transition-all duration-300">
          <Icon className="w-8 h-8 text-gray-900 dark:text-white" strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 dark:text-white">{title}</h3>
      </div>

      {/* Description */}
      <p
        className="font-extralight text-gray-700 dark:text-white/70 leading-relaxed mb-5 text-base lg:text-lg"
        style={{
          opacity: easedProgress * 0.9,
          transform: `translateY(${(1 - easedProgress) * 15}px)`,
        }}
      >
        {description}
      </p>

      {/* Points */}
      <div className="space-y-2">
        {points.map((point, i) => (
          <div
            key={i}
            className="text-sm lg:text-base font-extralight text-gray-500 dark:text-white/50 flex items-center gap-2"
            style={{
              opacity: Math.max(0, easedProgress - i * 0.05),
              transform: `translateX(${(1 - Math.max(0, easedProgress - i * 0.05)) * -10}px)`,
            }}
          >
            <div className="w-1.5 h-1.5 bg-gray-300 dark:bg-white/30 rounded-full" />
            {point}
          </div>
        ))}
      </div>
    </div>
  );
}

const cards = [
  {
    icon: Sparkles,
    title: "Conviction Capital",
    description: "We go early, where others hesitate. First-check courage backed by systematic signals.",
    points: ["80–120 seed investments", "Ecosystem-aligned carry", "Systemic, not unicorn chasing"]
  },
  {
    icon: Network,
    title: "Ecosystem Power",
    description: "Built with incubators, universities, and local partners. Embedded frontier access.",
    points: ["Programmatic value creation", "InnoSphere Academy", "Deep ecosystem integration"]
  },
  {
    icon: Map,
    title: "Distributed Access",
    description: "Beyond the metros. We invest in founders at the real frontiers of India.",
    points: ["Tier 2/3 innovation hubs", "University deep-tech labs", "Local founder networks", "Reaching talent where it rises"]
  },
  {
    icon: TrendingUp,
    title: "Edge Alpha Approach",
    description: "Signal-driven investing. Precision-led portfolio construction.",
    points: ["Algorithmic scoring", "Data-driven innovation mapping", "Outcome-based term sheets", "Repeatable discovery of outliers"]
  }
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <Badge className="mb-4 font-light bg-black dark:bg-white text-white dark:text-black border-black dark:border-white hover:bg-black/90 dark:hover:bg-white/90">
            Why Us
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight mb-6 text-gray-900 dark:text-white">
            Conviction capital meets
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="font-light">Edge Alpha precision</span>
          </h2>
        </div>

        {/* Animated 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <AnimatedCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              points={card.points}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
