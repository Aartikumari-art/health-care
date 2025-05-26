// src/App.jsx
import React from "react";
import AppHeader from "./components/AppHeader";
import Sidebar from "./components/Sidebar";


import "./App.css";

import DashboardMainContent from "./components/DashboardMainContent/DashboardMain";
//import "./styles/responsive.css"; // Optional: for media queries

const App = () => {
  return (
    <div className="app-root">
      <AppHeader />
      <div className="main-container d-flex">
        <Sidebar />
        <DashboardMainContent/>
      </div>
      
    </div>
  );
};

export default App;
