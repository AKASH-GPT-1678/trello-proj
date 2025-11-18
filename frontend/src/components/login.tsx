import React, { useState } from "react";

export default function Auth() {
  const [mode, setMode] = useState("login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setMode("login");
    const loginData = {
      email: formData.email,
      password: formData.password
    }
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    console.log(response);
    const data = await response.json();
    return data

  };
  const handleRegister = async () => {
    setMode("register");

    const registerData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });

    console.log(response);

    const data = await response.json();
    return data;
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (mode === "login") {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white border rounded-2xl shadow p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {mode === "login" ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {mode === "register" && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded-xl p-2 w-full outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-xl p-2 w-full outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border rounded-xl p-2 w-full outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white rounded-xl py-2 w-full hover:bg-blue-700 transition"
          >
            {mode === "login" ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          {mode === "login" ? (
            <>Don't have an account? <span onClick={() => setMode("register")} className="text-blue-600 cursor-pointer">Register</span></>
          ) : (
            <>Already have an account? <span onClick={() => setMode("login")} className="text-blue-600 cursor-pointer">Login</span></>
          )}
        </p>
      </div>
    </div>
  );
}