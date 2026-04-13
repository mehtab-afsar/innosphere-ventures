"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps = [
  {
    number: "1",
    title: "Upload",
    body: "Drop your pitch deck. Edge Alpha extracts and scores up to 30 indicators across 6 parameters automatically.",
  },
  {
    number: "2",
    title: "Targeted questions",
    body: "3 adaptive questions fill the gaps that would move your score most. No form-filling. No fluff.",
  },
  {
    number: "3",
    title: "Your IQ Score",
    body: "A live, partial score based on what you've shared — with a clear breakdown of what to improve and by how much.",
  },
];

export function EdgeAlpha() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-[#f9fafb] border-b border-gray-100">
      <div className="max-w-2xl mx-auto">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4"
        >
          Edge Alpha · Proprietary Operating System
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.08 }}
          className="text-[#0a1128] leading-[1.15] mb-5"
          style={{
            fontSize: "clamp(1.8rem, 3vw + 0.5rem, 3rem)",
            fontWeight: 200,
            letterSpacing: "-0.02em",
          }}
        >
          Your IQ Score for{" "}
          <span style={{ fontWeight: 400, fontStyle: "italic" }} className="text-[#ff6b5a]">
            Investor Readiness
          </span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.16 }}
          className="text-base font-light text-gray-500 leading-relaxed mb-12"
        >
          Edge Alpha benchmarks every dimension that matters to institutional investors — market, team, IP, traction, financials — and gives you a single, actionable score in minutes.
        </motion.p>

        {/* Three-step row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.24 }}
          className="grid md:grid-cols-3 gap-10"
        >
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col gap-3">
              {/* Number circle */}
              <div className="w-8 h-8 rounded-full bg-[#ff6b5a] text-white text-sm font-medium flex items-center justify-center shrink-0">
                {step.number}
              </div>

              {/* Step title */}
              <p className="text-sm font-medium text-[#0a1128] uppercase tracking-widest">
                {step.title}
              </p>

              {/* Step body */}
              <p className="text-sm font-light text-gray-500 leading-relaxed">
                {step.body}
              </p>

              {/* Vertical divider between columns on desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-0 -right-5 bottom-0 border-r border-gray-200" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.32 }}
          className="flex flex-wrap justify-center items-center gap-3 py-8 border-y border-gray-200 my-10 text-sm font-mono font-medium text-[#0a1128]"
        >
          <span>30 indicators</span>
          <span className="text-gray-300">·</span>
          <span>6 parameters</span>
          <span className="text-gray-300">·</span>
          <span>Benchmarked against 450+ sector data points</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
        >
          <Button
            size="lg"
            className="bg-[#0a1128] text-white hover:bg-[#0a1128]/90 font-medium text-sm group transition-all duration-300 rounded-none px-8"
            asChild
          >
            <Link href="#">
              Assess My Startup
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
          <Link
            href="#"
            className="text-sm font-light text-[#0a1128] underline underline-offset-4 hover:text-[#ff6b5a] transition-colors duration-300"
          >
            How scoring works
          </Link>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.48 }}
          className="text-xs font-light text-gray-400 text-center"
        >
          Edge Alpha is available exclusively to founders in the InnoSphere network.
        </motion.p>

      </div>
    </section>
  );
}
