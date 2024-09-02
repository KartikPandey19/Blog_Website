import { HomeAppBar } from "../components/HomeAppBar"
import { Footer } from "../components/Footer"
import image from "../images/home_pic.jpg"
import { Link } from "react-router-dom"

export const Landing = () =>{

    return <div className="flex flex-col h-screen">
        <HomeAppBar />
            <div style={{backgroundImage:`url(${image})`,backgroundSize: 'cover',}} className="flex-1 overflow-y-auto p-5 ">
                <div className="flex justify-center pt-60 text-9xl font-bold">
                    <div>Tech & Ideas</div>
                </div>
                <div className="text-center pt-10">
                    <Link to={"/signin"}>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">Start Reading</button>
                     </Link>
                </div>
                
            </div>
           
            
        <div className="py-1 text-center ">
            <Footer />
        </div>
    </div>
}