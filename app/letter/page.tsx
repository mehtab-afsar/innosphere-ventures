"use client";

import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Quote } from "lucide-react";
import Link from "next/link";

export default function LetterPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-12 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-8 group absolute left-6 lg:left-12 top-28"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-extralight text-sm">Back</span>
          </Link>
          <Badge className="mb-6 font-light bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0 hover:from-amber-600 hover:to-orange-700">
            A Letter to Founders
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight mb-6 text-gray-900 dark:text-white leading-tight">
            Building India's{" "}
            <span className="font-light bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Innovation Future
            </span>
            , Together
          </h1>
        </div>
      </section>

      {/* Letter Content */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg dark:prose-invert prose-gray max-w-none">
            {/* Opening Quote */}
            <div className="relative mb-12 p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-2xl border border-amber-200/50 dark:border-amber-500/20">
              <Quote className="absolute -top-4 -left-2 w-12 h-12 text-amber-500/30 dark:text-amber-500/20" />
              <p className="text-xl lg:text-2xl font-light text-gray-800 dark:text-white/90 italic leading-relaxed m-0">
                "The future belongs to those who believe in the beauty of their dreams."
              </p>
              <p className="text-sm font-light text-gray-500 dark:text-white/50 mt-4 mb-0">
                — Eleanor Roosevelt
              </p>
            </div>

            {/* Letter Body */}
            <div className="space-y-6 text-gray-700 dark:text-white/80 font-light leading-relaxed">
              <p className="text-lg">
                <span className="font-medium text-gray-900 dark:text-white">Dear Founder,</span>
              </p>

              <p>
                We know the path you're walking. The sleepless nights spent refining your vision.
                The countless "no's" before the first "yes." The weight of building something that
                didn't exist before you imagined it.
              </p>

              <p>
                We started InnoSphere because we believe India is at an extraordinary inflection point.
                Not the India of outsourcing narratives, but the India of deep innovation — where world-class
                engineers, scientists, and entrepreneurs are solving problems that matter for billions of people.
              </p>

              <div className="py-6 border-y border-gray-200 dark:border-white/10 my-8">
                <p className="text-xl font-light text-gray-900 dark:text-white mb-0">
                  We're not just writing checks.{" "}
                  <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent font-medium">
                    We're building alongside you.
                  </span>
                </p>
              </div>

              <p>
                Our thesis is simple: the best companies are built by founders who see what others miss,
                who have the conviction to pursue hard problems, and who understand that great businesses
                are built on genuine value creation.
              </p>

              <p>
                We've designed InnoSphere to be the partner we wished existed when we were in your shoes:
              </p>

              <ul className="space-y-4 my-8 list-none pl-0">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 mt-2.5 flex-shrink-0" />
                  <span>
                    <strong className="font-medium text-gray-900 dark:text-white">Patient capital</strong> —
                    We invest in your vision, not just your traction. Great companies need time to compound.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 mt-2.5 flex-shrink-0" />
                  <span>
                    <strong className="font-medium text-gray-900 dark:text-white">Operational depth</strong> —
                    Not advice from the sidelines, but rolled-up sleeves when you need them most.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 mt-2.5 flex-shrink-0" />
                  <span>
                    <strong className="font-medium text-gray-900 dark:text-white">A collective of builders</strong> —
                    Access to a network of founders, operators, and domain experts who've walked the path.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 mt-2.5 flex-shrink-0" />
                  <span>
                    <strong className="font-medium text-gray-900 dark:text-white">Honest partnership</strong> —
                    We'll celebrate your wins and stand with you through the hard moments.
                  </span>
                </li>
              </ul>

              <p>
                If you're building something that could reshape healthcare, energy, infrastructure, or any
                domain where technology creates lasting impact — we want to hear from you. Not just your deck,
                but your story. What drives you? What do you see that others don't?
              </p>

              <p>
                India's moment is now. And we believe the founders who will define this era are already at work,
                many still undiscovered, building in labs and garages and co-working spaces across the country.
              </p>

              <p>
                We're here to find you.
              </p>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
                <p className="mb-1 font-medium text-gray-900 dark:text-white">With conviction,</p>
                <p className="text-lg font-light text-gray-900 dark:text-white mb-0">
                  The InnoSphere Team
                </p>
              </div>
            </div>
          </article>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/5 dark:to-white/[0.02] rounded-2xl border border-gray-200 dark:border-white/10 text-center">
            <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
              Ready to share your vision?
            </h3>
            <p className="font-extralight text-gray-600 dark:text-white/60 mb-6 max-w-lg mx-auto">
              We read every submission. If your work aligns with our thesis,
              we'll reach out within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
