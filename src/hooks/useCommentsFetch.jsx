import { useEffect } from "react";
import useBlogsContext from "./useBlogContext"

export default function useComments(id){

    const {dispatch} = useBlogsContext()

    useEffect(() => {
        async function fetchComments(){
         
         const response = await fetch(import.meta.env.VITE_URL+id+'/comments')
         const json = await response.json()

         if(response.ok){
           dispatch({
            type: 'SET_BLOG_COMMENTS',
            payload: json,
           })
         }         
        }
        fetchComments()
    }, [])
}