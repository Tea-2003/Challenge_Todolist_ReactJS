import React, { Component } from "react";
import style from "./completeStyle.module.css";
import { Link } from "react-router-dom";

const index = ({ setActiveTab, activeTab }) => {
  const isActive = activeTab === "completed";
  return (
    <div
      className={style.navigationCompleted} onClick={() => setActiveTab("completed")}>
      <div className={`completed  ${isActive ? style.completed : ""}`}>
        <Link to="/">
          Commpleted
        </Link>
      </div>
    </div>
  );
};

export default index;
