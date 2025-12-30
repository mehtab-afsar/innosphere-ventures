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

export default function JoinPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    linkedinUrl: "",
    companyName: "",
    companyWebsite: "",
    companyLocation: "",
    problemSolving: "",
    companyVision: "",
    tractionProgress: "",
    teamInfo: "",
    foundingTeamMakeup: "",
    ceoGender: "",
    howDidYouHear: "",
    joinNewsletter: false,
    additionalMaterials: "",
    privacyAcknowledged: false,
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
                  Investment Form
                </h2>
                <p className="font-extralight text-gray-600 dark:text-white/60 mb-4">
                  Thanks for your interest in InnoSphere Ventures!
                </p>
                <p className="font-extralight text-gray-600 dark:text-white/60 mb-8 text-sm">
                  Please fill out this form to let us know a little more about you and your company. We will reach out if there might be a good fit.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2">
                        What's your first name? *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2">
                        And your last name? *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2">
                      What is your email address? *
                    </label>
                    <p className="text-xs font-extralight text-gray-500 dark:text-white/40 mb-2">So we can get in touch with you</p>
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

                  {/* Company Information */}
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2">
                      What's your company's name? *
                    </label>
                    <p className="text-xs font-extralight text-gray-500 dark:text-white/40 mb-2">If you don't have one, write TBC</p>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200"
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="companyWebsite" className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2">
                      If you have a website, share the link here:
                    </label>
                    <p className="text-xs font-extralight text-gray-500 dark:text-white/40 mb-2">Leave blank if you do not have a website. Please only enter links.</p>
                    <input
                      type="url"
                      id="companyWebsite"
                      name="companyWebsite"
                      value={formData.companyWebsite}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200"
                      placeholder="https://yourcompany.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="companyLocation" className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2">
                      Where is your company located? *
                    </label>
                    <input
                      type="text"
                      id="companyLocation"
                      name="companyLocation"
                      required
                      value={formData.companyLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., Bangalore, India"
                    />
                  </div>

                  {/* Problem & Vision */}
                  <div>
                    <label htmlFor="problemSolving" className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2">
                      Let's talk about your idea. What problem is your company solving? *
                    </label>
                    <p className="text-xs font-extralight text-gray-500 dark:text-white/40 mb-2">In less than 100 words</p>
                    <textarea
                      id="problemSolving"
                      name="problemSolving"
                      required
                      rows={3}
                      maxLength={500}
                      value={formData.problemSolving}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Describe the problem you're solving..."
                    />
                  </div>

                  <div>
                    <label htmlFor="companyVision" className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2">
                      What's the vision you have for this company? *
                    </label>
                    <p className="text-xs font-extralight text-gray-500 dark:text-white/40 mb-2">In less than 100 words</p>
                    <textarea
                      id="companyVision"
                      name="companyVision"
                      required
                      rows={3}
                      maxLength={500}
                      value={formData.companyVision}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Share your vision..."
                    />
                  </div>

                  <div>
                    <label htmlFor="tractionProgress" className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2">
                      What traction / progress have you made so far towards this vision? *
                    </label>
                    <p className="text-xs font-extralight text-gray-500 dark:text-white/40 mb-2">Eg: product, customers, revenue, funds raised</p>
                    <textarea
                      id="tractionProgress"
                      name="tractionProgress"
                      required
                      rows={3}
                      value={formData.tractionProgress}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Describe your traction..."
                    />
                  </div>

                  {/* Team Information */}
                  <div>
                    <label htmlFor="teamInfo" className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2">
                      What should we know about you and your team? *
                    </label>
                    <p className="text-xs font-extralight text-gray-500 dark:text-white/40 mb-2">Again, in less than 100 words</p>
                    <textarea
                      id="teamInfo"
                      name="teamInfo"
                      required
                      rows={3}
                      maxLength={500}
                      value={formData.teamInfo}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your team..."
                    />
                  </div>

                  <div>
                    <label htmlFor="linkedinUrl" className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2">
                      What is your LinkedIn Profile URL? *
                    </label>
                    <input
                      type="url"
                      id="linkedinUrl"
                      name="linkedinUrl"
                      required
                      value={formData.linkedinUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>

                  <div>
                    <label htmlFor="additionalMaterials" className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2">
                      If you have additional materials to help us make a better decision, share the link here:
                    </label>
                    <p className="text-xs font-extralight text-gray-500 dark:text-white/40 mb-2">This could include a pitch deck or other supporting documents (Google Drive, Dropbox, etc.)</p>
                    <input
                      type="url"
                      id="additionalMaterials"
                      name="additionalMaterials"
                      value={formData.additionalMaterials}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200"
                      placeholder="https://drive.google.com/..."
                    />
                  </div>

                  <div>
                    <label htmlFor="foundingTeamMakeup" className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2">
                      Founding team makeup *
                    </label>
                    <p className="text-xs font-extralight text-gray-500 dark:text-white/40 mb-2">Which of the following most accurately describes the founding team gender(s)?</p>
                    <select
                      id="foundingTeamMakeup"
                      name="foundingTeamMakeup"
                      required
                      value={formData.foundingTeamMakeup}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select an option</option>
                      <option value="all-male">All male</option>
                      <option value="all-female">All female</option>
                      <option value="mixed-gender">Mixed gender</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="ceoGender" className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2">
                      CEO Gender *
                    </label>
                    <select
                      id="ceoGender"
                      name="ceoGender"
                      required
                      value={formData.ceoGender}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select an option</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="non-binary">Non-binary</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="howDidYouHear" className="block text-sm font-light text-gray-700 dark:text-white/80 mb-2">
                      How did you hear about InnoSphere Ventures? *
                    </label>
                    <select
                      id="howDidYouHear"
                      name="howDidYouHear"
                      required
                      value={formData.howDidYouHear}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl font-extralight text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/50 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select an option</option>
                      <option value="social-media">Social Media</option>
                      <option value="referral">Referral from friend/colleague</option>
                      <option value="news-article">News Article</option>
                      <option value="event">Event/Conference</option>
                      <option value="search-engine">Search Engine</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Newsletter & Privacy */}
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="joinNewsletter"
                        name="joinNewsletter"
                        checked={formData.joinNewsletter}
                        onChange={(e) => setFormData(prev => ({ ...prev, joinNewsletter: e.target.checked }))}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                      />
                      <label htmlFor="joinNewsletter" className="ml-3 text-sm font-light text-gray-700 dark:text-white/80">
                        Would you like to join our Community newsletter?
                      </label>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="privacyAcknowledged"
                        name="privacyAcknowledged"
                        required
                        checked={formData.privacyAcknowledged}
                        onChange={(e) => setFormData(prev => ({ ...prev, privacyAcknowledged: e.target.checked }))}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                      />
                      <label htmlFor="privacyAcknowledged" className="ml-3 text-sm font-light text-gray-700 dark:text-white/80">
                        By submitting the above information, you are acknowledging that you have read and agreed to our privacy collection statement *
                      </label>
                    </div>
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
