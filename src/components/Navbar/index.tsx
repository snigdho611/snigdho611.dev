import React from "react";
import "./index.scss";
import { motion } from "framer-motion";

// interface NavbarProps {
//   heroRef: MutableRefObject<any>;
//   aboutRef: MutableRefObject<any>;
//   expRef: MutableRefObject<any>;
//   projectsRef: MutableRefObject<any>;
//   contactRef: MutableRefObject<any>;
// }

const navLinks = [
  {
    title: "Home"
  },
  {
    title: "About",
  },
  {
    title: "Experience",
  },
  {
    title: "Project",
  },
  {
    title: "Contact",
  }
];

const Navbar: React.FC = (
  // { heroRef, aboutRef, expRef, projectsRef, contactRef }
) => {
  // const heroScroll = () => heroRef.current.scrollIntoView({ behavior: "smooth" });
  // const aboutScroll = () => aboutRef.current.scrollIntoView({ behavior: "smooth" });
  // const expScroll = () => expRef.current.scrollIntoView({ behavior: "smooth" });
  // const projectsScroll = () => projectsRef.current.scrollIntoView({ behavior: "smooth" });
  // const contactScroll = () => contactRef.current.scrollIntoView({ behavior: "smooth" });

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
            "	https://res.cloudinary.com/drnym8nne/image/upload/v1689936405/portfolio/nav/logo_pvu06n.svg"
          }
          alt="Not found"
          className="navbar_left_img"
        />
      </div>
      <div className="navbar_right">
        {
          navLinks.map((element, i) => {
            return (
              <motion.div
                key={i}
                animate={{
                  opacity: 1
                }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.05 + (i * 0.25), delay: 0.5 + (i * 0.05) }}
                className="navbar_right_link" onClick={() => {
                  // heroScroll()
                }}>
                {element.title}
              </motion.div>
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
