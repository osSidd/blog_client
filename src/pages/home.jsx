import useBlogsContext from "../hooks/useBlogContext"
import useBlogsFetch from "../hooks/useBlogsFetch"

import BlogComponent from "../components/blogComponent"

export default function Home(){

    useBlogsFetch()
    const {blogs} = useBlogsContext()
    
    return (
        <div className="mt-10">
            {blogs && blogs.map(blog => {
                return (
                    <BlogComponent 
                        key={blog._id} 
                        blog={blog} 
                        specific={false}
                    />
                )
            })}
        </div>
    )
}