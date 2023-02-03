import { createContext, useReducer, useState } from "react";

export const BlogsContext = createContext()

export const BlogsContextProvider = ({children}) => {

    function reducer(state, action){
        switch(action.type){
            case 'SET_BLOGS':
                return {
                    ...state,
                    blogs: action.payload,
                }
            
            case 'SET_BLOG_COMMENTS':
                return {
                    ...state,
                    comments: action.payload.comments,
                    blog:action.payload.blog
                }
            
            case 'ADD_COMMENT':
                return {
                    ...state,
                    comments:[action.payload, ...state.comments]
                }

            default:
                return state
        }
    }

    const [blogsData, dispatch] = useReducer(reducer, {
        blogs:[],
        comments:[],
        blog:{}
    })

    return (
        <BlogsContext.Provider value={{...blogsData, dispatch}}>
            {children}
        </BlogsContext.Provider>
    )
}