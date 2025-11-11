// import the components
import SignupContainer from "../../components/auth/signup/SignupContainer"
import Sidebar from "../../components/global/sidebar/Sidebar"
import Topbar from "../../components/global/topbar/Topbar"

export default function SignupPage(){
return(
    <div className = 'w-full flex flex-row'>
        <Sidebar/>
        
        <div className="flex items-center justify-center">
            <Topbar/>
            <SignupContainer/>
        </div>
    </div>
)
}