import { Link } from "react-router-dom"

export default function ErrorPage(){
    return(
        <div className="text-center">
            404 Error, go to <Link className="text-blue-500" to="/">Home</Link>
        </div>
    )
}