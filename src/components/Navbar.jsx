import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=' bg-white shadow-md' >
      <div className='max-w-7xl mx-auto flex justify-between items-center px-8 py-4'>
         <Link to="/" className="text-2xl font-bold text-blue-600">
          VoyageAI
        </Link>
      <ul className='flex gap-8 font-medium text-blue-600' >
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/explore'>Explore</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
      </ul>
      </div>
      
    </nav>
  )
}

export default Navbar
