"use client";

import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Heart, Battery, TestTube, Droplets, Leaf, Target, Lightbulb, Shield, Users, ArrowLeft, TrendingUp } from "lucide-react";
import Link from "next/link";

const signalDimensions = [
  { icon: Target, label: "Market Readiness" },
  { icon: TrendingUp, label: "Market Potential" },
  { icon: Lightbulb, label: "Innovation & Technology Depth" },
  { icon: Shield, label: "IP Defensibility & Systemic Impact" },
  { icon: Users, label: "Team Strength & Execution Capacity" },
];

const companies = [
  {
    icon: Heart,
    name: "Inochi Care",
    tagline: "On a mission to make advanced wound care as common as a bandage.",
  },
  {
    icon: Droplets,
    name: "Cluix",
    tagline: "Building the Stripe of water governance.",
  },
  {
    icon: TestTube,
    name: "Pragmatech",
    tagline: "Making cervical cancer screening as accessible as a pregnancy test.",
  },
  {
    icon: Battery,
    name: "Meine Electric",
    tagline: "Building the Duracell of India's clean energy future.",
  },
  {
    icon: Leaf,
    name: "Gocarin Industries",
    tagline: "Becoming the Coca-Cola of sustainable livestock feed.",
  },
];

export default function SignalsPage() {
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
            Signals
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extralight mb-8 text-white">
            The Edge Alpha
            <br />
            <span className="font-light">Company Universe</span>
          </h1>
          <p className="text-xl font-extralight text-white/60 max-w-4xl mb-8">
            Our portfolio begins long before we invest. Using the Edge Alpha scoring engine, we map India's frontier innovation universe, surface high-signal founders, and identify companies with systemic potential.
          </p>
          <p className="text-lg font-extralight text-white/50 max-w-4xl">
            From hundreds of startups screened across deep-tech and frontier sectors, only a select few enter the Edge Alpha Compendium — and an even smaller group becomes an investment.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-12 text-center">
            <p className="text-4xl lg:text-5xl font-light text-white mb-4">
              From <span className="text-white/60">220+</span> screened → <span className="font-normal">5</span> flagship investments
            </p>
          </div>
        </div>
      </section>

      {/* Edge Alpha Signals Explanation */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-extralight mb-6 text-white">
              Edge Alpha <span className="font-light">Signals</span>
            </h2>
            <p className="text-xl font-extralight text-white/60 max-w-3xl mb-8">
              The Edge Alpha scoring model separates signal from noise.
            </p>
            <p className="text-lg font-extralight text-white/50 max-w-3xl">
              We evaluate every company across five systemic signal dimensions. These signals reveal breakthrough companies early — before traction becomes obvious. Only the highest-signal companies progress into the investment zone.
            </p>
          </div>

          {/* Signal Dimensions */}
          <div className="grid md:grid-cols-5 gap-4">
            {signalDimensions.map((dimension, index) => {
              const Icon = dimension.icon;
              return (
                <div key={index} className="glass-card p-6 text-center group hover:scale-[1.02] transition-all duration-300">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 w-fit mx-auto mb-4 group-hover:bg-white/10 transition-all duration-300">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-light text-white/80">{dimension.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Edge Alpha Companies */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-extralight mb-6 text-white">
              Edge Alpha <span className="font-light">Companies</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => {
              const Icon = company.icon;
              return (
                <div key={index} className="glass-card p-8 group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-white/10">
                  <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    <Icon className="w-12 h-12 text-white" strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">{company.name}</h3>
                  <p className="text-base font-extralight text-white/50 leading-relaxed">
                    {company.tagline}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
