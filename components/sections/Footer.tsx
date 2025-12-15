"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import type { MailingListData } from "@/lib/supabase";

export function Footer() {
  const [email, setEmail] = useState("");
  const { isSubmitting, submitted, submit } = useFormSubmit<MailingListData>("mailing-list");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    await submit({ email });
    setEmail("");
  };

  return (
    <footer className="bg-gray-950 text-white">
      {/* Main Footer Content */}
      <div className="px-6 lg:px-12 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Side - Brand & Headline */}
            <div>
              <Link href="/" className="inline-block mb-4">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-wider">
                  InnoSphere <span className="font-normal">Ventures</span>
                </span>
              </Link>

              <p className="text-base sm:text-lg font-extralight text-white/60 leading-relaxed mb-6 max-w-md">
                Empowering innovators. Elevating futures.
              </p>

              <Button
                size="sm"
                className="bg-white text-black hover:bg-white/90 font-light text-sm rounded-full px-6"
                asChild
              >
                <Link href="/join">
                  Join Us
                </Link>
              </Button>
            </div>

            {/* Right Side - Mailing List */}
            <div>
              <h3 className="text-sm font-medium tracking-widest uppercase text-white/40 mb-3">
                Join Our Mailing List
              </h3>
              <p className="text-sm font-extralight text-white/60 mb-5 max-w-md">
                First access to insights, events, and opportunities.
              </p>

              {submitted ? (
                <div className="flex items-center gap-2 text-green-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-light">You&apos;re on the list!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-full font-extralight text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-200"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-black hover:bg-white/90 font-light text-sm px-5 py-2.5 rounded-full"
                  >
                    {isSubmitting ? "..." : "Subscribe"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-6 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left - Copyright */}
            <p className="text-sm font-extralight text-white/40">
              © 2025 InnoSphere Ventures
            </p>

            {/* Center - Links */}
            <div className="flex items-center gap-6">
              <Link
                href="/join"
                className="text-sm font-light text-white/60 hover:text-white transition-colors duration-200"
              >
                Join
              </Link>
              <a
                href="https://www.linkedin.com/company/innosphere-vc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light text-white/60 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
              <Link
                href="/privacy"
                className="text-sm font-light text-white/60 hover:text-white transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm font-light text-white/60 hover:text-white transition-colors duration-200"
              >
                Terms
              </Link>
            </div>

            {/* Right - Tagline */}
            <p className="text-sm font-extralight text-white/40 hidden lg:block">
              Empowering innovators. Elevating futures.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
