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
    <div>
      <EducationCard imageURL={imageURL || ""} />
      <div
        style={{
          paddingLeft: "20px",
          width: "38%",
        }}
      >
        <div style={{ color: "#FFF", marginTop: "20px" }}>
          <div
            style={{ fontSize: "20px", fontWeight: "bold", margin: "5px 0px" }}
          >
            {name || "American"}
          </div>
          <div
            style={{
              fontSize: "18px",
              margin: "10px 0px",
              fontStyle: "italic",
            }}
          >
            {time || "March 22"}
          </div>
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
