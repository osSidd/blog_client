import { useUserContext } from "./useUserContext";
import useBlogsContext from './useBlogContext'
import { useNavigate } from "react-router-dom";

export default function useLogout(){
    const {dispatch} = useUserContext()
    const {dispatch: blogDispatch} = useBlogsContext()
    const navigate = useNavigate()

    const logout = () => {
        dispatch({
            type: 'LOGOUT'
        })

        blogDispatch({
            type: 'CLEAR_BLOG_COMMENTS'
        })

        localStorage.removeItem('user')
        navigate('/')
    }

    return logout
}