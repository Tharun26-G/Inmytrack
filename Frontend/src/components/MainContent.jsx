import React from "react";
import "../styles/MainContent.css";

const MainContent = () => {
  return (
    <div className="main-content">
      <h1>Track Your Progress, <br /> Unlock New Opportunities</h1>
      <p>Your Personal Development Dashboard, Career Tracker, and Networking Hub</p>

      <div className="input-group">
        <div className="input-wrapper">
          <span>inmytrack.com/</span>
          <input type="text" placeholder="username" />
        </div>
        <input type="email" placeholder="Enter your email" />
      </div>
    </div>
  );
};

export default MainContent;
