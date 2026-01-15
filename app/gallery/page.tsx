"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { OceanGradient } from "@/components/OceanGradient";
import { ArrowLeft, Play } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import Image from "next/image";

const galleryImages = [
  {
    title: "Inochi Care",
    description: "Advanced wound care innovation",
    category: "Portfolio",
    image: "/gallery/Inochi.JPG",
  },
  {
    title: "Pragmatech",
    description: "Making cervical cancer screening accessible",
    category: "Portfolio",
    image: "/gallery/Pragmatech.JPG",
  },
  {
    title: "Cluix",
    description: "Building the Stripe of water governance",
    category: "Portfolio",
    image: "/gallery/Cluix.JPG",
  },
  {
    title: "Gocarin Industries",
    description: "Becoming the Coca-Cola of sustainable livestock feed",
    category: "Portfolio",
    image: "/gallery/Gocarin.png",
  },
  {
    title: "Edge Alpha Day - Demo Day",
    description: "Showcasing breakthrough technologies",
    category: "Events",
    image: "/gallery/Group best.JPG",
  },
  {
    title: "Fire Chat",
    description: "Connecting visionaries across industries",
    category: "Events",
    image: "/gallery/00 fireside group small.JPG",
  },
];

export default function GalleryPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <OceanGradient variant="portfolio">
      <Navigation />

      {/* Hero Section with Portrait Video on Right */}
      <section className="pt-32 pb-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-extralight text-sm">Back</span>
          </Link>

          <div className="mb-8">
            <div className="inline-block mb-6 px-6 py-3 border-2 border-[#ff6b5a] rounded-none">
              <span className="text-lg font-medium text-[#ff6b5a] tracking-wide">Gallery</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight mb-4">
              <span className="text-[#0a1128]">Moments that</span>
              <span className="font-light text-[#2a9a8e]"> define us</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-extralight text-[#0a1128]/80 max-w-2xl">
              A visual journey through our events, partnerships, and the community we're building together.
            </p>
          </div>

          {/* Full Width Video */}
          <div className="glass-card p-3 md:p-4 lg:p-6 overflow-hidden group hover:shadow-2xl hover:shadow-gray-200 dark:hover:shadow-white/10 transition-all duration-500">
            {/* Video Container - Landscape */}
            <div className="relative rounded-xl overflow-hidden bg-black">
              <video
                ref={videoRef}
                src="/assets/videos/00 Everybody Dance Now Video.MOV"
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Play Button Overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 cursor-pointer ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
                onClick={handlePlayClick}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300">
                  <Play className={`w-6 h-6 md:w-8 md:h-8 text-white ${isPlaying ? 'hidden' : ''}`} fill="white" />
                  {isPlaying && (
                    <div className="flex gap-1">
                      <div className="w-1.5 h-6 bg-white rounded-sm" />
                      <div className="w-1.5 h-6 bg-white rounded-sm" />
                    </div>
                  )}
                </div>
              </div>

              {/* Video Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Bento Grid */}
      <section className="py-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extralight text-[#f5f5f0]">
              More <span className="font-light">Moments</span>
            </h2>
          </div>

          {/* Row 1: 4 smaller cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
            {galleryImages.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="glass-card group hover:scale-[1.02] transition-all duration-500 hover:shadow-xl hover:shadow-gray-200 dark:hover:shadow-white/10 overflow-hidden"
              >
                {/* Gallery Image */}
                <div className="aspect-square bg-gray-100 dark:bg-white/5 relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                <div className="p-4">
                  <span className="inline-block mb-2 px-2 py-1 font-light bg-white/10 text-[#f5f5f0]/80 border border-white/20 rounded text-xs">
                    {item.category}
                  </span>
                  <h3 className="text-sm md:text-base font-light text-[#f5f5f0] mb-1 line-clamp-1">{item.title}</h3>
                  <p className="font-extralight text-[#f5f5f0]/60 text-xs line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 2 larger cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {galleryImages.slice(4, 6).map((item, index) => (
              <div
                key={index + 4}
                className="glass-card group hover:scale-[1.01] transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200 dark:hover:shadow-white/10 overflow-hidden"
              >
                {/* Gallery Image */}
                <div className="aspect-[16/9] bg-gray-100 dark:bg-white/5 relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-block mb-3 px-2 py-1 font-light bg-white/10 text-[#f5f5f0]/80 border border-white/20 rounded text-xs">
                    {item.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-light text-[#f5f5f0] mb-2">{item.title}</h3>
                  <p className="font-extralight text-[#f5f5f0]/60 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </OceanGradient>
  );
}