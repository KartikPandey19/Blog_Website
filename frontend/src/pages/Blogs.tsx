import {BlogCard} from "../components/BlogCard";
import { useBlogs } from "../hooks/index";
import { AppBar } from "../components/AppBar";
export const Blogs=()=>{
    const {loading,blogs} = useBlogs();

    if(loading){
        return <div>
            loading....
        </div>
    }
    return <div>
        <AppBar />
    <div className="flex justify-center">
        <div>
          {blogs.map(blog =><BlogCard 
          id={blog.id}
        authorName={blog.author.name || "Anonymous"}
        publishedDate="10/01/2000" 
        title={blog.title}
        content={blog.content}
        />
    )} 
    </div>
    </div>
    </div>
}