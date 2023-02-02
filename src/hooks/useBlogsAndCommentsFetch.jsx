import { useState, useEffect } from "react";
import useBlogsContext from "../hooks/useBlogContext"

export default function useBlogsAndComments(id){

    const [comments, SetComments] = useState([])

    const {blogs} = useBlogsContext()

    useEffect(() => {
        async function fetchComments(){
         
         const response = await fetch(import.meta.env.VITE_URL+id+'/comments')
         const json = await response.json()

         if(response.ok){
           SetComments(json)
         }
        }
        fetchComments()
    }, [])

    const blog = blogs.find(blog => blog._id === id)

    return {blog, comments}
}