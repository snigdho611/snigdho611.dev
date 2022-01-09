import React from "react";
import SkillSet from "./SkillSet";

const index = () => {
  return (
    <div style={{ margin: "120px auto 0 auto" }}>
      <div className="Header">SKILLS</div>
      <SkillSet group="Languages" />
      <div style={{ marginTop: "25px" }}></div>
      <SkillSet group="Frameworks" />
    </div>
  );
};

export default index;
