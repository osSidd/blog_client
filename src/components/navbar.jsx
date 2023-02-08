import { Link } from "react-router-dom"
import {useUserContext} from '../hooks/useUserContext'
import useLogout from "../hooks/useLogout"

export default function Navbar(){

    const {user} = useUserContext()
    const logout = useLogout()

    return (
        <div className="flex items-center justify-between py-8 px-6 mb-2 flex-col md:flex-row">
            <div className='text-3xl font-semibold'>
                <Link to="/">Jamstack Blogging Site</Link>
            </div>
            <div className="border-b border-black pb-1 w-9/12 md:w-3/12 flex">
                <input type="search" className="w-full outline-none" placeholder="Search Blogs"/>
            </div>
            {user? <div className="flex items-center text-sm">
                <span>{user}</span>
                <button className="btn ml-8" onClick={logout}>log out</button>
            </div>:
            <nav>
                <div className="mt-5 md:mt-0 uppercase font-semibold text-sm">
                    <Link to="/login" className="text-red-500">Log in</Link>
                    <Link to="/signup" className="ml-5 text-red-500">Sign up</Link>
                </div>
            </nav>}
        </div>
    )
}