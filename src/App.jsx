import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from "./pages/home"
import SpecificBlog from './pages/specificBlog'
import ErrorPage from './pages/error'
import Signup from './pages/signupPage'
import Login from './pages/loginPage'
import Navbar from './components/navbar'

function App() {
  return(
    <div>
      <BrowserRouter>
        <Navbar/>
        <div className=''>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/:id' element={<SpecificBlog/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
