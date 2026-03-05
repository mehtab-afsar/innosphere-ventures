"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const companies = [
  {
    id: "cluix",
    name: "Cluix",
    sector: "Water & Smart Cities",
    stage: "Seed",
    location: "India",
    tagline: "Digital Water Governance Infrastructure",
    thesis: "\"The Stripe of Water Governance\"",
    thesisColor: "#0d9488",
    description: "Cluix is building the digital infrastructure layer for municipal water governance — enabling smart monitoring, data-driven management, and scalable public-sector deployment.",
    rationale: [
      "Only ~30% of municipal wastewater is treated",
      "Urban drinking water access remains inconsistent",
      "Limited digitization of public water infrastructure",
      "Public procurement ecosystem seeking scalable smart-infrastructure solutions"
    ],
    tags: ["CleanTech", "SaaS", "B2G"]
  },
  {
    id: "gocarin",
    name: "Gocarin",
    sector: "Agricultural Productivity",
    stage: "Seed",
    location: "India",
    tagline: "Sustainable Livestock Feed Systems",
    thesis: "\"The Coca-Cola of Ag-Tech\"",
    thesisColor: "#84cc16",
    description: "Gocarin is digitizing and transforming India's livestock feed supply chain, delivering sustainable, productivity-enhancing feed solutions directly to 70M+ dairy farmers.",
    rationale: [
      "Dairy productivity ~20% of international benchmarks",
      "High import dependency for quality feed inputs",
      "Strong policy incentives for domestic feed production",
      "Direct digital distribution to 70M+ dairy farmers"
    ],
    tags: ["AgriTech", "Supply Chain", "D2F"]
  },
  {
    id: "dashagriv",
    name: "Dashagriv",
    sector: "Aerospace & Logistics",
    stage: "Pre-Seed",
    location: "India",
    tagline: "Airship-Based Logistics Platforms",
    thesis: "\"The SpaceX for the Stratosphere\"",
    thesisColor: "#6366f1",
    description: "Dashagriv is building India's first High-Altitude Platform System (HAPS) — stratospheric payload services for telecom, defense, and space infrastructure.",
    rationale: [
      "India's first High-Altitude Platform System (HAPS)",
      "Stratospheric payload services for telecom, defense, and space",
      "Dual-use capability aligned with sovereign communications",
      "Monitoring and ISR applications at the stratospheric layer"
    ],
    tags: ["DeepTech", "Aerospace", "Defense"]
  }
];

export default function PortfolioPage() {
  const [activeCompany, setActiveCompany] = useState<string | null>(null);

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero - Full Page */}
      <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#0a1128 1px, transparent 1px), linear-gradient(90deg, #0a1128 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-7xl mx-auto w-full pt-24 pb-16">
          <div className="inline-flex items-center gap-2 mb-10 px-3 py-1 border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-widest">
            Portfolio
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
            <div>
              <h1
                className="text-[#0a1128] mb-8 leading-[1.05]"
                style={{ fontSize: 'clamp(3rem, 7vw + 1rem, 9rem)', fontWeight: 200, letterSpacing: '-0.03em' }}
              >
                Select investment<br />
                <span style={{ fontWeight: 500 }} className="text-[#ff6b5a]">cases</span>
              </h1>
              <p className="text-xl font-light text-gray-500 max-w-xl leading-relaxed">
                Our thesis is aligned with India's structural capability expansion — investing at the intersection of deep tech, industrial transformation, and long-term demand.
              </p>
            </div>

            {/* Company previews on the right */}
            <div className="space-y-3">
              {[
                { name: "Cluix", sector: "Water & Smart Cities", color: "#0d9488" },
                { name: "Gocarin", sector: "Agricultural Productivity", color: "#84cc16" },
                { name: "Dashagriv", sector: "Aerospace & Logistics", color: "#6366f1" },
              ].map((c, i) => (
                <div key={c.name} className="flex items-center justify-between p-5 border border-gray-100 bg-[#f9fafb]">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-gray-300">0{i + 1}</span>
                    <span className="text-base font-medium text-[#0a1128]">{c.name}</span>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wide" style={{ color: c.color }}>{c.sector}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-10 left-6 lg:left-12 flex items-center gap-2 text-xs font-light text-gray-300">
            <div className="w-px h-8 bg-gray-200" />
            Scroll to explore
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-0 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto divide-y divide-gray-100">
          {companies.map((company, i) => (
            <div
              key={company.id}
              className="py-12 cursor-pointer group"
              onClick={() => setActiveCompany(activeCompany === company.id ? null : company.id)}
            >
              <div className="grid lg:grid-cols-12 gap-6 items-start">
                <div className="hidden lg:block col-span-1">
                  <span className="text-xs font-mono text-gray-300">0{i + 1}</span>
                </div>
                <div className="lg:col-span-4">
                  <h2 className="text-2xl font-medium text-[#0a1128] mb-2 group-hover:text-[#ff6b5a] transition-colors duration-200">
                    {company.name}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {company.tags.map((tag) => (
                      <span key={tag} className="text-xs font-light text-gray-400 border border-gray-200 px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs font-light text-gray-400">{company.stage} · {company.location}</div>
                </div>
                <div className="lg:col-span-4">
                  <div className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: company.thesisColor }}>
                    {company.sector}
                  </div>
                  <p className="text-base font-light text-[#0a1128] leading-snug">{company.tagline}</p>
                  <p className="text-sm font-light text-gray-400 mt-2 italic">{company.thesis}</p>
                </div>
                <div className="lg:col-span-3 flex items-center justify-end">
                  <span className={`text-xs font-medium flex items-center gap-1 transition-colors ${activeCompany === company.id ? 'text-[#ff6b5a]' : 'text-gray-400 group-hover:text-[#0a1128]'}`}>
                    {activeCompany === company.id ? 'Close' : 'View thesis'}
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${activeCompany === company.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </span>
                </div>
              </div>

              {activeCompany === company.id && (
                <div className="mt-8 pt-8 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="grid lg:grid-cols-2 gap-10">
                    <div>
                      <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Overview</p>
                      <p className="text-base font-light text-gray-600 leading-relaxed">{company.description}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Investment Rationale</p>
                      <ul className="space-y-3">
                        {company.rationale.map((point, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="text-[#ff6b5a] mt-0.5 flex-shrink-0">•</span>
                            <span className="text-sm font-light text-gray-600">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <span className="text-sm font-medium text-[#0a1128] italic">{company.thesis}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Pipeline */}
      <section className="py-20 px-6 lg:px-12 bg-[#f9fafb] border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Pipeline</p>
              <h2
                className="text-[#0a1128] mb-6 leading-[1.15]"
                style={{ fontSize: 'clamp(1.8rem, 3vw + 0.5rem, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}
              >
                18+ companies<br />
                <span style={{ fontWeight: 500 }}>actively tracked</span>
              </h2>
              <p className="text-base font-light text-gray-500 leading-relaxed mb-8">
                Beyond our initial investments, we actively track deep tech founders across water, agriculture, energy, health, and aerospace verticals.
              </p>
              <Link
                href="/join"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#0a1128] hover:text-[#ff6b5a] transition-colors group"
              >
                Join as an LP and access deal flow
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Water & Smart Cities", "Agricultural Productivity", "Aerospace & Defense", "Healthcare & BioTech", "Clean Energy", "Industrial Tech"].map((sector) => (
                <div key={sector} className="bg-white border border-gray-100 p-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b5a] mb-3" />
                  <div className="text-xs font-medium text-[#0a1128]">{sector}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
