import React from "react";
import Links from "./Links";

interface NavbarProps {
  children?: React.ReactNode;
}

const index: React.FC<NavbarProps> = ({ children }) => {
  return (
    <div className="Navbar">
      <div className="flexBox">
        <div className="name">{children}</div>
        <Links />
      </div>
    </div>
  );
};

export default index;
