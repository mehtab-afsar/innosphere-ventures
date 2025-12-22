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
    'Other'
  )),

  -- Investment Details
  stage TEXT NOT NULL CHECK (stage IN (
    'Pre-Seed',
    'Seed',
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
  (
    'Inochi Care',
    'On a mission to make advanced wound care as common as a bandage.',
    'Inochi Care is building transformative solutions in the healthcare space. As part of the InnoSphere Edge Alpha portfolio, they represent the next wave of innovation emerging from India''s frontier technology ecosystem.',
    'Healthcare',
    'Pre-Seed',
    'Active',
    '2025',
    'Heart',
    1
  ),
  (
    'Cluix',
    'Building the Stripe of water governance.',
    'Cluix is building transformative solutions in the climate tech space. As part of the InnoSphere Edge Alpha portfolio, they represent the next wave of innovation emerging from India''s frontier technology ecosystem.',
    'Climate Tech',
    'Pre-Seed',
    'Active',
    '2025',
    'Droplets',
    2
  ),
  (
    'Pragmatech',
    'Making cervical cancer screening as accessible as a pregnancy test.',
    'Pragmatech is building transformative solutions in the healthcare space. As part of the InnoSphere Edge Alpha portfolio, they represent the next wave of innovation emerging from India''s frontier technology ecosystem.',
    'Healthcare',
    'Pre-Seed',
    'Active',
    '2025',
    'TestTube',
    3
  ),
  (
    'Meine Electric',
    'Building the Duracell of India''s clean energy future.',
    'Meine Electric is building transformative solutions in the clean energy space. As part of the InnoSphere Edge Alpha portfolio, they represent the next wave of innovation emerging from India''s frontier technology ecosystem.',
    'Clean Energy',
    'Pre-Seed',
    'Active',
    '2025',
    'Battery',
    4
  ),
  (
    'Gocarin Industries',
    'Becoming the Coca-Cola of sustainable livestock feed.',
    'Gocarin Industries is building transformative solutions in the agritech space. As part of the InnoSphere Edge Alpha portfolio, they represent the next wave of innovation emerging from India''s frontier technology ecosystem.',
    'AgriTech',
    'Pre-Seed',
    'Active',
    '2025',
    'Leaf',
    5
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
