import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef } from "react";
// import reactlogo from "../../../public/images/icons/react.svg";

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
      gsap.to(object, {
        transformPerspective: 800,
        transformOrigin: "center",
        duration: 1.25,
        rotationY: 360,
      });
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

  return (
    <div className="w-fit my-48 mx-auto flex flex-col" ref={baseRef}>
      <div className="flex flex-row">
        {data.map((stack, i) => {
          if (stack.id !== 4) {
            return (
              <div className="text-cyan-300" key={i}>
                <h1 className="text-3xl text-center">{stack.name}</h1>
                <div className="flex flex-row my-5 justify-center">
                  {stack.tech.map((elem, i) => {
                    return (
                      <div
                        key={i}
                        className="min-w-24 w-24 min-h-24 h-24 mx-7"
                        style={{
                          backgroundImage: `url(${elem.logo})`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                        ref={(el) => {
                          totalRefs.current[elem.count] = el as HTMLDivElement;
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
      <div>
        {data.map((stack, i) => {
          if (stack.id === 4) {
            return (
              <div className="text-cyan-300" key={i}>
                <h1 className="text-3xl text-center">{stack.name}</h1>
                <div className="flex flex-row my-5 justify-center">
                  {stack.tech.map((elem, i) => {
                    return (
                      <div
                        key={i}
                        className="min-w-24 w-24 min-h-24 h-24 mx-7"
                        style={{
                          backgroundImage: `url(${elem.logo})`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                        ref={(el) => {
                          totalRefs.current[elem.count] = el as HTMLDivElement;
                        }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Skills;
