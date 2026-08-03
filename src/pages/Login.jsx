import React, { useState } from "react";
import { loginUser } from "../services/authApi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({email: "",password: "",});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,[e.target.name]: e.target.value,}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

        const response = await loginUser(userData);
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem(
            "user",
            JSON.stringify(response.data.user)
        );

        dispatch(
            login({
                user: response.data.user,
                token: response.data.token,
            })
        );
        toast.success("Welcome Back!");
        navigate("/");
    } catch (error) {
        toast.error(error.response?.data?.message || "Login Failed");
    }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-sky-700">
          VoyageAI
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Welcome Back
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          <div>
            <label className="text-gray-700 font-medium">
              Email
            </label>

            <input type="email" name="email" value={userData.email} onChange={handleChange}
              autoComplete="email" placeholder="Enter your email" className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"/>
          </div>

          <div>
            <label className="text-gray-700 font-medium">
              Password
            </label>

            <input type="password" name="password" value={userData.password} onChange={handleChange}
              autoComplete="current-password" placeholder="Enter your password" className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"/>
          </div>

          <button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-xl transition">
            Login
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?
          <Link to="/register" className="text-sky-600 font-semibold hover:underline ml-1">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;