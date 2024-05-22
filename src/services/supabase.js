import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xbutjqcaxdpgfnjdkcnf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhidXRqcWNheGRwZ2ZuamRrY25mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyMDkyMjIsImV4cCI6MjAyODc4NTIyMn0.uKfbY8Uqvduvd8oxfcl25koNkesun1vU3eY6pKlOXEY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
