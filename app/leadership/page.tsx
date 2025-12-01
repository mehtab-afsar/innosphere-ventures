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
    role: "Chief Executive Officer",
    bio: "Roman brings decades of experience in venture capital and deep-tech investing. His vision drives InnoSphere's mission to back India's most ambitious founders at the frontier of innovation.",
    linkedin: "#",
    twitter: "#",
    email: "roman@innosphereventures.com",
  },
  {
    name: "Joselyn McArthur",
    role: "Co-Founder",
    bio: "Joselyn brings strategic expertise and a deep understanding of emerging markets. Her leadership helps shape InnoSphere's approach to identifying and nurturing breakthrough companies.",
    linkedin: "#",
    twitter: "#",
    email: "joselyn@innosphereventures.com",
  },
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 mb-8 group absolute left-6 lg:left-12 top-28">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-extralight text-sm">Back</span>
          </Link>
          <Badge className="mb-6 font-light bg-white text-black border-white hover:bg-white/90">
            Leadership
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extralight mb-8 text-white">
            The people behind
            <br />
            <span className="font-light">the vision</span>
          </h1>
          <p className="text-xl font-extralight text-white/60 max-w-4xl">
            Our leadership team combines deep expertise in venture capital, technology, and entrepreneurship to identify and support the next generation of transformative companies.
          </p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="glass-card p-8 lg:p-10 group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-white/10">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Profile Image Placeholder */}
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center shrink-0">
                    <span className="text-4xl font-extralight text-white/40">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-3xl font-light text-white mb-2">{leader.name}</h2>
                    <p className="text-lg font-extralight text-white/60 mb-4">{leader.role}</p>
                    <p className="font-extralight text-white/50 leading-relaxed mb-6">
                      {leader.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-4">
                      <a href={leader.linkedin} className="p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <Linkedin className="w-5 h-5 text-white/60 hover:text-white" strokeWidth={1.5} />
                      </a>
                      <a href={leader.twitter} className="p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <Twitter className="w-5 h-5 text-white/60 hover:text-white" strokeWidth={1.5} />
                      </a>
                      <a href={`mailto:${leader.email}`} className="p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <Mail className="w-5 h-5 text-white/60 hover:text-white" strokeWidth={1.5} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-12 lg:p-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-extralight mb-6 text-white">
              Our <span className="font-light">Mission</span>
            </h2>
            <p className="text-xl lg:text-2xl font-extralight text-white/60 max-w-3xl mx-auto leading-relaxed">
              "To be the catalyst for India's most ambitious founders — providing not just capital, but conviction, connection, and the courage to build at the frontier."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-extralight mb-6 text-white">
            Want to <span className="font-light">connect?</span>
          </h2>
          <p className="text-xl font-extralight text-white/60 mb-8 max-w-2xl mx-auto">
            We're always looking to meet exceptional founders and partners who share our vision for India's innovation future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 font-light text-base group transition-all duration-300 hover:scale-105">
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white font-light text-base hover:bg-white/10 transition-all duration-300 hover:border-white/50" asChild>
              <Link href="/thesis">Read Our Thesis</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
