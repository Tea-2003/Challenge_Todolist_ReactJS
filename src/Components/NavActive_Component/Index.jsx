import { Link } from 'react-router-dom';
import './style.css';
import React from 'react';

const index = ({ setActiveTab, activeTab }) => {
    const isActive = activeTab === "active";
    return (
        <div className="navigation-active">
            <div className={`active ${isActive ? "all" : ""}`}>
                <Link to="/" onClick={() => setActiveTab("active")}>
                Active
                </Link>
            </div>
        </div>
    );
};

export default index;




