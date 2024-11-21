import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import "../styles/Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <div>
        <Header />
      </div>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
