import { supabase } from './supabaseClient.js'
import { userSignIn } from './auth.js';

// Waits for document to finish loading before running scripts
$(document).ready(function () {

    // Click event for the sign in button
    $("#signInButton").on('click', (event) => {
        let email = $("#loginEmail").val();
        let password = $("#loginPassword").val();

        let userSignInResponse = userSignIn(email, password);

        console.log(userSignInResponse);

        userSignInResponse.then((response) => {
            console.log(response);
        });

    });


});
