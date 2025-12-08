"use client";

import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const leaders = [
  {
    name: "Roman Gaus",
    role: "Founding Partner, InnoSphere Ventures",
    bio: "Roman brings decades of experience in venture capital, entrepreneurship, and ecosystem building. His work has spanned technology, design and innovation, capital markets, and corporate strategy, giving him a unique perspective on how breakthrough companies emerge from humble beginnings to global reach.",
    bio2: "His vision drives InnoSphere's mission to back India's most ambitious founders and to build the ecosystems where transformational companies can thrive.",
    image: "/InnoSphere Website VISUAL IDENTITY (1).png",
    linkedin: "https://www.linkedin.com/company/innosphere-vc/",
    twitter: "#",
    email: "roman@innosphereventures.com",
  },
  {
    name: "Jocelyn McArthur",
    role: "Chair, InnoSphere Ventures",
    bio: "Jocelyn brings strategic expertise across both for-profit and non-profit enterprises, shaping leadership and strategy as a CEO and Board Member in the education sector. She has served as a Social Impact Leader in Residence at the Harvard Kennedy School and is a Fellow of Harvard's Advanced Leadership Initiative.",
    bio2: "She has led organizations from early traction to global reach, consistently building environments where innovation can take root and scale.",
    image: "/InnoSphere Website VISUAL IDENTITY.png",
    linkedin: "https://www.linkedin.com/company/innosphere-vc/",
    twitter: "#",
    email: "jocelyn@innosphereventures.com",
  },
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-8 group absolute left-6 lg:left-12 top-28">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-extralight text-sm">Back</span>
          </Link>
          <Badge className="mb-6 font-light bg-black dark:bg-white text-white dark:text-black border-black dark:border-white hover:bg-black/90 dark:hover:bg-white/90">
            Leadership
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extralight mb-8 text-gray-900 dark:text-white">
            The <span className="font-light bg-gradient-to-r from-cyan-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">Visionaries</span> and Their <span className="font-light bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">Vision</span>
          </h1>
        </div>
      </section>

      {/* Vision Quote */}
      <section className="py-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl lg:text-3xl font-extralight text-gray-700 dark:text-white/80 leading-relaxed italic max-w-4xl mx-auto">
            "To be the catalyst for India's most ambitious founders — providing not just <span className="highlight-word">capital</span>, but <span className="highlight-word">conviction</span>, <span className="highlight-word">connection</span>, and the <span className="highlight-word">courage</span> to build at the frontier."
          </p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="glass-card p-8 lg:p-10 group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200 dark:hover:shadow-white/10">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Profile Image */}
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-100 dark:bg-white/10 rounded-2xl border border-gray-200 dark:border-white/20 overflow-hidden shrink-0 mx-auto md:mx-0">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-[102%] h-[102%] object-cover object-center -ml-[1%] -mt-[1%]"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-2">{leader.name}</h2>
                    <p className="text-lg font-extralight text-gray-600 dark:text-white/60 mb-4">{leader.role}</p>
                    <p className="font-extralight text-gray-500 dark:text-white/50 leading-relaxed mb-3">
                      {leader.bio}
                    </p>
                    <p className="font-extralight text-gray-500 dark:text-white/50 leading-relaxed mb-6">
                      {leader.bio2}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-4">
                      <a href={leader.linkedin} className="p-2 bg-gray-100 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300">
                        <Linkedin className="w-5 h-5 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white" strokeWidth={1.5} />
                      </a>
                      <a href={leader.twitter} className="p-2 bg-gray-100 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300">
                        <Twitter className="w-5 h-5 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white" strokeWidth={1.5} />
                      </a>
                      <a href={`mailto:${leader.email}`} className="p-2 bg-gray-100 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300">
                        <Mail className="w-5 h-5 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white" strokeWidth={1.5} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-10 lg:p-14 relative overflow-hidden">
            {/* Decorative gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-rose-500"></div>

            <p className="text-xl lg:text-2xl font-extralight text-gray-700 dark:text-white/80 leading-relaxed text-center">
              Roman and Jocelyn first connected while collaborating on innovation and leadership studies at <span className="font-light text-gray-900 dark:text-white">Harvard</span>. They shared a conviction that the future of venture would be built through <span className="font-light text-gray-900 dark:text-white">ecosystems</span>, not unicorn-chasing — a belief that led to the creation of <span className="font-light text-gray-900 dark:text-white">InnoSphere</span> and its mission to back founders shaping India's next frontier.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-extralight mb-6 text-gray-900 dark:text-white">
            Want to <span className="font-light">connect?</span>
          </h2>
          <p className="text-xl font-extralight text-gray-600 dark:text-white/60 mb-8 max-w-2xl mx-auto">
            We're always looking to meet exceptional founders and partners who share our vision for India's innovation future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 font-light text-base group transition-all duration-300 hover:scale-105" asChild>
              <Link href="/join">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 dark:border-white/30 text-gray-900 dark:text-white font-light text-base hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 hover:border-gray-400 dark:hover:border-white/50" asChild>
              <Link href="/thesis">Read Our Thesis</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
