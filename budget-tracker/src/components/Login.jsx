import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/dashboard");
    } else {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-200 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white/80 backdrop-blur-md p-10 rounded-xl shadow-2xl w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-black flex items-center justify-center gap-2">
          <span>🔐</span> Welcome Back
        </h2>

        {/* Email */}
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

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-indigo-400 relative">
            <span className="mr-2 text-xl">🔑</span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
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

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold shadow-md transition-all"
        >
          ▶️ Login
        </button>

        {/* Sign Up Prompt */}
        <p className="text-center text-sm text-gray-700">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-600 font-medium hover:underline">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
