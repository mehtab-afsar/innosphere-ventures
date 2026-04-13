"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrolledDown = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (currentY < 60) {
        setVisible(true);
        scrolledDown.current = 0;
      } else if (delta > 0) {
        scrolledDown.current += delta;
        if (scrolledDown.current > 80) {
          setVisible(false);
          setMobileMenuOpen(false);
        }
      } else {
        scrolledDown.current = 0;
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/india", label: "India" },
    { href: "/approach", label: "Approach" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/edge-alpha", label: "Edge Alpha", rainbow: true },
    { href: "/join", label: "Join" },
    { href: "/leadership", label: "Team" },
  ];

  return (
    <motion.div
      className="fixed top-4 left-0 right-0 z-50 flex flex-col items-center px-4 gap-2"
      animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
      transition={{ duration: visible ? 0.35 : 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Pill navbar */}
      <nav className="w-full max-w-3xl rounded-full border border-white/40 shadow-lg shadow-black/5"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(240,244,255,0.6) 50%, rgba(255,255,255,0.75) 100%)',
          backgroundSize: '200% 200%',
          animation: 'liquidBg 6s ease infinite',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        }}
      >
        <div className="px-4 lg:px-6">
          <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <Link href="/" className="text-sm font-light tracking-wide text-[#0a1128] hover:opacity-80 transition-opacity whitespace-nowrap">
              InnoSphere <span className="font-medium">Ventures</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                if (link.rainbow) {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="relative text-sm font-medium group"
                      style={{
                        background: "linear-gradient(90deg, #ff6b5a, #f59e0b, #22c55e, #3b82f6, #a855f7, #ff6b5a)",
                        backgroundSize: "200% auto",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        animation: "rainbowShift 3s linear infinite",
                      }}
                    >
                      {link.label}
                      <span className={`absolute -bottom-0.5 left-0 h-px transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                        style={{
                          background: "linear-gradient(90deg, #ff6b5a, #f59e0b, #22c55e, #3b82f6, #a855f7)",
                        }}
                      />
                    </Link>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-light transition-colors duration-200 group ${
                      active ? "text-[#0a1128]" : "text-gray-400 hover:text-[#0a1128]"
                    }`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-0.5 left-0 h-px bg-[#ff6b5a] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                  </Link>
                );
              })}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/join#interest"
                className="hidden md:inline-flex items-center px-4 py-1.5 text-xs font-medium text-white bg-[#0a1128] hover:bg-[#0a1128]/80 rounded-full transition-colors duration-200"
              >
                Get in Touch
              </Link>
              <button
                className="md:hidden text-[#0a1128] p-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden w-full max-w-3xl rounded-2xl border border-white/40 shadow-lg shadow-black/5 px-4 py-3 space-y-1"
            style={{
              background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-2 py-2.5 text-sm border-b border-gray-100 last:border-0 transition-colors ${
                  link.rainbow ? "font-medium" : "font-light text-gray-600 hover:text-[#0a1128]"
                }`}
                style={link.rainbow ? {
                  background: "linear-gradient(90deg, #ff6b5a, #f59e0b, #22c55e, #3b82f6, #a855f7, #ff6b5a)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "rainbowShift 3s linear infinite",
                } : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/join#interest"
              className="block px-2 py-2.5 text-sm font-medium text-[#ff6b5a]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
