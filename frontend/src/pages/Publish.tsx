import { AppBar } from "../components/AppBar"
import axios  from "axios"
import { BACKEND_URL } from "../config"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import  Loader from "../components/Loader";



export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const saveBlog = async()=> {
        setLoading(true);
    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
            title,
            content:description
        },{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        });
        navigate(`/blog/${response.data.id}`)
       } 
       
  const myColors = [
    "purple",
    "#785412",
    "#452632",
    "#856325",
    "#963254",
    "#254563",
    "white"
  ];
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: myColors }],
      [{ background: myColors }]
    ]
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align"
  ];
    const handleProcedureContentChange = (content: any) => {
      setDescription(content);
    };
        
    return (
       <div>
        {loading && <Loader />}
        <AppBar />
         <div className="flex justify-center pt-12">
            <div className="max-w-screen-lg w-full">
                <input
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}
                    type="text"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Tiltle"
                />
            
            <div className="pt-4">
            <ReactQuill
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    value={description}
                    onChange={handleProcedureContentChange}
                  />
            <button onClick={saveBlog} className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 mt-4 hover:bg-blue-800">
           Publish post
       </button>
            </div>
        </div>
        </div>
        
        
        
       </div>
    )
}

