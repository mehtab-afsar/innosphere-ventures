"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Raphael: any;
    map_cfg: any;
    FlaMap: any;
  }
}

export function IndiaMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapInitialized = useRef(false);

  useEffect(() => {
    // Prevent multiple initializations
    if (mapInitialized.current) return;

    // Function to load scripts sequentially
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = false; // Important: load in order
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(script);
      });
    };

    // Load scripts in sequence
    const initMap = async () => {
      try {
        await loadScript('/raphael.min.js');
        await loadScript('/settings.js');
        await loadScript('/paths.js');
        await loadScript('/map.js');

        // Wait a bit for scripts to initialize
        setTimeout(() => {
          if (window.FlaMap && window.map_cfg) {
            // Initialize map using the same method as the original demo
            window.map_cfg.mapWidth = 0;
            const map = new window.FlaMap(window.map_cfg);
            map.drawOnDomReady('map-container');
            mapInitialized.current = true;
          }
        }, 300);
      } catch (error) {
        console.error("Error loading map:", error);
      }
    };

    initMap();
  }, []);

  return (
    <div
      ref={containerRef}
      id="map-container"
      className="w-full h-full"
      style={{
        maxWidth: "100%",
        minHeight: "500px",
        opacity: 0.3,
        filter: "grayscale(100%)"
      }}
    />
  );
}
