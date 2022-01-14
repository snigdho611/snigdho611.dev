import React from "react";
import EducationRow, { EducationRowProps } from "./EducationRow";

interface EducationProps {
  education: EducationRowProps[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <div
      style={{
        margin: "120px auto 0 auto",
        width: "75%",
      }}
    >
      <div className="Header">EDUCATION</div>
      {education.map(({ id, name, imageURL, degree, time }) => {
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
