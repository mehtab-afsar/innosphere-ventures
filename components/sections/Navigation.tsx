"use client";

import { Menu, ChevronDown, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "../ThemeProvider";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine text colors based on scroll and theme
  const logoColor = scrolled
    ? "text-gray-900 dark:text-white"
    : "text-gray-900 dark:text-gray-100";
  const navLinkColor = scrolled
    ? "text-gray-700 dark:text-gray-200"
    : "text-gray-700 dark:text-gray-300";
  const navLinkHover = scrolled
    ? "hover:text-gray-900 dark:hover:text-white"
    : "hover:text-gray-900 dark:hover:text-white";
  const dropdownBg = scrolled
    ? "bg-white dark:bg-gray-900"
    : "bg-white dark:bg-gray-900";
  const dropdownBorder = scrolled
    ? "border-gray-200 dark:border-gray-700"
    : "border-gray-200 dark:border-gray-700";
  const dropdownLinkColor = scrolled
    ? "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "glass-effect py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className={`text-2xl font-extralight tracking-wider ${logoColor}`}>
            InnoSphere <span className="font-normal">Ventures</span>
          </div>
          <div className={`hidden md:flex space-x-8 font-light ${navLinkColor}`}>
            <div className="relative group">
              <button className={`flex items-center gap-1 ${navLinkHover} transition-colors duration-200`}>
                Why
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className={`${dropdownBg} backdrop-blur-md rounded-lg shadow-xl border ${dropdownBorder} py-2 min-w-[140px]`}>
                  <a href="/#why-india" className={`block px-4 py-2 text-sm ${dropdownLinkColor} transition-colors`}>Why India</a>
                  <a href="/#why-now" className={`block px-4 py-2 text-sm ${dropdownLinkColor} transition-colors`}>Why Now</a>
                  <a href="/#why-us" className={`block px-4 py-2 text-sm ${dropdownLinkColor} transition-colors`}>Why Us</a>
                </div>
              </div>
            </div>
            <a href="/signals" className={`${navLinkHover} transition-colors duration-200`}>Signals</a>
            <a href="/thesis" className={`${navLinkHover} transition-colors duration-200`}>Thesis</a>
            <a href="/#join" className={`${navLinkHover} transition-colors duration-200`}>Join</a>
            <div className="relative group">
              <button className={`flex items-center gap-1 ${navLinkHover} transition-colors duration-200`}>
                About
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className={`${dropdownBg} backdrop-blur-md rounded-lg shadow-xl border ${dropdownBorder} py-2 min-w-[140px]`}>
                  <a href="/leadership" className={`block px-4 py-2 text-sm ${dropdownLinkColor} transition-colors`}>Leadership</a>
                  <a href="/gallery" className={`block px-4 py-2 text-sm ${dropdownLinkColor} transition-colors`}>Gallery</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                scrolled
                  ? "bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-700 dark:text-white"
                  : "bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 text-gray-700 dark:text-white"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              className={`md:hidden ${logoColor}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 space-y-4 font-light ${navLinkColor} animate-in fade-in slide-in-from-top-2 duration-200`}>
            <div>
              <button
                onClick={() => setWhyOpen(!whyOpen)}
                className={`flex items-center gap-1 ${navLinkHover} transition-colors`}
              >
                Why
                <ChevronDown className={`w-4 h-4 transition-transform ${whyOpen ? "rotate-180" : ""}`} />
              </button>
              {whyOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <a href="/#why-india" className={`block ${navLinkHover} transition-colors`}>Why India</a>
                  <a href="/#why-now" className={`block ${navLinkHover} transition-colors`}>Why Now</a>
                  <a href="/#why-us" className={`block ${navLinkHover} transition-colors`}>Why Us</a>
                </div>
              )}
            </div>
            <a href="/signals" className={`block ${navLinkHover} transition-colors`}>Signals</a>
            <a href="/thesis" className={`block ${navLinkHover} transition-colors`}>Thesis</a>
            <a href="/#join" className={`block ${navLinkHover} transition-colors`}>Join</a>
            <div>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`flex items-center gap-1 ${navLinkHover} transition-colors`}
              >
                About
                <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
              </button>
              {aboutOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <a href="/leadership" className={`block ${navLinkHover} transition-colors`}>Leadership</a>
                  <a href="/gallery" className={`block ${navLinkHover} transition-colors`}>Gallery</a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
