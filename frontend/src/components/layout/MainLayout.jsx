import Sidebar from "./Sidebar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
