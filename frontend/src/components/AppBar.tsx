import { Avatar } from "./BlogCard"
import {Link} from "react-router-dom"
export const AppBar = () =>{

    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={'/blogs'}>
        <div className="flex justify-center flex-col cursor-pointer">
            Blogz
        </div>
        </Link>
        <div>
            <Link to={"/publish"}>
        <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">New Blog</button>
        </Link>
            <Avatar size="large" name="jack leach" />
            
        </div>

        
    </div>
}