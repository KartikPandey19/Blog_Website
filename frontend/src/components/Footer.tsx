import { Link } from "react-router-dom"

export const Footer = () => {

    return <div className="flex justify-center border-t py-5">
        <div>
            Made With ❤️ by @<Link to="https://github.com/KartikPandey19">Kartik Pandey</Link>
        </div>
    </div>
}