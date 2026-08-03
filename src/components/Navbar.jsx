import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
};

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
          <Link to="/my-trips" className="hover:text-blue-600 font-medium">
                My Trips
            </Link>
        </li>
        
      </ul>
      {user ? ( 
        <div className="flex items-center gap-4">
          <span className="font-semibold text-sky-700">
            Hello, {user.name}
            </span>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                Logout
            </button>
        </div>
    ) : (
        <div className="flex gap-4">
            <Link to="/login" className="px-4 py-2 rounded-lg border">
                Login
            </Link>

            <Link to="/register" className="px-4 py-2 rounded-lg bg-sky-600 text-white">
                Register
            </Link>

            
        </div>
    )
}
      </div>
</nav>
  )
}

export default Navbar
