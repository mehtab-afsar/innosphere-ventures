"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import type { JoinFormData } from "@/lib/supabase";

type MemberType = "founder" | "lp" | "partner" | "";

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    memberType: "" as MemberType,
    stage: "",
    sector: "",
    investmentInterest: "",
    message: "",
  });

  const { isSubmitting, submitted, submit } = useFormSubmit<JoinFormData>("join");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-8 group absolute left-6 lg:left-12 top-28"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-extralight text-sm">Back</span>
          </Link>
          <Badge className="mb-6 font-light bg-black dark:bg-white text-white dark:text-black border-black dark:border-white hover:bg-black/90 dark:hover:bg-white/90">
            Join the Movement
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extralight mb-6 text-gray-900 dark:text-white">
            Become Part of the{" "}
            <span className="font-light">InnoSphere Collective</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-extralight text-gray-600 dark:text-white/60 max-w-3xl">
            Join a network of visionary founders, investors, and partners shaping
            India's innovation frontier.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 lg:p-12">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  Thank You for Joining!
                </h2>
                <p className="font-extralight text-gray-600 dark:text-white/60 mb-8">
                  We've received your application to join the InnoSphere
                  Collective. Our team will review your details and reach out
                  soon.
                </p>
                <Button
                  variant="outline"
                  className="border-gray-300 dark:border-white/30 text-gray-900 dark:text-white font-light"
                  asChild
                >
                  <Link href="/">Return Home</Link>
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl lg:text-3xl font-light text-gray-900 dark:text-white mb-2">
                  Apply to Join
                </h2>
                <p className="font-extralight text-gray-600 dark:text-white/60 mb-8">
                  Tell us about yourself and how you'd like to be part of
                  India's innovation frontier.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2"
                    >
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="memberType"
                      className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2"
                    >
                      I am a... *
                    </label>
                    <select
                      id="memberType"
                      name="memberType"
                      required
                      value={formData.memberType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200"
                    >
                      <option value="" className="bg-white dark:bg-gray-900">
                        Select your role
                      </option>
                      <option value="founder" className="bg-white dark:bg-gray-900">
                        Founder / Entrepreneur
                      </option>
                      <option value="lp" className="bg-white dark:bg-gray-900">
                        Limited Partner (LP) / Investor
                      </option>
                      <option value="partner" className="bg-white dark:bg-gray-900">
                        Potential Partner / Advisor
                      </option>
                    </select>
                  </div>

                  {/* Conditional Fields for Founders */}
                  {formData.memberType === "founder" && (
                    <>
                      <div>
                        <label
                          htmlFor="stage"
                          className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2"
                        >
                          Stage
                        </label>
                        <select
                          id="stage"
                          name="stage"
                          value={formData.stage}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200"
                        >
                          <option value="" className="bg-white dark:bg-gray-900">
                            Select stage
                          </option>
                          <option value="pre-seed" className="bg-white dark:bg-gray-900">
                            Pre-seed
                          </option>
                          <option value="seed" className="bg-white dark:bg-gray-900">
                            Seed
                          </option>
                          <option value="series-a" className="bg-white dark:bg-gray-900">
                            Series A+
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="sector"
                          className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2"
                        >
                          Sector
                        </label>
                        <select
                          id="sector"
                          name="sector"
                          value={formData.sector}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200"
                        >
                          <option value="" className="bg-white dark:bg-gray-900">
                            Select sector
                          </option>
                          <option value="deep-tech" className="bg-white dark:bg-gray-900">
                            Deep Tech
                          </option>
                          <option value="fintech" className="bg-white dark:bg-gray-900">
                            Fintech
                          </option>
                          <option value="consumer" className="bg-white dark:bg-gray-900">
                            Consumer
                          </option>
                          <option value="climate" className="bg-white dark:bg-gray-900">
                            Climate
                          </option>
                          <option value="healthcare" className="bg-white dark:bg-gray-900">
                            Healthcare
                          </option>
                          <option value="other" className="bg-white dark:bg-gray-900">
                            Other
                          </option>
                        </select>
                      </div>
                    </>
                  )}

                  {/* Conditional Fields for LPs */}
                  {formData.memberType === "lp" && (
                    <div>
                      <label
                        htmlFor="investmentInterest"
                        className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2"
                      >
                        Investment Interest
                      </label>
                      <select
                        id="investmentInterest"
                        name="investmentInterest"
                        value={formData.investmentInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200"
                      >
                        <option value="" className="bg-white dark:bg-gray-900">
                          Select range
                        </option>
                        <option value="under-50k" className="bg-white dark:bg-gray-900">
                          Under $50K
                        </option>
                        <option value="50k-250k" className="bg-white dark:bg-gray-900">
                          $50K - $250K
                        </option>
                        <option value="250k-plus" className="bg-white dark:bg-gray-900">
                          $250K+
                        </option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2"
                    >
                      Tell us about yourself
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Share a bit about your background and interest in InnoSphere..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 font-light text-base group transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
