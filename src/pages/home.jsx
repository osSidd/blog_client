import useBlogsContext from "../hooks/useBlogContext"
import useBlogsFetch from "../hooks/useBlogsFetch"

import BlogComponent from "../components/blogComponent"
import Loading from '../components/loading'

export default function Home(){

    useBlogsFetch()
    const {blogs} = useBlogsContext()
    
    return (
        <div className="px-4 md:px-20 py-10 grid md:grid-cols-3 gap-10 items-start min-h-screen">
            {blogs ? blogs.map(blog => {
                return (
                    <div key={blog._id} className="shadow-lg transition-shadow ease-in-out duration-300 hover:shadow-2xl rounded-xl bg-white">
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