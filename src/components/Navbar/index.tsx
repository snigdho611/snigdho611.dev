import React from "react";
import "./index.scss";
import { motion } from "framer-motion";

// const navLinks = [
//   {
//     title: "Home",
//     hash: "#hero"
//   },
//   {
//     title: "About",
//     hash: "#hero"
//   },
//   {
//     title: "Experience",
//     hash: "#hero"
//   },
//   {
//     title: "Project",
//     hash: "#hero"
//   },
//   {
//     title: "Contact",
//     hash: "#hero"
//   }
// ];

const Navbar: React.FC = () => {

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
          onClick={() => {
            // router("/");
            window.scrollTo(0, 0);
          }}
        />
      </div>

    </motion.div>
  );
};

export default Navbar;
