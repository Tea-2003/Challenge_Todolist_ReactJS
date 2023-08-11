import React, { Component } from 'react';
// import style from './NavAllStyle.module.css'
import './style.css'
import { Link } from "react-router-dom";

const index = ({ setActiveTab,activeTab }) => {
    const isActive = activeTab === "all";
    return (
      <div className={`navigation-all ${isActive ? "all" : ""}`} onClick={() => setActiveTab("all")}>
         <div className="all1">
          <Link to="/" >
          All
          </Link>
        </div>
      </div>
    );
  };

export default index;