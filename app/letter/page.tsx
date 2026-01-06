"use client";

import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { OceanGradient } from "@/components/OceanGradient";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LetterPage() {
  return (
    <OceanGradient variant="philosophy">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-8 group absolute left-6 lg:left-12 top-28"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-extralight text-sm">Back</span>
          </Link>
          <Badge className="mb-6 font-light bg-black dark:bg-white text-white dark:text-black border-black dark:border-white hover:bg-black/90 dark:hover:bg-white/90">
            Founder Letter
          </Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight mb-6 text-gray-900 dark:text-white leading-tight">
            <span className="font-light bg-gradient-to-r from-cyan-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">Conviction sparks.</span>
            <br />
            <span className="font-light bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">Consensus amplifies.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-extralight text-gray-600 dark:text-white/60 max-w-2xl leading-relaxed">
            We follow a value-investing approach — more Warren Buffett than Silicon Valley.
          </p>
        </div>
      </section>

      {/* Letter Content */}
      <section className="pt-0 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">

          {/* Opening */}
          <div className="mb-16">
            <p className="text-base sm:text-lg font-extralight text-gray-600 dark:text-white/60 leading-relaxed max-w-3xl">
              We enter early, at a fair, disciplined valuation, and then we engineer the valuation step-up together.
              Most early-stage investors chase momentum. We build fundamentals, clarity, and long-term value.
            </p>
          </div>

          {/* Featured Quote */}
          <div className="mb-20 relative">
            <div className="absolute -left-4 lg:-left-6 top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-white/20 rounded-full" />
            <blockquote className="pl-6 lg:pl-8">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extralight text-gray-900 dark:text-white leading-tight mb-4">
                "We don't chase valuations.
                <br />
                <span className="font-light">We build them.</span>"
              </p>
              <cite className="text-sm font-extralight text-gray-500 dark:text-white/50 not-italic">
                — Roman Gaus, Founding Partner
              </cite>
            </blockquote>
          </div>

          {/* Our Model Section */}
          <div className="mb-20">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-10">
              Our Model
            </h2>

            <div className="space-y-12">
              {/* Model Item 1 */}
              <div className="pl-4 lg:pl-6 border-l-2 border-gray-300 dark:border-white/20">
                <span className="text-sm font-extralight text-gray-400 dark:text-white/40 tracking-widest">01</span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-gray-900 dark:text-white mt-2 mb-3">
                  A fair entry valuation
                </h3>
                <p className="text-base sm:text-lg font-extralight text-gray-600 dark:text-white/60 leading-relaxed max-w-2xl">
                  We don't negotiate for the sake of negotiating. We price early rounds with discipline so your Series A — the dilution that truly matters — grows from a stronger base.
                </p>
              </div>

              {/* Model Item 2 */}
              <div className="pl-4 lg:pl-6 border-l-2 border-gray-300 dark:border-white/20">
                <span className="text-sm font-extralight text-gray-400 dark:text-white/40 tracking-widest">02</span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-gray-900 dark:text-white mt-2 mb-3">
                  We help create the next valuation step
                </h3>
                <p className="text-base sm:text-lg font-extralight text-gray-600 dark:text-white/60 leading-relaxed max-w-2xl">
                  We shape the round architecture, strengthen the narrative, and prepare you for strategic or institutional follow-on investors. Your valuation should rise because the business strengthens — not because the market overheats.
                </p>
              </div>

              {/* Model Item 3 */}
              <div className="pl-4 lg:pl-6 border-l-2 border-gray-300 dark:border-white/20">
                <span className="text-sm font-extralight text-gray-400 dark:text-white/40 tracking-widest">03</span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-gray-900 dark:text-white mt-2 mb-3">
                  Aligned upside through a capped warrant
                </h3>
                <p className="text-base sm:text-lg font-extralight text-gray-600 dark:text-white/60 leading-relaxed max-w-2xl">
                  Every deal includes a small, 2% capped performance-based warrant. If we help you unlock the next valuation milestone, we earn it. If we don't deliver — we shouldn't.
                </p>
              </div>
            </div>

            {/* Highlight Statement */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
              <p className="text-lg sm:text-xl md:text-2xl font-extralight text-gray-900 dark:text-white">
                We don't extract value — <span className="font-light">we help compound it.</span>
              </p>
            </div>
          </div>

          {/* Why Founders Work With Us */}
          <div className="mb-20">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-10">
              Why Founders Work With Us
            </h2>
            <div className="space-y-4">
              <p className="text-base sm:text-lg md:text-xl font-extralight text-gray-600 dark:text-white/60 leading-relaxed">
                Because we don't just join rounds — <span className="font-light text-gray-900 dark:text-white">we design them with you.</span>
              </p>
              <p className="text-base sm:text-lg md:text-xl font-extralight text-gray-600 dark:text-white/60 leading-relaxed">
                Because we bring <span className="font-light text-gray-900 dark:text-white">structure, not noise.</span>
              </p>
              <p className="text-base sm:text-lg md:text-xl font-extralight text-gray-600 dark:text-white/60 leading-relaxed">
                Because we help you become <span className="font-light text-gray-900 dark:text-white">investor-ready, partner-ready, and ultimately acquisition-ready.</span>
              </p>
            </div>
          </div>

          {/* Our Promise */}
          <div className="mb-20">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-10">
              Our Promise
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
              <div className="group">
                <div className="w-8 h-[2px] bg-gray-300 dark:bg-white/30 mb-3 group-hover:w-12 transition-all duration-300" />
                <p className="text-base sm:text-lg font-light text-gray-900 dark:text-white">We move early.</p>
              </div>
              <div className="group">
                <div className="w-8 h-[2px] bg-gray-300 dark:bg-white/30 mb-3 group-hover:w-12 transition-all duration-300" />
                <p className="text-base sm:text-lg font-light text-gray-900 dark:text-white">We price fairly.</p>
              </div>
              <div className="group">
                <div className="w-8 h-[2px] bg-gray-300 dark:bg-white/30 mb-3 group-hover:w-12 transition-all duration-300" />
                <p className="text-base sm:text-lg font-light text-gray-900 dark:text-white">We build the next step with discipline.</p>
              </div>
              <div className="group">
                <div className="w-8 h-[2px] bg-gray-300 dark:bg-white/30 mb-3 group-hover:w-12 transition-all duration-300" />
                <p className="text-base sm:text-lg font-light text-gray-900 dark:text-white">We tie our upside to performance.</p>
              </div>
              <div className="group sm:col-span-2 lg:col-span-2">
                <div className="w-8 h-[2px] bg-gray-300 dark:bg-white/30 mb-3 group-hover:w-12 transition-all duration-300" />
                <p className="text-base sm:text-lg font-light text-gray-900 dark:text-white">We treat your company like a compounding asset, not a speculative bet.</p>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="mb-16">
            <p className="text-base sm:text-lg md:text-xl font-extralight text-gray-600 dark:text-white/60 leading-relaxed mb-10">
              If that resonates with how you want to build, we'd love to speak.
            </p>

            <div className="pt-8 border-t border-gray-200 dark:border-white/10">
              <p className="text-base font-light text-gray-900 dark:text-white mb-1">With conviction,</p>
              <p className="text-lg font-extralight text-gray-500 dark:text-white/50">
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
