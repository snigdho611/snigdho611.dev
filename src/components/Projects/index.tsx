import React from "react";
import ProjectCard from "./ProjectCard";

const data = [
  {
    id: 1,
    title: "Smart Inventory System",
    description:
      "A web application that uses Data Mining to suggest inventory items to the user for better sales and predictive analysis.",
    stacks: "React JS, CSS, SQL, Python, Django",
    url: "",
  },
  {
    id: 2,
    title: "Industryal",
    description:
      "A fullstack ERP system that can handle the entirety of factory management process, from raw materials to finished products.",
    stacks: "React JS, CSS, Laravel, SQL",
    url: "",
  },
  {
    id: 3,
    title: "e-Bookshelf",
    description:
      "A simple social media website for bookworms who want to share all their opinions and reviews of books.",
    stacks: "HTML, CSS, JavaScript, PHP, SQL",
    url: "",
  },
  {
    id: 4,
    title: "Smart Inventory System",
    description:
      "A desktop application that lets the user keep track of patients and employees in a hospital according to different categories.",
    stacks: "C# (.NET), Oracle SQL",
    url: "",
  },
];

const index = () => {
  return (
    <div>
      <div
        style={{
          margin: "120px auto 0 auto",
          width: "75%",
        }}
      >
        <div className="Header">PROJECTS</div>
        <div
          style={{
            display: "flex",
            margin: "0 auto",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          {data.map(({ id, title, description, stacks, url }) => {
            return (
              <ProjectCard
                key={id}
                id={id}
                title={title}
                description={description}
                stacks={stacks}
                url={url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default index;
