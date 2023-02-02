import { useState } from "react"
import useBlogsContext from "../hooks/useBlogContext"

export default function CommentForm({id}){
    const {blogs, dispatch} = useBlogsContext()

    const [formData, setFormData] = useState({
        text: '',
        author: ''
    })

    function handleChange(e){
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name] : value,
        }))
    }

    async function submitForm(e){
        e.preventDefault()
        const response = await fetch(import.meta.env.VITE_URL+id, {
            method: "PATCH",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(!response.ok)
            console.log('error')
        if(response){
           const json = fetchBlogs()
           dispatch({
            type: 'SET_ALL_BLOGS',
            payload: json,
           })
        }
    }

    async function fetchBlogs(){
        const response = await fetch(import.meta.env.VITE_URL)
        const json = await response.json()
        if(response)
            return json;
        else
            throw new Error('error')
    }

    return(
        <form onSubmit={submitForm}>
            <label htmlFor="text">comment:</label>
            <input 
                type="text" 
                name="text" 
                onChange={handleChange} 
                id="text"
                placeholder="Comment"
                value={formData.text}
            />

            <label htmlFor="author">author:</label>
            <input 
                type="text" 
                name="author" 
                onChange={handleChange} 
                id="author"
                placeholder="Author"
                value={formData.author}
            />

            <button type="submit">post comment</button>
        </form>
    )
}