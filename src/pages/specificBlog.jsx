import useComments from "../hooks/useCommentsFetch"

import { useParams } from "react-router-dom"

import BlogComponent from "../components/blogComponent"
import Comments from '../components/comments'
import CommentForm from '../components/commentForm'

export default function SpecificBlog(){

    const params = useParams()
    const id = params.id

    const {blog, comments} = useComments(id)

    console.log('specific')

    return(
        <div>
            {blog &&
            <div className="px-20">
                <BlogComponent 
                    key={blog._id} 
                    blog={blog} 
                    specific={true}
                />
                {(comments.length > 0) && 
                    <div className="flex justify-evenly mt-12 items-start ml-8">
                        <Comments comments={comments}/>
                        <CommentForm id={blog._id}/>
                </div>}
            </div>
            }
        </div>
    )
}