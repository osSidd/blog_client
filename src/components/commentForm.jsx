import { useState } from "react"
import useBlogsContext from "../hooks/useBlogContext"

export default function CommentForm({id}){
    const {dispatch} = useBlogsContext()

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
        if(response.ok){
            fetchBlogs()
            setFormData({
                text: '',
                author: ''
            })
        }
    }

    async function fetchBlogs(){
        const response = await fetch(import.meta.env.VITE_URL)
        const json = await response.json()
        if(response.ok){
            dispatch({
                type: 'SET_ALL_BLOGS',
                payload: json,
            })
        }
        else
            throw new Error('error')
    }

    return(
        <form onSubmit={submitForm} className="p-4 w-5/12 mt-5 shadow-lg bg-gray-100 rounded-lg">
            <label htmlFor="text">comment:</label>
            <textarea 
                type="text" 
                name="text" 
                onChange={handleChange} 
                id="text"
                placeholder="Comment"
                value={formData.text}
                className="block w-full p-2 mb-4 mt-2"
                required={true}
            ></textarea>

            <label htmlFor="author">author:</label>
            <input 
                type="text" 
                name="author" 
                onChange={handleChange} 
                id="author"
                placeholder="Author"
                value={formData.author}
                className="block w-full p-2 mt-2"
                required={true}
            />

            <button type="submit" className="bg-teal-500 text-white p-2 rounded-md mt-8">post comment</button>
        </form>
    )
}