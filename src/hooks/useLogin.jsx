import { useState } from "react"

export default function useLogin(){
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }
    
    async function submitForm(e){
        e.preventDefault()
        try{
            const response = await fetch(import.meta.env.VITE_USER_URL+'login', {
                method: "POST",
                body: JSON.stringify(formData),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const json = await response.json()

            if(!response.ok){
                console.log(json.error)
            }

            if(response.ok){
                console.log(json)
            }
        }catch(err){
            console.log(err.message)
        }
    }

    return {
        formData,
        handleChange,
        submitForm
    }
}