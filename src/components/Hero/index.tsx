import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const baseRef = useRef<HTMLDivElement>(null);

  const motionVariant = {
    visible: { opacity: 0.8, duration: 1, transform: "rotateX(360deg)" },
    start: { opacity: 0.15 },
    hover: { type: "spring", width: "80%", color: "white", opacity: 1 },
  };

  return (
    <div className="mt-40">
      <div className="text-cyan-200 mx-auto w-3/4" ref={baseRef}>
        <div className="flex flex-col px-28">
          <label className="text-5xl font-medium">Snigdho Dip Howlader</label>
          <label className="text-cyan-500 text-[15px] my-5">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                3000,
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
          {/* <label className="text-cyan-300 my-3">
            A <strong>Professional Software Developer</strong> with experience in the industry. Avid
            in both <strong>Frontend Development</strong> and <strong>Backend Development</strong>{" "}
            technologies. Additionally, academically learned with Machine Learning, Data Mining and
            Algorithms that contribute to problem solving skills.
          </label> */}
        </div>
      </div>
      <div className="text-2xl flex flex-row gap-x-5 mt-16 mx-auto h-80 text-cyan-500 justify-center w-5/6">
        <motion.div
          variants={motionVariant}
          initial="start"
          animate="visible"
          whileHover="hover"
          transition={{ duration: 1, transform: { duration: 1, delay: 1 } }}
          className="cursor-pointer min-w-[200px] flex justify-center items-center bg-frontend bg-cover bg-center bg-no-repeat"
        >
          Frontend
        </motion.div>
        <motion.div
          variants={motionVariant}
          whileHover="hover"
          initial="start"
          animate="visible"
          transition={{ duration: 1, transform: { duration: 1, delay: 1 } }}
          className="cursor-pointer min-w-[200px] flex justify-center items-center bg-backend bg-cover bg-center bg-no-repeat"
        >
          Backend
        </motion.div>
        <motion.div
          variants={motionVariant}
          whileHover="hover"
          initial="start"
          animate="visible"
          transition={{ duration: 1, transform: { duration: 1, delay: 1 } }}
          className="cursor-pointer min-w-[200px] flex justify-center items-center bg-database bg-cover bg-center bg-no-repeat"
        >
          Databases
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
