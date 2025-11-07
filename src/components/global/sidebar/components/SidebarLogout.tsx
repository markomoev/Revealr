import LogoutIcon from '../icons/logout.png'

type SidebarState = {
    isOpen: boolean;
}

export default function SidebarLogout({isOpen} : SidebarState){
return(
    <div>
        <button
            className="w-full px-5 py-3 bg-zinc-800 text-zinc-300 rounded-full text-lg font-medium transition-colors duration-200 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 flex items-center gap-3"
        >
            <img src={LogoutIcon} alt="Logout" className="w-5 h-5" />
            <span className={isOpen ? 'visible' : 'hidden'}>Log out</span>
        </button>
    </div>
)
}