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
    <div
      className="flex-col flex text-xl py-7 w-[15%] z-10 fixed right-0 top-0 bg-[#2b354b52]"
      // style={{
      //   backgroundColor: "#111827",
      // }}
    >
      <div
        className="w-1/4 justify-center py-0 px-12"
        onClick={() => {
          router.push("/");
        }}
      />
      <div className="mx-auto flex flex-col gap-7">
        <Link href={"/about"}>
          <a
            className={`duration-300 w-8 h-8 bg-about hover:bg-aboutHover transition-all bg-contain bg-center mx-auto bg-no-repeat ${
              router.pathname === "/about" ? "text-cyan-100" : null
            }`}
          />
        </Link>
        <Link href={"/skills"}>
          <a
            className={`duration-300 w-8 h-8 bg-skills hover:bg-skillsHover transition-all bg-contain bg-center mx-auto bg-no-repeat ${
              router.pathname === "/skills" ? "text-cyan-100" : null
            }`}
          />
        </Link>
        <Link href={"/experience"}>
          <a
            className={`duration-300 w-8 h-8 bg-experience hover:bg-experienceHover transition-all bg-contain bg-center mx-auto bg-no-repeat ${
              router.pathname === "/experience" ? "text-cyan-100" : null
            }`}
          />
        </Link>
        <Link href={"/projects"}>
          <a
            className={`duration-300 w-8 h-8 bg-project hover:bg-projectHover transition-all bg-contain bg-center mx-auto bg-no-repeat ${
              router.pathname === "/projects" ? "text-cyan-100" : null
            }`}
          />
        </Link>
        <Link href={"/contact"}>
          <a
            className={`duration-300 w-8 h-8 bg-contact hover:bg-contactHover transition-all bg-contain bg-center mx-auto bg-no-repeat ${
              router.pathname === "/contact" ? "text-cyan-100" : null
            }`}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
