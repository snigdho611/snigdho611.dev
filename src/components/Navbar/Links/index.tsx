import React from "react";

const index = () => {
  return (
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
      <div className="links-container">
        <a href="#" className="link">
          About
        </a>
      </div>
      <div className="links-container">
        <a href="#" className="link">
          Skills
        </a>
      </div>
      <div className="links-container">
        <a href="#" className="link">
          Experience
        </a>
      </div>
      <div className="links-container">
        <a href="#" className="link">
          Projects
        </a>
      </div>
      <div className="links-container">
        <a href="#" className="link">
          Education
        </a>
      </div>
      <div className="links-container">
        <a href="#" className="link">
          Contact
        </a>
      </div>
    </div>
  );
};

export default index;
