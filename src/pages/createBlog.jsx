import useBlogPost from "../hooks/useBlogPost"
import { Editor } from '@tinymce/tinymce-react';

import TextEditor from "../components/editor"

export default function CreateBlog(){

    const {formData, handleSubmit, handleChange, editorRef} = useBlogPost()

    return (
      <div  className='w-11/12 m-auto mr-auto'>
        <h1 className='my-8 text-3xl font-semibold'>Create Blog</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title" className='block mb-2 font-semibold'>Title:</label>
          <input type="text" name="title" id="title" className='block border border-gray-500 w-full px-1 py-2 rounded-md outline-none mb-4' placeholder='Blog Title:' value={formData.title} onChange={handleChange}/>

          <label htmlFor="snippet" className='block mb-2 font-semibold'>Snippet:</label>
          <input type="text" name="snippet" id="snippet" className='block border border-gray-500 w-full px-1 py-2 rounded-md outline-none mb-4' placeholder='Blog Snippet:' value={formData.snippet} onChange={handleChange}/>

          <div>
            <Editor
              apiKey={import.meta.env.VITE_KEY}
              onInit={(evt, editor) => editorRef.current = editor}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
              height: 500,
              menubar: true,
              selector:'#body',
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

