import { NavLink } from "react-router-dom"
import UserIcon from './icons/user.png'

type openStateProp = {
    setIsOpen: (value: boolean) => void;
}

export default function ProfileMenu({setIsOpen}: openStateProp){

return(
    <div 
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className = 'md:w-50 h-auto px-5 py-2 bg-zinc-900/50 rounded-xl'>
        <NavLink
        className = 'flex flex-row px-1 py-1 gap-2'
        to =''
        
        >
            <img src={UserIcon} alt="User Icon" className = 'mt-1 w-5 h-4' />
            <span className = 'text-white w-full'>Profile</span>
        </NavLink>
    </div>
)
}