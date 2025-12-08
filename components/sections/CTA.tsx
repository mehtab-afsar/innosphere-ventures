"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import { easeProgress } from "@/lib/animations";
import type { MailingListData } from "@/lib/supabase";

export function CTA() {
  const { ref, progress } = useScrollProgress();
  const easedProgress = easeProgress(progress);

  const [email, setEmail] = useState("");
  const { isSubmitting, submitted, submit } = useFormSubmit<MailingListData>("mailing-list");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    await submit({ email });
    setEmail("");
  };

  return (
    <section id="contact" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="relative rounded-3xl overflow-hidden bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5"
          style={{
            opacity: easedProgress,
            transform: `translateY(${(1 - easedProgress) * 30}px)`,
          }}
        >
          <div className="relative z-10 p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div>
                {/* Logo/Brand */}
                <div
                  className="text-xl sm:text-2xl font-extralight mb-3 text-gray-900 dark:text-white"
                  style={{
                    opacity: easedProgress,
                    transform: `translateX(${(1 - easedProgress) * -20}px)`,
                  }}
                >
                  InnoSphere <span className="font-normal">Ventures</span>
                </div>

                {/* Tagline */}
                <div
                  className="space-y-0.5 text-sm sm:text-base font-extralight text-gray-500 dark:text-white/50 mb-8"
                  style={{
                    opacity: easedProgress * 0.9,
                    transform: `translateX(${(1 - easedProgress) * -15}px)`,
                  }}
                >
                  <p>Empowering innovators.</p>
                  <p>Elevating futures.</p>
                </div>

                {/* Main Headline */}
                <div className="mb-8">
                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl font-extralight text-gray-900 dark:text-white tracking-wide leading-tight"
                    style={{
                      opacity: easedProgress,
                      transform: `translateY(${(1 - easedProgress) * 20}px)`,
                    }}
                  >
                    WE OPERATE AT THE
                    <br />
                    <span className="font-light">NEXT FRONTIER</span>
                  </h2>
                </div>

                {/* Button */}
                <div
                  style={{
                    opacity: easedProgress,
                    transform: `translateY(${(1 - easedProgress) * 30}px)`,
                  }}
                >
                  <Button
                    size="lg"
                    className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 font-light text-sm group transition-all duration-300 rounded-full px-6"
                    asChild
                  >
                    <Link href="/join">
                      Join
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Side - Mailing List */}
              <div
                className="lg:pl-8 lg:border-l border-gray-200 dark:border-white/10"
                style={{
                  opacity: easedProgress,
                  transform: `translateX(${(1 - easedProgress) * 20}px)`,
                }}
              >
                <div className="max-w-md">
                  <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2 tracking-wide">
                    JOIN OUR MAILING LIST
                  </h3>
                  <p className="text-sm font-extralight text-gray-500 dark:text-white/50 mb-6">
                    Get the best stories from the InnoSphere community. First access to insights, events, and opportunities.
                  </p>

                  {submitted ? (
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-light">You&apos;re on the list!</span>
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="space-y-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full px-5 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full font-extralight text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200"
                      />
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-white/90 font-light text-sm px-6 rounded-full"
                      >
                        {isSubmitting ? "Subscribing..." : "Subscribe"}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
