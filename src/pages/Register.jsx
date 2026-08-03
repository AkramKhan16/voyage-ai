import React, { useState } from 'react'
import { registerUser } from "../services/authApi";
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const Register = () => {
  const [userData, setUserData] = useState({name: "", email: "", password: ""});
  const navigate = useNavigate();

  const handleChange=(e)=>{
        setUserData(prev=>({ ...prev,[e.target.name]:e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(userData);
      console.log(response.data);
      toast.success("Registration Successful 🎉");
    } catch (error) {
      console.log(error.response?.data);
      toast.error(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-sky-700">
          VoyageAI
        </h1>
        <p className="text-center text-gray-500 mt-2">
          Create your account
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="text-gray-700 font-medium">
              Full Name
            </label>
            <input type="text" name="name" value={userData.name} onChange={handleChange}
              placeholder="Enter your name" className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"/>
          </div>

          <div>
            <label className="text-gray-700 font-medium">
              Email
            </label>
            <input type="email" name="email" value={userData.email} onChange={handleChange}
              placeholder="Enter your email" className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"/>
          </div>

          <div>
            <label className="text-gray-700 font-medium">
              Password
            </label>
            <input type="password" name="password" value={userData.password} onChange={handleChange}
              autoComplete="new-password" placeholder="Enter your password"
              className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500" />
          </div>

          <button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-xl transition duration-300">
            Register
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?
          <Link to="/login"  className="text-sky-600 font-semibold hover:underline ml-1">
            Login
          </Link>
        </p>

      </div>

    </div>
  )
}

export default Register
