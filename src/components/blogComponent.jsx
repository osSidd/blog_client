import { useNavigate } from "react-router-dom"
import {formatDistanceToNow} from 'date-fns'

export default function BlogComponent({blog, specific}){
    const navigate = useNavigate()

    function handleClick(e){
        navigate('/blog/'+ blog._id)
    }

    return (
        <div 
            className="py-4 pl-4 pr-0">
            <div 
                onClick={specific? () => {} : handleClick}
            >
                <h2 className="text-2xl my-4 font-semibold">{blog.title}</h2>
                <span className="text-slate-500">
                    {formatDistanceToNow(new Date(blog.createdAt), {addSuffix: true})}
                </span>
                <p className="w-8/12 my-4">{blog.snippet}</p>
                {specific && <p className="my-4 text-lg">{blog.body}</p>}
            </div>
        </div>
    )
}