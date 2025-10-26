import Topbar from "../components/global/Topbar"

import SignupForm from "../components/signup/SingupForm"

export default function SignupPage(){
    return(
        <div className = 'w-full h-auto'>
            <div className="">
                <Topbar />
            </div>


        <div className = 'w-full h-auto flex items-center justify-center mb-10'>
            <div className ='w-auto h-auto flex flex-row mt-10 rounded-3xl bg-white'>
                {/* Left-side image */}
                <div className="w-1/2 h-auto">
                    <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2lnbnVwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="Signup illustration" className="w-full h-full object-cover rounded-l-3xl"/>
                </div>
                {/* Signup form */}
                <div className="w-1/2 h-auto flex items-center justify-center">
                    <SignupForm />
                </div>
            </div>
        </div>
        </div>
    )
}