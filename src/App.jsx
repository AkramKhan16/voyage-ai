
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Explore from './pages/Explore'
import Register from './pages/Register'
import Login from './pages/Login'
import Results from './pages/Results'
import ProtectedRoute from "./components/ProtectedRoute";
import MyTrips from "./pages/MyTrips";

const App = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout/>} >
      <Route index element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/explore' element={<ProtectedRoute><Explore/></ProtectedRoute>}/>
      <Route path='/results' element={<ProtectedRoute><Results/></ProtectedRoute>}/>
      <Route path='/results/:id' element={<ProtectedRoute><Results/></ProtectedRoute>}/>
      <Route path="/my-trips" element={<ProtectedRoute><MyTrips /></ProtectedRoute>}/>
      </Route>
    </Routes>

    </BrowserRouter>
      
  )
}

export default App
