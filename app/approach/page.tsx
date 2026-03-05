"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, Cell, ResponsiveContainer, Tooltip, LabelList } from "recharts";

const concentrationData = [
  { name: "Top 20 Funds", value: 62, color: "#ff6b5a" },
  { name: "Rest of Market", value: 38, color: "#e5e7eb" },
];


const returnTiers = [
  { label: "Top-decile net TVPI target", value: "3x+", color: "#0d9488", bg: "#f0fdfa" },
  { label: "Median return — insufficient to cover illiquidity premium", value: "1.7x", color: "#f59e0b", bg: "#fffbeb" },
  { label: "Bottom quartile — effective capital erosion after fees", value: "<1.2x", color: "#ef4444", bg: "#fef2f2" }
];

const portfolioPoints = [
  {
    number: "01",
    title: "Concentration creates pressure",
    description: "Capital concentration in fewer bets increases deployment pressure — diluting entry discipline and raising the cost of mistakes."
  },
  {
    number: "02",
    title: "Scale improves outlier capture",
    description: "Broader exposure raises the probability of capturing power-law outliers. Venture is a dispersion-driven asset class."
  },
  {
    number: "03",
    title: "Structure is the edge",
    description: "A 100-company portfolio isn't diversification for its own sake — it's engineering outcome distribution to maximize DPI."
  }
];

const edgeAlphaOS = [
  {
    number: "01",
    title: "Origination & Selection",
    subtitle: "Disciplined Selection",
    description: "Structured, algorithmically supported evaluation frameworks. Standardized deal scoring and decision-making to reduce idiosyncratic bias.",
    output: "Consistent, comparable deal evaluation"
  },
  {
    number: "02",
    title: "Risk Optimization",
    subtitle: "Portfolio Construction",
    description: "Portfolio-level exposure monitoring. Milestone-based follow-on signals. Large portfolio approach to capture outliers at the power-law tail.",
    output: "Disciplined outlier capture"
  },
  {
    number: "03",
    title: "Return Optimization",
    subtitle: "Capital Deployment",
    description: "Structured capital allocation. Performance-based follow-on deployment. Real-time readiness indicators to maximize probability-weighted outcomes.",
    output: "Improved returns and distributions (DPI)"
  },
  {
    number: "04",
    title: "Portfolio Value Creation",
    subtitle: "Operating Layer",
    description: "KPI instrumentation across portfolio. Consistent investment benchmarking. Analytical workflows and execution tools for founders.",
    output: "Improved milestone velocity and capital efficiency"
  }
];

const investmentPrinciples = [
  {
    number: "01",
    title: "Early Entry",
    description: "We engage way before narratives are formed and valuations become established — promising outsized returns at optimal, risk-adjusted entries."
  },
  {
    number: "02",
    title: "Shared Risk",
    description: "We invest alongside incubators, governments, angels, and international co-investors who are close to the founders and have real skin in the game."
  },
  {
    number: "03",
    title: "Catalytic",
    description: "We structure early investments to preserve and expand optionality. For category-defining technologies, we concentrate conviction. Where outcomes mature faster, we retain the ability to realize early liquidity."
  }
];

