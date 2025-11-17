import { createClient } from '@supabase/supabase-js';
import { env } from '@/env';

// Authenticated client for queries that require user authentication
export const createSupabaseClient = () => {
  return createClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
};

export const supabase = createSupabaseClient();
