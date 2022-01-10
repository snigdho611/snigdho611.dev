import React from "react";
import EducationCard from "../EducationCard";

interface EducationRowProps {
  name: string;
  imageURL: string;
  degree: string;
  time: string;
}

const EducationRow: React.FC<EducationRowProps> = ({
  name,
  imageURL,
  degree,
  time,
}) => {
  return (
    <div>
      {/* <div
        style={{ minWidth: "5px", width: "5px", backgroundColor: "#5BC0DE" }}
      ></div> */}
      <EducationCard imageURL={imageURL} />
    </div>
  );
};

export default EducationRow;
