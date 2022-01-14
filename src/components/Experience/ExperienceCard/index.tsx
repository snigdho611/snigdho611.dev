import React from "react";

interface ExperienceCardProps {
  url: string;
}

const index: React.FC<ExperienceCardProps> = ({ url }) => {
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className="experience-card"
    ></div>
  );
};

export default index;
