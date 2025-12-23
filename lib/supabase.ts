import { createClient, SupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://tlzmiajkuxchdthormyf.supabase.co";
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";

let supabaseInstance: SupabaseClient | null = null;

/**
 * Get Supabase client instance (singleton pattern)
 */
export function getSupabase(): SupabaseClient {
  if (!SUPABASE_KEY) {
    throw new Error("SUPABASE_KEY not configured. Please add NEXT_PUBLIC_SUPABASE_KEY to your .env.local file.");
  }

  if (!supabaseInstance) {
    supabaseInstance = createClient(SUPABASE_URL, SUPABASE_KEY);
  }

  return supabaseInstance;
}

/**
 * Check if Supabase is configured
 */
export function isSupabaseConfigured(): boolean {
  return Boolean(SUPABASE_KEY);
}

// Form types
export type FormType = "join" | "mailing-list";

// Form data interfaces
export interface JoinFormData {
  name: string;
  email: string;
  company: string;
  memberType: string;
  stage?: string;
  sector?: string;
  investmentInterest?: string;
  message: string;
}

export interface MailingListData {
  email: string;
}
