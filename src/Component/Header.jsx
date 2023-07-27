/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
import {
  IoPerson,
  IoPricetag,
  IoHome,
  IoLogOut,
  IoArrowDown,
  IoArrowForward,
  IoArrowDownCircle,
  IoCaretDown,
} from "react-icons/io5";

export default function Header() {
  return (
    <div>
      <div className="bg-white w-[1180px] h-13 shadow-lg">
        <ul className="menu-list">
          <li className="flex justify-end mr-8">
            <div className="dropdown dropdown-end flex">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                <div className="w-10 rounded-full">
                  <img
                    src="../Image/non-pegawai-kemenkes-ilustrasition.png"
                    className="w-10"
                  />
                </div>
              </label>

              <div className="flex justify-center items-center">
                <IoCaretDown />
              </div>

              <ul
                tabIndex={0}
                className="mt-16 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>

                <li>
                  <a>Settings</a>
                </li>

              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
