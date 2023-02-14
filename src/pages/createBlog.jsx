import useBlogPost from "../hooks/useBlogPost"
import TextEditor from "../components/editor"

export default function CreateBlog(){

    const {formData, handleSubmit, handleChange} = useBlogPost()

    return (
      <div  className='w-11/12 m-auto mr-auto'>
        <h1 className='my-8 text-3xl font-semibold'>Create Blog</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title" className='block mb-2 font-semibold'>Title:</label>
          <input type="text" name="title" id="title" className='block border border-gray-500 w-full px-1 py-2 rounded-md outline-none mb-4' placeholder='Blog Title:' value={formData.title} onChange={handleChange}/>

          <label htmlFor="snippet" className='block mb-2 font-semibold'>Snippet:</label>
          <input type="text" name="snippet" id="snippet" className='block border border-gray-500 w-full px-1 py-2 rounded-md outline-none mb-4' placeholder='Blog Snippet:' value={formData.snippet} onChange={handleChange}/>

          <label htmlFor="body" className='block mb-2 font-semibold'>Body:</label>
          <textarea name="body" className="hidden" id="body" cols="30" rows="10"></textarea>
          <TextEditor/>
          
          <button className='bg-teal-700 text-white py-2 px-8 my-8 font-semibold' type='submit'>Post Blog</button>
        </form>
        </div>
    )
}

