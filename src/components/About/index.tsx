import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const data = [
  "JavaScript",
  "Python",
  "React",
  "Node",
  "Laravel",
  "Docker",
  "PostGreSQL",
  "MongoDB",
];

const About = () => {
  const vari = {
    visible: { opacity: 1 },
    borderMove: { marginLeft: 0, marginTop: 0 },
  };

  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1, repeat: 0 }}
      className="flex flex-col lg:flex-row my-72 w-3/4 mx-auto font-sans"
    >
      <div className="flex flex-col w-full lg:w-1/2 items-center text-slate-400">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between w-full">
            <span className="w-1/3 text-2xl text-slate-50">About Me</span>
            <hr className="w-2/3" />
          </div>
          <div className="flex flex-col gap-3">
            <span>
              I am Snigdho Dip Howlader, and I enjoy adding my work to the internet. My interest in
              web development was formed in 2020 when I started creating projects for fun. I am now
              dedicated to creating, fixing and maintaining all things related to the web for my
              career.
            </span>
            <span>
              Today I work at{" "}
              <a href="https://bjitgroup.com/" className="text-emerald-500">
                BJIT, Bangladesh
              </a>{" "}
              as a Web Engineer. I have a degree in Computer Science & Software Engineering from{" "}
              <a href="https://www.aiub.edu/" className="text-emerald-500">
                American International University - Bangladesh
              </a>
              . I believe my knowledge is a drop in an ocean and my learning will never truly end.
            </span>
            <span>
              Additionally, I also venture into Machine Learning and Computer Vision in my offtime
              research which I conduct in leisure.
            </span>
          </div>
          <div>Skills:</div>
          <div className="flex flex-wrap">
            {data.map((element, i) => {
              return (
                <span
                  style={{ flex: "1 0 50%" }}
                  key={i}
                  className="flex items-center my-1 gap-x-2"
                >
                  <Image src="/images/arrow.svg" alt="Not found" height={10} width={10} />
                  {element}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center mt-10">
        <motion.div whileHover={{ scale: 1.1 }} className="flex h-72 justify-center">
          <div className="absolute w-60 h-60 hover:w-54 cursor-pointer">
            <Image
              src={
                "https://res.cloudinary.com/drnym8nne/image/upload/v1665871812/portfolio/profilepic_xrxbld.jpg"
              }
              layout="fill"
              alt="Not found"
            />
          </div>
          <div
            // whileHover={{ marginLeft: 0, marginTop: 0 }}
            className="w-60 h-60 border-4 border-emerald-100 ml-10 mt-6 cursor-pointer"
          ></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
