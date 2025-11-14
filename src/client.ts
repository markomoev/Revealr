import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 
    'https://qtndgezifkltzdrcsgpo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
const supabase = createClient(supabaseUrl, supabaseKey)