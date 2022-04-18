import React from "react";
import Image from "next/image";

interface EducationCardProps {
  imageURL: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ imageURL }) => {
  return (
    <div className="align-self">
      <Image
        src={imageURL || "/images/education/AIUB.png"}
        alt="Image not found"
        height={100}
        width={100}
      />
    </div>
  );
};

export default EducationCard;
