import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar = () => {
  const router = useRouter();

  const [windowWidth, setWindowWidth] = useState<Number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [nameAnimation, setNameAnimation] = useState<boolean>(false);
  const textRef = useRef<HTMLDivElement>(null);
  const windowLimit = 1350;

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };
    window.addEventListener("resize", handleResize);

    if (windowWidth < windowLimit) {
      setNameAnimation(false);
    } else {
      setNameAnimation(true);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  const onLoad = (currentTarget: React.RefObject<HTMLDivElement>) => {
    gsap.fromTo(
      currentTarget.current,
      {
        scale: 15,
        x: "100vh",
        y: "45vh",
      },
      { scale: 1, x: 0, y: 0, duration: 2, delay: 1 }
    );
  };
  useEffect(() => {
    if (textRef.current) {
      if (windowWidth > windowLimit) {
        if (!nameAnimation) {
          if (router.pathname == "/") {
            textRef.current.style.display = "fixed";
            onLoad(textRef);
          } else {
          }
        } else if (nameAnimation) {
          textRef.current.style.display = "initial";
        }
      } else {
        textRef.current.style.display = "none";
      }
    }
  }, [windowWidth, nameAnimation, router]);

  const linkClass = "text-cyan-600 mx-10 font-semibold hover:text-cyan-100";
  return (
    <div className="navbar-container">
      <div className="w-1/4">
        <div
          style={{
            backgroundImage: "url(/images/favicon2.svg)",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            minWidth: "100px",
            width: "10%",
            height: "3%",
            position: "fixed",
            cursor: "pointer",
          }}
          ref={textRef}
        />
      </div>
      <div className="w-3/4">
        <Link href={"/about"}>
          <a href="#" className={linkClass}>
            About
          </a>
        </Link>
        <Link href={"/skills"}>
          <a href="#" className={linkClass}>
            Skills
          </a>
        </Link>
        <Link href={"/experience"}>
          <a href="#" className={linkClass}>
            Experience
          </a>
        </Link>
        <Link href={"/projects"}>
          <a href="#" className={linkClass}>
            Projects
          </a>
        </Link>
        {/* <Link href={"/about"}>
          <a href="#" className={linkClass}>
            Education
          </a>
        </Link> */}
        <Link href={"/contact"}>
          <a href="#" className={linkClass}>
            Contact
          </a>
        </Link>
      </div>
    </div>
  );
};

// const Navbar = () => {
//   return (
//     <div className="Navbar">
//       <div className="Name">{/* {allData.name} */}</div>
//       <div className="links-container">
//         <div className="link-row">
//           <a
//             href="#"
//             //   onClick={scrollToAbout}
//             className="link"
//           >
//             About
//           </a>
//           <a
//             href="#"
//             //   onClick={scrollToSkills}
//             className="link"
//           >
//             Skills
//           </a>
//           <a
//             href="#"
//             //   onClick={scrollToExperience}
//             className="link"
//           >
//             Experience
//           </a>
//         </div>
//         <div className="link-row">
//           <a
//             href="#"
//             //   onClick={scrollToProjects}
//             className="link"
//           >
//             Projects
//           </a>
//           <a
//             href="#"
//             //   onClick={scrollToEducation}
//             className="link"
//           >
//             Education
//           </a>
//           <a
//             href="#"
//             //   onClick={scrollToContact}
//             className="link"
//           >
//             Contact
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Navbar;
