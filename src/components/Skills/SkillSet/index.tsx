import React, { useRef } from "react";
import classes from "./index.module.css";
import SkillBox from "./SkillBox";

interface SkillSetProps {
  id: number;
  stackName: string;
  stack: {
    id: number;
    name: string;
    tech: {
      name: string;
      logo: string;
      count: number;
    }[];
  };
}

const SkillSet: React.FC<SkillSetProps> = ({ stackName, id, stack }) => {
  return (
    <div className="text-cyan-300" key={id}>
      <h1 className="text-3xl text-center">{stackName}</h1>
      <div
        className={`flex flex-row my-5 justify-center ${classes.responsive}`}
      >
        {stack.tech.map((elem, i) => {
          return <SkillBox key={i} id={i} tech={elem} />;
        })}
      </div>
    </div>
  );
};

export default SkillSet;
