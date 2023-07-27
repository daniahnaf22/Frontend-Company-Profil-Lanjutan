import React from "react";
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div
        className="flex flex-row bg-[#f1f3f5] h-screen w-screen overflow-hidden "
        style={{ minHeight: "100vh" }}
      >
        <div className="column is-2 bg-slate-800 w-[250px]">
          <Sidebar />
        </div>
        <div className="">
          <div className="">
            <Header />
          </div>
          <div className="column  has-background-light">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
