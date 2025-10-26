import {Link} from "react-router"

export default function Topbar() {
  return (
    <div className="w-full">

      <div className="max-w-[90%] mx-auto grid grid-cols-3 items-center text-white p-4">
        
        <div className="justify-self-start flex items-center">
          <h1 className="text-2xl text-pink-300 font-bold tracking-tight">Revealr</h1>
        </div>

        {/* Navigation Links */}
        <nav
          className="justify-self-center flex space-x-6">

          <Link
            to='/'
            className="text-md font-medium hover:underline hover:text-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded">
            Home
          </Link>

          <a
            href="#"
            className="text-md font-medium hover:underline hover:text-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded">
            Upload
          </a>

          <a
            href="#"
            className="text-md font-medium hover:underline hover:text-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded">
            About
          </a>
        </nav>

        {/* User Actions */}
        <div className="justify-self-end flex items-center space-x-4">
          <Link
            to="/login"
            className="text-md font-md hover:underline hover:text-white/90">
            Login
          </Link>

          <Link
            to="/signup"
            className="text-md text-black font-md bg-linear-to-br from-pink-200 to-pink-300 px-3 py-1 rounded-md hover:bg-pink-300/90">
            Sign Up
          </Link>
        </div>

      </div>
    </div>
  )
}
