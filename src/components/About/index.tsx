import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const About = () => {
  const baseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      baseRef.current,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <div className="mx-auto w-3/4 flex flex-row" ref={baseRef}>
      <div>
        <div
          className="bg-cover w-60 h-60 min-w-60 min-h-60 rounded-full"
          style={{
            backgroundImage: "url(/images/profilepic.jpg)",
          }}
        />
      </div>
      <div>
        <div>Overview</div>
        <div>
          A Professional Software Developer with experience in the industry.
          Avid in both frontend and backend development technologies, the main
          domain of expertise are web development, databases, problem solving,
          desktop development and responsive designing. Additionally,
          academically learned with Machine Learning, Data Mining and Algorithms
          that contribute to problem solving skills. Can easily adapt to
          technologies of all kinds and good at thinking on the go.
        </div>
      </div>
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
