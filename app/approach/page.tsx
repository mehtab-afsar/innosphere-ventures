"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { OceanGradient } from "@/components/OceanGradient";
import { TrendingUp, Globe, Users } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { easeProgress } from "@/lib/animations";
import { useEffect, useRef, useState } from "react";

interface CardData {
  icon: typeof TrendingUp;
  number: string;
  title: string;
  description: string;
}

const investmentCards: CardData[] = [
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

const edgeAlphaCards = [
  {
    title: "The Old Paradigm",
    description: "Early-stage investing has long been treated as an exclusive art — shaped by intuition, experience, and personal networks. VC has been a highly concentrated domain — historically male-dominated, closed circles, and defined by restricted access to information and opportunities."
  },
  {
    title: "The Radical Shift",
    description: "Today, AI and large language models make it possible to identify winning patterns across teams, technologies, company trajectories and valuations, and track entire innovation ecosystems — at a scale and consistency that was previously impossible."
  },
  {
    title: "Edge Alpha is Built on This",
    description: "Our investment platform allows us to detect investment readiness earlier, compare signals more systematically, and allocate conviction with greater precision — particularly in frontier and under-mapped markets such as India."
  }
];

function ScrollCard({ card, index }: { card: CardData; index: number }) {
  const { ref, progress } = useScrollProgress({ start: 0.9, end: 0.5 });
  const easedProgress = easeProgress(progress);
  const Icon = card.icon;

  return (
    <div ref={ref} className="py-12">
      <div
        className="max-w-3xl mx-auto text-center transition-all duration-700 ease-out"
        style={{
          opacity: easedProgress,
          transform: `translateY(${(1 - easedProgress) * 30}px)`,
        }}
      >
        <div className="flex items-center justify-center gap-4 mb-4" style={{ opacity: easedProgress }}>
          <div className="h-px bg-[#2a9a8e]/30 w-8" />
          <span className="text-base font-light text-[#0a1128]/50 tracking-widest">{card.number}</span>
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
          className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 text-[#2a9a8e]"
          style={{ opacity: easedProgress }}
        >
          {card.title}
        </h3>

        <p
          className="text-base sm:text-lg font-light text-[#0a1128]/80 leading-relaxed"
          style={{ opacity: easedProgress * 0.9 }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
}

function EdgeAlphaSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const scrollableHeight = sectionHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block mb-6 px-6 py-3 border-2 border-[#ff6b5a] rounded-none">
            <span className="text-lg font-medium text-[#ff6b5a] tracking-wide">Edge Alpha</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#f5f5f0] mb-4 leading-tight" style={{ letterSpacing: '-0.01em' }}>
            A New Paradigm for{" "}
            <span className="font-semibold text-[#7affd4]">Venture Investing</span>
          </h2>
          <p className="text-base sm:text-lg font-light text-[#f5f5f0]/80 max-w-2xl mx-auto mt-6">
            Judgment mattered, and it still does. But the game has changed.
          </p>
        </div>

        {/* Navigation Pills */}
        <div className="hidden lg:flex justify-center gap-6 text-base mb-8">
          {edgeAlphaCards.map((card, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                currentIndex === index
                  ? 'text-[#ff6b5a] font-medium'
                  : 'text-[#f5f5f0]/50 font-light'
              }`}
            >
              {card.title}
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {edgeAlphaCards.map((card, index) => (
            <div
              key={index}
              className={`transition-all duration-[1500ms] ease-in-out ${
                currentIndex === index ? 'scale-100' : 'scale-95'
              }`}
            >
              <div
                className={`border transition-all duration-[1200ms] ease-in-out ${
                  currentIndex === index ? 'p-10 border-[#7affd4]/40 bg-white/5' : 'p-8 border-white/10 bg-white/[0.02]'
                }`}
              >
                <h3
                  className={`font-medium text-[#7affd4] mb-4 transition-all duration-[1200ms] ease-in-out ${
                    currentIndex === index ? 'text-2xl lg:text-4xl' : 'text-xl lg:text-3xl'
                  }`}
                >
                  {card.title}
                </h3>
                <p className="font-light text-[#f5f5f0]/80 leading-relaxed text-lg lg:text-xl">
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

export default function ApproachPage() {
  return (
    <OceanGradient variant="landing">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 lg:px-12 py-32">
        <div className="max-w-7xl mx-auto w-full text-center">
          <div className="inline-block mb-6 px-6 py-3 border-2 border-[#2a9a8e] rounded-none">
            <span className="text-lg font-medium text-[#2a9a8e] tracking-wide">Our Approach</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#0a1128] mb-8 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            <span className="font-semibold text-[#ff6b5a]">Our approach is</span>
            <br />
            <span className="font-light text-[#2a9a8e]">deliberately simple</span>
          </h1>
          <p className="text-lg sm:text-xl font-light text-[#0a1128]/70 max-w-3xl mx-auto leading-relaxed">
            We focus on three principles that guide our investment decisions and our work with founders.
          </p>
        </div>
      </section>

      {/* How We Invest Section */}
      <section className="py-32 px-6 lg:px-12 relative">
        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-8 mb-16">
            {investmentCards.map((card, index) => (
              <ScrollCard key={index} card={card} index={index} />
            ))}
          </div>

          {/* Closing Statement */}
          <div className="max-w-2xl mx-auto text-center mt-16">
            <div className="py-8 px-6 border-t border-b border-[#7affd4]/30 bg-white/5">
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

      {/* Edge Alpha Section */}
      <EdgeAlphaSection />

      <Footer />
    </OceanGradient>
  );
}
