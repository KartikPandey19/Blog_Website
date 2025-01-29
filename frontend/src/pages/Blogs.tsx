import {BlogCard} from "../components/BlogCard";
import { useBlogs } from "../hooks/index";
import { AppBar } from "../components/AppBar";
import { BlogSkeleton } from "../components/BlogSkeleton";

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
        publishedDate="10/09/2024" 
        title={blog.title}
        content={blog.content}
        />
    )} 
    </div>
    </div>
    </div>
}