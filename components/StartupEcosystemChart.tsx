"use client";

import { useEffect, useRef, useState } from "react";

// Data based on Indian Unicorn Startups growth
const chartData = [
  { year: "2011", unicorns: 4, funding: 20, deals: 400 },
  { year: "2012", unicorns: 7, funding: 25, deals: 600 },
  { year: "2013", unicorns: 10, funding: 30, deals: 900 },
  { year: "2014", unicorns: 12, funding: 35, deals: 1200 },
  { year: "2015", unicorns: 13, funding: 45, deals: 1800 },
  { year: "2016", unicorns: 15, funding: 40, deals: 2000 },
  { year: "2017", unicorns: 20, funding: 55, deals: 2800 },
  { year: "2018", unicorns: 43, funding: 75, deals: 3600 },
  { year: "2019", unicorns: 88, funding: 100, deals: 4800 },
  { year: "2020", unicorns: 110, funding: 120, deals: 6000 },
  { year: "2021", unicorns: 112, funding: 150, deals: 8000 },
  { year: "2022", unicorns: 119, funding: 170, deals: 9500 },
  { year: "2023", unicorns: 130, funding: 185, deals: 10500 },
  { year: "2024", unicorns: 130, funding: 200, deals: 12000 },
];

export function StartupEcosystemChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && animationProgress < 1) {
      const timer = setTimeout(() => {
        setAnimationProgress((prev) => Math.min(prev + 0.02, 1));
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [isVisible, animationProgress]);

  const maxUnicorns = Math.max(...chartData.map((d) => d.unicorns));
  const maxFunding = Math.max(...chartData.map((d) => d.funding));
  const maxDeals = Math.max(...chartData.map((d) => d.deals));

  // Chart dimensions
  const chartWidth = 100;
  const chartHeight = 55;
  const barWidth = 5;
  const gap = (chartWidth - barWidth * chartData.length) / (chartData.length + 1);

  // Generate funding line path
  const fundingPath = chartData
    .map((d, i) => {
      const x = gap + i * (barWidth + gap) + barWidth / 2;
      const y = chartHeight - (d.funding / maxFunding) * chartHeight * 0.85;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  // Generate deals points
  const dealPoints = chartData.map((d, i) => {
    const x = gap + i * (barWidth + gap) + barWidth / 2;
    const y = chartHeight - (d.deals / maxDeals) * chartHeight * 0.75;
    return { x, y, deals: d.deals };
  });

  return (
    <div ref={chartRef} className="w-full">
      {/* Main Title */}
      <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-3 text-center">
        USD 1tn Opportunity — When Innovation Becomes GDP
      </h3>
      <p className="text-sm md:text-base font-extralight text-gray-500 dark:text-white/50 mb-6 max-w-3xl mx-auto text-center">
        This USD 1tn isn't paper value — it's real GDP. It's the economic output created as technology scales across manufacturing, healthcare, finance, and services. Startups are simply the vehicles that carry innovation into the real economy.
      </p>

      {/* Two Charts Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Left Chart - Unicorn Bar Chart */}
        <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4 border border-gray-200 dark:border-white/10">
          <div className="mb-3">
            <span className="text-sm font-medium text-gray-700 dark:text-white/80">Indian Unicorn Startups</span>
          </div>
          <div className="relative w-full aspect-[1.6/1] min-h-[220px]">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight + 8}`}
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Bars */}
              {chartData.map((d, i) => {
                const x = gap + i * (barWidth + gap);
                const barHeight = (d.unicorns / maxUnicorns) * chartHeight * 0.8 * animationProgress;
                const y = chartHeight - barHeight;
                const isHovered = hoveredBar === i;

                return (
                  <g key={i}>
                    <defs>
                      <linearGradient id={`barGrad-${i}`} x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor={isHovered ? "#0d5f7f" : "#1a6f8f"} />
                        <stop offset="100%" stopColor={isHovered ? "#5ba4c9" : "#7affd4"} />
                      </linearGradient>
                    </defs>
                    {/* Hover area */}
                    <rect
                      x={x - 0.5}
                      y={0}
                      width={barWidth + 1}
                      height={chartHeight}
                      fill="transparent"
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredBar(i)}
                      onMouseLeave={() => setHoveredBar(null)}
                    />
                    <rect
                      x={x}
                      y={y}
                      width={barWidth}
                      height={barHeight}
                      fill={`url(#barGrad-${i})`}
                      rx="0.3"
                      className="transition-all duration-200"
                      style={{ filter: isHovered ? "brightness(1.1)" : "none" }}
                    />
                    {/* Value on top - always show on hover */}
                    {(animationProgress > 0.8 || isHovered) && (
                      <text
                        x={x + barWidth / 2}
                        y={y - 1.5}
                        textAnchor="middle"
                        className={`text-[2.8px] fill-gray-700 dark:fill-white/70 font-medium transition-opacity ${isHovered ? "opacity-100" : "opacity-70"}`}
                      >
                        {d.unicorns}
                      </text>
                    )}
                    {/* Year */}
                    <text
                      x={x + barWidth / 2}
                      y={chartHeight + 4}
                      textAnchor="middle"
                      className={`text-[2.2px] fill-gray-500 dark:fill-white/50 ${isHovered ? "font-medium" : ""}`}
                    >
                      {d.year.slice(2)}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Tooltip for bar chart */}
            {hoveredBar !== null && (
              <div
                className="absolute bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-2 rounded-lg text-xs shadow-lg pointer-events-none z-10"
                style={{
                  left: `${((hoveredBar + 0.5) / chartData.length) * 100}%`,
                  top: "10%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="font-medium">{chartData[hoveredBar].year}</div>
                <div className="text-white/70 dark:text-gray-600">{chartData[hoveredBar].unicorns} unicorns</div>
              </div>
            )}
          </div>
        </div>

        {/* Right Chart - Funding & Deals Line Chart */}
        <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4 border border-gray-200 dark:border-white/10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-0.5 bg-[#5ba4c9]"></div>
                <span className="text-gray-600 dark:text-white/60">Funding (USD bn)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-[#7affd4] rounded-full"></div>
                <span className="text-gray-600 dark:text-white/60">Deals</span>
              </div>
            </div>
          </div>
          <div className="relative w-full aspect-[1.6/1] min-h-[220px]">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight + 8}`}
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Grid lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
                <line
                  key={i}
                  x1="0"
                  y1={chartHeight - ratio * chartHeight * 0.85}
                  x2={chartWidth}
                  y2={chartHeight - ratio * chartHeight * 0.85}
                  stroke="currentColor"
                  strokeWidth="0.1"
                  className="text-gray-300 dark:text-white/10"
                />
              ))}

              {/* Funding line */}
              <path
                d={fundingPath}
                fill="none"
                stroke="#5ba4c9"
                strokeWidth="0.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={200}
                strokeDashoffset={200 - animationProgress * 200}
                className="transition-all duration-500"
              />

              {/* Deal count dots with hover areas */}
              {dealPoints.map((point, i) => {
                const isHovered = hoveredPoint === i;
                return (
                  <g key={i}>
                    {/* Larger hover area */}
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={4}
                      fill="transparent"
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredPoint(i)}
                      onMouseLeave={() => setHoveredPoint(null)}
                    />
                    {/* Visible dot */}
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={isHovered ? 1.5 : (animationProgress > 0.3 ? 1 : 0)}
                      fill="#7affd4"
                      className="transition-all duration-200"
                    />
                    {/* Hover ring */}
                    {isHovered && (
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r={2.5}
                        fill="none"
                        stroke="#7affd4"
                        strokeWidth="0.3"
                        opacity={0.5}
                      />
                    )}
                  </g>
                );
              })}

              {/* Year labels */}
              {chartData.map((d, i) => {
                const x = gap + i * (barWidth + gap) + barWidth / 2;
                const isHovered = hoveredPoint === i;
                return (
                  <text
                    key={i}
                    x={x}
                    y={chartHeight + 4}
                    textAnchor="middle"
                    className={`text-[2.2px] fill-gray-500 dark:fill-white/50 ${isHovered ? "font-medium" : ""}`}
                  >
                    {d.year.slice(2)}
                  </text>
                );
              })}
            </svg>

            {/* Tooltip for line chart */}
            {hoveredPoint !== null && (
              <div
                className="absolute bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-2 rounded-lg text-xs shadow-lg pointer-events-none z-10"
                style={{
                  left: `${((hoveredPoint + 0.5) / chartData.length) * 100}%`,
                  top: "10%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="font-medium">{chartData[hoveredPoint].year}</div>
                <div className="text-[#5ba4c9]">${chartData[hoveredPoint].funding}bn funding</div>
                <div className="text-white/70 dark:text-gray-600">{chartData[hoveredPoint].deals.toLocaleString()} deals</div>
              </div>
            )}

            {/* Left Y-axis labels */}
            <div className="absolute left-1 top-2 bottom-6 flex flex-col justify-between text-[9px] text-[#5ba4c9] font-light">
              <span>200</span>
              <span>150</span>
              <span>100</span>
              <span>50</span>
              <span>0</span>
            </div>

            {/* Right Y-axis labels */}
            <div className="absolute right-1 top-2 bottom-6 flex flex-col justify-between text-[9px] text-[#7affd4] font-light">
              <span>12k</span>
              <span>9k</span>
              <span>6k</span>
              <span>3k</span>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats - Compact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Employment */}
        <div
          className="group relative"
          style={{
            opacity: animationProgress > 0.5 ? 1 : 0,
            transform: animationProgress > 0.5 ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
            transitionDelay: "300ms",
          }}
        >
          <div className="p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02] hover:bg-gray-100/50 dark:hover:bg-white/[0.04] transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gray-900 dark:bg-white flex items-center justify-center">
                <svg className="w-4 h-4 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium tracking-wide uppercase text-gray-400 dark:text-white/40">Employment</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extralight text-gray-900 dark:text-white">50mn</span>
              <span className="text-base text-gray-500 dark:text-white/50">by 2030</span>
            </div>
          </div>
        </div>

        {/* GDP */}
        <div
          className="group relative"
          style={{
            opacity: animationProgress > 0.5 ? 1 : 0,
            transform: animationProgress > 0.5 ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
            transitionDelay: "500ms",
          }}
        >
          <div className="p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02] hover:bg-gray-100/50 dark:hover:bg-white/[0.04] transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gray-900 dark:bg-white flex items-center justify-center">
                <svg className="w-4 h-4 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="text-sm font-medium tracking-wide uppercase text-gray-400 dark:text-white/40">GDP Impact</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extralight text-gray-900 dark:text-white">USD 1tn</span>
              <span className="text-base text-gray-500 dark:text-white/50">in economic value</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
