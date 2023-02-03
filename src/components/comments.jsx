import { formatDistanceToNow } from "date-fns"

export default function Comments({comments}){
    return(
        <div className="">
            <h2 className="text-xl font-bold mb-4">Comments</h2>
            {comments.map(comment => {
            return (
                <div key={comment._id} className="border-gray-500 border rounded-2xl mb-5 p-4 w-11/12">
                    <p className="font-mono">{comment.text}</p>
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