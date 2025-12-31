"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import type { MailingListData } from "@/lib/supabase";
import dynamic from "next/dynamic";
import { Linkedin, Twitter } from "lucide-react";

// Dynamically import ParticleSphere to avoid SSR issues
const ParticleSphere = dynamic(() => import("@/components/ParticleSphere").then(mod => ({ default: mod.ParticleSphere })), {
  ssr: false,
});

export function Footer() {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const { isSubmitting, submitted, submit } = useFormSubmit<MailingListData>("mailing-list");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    await submit({ email });
    setEmail("");
  };

  return (
    <footer ref={footerRef} className="relative overflow-hidden" style={{
      background: 'transparent',
      color: '#f5f5f0'
    }}>
      {/* Particle Sphere Background - Right Side */}
      <div className="absolute right-0 top-0 w-[50%] h-full opacity-40 pointer-events-none hidden lg:block">
        <ParticleSphere scale={0.7} />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 px-6 lg:px-12 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Left Side - Brand & CTA */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <Link href="/" className="inline-block mb-4">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-wider">
                  InnoSphere
                  <br />
                  <span className="font-light">Ventures</span>
                </span>
              </Link>

              <p className="text-base font-extralight leading-relaxed mb-6 max-w-md" style={{ color: '#f5f5f0', opacity: 0.7 }}>
                Building the future of India&apos;s innovation ecosystem, one frontier company at a time.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button
                  size="lg"
                  className="bg-[#ff6b5a] text-white hover:bg-[#ff6b5a]/90 font-medium rounded-full px-8 transition-all duration-300 hover:scale-105 shadow-lg shadow-[#ff6b5a]/30"
                  asChild
                >
                  <Link href="/join">
                    Join the Movement
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#ff6b5a]/40 hover:bg-[#ff6b5a]/10 font-light rounded-full px-8 transition-all duration-300 hover:border-[#ff6b5a]/60"
                  style={{ color: '#f5f5f0' }}
                  asChild
                >
                  <Link href="/portfolio">
                    View Portfolio
                  </Link>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/innosphere-vc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#ff6b5a]/10 border border-[#ff6b5a]/30 hover:bg-[#ff6b5a]/20 hover:border-[#ff6b5a]/50 transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:text-[#ff6b5a] transition-colors" strokeWidth={1.5} style={{ color: '#f5f5f0', opacity: 0.7 }} />
                </a>
                <a
                  href="https://twitter.com/innosphere"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#ff6b5a]/10 border border-[#ff6b5a]/30 hover:bg-[#ff6b5a]/20 hover:border-[#ff6b5a]/50 transition-all duration-300 group"
                >
                  <Twitter className="w-5 h-5 group-hover:text-[#ff6b5a] transition-colors" strokeWidth={1.5} style={{ color: '#f5f5f0', opacity: 0.7 }} />
                </a>
              </div>
            </div>

            {/* Right Side - Newsletter */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <h3 className="text-xs font-medium tracking-widest uppercase mb-6" style={{ color: '#ff6b5a', opacity: 0.8 }}>
                Stay Updated
              </h3>
              <p className="text-base font-extralight mb-6 leading-relaxed" style={{ color: '#f5f5f0', opacity: 0.7 }}>
                First access to insights, portfolio updates, and exclusive opportunities from India&apos;s innovation frontier.
              </p>

              {submitted ? (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#ff6b5a]/10 border border-[#ff6b5a]/40" style={{ color: '#ff6b5a' }}>
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-light">You&apos;re on the list! Check your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-5 py-3.5 bg-[#f5f5f0]/5 border border-[#ff6b5a]/30 rounded-xl font-light text-base focus:outline-none focus:ring-2 focus:ring-[#ff6b5a]/60 focus:border-transparent transition-all duration-200"
                    style={{ color: '#f5f5f0' }}
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#ff6b5a] text-white hover:bg-[#ff6b5a]/90 font-medium rounded-xl px-6 py-3.5 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#ff6b5a]/30"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe to Updates"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`relative z-10 border-t border-white/10 px-6 lg:px-12 py-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
        style={{ transitionDelay: '400ms' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            {/* Left - Copyright */}
            <p className="font-extralight text-white/40">
              © {new Date().getFullYear()} InnoSphere Ventures. All rights reserved.
            </p>

            {/* Center - Legal Links */}
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="font-light text-white/60 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="font-light text-white/60 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>

            {/* Right - Tagline */}
            <p className="font-extralight text-white/40 hidden lg:block">
              Empowering innovators. Elevating futures.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
