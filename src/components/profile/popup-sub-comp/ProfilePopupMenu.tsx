import { NavLink } from "react-router-dom"

export default function ProfilePopupMenu(){
return(
    <div className='bg-zinc-900/50 rounded-tl-lg rounded-bl-lg'>
        <NavLink
            className='block pl-6 pr-18 py-3 text-white hover:text-amber-700 transition-colors duration-200 hover:bg-zinc-800 rounded-tl-lg'
            to=''>
            View Profile
        </NavLink>

        <NavLink
            className='block pl-6 pr-18 py-3 text-white hover:text-amber-700 transition-colors duration-200 hover:bg-zinc-800'
            to=''>
            My Hustles
        </NavLink>

        <NavLink
            className='block pl-6 pr-18 py-3 text-white hover:text-amber-700 transition-colors duration-200 hover:bg-zinc-800 rounded-bl-lg'
            to=''>
            Saved
        </NavLink>
    </div>
)
}