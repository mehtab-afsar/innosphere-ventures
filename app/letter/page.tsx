"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { OceanGradient } from "@/components/OceanGradient";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LetterPage() {
  return (
    <OceanGradient variant="landing">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#0a1128]/60 hover:text-[#0a1128] transition-colors duration-200 mb-8 group absolute left-6 lg:left-12 top-28"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-extralight text-sm">Back</span>
          </Link>
          <div className="inline-block mb-6 px-6 py-3 border-2 border-[#ff6b5a] rounded-none">
            <span className="text-lg font-medium text-[#ff6b5a] tracking-wide">Founder Letter</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight mb-6 leading-tight">
            <span className="font-light text-[#2a9a8e]">Conviction sparks.</span>
            <br />
            <span className="font-light text-[#ff6b5a]">Consensus amplifies.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-extralight text-[#0a1128]/80 max-w-2xl leading-relaxed">
            We follow a value-investing approach — more Warren Buffett than Silicon Valley.
          </p>
        </div>
      </section>

      {/* Letter Content */}
      <section className="pt-0 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">

          {/* Opening */}
          <div className="mb-16">
            <p className="text-base sm:text-lg font-extralight text-[#0a1128]/70 leading-relaxed max-w-3xl">
              We enter early, at a fair, disciplined valuation, and then we engineer the valuation step-up together.
              Most early-stage investors chase momentum. We build fundamentals, clarity, and long-term value.
            </p>
          </div>

          {/* Featured Quote */}
          <div className="mb-20 relative">
            <div className="absolute -left-4 lg:-left-6 top-0 bottom-0 w-[2px] bg-white/20 rounded-full" />
            <blockquote className="pl-6 lg:pl-8">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight mb-4">
                "<span className="text-[#d4a017]">We don't chase valuations.</span>
                <br />
                <span className="font-light text-[#d4a017]">We build them.</span>"
              </p>
              <cite className="text-sm font-extralight text-[#0a1128]/60 not-italic">
                — Roman Gaus, Founding Partner
              </cite>
            </blockquote>
          </div>

          {/* Our Model Section */}
          <div className="mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2a9a8e] mb-10">
              Our Model
            </h2>

            <div className="space-y-12">
              {/* Model Item 1 */}
              <div className="pl-4 lg:pl-6 border-l-2 border-gray-300 dark:border-white/20">
                <span className="text-sm font-extralight text-[#0a1128]/50 tracking-widest">01</span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-[#ff6b5a] mt-2 mb-3">
                  A fair entry valuation
                </h3>
                <p className="text-base sm:text-lg font-extralight text-[#0a1128]/70 leading-relaxed max-w-2xl">
                  We don't negotiate for the sake of negotiating. We price early rounds with discipline so your Series A — the dilution that truly matters — grows from a stronger base.
                </p>
              </div>

              {/* Model Item 2 */}
              <div className="pl-4 lg:pl-6 border-l-2 border-gray-300 dark:border-white/20">
                <span className="text-sm font-extralight text-[#0a1128]/50 tracking-widest">02</span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-[#ff6b5a] mt-2 mb-3">
                  We help create the next valuation step
                </h3>
                <p className="text-base sm:text-lg font-extralight text-[#0a1128]/70 leading-relaxed max-w-2xl">
                  We shape the round architecture, strengthen the narrative, and prepare you for strategic or institutional follow-on investors. Your valuation should rise because the business strengthens — not because the market overheats.
                </p>
              </div>

              {/* Model Item 3 */}
              <div className="pl-4 lg:pl-6 border-l-2 border-gray-300 dark:border-white/20">
                <span className="text-sm font-extralight text-[#0a1128]/50 tracking-widest">03</span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-[#ff6b5a] mt-2 mb-3">
                  Aligned upside through a capped warrant
                </h3>
                <p className="text-base sm:text-lg font-extralight text-[#0a1128]/70 leading-relaxed max-w-2xl">
                  Every deal includes a small, 2% capped performance-based warrant. If we help you unlock the next valuation milestone, we earn it. If we don't deliver — we shouldn't.
                </p>
              </div>
            </div>

            {/* Highlight Statement */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-xl sm:text-2xl md:text-3xl font-extralight text-[#0a1128]">
                We don't extract value — <span className="font-light">we help compound it.</span>
              </p>
            </div>
          </div>

          {/* Why Founders Work With Us */}
          <div className="mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#7affd4] mb-10">
              Why Founders Work With Us
            </h2>
            <div className="space-y-4">
              <p className="text-base sm:text-lg md:text-xl font-extralight text-[#f5f5f0]/70 leading-relaxed">
                Because we don't just join rounds — <span className="font-light text-[#f5f5f0]">we design them with you.</span>
              </p>
              <p className="text-base sm:text-lg md:text-xl font-extralight text-[#f5f5f0]/70 leading-relaxed">
                Because we bring <span className="font-light text-[#f5f5f0]">structure, not noise.</span>
              </p>
              <p className="text-base sm:text-lg md:text-xl font-extralight text-[#f5f5f0]/70 leading-relaxed">
                Because we help you become <span className="font-light text-[#f5f5f0]">investor-ready, partner-ready, and ultimately acquisition-ready.</span>
              </p>
            </div>
          </div>

          {/* Our Promise */}
          <div className="mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#ff6b5a] mb-10">
              Our Promise
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
              <div className="group">
                <div className="w-8 h-[2px] bg-[#7affd4]/40 mb-3 group-hover:w-12 group-hover:bg-[#7affd4]/60 transition-all duration-300" />
                <p className="text-base sm:text-lg font-light text-[#f5f5f0]">We move early.</p>
              </div>
              <div className="group">
                <div className="w-8 h-[2px] bg-[#7affd4]/40 mb-3 group-hover:w-12 group-hover:bg-[#7affd4]/60 transition-all duration-300" />
                <p className="text-base sm:text-lg font-light text-[#f5f5f0]">We price fairly.</p>
              </div>
              <div className="group">
                <div className="w-8 h-[2px] bg-[#7affd4]/40 mb-3 group-hover:w-12 group-hover:bg-[#7affd4]/60 transition-all duration-300" />
                <p className="text-base sm:text-lg font-light text-[#f5f5f0]">We build the next step with discipline.</p>
              </div>
              <div className="group">
                <div className="w-8 h-[2px] bg-[#7affd4]/40 mb-3 group-hover:w-12 group-hover:bg-[#7affd4]/60 transition-all duration-300" />
                <p className="text-base sm:text-lg font-light text-[#f5f5f0]">We tie our upside to performance.</p>
              </div>
              <div className="group sm:col-span-2 lg:col-span-2">
                <div className="w-8 h-[2px] bg-[#7affd4]/40 mb-3 group-hover:w-12 group-hover:bg-[#7affd4]/60 transition-all duration-300" />
                <p className="text-base sm:text-lg font-light text-[#f5f5f0]">We treat your company like a compounding asset, not a speculative bet.</p>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="mb-16">
            <p className="text-base sm:text-lg md:text-xl font-extralight text-[#f5f5f0]/70 leading-relaxed mb-10">
              If that resonates with how you want to build, we'd love to speak.
            </p>

            <div className="pt-8 border-t border-white/10">
              <p className="text-base font-light text-[#f5f5f0] mb-1">With conviction,</p>
              <p className="text-lg font-extralight text-[#f5f5f0]/60">
                The InnoSphere Team
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </OceanGradient>
  );
}
