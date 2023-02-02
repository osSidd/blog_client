import useCommentPost from "../hooks/useCommentPost";

export default function CommentForm({id}){

    const {formData, handleChange, submitForm} = useCommentPost(id)
 
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