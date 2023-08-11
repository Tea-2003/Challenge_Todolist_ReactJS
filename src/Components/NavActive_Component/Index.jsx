import { Link } from 'react-router-dom';
// import style from './NavActiveStyle.module.css'
import './style.css'
import React from 'react';

const index = ({ setActiveTab, activeTab }) => {
    const isActive = activeTab === "active";
    return (
        <div className="navigation-active" onClick={() => setActiveTab("active")}>
            <div className={`active ${isActive ? "all" : ""}`}>
                <Link to="/" >
                Active
                </Link>
            </div>
        </div>
    );
};

export default index;




