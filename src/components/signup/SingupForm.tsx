export default function SignupForm() {
return (
    <div className="w-full max-w-md md:max-w-none">
        {/* Card */}
        <div className="bg-pink-300 rounded-3xl p-6 md:rounded-r-3xl md:rounded-l-none w-full">
            {/* Header */}
            <div className="mb-4">
                <p className="text-3xl font-semibold text-slate-900 leading-tight">Create an account</p>
                <div className="mt-2">
                    <div className="w-10 h-1 bg-pink-800 rounded-full"></div>
                </div>
                <p className="text-base text-slate-600 mt-3">Already have an account?
                    <a href="#" className="text-pink-800 font-medium hover:underline"> Sign in</a>
                </p>
            </div>

            {/* Form */}
            <form className="space-y-4 pb-10 pt-6">
                <div>
                    <label className="block text-base font-medium text-slate-700 mb-1" htmlFor="username">Username</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="your username"
                        className="w-full px-4 py-3 rounded-lg bg-pink-50/30 placeholder-slate-400 text-base text-slate-800 focus:outline-none focus:ring-1 focus:ring-pink-800 focus:ring-opacity-90 transition"
                    />
                </div>

                <div>
                    <label className="block text-base font-medium text-slate-700 mb-1" htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-pink-50/30 placeholder-slate-400 text-base text-slate-800 focus:outline-none focus:ring-1 focus:ring-pink-800 focus:ring-opacity-90 transition"
                    />
                </div>

                <div>
                    <label className="block text-base font-medium text-slate-700 mb-1" htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Choose a strong password"
                        className="w-full px-4 py-3 rounded-lg bg-pink-50/30 placeholder-slate-400 text-base text-slate-800 focus:outline-none focus:ring-1 focus:ring-pink-800 focus:ring-opacity-90 transition"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-white text-black text-lg hover:bg-pink-900 transition"
                >
                    Create account
                </button>
            </form>
        </div>
    </div>
)
}