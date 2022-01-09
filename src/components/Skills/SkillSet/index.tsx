import React from "react";
import SkillBox from "./SkillBox";

const index = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "15px ",
      }}
    >
      <SkillBox name="JavaScript" url="/images/skills/javascript.svg" />
      <SkillBox name="TypeScript" url="/images/skills/typescript.svg" />
      <SkillBox name="Python" url="/images/skills/python.svg" />
      <SkillBox name="PHP" url="/images/skills/php.svg" />
      <SkillBox name="C++" url="/images/skills/cpp.svg" />
      <SkillBox name="C#" url="/images/skills/csharp.svg" />
    </div>
  );
};

export default index;
