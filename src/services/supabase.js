import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xvwhuprpphbjtbgabsuo.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2d2h1cHJwcGhianRiZ2Fic3VvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxMDg1ODIsImV4cCI6MjAzOTY4NDU4Mn0.VclFlMRsj-GkxBJRWxGsFH0tG826hT26Ec9BfgQY-1g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
