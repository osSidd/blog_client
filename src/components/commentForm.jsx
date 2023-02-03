import useCommentPost from "../hooks/useCommentPost";

export default function CommentForm({id}){

    const {formData, handleChange, submitForm} = useCommentPost(id)
 
    return(
        <form onSubmit={submitForm} className="w-10/12 mb-10 md:w-5/12 mt-5">
            <label htmlFor="text">Comment:</label>
            <textarea 
                type="text" 
                name="text" 
                onChange={handleChange} 
                id="text"
                placeholder="Comment"
                value={formData.text}
                className="block w-full border-2 border-gray-400 p-2 rounded-xl mb-4 mt-2 resize-none"
                required={true}
            ></textarea>

            <label htmlFor="author">Author:</label>
            <input 
                type="text" 
                name="author" 
                onChange={handleChange} 
                id="author"
                placeholder="Author"
                value={formData.author}
                className="block w-full p-2 mt-2 border-2 border-gray-400 rounded-xl"
                required={true}
            />

            <button type="submit" className="bg-teal-500 text-white p-2 rounded-md mt-8">Post comment</button>
        </form>
    )
}