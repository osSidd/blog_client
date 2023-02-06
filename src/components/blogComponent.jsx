import { useNavigate } from "react-router-dom"
import {formatDistanceToNow} from 'date-fns'

export default function BlogComponent({blog, specific}){
    const navigate = useNavigate()

    function handleClick(e){
        navigate('/'+ blog._id)
    }

    return (
        <div 
            className="my-2 mr-auto ml-auto py-4 px-6">
            <div 
                onClick={specific? () => {} : handleClick}
            >
                <h1 className="text-2xl my-4">{blog.title}</h1>
                <span className="text-slate-500">
                    {formatDistanceToNow(new Date(blog.createdAt), {addSuffix: true})}
                </span>
                <p className="w-8/12 my-4">{blog.snippet}</p>
                {specific && <p className="my-4 text-lg">{blog.body}</p>}
            </div>
        </div>
    )
}