"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "framer-motion";

const stats = [
  {
    value: "200K+",
    label: "Registered Startups",
    sub: "20–30% CAGR (2010–2025)",
    source: "DPIIT, Government of India"
  },
  {
    value: "2.5M",
    label: "STEM Graduates / Year",
    sub: "3× US output annually",
    source: "Ministry of Education, India"
  },
  {
    value: "₹8T+",
    label: "State Industrial Capex",
    sub: "PLI, industrial programs",
    source: "Ministry of Commerce & Industry"
  }
];

const foundationPoints = [
  {
    title: "Homegrown Technological Capability",
    description: "With defensible technology and IP, creating competitive products and services in sectors that matter."
  },
  {
    title: "Strong Job Creation",
    description: "Where startups create high-value employment and spillovers into entire value chains."
  },
  {
    title: "Economic Sovereignty",
    description: "Through national innovation capacity, industrial networks, and reduced import dependency."
  },
  {
    title: "Domestic & Export-Led Growth",
    description: "Which results in strong, durable investor returns over a multi-decade horizon."
  }
];

const capitalData = [
  { label: "Growth & Late Stage", pct: 55, color: "#e5e7eb" },
  { label: "Seed & Series A", pct: 23, color: "#ff6b5a" },
  { label: "Other stages", pct: 22, color: "#e5e7eb" }
];

export default function IndiaPage() {
  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero - Full Page */}
      <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 border-b border-gray-100 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#0a1128 1px, transparent 1px), linear-gradient(90deg, #0a1128 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-7xl mx-auto w-full pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-10 px-3 py-1 border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-widest"
          >
            Market Context
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-[#0a1128] mb-8 leading-[1.05]"
            style={{ fontSize: 'clamp(3rem, 7vw + 1rem, 9rem)', fontWeight: 200, letterSpacing: '-0.03em' }}
          >
            India as a<br />
            <span style={{ fontWeight: 500 }} className="text-[#ff6b5a]">Deep Tech Nation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            className="text-xl font-light text-gray-500 max-w-2xl leading-relaxed mb-16"
          >
            India&apos;s founder density and industrial expansion create a multi-decade deep tech growth opportunity — one that remains structurally undercapitalised at the early stage.
          </motion.p>

          {/* Key stats inline */}
          <div className="grid grid-cols-3 gap-px bg-gray-200 max-w-2xl">
            {[
              { v: "200K+", l: "Registered Startups" },
              { v: "2.5M", l: "STEM Grads / Year" },
              { v: "₹8T+", l: "Industrial Capex" },
            ].map(({ v, l }, i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.34 + i * 0.08 }}
                className="bg-white px-6 py-5"
              >
                <div className="text-2xl font-mono font-medium text-[#0a1128]">{v}</div>
                <div className="text-xs font-light text-gray-400 mt-1">{l}</div>
              </motion.div>
            ))}
          </div>

          {/* Scroll hint */}
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

      {/* Key Stats */}
      <section className="py-20 px-6 lg:px-12 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-10">Structural Context</p>
          <div className="grid md:grid-cols-3 gap-px bg-gray-200">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-10">
                <div className="text-4xl sm:text-5xl font-mono font-medium text-[#0a1128] mb-3">{stat.value}</div>
                <div className="text-base font-medium text-[#0a1128] mb-1">{stat.label}</div>
                <div className="text-sm font-light text-[#ff6b5a] mb-3">{stat.sub}</div>
                <div className="text-xs font-light text-gray-400">Source: {stat.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capital Inefficiency */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Capital Allocation</p>
              <h2
                className="text-[#0a1128] mb-6 leading-[1.15]"
                style={{ fontSize: 'clamp(1.8rem, 3vw + 0.5rem, 3.5rem)', fontWeight: 200, letterSpacing: '-0.02em' }}
              >
                Capital is skewed toward<br />
                <span style={{ fontWeight: 500 }} className="text-[#0a1128]">late-stage deployment</span>
              </h2>
              <p className="text-base font-light text-gray-500 leading-relaxed mb-8">
                Early-stage deployment has not scaled proportionally to founder supply. 55% of Indian VC capital is absorbed by growth and late-stage rounds — leaving a structural gap at seed and Series A.
              </p>
              <div className="space-y-3">
                {capitalData.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-light text-gray-600">{item.label}</span>
                      <span className="text-sm font-mono font-medium text-[#0a1128]">{item.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs font-light text-gray-400 mt-4">Source: Bain & Company, India Venture Capital Report (2023–2024)</p>
            </div>

            <div className="bg-[#f9fafb] p-10 border border-gray-100">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-6">Allocation Breakdown</p>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={capitalData} cx="50%" cy="50%" innerRadius={65} outerRadius={100} paddingAngle={3} dataKey="pct" startAngle={90} endAngle={-270}>
                    {capitalData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} strokeWidth={0} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`]} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3 mt-6">
                {capitalData.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color, border: item.color === "#e5e7eb" ? "1px solid #d1d5db" : "none" }} />
                    <span className="text-xs font-light text-gray-500 flex-1">{item.label}</span>
                    <span className="text-sm font-mono font-medium text-[#0a1128]">{item.pct}%</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm font-light text-gray-600 leading-relaxed">
                  <span className="font-medium text-[#0a1128]">The gap:</span> Founder pipeline expansion exceeds early-stage investment growth — the structural asymmetry InnoSphere exploits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Points */}
      <section className="py-20 px-6 lg:px-12 bg-[#f9fafb] border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl mb-12"
          >
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Why We&apos;re Here</p>
            <h2
              className="text-[#0a1128] leading-[1.15]"
              style={{ fontSize: 'clamp(1.8rem, 3vw + 0.5rem', fontWeight: 200, letterSpacing: '-0.02em' }}
            >
              We think of this ecosystem<br />
              <span style={{ fontWeight: 500 }}>as a forest, not a race</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {foundationPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="bg-white p-6 border border-gray-100"
              >
                <div className="text-xs font-mono text-gray-300 mb-4">0{i + 1}</div>
                <h3 className="text-sm font-medium text-[#0a1128] mb-3 leading-snug">{point.title}</h3>
                <p className="text-sm font-light text-gray-500 leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Returns */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-6"
            >
              Our Lens
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-[#0a1128] mb-8 leading-[1.2]"
              style={{ fontSize: 'clamp(1.8rem, 3vw + 0.5rem, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}
            >
              We invest in areas such as <span className="font-medium text-[#ff6b5a]">agriculture, water, healthcare, energy,</span> and frontier technologies.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-base font-light text-gray-500 leading-relaxed mb-8"
            >
              Not because it sounds virtuous — but because these are structural markets with real demand, long time horizons, and defensible value creation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
              className="border-l-4 border-[#0d9488] pl-6 text-left"
            >
              <p className="text-lg font-light text-[#0a1128] leading-relaxed mb-2">
                Impact, for us, is not a constraint on returns.
              </p>
              <p className="text-base font-light text-gray-500">
                It is a filter against fragility, hype, and group think. This is where true alpha is born.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.42 }}
            className="mt-12 text-center"
          >
            <Link
              href="/approach"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#0a1128] hover:text-[#ff6b5a] transition-colors duration-200 group"
            >
              See our investment approach
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
