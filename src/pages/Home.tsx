import Sidebar from "../components/global/sidebar/Sidebar"
import Topbar from "../components/global/topbar/Topbar"

export default function HomePage(){
    return(
        <div className="flex flex-row min-h-screen w-full">
            <Sidebar />
            <div className="flex flex-col flex-1 w-full">
                <Topbar />
                <div className="flex-1">
                    {/* Main content goes here */}
                </div>
            </div>
        </div>
    )
}