import { useState, useEffect } from 'react';
import { getSupabase } from '@/lib/supabase';
import { companies as staticCompanies, Company } from '@/lib/companies';

/**
 * Hook to fetch companies from Supabase
 *
 * Currently returns static data from lib/companies.ts
 *
 * To enable Supabase integration:
 * 1. Create a 'companies' table in Supabase with columns:
 *    - id (uuid, primary key)
 *    - name (text)
 *    - tagline (text)
 *    - sector (text)
 *    - stage (text)
 *    - status (text)
 *    - year (text)
 *    - description (text, optional)
 *    - website (text, optional)
 *    - linkedin (text, optional)
 *    - icon_name (text) - stores icon name like "Heart", "Battery", etc.
 *    - created_at (timestamp)
 *    - updated_at (timestamp)
 *
 * 2. Enable Row Level Security (RLS) with policy:
 *    - SELECT: Allow public read access
 *    - INSERT/UPDATE/DELETE: Require authentication
 *
 * 3. Uncomment the Supabase fetch code below and comment out the static return
 */
export function useCompanies() {
  const [companies, setCompanies] = useState<Company[]>(staticCompanies);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Uncomment this section when Supabase table is ready
    /*
    async function fetchCompanies() {
      try {
        setLoading(true);
        const supabase = getSupabase();
        const { data, error } = await supabase
          .from('companies')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        // Map Supabase data to Company interface
        // You'll need to map icon_name to actual Lucide icons
        const mappedCompanies = data?.map((company) => ({
          ...company,
          icon: mapIconName(company.icon_name), // Implement this mapping function
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
    */

    // Currently using static data
    setCompanies(staticCompanies);
  }, []);

  return { companies, loading, error };
}

/**
 * Helper function to map icon names to Lucide icons
 * Implement this when enabling Supabase integration
 */
/*
import { Heart, Battery, TestTube, Droplets, Leaf } from 'lucide-react';

function mapIconName(iconName: string): LucideIcon {
  const iconMap: Record<string, LucideIcon> = {
    'Heart': Heart,
    'Battery': Battery,
    'TestTube': TestTube,
    'Droplets': Droplets,
    'Leaf': Leaf,
  };

  return iconMap[iconName] || Heart; // Default to Heart if not found
}
*/
