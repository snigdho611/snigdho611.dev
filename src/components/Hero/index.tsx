import React, { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const baseRef = useRef<HTMLDivElement>(null);

  return (
    <div className="my-60">
      <div className="mx-auto w-3/4" ref={baseRef}>
        <div className="flex flex-col gap-4">
          <label className="text-3xl font-bold sm:text-6xl text-cyan-300 font-serif">
            Snigdho Dip Howlader.
          </label>
          {/* <label className="text-2xl sm:text-4xl text-cyan-600 font-medium font-serif">
            I Create things for the Web.
          </label> */}
          <label className="text-cyan-500 text-[15px] my-5">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Software Engineer - Backend",
                1500,
                "Software Engineer - Frontend",
                1500,
                "Software Engineer - Testing",
                1500,
                "Software Engineer",
                5000,
              ]}
              // repeat={0}
              speed={5}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em" }}
            />
          </label>
          <label className="text-slate-400 font-mono text-sm sm:text-base">
            A <strong>Professional Software Developer</strong> with experience in the industry. Avid
            in both <strong>Frontend Development</strong> and <strong>Backend Development</strong>{" "}
            technologies. Additionally, academically learned with Machine Learning, Data Mining and
            Algorithms that contribute to problem solving skills.
          </label>
          <button className="border-2 bg-cyan-700 text-cyan-50 hover:bg-cyan-50 hover:text-cyan-700 transition-all w-3/4 sm:w-1/3 py-3 text-sm">
            Check Out My Work
          </button>
        </div>
      </div>
      {/* <div className="text-2xl flex flex-row gap-x-5 mt-16 mx-auto h-80 text-cyan-500 justify-center w-5/6">
        <div className="cursor-pointer min-w-[200px] flex justify-center items-center bg-frontend bg-cover bg-center bg-no-repeat">
          Frontend
        </div>
        <div className="cursor-pointer min-w-[200px] flex justify-center items-center bg-backend bg-cover bg-center bg-no-repeat">
          Backend
        </div>
        <div className="cursor-pointer min-w-[200px] flex justify-center items-center bg-database bg-cover bg-center bg-no-repeat">
          Databases
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
