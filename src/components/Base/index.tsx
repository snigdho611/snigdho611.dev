import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Base = () => {
  const baseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // gsap.fromTo(
    //   baseRef.current,
    //   { x: "60%", opacity: 0 },
    //   { x: 0, y: 0, opacity: 1, duration: 1.75, delay: 3 }
    // );
  }, []);

  return (
    <div className="text-cyan-200 my-auto mx-auto my-60 w-3/4" ref={baseRef}>
      <h1 className="text-6xl font-medium text-center my-5">
        Snigdho Dip Howlader
      </h1>
      <h1 className="text-4xl text-cyan-500 italic text-center my-5">
        Fullstack Software Engineer
      </h1>
      <div className="text-2xl flex flex-row gap-x-14 mx-auto text-cyan-500 justify-center my-8">
        <div className="cursor-pointer text-cyan-500 hover:text-cyan-100 duration-300 transition">
          Frontend
        </div>
        <div className="cursor-pointer hover:text-cyan-100 duration-300 transition">
          Databases
        </div>
        <div className="cursor-pointer hover:text-cyan-100 duration-300 transition">
          Backend
        </div>
      </div>
    </div>
  );
};

export default Base;
