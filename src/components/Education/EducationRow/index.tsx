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
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "150px",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "10%",
          border: "1px solid blue",
        }}
      >
        <div
          style={{
            minWidth: "10px",
            width: "10px",
            minHeight: "100%",
            backgroundColor: "#5BC0DE",
            float: "right",
          }}
        />
      </div>

      <div style={{ paddingTop: "50px" }}>
        <div
          style={{
            height: "10px",
            minHeight: "10px",
            minWidth: "60px",
            width: "60px",
            backgroundColor: "#5BC0DE",
          }}
        ></div>
      </div>
      <EducationCard imageURL={imageURL} />
      <div
        style={{
          paddingLeft: "20px",
          width: "25%",
          border: "1px solid green",
        }}
      >
        <div>{name}</div>
        <div>{degree}</div>
        <div>{time}</div>
      </div>
    </div>
  );
};

export default EducationRow;
