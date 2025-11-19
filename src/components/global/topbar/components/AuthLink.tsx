import { useEffect, useEffectEvent, useState } from "react"
import { NavLink } from "react-router-dom"

import {supabase} from '../../../../client'

export default function AuthLink(){
// username variables
const [nickname, setNickname] = useState('')
const [isLoggedIn, setIsLoggedIn] = useState(false)

// taking the username
const handleLogin = useEffectEvent( async () => {
    const { data: { user } } = await supabase.auth.getUser()
    const user_id : any = user?.id;

    try{
        if(user_id){
            const {data:fetchedUsername, error: fetchingUsernameError} = await supabase
                .from('users')
                .select('username')
                .eq('id', user_id)

            if(fetchingUsernameError){
                console.error("Error in fetching username: " + fetchingUsernameError.message);
                return;
            }
            setNickname(fetchedUsername[0]?.username)
            setIsLoggedIn(true)
            return nickname;
        }
    }
    catch(error){
        console.error('An unexpected error occurred! ' + error )
    }
});

useEffect(() => {
    handleLogin();
}, [handleLogin]);

return(
 <div className="flex flex-row gap-4 w-full justify-end items-center">
    {isLoggedIn && nickname ? 
        <span className="px-5 py-2 bg-zinc-800 text-zinc-300 rounded-full text-base font-medium transition-colors duration-200 shadow ml-auto border border-zinc-700">{nickname}</span>
        : 
        <>
            <NavLink
                to={'/signup'}
                className="px-5 py-2 bg-zinc-800 text-zinc-300 rounded-full text-base font-medium transition-colors duration-200 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            >
                Sign up
            </NavLink>
            <NavLink
                to={'/signin'}
                className="px-5 py-2 bg-amber-700 text-white rounded-full text-base font-medium transition-colors duration-200 hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
                Sign in
            </NavLink>
        </>
    }
</div>
)
}