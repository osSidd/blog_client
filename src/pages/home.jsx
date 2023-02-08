import useBlogsContext from "../hooks/useBlogContext"
import useBlogsFetch from "../hooks/useBlogsFetch"

import BlogComponent from "../components/blogComponent"
import Loading from '../components/loading'

export default function Home(){

    useBlogsFetch()
    const {blogs} = useBlogsContext()
    
    return (
        <div className=" min-h-screen px-4 md:px-20 py-10">
            {blogs ? blogs.map(blog => {
                return (
                    <div key={blog._id} className="shadow-lg w-8/12">
                        <BlogComponent 
                            blog={blog} 
                            specific={false}
                        />
                    </div>
                )
            }): <Loading/>}
        </div>
    )
}