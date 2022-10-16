import React, { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const baseRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1 }}
      className="my-60"
    >
      <div className="mx-auto w-3/4" ref={baseRef}>
        <div className="flex flex-col gap-6">
          <label className="text-3xl font-bold sm:text-6xl text-cyan-300 font-serif">
            Snigdho Dip Howlader.
          </label>
          <label className="text-2xl sm:text-4xl text-cyan-600 font-medium font-serif">
            I Create things for the Web.
          </label>
          {/* <label className="text-cyan-500 text-[15px] my-5">
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
          </label> */}
          <label className="text-slate-400 font-mono text-sm sm:text-base">
            A <strong>Professional Software Developer</strong> with experience in the industry. Avid
            in both <strong>Frontend Development</strong> and <strong>Backend Development</strong>{" "}
            technologies. Additionally, academically learned with Machine Learning, Data Mining and
            Algorithms that contribute to problem solving skills.
          </label>
          <Link href={"https://www.github.com/snigdho611"} passHref>
            <button className="border-2 bg-cyan-700 text-cyan-50 hover:bg-cyan-50 hover:text-cyan-700 transition-all w-3/4 sm:w-1/3 py-3 text-sm">
              Check Out My Work
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
