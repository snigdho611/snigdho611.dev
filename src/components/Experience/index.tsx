import React from "react";
import ExperienceCard from "./ExperienceCard";
import ExperienceRow from "./ExperienceRow";

const data = [
  {
    id: 1,
    url: "/images/experience/mainframelabs.png",
    description:
      "Worked with React JS, Next JS and Mongo DB for extensive work on the frontend and database maangement for a robust Ed-Tech project.",
    org: "Mainframe Labs Ltd.",
    position: "Junior Software Engineer",
  },
  {
    id: 2,
    url: "/images/experience/deepchainlabs.png",
    description:
      "Worked with Laravel and Laravel Livewire for creating robust, interactive websites for clients for satisfactory outputs.",
    position: "Research and Development Intern",
    org: "DeepChain Labs",
  },
];

const index = () => {
  return (
    <div style={{ margin: "120px auto 0 auto" }}>
      <div className="Header">EXPERIENCE</div>
      {data.map(({ id, url, description, org, position }) => {
        if (id % 2 == 0) {
          return (
            <ExperienceRow
              key={id}
              org={org}
              position={position}
              description={description}
              url={url}
              align={"r"}
            />
          );
        } else {
          return (
            <ExperienceRow
              key={id}
              org={org}
              position={position}
              description={description}
              url={url}
              align={"l"}
            />
          );
        }
      })}
    </div>
  );
};

export default index;
