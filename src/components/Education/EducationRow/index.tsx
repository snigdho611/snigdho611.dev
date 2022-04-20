import React from "react";
import EducationCard from "./EducationCard";

export interface EducationRowProps {
  id?: number;
  name?: string;
  imageURL?: string;
  degree?: string;
  time?: string;
}

const EducationRow: React.FC<EducationRowProps> = ({
  name,
  imageURL,
  degree,
  time,
}) => {
  return (
    <div className="flex flex-row mx-auto my-10 ">
      <EducationCard imageURL={imageURL || ""} />
      <div className="pl-5">
        <div className="text-white ">
          <div className="text-xl font-bold">{name || "American"}</div>
          <div className="text-medium font-bold my-2">{degree || "BSc"}</div>
          <div className="text-small italic my-2">{time || "March 22"}</div>
        </div>
      </div>
    </div>
  );
};

export default EducationRow;

{
  /* <div
  style={{
    minWidth: "10px",
    width: "10px",
    minHeight: "100%",
    backgroundColor: "#5BC0DE",
    float: "right",
  }}
/> */
}
{
  /* <div
  style={{
    height: "10px",
    minHeight: "10px",
    minWidth: "60px",
    width: "60px",
    backgroundColor: "#5BC0DE",
  }}
></div> */
}
