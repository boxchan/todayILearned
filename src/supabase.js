import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ikirhkgifuftilhsltlc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlraXJoa2dpZnVmdGlsaHNsdGxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyMTcxMjksImV4cCI6MjAxMTc5MzEyOX0.mE0BB2ES-XWXN1ajgIk_tDJ_UFlXJdyaSpIrDDuj96o';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;