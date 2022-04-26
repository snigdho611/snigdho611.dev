import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import SkillSet from "./SkillSet";
import classes from "./index.module.css";

export interface SkillsProps {
  skills: {
    id: number;
    name: string;
    tech: {
      name: string;
      logo: string;
      count: number;
    }[];
  }[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const baseRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      baseRef.current,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <div className="w-fit my-48 mx-auto flex flex-col" ref={baseRef}>
      <div className={`flex flex-row ${classes.responsive}`}>
        {skills.map((stack, i) => {
          if (stack.id !== 4) {
            return (
              <SkillSet key={i} id={i} stackName={stack.name} stack={stack} />
            );
          }
        })}
      </div>
      <div>
        {skills.map((stack, i) => {
          if (stack.id === 4) {
            return (
              <SkillSet key={i} id={i} stackName={stack.name} stack={stack} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Skills;
