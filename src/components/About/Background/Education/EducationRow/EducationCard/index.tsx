import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

interface EducationCardProps {
  imageURL: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ imageURL }) => {
  return (
    <div
      className="align-self mx-auto bg-cover"
      style={{
        minHeight: "100px",
        height: "100px",
        minWidth: "100px",
        width: "100px",
        backgroundImage: `url(${imageURL})`,
      }}
    />
  );
};

export default EducationCard;
