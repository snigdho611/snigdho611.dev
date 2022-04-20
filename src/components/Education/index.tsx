import React from "react";
import EducationRow, { EducationRowProps } from "./EducationRow";

interface EducationProps {
  education: EducationRowProps[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <div>
      <h1
        className="text-4xl text-center text-cyan-400 
         my-4"
      >
        Education
      </h1>
      <div className="flex flex-row">
        <div className="bg-cyan-800 w-4" />
        <div className="px-3">
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
      </div>
    </div>
  );
};

export default Education;
