import {NavLink} from 'react-router-dom'

import HomeIcon from '../icons/home.png'
import ScheduleIcon from '../icons/schedule.png'
import ProgressIcon from '../icons/progress.png'
import ProjectsIcon from '../icons/projects.png'

// retractable sidebar prop
type SidebarState = {
    isOpen: boolean;
}


export default function SidebarLink({isOpen}: SidebarState){
    // array for all links info
    const links = [
        {to: '/', label: "Home", icon: HomeIcon},
        {to: '/schedule', label: "Schedule", icon: ScheduleIcon},
        {to: '/projects', label: "Projects", icon: ProjectsIcon},
        {to: '/progress', label: "Progress", icon: ProgressIcon},
    ]

    const linksDisplay = links.map((l) => {
        return (
            <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                    `${isOpen ? 'px-5 py-3' : 'w-fit px-3.5 py-2.5'}
                    whitespace-nowrap flex flex-row items-center gap-4 text-white text-lg rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 backdrop-blur-md
                    ${isActive ? 'border-2 border-amber-700 shadow-lg bg-zinc-900/80' : 'border-2 border-transparent bg-zinc-900/40 hover:bg-zinc-900/60'}`
                }
            >
                <img src={l.icon} alt={l.label} className="w-6 h-6" />
                <span className={`${isOpen ? 'visible' : 'hidden'}`}>{l.label}</span>
            </NavLink>
        );
    });

    return (
        <div className="flex flex-col gap-6">
            {linksDisplay}
        </div>
    )
}