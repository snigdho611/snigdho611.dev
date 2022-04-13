import gsap from "gsap";
import React, { useEffect, useRef } from "react";
// import reactlogo from "../../../public/images/icons/react.svg";

const Skills = () => {
  const reactRef = useRef<HTMLDivElement>(null);
  const vueRef = useRef<HTMLDivElement>(null);

  const laravelRef = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);

  const sqlRef = useRef<HTMLDivElement>(null);
  const mongoRef = useRef<HTMLDivElement>(null);

  const rotateObjects = (objects: React.RefObject<HTMLDivElement>[]) => {
    objects.map((object) => {
      gsap.to(object.current, {
        transformPerspective: 800,
        transformOrigin: "center",
        duration: 1.25,
        rotationY: 360,
      });
    });
  };

  useEffect(() => {
    const allRefs = [];
    allRefs.push(reactRef, vueRef, laravelRef, nodeRef, sqlRef, mongoRef);
    rotateObjects(allRefs);
  }, []);

  return (
    <div className="w-fit my-48 mx-auto">
      <div className="flex flex-row">
        <div className="text-cyan-300">
          <h1 className="text-3xl text-center">Frontend</h1>
          <div className="flex flex-row my-5">
            <div
              className="min-w-24 w-24 min-h-24 h-24 mx-5"
              style={{
                backgroundImage: `url('images/icons/reactjs.png')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              ref={reactRef}
            ></div>
            <div
              className="w-24 h-24 mx-5"
              style={{
                backgroundImage: `url('images/icons/vue.png')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              ref={vueRef}
            />
          </div>
        </div>
        <div className="text-cyan-300">
          <h1 className="text-3xl text-center">Backend</h1>
          <div className="flex flex-row  my-5">
            <div
              className="min-w-24 w-24 min-h-24 h-24 mx-5"
              style={{
                backgroundImage: `url('images/icons/laravel.png')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              ref={laravelRef}
            />
            <div
              className="w-24 h-24 mx-5"
              style={{
                backgroundImage: `url('images/icons/nodejs.png')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              ref={nodeRef}
            />
          </div>
        </div>
        <div className="text-cyan-300">
          <h1 className="text-3xl text-center">Database</h1>
          <div className="flex flex-row  my-5">
            <div
              className="w-24 h-24 mx-5"
              style={{
                backgroundImage: `url('images/icons/postgresql.png')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              ref={sqlRef}
            />
            <div
              className="w-24 h-24 mx-5"
              style={{
                backgroundImage: `url('images/icons/mongo.png')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              ref={mongoRef}
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl text-center text-cyan-300">
          Additional Skills
        </h1>
        <div className="flex flex-row my-5 justify-center">
          <div
            className="w-24 h-24 mx-5"
            style={{
              backgroundImage: `url('images/icons/postgresql.png')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            ref={sqlRef}
          />
          <div
            className="w-24 h-24 mx-5"
            style={{
              backgroundImage: `url('images/icons/mongo.png')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            ref={mongoRef}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
