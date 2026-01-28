"use client";

import { Menu, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "../ThemeProvider";

export function Navigation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  return (
    <nav className="fixed top-0 w-full z-50 py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-extralight tracking-wider" style={textColorStyle}>
            InnoSphere <span className="font-normal">Ventures</span>
          </div>
          <div className="hidden md:flex space-x-10 font-light" style={navLinkColorStyle}>
            <a href="/" className="hover:brightness-125 transition-all duration-300">Home</a>
            <a href="/india" className="hover:brightness-125 transition-all duration-300">India</a>
            <a href="/approach" className="hover:brightness-125 transition-all duration-300">Approach</a>
            <a href="/portfolio" className="hover:brightness-125 transition-all duration-300">Portfolio</a>
            <a href="/join" className="hover:brightness-125 transition-all duration-300">Join</a>
            <a href="/leadership" className="hover:brightness-125 transition-all duration-300">Leadership</a>
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
            <a href="/india" className="block hover:brightness-125 transition-colors">India</a>
            <a href="/approach" className="block hover:brightness-125 transition-colors">Approach</a>
            <a href="/portfolio" className="block hover:brightness-125 transition-colors">Portfolio</a>
            <a href="/join" className="block hover:brightness-125 transition-colors">Join</a>
            <a href="/leadership" className="block hover:brightness-125 transition-colors">Leadership</a>
          </div>
        )}
      </div>
    </nav>
  );
}
