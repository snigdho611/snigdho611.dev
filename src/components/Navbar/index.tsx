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
      <div className="mx-auto flex flex-col">
        <Link href={"/about"}>
          <a
            className={`duration-300 w-8 h-8 bg-about hover:bg-aboutHover transition-all bg-contain font-semibold hover:text-cyan-100 mx-auto ${
              router.pathname === "/about" ? "text-cyan-100" : null
            }`}
            // style={{ backgroundImage: "url('/images/nav/about.png')" }}
          >
            {/* About */}
          </a>
        </Link>
        <Link href={"/skills"}>
          <a
            className={`transition duration-300 text-cyan-600 mx-10 font-semibold hover:text-cyan-100 text-xl ${
              router.pathname === "/skills" ? "text-cyan-100" : null
            }`}
          >
            Skills
          </a>
        </Link>
        <Link href={"/experience"}>
          <a
            className={`transition duration-300 text-cyan-600 mx-10 font-semibold hover:text-cyan-100 text-xl ${
              router.pathname === "/experience" ? "text-cyan-100" : null
            }`}
          >
            Experience
          </a>
        </Link>
        <Link href={"/projects"}>
          <a
            className={`transition duration-300 text-cyan-600 mx-10 font-semibold hover:text-cyan-100 text-xl ${
              router.pathname === "/projects" ? "text-cyan-100" : null
            }`}
          >
            Projects
          </a>
        </Link>
        <Link href={"/contact"}>
          <a
            className={`transition duration-300 text-cyan-600 mx-10 font-semibold hover:text-cyan-100 text-xl ${
              router.pathname === "/contact" ? "text-cyan-100" : null
            }`}
          >
            Contact
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
