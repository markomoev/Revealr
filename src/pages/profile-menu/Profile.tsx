import Sidebar from "../../components/global/sidebar/Sidebar"
import Topbar from "../../components/global/topbar/Topbar"

import ProfilePopup from "../../components/profile/ProfilePopup"

export default function ProfilePage(){
return(
    <div className = 'w-full h-screen flex flex-row overflow-hidden'> 
        <Sidebar/>

        <div className = 'flex-1 h-auto flex flex-col'>
            <div>
                <Topbar/>
            </div>

            <div>
                <ProfilePopup/>
            </div>
        </div>
    </div>
)
}