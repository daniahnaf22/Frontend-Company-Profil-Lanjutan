import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./Component/LandingPage/Landingpage";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Dashboard from "./pages/Dashboard";
import Blogs from "./pages/Blogs";
import Contacts from "./pages/Contacts";
import Users from "./pages/Users";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";
import AddUser from "./pages/AddUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/add" element={<AddBlog />} />
        <Route path="/blog/edit/:id" element={<EditBlog />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/contact/add" element={<AddContact />} />
        <Route path="/contact/edit/:id" element={<EditContact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/add" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
