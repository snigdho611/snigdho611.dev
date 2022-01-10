import React from "react";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const About = () => {
  const photoRef = useRef(null);

  useEffect(() => {
    gsap.to(photoRef.current, { rotation: 360, duration: 1 });
  });

  return (
    <div className="About-container">
      <div className="Profile-img" ref={photoRef} />
      <div className="Bar" />
      <div>
        <div className="Header">ABOUT</div>
        <div className="About-text">
          An efficient Professional Software Developer with experience in the
          industry. Avid in both frontend and backend development technologies,
          aspiring for contribution to the world of computer science and
          technology. The main domain of expertise are web development,
          databases, problem solving, desktop development and responsive
          designing.
          <br />
          <br />
          Additionally, academically learned with Machine Learning, Data Mining
          and Algorithms that contribute to problem solving skills. Can easily
          adapt to technologies of all kinds and good at thinking on the go.
        </div>
      </div>
    </div>
  );
};

export default About;
