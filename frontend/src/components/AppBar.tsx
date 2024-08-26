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
            <Avatar size="large" name="jack leach" />
            
        </div>

        
    </div>
}