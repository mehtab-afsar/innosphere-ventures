"use client";

import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { OceanGradient } from "@/components/OceanGradient";
import { ArrowLeft, Linkedin, Link2, X, Search } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";
import { useCompanies } from "@/hooks/useCompanies";

export default function PortfolioPage() {
  const [expandedCompany, setExpandedCompany] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sectorFilter, setSectorFilter] = useState("all");
  const [stageFilter, setStageFilter] = useState("all");
  const { companies, loading, error } = useCompanies();

  // Get unique sectors and stages for filter options
  const { sectors, stages } = useMemo(() => {
    const uniqueSectors = Array.from(new Set(companies.map(c => c.sector))).sort();
    const uniqueStages = Array.from(new Set(companies.map(c => c.stage))).sort();
    return { sectors: uniqueSectors, stages: uniqueStages };
  }, [companies]);

  // Filter companies based on search query and filters
  const filteredCompanies = useMemo(() => {
    return companies.filter(company => {
      // Search filter
      const query = searchQuery.toLowerCase();
      const matchesSearch = !searchQuery.trim() ||
        company.name.toLowerCase().includes(query) ||
        company.sector.toLowerCase().includes(query) ||
        company.tagline.toLowerCase().includes(query) ||
        company.stage.toLowerCase().includes(query);

      // Sector filter
      const matchesSector = sectorFilter === "all" || company.sector === sectorFilter;

      // Stage filter
      const matchesStage = stageFilter === "all" || company.stage === stageFilter;

      return matchesSearch && matchesSector && matchesStage;
    });
  }, [companies, searchQuery, sectorFilter, stageFilter]);

  const hasActiveFilters = searchQuery || sectorFilter !== "all" || stageFilter !== "all";

  const clearAllFilters = () => {
    setSearchQuery("");
    setSectorFilter("all");
    setStageFilter("all");
  };

  if (loading) {
    return (
      <OceanGradient variant="portfolio">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white mx-auto mb-4"></div>
            <p className="text-gray-500 dark:text-white/60">Loading portfolio companies...</p>
          </div>
        </div>
      </OceanGradient>
    );
  }

  return (
    <OceanGradient variant="portfolio">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-8 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-8 group absolute left-0 lg:left-0 -top-12">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-extralight text-sm">Back</span>
          </Link>
          <Badge className="mb-6 font-light bg-[#0a1128]/10 text-[#0a1128] border-[#0a1128]/20 hover:bg-[#0a1128]/20">
            Portfolio
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extralight mb-8">
            <span className="text-[#2a9a8e]">Edge Alpha</span>
            <br />
            <span className="font-light text-[#2a9a8e]">Companies</span>
          </h1>
          <p className="text-xl font-extralight text-[#0a1128]/80 max-w-3xl">
            Our portfolio of frontier innovation companies building category-defining solutions across India.
          </p>
        </div>
      </section>

      {/* Edge Alpha Companies - Table Style Portfolio */}
      <section className="pt-0 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar and Filters */}
          <div className="mb-8 space-y-4">
            {/* Search Bar and Filter Controls */}
            <div className="flex flex-col lg:flex-row gap-3">
              {/* Search Bar */}
              <div className="relative lg:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0a1128]/40" />
                <input
                  type="text"
                  placeholder="Search companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 rounded-xl border border-white/10 bg-white/5 text-[#0a1128] placeholder:text-[#0a1128]/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all font-light"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-white/40 dark:hover:text-white/70 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Filter Controls */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Sector Filter */}
                <select
                  value={sectorFilter}
                  onChange={(e) => setSectorFilter(e.target.value)}
                  className="px-4 py-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white text-sm font-light focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/20 transition-all cursor-pointer"
                >
                  <option value="all">All Sectors</option>
                  {sectors.map(sector => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </select>

                {/* Stage Filter */}
                <select
                  value={stageFilter}
                  onChange={(e) => setStageFilter(e.target.value)}
                  className="px-4 py-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white text-sm font-light focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/20 transition-all cursor-pointer"
                >
                  <option value="all">All Stages</option>
                  {stages.map(stage => (
                    <option key={stage} value={stage}>{stage}</option>
                  ))}
                </select>

                {/* Clear All Button */}
                {hasActiveFilters && (
                  <button
                    onClick={clearAllFilters}
                    className="px-4 py-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm font-light text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/20 transition-all"
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>

            {/* Active Filter Pills */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-light text-gray-400 dark:text-white/40">
                  Active filters:
                </span>

                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/10 text-xs font-light text-gray-700 dark:text-white/70 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
                  >
                    Search: &quot;{searchQuery}&quot;
                    <X className="w-3 h-3" />
                  </button>
                )}

                {sectorFilter !== 'all' && (
                  <button
                    onClick={() => setSectorFilter('all')}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/10 text-xs font-light text-gray-700 dark:text-white/70 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
                  >
                    Sector: {sectorFilter}
                    <X className="w-3 h-3" />
                  </button>
                )}

                {stageFilter !== 'all' && (
                  <button
                    onClick={() => setStageFilter('all')}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/10 text-xs font-light text-gray-700 dark:text-white/70 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
                  >
                    Stage: {stageFilter}
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Table Header - Desktop */}
          <div className="hidden lg:grid grid-cols-12 gap-6 px-8 py-5 border-b border-white/10 text-base font-semibold text-[#0a1128]/50">
            <div className="col-span-5">Company</div>
            <div className="col-span-2">Sector</div>
            <div className="col-span-2">Partnered</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1"></div>
          </div>

          {/* Company List */}
          <div className="divide-y divide-white/10">
            {filteredCompanies.length === 0 ? (
              <div className="px-8 py-20 text-center">
                <p className="text-lg font-light text-[#0a1128]/70">
                  No companies found matching &quot;{searchQuery}&quot;
                </p>
              </div>
            ) : (
              filteredCompanies.map((company, index) => {
              const Icon = company.icon;
              const isExpanded = expandedCompany === index;
              return (
                <div key={index}>
                  {/* Row */}
                  <div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-8 py-8 cursor-pointer hover:bg-white/5 transition-colors duration-200"
                    onClick={() => setExpandedCompany(isExpanded ? null : index)}
                  >
                    {/* Company Info */}
                    <div className="lg:col-span-5 flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                        <Icon className="w-8 h-8 text-[#0a1128]/60" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-[#0a1128]">
                          {company.name}
                        </h3>
                        <p className="text-base font-light text-[#0a1128]/60 lg:hidden mt-1">
                          {company.sector} • {company.stage}
                        </p>
                      </div>
                    </div>

                    {/* Sector - Desktop */}
                    <div className="hidden lg:flex lg:col-span-2 items-center text-base text-[#0a1128]/70">
                      {company.sector}
                    </div>

                    {/* Partnered - Desktop */}
                    <div className="hidden lg:flex lg:col-span-2 items-center text-base text-[#0a1128]/70">
                      {company.year} • {company.stage}
                    </div>

                    {/* Status - Desktop */}
                    <div className="hidden lg:flex lg:col-span-2 items-center">
                      <span className="flex items-center gap-2 text-base text-[#0a1128]/70">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        {company.status}
                      </span>
                    </div>

                    {/* Expand Icon */}
                    <div className="hidden lg:flex lg:col-span-1 items-center justify-end">
                      <svg
                        className={`w-6 h-6 text-[#0a1128]/50 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
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
            })
            )}
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
              const company = filteredCompanies[expandedCompany];
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
    </OceanGradient>
  );
}
