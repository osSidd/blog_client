import useComments from "../hooks/useCommentsFetch"
import useBlogsContext from "../hooks/useBlogContext"

import { useParams } from "react-router-dom"

import BlogComponent from "../components/blogComponent"
import Comments from '../components/comments'
import CommentForm from '../components/commentForm'

export default function SpecificBlog(){

    const params = useParams()
    const id = params.id

    useComments(id)
    const {blog, comments} = useBlogsContext()

    return(
        <div>
            {blog._id &&
            <div className="p-4 md:px-20">
                <BlogComponent 
                    key={blog._id} 
                    blog={blog} 
                    specific={true}
                />
                {(comments.length > 0) && 
                    <div className="flex justify-evenly mt-12 items-start flex-col-reverse lg:flex-row">
                        <Comments comments={comments}/>
                        <CommentForm id={blog._id}/>
                </div>}
            </div>
            }
        </div>
    )
}