import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar = () => {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1 }}
      className="flex font-sans text-xl py-7 w-full z-10 fixed right-0 top-0 bg-[#283c6769] backdrop-blur-md"
    >
      <div className="w-1/2 flex h-10 ml-24">
        <div className="absolute hidden sm:flex w-10 h-10">
          <Image
            src={
              "https://res.cloudinary.com/drnym8nne/image/upload/v1665939449/portfolio/nav/favicon_z1vmcu.png"
            }
            alt="Not found"
            layout="fill"
          />
        </div>
      </div>
      <div className="flex w-1/2 gap-7 mx-16 justify-end">
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-sm text-emerald-300 flex items-center cursor-pointer hover:text-emerald-50 transition-colors"
        >
          About
        </motion.div>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ delay: 0.25, duration: 1 }}
          className="text-sm text-emerald-300 flex items-center cursor-pointer hover:text-emerald-50 transition-colors"
        >
          Skills
        </motion.div>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-sm text-emerald-300 flex items-center cursor-pointer hover:text-emerald-50 transition-colors"
        >
          Experience
        </motion.div>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
          className="text-sm text-emerald-300 flex items-center cursor-pointer hover:text-emerald-50 transition-colors"
        >
          Project
        </motion.div>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-sm text-emerald-300 flex items-center cursor-pointer hover:text-emerald-50 transition-colors"
        >
          Contact
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
