import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const baseRef = useRef<HTMLDivElement>(null);
  const [hoverIndex, setHoverIndex] = useState<Number>(-1);

  useEffect(() => {
    console.log("ok");
  }, [hoverIndex]);

  const motionVariant = {
    visible: { opacity: 0.8, duration: 1, transform: "rotateX(360deg)" },
    start: { opacity: 0.15 },
    hover: { type: "spring", width: "80%", color: "white", opacity: 1 },
  };

  const line1 = "Snigdho Dip Howlader";
  const line2 = "Fullstack Software Engineer";

  return (
    <motion.div
      className="text-cyan-200 mx-auto my-60 w-3/4"
      ref={baseRef}
      // initial={{ scale: 0, opacity: 0 }}
      // animate={{ scale: 1, opacity: 1 }}
      // transition={{ duration: 1 }}
    >
      <h1 className="text-6xl font-medium text-center my-5">Snigdho Dip Howlader</h1>
      <h1 className="text-cyan-500 text-center my-5">
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
            () => {
              console.log("Done typing!");
            },
          ]}
          repeat={0}
          speed={5}
          wrapper="div"
          cursor={true}
          // repeat={Infinity}
          style={{ fontSize: "2em" }}
        />
      </h1>
      <div className="text-2xl flex flex-row gap-x-5 mx-auto h-96 text-cyan-500 justify-center my-8 w-5/6">
        <motion.div
          variants={motionVariant}
          initial="start"
          animate="visible"
          whileHover="hover"
          transition={{ duration: 1, transform: { duration: 1, delay: 1 } }}
          // onMouseEnter={() => {
          //   setHoverIndex(0);
          // }}
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
          // onMouseEnter={() => {
          //   setHoverIndex(2);
          // }}
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
          // onMouseEnter={() => {
          //   setHoverIndex(1);
          // }}
          className="cursor-pointer min-w-[200px] flex justify-center items-center bg-database bg-cover bg-center bg-no-repeat"
        >
          Databases
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
