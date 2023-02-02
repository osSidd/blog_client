import { createContext, useReducer, useState } from "react";

export const BlogsContext = createContext()

export const BlogsContextProvider = ({children}) => {

    function reducer(state, action){
        switch(action.type){
            case 'SET_ALL_BLOGS':
                return action.payload
            default:
                return state
        }
    }

    const [blogs, dispatch] = useReducer(reducer, [])

    return (
        <BlogsContext.Provider value={{blogs, dispatch}}>
            {children}
        </BlogsContext.Provider>
    )
}