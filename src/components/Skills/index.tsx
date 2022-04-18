import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import SkillSet from "./SkillSet";
import classes from "./index.module.css";

const data = [
  {
    id: 1,
    name: "Frontend",
    tech: [
      {
        name: "React JS",
        logo: "images/icons/reactjs.png",
        count: 0,
      },
      {
        name: "Next JS",
        logo: "images/icons/nextjs.png",
        count: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Backend",
    tech: [
      {
        name: "Laravel",
        logo: "images/icons/laravel.png",
        count: 2,
      },
      {
        name: "Node JS",
        logo: "images/icons/nodejs.png",
        count: 3,
      },
    ],
  },
  {
    id: 3,
    name: "Database",
    tech: [
      {
        name: "PostGreSQL",
        logo: "images/icons/postgresql.png",
        count: 4,
      },
      {
        name: "Mongo DB",
        logo: "images/icons/mongo.png",
        count: 5,
      },
    ],
  },
  {
    id: 4,
    name: "Additional Skills",
    tech: [
      {
        name: "JavaScript",
        logo: "images/icons/javascript.png",
        count: 6,
      },
      {
        name: "TypeScript",
        logo: "images/icons/typescript.png",
        count: 7,
      },
      {
        name: "Python",
        logo: "images/icons/python.png",
        count: 8,
      },
      {
        name: "C#",
        logo: "images/icons/csharp.png",
        count: 9,
      },
    ],
  },
];

const Skills = () => {
  const baseRef = useRef<HTMLDivElement>(null);

  const totalRefs = useRef<HTMLDivElement[]>([]);

  const rotateObjects = (objects: React.MutableRefObject<HTMLDivElement[]>) => {
    objects.current.map((object) => {
      gsap.fromTo(
        object,
        {
          transformPerspective: 800,
          transformOrigin: "center",
          // duration: 1.25,
          rotationY: 360,
        },
        {
          transformPerspective: 800,
          transformOrigin: "center",
          duration: 1.25,
          rotationY: 0,
        }
      );
    });
  };

  useLayoutEffect(() => {
    gsap.fromTo(
      baseRef.current,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1 }
    );

    totalRefs.current = totalRefs.current.slice(0, 10);
    rotateObjects(totalRefs);
  }, []);

  const eventOnMouseEnter = (
    element: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    gsap.to(element.target, {
      transformOrigin: "center",
      scale: 1.25,
      rotationY: 360,
      // duration: 0.25,
      // backgroundColor: "green",
    });
  };

  const eventOnMouseLeave = (
    element: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    gsap.to(element.target, {
      rotationY: 0,
      duration: 0,
    });
    gsap.to(element.target, {
      scale: 1,
      duration: 0.5,
      // backgroundColor: "transparent",
    });
  };

  return (
    <div className="w-fit my-48 mx-auto flex flex-col" ref={baseRef}>
      <div className={`flex flex-row ${classes.responsive}`}>
        {data.map((stack, i) => {
          if (stack.id !== 4) {
            return (
              <SkillSet keyVal={i} stackName={stack.name}>
                {stack.tech.map((elem, i) => {
                  return (
                    <div key={i} className="px-7 mx-auto">
                      <div
                        className="min-w-24 w-24 min-h-24 h-24 my-4"
                        style={{
                          backgroundImage: `url(${elem.logo})`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(el) => {
                          eventOnMouseEnter(el);
                        }}
                        onMouseLeave={(el) => {
                          eventOnMouseLeave(el);
                        }}
                        ref={(el) => {
                          totalRefs.current[elem.count] = el as HTMLDivElement;
                        }}
                      />
                    </div>
                  );
                })}
              </SkillSet>
            );
          }
        })}
      </div>
      <div>
        {data.map((stack, i) => {
          if (stack.id === 4) {
            return (
              <SkillSet keyVal={i} stackName={stack.name}>
                {stack.tech.map((elem, i) => {
                  return (
                    <div key={i} className={`px-7 ${classes.mx_auto}`}>
                      <div
                        className="min-w-24 w-24 min-h-24 h-24 my-4"
                        style={{
                          backgroundImage: `url(${elem.logo})`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(el) => {
                          eventOnMouseEnter(el);
                        }}
                        onMouseLeave={(el) => {
                          eventOnMouseLeave(el);
                        }}
                        ref={(el) => {
                          totalRefs.current[elem.count] = el as HTMLDivElement;
                        }}
                      />
                    </div>
                  );
                })}
              </SkillSet>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Skills;
