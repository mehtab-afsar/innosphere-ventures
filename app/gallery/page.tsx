"use client";

import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowLeft, Play } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const galleryImages = [
  {
    title: "Startup Summit 2024",
    description: "Our annual gathering of founders and investors",
    category: "Events",
  },
  {
    title: "Portfolio Day",
    description: "Celebrating milestones with our portfolio companies",
    category: "Events",
  },
  {
    title: "Office Space",
    description: "Where innovation happens every day",
    category: "Office",
  },
  {
    title: "Team Retreat",
    description: "Building bonds beyond the boardroom",
    category: "Team",
  },
  {
    title: "Demo Day",
    description: "Showcasing breakthrough technologies",
    category: "Events",
  },
  {
    title: "Founder Meetup",
    description: "Connecting visionaries across industries",
    category: "Events",
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
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Navigation />

      {/* Hero Section with Portrait Video on Right */}
      <section className="pt-32 pb-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-extralight text-sm">Back</span>
          </Link>

          <div className="mb-8">
            <Badge className="mb-6 font-light bg-black dark:bg-white text-white dark:text-black border-black dark:border-white hover:bg-black/90 dark:hover:bg-white/90">
              Gallery
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-extralight mb-4 text-gray-900 dark:text-white">
              Moments that
              <span className="font-light"> define us</span>
            </h1>
            <p className="text-xl font-extralight text-gray-600 dark:text-white/60 max-w-2xl">
              A visual journey through our events, partnerships, and the community we're building together.
            </p>
          </div>

          {/* Full Width Video */}
          <div className="glass-card p-3 md:p-4 lg:p-6 overflow-hidden group hover:shadow-2xl hover:shadow-gray-200 dark:hover:shadow-white/10 transition-all duration-500">
            {/* Video Container - Landscape */}
            <div className="relative rounded-xl overflow-hidden bg-black">
              <video
                ref={videoRef}
                src="/00 Everybody Dance Now Video.MOV"
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
            <h2 className="text-3xl lg:text-4xl font-extralight text-gray-900 dark:text-white">
              More <span className="font-light">Moments</span>
            </h2>
          </div>

          {/* Row 1: 4 smaller cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
            {galleryImages.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className="glass-card group hover:scale-[1.02] transition-all duration-500 hover:shadow-xl hover:shadow-gray-200 dark:hover:shadow-white/10 overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className="aspect-square bg-gray-100 dark:bg-white/5 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-extralight text-gray-300 dark:text-white/20">
                    {index + 1}
                  </span>
                </div>

                <div className="p-4">
                  <Badge className="mb-2 font-light bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/80 border-gray-200 dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20 text-xs">
                    {image.category}
                  </Badge>
                  <h3 className="text-sm md:text-base font-light text-gray-900 dark:text-white mb-1 line-clamp-1">{image.title}</h3>
                  <p className="font-extralight text-gray-500 dark:text-white/50 text-xs line-clamp-2">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 2 larger cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {galleryImages.slice(4, 6).map((image, index) => (
              <div
                key={index + 4}
                className="glass-card group hover:scale-[1.01] transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200 dark:hover:shadow-white/10 overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className="aspect-[16/9] bg-gray-100 dark:bg-white/5 flex items-center justify-center">
                  <span className="text-6xl md:text-7xl font-extralight text-gray-300 dark:text-white/20">
                    {index + 5}
                  </span>
                </div>

                <div className="p-6">
                  <Badge className="mb-3 font-light bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/80 border-gray-200 dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20 text-xs">
                    {image.category}
                  </Badge>
                  <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-2">{image.title}</h3>
                  <p className="font-extralight text-gray-500 dark:text-white/50 text-sm md:text-base">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-12 lg:p-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-extralight mb-6 text-gray-900 dark:text-white">
              More <span className="font-light">coming soon</span>
            </h2>
            <p className="text-xl font-extralight text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
              We're constantly capturing moments from our journey. Check back for updates from our latest events and milestones.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
