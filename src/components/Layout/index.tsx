import React from "react";
import Navbar from "../Navbar";
import "./index.scss"

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout_body">
        {children}
      </div>
    </div>
  );
};

export default Layout;
