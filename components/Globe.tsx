"use client";

import { useEffect, useRef, useState } from "react";
import { useTimeOfDay } from "./TimeOfDayProvider";

// Texture URLs from three-globe (NASA Blue Marble)
const TEXTURES = {
  day: "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
  night: "//unpkg.com/three-globe/example/img/earth-night.jpg",
  bump: "//unpkg.com/three-globe/example/img/earth-topology.png",
};

// India highlight marker
const INDIA_MARKER = [
  {
    lat: 20.5937,
    lng: 78.9629,
    size: 0.8,
    color: "#ff6b35",
    name: "India",
  },
];

// Ring around India
const INDIA_RINGS = [
  {
    lat: 20.5937,
    lng: 78.9629,
    maxR: 8,
    propagationSpeed: 2,
    repeatPeriod: 1000,
  },
];

export function Globe() {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { timeOfDay } = useTimeOfDay();
  const [GlobeComponent, setGlobeComponent] = useState<any>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [indiaGeoJson, setIndiaGeoJson] = useState<any>(null);

  // Dynamically import react-globe.gl (client-side only)
  useEffect(() => {
    import("react-globe.gl").then((mod) => {
      setGlobeComponent(() => mod.default);
    });
  }, []);

  // Fetch India GeoJSON for highlighting
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson")
      .then((res) => res.json())
      .then((data) => {
        const india = data.features.filter(
          (d: any) => d.properties.ADMIN === "India"
        );
        setIndiaGeoJson(india);
      })
      .catch(console.error);
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

  // Set initial point of view to India and configure globe
  useEffect(() => {
    if (globeRef.current) {
      // Focus on India - zoomed in more (altitude 1.8)
      globeRef.current.pointOfView({ lat: 20.5937, lng: 78.9629, altitude: 1.8 }, 1000);

      // Configure controls
      const controls = globeRef.current.controls();
      if (controls) {
        controls.autoRotate = false;
        controls.autoRotateSpeed = 1.5; // Faster rotation
        controls.enableZoom = false;
      }
    }
  }, [GlobeComponent, dimensions]);

  // Get highlight color based on time of day
  const getHighlightColor = () => {
    switch (timeOfDay) {
      case "day":
        return "rgba(255, 107, 53, 0.5)";
      case "night":
      default:
        return "rgba(255, 180, 100, 0.7)";
    }
  };

  // Get globe image based on time of day
  const getGlobeImage = () => {
    switch (timeOfDay) {
      case "night":
        return TEXTURES.night;
      case "day":
      default:
        return TEXTURES.day;
    }
  };

  // Get background color based on time of day
  const getBackgroundColor = () => {
    switch (timeOfDay) {
      case "day":
        return "rgba(135, 206, 235, 0.1)";
      case "night":
      default:
        return "rgba(0, 0, 20, 0)";
    }
  };

  if (!GlobeComponent) {
    return (
      <div ref={containerRef} className="w-full h-full flex items-center justify-center">
        <div className="w-16 h-16 border-2 border-gray-300 dark:border-gray-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full h-full" style={{ background: getBackgroundColor() }}>
      {dimensions.width > 0 && dimensions.height > 0 && (
        <GlobeComponent
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          globeImageUrl={getGlobeImage()}
          bumpImageUrl={TEXTURES.bump}
          backgroundImageUrl=""
          backgroundColor="rgba(0,0,0,0)"
          atmosphereColor={timeOfDay === "night" ? "#4488ff" : "#88ccff"}
          atmosphereAltitude={0.25}
          animateIn={true}
          // India polygon highlight
          polygonsData={indiaGeoJson || []}
          polygonCapColor={() => getHighlightColor()}
          polygonSideColor={() => "rgba(255, 107, 53, 0.3)"}
          polygonStrokeColor={() => "#ff6b35"}
          polygonAltitude={0.01}
          // Animated rings around India
          ringsData={INDIA_RINGS}
          ringColor={() => (t: number) => `rgba(255, 107, 53, ${1 - t})`}
          ringMaxRadius="maxR"
          ringPropagationSpeed="propagationSpeed"
          ringRepeatPeriod="repeatPeriod"
        />
      )}
    </div>
  );
}
