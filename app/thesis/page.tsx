"use client";

import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Target, Zap, Globe, Users, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";

const thesisPillars = [
  {
    icon: Globe,
    title: "India's Innovation Frontier",
    description: "India is transitioning from outsourcing to innovation leadership. With 165,000+ startups, a 55× growth in frontier jobs, and 1,000+ potential deep-tech unicorns, the opportunity is systemic.",
  },
  {
    icon: TrendingUp,
    title: "Deep Tech Focus",
    description: "We invest in foundational technologies — healthcare, clean energy, advanced materials, and infrastructure. Companies building real IP with defensible moats.",
  },
  {
    icon: Users,
    title: "Distributed Innovation",
    description: "The next wave of Indian innovation won't come only from metros. We actively source from Tier 2/3 cities, university labs, and emerging founder ecosystems.",
  },
  {
    icon: Sparkles,
    title: "Edge Alpha Methodology",
    description: "Our proprietary scoring engine evaluates startups across five signal dimensions — surfacing outliers before traction becomes obvious.",
  },
];

const investmentCriteria = [
  "Pre-seed to Seed stage companies",
  "Deep-tech and frontier sectors",
  "Strong IP or defensible technology",
  "Founders with domain expertise",
  "Systemic impact potential",
  "India-first, global-scale ambition",
];

export default function ThesisPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 mb-8 group absolute left-6 lg:left-12 top-28">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-extralight text-sm">Back</span>
          </Link>
          <Badge className="mb-6 font-light bg-white text-black border-white hover:bg-white/90">
            Our Thesis
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extralight mb-8 text-white">
            Conviction at the
            <br />
            <span className="font-light">frontier</span>
          </h1>
          <p className="text-xl font-extralight text-white/60 max-w-4xl mb-6">
            We believe India is at an inflection point. A new generation of founders is building deep-tech companies that will define the next decade of global innovation.
          </p>
          <p className="text-lg font-extralight text-white/50 max-w-4xl">
            InnoSphere Ventures exists to find these founders early, back them with conviction, and help them build companies of systemic importance.
          </p>
        </div>
      </section>

      {/* Core Belief */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-12 lg:p-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <Target className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl font-light text-white">Core Belief</h2>
            </div>
            <p className="text-2xl lg:text-3xl font-extralight text-white/80 leading-relaxed mb-8">
              "The best returns come from backing exceptional founders solving hard problems at the right moment in time."
            </p>
            <p className="text-lg font-extralight text-white/50">
              India's moment is now. The convergence of talent, capital, policy support, and global realignment creates a once-in-a-generation opportunity for systematic early-stage investing.
            </p>
          </div>
        </div>
      </section>

      {/* Thesis Pillars */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-extralight mb-6 text-white">
              Thesis <span className="font-light">Pillars</span>
            </h2>
            <p className="text-xl font-extralight text-white/60 max-w-3xl">
              Four core beliefs that guide every investment decision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {thesisPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={index} className="glass-card p-8 group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-light text-white">{pillar.title}</h3>
                  </div>
                  <p className="font-extralight text-white/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-extralight mb-6 text-white">
                Investment <span className="font-light">Approach</span>
              </h2>
              <p className="text-xl font-extralight text-white/60 mb-8">
                We deploy conviction capital — going early where others hesitate, backed by systematic signal analysis.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-light text-white">80-120</div>
                  <div className="text-sm font-extralight text-white/50">Seed investments<br />over fund lifecycle</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-light text-white">$50-150K</div>
                  <div className="text-sm font-extralight text-white/50">Initial check size<br />with follow-on reserves</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-light text-white">5-7 years</div>
                  <div className="text-sm font-extralight text-white/50">Investment horizon<br />patient capital approach</div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-light text-white mb-6">What We Look For</h3>
              <ul className="space-y-4">
                {investmentCriteria.map((criteria, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                    <span className="font-extralight text-white/70">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Edge Alpha Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-12 lg:p-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <Zap className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl font-light text-white">Powered by Edge Alpha</h2>
            </div>
            <p className="text-xl font-extralight text-white/60 mb-8 max-w-3xl">
              Our proprietary Edge Alpha scoring engine evaluates every company across five systemic signal dimensions:
            </p>
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              {["Market Readiness", "Market Potential", "Innovation Depth", "IP Defensibility", "Team Strength"].map((signal, index) => (
                <div key={index} className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-sm font-light text-white/80">{signal}</p>
                </div>
              ))}
            </div>
            <p className="text-lg font-extralight text-white/50">
              These signals reveal breakthrough companies early — before traction becomes obvious. Only the highest-signal companies progress into the investment zone.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-extralight mb-6 text-white">
            Ready to <span className="font-light">build together?</span>
          </h2>
          <p className="text-xl font-extralight text-white/60 mb-8 max-w-2xl mx-auto">
            Whether you're a founder building at the frontier or an LP seeking systematic exposure to India's innovation ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 font-light text-base group transition-all duration-300 hover:scale-105">
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white font-light text-base hover:bg-white/10 transition-all duration-300 hover:border-white/50" asChild>
              <a href="/signals">View Portfolio</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
