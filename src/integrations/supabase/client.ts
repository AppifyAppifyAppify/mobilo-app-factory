// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ciqvonjsoitqubaznzzn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpcXZvbmpzb2l0cXViYXpuenpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0NTA3NjEsImV4cCI6MjA1MjAyNjc2MX0.y4UttNO2KUvFsh6oLwU5w3VJURWOlHATdXOTFDViK_w";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);