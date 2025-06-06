import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Store user data (email & password) in localStorage
    const newUser = { email, password };
    localStorage.setItem("registeredUser", JSON.stringify(newUser));

    alert("Account created successfully ✅");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-yellow-200 px-4">
      <form
        onSubmit={handleSignup}
        className="bg-white/80 backdrop-blur-md p-10 rounded-xl shadow-2xl w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-black flex items-center justify-center gap-2">
          <span>📝</span> Create Account
        </h2>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-indigo-400">
            <span className="mr-2 text-xl">📧</span>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full focus:outline-none text-gray-800"
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-indigo-400 relative">
            <span className="mr-2 text-xl">🔑</span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full focus:outline-none text-gray-800 pr-6"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-xl cursor-pointer"
              title={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold shadow-md transition-all"
        >
          ✅ Sign Up
        </button>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-medium hover:underline">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
