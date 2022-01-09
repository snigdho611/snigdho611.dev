import React from "react";
import SkillSet from "./SkillSet";

const index = () => {
  return (
    <div style={{ margin: "120px auto 0 auto" }}>
      <div className="Header">SKILLS</div>
      <div
        style={{
          border: "3px dotted #0D7998",
          width: "65%",
          margin: "0 auto",
        }}
      >
        <div style={{ color: "#FFD83A", fontSize: "30px" }}>Languages</div>
        <SkillSet />
      </div>
    </div>
  );
};

export default index;
