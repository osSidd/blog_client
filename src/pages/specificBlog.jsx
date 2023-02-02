import useBlogsContext from "../hooks/useBlogContext"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

import BlogComponent from "../components/blogComponent"

export default function SpecificBlog(){

    const {blogs, dispatch} = useBlogsContext()

    useEffect(() => {
        async function fetchBlogs(){
            try{
                const response = await fetch(import.meta.env.VITE_URL)
                const json = await response.json()

                if (!response.ok){
                    console.log('error fetching')
                }

                if(response){
                    dispatch({
                        type: 'SET_ALL_BLOGS',
                        payload: json
                    })
                }
            }catch(err){
                console.log(err.message)
            }
        }
        if(blogs.length === 0){
            fetchBlogs()
            console.log('specific')
        }
    }, [])

    const params = useParams()
    const id = params.id

    const blog = blogs.find(blog => blog._id === id)

    return(
        <div>
            {blog &&
            <BlogComponent 
                key={blog._id} 
                blog={blog} 
                specific={true}
            />}
        </div>
    )
}