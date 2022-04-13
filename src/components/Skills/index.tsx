import gsap from "gsap";
import React, { useEffect, useRef } from "react";
// import reactlogo from "../../../public/images/icons/react.svg";

const Skills = () => {
  const reactRef = useRef<HTMLDivElement>(null);
  const laravelRef = useRef<HTMLDivElement>(null);

  const rotateObjects = (objects: React.RefObject<HTMLDivElement>[]) => {
    objects.map((object) => {
      gsap.to(object.current, {
        transformPerspective: 800,
        transformOrigin: "center",
        duration: 1,
        rotationY: 360,
      });
    });
  };

  useEffect(() => {
    const allRefs = [];
    allRefs.push(reactRef, laravelRef);
    rotateObjects(allRefs);
  }, []);

  return (
    <div className="w-2/4 my-48 mx-auto">
      <div className="flex flex-col text-cyan-300">
        <div>
          <h1 className="text-3xl">Frontend</h1>
          <div className="flex flex-row">
            <div
              className="min-w-24 w-24 min-h-24 h-24 mx-5"
              style={{
                backgroundImage: `url('images/icons/reactjs.png')`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
              }}
              ref={reactRef}
            >
              {/* React JS */}
            </div>
            <div className="w-24 h-24 mx-5">Vue JS</div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl">Backend</h1>
          <div className="flex flex-row">
            <div
              className="min-w-24 w-24 min-h-24 h-24 mx-5"
              style={{
                backgroundImage: `url('images/icons/laravel.png')`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
              }}
              ref={laravelRef}
            />
            <div className="w-24 h-24 mx-5">Node JS</div>
            <div className="w-24 h-24 mx-5">ASP.NET</div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl">Database</h1>
          <div className="flex flex-row">
            <div className="w-24 h-24 mx-5">Oracle</div>
            <div className="w-24 h-24 mx-5">PostgreSQL</div>
            <div className="w-24 h-24 mx-5">MongoDB</div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row justify-center">
        <div style={{ minWidth: "100px" }} className="text-center">
          Laravel
        </div>
        <div style={{ minWidth: "100px" }} className="text-center">
          Node
        </div>
        <div style={{ minWidth: "100px" }} className="text-center">
          React
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div style={{ minWidth: "100px" }} className="text-center">
          Tailwind
        </div>
        <div style={{ minWidth: "100px" }} className="text-center">
          Next JS
        </div>
        <div style={{ minWidth: "100px" }} className="text-center">
          SQL
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div style={{ minWidth: "100px" }} className="text-center">
          Django
        </div>
        <div style={{ minWidth: "100px" }} className="text-center">
          Mongo DB
        </div>
        <div style={{ minWidth: "100px" }} className="text-center">
          Vue JS
        </div>
      </div> */}
    </div>
  );
};

export default Skills;
