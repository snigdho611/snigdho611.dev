import React from "react";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  stacks: string;
  url: string;
  color: string;
}

const index: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  stacks,
  url,
  color,
}) => {
  return (
    <div
      style={{
        minWidth: "280px",
        width: "280px",
        height: "200px",
        backgroundColor: color,
        margin: "10px auto",
        // flex: 0.33,
        zIndex: 2,
        padding: "10px 10px",
        borderRadius: "15px",
      }}
    >
      <div
        style={{
          // fontWeight: "bold",
          fontSize: "25px",
          textAlign: "center",
          color: "white",
        }}
      >
        {title}
      </div>
      <div
        style={{
          // fontWeight: "bold",
          fontSize: "20px",
          textAlign: "justify",
          color: "#BEEBF9",
          margin: "10px auto",
        }}
      >
        {description}
      </div>
      <div
        style={{
          // fontWeight: "bold",
          fontSize: "17px",
          textAlign: "center",
          color: "#FFF",
          margin: "15px auto 5px auto",
        }}
      >
        Stacks Used:{stacks}
      </div>
      <div
        style={{
          // fontWeight: "bold",
          fontSize: "17px",
          textAlign: "center",
          color: "#FFF",
          margin: "5px auto",
        }}
      >
        Click{" "}
        <a href={url} style={{ color: "#5BC0DE", textDecoration: "none" }}>
          here
        </a>{" "}
        for details and the source code
      </div>
    </div>
  );
};

export default index;
