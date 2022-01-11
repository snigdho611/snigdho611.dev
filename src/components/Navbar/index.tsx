import React from "react";
import Links from "./Links";

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <div className="Navbar">
      <div className="FlexBox">
        <div className="Name">{children}</div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
