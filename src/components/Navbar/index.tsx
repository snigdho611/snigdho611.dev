import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar = () => {
  return (
    <div className="flex text-xl py-7 w-full z-10 fixed right-0 top-0 bg-[#2b354b52]">
      <div className="w-1/2">1</div>
      <div className="flex w-1/2 gap-7 mx-16 justify-end">
        <div className="text-sm text-cyan-300 flex items-center">About</div>
        <div className="text-sm text-cyan-300 flex items-center">Skills</div>
        <div className="text-sm text-cyan-300 flex items-center">Experience</div>
        <div className="text-sm text-cyan-300 flex items-center">Project</div>
        <div className="text-sm text-cyan-300 flex items-center">Contact</div>
      </div>
    </div>
  );
};

export default Navbar;
