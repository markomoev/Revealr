export default function SigninForm() {
  return (
    <div>
      <form 
        className="flex flex-col gap-6 bg-zinc-900 rounded-xl p-8 shadow-lg"
        action=""
      >
        {/* Inputs */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 placeholder:text-zinc-400 transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 placeholder:text-zinc-400 transition"
          />
        </div>
      </form>
    </div>
  );
}
