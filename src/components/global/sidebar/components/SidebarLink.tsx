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

    const linksDisplay = links.map((l, i) => {
        return(
            <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                    `${isOpen ? 'px-5 py-3' : 'w-fit px-4 py-2.5'}
                    ${isActive ? 'bg-linear-to-r from-amber-700 to-amber-600 shadow-lg' : 'bg-zinc-900 hover:bg-zinc-800'}
                    text-white rounded-full text-lg flex flex-row items-center gap-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500`
                }
            >
                <img src={l.icon} alt={l.label} className="w-6 h-6" />

                <span className={`${isOpen ? 'visible' : 'hidden'}`}>{l.label}</span>
            </NavLink>
        )
    })

    return (
        <div className="flex flex-col gap-6">
            {linksDisplay}
        </div>
    )
}