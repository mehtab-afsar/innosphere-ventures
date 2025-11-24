"use client";

import { Badge } from "@/components/ui/badge";
import { TrendingUp, Globe, Users, Zap } from "lucide-react";
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
    title: "Startup Explosion",
    description: "165,000+ startups. 55× job growth.",
    points: ["Outsourcing → Innovation → Leadership"]
  },
  {
    icon: Globe,
    title: "Geopolitical Shift",
    description: "Post-China realignment.",
    points: ["Global capital seeking alternatives"]
  },
  {
    icon: Users,
    title: "Diaspora Moment",
    description: "Capital and expertise returning home.",
    points: ["Reverse brain drain at scale"]
  },
  {
    icon: Zap,
    title: "Policy Momentum",
    description: "Digital infrastructure at scale.",
    points: ["Government-backed innovation"]
  }
];

function ScrollRevealCard({ card, index }: { card: CardData; index: number }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = card.icon;

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress: Very easy trigger with quick completion
      const startTrigger = windowHeight * 0.95; // Start animation almost immediately when entering viewport
      const endTrigger = windowHeight * 0.5;   // Complete when halfway up viewport

      if (rect.top <= startTrigger && rect.top >= endTrigger) {
        const progress = 1 - (rect.top - endTrigger) / (startTrigger - endTrigger);
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      } else if (rect.top < endTrigger) {
        setScrollProgress(1);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic styles based on scroll progress
  const opacity = scrollProgress;
  const scale = 0.85 + scrollProgress * 0.15; // Scale from 0.85 to 1
  const translateY = (1 - scrollProgress) * 60; // Move up from 60px to 0
  const blur = (1 - scrollProgress) * 8; // Blur from 8px to 0

  return (
    <div ref={cardRef} className="min-h-[40vh] flex items-center justify-center py-8">
      <div
        style={{
          opacity,
          transform: `translateY(${translateY}px) scale(${scale})`,
          filter: `blur(${blur}px)`,
          transition: 'filter 0.1s ease-out'
        }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start gap-6 mb-4">
            <div
              className="p-3 bg-white/5 rounded-lg border border-white/10 flex-shrink-0"
              style={{
                opacity: scrollProgress,
                transform: `scale(${0.9 + scrollProgress * 0.1})`,
              }}
            >
              <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <h3
                className="text-3xl font-light text-white mb-3"
                style={{
                  opacity: scrollProgress,
                }}
              >
                {card.title}
              </h3>
              <p
                className="font-extralight text-white/60 leading-relaxed text-base mb-3"
                style={{
                  opacity: scrollProgress * 0.9,
                }}
              >
                {card.description}
              </p>
              <div className="text-sm font-extralight text-white/40">
                {card.points.map((point, i) => (
                  <div
                    key={i}
                    style={{
                      opacity: Math.max(0, scrollProgress - i * 0.1),
                    }}
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WhyNow() {
  return (
    <section id="why-now" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center py-32 px-6 lg:px-12 scroll-reveal">
          <Badge className="mb-4 font-light bg-white text-black border-white hover:bg-white/90">
            Why Now
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-extralight mb-6 text-white">
            India's innovation flywheel
            <br />
            is <span className="font-light">accelerating</span>
          </h2>
        </div>

        {/* Scroll-Driven Cards */}
        <div>
          {cards.map((card, index) => (
            <ScrollRevealCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
