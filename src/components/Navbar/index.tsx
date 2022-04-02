import React from "react";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar = () => {
  const linkClass = "text-cyan-100 m-10";
  return (
    <div className="flex-row flex-auto text-2xl my-7">
      <a href="#" className={linkClass}>
        About
      </a>
      <a href="#" className={linkClass}>
        Skills
      </a>
      <a href="#" className={linkClass}>
        Experience
      </a>
      <a href="#" className={linkClass}>
        Projects
      </a>
      <a href="#" className={linkClass}>
        Education
      </a>
      <a href="#" className={linkClass}>
        Contact
      </a>
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
