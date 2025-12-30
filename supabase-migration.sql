-- Migration script for InnoSphere Ventures join_submissions table
-- This script recreates the join_submissions table with comprehensive investment form fields

-- Drop the existing table (CAUTION: This will delete all existing data)
-- Comment out this line if you want to preserve existing data
DROP TABLE IF EXISTS join_submissions;

-- Create the new comprehensive join_submissions table
CREATE TABLE join_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,

  -- Personal Information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  linkedin_url TEXT NOT NULL,

  -- Company Information
  company_name TEXT NOT NULL,
  company_website TEXT,
  company_location TEXT NOT NULL,

  -- Problem & Vision
  problem_solving TEXT NOT NULL,
  company_vision TEXT NOT NULL,
  traction_progress TEXT NOT NULL,

  -- Team Information
  team_info TEXT NOT NULL,
  founding_team_makeup TEXT NOT NULL,
  ceo_gender TEXT NOT NULL,

  -- Additional Information
  how_did_you_hear TEXT NOT NULL,
  join_newsletter BOOLEAN DEFAULT false,
  additional_materials TEXT,

  -- Privacy acknowledgment
  privacy_acknowledged BOOLEAN NOT NULL DEFAULT false,

  -- Indexes for common queries
  CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Create indexes for performance
CREATE INDEX idx_join_submissions_email ON join_submissions(email);
CREATE INDEX idx_join_submissions_created_at ON join_submissions(created_at DESC);
CREATE INDEX idx_join_submissions_company_name ON join_submissions(company_name);

-- Enable Row Level Security (RLS)
ALTER TABLE join_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for form submissions)
CREATE POLICY "Allow public inserts" ON join_submissions
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow select only for authenticated users (admin access)
CREATE POLICY "Allow authenticated reads" ON join_submissions
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Add comments for documentation
COMMENT ON TABLE join_submissions IS 'Stores investment form submissions from potential founders';
COMMENT ON COLUMN join_submissions.first_name IS 'Founder first name';
COMMENT ON COLUMN join_submissions.last_name IS 'Founder last name';
COMMENT ON COLUMN join_submissions.email IS 'Contact email address';
COMMENT ON COLUMN join_submissions.linkedin_url IS 'LinkedIn profile URL';
COMMENT ON COLUMN join_submissions.company_name IS 'Company name or TBC if not yet named';
COMMENT ON COLUMN join_submissions.company_website IS 'Company website URL (optional)';
COMMENT ON COLUMN join_submissions.company_location IS 'Company location/headquarters';
COMMENT ON COLUMN join_submissions.problem_solving IS 'Description of problem company is solving';
COMMENT ON COLUMN join_submissions.company_vision IS 'Company vision statement';
COMMENT ON COLUMN join_submissions.traction_progress IS 'Progress and traction details';
COMMENT ON COLUMN join_submissions.team_info IS 'Information about the founding team';
COMMENT ON COLUMN join_submissions.founding_team_makeup IS 'Gender composition of founding team';
COMMENT ON COLUMN join_submissions.ceo_gender IS 'CEO gender';
COMMENT ON COLUMN join_submissions.how_did_you_hear IS 'How the founder heard about InnoSphere';
COMMENT ON COLUMN join_submissions.join_newsletter IS 'Whether founder wants to join newsletter';
COMMENT ON COLUMN join_submissions.additional_materials IS 'URL to pitch deck or additional materials';
COMMENT ON COLUMN join_submissions.privacy_acknowledged IS 'Privacy policy acknowledgment';
