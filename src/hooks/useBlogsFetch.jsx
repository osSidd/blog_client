import { useEffect } from "react";
import useBlogsContext from "./useBlogContext";

export default function useBlogsFetch(){

    const {dispatch} = useBlogsContext()

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
                        type: 'SET_BLOGS',
                        payload: json
                    })
                }
            }catch(err){
                console.log(err.message)
            }
        }

        fetchBlogs()
    }, [])
}