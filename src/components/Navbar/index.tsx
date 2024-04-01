import React, { MutableRefObject } from "react";
import "./index.scss";
import { motion, useScroll } from "framer-motion";
import { useLocation } from "react-router";

const navLinks = [
  {
    title: "Home",
    hash: "#hero"
  },
  {
    title: "Experience",
    hash: "#hero"
  },
  {
    title: "Project",
    hash: "#hero"
  },
  {
    title: "Contact",
    hash: "#hero"
  }
];

interface INavbarProps {
  // children: React.ReactNode;
  _refs_: (() => void)[];
}

const Navbar: React.FC<INavbarProps> = ({ _refs_ }) => {
  return (
    <motion.div
      className="navbar"
      animate={{ translateY: "0px", opacity: 1 }}
      initial={{ translateY: "-200px", opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="navbar_left">
        <motion.img
          transition={{ duration: 0.5 }}
          animate={{
            rotate: "180deg"
          }}
          src={
            "/logo.svg"
          }
          alt="Not found"
          className="navbar_left_img"
        />
      </div>
      <div className="navbar_right">
        {
          navLinks.map((element, i) => {
            return (
              <motion.a
                key={i}
                animate={{
                  opacity: 1
                }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.05 + (i * 0.25), delay: 0.5 + (i * 0.05) }}
                className="navbar_right_link"
                onClick={() => {
                  _refs_[i]();
                  // console.log(_refs_[i]);
                  // heroScroll()
                  // location.pathname = element.hash;
                }}>
                {element.title}
              </motion.a>
            );
          })
        }
        {/* <motion.div
          animate={{
            opacity: 1
          }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.75 }}
          className="navbar_right_link" onClick={() => {
            // heroScroll()
          }}>
          Home
        </motion.div>
        <div className="navbar_right_link" onClick={() => {
          // aboutScroll()
        }}>
          About
        </div>
        <div className="navbar_right_link" onClick={() => {
          // expScroll()
        }}>
          Experience
        </div>
        <div className="navbar_right_link" onClick={() => {
          // projectsScroll()
        }}>
          Project
        </div>
        <div className="navbar_right_link" onClick={() => {
          // contactScroll()
        }}>
          Contact
        </div> */}
      </div>
    </motion.div>
  );
};

export default Navbar;
