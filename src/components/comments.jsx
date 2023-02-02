export default function Comments({blog}){
    return 
        (
        <div className="mt-8 p-4 w-6/12">
            <h2 className="text-xl font-bold mb-4">Comments</h2>
            {blog.comments.map(comment => {
            return (
                <div className="border-gray-500 border-b mb-5 pb-2">
                    <p>{comment.text}</p>
                    <div>
                        <span className="text-gray-500 text-sm">{comment.author}</span>
                        <span className="ml-6 text-sm text-gray-400">{formatDistanceToNow(new Date(comment.createdAt), {addSuffix: true})}</span>
                    </div>
                </div>
                )
            })
            }
                
        </div>
    )
}