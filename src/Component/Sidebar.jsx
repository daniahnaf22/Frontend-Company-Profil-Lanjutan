import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  IoPerson,
  IoPricetag,
  IoHome,
  IoTv,
  IoFileTrayFull,
  IoChevronDown,
  IoServerOutline,
  IoBookOutline,
} from "react-icons/io5";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  return (
    <div>
      <aside className="menu pl-2 has-shadow text-white">
        <div className="w-36 rounded mb-5 mt-5">
          <img src="../Image/Logo_of_the_Ministry_of_Health_of_the_Republic_of_Indonesia_dark_theme.svg" />
        </div>

        <div className={open ? "sidebar-item open" : "sidebar-item"}>
          <div className="flex sidebar-title">
            <span className="flex ">
              <IoServerOutline />
              <p className="text-[15px]">Data Master</p>
            </span>
            <IoChevronDown
              className="togle-btn "
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="sidebar-content">
            {" "}
            <ul className="menu-list">
              <li>
                <NavLink to={"/dashboard"}>
                  <IoHome /> Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink to={"/blog"}>
                  <IoPricetag /> Blog
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>
                  <IoTv /> Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to={"/users"}>
                  <IoFileTrayFull />
                  Pengguna
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
