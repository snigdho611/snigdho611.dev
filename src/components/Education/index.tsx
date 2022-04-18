import React from "react";
import EducationRow, { EducationRowProps } from "./EducationRow";

interface EducationProps {
  education: EducationRowProps[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <div className="mx-auto w-3/4">
      <h1
        className="text-4xl text-center text-cyan-400 
         my-4"
      >
        Education
      </h1>
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
