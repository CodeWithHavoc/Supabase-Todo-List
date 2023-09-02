import { createClient } from '@supabase/supabase-js'

export default createClient(
    process.env.NEXT_SUPABASE_URL,
    process.env.NEXT_SUPABASE_ANON,
);