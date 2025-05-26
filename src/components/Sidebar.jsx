import React from "react";
import {
  FiHome,
  FiClock,
  FiCalendar,
  FiClipboard,
  FiBarChart2,
  FiActivity,
  FiMessageCircle,
  FiHelpCircle,
  FiSettings,
} from "react-icons/fi";

import "../styles/sidebar.css";

const navLinks = [
  { label: "Dashboard", icon: <FiHome /> },
  { label: "History", icon: <FiClock /> },
  { label: "Calendar", icon: <FiCalendar /> },
  { label: "Appointments", icon: <FiClipboard /> },
  { label: "Statistics", icon: <FiBarChart2 /> },
  { label: "Tests", icon: <FiActivity /> },
  { label: "Chat", icon: <FiMessageCircle /> },
  { label: "Support", icon: <FiHelpCircle /> },
  { label: "Setting", icon: <FiSettings /> },
];

const Sidebar = () => {
  return (
    <aside className="sb-wrapper">
      <div className="sb-section">
        <h4 className="sb-heading">General</h4>
        <nav className="sb-nav">
          {navLinks.map((link, idx) => (
            <div key={idx} className="sb-nav-item">
              <span className="sb-icon">{link.icon}</span>
              <span className="sb-label">{link.label}</span>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
