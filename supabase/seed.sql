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
