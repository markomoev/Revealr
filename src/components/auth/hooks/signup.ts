import {supabase} from '../../../client'

export const signUpUser = async (email: string,
                                 username: string,
                                 password: string,
                                 firstName:string,
                                 lastName:string, ) => {
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
        if(data){
            const user_id : any = data?.user?.id

            const {error: tableError} = await supabase
            .from('users')
            .upsert({
                id: user_id,
                username: username,
                firstName: firstName,
                lastName: lastName,
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
