import React from "react";
import { FaHome, FaTrophy, FaUsers, FaSearch, FaUser, FaMedal } from "react-icons/fa";

const Sidebar = () => {
  const sidebarStyle = {
    width: "250px",
    height: "100vh",
    backgroundColor: "#f8f9fa",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const menuItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#333",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
  };



  return (
    <div style={sidebarStyle}>
      <div style={menuItemStyle}>
        <FaHome size={20} />
        Home
      </div>
      <div style={menuItemStyle}>
        <FaTrophy size={20} />
        Challenges
      </div>
      <div style={menuItemStyle}>
        <FaUsers size={20} />
        Community
      </div>
      <div style={menuItemStyle}>
        <FaSearch size={20} />
        Discover
      </div>
      <div style={menuItemStyle}>
        <FaUser size={20} />
        Profile
      </div>
      <div style={menuItemStyle}>
        <FaMedal size={20} />
        Achievements
      </div>
    </div>
  );
};

export default Sidebar;
