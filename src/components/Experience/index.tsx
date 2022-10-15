import React, { useEffect, useRef } from "react";
import ExperienceRow, { ExperienceRowProps } from "./ExperienceRow";

interface ExperienceProps {
  title: string;
  experience: ExperienceRowProps[];
}

const Experience: React.FC<ExperienceProps> = ({ title, experience }) => {
  const educationRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="mx-auto 
    w-8/12
     flex flex-row mt-32"
      ref={educationRef}
    >
      <div className="w-full">
        <div>
          <h1
            className="text-4xl text-center text-cyan-400 
         my-4"
          >
            {title}
          </h1>
          <div className="flex flex-row">
            <div className="px-8 w-full">
              {experience.map(({ id, name, imageURL, degree, time, siteURL }) => {
                return (
                  <ExperienceRow
                    key={id}
                    name={name}
                    imageURL={imageURL}
                    degree={degree}
                    time={time}
                    siteURL={siteURL}
                    id={id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
