import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex-col flex text-xl py-7 w-[15%] z-10 fixed right-0 top-0 bg-[#2b354b52]">
      {/* <div
        className="w-1/4 justify-center py-0 px-12"
        onClick={() => {
          router.push("/");
        }}
      /> */}
      <div className="mx-auto flex flex-col gap-7">
        <div
          className={`duration-300 w-8 h-8 bg-about hover:bg-aboutHover transition-all bg-contain bg-center mx-auto bg-no-repeat cursor-pointer ${
            router.pathname === "/about" ? "bg-aboutHover" : null
          }`}
        />
        <div
          className={`duration-300 w-8 h-8 bg-skills hover:bg-skillsHover transition-all bg-contain bg-center mx-auto bg-no-repeat cursor-pointer ${
            router.pathname === "/skills" ? "bg-skillsHover" : null
          }`}
        />
        <div
          className={`duration-300 w-8 h-8 bg-experience hover:bg-experienceHover transition-all bg-contain bg-center mx-auto bg-no-repeat cursor-pointer ${
            router.pathname === "/experience" ? "bg-experienceHover" : null
          }`}
        />
        <div
          className={`duration-300 w-8 h-8 bg-project hover:bg-projectHover transition-all bg-contain bg-center mx-auto bg-no-repeat cursor-pointer ${
            router.pathname === "/projects" ? "bg-projectHover" : null
          }`}
        />
        <div
          className={`duration-300 w-8 h-8 bg-contact hover:bg-contactHover transition-all bg-contain bg-center mx-auto bg-no-repeat cursor-pointer ${
            router.pathname === "/contact" ? "bg-contactHover" : null
          }`}
        />
      </div>
    </div>
  );
};

export default Navbar;
