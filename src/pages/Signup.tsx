import Topbar from "../components/global/Topbar"
import SignupForm from "../components/signup/SingupForm"

export default function SignupPage(){

    return(
        <div className='w-full h-auto bg-transparent'>
            <div className="">
                <Topbar />
            </div>

            <div className='w-full h-auto flex flex-col md:flex-row items-start md:items-stretch mt-10'>
                {/* Left-side image*/}
                <div className="hidden md:block md:flex-1 relative overflow-hidden min-h-[280px]">
                    <img
                        src="https://images.unsplash.com/photo-1520975915514-5f6a0a8b7f4b?auto=format&fit=crop&w=1400&q=80"
                        alt="Signup illustration"
                        className="w-full h-full object-cover md:rounded-l-3xl"
                    />
                </div>

                {/* Signup form */}
                <div className="w-full md:w-1/2 flex items-start justify-center px-6 py-8">
                    <SignupForm />
                </div>
            </div>
        </div>
    )
}