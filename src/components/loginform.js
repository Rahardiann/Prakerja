import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginImage from "../assets/logo.png";

export default function LoginForm() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="bg-abu min-h-screen flex items-center justify-center">
      <div className="bg-custom-grey rounded-lg shadow-2xl p-8 w-full md:w-96">
        <img src={loginImage} alt="Login" className="mb-6 mx-auto max-w-36" />
        <h2 className="text-center mb-8 text-md text-gray-400">
          Masuk Ke akun utama anda
        </h2>

        {/* Username Input */}
        <div className="relative mb-4">
          <h2 className="text-left text-md text-gray-400">ID</h2>
          <input
            type="number"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
            className="w-full p-2 pl-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
          />
        </div>

        {/* Password Input */}
        <div className="relative  mb-6">
          <h2 className="text-left text-md text-gray-400">Password</h2>
          <div className="flex items-center border border-gray-300 rounded-lg bg-white">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
              className="w-full p-2  focus:outline-none"
            />
            <button
              type="button"
              onClick={handleTogglePassword}
              className="pr-2"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 text-white font-bold bg-biru rounded-full hover:bg-gray-300 focus:outline-none focus:shadow-outline-gray"
        >
          Masuk
        </button>
      </div>
    </div>
  );
}