import React, { Component } from 'react';
import style from './allStyle.module.css'
import { Link } from "react-router-dom";

const index = ({ setActiveTab,activeTab }) => {
    const isActive = activeTab === "all";
    return (
      <div className={style.navigationAll} onClick={() => setActiveTab("all")}>
         <div className={`all ${isActive ? style.all : ""}`}>
          <Link to="/" >
              All
          </Link>
        </div>
      </div>
    );
  };

export default index;