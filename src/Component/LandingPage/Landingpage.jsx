import React from "react";
import Navbar from "../Navbar";
import Home from "../Home";
import About from "../About";

import Blog from "../Blog";
import Contact from "../Contact";
import Footer from "../Footer";

export default function Landingpage() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
