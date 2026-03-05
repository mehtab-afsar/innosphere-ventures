"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { useFormSubmit } from "@/hooks/useFormSubmit";

const benefits = [
  { title: "Early Access to Deals", description: "See opportunities before they're widely circulated. Co-invest alongside us in companies tracked through the Edge Alpha platform." },
  { title: "Portfolio Transparency", description: "Quarterly updates, founder introductions, and full visibility into portfolio performance — not just a capital relationship." },
  { title: "Research & Insights", description: "Access Edge Alpha's proprietary research on India's deep tech ecosystem, sector reports, and market analysis." },
  { title: "LP Community", description: "Connect with a curated network of investors, operators, and founders who share conviction on India's industrial transformation." },
];

const stats = [
  { value: "$20K", label: "Minimum Investment", note: "Entry-level participation" },
  { value: "0%", label: "Management Fees", note: "On initial deployment" },
  { value: "3x+", label: "Target Net TVPI", note: "Top-decile benchmark" },
  { value: "100", label: "Portfolio Target", note: "Diversified by design" },
];

export default function JoinPage() {
  const [formData, setFormData] = useState({ name: "", email: "", organization: "", message: "" });
  const { isSubmitting, submitted, submit } = useFormSubmit("join");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit(formData);
  };

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero - Full Page */}
      <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#0a1128 1px, transparent 1px), linear-gradient(90deg, #0a1128 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-7xl mx-auto w-full pt-24 pb-16">
          <div className="inline-flex items-center gap-2 mb-10 px-3 py-1 border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-widest">
            LP Collective
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h1
                className="text-[#0a1128] mb-8 leading-[1.05]"
                style={{ fontSize: 'clamp(3rem, 7vw + 1rem, 9rem)', fontWeight: 200, letterSpacing: '-0.03em' }}
              >
                Join the<br />
                <span style={{ fontWeight: 500 }} className="text-[#ff6b5a]">LP Collective</span>
              </h1>
              <p className="text-xl font-light text-gray-500 max-w-lg leading-relaxed">
                A small, thoughtful community of investors backing India's edge founders — with full transparency, no management fees on initial deployment, and direct access to our deal flow.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-gray-200">
              {stats.map((s) => (
                <div key={s.label} className="bg-white p-8">
                  <div className="text-3xl font-mono font-medium text-[#0a1128] mb-1">{s.value}</div>
                  <div className="text-xs font-medium text-gray-600 mb-0.5">{s.label}</div>
                  <div className="text-xs font-light text-gray-400">{s.note}</div>
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

      {/* Benefits */}
      <section className="py-20 px-6 lg:px-12 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">What You Get</p>
            <h2
              className="text-[#0a1128] leading-[1.15]"
              style={{ fontSize: 'clamp(1.8rem, 3vw + 0.5rem, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}
            >
              More than capital.<br />
              <span style={{ fontWeight: 500 }}>A front row seat.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div key={benefit.title} className="bg-white p-8 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#ff6b5a]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#ff6b5a]" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-[#0a1128] mb-2">{benefit.title}</h3>
                    <p className="text-sm font-light text-gray-500 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Get Started</p>
              <h2
                className="text-[#0a1128] mb-6 leading-[1.15]"
                style={{ fontSize: 'clamp(1.8rem, 3vw + 0.5rem, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}
              >
                Express your<br />
                <span style={{ fontWeight: 500 }}>interest</span>
              </h2>
              <p className="text-base font-light text-gray-500 leading-relaxed mb-8">
                Fill in the form and we'll be in touch within 48 hours to schedule a conversation about how you can participate in the LP Collective.
              </p>
              <div className="border-l-4 border-[#0d9488] pl-5">
                <p className="text-sm font-light text-gray-600 leading-relaxed">
                  InnoSphere targets <span className="font-medium text-[#0a1128]">3x DPI</span> — the institutional benchmark for top-decile venture returns. Our 100-company portfolio model is engineered to maximize the probability of capturing power-law outliers.
                </p>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="bg-[#f9fafb] border border-gray-100 p-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#0d9488]/10 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-[#0d9488]" />
                  </div>
                  <h3 className="text-xl font-medium text-[#0a1128] mb-2">We'll be in touch</h3>
                  <p className="text-sm font-light text-gray-500">Thank you for your interest. Expect to hear from us within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 text-sm font-light text-[#0a1128] placeholder-gray-300 focus:outline-none focus:border-[#0a1128] transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 text-sm font-light text-[#0a1128] placeholder-gray-300 focus:outline-none focus:border-[#0a1128] transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Organisation</label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 text-sm font-light text-[#0a1128] placeholder-gray-300 focus:outline-none focus:border-[#0a1128] transition-colors"
                      placeholder="Company or fund (optional)"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 text-sm font-light text-[#0a1128] placeholder-gray-300 focus:outline-none focus:border-[#0a1128] transition-colors resize-none"
                      placeholder="Tell us about your investment interest and background..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0a1128] text-white text-sm font-medium hover:bg-[#0a1128]/90 transition-colors disabled:opacity-60 group"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Interest"}
                    {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </button>
                  <p className="text-xs font-light text-gray-400 text-center">
                    We review all applications personally. Minimum commitment: $20,000.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
