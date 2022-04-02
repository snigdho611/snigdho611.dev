import React from "react";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar = () => {
  return (
    <div>
      <div>{/* {allData.name} */}</div>
      <div>
        <a href="#">About</a>
        <a href="#">Skills</a>
        <a href="#">Experience</a>
        <a href="#">Projects</a>
        <a href="#">Education</a>
        <a href="#">Contact</a>
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
