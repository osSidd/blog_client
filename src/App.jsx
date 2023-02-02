import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from "./pages/home"
import SpecificBlog from './pages/specificBlog'

function App() {
  return(
    <div className='w-11/12'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/:id' element={<SpecificBlog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
