"use client";

import { Badge } from "@/components/ui/badge";
import { Users, Handshake, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface SectionCardProps {
  icon: typeof Users;
  title: string;
  description: string;
  subDescription: string;
  index: number;
}

function SectionCard({ icon: Icon, title, description, subDescription, index }: SectionCardProps) {
  const [progress, setProgress] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.9;
      const end = windowHeight * 0.4;

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
      className="relative group"
      style={{
        opacity: easedProgress,
        transform: `translateY(${(1 - easedProgress) * 40}px)`,
      }}
    >
      {/* Gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-300/50 via-gray-200/30 to-gray-300/50 dark:from-white/20 dark:via-white/10 dark:to-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      <div className="relative glass-card p-10 h-full">
        {/* Icon with animation */}
        <div
          className="mb-6"
          style={{
            opacity: easedProgress,
            transform: `scale(${0.8 + easedProgress * 0.2}) rotate(${(1 - easedProgress) * -5}deg)`,
          }}
        >
          <div className="p-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl w-fit group-hover:bg-gray-200 dark:group-hover:bg-white/10 group-hover:border-gray-300 dark:group-hover:border-white/20 transition-all duration-500">
            <Icon className="w-10 h-10 text-gray-900 dark:text-white" strokeWidth={1.5} />
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-2xl lg:text-3xl font-light text-gray-900 dark:text-white mb-5"
          style={{
            opacity: easedProgress,
            transform: `translateX(${(1 - easedProgress) * -15}px)`,
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-base lg:text-lg font-extralight text-gray-600 dark:text-white/70 leading-relaxed mb-4"
          style={{
            opacity: easedProgress * 0.9,
            transform: `translateY(${(1 - easedProgress) * 10}px)`,
          }}
        >
          {description}
        </p>

        {/* Sub Description */}
        <p
          className="text-sm lg:text-base font-extralight text-gray-500 dark:text-white/50 leading-relaxed"
          style={{
            opacity: easedProgress * 0.8,
            transform: `translateY(${(1 - easedProgress) * 15}px)`,
          }}
        >
          {subDescription}
        </p>

        {/* Decorative line */}
        <div
          className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/20 to-transparent"
          style={{
            transform: `scaleX(${easedProgress})`,
            opacity: easedProgress * 0.5,
          }}
        />
      </div>
    </div>
  );
}

const sections = [
  {
    icon: Users,
    title: "InnoSphere Collective I",
    description: "InnoSphere Collective members see the signal before the noise. They are conviction-first investors aligned with our mission to shape and accelerate India's innovation future.",
    subDescription: "InnoSphere Collective members gain early access to deal flow, co-investment opportunities, portfolio intelligence, and become part of a trusted community of like-minded peers."
  },
  {
    icon: Handshake,
    title: "Our Conviction Partners",
    description: "Our Conviction Partners are business leaders, mentors, and ecosystem builders who amplify our impact. They bring hands-on experience, tactical expertise, and strategic networks to help founders grow faster and smarter.",
    subDescription: "Conviction Partners support our portfolio with mentorship, operational guidance, and high-signal introductions across India and beyond."
  },
  {
    icon: Globe,
    title: "InnoSphere Diaspora Circles",
    description: "Our global Indian networks bring capital, expertise, and connectivity back home. Diaspora Circles create powerful cross-border bridges — opening markets, transferring knowledge, and enabling global partnerships.",
    subDescription: "Accelerating India's next innovation era through global connections and cross-border collaboration."
  }
];

export function OurCollective() {
  const [headerProgress, setHeaderProgress] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      const rect = headerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.9;
      const end = windowHeight * 0.5;

      if (rect.top <= start && rect.top >= end) {
        const p = 1 - (rect.top - end) / (start - end);
        setHeaderProgress(Math.max(0, Math.min(1, p)));
      } else if (rect.top < end) {
        setHeaderProgress(1);
      } else {
        setHeaderProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const easedHeader = headerProgress < 0.5
    ? 2 * headerProgress * headerProgress
    : 1 - Math.pow(-2 * headerProgress + 2, 2) / 2;

  return (
    <section id="collective" className="py-32 px-6 lg:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className="mb-20 text-center"
          style={{
            opacity: easedHeader,
            transform: `translateY(${(1 - easedHeader) * 30}px)`,
          }}
        >
          <Badge className="mb-4 font-light bg-black dark:bg-white text-white dark:text-black border-black dark:border-white hover:bg-black/90 dark:hover:bg-white/90">
            Our Collective
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-extralight mb-6 text-gray-900 dark:text-white">
            InnoSphere
            <br />
            <span className="font-light">Ecosystem Council</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sections.map((section, index) => (
            <SectionCard
              key={index}
              icon={section.icon}
              title={section.title}
              description={section.description}
              subDescription={section.subDescription}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
