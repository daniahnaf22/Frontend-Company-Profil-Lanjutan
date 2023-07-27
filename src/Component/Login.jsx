import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-200 to-teal-800">
        <div className="bg-white w-80 p-8 shadow-md rounded-md">
          <h2 className="text-xl font-bold mb-4">Login</h2>
          <form onSubmit={Auth}>
            <p className="has-text-centered">{msg}</p>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="controls">
                <input
                  type="text"
                  placeholder="email"
                  className="input w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="controls">
                <input
                  type="password"
                  placeholder="********"
                  className="input w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Log in
            </button>
          </form>
          <p className="text-gray-700 mt-4">
            Sudah punya akun?{" "}
            <a href="/register" className="text-teal-500 font-medium">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
