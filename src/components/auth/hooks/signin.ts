import {supabase} from '../../../client'

export const signInUser = async (email: string, password: string) => {
    try{
        const { data, error: signinUserError } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if(signinUserError){
            console.error('Error in signing in! ' + signinUserError.message )
            return;
        }

        return data;
    }
    catch(error){
        console.error('An unexpected error occured!')
    }
}