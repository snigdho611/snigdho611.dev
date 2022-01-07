import React from "react";
import Links from "./Links";

interface NavbarProps {
  children?: React.ReactNode;
}

const index: React.FC<NavbarProps> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#181818",
        color: "white",
        height: "83px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: "32px",
            fontFamily: "Agency FB",
            fontWeight: "bold",
            paddingLeft: "50px",
            paddingTop: "26px",
            color: "#5BC0DE",
            whiteSpace: "nowrap",
            width: "15%",
          }}
        >
          {children}
        </div>

        <Links />
      </div>
    </div>
  );
};

export default index;
