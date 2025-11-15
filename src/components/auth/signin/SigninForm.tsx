import { useState } from 'react';

import {signInUser} from '../../../hooks/signin'

export default function SigninForm() {
  // variables for the form inputs
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = async () => {
    await signInUser(email, password)
  }


return(
  <div className = 'flex flex-col gap-6 items-center justify-center bg-zinc-900 rounded-xl p-8 shadow-lg'>
    <form 
      className="flex flex-col gap-6"
      action=""
    >
      {/* Inputs */}
      <div className="flex flex-col gap-6">
        <input
          value = {email}
          onChange = {(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 placeholder:text-zinc-400 transition"
        />
        <input
          value = {password}
          onChange = {(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 placeholder:text-zinc-400 transition"
        />
      </div>
    </form>

      <button
        onClick = {handleSignIn}
        type="submit"
        className="pt-2 pb-2 bg-amber-700 text-xl rounded-2xl cursor-pointer w-1/2"
      >
        Sign in
      </button>


  </div>
);
}
