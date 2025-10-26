import Topbar from "../components/global/Topbar"

import MainBubble from "../components/home/MainBubble"
import SecondBubble from "../components/home/secondary-bubbles/SecondBubble"
import ThirdBubble from "../components/home/secondary-bubbles/ThirdBubble"

export default function HomePage(){
    return(
        <div>
            <div className ='topbar-container'>
                <Topbar />
            </div>
            <div className ='w-full h-auto flex items-center justify-center'>
                <MainBubble />
            </div>
            <div className ='w-full h-auto mt-5 flex justify-center items-center'>
                <div className ='w-[99%] flex flex-row gap-10'>
                    <SecondBubble/>
                    <ThirdBubble/>
                </div>
            </div>
        </div>
    )
}