-- InnoSphere Ventures Database Schema
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/tlzmiajkuxchdthormyf/sql

-- Join submissions table
CREATE TABLE join_submissions (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  member_type TEXT NOT NULL,
  stage TEXT,
  sector TEXT,
  investment_interest TEXT,
  message TEXT
);

-- Mailing list table
CREATE TABLE mailing_list (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  email TEXT NOT NULL UNIQUE
);

-- Enable Row Level Security
ALTER TABLE join_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE mailing_list ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anon users (for form submissions)
CREATE POLICY "Allow anonymous inserts" ON join_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous inserts" ON mailing_list FOR INSERT WITH CHECK (true);

-- Allow reads for authenticated users (optional - for admin dashboard)
CREATE POLICY "Allow authenticated reads" ON join_submissions FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated reads" ON mailing_list FOR SELECT USING (auth.role() = 'authenticated');

-- =====================================================
-- PORTFOLIO COMPANIES TABLE
-- =====================================================
-- This section manages the portfolio companies displayed on the website.
-- Update this data to add, modify, or remove companies from the portfolio page.
--
-- Last updated: 2025-12-22
-- =====================================================

-- Drop existing table if needed (CAUTION: This will delete all data)
-- DROP TABLE IF EXISTS companies CASCADE;

-- Create companies table
CREATE TABLE IF NOT EXISTS companies (
  -- Primary Key
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Core Company Information
  name TEXT NOT NULL UNIQUE,
  tagline TEXT NOT NULL,
  description TEXT,

  -- Classification
  sector TEXT NOT NULL CHECK (sector IN (
    'Healthcare',
    'Climate Tech',
    'Clean Energy',
    'AgriTech',
    'FinTech',
    'EdTech',
    'Enterprise SaaS',
    'Consumer Tech',
    'DeepTech',
    'BioTech',
    'SpaceTech',
    'Industry 4.0',
    'Automobile',
    'Defence',
    'Drone Tech',
    'Logistics',
    'Other'
  )),

  -- Investment Details
  stage TEXT NOT NULL CHECK (stage IN (
    'Pre-Seed',
    'Seed',
    'Pre-Series A',
    'Series A',
    'Series B',
    'Series C+',
    'Growth'
  )),
  status TEXT NOT NULL DEFAULT 'Active' CHECK (status IN (
    'Active',
    'Acquired',
    'IPO',
    'Inactive'
  )),
  year TEXT NOT NULL,

  -- Visual & Links
  icon_name TEXT NOT NULL CHECK (icon_name IN (
    'Heart',
    'Battery',
    'TestTube',
    'Droplets',
    'Leaf',
    'Zap',
    'Brain',
    'Rocket',
    'Globe',
    'Shield',
    'Cpu',
    'Microscope',
    'Wind',
    'Sun',
    'Sprout',
    'DollarSign',
    'GraduationCap',
    'Building',
    'Smartphone',
    'Database'
  )),
  website TEXT,
  linkedin TEXT,

  -- Metadata
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Display Order (lower numbers appear first)
  display_order INTEGER DEFAULT 999
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_companies_sector ON companies(sector);
CREATE INDEX IF NOT EXISTS idx_companies_stage ON companies(stage);
CREATE INDEX IF NOT EXISTS idx_companies_status ON companies(status);
CREATE INDEX IF NOT EXISTS idx_companies_year ON companies(year);
CREATE INDEX IF NOT EXISTS idx_companies_display_order ON companies(display_order);
CREATE INDEX IF NOT EXISTS idx_companies_created_at ON companies(created_at DESC);

-- Auto-update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_companies_updated_at ON companies;
CREATE TRIGGER update_companies_updated_at
  BEFORE UPDATE ON companies
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access (for website display)
DROP POLICY IF EXISTS "Allow public read access" ON companies;
CREATE POLICY "Allow public read access"
  ON companies
  FOR SELECT
  USING (true);

-- Policy: Allow authenticated users to insert new companies
DROP POLICY IF EXISTS "Allow authenticated insert" ON companies;
CREATE POLICY "Allow authenticated insert"
  ON companies
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Policy: Allow authenticated users to update companies
DROP POLICY IF EXISTS "Allow authenticated update" ON companies;
CREATE POLICY "Allow authenticated update"
  ON companies
  FOR UPDATE
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Policy: Allow authenticated users to delete companies
DROP POLICY IF EXISTS "Allow authenticated delete" ON companies;
CREATE POLICY "Allow authenticated delete"
  ON companies
  FOR DELETE
  USING (auth.role() = 'authenticated');

-- =====================================================
-- SEED DATA FOR COMPANIES
-- =====================================================

-- Insert portfolio companies (use ON CONFLICT to avoid duplicates)
-- Data sourced from KIIT-TBI InnoSphere Edge Alpha National Call - Short List
INSERT INTO companies (
  name,
  tagline,
  description,
  sector,
  stage,
  status,
  year,
  icon_name,
  display_order
) VALUES
  -- Edge Alpha #1: Nexus Power
  (
    'Nexus Power',
    'Revolutionizing energy storage with biodegradable, lithium-free batteries made from crop residue.',
    'Nexus Power is a clean-tech startup founded by sisters Nishita and Nikita Baliarsingh, turning agricultural waste into high-performance peptide-based batteries. With applications spanning electric vehicles, drones, and energy storage systems, they are pioneering innovation at the forefront of India''s clean energy transition.',
    'Clean Energy',
    'Seed',
    'Active',
    '2025',
    'Battery',
    1
  ),
  -- Edge Alpha #2: PCRA Technologies
  (
    'PCRA Technologies',
    'Transforming B2B pharmaceutical credit with AI-powered scoring for distributors and retailers.',
    'PCRA Technologies leverages real-time ERP integrations and a proprietary scoring engine to empower pharmaceutical distributors with instant, reliable credit assessments. With over 300 distributors and 3,000+ retailers onboarded, PCRA is building the digital credit backbone for the pharmaceutical supply chain.',
    'Healthcare',
    'Seed',
    'Active',
    '2025',
    'Heart',
    2
  ),
  -- Edge Alpha #3: Inochi Care
  (
    'Inochi Care',
    'Revolutionizing wound care with patented, multitherapeutic wound healing technology.',
    'Inochi Care''s portable device combines negative pressure, fluid delivery, temperature control, and infection management in a single system. Already deployed in over 100 hospitals across India, the solution significantly reduces healing time, hospital stays, and antibiotic usage.',
    'Healthcare',
    'Seed',
    'Active',
    '2025',
    'Heart',
    3
  ),
  -- Edge Alpha #4: GMetri
  (
    'GMetri',
    'A no-code platform transforming industries through immersive spatial technologies and AI-powered digital twins.',
    'GMetri''s flagship products bring AI-powered digital twins and inclusive XR learning to factories, warehouses, retail spaces, and classrooms. By replacing physical processes with browser-based 3D simulations, GMetri helps global clients reduce carbon footprints and boost operational efficiency.',
    'Industry 4.0',
    'Seed',
    'Active',
    '2025',
    'Brain',
    4
  ),
  -- Edge Alpha #5: Drivomate
  (
    'Drivomate',
    'Pioneering AI-powered ADAS tailored for unstructured traffic in India and emerging markets.',
    'Drivomate delivers real-time safety alerts for two-wheelers and small cars using a patented camera-based, radar-free architecture. Their indigenous technology combines Explainable AI with high-speed motion detection to prevent collisions and promote road safety at scale.',
    'Automobile',
    'Seed',
    'Active',
    '2025',
    'Shield',
    5
  ),
  -- Edge Alpha #6: DigiClinics Research And Services
  (
    'DigiClinics Research And Services',
    'Pioneering AI-powered diagnostic solutions to bridge the gap in breast cancer detection and care.',
    'DigiClinics offers a fully integrated, cloud-native platform combining AI-driven ultrasound, mammography, and digital pathology. Validated on over 1.1 million pathology tiles, the company partners with hospitals and public health systems to democratize early cancer detection.',
    'Healthcare',
    'Seed',
    'Active',
    '2025',
    'Microscope',
    6
  ),
  -- Edge Alpha #7: Meine Electric Automotives
  (
    'Meine Electric Automotives',
    'Pioneering Aluminium-Air Fuel Cell technology for decentralized, emission-free energy solutions.',
    'MEINE develops portable power systems that replace diesel generators and lithium batteries with recyclable aluminium fuel. With 8 patents and cutting-edge innovations in electrochemistry, MEINE is leading India''s transition toward clean, resilient, and locally sourced energy infrastructure.',
    'Clean Energy',
    'Seed',
    'Active',
    '2025',
    'Battery',
    7
  ),
  -- Edge Alpha #8: RNT Health Insights
  (
    'RNT Health Insights',
    'Pioneering real-time AI solutions for early detection of gastrointestinal cancers.',
    'RNT leverages proprietary video-based algorithms and edge-AI computing to transform live endoscopic procedures into high-precision diagnostic tools. With dual FDA Breakthrough Device Designations, RNT enables gastroenterologists to detect precancerous lesions with millimeter-level accuracy.',
    'Healthcare',
    'Seed',
    'Active',
    '2025',
    'TestTube',
    8
  ),
  -- Edge Alpha #9: Manentia AI
  (
    'Manentia AI',
    'Revolutionizing diagnostic imaging through a full-stack, AI-powered radiology platform.',
    'Combining PACS, multi-modal AI diagnostics (CT, X-ray, MRI), and LLM-driven structured reporting, Manentia empowers healthcare providers with faster, scalable, and more accurate diagnostics. With deployments across 45+ institutions in India, Nigeria, and the UK, Manentia is closing the radiology access gap.',
    'Healthcare',
    'Seed',
    'Active',
    '2025',
    'Brain',
    9
  ),
  -- Edge Alpha #10: Blinq Mobility
  (
    'Blinq Mobility',
    'Revolutionizing urban transportation through modular electric microcars with swappable batteries.',
    'Blinq''s platform significantly reduces carbon emissions, operating costs, and vehicle downtime, making it ideal for fleet operators and ride-hailing services. With a focus on affordability and sustainability, Blinq is transforming urban mobility across India and emerging markets.',
    'Automobile',
    'Seed',
    'Active',
    '2025',
    'Zap',
    10
  ),
  -- Edge Alpha #11: Dashagriv Aerospace Technology
  (
    'Dashagriv Aerospace Technology',
    'Pioneering autonomous high-altitude platform systems (HAPS) for defense and environmental surveillance.',
    'Dashagriv develops solar-powered, AI-enabled stratospheric airships for persistent, real-time monitoring across sensitive border, maritime, and remote zones. With in-house avionics and modular payloads, Dashagriv is advancing India''s sovereign capabilities in aerospace technology.',
    'Defence',
    'Seed',
    'Active',
    '2025',
    'Rocket',
    11
  ),
  -- Edge Alpha #12: CLUIX
  (
    'CLUIX',
    'Revolutionizing water quality monitoring with AI and IoT-based portable devices.',
    'CLUIX enables real-time, decentralized water testing, empowering communities with affordable, accurate, and cloud-integrated tools. By bridging data gaps in public health and water governance, CLUIX supports climate resilience and sustainable development across India and the Global South.',
    'Climate Tech',
    'Pre-Series A',
    'Active',
    '2025',
    'Droplets',
    12
  ),
  -- Edge Alpha #13: Gocarin Industries
  (
    'Gocarin Industries',
    'Pioneering climate-smart livestock solutions with nano-formulated red algae-based cattle feed.',
    'Gocarin''s patent-pending feed significantly reduces methane emissions while boosting milk yield and digestion in ruminants. Their integrated digital platform offers advisory, milk tracking, and veterinary support, reaching over 8,000 farmers across Odisha, West Bengal, and Assam.',
    'AgriTech',
    'Seed',
    'Active',
    '2025',
    'Leaf',
    13
  ),
  -- Edge Alpha #14: WDUWG India LLP
  (
    'WDUWG India LLP',
    'Pioneering AI-powered, integrated surveillance solutions for defense and border security.',
    'Built over two years of co-development with the Indian Army, WDUWG''s Census Counters platform automates multi-sensor surveillance across border zones and remote locations. With 6 active Army deployments and a ₹8 Cr+ sales pipeline, WDUWG is redefining national security infrastructure.',
    'Defence',
    'Pre-Series A',
    'Active',
    '2025',
    'Shield',
    14
  ),
  -- Edge Alpha #15: Gudlyf Mobility
  (
    'Gudlyf Mobility',
    'Pioneering indigenous Type IV high-pressure hydrogen storage cylinders for clean mobility and industry.',
    'Gudlyf combines material innovation with advanced filament winding techniques to deliver lightweight, high-performance hydrogen solutions. Backed by multiple patent filings and ARAI validation, the company is playing a key role in India''s National Green Hydrogen Mission.',
    'Clean Energy',
    'Seed',
    'Active',
    '2025',
    'Sun',
    15
  ),
  -- Edge Alpha #16: Vyorius Drones
  (
    'Vyorius Drones',
    'Offering an AI-powered, hardware-agnostic drone operations platform for scalable autonomous missions.',
    'Supporting major autopilot stacks like PX4 and Ardupilot, Vyorius enables offline, swarm-based drone control across agriculture, logistics, and public safety. With 17 paying customers and active pilots across India, Japan, Southeast Asia, and the U.S., Vyorius is driving sustainable productivity gains.',
    'Drone Tech',
    'Seed',
    'Active',
    '2025',
    'Rocket',
    16
  ),
  -- Edge Alpha #17: Logistos Technology
  (
    'Logistos Technology',
    'An AI-powered logistics platform unifying Road, Rail, Air, and Ocean freight into a single digital ecosystem.',
    'Logistos enables shipment booking, dynamic route optimization, load consolidation, and paperless documentation. Built for enterprises and regional transporters alike, Logistos improves efficiency, reduces carbon emissions, and empowers MSMEs through a mobile-first, low-cost SaaS model.',
    'Logistics',
    'Seed',
    'Active',
    '2025',
    'Globe',
    17
  ),
  -- Edge Alpha #18: Pragmatech Healthcare Solutions
  (
    'Pragmatech Healthcare Solutions',
    'Pioneering accessible cervical cancer screening with India''s first CDSCO-approved at-home self-sampling kit.',
    'Pragmatech''s CERVICHECK™ enables dignified, stigma-free HPV testing without clinical infrastructure. Backed by 4 Indian patents and clinical validation from AIIMS and Cancer Institute Adyar, Pragmatech aims to scale its affordable innovations across LMICs to help eliminate cervical cancer.',
    'Healthcare',
    'Seed',
    'Active',
    '2025',
    'TestTube',
    18
  )
ON CONFLICT (name) DO UPDATE SET
  tagline = EXCLUDED.tagline,
  description = EXCLUDED.description,
  sector = EXCLUDED.sector,
  stage = EXCLUDED.stage,
  status = EXCLUDED.status,
  year = EXCLUDED.year,
  icon_name = EXCLUDED.icon_name,
  display_order = EXCLUDED.display_order;

-- =====================================================
-- HELPER QUERIES & TEMPLATES
-- =====================================================

-- View all companies ordered by display order
-- SELECT * FROM companies ORDER BY display_order, created_at DESC;

-- Count companies by sector
-- SELECT sector, COUNT(*) as count FROM companies GROUP BY sector ORDER BY count DESC;

-- Get active companies only
-- SELECT * FROM companies WHERE status = 'Active' ORDER BY display_order;

-- =====================================================
-- TEMPLATE: ADD NEW COMPANY
-- =====================================================
-- Copy and modify this template to add new companies:
/*
INSERT INTO companies (
  name,
  tagline,
  description,
  sector,
  stage,
  status,
  year,
  icon_name,
  website,
  linkedin,
  display_order
) VALUES (
  'Company Name',
  'Company tagline describing their mission.',
  'Detailed description of the company and what they are building.',
  'Healthcare', -- Choose: Healthcare, Climate Tech, Clean Energy, AgriTech, FinTech, EdTech, Enterprise SaaS, Consumer Tech, DeepTech, BioTech, SpaceTech, Other
  'Pre-Seed', -- Choose: Pre-Seed, Seed, Series A, Series B, Series C+, Growth
  'Active', -- Choose: Active, Acquired, IPO, Inactive
  '2025',
  'Heart', -- Choose from available Lucide icons (see icon_name constraint above)
  'https://company-website.com', -- Optional
  'https://linkedin.com/company/company-name', -- Optional
  6 -- Set display order (lower numbers appear first)
);
*/

-- =====================================================
-- TEMPLATE: UPDATE EXISTING COMPANY
-- =====================================================
/*
UPDATE companies
SET
  tagline = 'Updated tagline',
  stage = 'Seed',
  display_order = 1
WHERE name = 'Company Name';
*/

-- =====================================================
-- MAINTENANCE NOTES
-- =====================================================
-- After updating companies in Supabase:
-- 1. Update lib/companies.ts with the same data to keep frontend in sync
-- 2. Ensure icon_name matches an available Lucide icon
-- 3. Uncomment the Supabase fetch code in hooks/useCompanies.ts if you want dynamic data
-- 4. Test the portfolio page to ensure all companies display correctly
--
-- Available Icons: Heart, Battery, TestTube, Droplets, Leaf, Zap, Brain, Rocket,
-- Globe, Shield, Cpu, Microscope, Wind, Sun, Sprout, DollarSign, GraduationCap,
-- Building, Smartphone, Database
