import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function CreateBlog(){

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

    async function handleSubmit(e){
      e.preventDefault()
      setFormData(prev => ({
        ...prev,
        body: log()
      }))
      const user = JSON.parse(localStorage.getItem('user'));

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
        console.log(json)
      }

      if(!response.ok){
        console.log(json)
      }

    }

    console.log(formData)

    return (
      <div  className='w-11/12 m-auto mr-auto'>
        <h1 className='my-8 text-3xl font-semibold'>Create Blog</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title" className='block mb-2 font-semibold'>Title:</label>
          <input type="text" name="title" id="title" className='block border border-gray-500 w-full px-1 py-2 rounded-md outline-none mb-4' placeholder='Blog Title:' value={formData.title} onChange={handleChange}/>

          <label htmlFor="snippet" className='block mb-2 font-semibold'>Snippet:</label>
          <input type="text" name="snippet" id="snippet" className='block border border-gray-500 w-full px-1 py-2 rounded-md outline-none mb-4' placeholder='Blog Snippet:' value={formData.snippet} onChange={handleChange}/>

          <label htmlFor="body" className='block mb-2 font-semibold'>Body:</label>
          <div>
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
              height: 500,
              menubar: true,
              plugins: [
                'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
                'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
                'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
              ],
              toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
                'alignleft aligncenter alignright alignjustify | ' +
                'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
              ,contentStyle: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
              }}
          />
          </div>
          <button className='bg-teal-700 text-white py-2 px-8 my-8 font-semibold' type='submit'>Post Blog</button>
        </form>
        </div>
    )
}

