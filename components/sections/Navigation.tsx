"use client";

import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "glass-effect py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-extralight tracking-wider text-gray-100">
            InnoSphere <span className="font-normal">Ventures</span>
          </div>
          <div className="hidden md:flex space-x-8 font-light text-gray-300">
            <a href="#why-india" className="hover:text-white transition-colors duration-200">Why India</a>
            <a href="#why-now" className="hover:text-white transition-colors duration-200">Why Now</a>
            <a href="#why-us" className="hover:text-white transition-colors duration-200">Why Us</a>
            <a href="#signals" className="hover:text-white transition-colors duration-200">Signals</a>
            <a href="#collective" className="hover:text-white transition-colors duration-200">Collective</a>
            <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
          </div>
          <button
            className="md:hidden text-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 font-light text-gray-300 animate-in fade-in slide-in-from-top-2 duration-200">
            <a href="#why-india" className="block hover:text-white transition-colors">Why India</a>
            <a href="#why-now" className="block hover:text-white transition-colors">Why Now</a>
            <a href="#why-us" className="block hover:text-white transition-colors">Why Us</a>
            <a href="#signals" className="block hover:text-white transition-colors">Signals</a>
            <a href="#collective" className="block hover:text-white transition-colors">Collective</a>
            <a href="#contact" className="block hover:text-white transition-colors">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}
