import { useEffect } from "react";
import useBlogsContext from "./useBlogContext"

export default function useComments(id){

    const {blogs,comments, dispatch} = useBlogsContext()

    async function fetchBlogs(){
      const response = await fetch(import.meta.env.VITE_URL)
      const json = await response.json()

      if(response.ok){
        dispatch({
          type: 'SET_BLOGS',
          payload: json
        })
      }
    }

    useEffect(() => {
        async function fetchComments(){
         
         const response = await fetch(import.meta.env.VITE_URL+id+'/comments')
         const json = await response.json()

         if(response.ok){
           dispatch({
            type: 'SET_COMMENTS',
            payload: json,
           })
         }

         if(!blogs.length){
            fetchBlogs()
         }
         
        }
        fetchComments()
    }, [])

    const blog = blogs.find(blog => blog._id === id)

    return {blog, comments}
}