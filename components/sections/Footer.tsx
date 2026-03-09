"use client";

import { useState } from "react";
import Link from "next/link";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import type { MailingListData } from "@/lib/supabase";
import { Linkedin, ArrowRight } from "lucide-react";

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
    <footer className="bg-[#0c0f1a] text-white border-t-2 border-[#ff6b5a]/40">
      <div className="px-6 lg:px-12 py-10 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-light tracking-wide text-white">
                  InnoSphere <span className="font-medium">Ventures</span>
                </span>
              </Link>
              <p className="text-sm font-light text-white/50 leading-relaxed mb-6 max-w-xs">
                Scaling early-stage venture for India's deep tech expansion. Powered by Edge Alpha.
              </p>
              <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com/company/innosphere-vc/" target="_blank" rel="noopener noreferrer"
                  className="p-2 border border-white/10 hover:border-white/30 hover:text-white text-white/40 transition-all duration-200">
                  <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-6">Stay Updated</p>
              <p className="text-sm font-light text-white/50 leading-relaxed mb-5">
                Portfolio updates, insights, and exclusive opportunities from India's innovation frontier.
              </p>
              {submitted ? (
                <div className="flex items-center gap-2 text-sm text-[#7affd4] font-light">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  You're on the list!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com" required
                    className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 text-sm font-light text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors" />
                  <button type="submit" disabled={isSubmitting}
                    className="px-4 py-2.5 bg-[#ff6b5a] text-white text-sm font-medium hover:bg-[#ff6b5a]/90 transition-colors flex-shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 lg:px-12 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-light text-white/30">
          <p>© {new Date().getFullYear()} InnoSphere Ventures. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
          </div>
          <p className="hidden lg:block">Conviction sparks. Consensus amplifies.</p>
        </div>
      </div>
    </footer>
  );
}