export default function ApproachPage() {
  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero - Full Page */}
      <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#0a1128 1px, transparent 1px), linear-gradient(90deg, #0a1128 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-7xl mx-auto w-full pt-24 pb-16">
          <div className="inline-flex items-center gap-2 mb-10 px-3 py-1 border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-widest">
            Investment Framework
          </div>
          <h1
            className="text-[#0a1128] mb-8 leading-[1.05] max-w-5xl"
            style={{ fontSize: 'clamp(3rem, 7vw + 1rem, 9rem)', fontWeight: 200, letterSpacing: '-0.03em' }}
          >
            Our approach is<br />
            <span style={{ fontWeight: 500 }} className="text-[#ff6b5a]">deliberately systematic</span>
          </h1>
          <p className="text-xl font-light text-gray-500 max-w-2xl leading-relaxed mb-16">
            Powered by Edge Alpha — a proprietary operating layer that brings institutional capital discipline to early-stage venture investing in India.
          </p>

          {/* Key metrics inline */}
          <div className="grid grid-cols-3 gap-px bg-gray-200 max-w-2xl">
            {[
              { v: "3x+", l: "Target Net TVPI" },
              { v: "100", l: "Portfolio Target" },
              { v: "4", l: "Edge Alpha Pillars" },
            ].map(({ v, l }) => (
              <div key={l} className="bg-white px-6 py-5">
                <div className="text-2xl font-mono font-medium text-[#0a1128]">{v}</div>
                <div className="text-xs font-light text-gray-400 mt-1">{l}</div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-10 left-6 lg:left-12 flex items-center gap-2 text-xs font-light text-gray-300">
            <div className="w-px h-8 bg-gray-200" />
            Scroll to explore
          </div>
        </div>
      </section>

      {/* Market Structure */}
      <section className="py-20 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Market Structure</p>
              <h2
                className="text-[#0a1128] mb-6 leading-[1.15]"
                style={{ fontSize: 'clamp(1.8rem, 3vw + 0.5rem, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}
              >
                Early-stage venture scaled in AUM —<br />
                <span style={{ fontWeight: 500 }}>but not in structure</span>
              </h2>
              <p className="text-base font-light text-gray-500 leading-relaxed mb-6">
                This divergence reflects allocator preference for established platforms, resulting in a widening gap between small and mega-sized GPs. The asset class grew, but only for those at the top.
              </p>
              <p className="text-sm font-light text-gray-400 leading-relaxed">
                Source: Preqin 2025 Global Report — VC AUM reached ~$3.1T by early 2024.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="bg-[#f9fafb] p-6 border border-gray-100 flex-1">
                  <div className="text-3xl font-mono font-light text-[#0a1128] mb-1">9.2×</div>
                  <div className="text-xs font-light text-gray-400">AUM Growth 2009–2023</div>
                </div>
                <div className="bg-[#f9fafb] p-6 border border-gray-100 flex-1">
                  <div className="text-3xl font-mono font-light text-[#ff6b5a] mb-1">62%</div>
                  <div className="text-xs font-light text-gray-400">In Top 20 Firms</div>
                </div>
              </div>
              <div className="bg-[#f9fafb] p-6 border border-gray-100">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Capital Concentration</p>
                <ResponsiveContainer width="100%" height={160}>
                  <BarChart data={concentrationData} layout="vertical" margin={{ left: 0, right: 40, top: 0, bottom: 0 }}>
                    <XAxis type="number" domain={[0, 100]} tick={false} axisLine={false} tickLine={false} />
                    <YAxis type="category" dataKey="name" width={110} tick={{ fontSize: 11, fill: "#6b7280", fontWeight: 300 }} axisLine={false} tickLine={false} />
                    <Tooltip formatter={(v) => [`${v}%`]} cursor={{ fill: "transparent" }} />
                    <Bar dataKey="value" radius={[0, 2, 2, 0]} barSize={28}>
                      {concentrationData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                      <LabelList dataKey="value" position="right" formatter={(v: unknown) => `${v}%`} style={{ fontSize: 12, fontWeight: 500, fontFamily: "monospace", fill: "#0a1128" }} />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-xs font-light text-gray-400 mt-3">Creating pricing inefficiencies at seed and Series A — the gap InnoSphere is built to exploit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return Reality */}
      <section className="py-20 px-6 lg:px-12 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Return Reality</p>
              <h2
                className="text-[#0a1128] mb-6 leading-[1.15]"
                style={{ fontSize: 'clamp(1.8rem, 3vw + 0.5rem, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}
              >
                Venture is a<br />
                <span style={{ fontWeight: 500 }}>dispersion-driven asset class</span>
              </h2>
              <p className="text-base font-light text-gray-500 leading-relaxed mb-6">
                Historically, smaller fund sizes have demonstrated stronger top-decile outcomes due to capital discipline and entry pricing discipline.
              </p>
              <div className="text-sm font-medium text-[#0a1128] flex items-center gap-2">
                <span className="text-3xl font-mono font-light text-[#0d9488]">3x</span>
                <span className="text-gray-500 font-light">DPI — our institutional benchmark</span>
              </div>
            </div>
            <div className="space-y-3">
              {returnTiers.map((tier) => (
                <div key={tier.label} className="p-5 border border-gray-100" style={{ backgroundColor: tier.bg }}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-600 max-w-xs">{tier.label}</span>
                    <span className="text-2xl font-mono font-medium ml-4 flex-shrink-0" style={{ color: tier.color }}>{tier.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Construction */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Portfolio Construction</p>
            <h2
              className="text-[#0a1128] leading-[1.15]"
              style={{ fontSize: 'clamp(1.8rem, 3vw + 0.5rem, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}
            >
              Discipline is key to<br />
              <span style={{ fontWeight: 500 }}>capturing outliers</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioPoints.map((point) => (
              <div key={point.number} className="bg-[#f9fafb] p-8 border border-gray-100">
                <div className="text-xs font-mono text-gray-300 mb-4">{point.number}</div>
                <h3 className="text-base font-medium text-[#0a1128] mb-3">{point.title}</h3>
                <p className="text-sm font-light text-gray-500 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
          <p className="text-xs font-light text-gray-400 mt-6 max-w-2xl">
            Model informed by widely documented venture power-law dynamics (Cambridge Associates; Kauffman Foundation; EUVC fund modelling cohort 2025).
          </p>
        </div>
      </section>

      {/* Investment Principles */}
      <section className="py-20 px-6 lg:px-12 bg-[#f9fafb] border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">How We Invest</p>
            <h2
              className="text-[#0a1128] leading-[1.15]"
              style={{ fontSize: 'clamp(1.8rem, 3vw + 0.5rem, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}
            >
              Three principles that<br />
              <span style={{ fontWeight: 500 }}>guide every decision</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-gray-200">
            {investmentPrinciples.map((p) => (
              <div key={p.number} className="bg-white p-10">
                <div className="text-xs font-mono text-gray-300 mb-6">{p.number}</div>
                <h3 className="text-xl font-medium text-[#0a1128] mb-4">{p.title}</h3>
                <p className="text-sm font-light text-gray-500 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 border-l-4 border-[#ff6b5a] bg-white">
            <p className="text-lg font-light text-[#0a1128] leading-relaxed">
              We don't just invest in companies. We help position them for follow-on capital, strategic partnerships, and international market access — so that capital follows performance.
            </p>
          </div>
        </div>
      </section>

      {/* Edge Alpha OS */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-80 flex-shrink-0">
              <div className="sticky top-28">
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-[#ff6b5a]/30 text-xs font-medium text-[#ff6b5a] uppercase tracking-widest">
                  Edge Alpha
                </div>
                <h2
                  className="text-[#0a1128] mb-6 leading-[1.15]"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw + 0.5rem, 2.5rem)', fontWeight: 200, letterSpacing: '-0.02em' }}
                >
                  A proprietary operating layer for early-stage capital
                </h2>
                <p className="text-sm font-light text-gray-500 leading-relaxed">
                  Edge Alpha transforms venture investing from an art into a structured, repeatable system — without losing the judgment that creates alpha.
                </p>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              {edgeAlphaOS.map((item) => (
                <div key={item.number} className="p-8 bg-[#f9fafb] border border-gray-100 hover:border-gray-200 transition-colors">
                  <div className="flex items-start gap-6">
                    <span className="text-xs font-mono text-gray-300 mt-1 flex-shrink-0">{item.number}</span>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <h3 className="text-base font-medium text-[#0a1128]">{item.title}</h3>
                        <span className="text-xs font-light text-[#0d9488] sm:ml-2">— {item.subtitle}</span>
                      </div>
                      <p className="text-sm font-light text-gray-500 leading-relaxed mb-3">{item.description}</p>
                      <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                        <span className="text-[#ff6b5a]">→</span>
                        {item.output}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Proposition */}
      <section className="py-20 px-6 lg:px-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Investment Proposition</p>
          <h2
            className="text-[#0a1128] mb-14 leading-[1.15]"
            style={{ fontSize: 'clamp(1.8rem, 3vw + 0.5rem, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}
          >
            Top-decile returns in India's industrial transformation —<br />
            <span style={{ fontWeight: 500 }} className="text-[#ff6b5a]">powered by Edge Alpha</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-gray-200">
            {[
              {
                number: "1",
                title: "India's Industrial Transformation",
                description: "India's founder density and industrial expansion create a multi-decade deep tech growth opportunity that is still in its early innings."
              },
              {
                number: "2",
                title: "Early-Stage Pricing Inefficiency",
                description: "Early-stage capital remains structurally under-allocated relative to later stage. This is a pricing inefficiency we are positioned to exploit."
              },
              {
                number: "3",
                title: "Institutional Capital Discipline",
                description: "Our proprietary platform brings structured evaluation, portfolio construction, and capital allocation discipline to early-stage investing."
              }
            ].map((item) => (
              <div key={item.number} className="bg-white p-10">
                <div className="text-xs font-mono text-gray-300 mb-6">{item.number}</div>
                <h3 className="text-base font-medium text-[#0a1128] mb-4">{item.title}</h3>
                <p className="text-sm font-light text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12 border-t border-gray-100 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-light text-[#0a1128] mb-2">
              See our portfolio thesis in action
            </h2>
            <p className="text-sm font-light text-gray-500">Three investment cases across water, agriculture, and aerospace.</p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a1128] text-white text-sm font-medium hover:bg-[#0a1128]/90 transition-colors flex-shrink-0 group"
          >
            View Portfolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
