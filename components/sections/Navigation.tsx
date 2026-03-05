"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/india", label: "India" },
    { href: "/approach", label: "Approach" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/join", label: "Join" },
    { href: "/leadership", label: "Team" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-light tracking-wide text-[#0a1128] hover:opacity-80 transition-opacity">
            InnoSphere <span className="font-medium">Ventures</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-light text-gray-500 hover:text-[#0a1128] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/join"
              className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-[#0a1128] hover:bg-[#0a1128]/90 transition-colors duration-200"
            >
              Get in Touch
            </Link>
            <button
              className="md:hidden text-[#0a1128]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-2 py-2.5 text-sm font-light text-gray-600 hover:text-[#0a1128] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100 mt-2">
              <Link
                href="/join"
                className="block px-2 py-2.5 text-sm font-medium text-[#ff6b5a]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch →
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
