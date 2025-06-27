"use client";
import React from "react";


const LoginPage = () => {
  const data = [
    {
      username: "admin123",
      password: "admin123",
      role: true,
    },
    {
      username: "member123",
      password: "member123",
      role: false,
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault(); // ← penting untuk mencegah reload

    // Simulasi pengecekan login
    if (data.role === true) {
      window.location.href = "/Dashboard/admin";
    } else if (data.role === false) {
      window.location.href = "/Dashboard/member";
    }
    // Jika login gagal, bisa menampilkan pesan error
    // alert("Login failed. Please check your credentials.");
    // Reset form setelah login
    e.target.reset();
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <button
          onClick={() => {
            window.location.href = "/auth/login";
          }}
          type="button"
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 transition mb-4"
        >
          Login with Google
        </button>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Email & Password Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email or Username
            </label>
            <input
              type="text"
              placeholder="Enter your email or username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="">
            belum punya akun?{" "}
            <a href="/auth/register" className="text-blue-600 hover:underline">
              Daftar disini
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
