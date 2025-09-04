import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabase: SupabaseClient;

// A real Supabase URL will start with 'http'. The placeholder does not.
const isSupabaseConfigured = supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('http');

if (isSupabaseConfigured) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn(
    'Supabase is not configured. Using a mock client that will return errors. The app will fall back to sample data. Please update your .env file.'
  );

  const mockError = { message: 'Supabase not configured', details: '', hint: '', code: 'MOCK_ERROR' };

  // This is a mock that can be chained (e.g., .select().order()) and will always resolve to an error.
  const chainableMock = new Proxy({}, {
    get(target, prop) {
      if (prop === 'then') {
        // When `await` is used on the query, resolve with an error.
        return (resolve: (value: { data: null; error: typeof mockError }) => void) => resolve({ data: null, error: mockError });
      }
      // For any other property access (e.g., .select, .eq, .limit), return a function that returns the proxy.
      // This allows chaining of method calls like .select(...), .eq(...), etc.
      return () => chainableMock;
    },
  });

  supabase = {
    from: () => chainableMock,
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signInWithPassword: async () => ({ data: { user: null, session: null }, error: mockError as any }),
      signUp: async () => ({ data: { user: null, session: null }, error: mockError as any }),
      signOut: async () => ({ error: null }),
      resetPasswordForEmail: async () => ({ error: mockError as any }),
    },
    storage: {
      from: () => ({
        upload: async () => ({ data: null, error: mockError as any }),
      }),
    },
  } as unknown as SupabaseClient;
}

export const STORAGE_BUCKET = 'listing-images';

export { supabase };
