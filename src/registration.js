import { supabase } from './supabaseClient.js'
import { newUser } from './auth.js';


// Waits for document to finish loading before running scripts
$(document).ready(function(){

    // Click event for registration button... Add validation later
    $("#registrationButton").on('click', (event) => {
        // Get the values from the forms
        let name = $("#registrationName").val();
        let email = $("#registrationEmail").val();
        let password = $("#registrationPassword").val();

        //TODO - Input validation
        // No missing fields
        // Email validation
            // Invalid 
            // Duplicate
        console.log(`Name:${name}\nEmail:${email}\nPassword:${password}`);

        // Create the user
        let createUserResponse = newUser(email, password, name);

        console.log(createUserResponse);

        // Wait for a response from the promise
        createUserResponse.then((response) => {
            // Do something incase of error, idk
            if (!!response.error) {
                console.log(response.error);
            } else {
                console.log(`Data: ${response.data}`);
            }
        });

        // Do something with a popup or similar to tell user the success or failure of creation and to check email. then close popup and registration modal
    });

    
  
  });