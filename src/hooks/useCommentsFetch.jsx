import { useEffect } from "react";
import useBlogsContext from "./useBlogContext"
import { useUserContext } from "./useUserContext";

export default function useComments(id){

    const {dispatch} = useBlogsContext()
    const {token} = useUserContext()

    useEffect(() => {
        async function fetchComments(){
         
         const response = await fetch(import.meta.env.VITE_URL+id+'/comments', {
          headers:{
            'Authorization': `Bearer ${token}`
          }
         })
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