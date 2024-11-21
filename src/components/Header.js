import React from "react";
import "../styles/Header.css";

import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header = () => {
  const location = useLocation(); // Get current route

  // Function to determine if the tab is active
  const isActive = (path) => {
    return location.pathname === path ? "tab-active" : "";
  };

  return (
    <header className="header">
      <div>
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="tabs">
        <Link to="/todo" className={`tab ${isActive("/todo")}`}>
          To-Do List
        </Link>
        <Link to="/expense" className={`tab ${isActive("/expense")}`}>
          Expense Tracker
        </Link>
        <Link to="/cooking" className={`tab ${isActive("/cooking")}`}>
          Cooking Schedule
        </Link>
        <Link to="/dailytracker" className={`tab ${isActive("/dailytracker")}`}>
          Daily Tracker
        </Link>
      </div>
    </header>
  );
};

export default Header;
