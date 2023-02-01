import { useContext } from "react"
import { BlogsContext } from "../context/blogsContext"

export default function useBlogsContext(){
    const context = useContext(BlogsContext)

    if(!context)
        throw new Error('No such context')
    else
        return context
}