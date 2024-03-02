import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://llzvleylaywfdyyqwrai.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsenZsZXlsYXl3ZmR5eXF3cmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4NTc1MTIsImV4cCI6MjAxODQzMzUxMn0.xnpi4GTNEYzPUVM9xjiLCzDHYGLP5Gl1hdzBB24XAik";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
