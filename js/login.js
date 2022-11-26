import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://pfexwdwurluzcqwvhiri.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmZXh3ZHd1cmx1emNxd3ZoaXJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkyMjk5MjEsImV4cCI6MTk4NDgwNTkyMX0.VH9IkEUDoKKulY5rzZ6RJGZTWWJdwhDGtfHTJpyrCc4';

console.log(supabaseUrl)

// Waits for document to finish loading before running scripts
$(document).ready(function(){

    // Click event for registration button... Add validation later
    $("#registrationButton").on('click', (event) => {
        // Get the values from the forms
        let name = $("#registrationName").val();
        let email = $("#registrationEmail").val();
        let password = $("#registrationPassword").val();

        //TODO - Input valid
        // No missing fields
        // Email validation
            // Invalid 
            // Duplicate
        console.log(`User wants to register:\nName:${name}\nEmail:${email}\nPassword:${password}`);

    });
  
  });