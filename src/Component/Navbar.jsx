import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar_Link } from "../style";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  //   const onContent = (value) => {
  //     const el = document.getElementById(`content${value}`)
  //     el.scrollIntoView({ block: 'end'});

  //   }

  return (
    <nav className="bg-teal-50 border-gray-200 px-2 sm:px-4 rounded dark:bg-gray-900 fixed top-0 left-0 right-0 z-50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block ">
          <a href="/">
            <div className="flex items-center">
              <img src="/public/image/lll.png" alt="" className="w-20" />
              <h1 className="text-2xl font-bold text-teal-600">LigthTech</h1>
            </div>
          </a>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-teal-300 font-bold">
                <a
                  href="#home"
                  onClick={() => {
                    window.scrollTo({ top: 100, behavior: "smooth" });
                  }}
                  className={`${Navbar_Link.Navlink_home}`}
                >
                  Home
                </a>
              </li>
              <li className="text-gray-600 hover:text-blue-600 font-bold">
                <a
                  href="#about"
                  onClick={() => {
                    window.scrollTo({ top: 600, behavior: "smooth" });
                  }}
                  className={`${Navbar_Link.navlink_all}`}
                >
                  About Us
                </a>
              </li>
              <li className="text-gray-600 hover:text-blue-600 font-bold">
                <a
                  href="#education"
                  onClick={() => {
                    window.scrollTo({ top: 1100, behavior: "smooth" });
                  }}
                  className={`${Navbar_Link.navlink_all}`}
                >
                  Blog
                </a>
              </li>
              <li className="text-gray-600 hover:text-blue-600 font-bold">
                <a
                  href="#contactUs"
                  onClick={() => {
                    window.scrollTo({ top: 1600, behavior: "smooth" });
                  }}
                  className={`${Navbar_Link.navlink_all}`}
                >
                  Contact Us
                </a>
              </li>

              <li>
                <Link to="/login">
                  <button className="btn btn-sm btn-glass bg-teal-600 normal-case">
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <button className="btn btn-sm btn-glass bg-teal-600 normal-case">
                    Register
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="fixed z-40 bottom-8 right-8 border-0 w-14 h-14 rounded-full bg-teal-500 text-white text-3xl font-bold drop-shadow-lg"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          class="w-7 h-7 ml-3.5"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
          ></path>
        </svg>
      </button>
    </nav>
  );
}
