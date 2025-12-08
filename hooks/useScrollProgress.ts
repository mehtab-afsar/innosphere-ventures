"use client";

import { useEffect, useRef, useState, RefObject } from "react";

interface ScrollProgressOptions {
  /** Viewport percentage where animation starts (0-1). Default: 0.9 */
  start?: number;
  /** Viewport percentage where animation ends (0-1). Default: 0.4 */
  end?: number;
}

interface ScrollProgressResult<T extends HTMLElement> {
  ref: RefObject<T | null>;
  progress: number;
}

/**
 * Hook to track scroll progress of an element through the viewport.
 * Returns a progress value from 0 to 1 as the element scrolls into view.
 */
export function useScrollProgress<T extends HTMLElement = HTMLDivElement>(
  options: ScrollProgressOptions = {}
): ScrollProgressResult<T> {
  const { start = 0.9, end = 0.4 } = options;
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startY = windowHeight * start;
      const endY = windowHeight * end;

      if (rect.top <= startY && rect.top >= endY) {
        const p = 1 - (rect.top - endY) / (startY - endY);
        setProgress(Math.max(0, Math.min(1, p)));
      } else if (rect.top < endY) {
        setProgress(1);
      } else {
        setProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [start, end]);

  return { ref, progress };
}
