import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setconfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", {
        name,
        email,
        password,
        confPassword,
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-200 to-teal-600">
        <div className="bg-white w-80 p-8 shadow-md rounded-md">
          <h2 className="text-xl font-bold mb-4">Register</h2>
          <form onSubmit={Register}>
            <p className="has-text-centered">{msg}</p>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="controls">
                <input
                  type="text"
                  className="input w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="controls">
                <input
                  type="email"
                  className="input w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Email"
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
                  className="input w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="controls">
                <input
                  type="password"
                  className="input w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="********"
                  value={confPassword}
                  onChange={(e) => setconfPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
