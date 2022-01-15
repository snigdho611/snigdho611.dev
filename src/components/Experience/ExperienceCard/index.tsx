import React from "react";

interface ExperienceCardProps {
  imageURL: string;
  siteURL: string;
}

const index: React.FC<ExperienceCardProps> = ({ imageURL, siteURL }) => {
  return (
    <a href={siteURL}>
      <div
        style={{ backgroundImage: `url(${imageURL})` }}
        className="experience-card"
      ></div>
    </a>
  );
};

export default index;
