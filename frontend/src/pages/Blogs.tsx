import { BlogCard } from "../components/BlogCard";
import { useState, useEffect } from "react";
import { AppBar } from "../components/AppBar";
import { getbulk } from "../api/userApi";
import { Blog } from "../types/Blog";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const Blogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getbulk().then((data) => {
            setBlogs(data.blog);
            setLoading(false);

        });

    }, []);

    if (loading) {
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
                {blogs.map(blog => <BlogCard
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