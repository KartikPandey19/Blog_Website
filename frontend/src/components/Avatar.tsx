import { Profile } from "./Profile"

export function Avatar({name,size="small"}:{name:string, size?:"small" | "large"}){
    const profileDetails = ()=>{
       return <Profile />
    }
    return (
    <div  className={`relative inline-flex items-center justify-center ${size==="small" ?"w-6 h-6":"w-10 h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className={`${size==="small"?"text-xs":"text-md"} text-gray-600 dark:text-gray-300 uppercase `}><button onClick={profileDetails}>{name.charAt(0).toUpperCase()}</button></span>
    </div>
    )
    
}