import {Link} from 'react-router-dom'

import HomeIcon from './icons/home.png'

export default function Sidebar(){
return (
    <div className = 'w-64 h-screen flex flex-col' style={{backgroundColor: 'oklch(16.5% 0 0)'}}>
        
        <div className ='w-full'>
            <p className = 'text-white text-3xl font-semibold p-4'>
                Name + icon
            </p>
            <hr className = 'border-zinc-900' />
        </div>

        <div className ='h-screen flex flex-col'>
            <div className ='w-full p-4 pt-10 flex flex-col gap-6'>
                <Link to="/" className ='text-white text-lg p-4 rounded-full bg-amber-700 flex flex-row items-center gap-3'>
                    <img src={HomeIcon} alt="" className='w-6 h-6' />
                    Home
                </Link>

                <Link to="/" className ='text-white text-lg p-4 rounded-full bg-amber-700 flex flex-row items-center gap-3'>
                    <img src={HomeIcon} alt="" className='w-6 h-6' />
                    Schedule
                </Link>
                
                <Link to="/" className ='text-white text-lg p-4 rounded-full bg-amber-700 flex flex-row items-center gap-3'>
                    <img src={HomeIcon} alt="" className='w-6 h-6' />
                    Progress
                </Link>
            </div>

        </div>
    </div>  
)
}