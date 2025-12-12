"use client";

import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LetterPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
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
          <Badge className="mb-6 font-light bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0 hover:from-amber-600 hover:to-orange-700">
            Founder Letter
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extralight mb-8 text-gray-900 dark:text-white leading-[1.1]">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">Conviction</span> sparks.
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">Consensus</span> amplifies.
          </h1>
          <p className="text-xl lg:text-2xl font-extralight text-gray-600 dark:text-white/70 max-w-2xl leading-relaxed">
            We follow a value-investing approach — more Warren Buffett than Silicon Valley.
          </p>
        </div>
      </section>

      {/* Letter Content */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">

          {/* Opening */}
          <div className="mb-20">
            <p className="text-lg lg:text-xl font-light text-gray-700 dark:text-white/80 leading-relaxed max-w-3xl">
              We enter early, at a fair, disciplined valuation, and then we engineer the valuation step-up together.
              Most early-stage investors chase momentum. We build fundamentals, clarity, and long-term value.
            </p>
          </div>

          {/* Featured Quote */}
          <div className="mb-24 relative">
            <div className="absolute -left-4 lg:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-orange-600 rounded-full" />
            <blockquote className="pl-8 lg:pl-12">
              <p className="text-3xl lg:text-5xl font-extralight text-gray-900 dark:text-white leading-tight mb-6">
                "We don't chase valuations.
                <br />
                <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                  We build them.
                </span>"
              </p>
              <cite className="text-base font-light text-gray-500 dark:text-white/50 not-italic">
                — Roman Gaus, Founding Partner
              </cite>
            </blockquote>
          </div>

          {/* Our Model Section */}
          <div className="mb-24">
            <h2 className="text-sm font-medium tracking-widest uppercase text-amber-600 dark:text-amber-500 mb-12">
              Our Model
            </h2>

            <div className="space-y-16">
              {/* Model Item 1 */}
              <div className="grid lg:grid-cols-[120px_1fr] gap-4 lg:gap-8">
                <span className="text-6xl lg:text-7xl font-extralight text-gray-200 dark:text-white/10">01</span>
                <div className="lg:pt-4">
                  <h3 className="text-xl lg:text-2xl font-light text-gray-900 dark:text-white mb-4">
                    A fair entry valuation
                  </h3>
                  <p className="text-base lg:text-lg font-light text-gray-600 dark:text-white/70 leading-relaxed">
                    We don't negotiate for the sake of negotiating. We price early rounds with discipline so your Series A — the dilution that truly matters — grows from a stronger base.
                  </p>
                </div>
              </div>

              {/* Model Item 2 */}
              <div className="grid lg:grid-cols-[120px_1fr] gap-4 lg:gap-8">
                <span className="text-6xl lg:text-7xl font-extralight text-gray-200 dark:text-white/10">02</span>
                <div className="lg:pt-4">
                  <h3 className="text-xl lg:text-2xl font-light text-gray-900 dark:text-white mb-4">
                    We help create the next valuation step
                  </h3>
                  <p className="text-base lg:text-lg font-light text-gray-600 dark:text-white/70 leading-relaxed">
                    We shape the round architecture, strengthen the narrative, and prepare you for strategic or institutional follow-on investors. Your valuation should rise because the business strengthens — not because the market overheats.
                  </p>
                </div>
              </div>

              {/* Model Item 3 */}
              <div className="grid lg:grid-cols-[120px_1fr] gap-4 lg:gap-8">
                <span className="text-6xl lg:text-7xl font-extralight text-gray-200 dark:text-white/10">03</span>
                <div className="lg:pt-4">
                  <h3 className="text-xl lg:text-2xl font-light text-gray-900 dark:text-white mb-4">
                    Aligned upside through a capped warrant
                  </h3>
                  <p className="text-base lg:text-lg font-light text-gray-600 dark:text-white/70 leading-relaxed">
                    Every deal includes a small, 2% capped performance-based warrant. If we help you unlock the next valuation milestone, we earn it. If we don't deliver — we shouldn't.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlight Statement */}
            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/10">
              <p className="text-2xl lg:text-3xl font-extralight text-gray-900 dark:text-white">
                We don't extract value —{" "}
                <span className="font-light bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                  we help compound it.
                </span>
              </p>
            </div>
          </div>

          {/* Why Founders Work With Us */}
          <div className="mb-24">
            <h2 className="text-sm font-medium tracking-widest uppercase text-amber-600 dark:text-amber-500 mb-12">
              Why Founders Work With Us
            </h2>
            <div className="space-y-6">
              <p className="text-xl lg:text-2xl font-extralight text-gray-700 dark:text-white/80 leading-relaxed">
                Because we don't just join rounds — <span className="font-light text-gray-900 dark:text-white">we design them with you.</span>
              </p>
              <p className="text-xl lg:text-2xl font-extralight text-gray-700 dark:text-white/80 leading-relaxed">
                Because we bring <span className="font-light text-gray-900 dark:text-white">structure, not noise.</span>
              </p>
              <p className="text-xl lg:text-2xl font-extralight text-gray-700 dark:text-white/80 leading-relaxed">
                Because we help you become <span className="font-light text-gray-900 dark:text-white">investor-ready, partner-ready, and ultimately acquisition-ready.</span>
              </p>
            </div>
          </div>

          {/* Our Promise */}
          <div className="mb-24">
            <h2 className="text-sm font-medium tracking-widest uppercase text-amber-600 dark:text-amber-500 mb-12">
              Our Promise
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
              <div className="group">
                <div className="w-8 h-[2px] bg-gradient-to-r from-amber-500 to-orange-600 mb-4 group-hover:w-12 transition-all duration-300" />
                <p className="text-lg font-light text-gray-900 dark:text-white">We move early.</p>
              </div>
              <div className="group">
                <div className="w-8 h-[2px] bg-gradient-to-r from-amber-500 to-orange-600 mb-4 group-hover:w-12 transition-all duration-300" />
                <p className="text-lg font-light text-gray-900 dark:text-white">We price fairly.</p>
              </div>
              <div className="group">
                <div className="w-8 h-[2px] bg-gradient-to-r from-amber-500 to-orange-600 mb-4 group-hover:w-12 transition-all duration-300" />
                <p className="text-lg font-light text-gray-900 dark:text-white">We build the next step with discipline.</p>
              </div>
              <div className="group">
                <div className="w-8 h-[2px] bg-gradient-to-r from-amber-500 to-orange-600 mb-4 group-hover:w-12 transition-all duration-300" />
                <p className="text-lg font-light text-gray-900 dark:text-white">We tie our upside to performance.</p>
              </div>
              <div className="group sm:col-span-2 lg:col-span-2">
                <div className="w-8 h-[2px] bg-gradient-to-r from-amber-500 to-orange-600 mb-4 group-hover:w-12 transition-all duration-300" />
                <p className="text-lg font-light text-gray-900 dark:text-white">We treat your company like a compounding asset, not a speculative bet.</p>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="mb-16">
            <p className="text-xl lg:text-2xl font-light text-gray-700 dark:text-white/80 leading-relaxed mb-12">
              If that resonates with how you want to build, we'd love to speak.
            </p>

            <div className="pt-8 border-t border-gray-200 dark:border-white/10">
              <p className="text-base font-medium text-gray-900 dark:text-white mb-1">With conviction,</p>
              <p className="text-xl font-extralight text-gray-600 dark:text-white/70">
                The InnoSphere Team
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 font-light text-base group transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/join">
                Submit Your Pitch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 dark:border-white/30 text-gray-900 dark:text-white font-light text-base hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
              asChild
            >
              <Link href="/thesis">Read Our Thesis</Link>
            </Button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
