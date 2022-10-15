import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface ExperienceCardProps {
  imageURL: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ imageURL }) => {
  return (
    <div
      className="align-self mx-auto bg-cover"
      style={{
        minHeight: "100px",
        height: "100px",
        minWidth: "100px",
        width: "100px",
        backgroundImage: `url(${imageURL})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default ExperienceCard;
