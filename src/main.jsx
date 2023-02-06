import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import  { BlogsContextProvider }  from './context/blogsContext'
import { UserContextProvider } from './context/userContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
      <BlogsContextProvider>
        <App/>
      </BlogsContextProvider>
    </UserContextProvider>
   
)
