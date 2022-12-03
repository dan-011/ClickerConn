import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://pfexwdwurluzcqwvhiri.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmZXh3ZHd1cmx1emNxd3ZoaXJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkyMjk5MjEsImV4cCI6MTk4NDgwNTkyMX0.VH9IkEUDoKKulY5rzZ6RJGZTWWJdwhDGtfHTJpyrCc4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

console.log(supabase)