import useBlogsContext from "../hooks/useBlogContext"
import useBlogsFetch from "../hooks/useBlogsFetch"

import BlogComponent from "../components/blogComponent"

export default function Home(){

    useBlogsFetch()
    const {blogs} = useBlogsContext()
    
    return (
        <div className="bg-gray-100 px-20 py-10 flex items-start gap-10 min-h-screen">
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