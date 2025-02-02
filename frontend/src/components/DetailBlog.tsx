import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./Avatar"
import parse from 'html-react-parser';

export const DetailBlog = ({blog}:{blog:Blog}) => {

    return <div>
<AppBar />
<div className="flex justify-center">
<div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl">
        <div className="col-span-8">
            <div className="text-5xl font-extrabold ">
                {blog.title}
            </div>
            <div className="text-slate-500 pt-2">
               {blog.date.split("T")[0]}
            </div>
            <div className="pt-4">
                {parse(blog.content)}
            </div>
        </div>
        <div className="col-span-4 ">
            <div className="text-slate-600 text-lg ">
            Author
            </div>
            <div className="flex w-full">
                <div className="pr-4 flex flex-col justify-center">
                <Avatar size="small" name={blog.author.name ||"Anonymous"} />
                </div>
                <div>
                <div className="text-xl font-bold">
            {blog.author.name.toUpperCase() || "Anonymous"}
            </div>
            <div className="pt-2 text-slate-500">
                Random phrases by user for a brief intro type details
            </div>
                </div>
            </div>
            
        </div>
        <div>
            
        </div>
    </div>
    </div>
    </div>
}