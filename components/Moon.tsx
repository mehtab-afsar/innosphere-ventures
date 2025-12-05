"use client";

import { useEffect, useRef, useState } from "react";
import { useTimeOfDay } from "./TimeOfDayProvider";

// Moon texture URL - using earth topology as moon-like surface
const MOON_TEXTURE = "//unpkg.com/three-globe/example/img/earth-topology.png";

export function Moon() {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { timeOfDay } = useTimeOfDay();
  const [GlobeComponent, setGlobeComponent] = useState<any>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Dynamically import react-globe.gl (client-side only)
  useEffect(() => {
    import("react-globe.gl").then((mod) => {
      setGlobeComponent(() => mod.default);
    });
  }, []);

  // Get container dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Configure globe controls
  useEffect(() => {
    if (globeRef.current) {
      // Configure controls
      const controls = globeRef.current.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.8;
        controls.enableZoom = false;
        controls.enablePan = false;
      }
    }
  }, [GlobeComponent, dimensions]);

  // Get atmosphere color - silver/grey for moon
  const getAtmosphereColor = () => {
    switch (timeOfDay) {
      case "dawn":
        return "#d4d4d4";
      case "day":
        return "#e0e0e0";
      case "dusk":
        return "#c0c0c0";
      case "night":
      default:
        return "#a0a0a0";
    }
  };

  if (!GlobeComponent) {
    return (
      <div ref={containerRef} className="w-full h-full flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-gray-300 dark:border-gray-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full h-full">
      {dimensions.width > 0 && dimensions.height > 0 && (
        <GlobeComponent
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          globeImageUrl={MOON_TEXTURE}
          bumpImageUrl=""
          backgroundImageUrl=""
          backgroundColor="rgba(0,0,0,0)"
          atmosphereColor={getAtmosphereColor()}
          atmosphereAltitude={0.1}
          animateIn={true}
        />
      )}
    </div>
  );
}
