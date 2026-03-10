"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight, Check, Mail, Clock, Calendar } from "lucide-react";
import { useState } from "react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import { motion } from "framer-motion";

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

type FormErrors = { name?: string; email?: string; message?: string };

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

export default function JoinPage() {
  const [formData, setFormData] = useState({ name: "", email: "", organization: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const { isSubmitting, submitted, submit } = useFormSubmit("join");

  const validate = (data: typeof formData): FormErrors => {
    const e: FormErrors = {};
    if (!data.name.trim()) e.name = "Name is required";
    if (!data.email.trim()) e.email = "Email is required";
    else if (!validateEmail(data.email)) e.email = "Enter a valid email address";
    return e;
  };

  const handleBlur = (field: string) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(formData));
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error while typing — only re-validate when they leave the field
    if (errors[field as keyof FormErrors]) {
      setErrors((e) => ({ ...e, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, message: true };
    setTouched(allTouched);
    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
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
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-10 px-3 py-1 border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-widest"
          >
            LP Collective
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="text-[#0a1128] mb-8 leading-[1.05]"
                style={{ fontSize: 'clamp(3rem, 7vw + 1rem, 9rem)', fontWeight: 200, letterSpacing: '-0.03em' }}
              >
                Join the<br />
                <span style={{ fontWeight: 500 }} className="text-[#ff6b5a]">LP Collective</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
                className="text-xl font-light text-gray-500 max-w-lg leading-relaxed"
              >
                A small, thoughtful community of investors backing India&apos;s edge founders — with full transparency, no management fees on initial deployment, and direct access to our deal flow.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-gray-200">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 + i * 0.08 }}
                  className="bg-white p-8"
                >
                  <div className="text-3xl font-mono font-medium text-[#0a1128] mb-1">{s.value}</div>
                  <div className="text-xs font-medium text-gray-600 mb-0.5">{s.label}</div>
                  <div className="text-xs font-light text-gray-400">{s.note}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute bottom-10 left-6 lg:left-12 flex items-center gap-2 text-xs font-light text-gray-300"
          >
            <div className="w-px h-8 bg-gray-200" />
            Scroll to explore
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 lg:px-12 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
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
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <FadeIn key={benefit.title} delay={i * 0.12}>
                <div className="bg-white p-8 border border-gray-100 h-full">
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
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="interest" className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Get Started</p>
              <h2
                className="text-[#0a1128] mb-6 leading-[1.15]"
                style={{ fontSize: 'clamp(1.8rem, 3vw + 0.5rem, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}
              >
                Express your<br />
                <span style={{ fontWeight: 500 }}>interest</span>
              </h2>
              <p className="text-base font-light text-gray-500 leading-relaxed mb-8">
                Fill in the form and we&apos;ll be in touch within 48 hours to schedule a conversation about how you can participate in the LP Collective.
              </p>
              <div className="border-l-4 border-[#0d9488] pl-5">
                <p className="text-sm font-light text-gray-600 leading-relaxed">
                  InnoSphere targets <span className="font-medium text-[#0a1128]">3x DPI</span> — the institutional benchmark for top-decile venture returns. Our 100-company portfolio model is engineered to maximize the probability of capturing power-law outliers.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#f9fafb] border border-gray-100 p-12"
                >
                  <div className="flex flex-col items-center text-center mb-10">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="w-16 h-16 rounded-full bg-[#0d9488]/10 flex items-center justify-center mb-6"
                    >
                      <Check className="w-7 h-7 text-[#0d9488]" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-2xl font-light text-[#0a1128] mb-2"
                    >
                      We&apos;ll be in touch
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.28 }}
                      className="text-sm font-light text-gray-500 max-w-xs leading-relaxed"
                    >
                      Your interest has been received. A member of our team will reach out shortly.
                    </motion.p>
                  </div>

                  <div className="space-y-px bg-gray-200">
                    {[
                      { icon: Mail, label: "Confirmation", text: "Check your inbox for a confirmation email" },
                      { icon: Clock, label: "Response time", text: "We respond within 48 business hours" },
                      { icon: Calendar, label: "Next step", text: "A short call to discuss your participation" },
                    ].map(({ icon: Icon, label, text }, i) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45, delay: 0.35 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-white px-6 py-4 flex items-center gap-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#0a1128]/5 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-3.5 h-3.5 text-[#0a1128]" />
                        </div>
                        <div>
                          <div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-0.5">{label}</div>
                          <div className="text-sm font-light text-[#0a1128]">{text}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        className={`w-full px-4 py-3 border text-sm font-light text-[#0a1128] placeholder-gray-300 focus:outline-none transition-colors ${touched.name && errors.name ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-[#0a1128]"}`}
                        placeholder="Your name"
                      />
                      {touched.name && errors.name && (
                        <p className="mt-1.5 text-xs text-red-500 font-light">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Email *</label>
                      <input
                        type="text"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        className={`w-full px-4 py-3 border text-sm font-light text-[#0a1128] placeholder-gray-300 focus:outline-none transition-colors ${touched.email && errors.email ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-[#0a1128]"}`}
                        placeholder="your@email.com"
                      />
                      {touched.email && errors.email && (
                        <p className="mt-1.5 text-xs text-red-500 font-light">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Organisation</label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => handleChange("organization", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 text-sm font-light text-[#0a1128] placeholder-gray-300 focus:outline-none focus:border-[#0a1128] transition-colors"
                      placeholder="Company or fund (optional)"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
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
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
