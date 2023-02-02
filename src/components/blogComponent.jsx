import { useNavigate } from "react-router-dom"
import {formatDistanceToNow} from 'date-fns'

export default function BlogComponent({blog, specific}){

    const navigate = useNavigate()

    function handleClick(e){
        navigate('/'+ blog._id)
    }

    return (
        <div 
            onClick={specific? () => {} : handleClick}
            className="shadow-lg hover:shadow-xl transition-shadow mt-12 mb-3 w-9/12 p-4 ml-auto mr-auto bg-gray-50"
        >
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-500 mb-4">{blog.snippet}</p>
            <span className="mb-4 block text-gray-600">
                {formatDistanceToNow(new Date(blog.createdAt), {addSuffix: true})}
            </span>
            {specific && <p>{blog.body}</p>}
        </div>
    )
}