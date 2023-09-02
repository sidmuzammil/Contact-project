import React from "react";
import { Sidebar } from "./Sidebar";
import "./Main.css"

export const Main = () => {
  return (
      <div className="Container">
        <div className="sideBar">
          <Sidebar />
        </div>
      </div>
  );
};
