import AuthLink from "./components/AuthLink"

export default function Topbar(){
return(
    <div className="w-full h-fit flex items-center justify-end px-8 py-4" style={{backgroundColor: "oklch(15.5% 0 0)"}}>
        <AuthLink />
    </div>
)
}