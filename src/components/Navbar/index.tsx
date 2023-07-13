import React, { MutableRefObject, useEffect, useRef, useState } from "react";

interface NavbarProps {
  heroRef: MutableRefObject<any>;
  aboutRef: MutableRefObject<any>;
  expRef: MutableRefObject<any>;
  projectsRef: MutableRefObject<any>;
  contactRef: MutableRefObject<any>;
}

const Navbar: React.FC<NavbarProps> = ({ heroRef, aboutRef, expRef, projectsRef, contactRef }) => {
  const heroScroll = () => heroRef.current.scrollIntoView({ behavior: "smooth" });
  const aboutScroll = () => aboutRef.current.scrollIntoView({ behavior: "smooth" });
  const expScroll = () => expRef.current.scrollIntoView({ behavior: "smooth" });
  const projectsScroll = () => projectsRef.current.scrollIntoView({ behavior: "smooth" });
  const contactScroll = () => contactRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="flex font-sans text-xl py-7 w-full z-10 fixed right-0 top-0 bg-[#283c6769] backdrop-blur-md">
      <div className="w-1/2 hidden sm:flex  h-10 ml-24">
        <div className="absolute w-10 h-10">
          <img
            src={
              "https://res.cloudinary.com/drnym8nne/image/upload/v1666110360/portfolio/nav/favicon_uw1wog.png"
            }
            alt="Not found"
          />
        </div>
      </div>
      <div className="flex w-1/2 gap-7 mx-auto sm:mx-16 justify-center sm:justify-end">
        <div
          className="text-sm text-emerald-300 flex items-center cursor-pointer hover:text-emerald-50 transition-colors"
          onClick={() => heroScroll()}
        >
          Home
        </div>
        <div
          className="text-sm text-emerald-300 flex items-center cursor-pointer hover:text-emerald-50 transition-colors"
          onClick={() => aboutScroll()}
        >
          About
        </div>
        <div
          className="text-sm text-emerald-300 flex items-center cursor-pointer hover:text-emerald-50 transition-colors"
          onClick={() => expScroll()}
        >
          Experience
        </div>
        <div
          className="text-sm text-emerald-300 flex items-center cursor-pointer hover:text-emerald-50 transition-colors"
          onClick={() => projectsScroll()}
        >
          Project
        </div>
        <div
          className="text-sm text-emerald-300 flex items-center cursor-pointer hover:text-emerald-50 transition-colors"
          onClick={() => contactScroll()}
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;
