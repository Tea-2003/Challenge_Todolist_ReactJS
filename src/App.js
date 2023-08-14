import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useState } from "react";
import Boxinput from "./Components/Boxinput_Component";
import NavActive from "./Components/NavActive_Component";
import NavAll from "./Components/NavAll_Component";
import NavComplete from "./Components/NavComplete_Component";

const App = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <Router>
      <div className="container">
        <div className="header">
          <div className="todo">#todo</div>

          <div className="navigation">
            <NavAll setActiveTab={setActiveTab} activeTab={activeTab} />
            <NavActive setActiveTab={setActiveTab} activeTab={activeTab} />
            <NavComplete setActiveTab={setActiveTab} activeTab={activeTab} />
          </div>
          <Routes>
            <Route path="/" element={<Boxinput activeTab={activeTab} />} />
          </Routes>
        </div>
        <Boxinput />
      </div>
    </Router>
  );
};

export default App;
