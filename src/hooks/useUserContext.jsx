import { useContext } from "react";
import {UserContext} from '../context/userContext'

export function useUserContext(){
    const context = useContext(UserContext)

    if(!context){
        throw new Error('cannot use user context outside of user context provider')
    }

    return context
}