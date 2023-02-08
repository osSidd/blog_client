import useComments from "../hooks/useCommentsFetch"
import useBlogsContext from "../hooks/useBlogContext"
import { useUserContext } from "../hooks/useUserContext"

import { useParams } from "react-router-dom"

import BlogComponent from "../components/blogComponent"
import Comments from '../components/comments'
import CommentForm from '../components/commentForm'

export default function SpecificBlog(){

    const params = useParams()
    const id = params.id

    useComments(id)
    const {blog, comments} = useBlogsContext()
    const {user} = useUserContext()


    return(
        <div>
            {blog._id &&
            <div className="p-4 md:px-20">
                <BlogComponent 
                    key={blog._id} 
                    blog={blog} 
                    specific={true}
                />
                 <div className="flex justify-evenly mt-12 items-start flex-col-reverse lg:flex-row">
                    {user ? (comments.length > 0) && <Comments comments={comments}/> : <div className="text-lg font-semibold">
                            Log in to view and post comments
                        </div>}
                    {user && <CommentForm id={blog._id}/>}
                </div>
            </div>
            }
        </div>
    )
}