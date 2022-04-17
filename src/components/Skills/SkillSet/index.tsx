import React, { useRef } from "react";

interface SkillSetProps {
  keyVal: number;
  stackName: string;
  children: React.ReactNode;
}

const SkillSet: React.FC<SkillSetProps> = ({ stackName, children, keyVal }) => {
  return (
    <div className="text-cyan-300" key={keyVal}>
      <h1 className="text-3xl text-center">{stackName}</h1>
      <div className="flex flex-row my-5 justify-center">{children}</div>
    </div>
  );
};

export default SkillSet;
