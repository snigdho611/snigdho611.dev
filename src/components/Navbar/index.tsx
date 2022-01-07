import React from "react";

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
        <div
          style={{
            paddingTop: "30px",
            display: "flex",
            flexDirection: "row",
            fontSize: "24px",
            fontFamily: "Agency FB",
            fontWeight: "bold",
            marginLeft: "265px",
          }}
        >
          <div style={{ marginLeft: "30px", color: "#2E93B0" }}>About</div>
          <div style={{ marginLeft: "30px", color: "#2E93B0" }}>Skills</div>
          <div style={{ marginLeft: "30px", color: "#2E93B0" }}>Experience</div>
          <div style={{ marginLeft: "30px", color: "#2E93B0" }}>Projects</div>
          <div style={{ marginLeft: "30px", color: "#2E93B0" }}>Education</div>
          <div style={{ marginLeft: "30px", color: "#2E93B0" }}>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default index;
