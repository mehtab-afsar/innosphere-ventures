"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const leaders = [
  {
    name: "Roman Gaus",
    role: "Founding Partner",
    bio: "Roman brings decades of experience in venture capital, entrepreneurship, and ecosystem building. His work has spanned technology, design and innovation, capital markets, and corporate strategy, giving him a unique perspective on how breakthrough companies emerge from humble beginnings to global reach.",
    bio2: "His vision drives InnoSphere's mission to back India's most ambitious founders and to build the ecosystems where transformational companies can thrive.",
    image: "/assets/images/branding/InnoSphere Website VISUAL IDENTITY (1).png",
    linkedin: "https://www.linkedin.com/company/innosphere-vc/",
    twitter: "#",
    email: "roman@innosphereventures.com",
  },
  {
    name: "Jocelyn McArthur",
    role: "Chair",
    bio: "Jocelyn brings strategic expertise across both for-profit and non-profit enterprises, shaping leadership and strategy as a CEO and Board Member in the education sector. She has served as a Social Impact Leader in Residence at the Harvard Kennedy School and is a Fellow of Harvard's Advanced Leadership Initiative.",
    bio2: "She has led organizations from early traction to global reach, consistently building environments where innovation can take root and scale.",
    image: "/assets/images/branding/InnoSphere Website VISUAL IDENTITY.png",
    linkedin: "https://www.linkedin.com/company/innosphere-vc/",
    twitter: "#",
    email: "jocelyn@innosphereventures.com",
  },
];

export default function LeadershipPage() {
  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero - Full Page */}
      <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#0a1128 1px, transparent 1px), linear-gradient(90deg, #0a1128 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-7xl mx-auto w-full pt-24 pb-16">
          <div className="inline-flex items-center gap-2 mb-10 px-3 py-1 border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-widest">
            Leadership
          </div>
          <h1
            className="text-[#0a1128] mb-8 leading-[1.05]"
            style={{ fontSize: 'clamp(3rem, 7vw + 1rem, 9rem)', fontWeight: 200, letterSpacing: '-0.03em' }}
          >
            The team<br />
            <span style={{ fontWeight: 500 }} className="text-[#ff6b5a]">behind the thesis</span>
          </h1>
          <p className="text-xl font-light text-gray-500 max-w-2xl leading-relaxed">
            "To be the catalyst for India's most ambitious founders — providing not just capital, but conviction, connection, and the courage to build at the frontier."
          </p>
          <div className="absolute bottom-10 left-6 lg:left-12 flex items-center gap-2 text-xs font-light text-gray-300">
            <div className="w-px h-8 bg-gray-200" />
            Scroll to explore
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-px bg-gray-200">
            {leaders.map((leader) => (
              <div key={leader.name} className="bg-white p-10 lg:p-14">
                {/* Photo */}
                <div className="w-48 h-48 bg-gray-100 overflow-hidden mb-8 border border-gray-100">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="mb-1 text-xs font-medium text-[#ff6b5a] uppercase tracking-widest">{leader.role}</div>
                <h2 className="text-2xl font-medium text-[#0a1128] mb-6">{leader.name}</h2>

                <p className="text-base font-light text-gray-500 leading-relaxed mb-4">{leader.bio}</p>
                <p className="text-base font-light text-gray-500 leading-relaxed mb-8">{leader.bio2}</p>

                <div className="flex items-center gap-3">
                  <a href={leader.linkedin} target="_blank" rel="noopener noreferrer"
                    className="p-2 border border-gray-200 text-gray-400 hover:text-[#0a1128] hover:border-gray-400 transition-all duration-200">
                    <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                  <a href={leader.twitter} target="_blank" rel="noopener noreferrer"
                    className="p-2 border border-gray-200 text-gray-400 hover:text-[#0a1128] hover:border-gray-400 transition-all duration-200">
                    <Twitter className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                  <a href={`mailto:${leader.email}`}
                    className="p-2 border border-gray-200 text-gray-400 hover:text-[#0a1128] hover:border-gray-400 transition-all duration-200">
                    <Mail className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 px-6 lg:px-12 bg-[#f9fafb] border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-8 text-center">Origin Story</p>
          <div className="border-l-4 border-[#ff6b5a] pl-8">
            <p className="text-xl sm:text-2xl font-light text-[#0a1128] leading-relaxed">
              Roman and Jocelyn first connected while collaborating on innovation and leadership studies at{" "}
              <span className="font-medium text-[#ff6b5a]">Harvard</span>. They shared a conviction that the future of venture would be built through{" "}
              <span className="font-medium text-[#0d9488]">ecosystems</span>, not unicorn-chasing — a belief that led to the creation of{" "}
              <span className="font-medium text-[#0a1128]">InnoSphere</span> and its mission to back founders shaping India's next frontier.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery & Video Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-8">From the Field</p>

          {/* Main row: video left, 2×2 grid right — equal height via CSS grid */}
          <div className="grid lg:grid-cols-2 gap-3" style={{ gridAutoRows: '420px' }}>
            {/* Video */}
            <div className="relative overflow-hidden border border-gray-100 bg-gray-100">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              >
                <source src="/assets/videos/00 Everybody Dance Now Video.MOV" type="video/quicktime" />
                <source src="/assets/videos/00 Everybody Dance Now Video.MOV" type="video/mp4" />
              </video>
            </div>

            {/* 2×2 image mosaic */}
            <div className="grid grid-cols-2 grid-rows-2 gap-3">
              {[
                { src: "/gallery/00 innosphere sign.jpeg", alt: "InnoSphere sign" },
                { src: "/gallery/Group best.JPG", alt: "Team" },
                { src: "/gallery/00 fireside group small.JPG", alt: "Fireside session" },
                { src: "/gallery/Cluix.JPG", alt: "Cluix" },
              ].map(({ src, alt }) => (
                <div key={src} className="relative overflow-hidden border border-gray-100 bg-gray-100">
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    className="grayscale hover:grayscale-0 transition-[filter] duration-700"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom strip: 3 landscape images */}
          <div className="grid grid-cols-3 gap-3 mt-3" style={{ gridAutoRows: '200px' }}>
            {[
              { src: "/gallery/Pragmatech.JPG", alt: "Pragmatech" },
              { src: "/gallery/Inochi.JPG", alt: "Inochi" },
              { src: "/gallery/Gocarin.png", alt: "Gocarin" },
            ].map(({ src, alt }) => (
              <div key={src} className="relative overflow-hidden border border-gray-100 bg-gray-100">
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  className="grayscale hover:grayscale-0 transition-[filter] duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">Want to connect?</p>
            <h2 className="text-2xl sm:text-3xl font-light text-[#0a1128] mb-2">
              We're always looking to meet exceptional founders and partners.
            </h2>
            <p className="text-sm font-light text-gray-400">
              Share our vision for India's innovation future.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href="/join"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff6b5a] text-white text-sm font-medium hover:bg-[#ff6b5a]/90 transition-colors group">
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/approach"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-[#0a1128] text-sm font-light hover:border-gray-400 transition-colors">
              Read Our Thesis
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
