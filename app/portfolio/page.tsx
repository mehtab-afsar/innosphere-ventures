"use client";

import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowLeft, Linkedin, Link2, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useCompanies } from "@/hooks/useCompanies";

export default function PortfolioPage() {
  const [expandedCompany, setExpandedCompany] = useState<number | null>(null);
  const { companies, loading, error } = useCompanies();

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white mx-auto mb-4"></div>
            <p className="text-gray-500 dark:text-white/60">Loading portfolio companies...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-8 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-8 group absolute left-0 lg:left-0 -top-12">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-extralight text-sm">Back</span>
          </Link>
          <Badge className="mb-6 font-light bg-black dark:bg-white text-white dark:text-black border-black dark:border-white hover:bg-black/90 dark:hover:bg-white/90">
            Portfolio
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extralight mb-8 text-gray-900 dark:text-white">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">Edge Alpha</span>
            <br />
            <span className="font-light bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">Companies</span>
          </h1>
          <p className="text-xl font-extralight text-gray-600 dark:text-white/60 max-w-3xl">
            Our portfolio of frontier innovation companies building category-defining solutions across India.
          </p>
        </div>
      </section>

      {/* Edge Alpha Companies - Table Style Portfolio */}
      <section className="pt-0 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Table Header - Desktop */}
          <div className="hidden lg:grid grid-cols-12 gap-6 px-8 py-5 border-b border-gray-200 dark:border-white/10 text-base font-light text-gray-400 dark:text-white/40">
            <div className="col-span-5">Company</div>
            <div className="col-span-2">Sector</div>
            <div className="col-span-2">Partnered</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1"></div>
          </div>

          {/* Company List */}
          <div className="divide-y divide-gray-200 dark:divide-white/10">
            {companies.map((company, index) => {
              const Icon = company.icon;
              const isExpanded = expandedCompany === index;
              return (
                <div key={index}>
                  {/* Row */}
                  <div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-8 py-8 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-200"
                    onClick={() => setExpandedCompany(isExpanded ? null : index)}
                  >
                    {/* Company Info */}
                    <div className="lg:col-span-5 flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                        <Icon className="w-8 h-8 text-gray-600 dark:text-white/60" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                          {company.name}
                        </h3>
                        <p className="text-base font-light text-gray-500 dark:text-white/50 lg:hidden mt-1">
                          {company.sector} • {company.stage}
                        </p>
                      </div>
                    </div>

                    {/* Sector - Desktop */}
                    <div className="hidden lg:flex lg:col-span-2 items-center text-base text-gray-600 dark:text-white/60">
                      {company.sector}
                    </div>

                    {/* Partnered - Desktop */}
                    <div className="hidden lg:flex lg:col-span-2 items-center text-base text-gray-600 dark:text-white/60">
                      {company.year} • {company.stage}
                    </div>

                    {/* Status - Desktop */}
                    <div className="hidden lg:flex lg:col-span-2 items-center">
                      <span className="flex items-center gap-2 text-base text-gray-600 dark:text-white/60">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        {company.status}
                      </span>
                    </div>

                    {/* Expand Icon */}
                    <div className="hidden lg:flex lg:col-span-1 items-center justify-end">
                      <svg
                        className={`w-6 h-6 text-gray-400 dark:text-white/40 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Detail Modal/Drawer */}
      {expandedCompany !== null && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
            onClick={() => setExpandedCompany(null)}
          />

          {/* Drawer */}
          <div className="fixed inset-y-0 right-0 w-full max-w-4xl bg-white dark:bg-gray-950 z-50 shadow-2xl overflow-y-auto transform transition-transform duration-500 ease-out">
            {(() => {
              const company = companies[expandedCompany];
              const Icon = company.icon;
              return (
                <div className="min-h-full">
                  {/* Close Button */}
                  <button
                    onClick={() => setExpandedCompany(null)}
                    className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 dark:text-white/40 dark:hover:text-white/70 transition-colors z-10"
                  >
                    <X className="w-8 h-8" strokeWidth={1} />
                  </button>

                  {/* Two Column Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                    {/* Left Column - Company Info */}
                    <div className="p-10 lg:p-16 bg-gray-50 dark:bg-white/[0.02]">
                      {/* Logo */}
                      <div className="w-20 h-20 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center mb-10 shadow-sm border border-gray-200 dark:border-white/10">
                        <Icon className="w-10 h-10 text-gray-700 dark:text-white/70" strokeWidth={1.5} />
                      </div>

                      {/* Tagline */}
                      <h2 className="text-3xl lg:text-4xl font-light text-gray-900 dark:text-white leading-tight mb-8">
                        {company.tagline}
                      </h2>

                      {/* Social Links */}
                      <div className="flex items-center gap-4 mb-10">
                        <a href="#" className="text-gray-400 hover:text-gray-600 dark:text-white/40 dark:hover:text-white/70 transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-600 dark:text-white/40 dark:hover:text-white/70 transition-colors">
                          <Link2 className="w-5 h-5" />
                        </a>
                      </div>

                      {/* Description */}
                      <p className="text-lg font-light text-gray-600 dark:text-white/60 leading-relaxed">
                        {company.description || `${company.name} is building transformative solutions in the ${company.sector.toLowerCase()} space. As part of the InnoSphere Edge Alpha portfolio, they represent the next wave of innovation emerging from India's frontier technology ecosystem.`}
                      </p>
                    </div>

                    {/* Right Column - Details */}
                    <div className="p-10 lg:p-16 border-l border-gray-200 dark:border-white/10">
                      <div className="space-y-10">
                        {/* Domain */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 dark:text-white/40 uppercase tracking-[0.2em] mb-3">
                            Domain
                          </h4>
                          <p className="text-xl text-gray-900 dark:text-white">
                            {company.sector}
                          </p>
                        </div>

                        {/* First Partnered */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 dark:text-white/40 uppercase tracking-[0.2em] mb-3">
                            First Partnered
                          </h4>
                          <p className="text-xl text-gray-900 dark:text-white">
                            {company.stage}
                          </p>
                        </div>

                        {/* Current Status */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 dark:text-white/40 uppercase tracking-[0.2em] mb-3">
                            Current Status
                          </h4>
                          <p className="text-xl text-gray-900 dark:text-white flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                            {company.status}
                          </p>
                        </div>

                        {/* Year */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 dark:text-white/40 uppercase tracking-[0.2em] mb-3">
                            Year
                          </h4>
                          <p className="text-xl text-gray-900 dark:text-white">
                            {company.year}
                          </p>
                        </div>

                        {/* Partner */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 dark:text-white/40 uppercase tracking-[0.2em] mb-3">
                            Partner
                          </h4>
                          <p className="text-xl text-gray-900 dark:text-white">
                            InnoSphere Ventures
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}
