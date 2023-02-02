import useBlogsContext from "../hooks/useBlogContext"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

import BlogComponent from "../components/blogComponent"
import Comments from '../components/comments'
import CommentForm from '../components/commentForm'

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
    console.log(blogs)
    const params = useParams()
    const id = params.id

    const blog = blogs.find(blog => blog._id === id)

    return(
        <div>
            {blog &&
            <div>
                <BlogComponent 
                    key={blog._id} 
                    blog={blog} 
                    specific={true}
                />
                {(blog.comments.length > 0) && 
                    <div className="flex justify-between items-start">
                        <Comments blog={blog}/>
                        <CommentForm id={blog._id}/>
                    </div>}
            </div>
            }
        </div>
    )
}