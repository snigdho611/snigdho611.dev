import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const data = [
  {
    company: "BJIT",
    title: "Software Engineer",
    timeStart: "Mar 2022",
    timeEnd: "Present",
    url: "https://bjitgroup.com/",
    description: [
      "Wrote modern, maintainable code for client and internal projects in frontend development with React and various libraries",
      "Created modern, robust API with Node JS, Express JS and PostGreSQL for backend development and database management",
      "Applied containerization with Docker",
      "Worked with microservices for interservice functionalities between them",
    ],
  },
  {
    company: "Sohopathi",
    title: "Frontend Software Engineer",
    timeStart: "Sep 2021",
    timeEnd: "Mar 2022",
    url: "https://sohopathi.io/",
    description: [
      "Created maintainable UI with React JS and CSS for frontend development",
      "Wrote scripts for mongoose for proper complex querying and manipulation of data",
      "Created API with Node JS, Express JS and MongoDB",
    ],
  },
  {
    company: "Deepchainlabs",
    title: "Software Engineer",
    timeStart: "Jul 2021",
    timeEnd: "Sep 2022",
    url: "https://www.deepchainlabs.com/",
    description: [
      "Maintained documentation for client projects",
      "Created system diagrams for client project",
      "Worked on client project with Laravel and MySQL",
    ],
  },
];

const Experience: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-3/4 mx-auto my-72 h-72"
    >
      <div className="flex items-center justify-between w-full my-10">
        <span className="w-1/3 text-2xl text-slate-50">Experience</span>
        <hr className="w-2/3" />
      </div>
      <div className="flex sm:flex-row flex-col sm:gap-0 gap-10">
        <div className="w-full sm:w-1/3 flex flex-col">
          {data.map(({ company }, i) => {
            return (
              <div
                key={i}
                onClick={() => setActiveExperience(i)}
                className={`border-l-2 border-white font-mono py-3 px-3 cursor-pointer hover:bg-cyan-900 transition-colors ${
                  activeExperience === i ? "text-cyan-300 border-cyan-300" : "text-slate-500"
                }`}
              >
                {company}
              </div>
            );
          })}
        </div>
        <div className="sm:w-2/3 w-full flex flex-col gap-3">
          <span className="text-cyan-300 text-xl">
            <span className="text-slate-50">{data[activeExperience].title}</span>
            <span>
              {" "}
              @ <Link href={data[activeExperience].url}>{data[activeExperience].company}</Link>
            </span>
          </span>
          <span className="text-slate-300">
            {data[activeExperience].timeStart} - {data[activeExperience].timeEnd}
          </span>
          <div className="text-slate-500 flex flex-col gap-4">
            {data[activeExperience].description.map((element, i) => {
              // return <span key={i}>{element}</span>;
              return (
                <div className="flex gap-2" key={i}>
                  <span className="flex w-1/12">
                    <Image src="/images/arrow.svg" alt="Not found" height={15} width={15} />
                  </span>
                  <span className="w-11/12">{element}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
