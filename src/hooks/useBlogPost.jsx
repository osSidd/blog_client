import { useState, useRef } from "react";
import useBlogsContext from "./useBlogContext";

export default function useBlogPost(){
    const {dispatch} = useBlogsContext()

    const [formData, setFormData] = useState({
        title: '',
        snippet: '',
        body: ''
      })
      
    const editorRef = useRef(null);
   
    const log = () => {
      if (editorRef.current) {
        return editorRef.current.getContent();
      }
    };
      
  
    function handleChange(e){
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name] : value,
        }))
    }

    console.log(formData)

    async function postBlog(user){
        try{
            const response = await fetch(import.meta.env.VITE_URL, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify(formData)
            })
        
            const json = await response.json()
        
            if(response.ok){
                dispatch({
                    type: 'SET_BLOG_COMMENTS',
                    payload: json
                })
                setFormData({
                    title: '',
                    snippet: '',
                    body:''
                })
            }
        
            if(!response.ok){
                console.log('error')
            }
        }
        catch(err){
            console.log(err.message)
        }    
    }

    async function handleSubmit(e){
        e.preventDefault()
        setFormData(prev => ({...prev, body: log()}))
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user)
        if(user){
            postBlog(user)
        }
    }

    return {
       formData,
       handleChange,
       handleSubmit,
       editorRef
    }

}