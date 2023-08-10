import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Boxinput_Component from "./Components/Boxinput_Component";
import NavActive_Component from "./Components/NavActive_Component";
import NavAll_Component from "./Components/NavAll_Component";
import NavComplete_Component from "./Components/NavComplete_Component";

const App = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <Router>
      <div className="container">
        <div className="header">
          <div className="todo">#todo</div>

          <div className="navigation">
            <NavAll_Component setActiveTab={setActiveTab} activeTab={activeTab} />
            <NavActive_Component setActiveTab={setActiveTab} activeTab={activeTab}/>
            <NavComplete_Component setActiveTab={setActiveTab} activeTab={activeTab}/>
          </div>
          <Routes>
          <Route path="/" element={<Boxinput_Component activeTab={activeTab} />} />
          </Routes>
        </div>
        <Boxinput_Component />
      </div>
    </Router>
  );
};

export default App;
