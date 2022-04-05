import React from "react";

const About = () => {
  return (
    <div>
      <div
        className="bg-cover w-60 h-60 rounded-full"
        style={{
          backgroundImage: "url(/images/profilepic.jpg)",
        }}
      ></div>
      {/* <p>Abc</p> */}
    </div>
  );
};

// interface AboutProps {
//   about: string[];
// }

// const About: React.FC<AboutProps> = ({ about }) => {
//   return (
//     <div className="About-container">
//       <div className="Profile-img" />
//       <div className="Bar" />
//       <div>
//         <div className="Header">ABOUT</div>
//         <div className="About-text">
//           {about.map((element) => {
//             return (
//               <>
//                 {element}
//                 <br />
//                 <br />
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

export default About;
