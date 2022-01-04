import React from "react";

interface NavbarProps {
  children: React.ReactNode;
}

const index: React.FC<NavbarProps> = ({ children }) => {
  return (
    <div style={{ backgroundColor: "blue", color: "white" }}>{children}</div>
  );
};

export default index;
