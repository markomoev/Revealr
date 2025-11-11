import { NavLink } from "react-router-dom"

export default function AuthLink(){
return(
    <div className="flex flex-row gap-4">
        <NavLink
            to={'/signup'}
            className="px-5 py-2 bg-zinc-800 text-zinc-300 rounded-full text-base font-medium transition-colors duration-200 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
        >
            Sign up
        </NavLink>
        <NavLink
            to=""
            className="px-5 py-2 bg-amber-700 text-white rounded-full text-base font-medium transition-colors duration-200 hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
            Log in
        </NavLink>
    </div>
)
}