import useBlogsContext from "../hooks/useBlogContext"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

import BlogComponent from "../components/blogComponent"

export default function SpecificBlog(){

    const {blogs, dispatch} = useBlogsContext()
    const params = useParams()
    const id = params.id

    useEffect(() => {
        const fetchBlogs = async() => {
            try{
                const response = await fetch(import.meta.env.VITE_URL+id)
                const json = await response.json()

                if (!response.ok){
                    console.log('error fetching')
                }

                if(response){
                    dispatch({
                        type: 'SET_A_BLOG',
                        payload: json
                    })
                }
            }catch(err){
                console.log(err.message)
            }

            return () => {
                console.log('cleanup')
            }
        }

        fetchBlogs()
    }, [])

    console.log(blogs)
    return(
        <div>
            Hi there
            <BlogComponent 
                key={blogs[0]._id} 
                blog={blogs[0]} 
                specific={true}
            />
        </div>
    )
}