import { useState } from 'react'
import ArrowDownIcon from './icons/arrow-down.png'
import ProfileMenu from './ProileMenu'

type nicknameString = {
    nickname: string
}

export default function ProfileDisplay({nickname}: nicknameString){
// state for opened menu
const [isOpen, setIsOpen] = useState(false)


return(
    <div className="mt-2 flex flex-col gap-3 relative">
        <div
            className="flex flex-row gap-3 justify-center px-5 py-2 bg-zinc-900 text-zinc-300 rounded-full text-base font-medium transition-colors duration-200 shadow ml-auto border border-amber-700"
        >
            <div
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="w-auto h-auto"
            >
                <img
                    src={ArrowDownIcon}
                    alt="Arrow"
                    className={`w-4 h-4 mt-1 ${isOpen ? 'transition-transform duration-300 rotate-180' : 'transition-transform duration-300'}`}
                />
            </div>
            <span className="">{nickname}</span>
        </div>
        {isOpen && (
            <div className="absolute right-0 top-full mt-2 z-10">
                <ProfileMenu />
            </div>
        )}
    </div>
)
}