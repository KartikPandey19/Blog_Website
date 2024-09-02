import { Link } from "react-router-dom"

export const HomeAppBar = () => {

    return <div className="border-b flex justify-between">
         <Link to={'/'}>
        <div className="flex justify-center cursor-pointer pl-12 py-4 text-xl font-bold font-mono">
            BLOGZ
        </div>
        </Link>

        <div className="py-2 pr-2">

        <Link to={"/signin"}>
        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">Sign in</button>
        </Link>
            <Link to={"/signup"}>
        <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Get Started</button>
        </Link>
        </div>
    </div>
}
