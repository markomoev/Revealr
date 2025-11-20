import { useState } from "react";

import {signUpUser} from '../hooks/signup'

export default function SignupForm() {
    // state management of the signup credentials
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState ('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSignUp = async () =>  {
        await signUpUser(email, password, username)
    }

    return (
        <div className="flex flex-col gap-6 items-center justify-center bg-zinc-900/20 rounded-xl p-8 shadow-sm shadow-amber-700">
            <form 
                className="flex flex-col gap-6 w-full"
                action=""
            >
                {/* Inputs */}
                <div className="flex gap-4 w-full">
                    <input
                        type="text"
                        placeholder="First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-4 py-2 bg-zinc-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 placeholder:text-zinc-400 transition"
                    />
                    <input
                        type="text"
                        placeholder="Last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-4 py-2 bg-zinc-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 placeholder:text-zinc-400 transition"
                    />
                </div>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 bg-zinc-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 placeholder:text-zinc-400 transition"
                />

                <div className="flex gap-4 w-full">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 bg-zinc-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 placeholder:text-zinc-400 transition"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 bg-zinc-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 placeholder:text-zinc-400 transition"
                    />
                </div>
            </form>

            <button
                onClick={handleSignUp}
                className="pt-2 pb-2 bg-zinc-900/20 hover:bg-zinc-800 text-white text-xl rounded-3xl cursor-pointer w-1/2 border-2 border-amber-700 transition-colors duration-300"
            >
                Sign up
            </button>
        </div>
    );
}