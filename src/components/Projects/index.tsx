import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Smart Inventory System",
    description:
      "A web application that uses Data Mining to suggest inventory items to the user for better sales and predictive analysis.",
    stacks: ["React JS", "CSS", "SQL", "Python", "Django"],
    url: "https://github.com/snigdho611/smart-inventory-using-data-mining",
  },
  {
    id: 2,
    title: "Industryal",
    description:
      "A fullstack ERP system that can handle the entirety of factory management process, from raw materials to finished products.",
    stacks: ["React JS", "CSS", "Laravel", "SQL"],
    url: "https://github.com/fffffatah/Industryal-An-ERP-System",
  },
  {
    id: 3,
    title: "e-Bookshelf",
    description:
      "A simple social media website for bookworms who want to share all their opinions and reviews of books.",
    stacks: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    url: "https://github.com/Atanusaha143/eBookshelf---a-Book-Cataloging-Social-Platform",
  },
  {
    id: 4,
    title: "Hospital Management System",
    description:
      "A desktop application that lets the user keep track of patients and employees in a hospital according to different categories.",
    stacks: ["C# (.NET)", "Oracle SQL"],
    url: "https://github.com/snigdho611/hospital-management-system",
  },
];

const Projects = () => {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-3/4 mx-auto my-60 h-fit flex flex-wrap gap-5"
    >
      <div className="flex items-center justify-between w-full my-5">
        <span className="w-1/3 text-2xl text-slate-50">Projects</span>
        <hr className="w-2/3" />
      </div>
      {data.map(({ id, title, description, stacks, url }) => {
        return (
          <motion.a
            href={url}
            whileHover={{ y: -7.5 }}
            className="flex flex-col gap-3 grow-0 px-4 py-8 shrink basis-full mx-auto lg:basis-[30%] border-2 hover:text-emerald-400 text-slate-300 transition-colors border-emerald-400 rounded-lg font-sans"
            key={id}
          >
            <div className="flex justify-between h-12">
              <div>
                <div className="absolute w-10 h-10">
                  <Image src={"/images/folder.svg"} alt="Not found" layout="fill" />
                </div>
              </div>
              {/* <div className="flex">
                <div>Link</div>
              </div> */}
            </div>
            <div className="text-xl">{title}</div>
            <div className="text-slate-500">{description}</div>
            <div className="text-slate-500 flex gap-4 text-sm">
              {stacks.map((element, i) => {
                return <div key={i}>{element}</div>;
              })}
            </div>
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default Projects;
