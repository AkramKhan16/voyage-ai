import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">

        <Link to="/" className="text-2xl font-bold text-blue-600">
          VoyageAI
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-blue-600"
        >
          ☰
        </button>

        <div className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-6 md:p-0 gap-6 md:gap-8 items-center`}>

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/explore" onClick={() => setMenuOpen(false)}>
            Explore
          </Link>

          <Link to="/my-trips" onClick={() => setMenuOpen(false)}>
            My Trips
          </Link>

          {user ? (
            <>
              <span className="font-semibold text-sky-700 text-center">
                Hello, {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 w-full md:w-auto"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="border px-4 py-2 rounded-lg w-full md:w-auto text-center"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="bg-sky-600 text-white px-4 py-2 rounded-lg w-full md:w-auto text-center"
              >
                Register
              </Link>
            </>
          )}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;