"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps = [
  {
    number: "1",
    title: "Upload",
    body: "Drop your pitch deck. Edge Alpha extracts and scores up to 30 indicators across 6 parameters automatically. Supported formats: PDF, PPTX, Google Slides link.",
  },
  {
    number: "2",
    title: "Targeted questions",
    body: "3 adaptive questions fill the gaps that would move your score most. No form-filling. No fluff. Each question is chosen based on what your deck left ambiguous.",
  },
  {
    number: "3",
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
    <div className="bg-white min-h-screen">
      <Navigation />

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 lg:px-12 pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto w-full">

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-5"
          >
            Edge Alpha · Proprietary Operating System
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.08 }}
            className="text-[#0a1128] leading-[1.1] mb-6"
            style={{
              fontSize: "clamp(2.2rem, 4vw + 1rem, 5rem)",
              fontWeight: 200,
              letterSpacing: "-0.03em",
            }}
          >
            Your IQ Score for{" "}
            <span style={{ fontWeight: 400, fontStyle: "italic" }} className="text-[#ff6b5a]">
              Investor Readiness
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.16 }}
            className="text-base sm:text-lg font-light text-gray-500 leading-relaxed mb-10 max-w-xl"
          >
            Edge Alpha benchmarks every dimension that matters to institutional investors — market, team, IP, traction, financials — and gives you a single, actionable score in minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.24 }}
          >
            <Button
              size="lg"
              className="bg-[#0a1128] text-white hover:bg-[#0a1128]/90 font-medium text-sm group transition-all duration-300 rounded-none px-8"
              asChild
            >
              <a href="https://edgealpha.vc" target="_blank" rel="noopener noreferrer">
                Assess My Startup
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </Button>
          </motion.div>

        </div>
      </section>

      {/* ── Three-step flow ── */}
      <section className="py-20 px-6 lg:px-12 bg-[#f9fafb] border-b border-gray-100">
        <div className="max-w-2xl mx-auto">

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-10"
          >
            How it works
          </motion.p>

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease, delay: i * 0.1 }}
                className="relative flex flex-col gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#ff6b5a] text-white text-sm font-medium flex items-center justify-center shrink-0">
                  {step.number}
                </div>
                <p className="text-sm font-medium text-[#0a1128] uppercase tracking-widest">
                  {step.title}
                </p>
                <p className="text-sm font-light text-gray-500 leading-relaxed">
                  {step.body}
                </p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-0 -right-5 bottom-0 border-r border-gray-200" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Metrics strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-3 py-8 border-y border-gray-200 mt-14 text-sm font-mono font-medium text-[#0a1128]"
          >
            <span>30 indicators</span>
            <span className="text-gray-300">·</span>
            <span>6 parameters</span>
            <span className="text-gray-300">·</span>
            <span>Benchmarked against 450+ sector data points</span>
          </motion.div>

        </div>
      </section>

      {/* ── 6 Parameters ── */}
      <section className="py-20 px-6 lg:px-12 bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto">

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4"
          >
            Scoring framework
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="text-[#0a1128] leading-[1.15] mb-10"
            style={{
              fontSize: "clamp(1.6rem, 2.5vw + 0.5rem, 2.4rem)",
              fontWeight: 200,
              letterSpacing: "-0.02em",
            }}
          >
            6 parameters. 30 indicators.{" "}
            <span style={{ fontWeight: 400, fontStyle: "italic" }} className="text-[#ff6b5a]">
              Zero guesswork.
            </span>
          </motion.h2>

          <div className="divide-y divide-gray-100">
            {parameters.map((param, i) => (
              <motion.div
                key={param.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: i * 0.07 }}
                className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 py-6"
              >
                <div className="sm:w-44 shrink-0">
                  <p className="text-xs font-mono text-[#ff6b5a] mb-1">{param.code}</p>
                  <p className="text-sm font-medium text-[#0a1128]">{param.name}</p>
                  <p className="text-xs font-light text-gray-400 uppercase tracking-wider mt-0.5">{param.subtitle}</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-light text-gray-500 leading-relaxed mb-2">
                    {param.description}
                  </p>
                  <p className="text-xs font-mono text-gray-400">{param.indicators}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 lg:px-12 bg-[#f9fafb]">
        <div className="max-w-2xl mx-auto text-center">

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4"
          >
            Get started
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="text-[#0a1128] leading-[1.15] mb-5"
            style={{
              fontSize: "clamp(1.6rem, 2.5vw + 0.5rem, 2.4rem)",
              fontWeight: 200,
              letterSpacing: "-0.02em",
            }}
          >
            Know where you stand{" "}
            <span style={{ fontWeight: 400, fontStyle: "italic" }} className="text-[#ff6b5a]">
              before the room does.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.16 }}
            className="text-sm font-light text-gray-500 leading-relaxed mb-10 max-w-md mx-auto"
          >
            Upload your deck. Get your IQ Score. Walk into your next investor meeting knowing exactly what they'll ask — and what your answers should be.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.24 }}
            className="flex justify-center mb-10"
          >
            <Button
              size="lg"
              className="bg-[#0a1128] text-white hover:bg-[#0a1128]/90 font-medium text-sm group transition-all duration-300 rounded-none px-8"
              asChild
            >
              <a href="https://edgealpha.vc" target="_blank" rel="noopener noreferrer">
                Assess My Startup
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.32 }}
            className="text-xs font-light text-gray-400"
          >
            Edge Alpha is available exclusively to founders in the InnoSphere network.
          </motion.p>

        </div>
      </section>

      <Footer />
    </div>
  );
}
