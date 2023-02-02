import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from "./pages/home"
import SpecificBlog from './pages/specificBlog'

function App() {
  return(
    <div>
      <BrowserRouter>
        <div className='text-5xl font-bold px-6 py-10'>
          <h1>Blogs</h1>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/:id' element={<SpecificBlog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
