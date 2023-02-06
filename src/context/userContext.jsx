import { createContext, useReducer, useEffect } from "react";

export const UserContext = createContext()

export function reducer(state, action){
    switch(action.type){
        case 'LOGIN':
            return {
                user: action.payload.email,
                token: action.payload.token,
            }
        case 'LOGOUT':
            return {
                user: null,
                token: null,
            }
        default:
            return state
    }
}

export function UserContextProvider({children}){

    const [state, dispatch] = useReducer(reducer, {
        user: '',
        token: ''
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            dispatch({
                type: 'LOGIN',
                payload: user
            })
        }
    }, [])

    console.log(state)

    return <UserContext.Provider value={{...state, dispatch}}>
        {children}
    </UserContext.Provider>
}