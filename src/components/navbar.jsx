import { Link } from "react-router-dom"
import {useUserContext} from '../hooks/useUserContext'
import useLogout from "../hooks/useLogout"

export default function Navbar(){

    const {user} = useUserContext()
    const logout = useLogout()

    return (
        <div className="flex flex-col md:flex-row items-center justify-between py-8 px-6 mb-8">
            <div className='text-3xl font-semibold'>
                <Link to="/">Jamstack Blogging Site</Link>
            </div>
            {user? <div className="flex items-center">
                <span>{user}</span>
                <button className="btn ml-8" onClick={logout}>log out</button>
            </div>:
            <nav>
                <div className="mt-5 md:mt-0 uppercase font-semibold">
                    <Link to="/login" className="text-red-500">Log in</Link>
                    <Link to="/signup" className="ml-5 text-red-500">Sign up</Link>
                </div>
            </nav>}
        </div>
    )
}