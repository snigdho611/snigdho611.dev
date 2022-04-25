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
  const initialsRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (initialsRef.current) {
      if (windowWidth > windowLimit) {
        if (!nameAnimation) {
          if (router.pathname == "/") {
            initialsRef.current.style.display = "fixed";
            gsap.fromTo(
              initialsRef.current,
              {
                scale: 15,
                x: "100vh",
                y: "50vh",
              },
              { scale: 1, x: 0, y: 0, duration: 2, delay: 1 }
            );
          }
        } else if (nameAnimation) {
          initialsRef.current.style.display = "initial";
        }
      } else {
        initialsRef.current.style.display = "none";
      }
    }
  }, [windowWidth, nameAnimation, router]);

  const linkClass =
    "transition duration-300 text-cyan-600 mx-10 font-semibold hover:text-cyan-100 text-xl";
  return (
    <div
      className="flex-row flex text-xl py-7 w-screen z-10"
      style={{
        backgroundColor: "#111827",
        position: "fixed",
        top: 0,
      }}
    >
      <div
        className="w-1/4"
        onClick={() => {
          router.push("/");
        }}
        style={{
          justifyContent: "center",
          overflow: "auto",
          padding: "0 50px",
        }}
      >
        {windowWidth > windowLimit ? (
          <div
            style={{
              backgroundImage: "url(/images/favicon2.svg)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              width: "100px",
              height: "25px",
              position: "fixed",
              cursor: "pointer",
              // alignSelf: "center",
            }}
            ref={initialsRef}
          />
        ) : (
          <div
            style={{
              backgroundImage: "url(/images/favicon2.svg)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              width: "100px",
              height: "25px",
              position: "fixed",
              cursor: "pointer",
            }}
            // ref={initialsRef}
          />
        )}
      </div>
      <div className="mx-auto">
        <Link href={"/about"}>
          <a
            className={`${linkClass} ${
              router.pathname === "/about" ? "text-cyan-100" : null
            }`}
          >
            About
          </a>
        </Link>
        <Link href={"/skills"}>
          <a
            className={`${linkClass} ${
              router.pathname === "/skills" ? "text-cyan-100" : null
            }`}
          >
            Skills
          </a>
        </Link>
        <Link href={"/experience"}>
          <a
            className={`${linkClass} ${
              router.pathname === "/experience" ? "text-cyan-100" : null
            }`}
          >
            Experience
          </a>
        </Link>
        <Link href={"/projects"}>
          <a
            className={`${linkClass} ${
              router.pathname === "/projects" ? "text-cyan-100" : null
            }`}
          >
            Projects
          </a>
        </Link>
        <Link href={"/contact"}>
          <a
            className={`${linkClass} ${
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
