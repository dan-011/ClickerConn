import { supabase } from "./supabaseClient";

export async function newUser(email, password, name) {
    let nameSplit = name.split(' ');

    let { data, error } = await supabase.auth.signUp({
        "email": email,
        "password": password,
    });

    return {"data": data, "error": error};
}

export async function userSignIn(email, password) {
    let { data, error } = await supabase.auth.signInWithPassword({
        "email": email,
        "password": password,
    });

    return {"data": data, "error": error};
}