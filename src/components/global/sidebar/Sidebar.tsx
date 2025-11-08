import { useState } from 'react'

import SidebarLink from './components/SidebarLink'
import SidebarLogout from './components/SidebarLogout'

export default function Sidebar(){
    // retractable sidebar
    const [isOpen, setIsOpen] = useState(false)


return (
    <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="h-screen flex flex-col shadow-xl transition-all duration-500 bg-[oklch(16.5%_0_0)]"
        style={{
            width: isOpen ? "14.28%" : "4vw",
            minWidth: isOpen ? "12rem" : "6.5rem"
        }}
    >
        <div className="w-full flex flex-col items-center pt-8 pb-4">
            <p className={`${isOpen ? 'visible' : 'hidden'} text-white text-4xl font-bold tracking-wide mb-2 flex items-center gap-3`}>
                {/* Logo placeholder removed. Add your logo here when ready. */}
                TaskManager
            </p>
            <hr className="border-zinc-800 w-3/4 mt-2" />
        </div>

        <div className="flex-1 flex flex-col justify-between">
            <div className="w-full px-6 pt-8 flex flex-col gap-6">
                <SidebarLink isOpen={isOpen} />
            </div>
            <div className="w-full px-6 pb-8">
                <SidebarLogout isOpen={isOpen}/>
            </div>
        </div>
    </div>
)
}