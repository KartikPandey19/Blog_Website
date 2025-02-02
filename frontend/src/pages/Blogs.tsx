import {BlogCard} from "../components/BlogCard";
import { useBlogs } from "../hooks/index";
import { AppBar } from "../components/AppBar";
import { BlogSkeleton } from "../components/BlogSkeleton";
import  Loader  from "../components/Loader";

export const Blogs=()=>{
    const {loading,blogs} = useBlogs();

    if(loading){
    return <div>
        <AppBar />
    <div className="flex justify-center">
        <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <Loader />
        </div>
        </div>
        </div>
    }
    return <div>
        <AppBar />
    <div className="flex justify-center">
        <div>
          {blogs.map(blog =><BlogCard 
          id={blog.id}
        authorName={blog.author.name || "Anonymous"}
        publishedDate={blog.date.split("T")[0]} 
        title={blog.title}
        content={blog.content}
        />
    )} 
    </div>
    </div>
    </div>
}