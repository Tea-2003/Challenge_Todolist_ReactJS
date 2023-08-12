import { Link } from 'react-router-dom';
import style from './activeStyle.module.css'
import React from 'react';

const index = ({ setActiveTab, activeTab }) => {
    const isActive = activeTab === "active";
    return (
        <div className={style.navigationActive} onClick={() => setActiveTab("active")}>
            <div className={`active ${isActive ? style.active : ""}`}>
                <Link to="/" >
                    Active
                </Link>
            </div>
        </div>
    );
};

export default index;




