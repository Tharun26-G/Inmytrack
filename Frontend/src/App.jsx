import React from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Community from "./components/Community";

const App = () => {
  const appStyle = {
    display: "flex",
    height: "100vh", // Full height to remove any black space
    width: "100vw",  // Full width to prevent overflow
    margin: 0,       // No margin
    overflow: "hidden", // Prevent scrolling
  };

  return (
    <>
    <Navbar />
    <div style={appStyle}>
        <Sidebar />  
        <MainContent />
        {/* <div style={{ flex: 1, overflowY: "auto" }}>
          <Community />
        </div> */}
      </div>
      </>
  );
};

export default App;
