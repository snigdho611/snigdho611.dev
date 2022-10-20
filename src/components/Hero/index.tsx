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
      transition={{ delay: 2, duration: 1 }}
      className="my-48 font-sans"
    >
      <div className="mx-auto w-3/4 font-mono" ref={baseRef}>
        <div className="flex flex-col gap-6">
          <label className="text-3xl font-bold sm:text-6xl text-emerald-300">
            Snigdho Dip Howlader.
          </label>
          <label className="text-2xl sm:text-4xl text-emerald-600 font-medium">
            I Create Things For The Web.
          </label>
          <label className="text-slate-400 text-sm sm:text-base">
            A <strong>Professional Software Developer</strong> with experience in the industry.
            Versatile in both <strong>Frontend Development</strong> and{" "}
            <strong>Backend Development</strong> technologies. Additionally, academically learned
            with Machine Learning, Data Mining and Algorithms that contribute to problem solving
            skills.
          </label>
          <Link href={"https://www.github.com/snigdho611"} passHref>
            <button className="border-2 bg-emerald-700 text-emerald-50 hover:bg-emerald-50 hover:text-emerald-700 transition-all w-3/4 sm:w-1/3 py-3 text-sm">
              Check Out My Work
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
