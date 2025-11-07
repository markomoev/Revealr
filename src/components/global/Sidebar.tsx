import { useState } from 'react'

import SidebarLink from './SidebarLink'

export default function Sidebar(){
    // retractable sidebar
    const [isOpen, setIsOpen] = useState(false)
    // active page
    const [isActive, setIsActive] = useState(false)

return (
    <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`h-screen flex flex-col shadow-xl ${isOpen ? 'md:w-1/7 w-1/4' : 'w-fit'}`}
        style={{
            backgroundColor: "oklch(16.5% 0 0)",
        }}
    >
        <div className="w-full flex flex-col items-center pt-8 pb-4">
            <p className={`${isOpen ? 'visible' : 'hidden'} text-white text-4xl font-bold tracking-wide mb-2 flex items-center gap-3`}>
                {/* Logo placeholder removed. Add your logo here when ready. */}
                TaskManager
            </p>
            <hr className="border-zinc-800 w-3/4 mt-2" />
        </div>

        <div className="flex-1 flex flex-col justify-start">
            <div className="w-full px-6 pt-8 flex flex-col gap-6">
                <SidebarLink
                    isOpen = {isOpen}
                    isActive = {() => setIsActive(!isActive)}
                />
            </div>
        </div>
    </div>
)
}