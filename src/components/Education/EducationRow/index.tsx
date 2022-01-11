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
          // border: "1px solid blue",
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
          width: "38%",
          // border: "1px solid green",
        }}
      >
        <div style={{ color: "#FFF", marginTop: "20px" }}>
          <div
            style={{ fontSize: "20px", fontWeight: "bold", margin: "5px 0px" }}
          >
            {name}
          </div>
          <div style={{ fontSize: "18px", margin: "10px 0px" }}>{degree}</div>
          <div
            style={{
              fontSize: "18px",
              margin: "10px 0px",
              fontStyle: "italic",
            }}
          >
            {time}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationRow;
