import { Heart, Battery, TestTube, Droplets, Leaf, LucideIcon } from "lucide-react";

export interface Company {
  id: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  sector: string;
  stage: string;
  status: string;
  year: string;
  description?: string;
  website?: string;
  linkedin?: string;
}

/**
 * Portfolio Companies Data
 *
 * This is the centralized data source for all portfolio companies.
 * To add a new company, add an entry to this array with all required fields.
 *
 * Future Enhancement: This data can be synced with Supabase by:
 * 1. Creating a 'companies' table in Supabase
 * 2. Using the useCompanies hook (see hooks/useCompanies.ts) to fetch data
 * 3. Storing icon names as strings and mapping them to Lucide icons in the frontend
 */
export const companies: Company[] = [
  {
    id: "inochi-care",
    icon: Heart,
    name: "Inochi Care",
    tagline: "On a mission to make advanced wound care as common as a bandage.",
    sector: "Healthcare",
    stage: "Pre-Seed",
    status: "Active",
    year: "2025",
    description: "Inochi Care is building transformative solutions in the healthcare space. As part of the InnoSphere Edge Alpha portfolio, they represent the next wave of innovation emerging from India's frontier technology ecosystem.",
  },
  {
    id: "cluix",
    icon: Droplets,
    name: "Cluix",
    tagline: "Building the Stripe of water governance.",
    sector: "Climate Tech",
    stage: "Pre-Seed",
    status: "Active",
    year: "2025",
    description: "Cluix is building transformative solutions in the climate tech space. As part of the InnoSphere Edge Alpha portfolio, they represent the next wave of innovation emerging from India's frontier technology ecosystem.",
  },
  {
    id: "pragmatech",
    icon: TestTube,
    name: "Pragmatech",
    tagline: "Making cervical cancer screening as accessible as a pregnancy test.",
    sector: "Healthcare",
    stage: "Pre-Seed",
    status: "Active",
    year: "2025",
    description: "Pragmatech is building transformative solutions in the healthcare space. As part of the InnoSphere Edge Alpha portfolio, they represent the next wave of innovation emerging from India's frontier technology ecosystem.",
  },
  {
    id: "meine-electric",
    icon: Battery,
    name: "Meine Electric",
    tagline: "Building the Duracell of India's clean energy future.",
    sector: "Clean Energy",
    stage: "Pre-Seed",
    status: "Active",
    year: "2025",
    description: "Meine Electric is building transformative solutions in the clean energy space. As part of the InnoSphere Edge Alpha portfolio, they represent the next wave of innovation emerging from India's frontier technology ecosystem.",
  },
  {
    id: "gocarin-industries",
    icon: Leaf,
    name: "Gocarin Industries",
    tagline: "Becoming the Coca-Cola of sustainable livestock feed.",
    sector: "AgriTech",
    stage: "Pre-Seed",
    status: "Active",
    year: "2025",
    description: "Gocarin Industries is building transformative solutions in the agritech space. As part of the InnoSphere Edge Alpha portfolio, they represent the next wave of innovation emerging from India's frontier technology ecosystem.",
  },
];
