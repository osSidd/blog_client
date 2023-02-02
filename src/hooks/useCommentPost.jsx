import useBlogsContext from "../hooks/useBlogContext"
import { useState } from "react";

export default function useCommentPost(id){

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

    function submitForm(e){
        e.preventDefault()
        postComment()
    }
    
    async function postComment(){
        try{
            const response = await fetch(import.meta.env.VITE_URL+id+"/comments", {
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
                    type: "ADD_COMMENT",
                    payload: json
                })
                setFormData({
                    text:'',
                    author:''
                })
            }
        }catch(err){
            console.log(err.message)
        }
    }

    return{
        handleChange,
        formData,
        submitForm,
    }
}