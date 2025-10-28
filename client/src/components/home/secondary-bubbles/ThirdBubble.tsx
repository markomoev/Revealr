export default function ThirdBubble(){
return(
    <div className="w-1/2 h-auto bg-linear-to-br from-pink-200 to-pink-300 rounded-3xl pt-5 pb-5 pl-6 pr-5 flex flex-col shadow-md ring-1 ring-pink-50 antialiased">
        <p className="text-2xl font-semibold text-slate-900 tracking-tight leading-snug">Modern, Curious Experience</p>

        <div className="mt-2 mb-2">
            <div className="w-12 h-1 bg-pink-600 rounded-full"></div>
        </div>

        <div>
            <p className="text-lg text-slate-800 leading-relaxed">The app isn’t just a tool — it’s an experience that feels fun, mysterious, and sleek.</p>
            <p className="text-sm italic text-pink-700 mt-3">Like a velvet rope to curiosity: polished, a little playful, and impossible to ignore.</p>
        </div>
    </div>
)
}