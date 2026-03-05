"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/india", label: "India" },
    { href: "/approach", label: "Approach" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/join", label: "Join" },
    { href: "/leadership", label: "Team" },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
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
                href="/join"
                className="hidden md:inline-flex items-center px-4 py-1.5 text-xs font-medium text-white bg-[#0a1128] hover:bg-[#0a1128]/80 rounded-full transition-colors duration-200"
              >
                Get in Touch
              </Link>
              <button
                className="md:hidden text-[#0a1128]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 mx-4 py-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-2 py-2 text-sm font-light text-gray-600 hover:text-[#0a1128] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100 mt-2">
              <Link
                href="/join"
                className="block px-2 py-2 text-sm font-medium text-[#ff6b5a]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch →
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
