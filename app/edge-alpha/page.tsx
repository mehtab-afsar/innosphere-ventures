"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps = [
  {
    number: "01",
    title: "Upload",
    body: "Drop your pitch deck. Edge Alpha extracts and scores up to 30 indicators across 6 parameters automatically. Supported formats: PDF, PPTX, Google Slides link.",
  },
  {
    number: "02",
    title: "Targeted questions",
    body: "3 adaptive questions fill the gaps that would move your score most. No form-filling. No fluff. Each question is chosen based on what your deck left ambiguous.",
  },
  {
    number: "03",
    title: "Your IQ Score",
    body: "A live, partial score based on what you've shared — with a clear breakdown of what to improve and by how much. Benchmarked against 450+ sector data points.",
  },
];

const parameters = [
  {
    code: "P1",
    name: "Market Readiness",
    subtitle: "Market Validation",
    description: "Paying customers, customer conversations, retention, sales cycle length, and commitment level — LOIs and signed contracts.",
    indicators: "5 indicators",
  },
  {
    code: "P2",
    name: "Market Potential",
    subtitle: "Market & Competition",
    description: "TAM size, market urgency (why now), competitor landscape, and degree of differentiation from existing solutions.",
    indicators: "4 indicators",
  },
  {
    code: "P3",
    name: "IP & Defensibility",
    subtitle: "Technology",
    description: "Patents and trade secrets, months to replicate, technical depth, and build complexity. What stops a well-funded competitor from copying this in 6 months?",
    indicators: "4 indicators",
  },
  {
    code: "P4",
    name: "Founder & Team",
    subtitle: "People",
    description: "Years of domain experience, founder-market fit, and functional coverage across tech, sales, and product. The right team for this specific problem.",
    indicators: "3 indicators",
  },
  {
    code: "P5",
    name: "Structural Impact",
    subtitle: "Mission Alignment",
    description: "Impact focus and mission alignment. Weighted low for most sectors — weighted higher for health and climate. Not a vibe check; a structural signal.",
    indicators: "2 indicators",
  },
  {
    code: "P6",
    name: "Financials",
    subtitle: "Business Model",
    description: "MRR/ARR, monthly burn rate, runway in months, and gross margin. Does the unit economics story hold at the next stage of scale?",
    indicators: "4 indicators",
  },
];

export default function EdgeAlphaPage() {
  return (
    <div className="bg-white">
      <Navigation />

      {/* ── Hero — full viewport ── */}
      <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 border-b border-gray-100 relative overflow-hidden">
        {/* Subtle grid background — matches approach page */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#0a1128 1px, transparent 1px), linear-gradient(90deg, #0a1128 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-7xl mx-auto w-full pt-24 pb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 mb-10 px-3 py-1 border border-[#ff6b5a]/30 text-xs font-medium text-[#ff6b5a] uppercase tracking-widest"
          >
            Edge Alpha · Proprietary Operating System
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="text-[#0a1128] mb-8 leading-[1.05] max-w-5xl"
            style={{
              fontSize: "clamp(3rem, 7vw + 1rem, 9rem)",
              fontWeight: 200,
              letterSpacing: "-0.03em",
            }}
          >
            Your IQ Score for<br />
            <span style={{ fontWeight: 500 }} className="text-[#ff6b5a]">
              Investor Readiness
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.22 }}
            className="text-xl font-light text-gray-500 max-w-2xl leading-relaxed mb-16"
          >
            Edge Alpha benchmarks every dimension that matters to institutional investors — market, team, IP, traction, financials — and gives you a single, actionable score in minutes.
          </motion.p>

          {/* Metrics strip + CTA */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-200 max-w-3xl">
            {[
              { v: "30", l: "Scoring Indicators" },
              { v: "6", l: "Parameters" },
              { v: "450+", l: "Sector Data Points" },
            ].map(({ v, l }, i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.34 + i * 0.08 }}
                className="bg-white px-6 py-5"
              >
                <div className="text-2xl font-mono font-medium text-[#0a1128]">{v}</div>
                <div className="text-xs font-light text-gray-400 mt-1">{l}</div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.58 }}
              className="bg-white px-6 py-5 flex items-center"
            >
              <a
                href="https://edgealpha.vc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#0a1128] hover:text-[#ff6b5a] transition-colors duration-200 group"
              >
                Assess My Startup
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute bottom-10 left-6 lg:left-12 flex items-center gap-2 text-xs font-light text-gray-300"
          >
            <div className="w-px h-8 bg-gray-200" />
            Scroll to explore
          </motion.div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-20 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-xl mb-12">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
                How it works
              </p>
              <h2
                className="text-[#0a1128] leading-[1.15]"
                style={{
                  fontSize: "clamp(1.8rem, 3vw + 0.5rem, 3rem)",
                  fontWeight: 200,
                  letterSpacing: "-0.02em",
                }}
              >
                Three steps to your<br />
                <span style={{ fontWeight: 500 }}>readiness score</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.12}>
                <div className="bg-[#f9fafb] p-8 border border-gray-100 h-full">
                  <div className="text-xs font-mono text-gray-300 mb-4">{step.number}</div>
                  <h3 className="text-base font-medium text-[#0a1128] mb-3">{step.title}</h3>
                  <p className="text-sm font-light text-gray-500 leading-relaxed">{step.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scoring framework ── */}
      <section className="py-20 px-6 lg:px-12 bg-[#f9fafb] border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Sticky sidebar — matches Edge Alpha OS in approach page */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="sticky top-28">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
                  Scoring framework
                </p>
                <h2
                  className="text-[#0a1128] mb-6 leading-[1.15]"
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw + 0.5rem, 2.5rem)",
                    fontWeight: 200,
                    letterSpacing: "-0.02em",
                  }}
                >
                  6 parameters.<br />30 indicators.<br />
                  <span style={{ fontWeight: 500 }} className="text-[#ff6b5a]">
                    Zero guesswork.
                  </span>
                </h2>
                <p className="text-sm font-light text-gray-500 leading-relaxed">
                  Every indicator maps to a question an institutional investor will ask. Edge Alpha asks it first — and scores the answer before you're in the room.
                </p>
              </div>
            </div>

            {/* Parameter cards */}
            <div className="flex-1 space-y-4">
              {parameters.map((param, i) => (
                <FadeIn key={param.code} delay={i * 0.08} direction="right">
                  <div className="p-8 bg-white border border-gray-100 hover:border-gray-200 transition-colors">
                    <div className="flex items-start gap-6">
                      <span className="text-xs font-mono text-[#ff6b5a] mt-1 flex-shrink-0 w-6">{param.code}</span>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
                          <h3 className="text-base font-medium text-[#0a1128]">{param.name}</h3>
                          <span className="text-xs font-light text-[#0d9488] uppercase tracking-wider">— {param.subtitle}</span>
                        </div>
                        <p className="text-sm font-light text-gray-500 leading-relaxed mb-3">{param.description}</p>
                        <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                          <span className="text-[#ff6b5a]">→</span>
                          {param.indicators}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 lg:px-12 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-light text-[#0a1128] mb-2">
              Know where you stand before the room does.
            </h2>
            <p className="text-sm font-light text-gray-500">
              Edge Alpha is available exclusively to founders in the InnoSphere network.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-[#0a1128] text-white hover:bg-[#0a1128]/90 font-medium text-sm group transition-all duration-300 rounded-none px-8 flex-shrink-0"
            asChild
          >
            <a href="https://edgealpha.vc" target="_blank" rel="noopener noreferrer">
              Assess My Startup
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
