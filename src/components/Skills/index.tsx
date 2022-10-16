import React, { useEffect, useLayoutEffect, useRef } from "react";
import SkillSet from "./SkillSet";
import classes from "./index.module.css";

const Skills: React.FC = () => {
  const baseRef = useRef<HTMLDivElement>(null);

  return <div className="w-fit my-48 mx-auto flex flex-col" ref={baseRef}></div>;
};

export default Skills;
