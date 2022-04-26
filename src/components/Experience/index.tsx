import Image from "next/image";
import React from "react";
// import ExperienceCard from "./ExperienceCard";
// import ExperienceRow from "./ExperienceRow";

const data = [
  {
    id: 3,
    imageURL: "/images/experience/deepchainlabs.png",
    siteURL: "https://bjitgroup.com/",
    description: "Laravel and Laravel Livewire - client websites",
    position: "Research and Development Intern",
    org: "DeepChain Labs",
  },
  {
    id: 2,
    imageURL: "/images/experience/deepchainlabs.png",
    siteURL: "https://deepchainlabs.com/",
    description: "Laravel and Laravel Livewire - client websites",
    position: "Research and Development Intern",
    org: "DeepChain Labs",
  },
  {
    id: 1,
    imageURL: "/images/experience/mainframelabs.png",
    siteURL: "https://mainframelabs.ltd/",
    description: "React JS, Next JS and Mongo DB - EdTech platform",
    org: "Mainframe Labs Ltd.",
    position: "Junior Software Engineer",
  },
];

const Experience = () => {
  return (
    <div className="mt-24">
      {/* <div>ABC</div> */}
      <Image src={data[0].imageURL} width={100} height={100} />
    </div>
    // <div style={{ margin: "120px auto 0 auto" }}>
    //   <div className="Header">EXPERIENCE</div>
    //   {data.map(({ id, siteURL, imageURL, description, org, position }) => {
    //     if (id % 2 == 0) {
    //       return (
    //         <ExperienceRow
    //           key={id}
    //           org={org}
    //           position={position}
    //           description={description}
    //           siteURL={siteURL}
    //           imageURL={imageURL}
    //           align={"r"}
    //         />
    //       );
    //     } else {
    //       return (
    //         <ExperienceRow
    //           key={id}
    //           org={org}
    //           position={position}
    //           description={description}
    //           siteURL={siteURL}
    //           imageURL={imageURL}
    //           align={"l"}
    //         />
    //       );
    //     }
    //   })}
    // </div>
  );
};

export default Experience;
