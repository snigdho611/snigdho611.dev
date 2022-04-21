import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

interface EducationCardProps {
  imageURL: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ imageURL }) => {
  // const edBox = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   gsap.to(edBox.current, { x: 100 });
  // }, []);

  return (
    <div
      // onLoad={(el) => {
      //   gsap.to(el, { x: 100 });
      // }}
      // ref={edBox}
      className="align-self"
      style={{
        minHeight: "100px",
        height: "100px",
        minWidth: "100px",
        width: "100px",
        backgroundImage: `url(${imageURL})`,
        backgroundSize: "cover",
      }}
    >
      {/* <Image
        src={imageURL || "/images/education/AIUB.png"}
        alt="Image not found"
        height={100}
        width={100}
      /> */}
    </div>
  );
};

export default EducationCard;
