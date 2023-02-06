import { useUserContext } from "./useUserContext";

export default function useLogout(){
    const {dispatch} = useUserContext()

    const logout = () => {
        dispatch({
            type: 'LOGOUT'
        })

        localStorage.removeItem('user')
    }

    return logout
}