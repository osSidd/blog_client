import {BrowserRouter, Routes, Route , Navigate} from 'react-router-dom'

import Home from "./pages/home"
import SpecificBlog from './pages/specificBlog'
import ErrorPage from './pages/error'
import Signup from './pages/signupPage'
import Login from './pages/loginPage'
import Navbar from './components/navbar'

import { useUserContext } from './hooks/useUserContext'

function App() {

  const { user } = useUserContext()

  return(
    <div>
      <BrowserRouter>
        <Navbar/>
        <div className=''>
          <Routes>
            <Route path="/" element={user ? <Home/> : <Navigate to="/login"/>}/>
            <Route path='/:id' element={user ? <SpecificBlog/> : <Navigate to="/login"/>}/>
            <Route path="/signup" element={!user ? <Signup/> : <Navigate to="/"/>}/>
            <Route path="/login" element={!user ? <Login/> : <Navigate to="/"/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
