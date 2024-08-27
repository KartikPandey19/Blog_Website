import {useBlog} from "../hooks/index";
import { DetailBlog } from "../components/DetailBlog";
import { useParams } from "react-router-dom";
export const Blog = ()=>{
    const { id } = useParams();
    const {loading, blog}= useBlog({
        id: id || ""
    });

    if(loading || !blog){
        return <div>
            loading....
        </div>
    }
    
    return (
        <>
        <DetailBlog blog={blog}/>
        </>
    )
}