import React from "react";
import EducationRow from "./EducationRow";

const data = [
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

const Education = () => {
  return (
    <div
      style={{
        margin: "120px auto 0 auto",
        width: "75%",
        border: "1px solid white",
      }}
    >
      <div className="Header">EDUCATION</div>
      {data.map(({ id, name, imageURL, degree, time }) => {
        return (
          <EducationRow
            key={id}
            name={name}
            imageURL={imageURL}
            degree={degree}
            time={time}
          />
        );
      })}
    </div>
  );
};

export default Education;
