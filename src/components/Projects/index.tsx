import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface IProject {
  id: number;
  title: string;
  description: string;
  stacks: string[];
  url: string;
}

interface IProjectProps {
  data: IProject[];
}

const Projects: React.FC<IProjectProps> = ({ data }) => {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-3/4 mx-auto my-48 h-fit flex flex-wrap gap-5"
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
            </div>
            <div className="text-xl">{title}</div>
            <div className="text-slate-500">{description}</div>
            <div className="text-slate-400 flex flex-wrap justify-center gap-4 text-sm">
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
