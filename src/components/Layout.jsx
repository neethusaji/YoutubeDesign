import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flexGrow: 1, backgroundColor: "#0f0f0f", minHeight: "100vh" }}>
        <Navbar />
        <Outlet /> 
      </div>
    </div>
  );
};

export default Layout;
