"use client";

import { Menu, ChevronDown, Sun, Moon, ArrowRight } from "lucide-react";
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
            <a href="/" className={`${navLinkHover} transition-colors duration-200`}>Home</a>
            <div className="relative group">
              <button className={`flex items-center gap-1 ${navLinkHover} transition-colors duration-200`}>
                Why
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full -left-[120px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className={`${dropdownBg} backdrop-blur-xl rounded-2xl shadow-2xl border ${dropdownBorder} p-4 w-[620px]`}>
                  <div className="grid grid-cols-3 gap-3">
                    <a href="/#why-india" className="group/card p-5 rounded-xl border border-transparent hover:border-gray-200 dark:hover:border-white/10 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-all duration-200">
                      <h4 className="text-base font-medium text-gray-900 dark:text-white mb-2">Why India</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-4">The world's fastest growing startup ecosystem.</p>
                      <span className="text-sm text-gray-400 dark:text-gray-500 flex items-center gap-2 group-hover/card:text-gray-900 dark:group-hover/card:text-white transition-colors">
                        Learn <ArrowRight className="w-4 h-4 group-hover/card:translate-x-0.5 transition-transform" />
                      </span>
                    </a>
                    <a href="/#why-now" className="group/card p-5 rounded-xl border border-transparent hover:border-gray-200 dark:hover:border-white/10 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-all duration-200">
                      <h4 className="text-base font-medium text-gray-900 dark:text-white mb-2">Why Now</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-4">A once-in-a-generation opportunity.</p>
                      <span className="text-sm text-gray-400 dark:text-gray-500 flex items-center gap-2 group-hover/card:text-gray-900 dark:group-hover/card:text-white transition-colors">
                        Discover <ArrowRight className="w-4 h-4 group-hover/card:translate-x-0.5 transition-transform" />
                      </span>
                    </a>
                    <a href="/#why-us" className="group/card p-5 rounded-xl border border-transparent hover:border-gray-200 dark:hover:border-white/10 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-all duration-200">
                      <h4 className="text-base font-medium text-gray-900 dark:text-white mb-2">Why Us</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-4">What sets InnoSphere apart.</p>
                      <span className="text-sm text-gray-400 dark:text-gray-500 flex items-center gap-2 group-hover/card:text-gray-900 dark:group-hover/card:text-white transition-colors">
                        Explore <ArrowRight className="w-4 h-4 group-hover/card:translate-x-0.5 transition-transform" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Approach Mega Menu */}
            <div className="relative group">
              <button className={`flex items-center gap-1 ${navLinkHover} transition-colors duration-200`}>
                Approach
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full -left-[280px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className={`${dropdownBg} backdrop-blur-xl rounded-2xl shadow-2xl border ${dropdownBorder} p-4 w-[720px]`}>
                  <div className="grid grid-cols-3 gap-3">
                    {/* Letter to Founders */}
                    <a href="/letter" className="group/card p-5 rounded-xl border border-transparent hover:border-gray-200 dark:hover:border-white/10 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-all duration-200">
                      <h4 className="text-base font-medium text-gray-900 dark:text-white mb-2">Letter to Founders</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-4">Our commitment to India's ambitious builders.</p>
                      <span className="text-sm text-gray-400 dark:text-gray-500 flex items-center gap-2 group-hover/card:text-gray-900 dark:group-hover/card:text-white transition-colors">
                        Read <ArrowRight className="w-4 h-4 group-hover/card:translate-x-0.5 transition-transform" />
                      </span>
                    </a>

                    {/* Thesis */}
                    <a href="/thesis" className="group/card p-5 rounded-xl border border-transparent hover:border-gray-200 dark:hover:border-white/10 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-all duration-200">
                      <h4 className="text-base font-medium text-gray-900 dark:text-white mb-2">Investment Thesis</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-4">How we find category-defining companies.</p>
                      <span className="text-sm text-gray-400 dark:text-gray-500 flex items-center gap-2 group-hover/card:text-gray-900 dark:group-hover/card:text-white transition-colors">
                        Explore <ArrowRight className="w-4 h-4 group-hover/card:translate-x-0.5 transition-transform" />
                      </span>
                    </a>

                    {/* Signals */}
                    <a href="/signals" className="group/card p-5 rounded-xl border border-transparent hover:border-gray-200 dark:hover:border-white/10 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-all duration-200">
                      <h4 className="text-base font-medium text-gray-900 dark:text-white mb-2">Market Signals</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-4">Data on India's innovation ecosystem.</p>
                      <span className="text-sm text-gray-400 dark:text-gray-500 flex items-center gap-2 group-hover/card:text-gray-900 dark:group-hover/card:text-white transition-colors">
                        View <ArrowRight className="w-4 h-4 group-hover/card:translate-x-0.5 transition-transform" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a href="/#join" className={`${navLinkHover} transition-colors duration-200`}>Join</a>
            <div className="relative group">
              <button className={`flex items-center gap-1 ${navLinkHover} transition-colors duration-200`}>
                About
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full -left-[120px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className={`${dropdownBg} backdrop-blur-xl rounded-2xl shadow-2xl border ${dropdownBorder} p-4 w-[480px]`}>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="/leadership" className="group/card p-5 rounded-xl border border-transparent hover:border-gray-200 dark:hover:border-white/10 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-all duration-200">
                      <h4 className="text-base font-medium text-gray-900 dark:text-white mb-2">Leadership</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-4">Meet the team behind InnoSphere.</p>
                      <span className="text-sm text-gray-400 dark:text-gray-500 flex items-center gap-2 group-hover/card:text-gray-900 dark:group-hover/card:text-white transition-colors">
                        View <ArrowRight className="w-4 h-4 group-hover/card:translate-x-0.5 transition-transform" />
                      </span>
                    </a>
                    <a href="/gallery" className="group/card p-5 rounded-xl border border-transparent hover:border-gray-200 dark:hover:border-white/10 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-all duration-200">
                      <h4 className="text-base font-medium text-gray-900 dark:text-white mb-2">Gallery</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-4">Our journey in pictures.</p>
                      <span className="text-sm text-gray-400 dark:text-gray-500 flex items-center gap-2 group-hover/card:text-gray-900 dark:group-hover/card:text-white transition-colors">
                        Browse <ArrowRight className="w-4 h-4 group-hover/card:translate-x-0.5 transition-transform" />
                      </span>
                    </a>
                  </div>
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
            <a href="/" className={`block ${navLinkHover} transition-colors`}>Home</a>
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
            <div>
              <span className={`block text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2`}>Approach</span>
              <div className="ml-2 space-y-2">
                <a href="/letter" className={`block ${navLinkHover} transition-colors`}>Letter to Founders</a>
                <a href="/thesis" className={`block ${navLinkHover} transition-colors`}>Investment Thesis</a>
                <a href="/signals" className={`block ${navLinkHover} transition-colors`}>Market Signals</a>
              </div>
            </div>
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
