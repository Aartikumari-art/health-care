import React from "react";
import { FiSearch, FiBell, FiPlus } from "react-icons/fi";
import "../styles/header.css";
import avatar from "../../public/assets/user-avtar.jpg";

const AppHeader = () => {
  return (
    <header className="hd-wrapper">
      {/* Logo */}
      <div className="hd-logo">
        Healthcare<span className="dot">.</span>
      </div>

      {/* Search & Bell together */}
      <div className="hd-center d-flex align-items-center">
        <div className="hd-search">
          <FiSearch className="hd-search-icon" />
          <input
            type="text"
            placeholder="Search..."
            className="hd-search-input"
            disabled
          />
        </div>
        <button
          className="btn btn-outline-secondary btn-lg p-2 rounded-circle ms-2"
          aria-label="Notifications"
        >
          <FiBell className="fs-4" />
        </button>
      </div>

      {/* Right-hand controls */}
      <div className="hd-actions d-flex align-items-center gap-3">
        <button
          className="btn btn-outline-primary btn-lg p-2 rounded-circle"
          aria-label="Add"
        >
          <FiPlus className="fs-4" />
        </button>

        <div className="hd-profile">
          <img src={avatar} alt="User avatar" />
          <span className="hd-name">Dr. Aarti Gupta</span>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
