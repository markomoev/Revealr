import Topbar from "../components/global/Topbar"
import MainBubble from "../components/home/MainBubble"

export default function HomePage(){
    return(
        <div>
            <div className ='topbar-container'>
                <Topbar />
            </div>
            <div className ='w-full h-auto flex items-center justify-center'>
                <MainBubble />
            </div>
        </div>
    )
}