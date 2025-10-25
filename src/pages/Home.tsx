import Topbar from "../components/global/Topbar"

import MainBubble from "../components/home/MainBubble"
import SecondBubble from "../components/home/secondary-bubbles/SecondBubble"

export default function HomePage(){
    return(
        <div>
            <div className ='topbar-container'>
                <Topbar />
            </div>
            <div className ='w-full h-auto flex items-center justify-center'>
                <MainBubble />
            </div>
            <div className ='flex flex-row w-full h-auto gap-10 mt-5'>
                <SecondBubble/>
            </div>
        </div>
    )
}