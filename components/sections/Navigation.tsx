"use client";

import { Menu, ChevronDown, Sun, Moon, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "../ThemeProvider";

export function Navigation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {

          // Calculate scroll progress (0 to 1)
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const scrollTop = window.scrollY;
          const maxScroll = documentHeight - windowHeight;
          const progress = Math.min(scrollTop / maxScroll, 1);
          setScrollProgress(progress);

          // Update CSS variable for smooth transitions
          document.documentElement.style.setProperty('--nav-scroll-progress', progress.toString());

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simple color switch - transitions from dark text (top) to light text (bottom)
  // Switch happens earlier to ensure readability as gradient darkens
  const textColor = scrollProgress < 0.25 ? "rgb(10, 17, 40)" : "rgb(255, 255, 255)";
  const textColorStyle = { color: textColor };
  const navLinkColorStyle = textColorStyle;

  const themeToggleStyle = {
    backgroundColor: scrollProgress < 0.25 ? "rgba(10, 17, 40, 0.1)" : "rgba(255, 255, 255, 0.1)",
    color: textColor
  };
  const dropdownBg = "bg-black/90 backdrop-blur-xl";
  const dropdownBorder = "border-white/10";

  return (
    <nav className="fixed top-0 w-full z-50 py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-extralight tracking-wider" style={textColorStyle}>
            InnoSphere <span className="font-normal">Ventures</span>
          </div>
          <div className="hidden md:flex space-x-8 font-light" style={navLinkColorStyle}>
            <a href="/" className="hover:brightness-125 transition-all duration-300">Home</a>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:brightness-125 transition-all duration-300">
                Why
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full -left-[120px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className={`${dropdownBg} backdrop-blur-xl rounded-2xl shadow-2xl border ${dropdownBorder} p-4 w-[620px]`}>
                  <div className="grid grid-cols-3 gap-3">
                    <a href="/#why-india" className="group/card p-5 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/[0.03] transition-all duration-200">
                      <h4 className="text-base font-medium text-white mb-2">Why India</h4>
                      <p className="text-sm text-gray-400 font-light leading-relaxed mb-4">The world's fastest growing startup ecosystem.</p>
                      <span className="text-sm text-gray-500 flex items-center gap-2 group-hover/card:text-white transition-colors">
                        Learn <ArrowRight className="w-4 h-4 group-hover/card:translate-x-0.5 transition-transform" />
                      </span>
                    </a>
                    <a href="/#why-now" className="group/card p-5 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/[0.03] transition-all duration-200">
                      <h4 className="text-base font-medium text-white mb-2">Why Now</h4>
                      <p className="text-sm text-gray-400 font-light leading-relaxed mb-4">A once-in-a-generation opportunity.</p>
                      <span className="text-sm text-gray-500 flex items-center gap-2 group-hover/card:text-white transition-colors">
                        Discover <ArrowRight className="w-4 h-4 group-hover/card:translate-x-0.5 transition-transform" />
                      </span>
                    </a>
                    <a href="/#why-us" className="group/card p-5 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/[0.03] transition-all duration-200">
                      <h4 className="text-base font-medium text-white mb-2">Why Us</h4>
                      <p className="text-sm text-gray-400 font-light leading-relaxed mb-4">What sets InnoSphere apart.</p>
                      <span className="text-sm text-gray-500 flex items-center gap-2 group-hover/card:text-white transition-colors">
                        Explore <ArrowRight className="w-4 h-4 group-hover/card:translate-x-0.5 transition-transform" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a href="/approach" className="hover:brightness-125 transition-all duration-300">Approach</a>
            <a href="/portfolio" className="hover:brightness-125 transition-all duration-300">Portfolio</a>
            <a href="/join" className="hover:brightness-125 transition-all duration-300">Join</a>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:brightness-125 transition-all duration-300">
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
              className="p-2 rounded-full"
              style={themeToggleStyle}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              className="md:hidden"
              style={textColorStyle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 font-light animate-in fade-in slide-in-from-top-2 duration-200" style={navLinkColorStyle}>
            <a href="/" className="block hover:brightness-125 transition-colors">Home</a>
            <div>
              <button
                onClick={() => setWhyOpen(!whyOpen)}
                className="flex items-center gap-1 hover:brightness-125 transition-colors"
              >
                Why
                <ChevronDown className={`w-4 h-4 transition-transform ${whyOpen ? "rotate-180" : ""}`} />
              </button>
              {whyOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <a href="/#why-india" className="block hover:brightness-125 transition-colors">Why India</a>
                  <a href="/#why-now" className="block hover:brightness-125 transition-colors">Why Now</a>
                  <a href="/#why-us" className="block hover:brightness-125 transition-colors">Why Us</a>
                </div>
              )}
            </div>
            <a href="/approach" className="block hover:brightness-125 transition-colors">Approach</a>
            <a href="/portfolio" className="block hover:brightness-125 transition-colors">Portfolio</a>
            <a href="/join" className="block hover:brightness-125 transition-colors">Join</a>
            <div>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center gap-1 hover:brightness-125 transition-colors"
              >
                About
                <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
              </button>
              {aboutOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <a href="/leadership" className="block hover:brightness-125 transition-colors">Leadership</a>
                  <a href="/gallery" className="block hover:brightness-125 transition-colors">Gallery</a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
