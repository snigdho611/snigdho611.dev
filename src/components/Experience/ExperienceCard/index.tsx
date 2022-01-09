import React from "react";

interface ExperienceCardProps {
  url: string;
  name: string;
}

const index: React.FC<ExperienceCardProps> = ({ url }) => {
  return (
    <div
      style={{
        borderRadius: "100%",
        width: "90px",
        height: "90px",
        backgroundColor: "#BEEBF9",
        margin: "50px -40px",
        position: "absolute",
        border: "2px solid white",
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default index;
