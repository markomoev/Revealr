import {supabase} from '../client'

// TODO: should add is_deleted and is_updated
export const signUpUser = async (email: string, password: string, username: string, ) => {
    // supabase signup function
    try{
        const { data, error:createUserError } = await supabase.auth.signUp({
            email,
            password,
        })
    
        if(createUserError){
            console.error('Error in signing up!' + createUserError.message)
            return;
        }
        // if there is no error update the table for the users too
            // TODO: I should add encryption to the password (sec reasons)
        if(data){
            const user_id : any = data?.user?.id

            const {error: tableError} = await supabase
            .from('users')
            .upsert({
                id: user_id,
                username: username,
                password: password,
            })
            .eq('id', user_id)
            
            if(tableError){
                console.error('Error in inserting date in the table! ' + tableError.message)
            }

            return data;
        }
    }catch(error){
        console.error('An unexpected error occured!')
    }
}
