import useBlogsContext from "../hooks/useBlogContext"
import { useEffect } from "react"

import BlogComponent from "../components/blogComponent"

export default function Home(){

    const {blogs, dispatch} = useBlogsContext()

    useEffect(() => {
        const fetchBlogs = async() => {
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

        fetchBlogs()
    }, [])

    return (
        <div className="mt-10">
            {blogs && blogs.map(blog => {
                return (
                    <BlogComponent 
                        key={blog._id} 
                        blog={blog} 
                        specific={false}
                    />
                )
            })}
        </div>
    )
}