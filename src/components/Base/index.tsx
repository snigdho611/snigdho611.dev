import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Base = () => {
  const baseRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   gsap.fromTo(
  //     baseRef.current,
  //     { x: "60%", opacity: 0 },
  //     { x: 0, y: 0, opacity: 1, duration: 1.75, delay: 3 }
  //   );
  // }, []);

  return (
    <div className="text-cyan-200 my-auto mx-auto my-5 w-3/4" ref={baseRef}>
      <div className="text-6xl font-medium text-center my-5">
        Snigdho Dip Howlader
      </div>
      <div className="text-4xl italic text-center my-5">Software Engineer</div>
      <div className="text-2xl font-bold text-center my-5 underline">
        Fullstack
      </div>
      <div className="flex flex-row gap-x-14 mx-auto justify-center my-8">
        <div className="cursor-pointer text-cyan-400 hover:text-cyan-100 duration-300 transition">
          Frontend
        </div>
        <div className="cursor-pointer text-cyan-400 hover:text-cyan-100 duration-300 transition">
          Databases
        </div>
        <div className="cursor-pointer text-cyan-400 hover:text-cyan-100 duration-300 transition">
          Backend
        </div>
      </div>
    </div>
  );
};

export default Base;
