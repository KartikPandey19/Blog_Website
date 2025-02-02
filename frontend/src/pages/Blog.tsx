import {useBlog} from "../hooks/index";
import { DetailBlog } from "../components/DetailBlog";
import { useParams } from "react-router-dom";
import Loader  from "../components/Loader";
import {Footer} from "../components/Footer";
export const Blog = ()=>{
    const { id } = useParams();
    const {loading, blog}= useBlog({
        id: id || ""
    });

    if(loading || !blog){
        return <div >
            <Loader />
        </div>
    }
    
    return (
        <>
        <DetailBlog blog={blog}/>
        <Footer />
        </>
    )
}