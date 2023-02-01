import { useNavigate } from "react-router-dom"

export default function BlogComponent({blog, specific}){

    const navigate = useNavigate()

    function handleClick(e){
        console.log('hiel')
        navigate('/'+ blog._id)
    }

    return (
        <div onClick={specific? () => {} : handleClick}>
            <h1>{blog.title}</h1>
            <p>{blog.snippet}</p>
            {specific && <p>{blog.body}</p>}
            <span>{blog.createdAt}</span>
        </div>
    )
}