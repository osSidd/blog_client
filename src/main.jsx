import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import  { BlogsContextProvider }  from './context/blogsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlogsContextProvider>
      <App/>
    </BlogsContextProvider>
  </React.StrictMode>,
)
