"use client";

import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

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
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-8 group absolute left-6 lg:left-12 top-28">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-extralight text-sm">Back</span>
          </Link>
          <Badge className="mb-6 font-light bg-black dark:bg-white text-white dark:text-black border-black dark:border-white hover:bg-black/90 dark:hover:bg-white/90">
            Gallery
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extralight mb-8 text-gray-900 dark:text-white">
            Moments that
            <br />
            <span className="font-light">define us</span>
          </h1>
          <p className="text-xl font-extralight text-gray-600 dark:text-white/60 max-w-4xl">
            A visual journey through our events, partnerships, and the community we're building together.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="glass-card group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200 dark:hover:shadow-white/10 overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-gray-100 dark:bg-white/5 flex items-center justify-center border-b border-gray-200 dark:border-white/10">
                  <span className="text-6xl font-extralight text-gray-300 dark:text-white/20">
                    {index + 1}
                  </span>
                </div>

                <div className="p-6">
                  <Badge className="mb-3 font-light bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/80 border-gray-200 dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20 text-xs">
                    {image.category}
                  </Badge>
                  <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">{image.title}</h3>
                  <p className="font-extralight text-gray-500 dark:text-white/50 text-sm">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-6 lg:px-12">
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
