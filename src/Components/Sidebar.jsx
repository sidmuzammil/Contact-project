import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Createcontact } from "./Createcontact";
import "./sidebar.css";
import { Chartandmap } from "./Chartandmap";


export const Sidebar = () => {
  return (
    <div>
      <div className="Sidebar">
        <Router>
          <div className="Routing">
            <div className="Elements">
              <Link to="/"><button>Create Contact</button></Link>
              <Link to="ChartandMap"><button>Chart and map</button></Link>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Createcontact />} />
            <Route path="ChartandMap" element={<Chartandmap/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};
