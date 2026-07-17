
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Explore from './pages/Explore'
import Register from './pages/Register'
import Login from './pages/Login'
import Results from './pages/Results'

const App = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout/>} >
      <Route index element={<Home/>} />
      <Route path='/explore' element={<Explore/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/results' element={<Results/>}/>
      </Route>
    </Routes>

    </BrowserRouter>
      
  )
}

export default App
