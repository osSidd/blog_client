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
        try{
            const response = await fetch(import.meta.env.VITE_URL+id, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json()

            if(!response.ok)
                console.log('error')
                
            if(response.ok){
                dispatch({
                    type: "CREATE_A_COMMENT",
                    payload:{
                        blog: json.blog,
                        comment: json.comment,
                    }
                })
                setFormData({
                    text: '',
                    author: ''
                })
            }
        }catch(err){
            console.log(err.message)
        }
    }

    return(
        <form onSubmit={submitForm} className="p-4 w-5/12 mt-5 shadow-xl bg-gray-100 rounded-lg">
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