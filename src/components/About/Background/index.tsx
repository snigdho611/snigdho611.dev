import Education from "components/About/Background/Education";
import EducationRow from "components/About/Background/Education/EducationRow";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const edu = [
  {
    id: 1,
    name: "American International University-Bangladesh",
    imageURL: "/images/education/AIUB.png",
    degree: "Bachelor’s in Computer Science and Software Engineering",
    time: "January, 2018 - January, 2022",
  },
  {
    id: 2,
    name: "Maple Leaf International School",
    imageURL: "/images/education/MLIS.png",
    degree: "A ‘ Levels",
    time: "June, 2013 - January, 2017",
  },
  {
    id: 3,
    name: "Maple Leaf International School",
    imageURL: "/images/education/MLIS.png",
    degree: "O ‘ Levels",
    time: "June, 2012 - June, 2013",
  },
];

const Background = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      backgroundRef.current,
      {
        opacity: 0,
        x: -700,
      },
      { opacity: 1, x: 0, duration: 1 }
    );
  }, []);
  return (
    <div
      className="mx-auto 
    w-8/12
     flex flex-row mt-32"
      ref={backgroundRef}
    >
      <div className="w-full">
        <div className="text-justify text-cyan-100">
          <Education education={edu} />
        </div>
      </div>
    </div>
  );
};

export default Background;

{
  /* <p>
I'm from Dhaka, Bangladesh. I've always had an interest in computers
and software, mostly influenced by video games and music software.
</p>
<br /> */
}
{
  /* <EducationRow name="ABC" imageURL="/ABC" degree="ABC" time="abc" /> */
}
{
  /* <p>
Additionally, academically learned with Machine Learning, Data
Mining and Algorithms that contribute to problem solving skills. Can
easily adapt to technologies of all kinds and good at thinking on
  the go.
</p> */
}
{
  /* <div className="w-5/12">
  <div
    className="bg-cover w-56 h-56 rounded-full mx-auto my-5"
    style={{
      backgroundImage: "url(/images/profilepic.jpg)",
    }}
  />
</div> */
}
