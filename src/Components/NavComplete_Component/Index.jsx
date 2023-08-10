import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const index = ({ setActiveTab, activeTab }) => {
  const isActive = activeTab === "completed";
  return (
    <div className={`navigation-completed ${isActive ? "all" : ""}`}>
      <div className="completed">
        <Link to="/" onClick={() => setActiveTab("completed")}>
          Commpleted
        </Link>
      </div>
    </div>
  );
};

export default index;
