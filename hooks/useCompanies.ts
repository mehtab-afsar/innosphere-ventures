import { useState, useEffect } from 'react';
import { getSupabase } from '@/lib/supabase';
import { companies as staticCompanies, Company } from '@/lib/companies';
import {
  Heart,
  Battery,
  TestTube,
  Droplets,
  Leaf,
  Zap,
  Brain,
  Rocket,
  Globe,
  Shield,
  Cpu,
  Microscope,
  Wind,
  Sun,
  Sprout,
  DollarSign,
  GraduationCap,
  Building,
  Smartphone,
  Database,
  LucideIcon
} from 'lucide-react';

/**
 * Helper function to map icon names to Lucide icons
 */
function mapIconName(iconName: string): LucideIcon {
  const iconMap: Record<string, LucideIcon> = {
    'Heart': Heart,
    'Battery': Battery,
    'TestTube': TestTube,
    'Droplets': Droplets,
    'Leaf': Leaf,
    'Zap': Zap,
    'Brain': Brain,
    'Rocket': Rocket,
    'Globe': Globe,
    'Shield': Shield,
    'Cpu': Cpu,
    'Microscope': Microscope,
    'Wind': Wind,
    'Sun': Sun,
    'Sprout': Sprout,
    'DollarSign': DollarSign,
    'GraduationCap': GraduationCap,
    'Building': Building,
    'Smartphone': Smartphone,
    'Database': Database,
  };

  return iconMap[iconName] || Heart; // Default to Heart if not found
}

/**
 * Hook to fetch companies from Supabase
 *
 * Fetches portfolio companies from Supabase database and maps them to the Company interface.
 * Falls back to static data if there's an error fetching from Supabase.
 */
export function useCompanies() {
  const [companies, setCompanies] = useState<Company[]>(staticCompanies);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchCompanies() {
      try {
        setLoading(true);
        const supabase = getSupabase();
        const { data, error } = await supabase
          .from('companies')
          .select('*')
          .order('display_order', { ascending: true });

        if (error) throw error;

        // Map Supabase data to Company interface
        const mappedCompanies = data?.map((company) => ({
          id: company.id,
          icon: mapIconName(company.icon_name),
          name: company.name,
          tagline: company.tagline,
          sector: company.sector,
          stage: company.stage,
          status: company.status,
          year: company.year,
          description: company.description,
          website: company.website,
          linkedin: company.linkedin,
        })) || [];

        setCompanies(mappedCompanies);
      } catch (err) {
        console.error('Error fetching companies:', err);
        setError(err as Error);
        // Fallback to static data on error
        setCompanies(staticCompanies);
      } finally {
        setLoading(false);
      }
    }

    fetchCompanies();
  }, []);

  return { companies, loading, error };
}
