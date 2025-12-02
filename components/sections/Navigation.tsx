"use client";

import { Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

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
          <div className={`text-2xl font-extralight tracking-wider ${scrolled ? "text-gray-900" : "text-gray-100"}`}>
            InnoSphere <span className="font-normal">Ventures</span>
          </div>
          <div className={`hidden md:flex space-x-8 font-light ${scrolled ? "text-gray-700" : "text-gray-300"}`}>
            <a href="#why-india" className={`${scrolled ? "hover:text-gray-900" : "hover:text-white"} transition-colors duration-200`}>Why India</a>
            <a href="#why-now" className={`${scrolled ? "hover:text-gray-900" : "hover:text-white"} transition-colors duration-200`}>Why Now</a>
            <a href="#why-us" className={`${scrolled ? "hover:text-gray-900" : "hover:text-white"} transition-colors duration-200`}>Why Us</a>
            <a href="/signals" className={`${scrolled ? "hover:text-gray-900" : "hover:text-white"} transition-colors duration-200`}>Signals</a>
            <div className="relative group">
              <button className={`flex items-center gap-1 ${scrolled ? "hover:text-gray-900" : "hover:text-white"} transition-colors duration-200`}>
                About
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className={`${scrolled ? "bg-white" : "bg-gray-900"} backdrop-blur-md rounded-lg shadow-xl border ${scrolled ? "border-gray-200" : "border-gray-700"} py-2 min-w-[140px]`}>
                  <a href="/leadership" className={`block px-4 py-2 text-sm ${scrolled ? "text-gray-700 hover:bg-gray-100 hover:text-gray-900" : "text-gray-300 hover:bg-gray-800 hover:text-white"} transition-colors`}>Leadership</a>
                  <a href="/gallery" className={`block px-4 py-2 text-sm ${scrolled ? "text-gray-700 hover:bg-gray-100 hover:text-gray-900" : "text-gray-300 hover:bg-gray-800 hover:text-white"} transition-colors`}>Gallery</a>
                </div>
              </div>
            </div>
          </div>
          <button
            className={`md:hidden ${scrolled ? "text-gray-900" : "text-gray-100"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 space-y-4 font-light ${scrolled ? "text-gray-700" : "text-gray-300"} animate-in fade-in slide-in-from-top-2 duration-200`}>
            <a href="#why-india" className={`block ${scrolled ? "hover:text-gray-900" : "hover:text-white"} transition-colors`}>Why India</a>
            <a href="#why-now" className={`block ${scrolled ? "hover:text-gray-900" : "hover:text-white"} transition-colors`}>Why Now</a>
            <a href="#why-us" className={`block ${scrolled ? "hover:text-gray-900" : "hover:text-white"} transition-colors`}>Why Us</a>
            <a href="/signals" className={`block ${scrolled ? "hover:text-gray-900" : "hover:text-white"} transition-colors`}>Signals</a>
            <div>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`flex items-center gap-1 ${scrolled ? "hover:text-gray-900" : "hover:text-white"} transition-colors`}
              >
                About
                <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
              </button>
              {aboutOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <a href="/leadership" className={`block ${scrolled ? "hover:text-gray-900" : "hover:text-white"} transition-colors`}>Leadership</a>
                  <a href="/gallery" className={`block ${scrolled ? "hover:text-gray-900" : "hover:text-white"} transition-colors`}>Gallery</a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
