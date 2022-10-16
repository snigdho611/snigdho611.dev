import Navbar from "components/Navbar";
import Base from "components/Hero";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Hero from "components/Hero";
import SkillSet from "components/Skills/SkillSet";
import Skills from "components/Skills";
import skills from "../server/skills.json";
import About from "components/About";
import Experience from "components/Experience";
import Projects from "components/Projects";
interface indexProps {
  val: string;
}

const Index: React.FC<indexProps> = ({ val }) => {
  return (
    <>
      <Head>
        <meta property="og:title" content="Snigdho Dip Howlader | Software Engineer" />
        <meta
          name="og:description"
          content="This is the personal portfolio of Snigdho Dip Howlader. Frontend Developer, Software Engineer and Computer Science enthusiast. Please find the contact details below if youa re willing to get in touch."
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/snigdho611/snigdho611.portfolio/main/public/images/profilepic.jpg"
        />
        <link rel="icon" href="/images/favicon.png" />
        <title>Snigdho Dip Howlader</title>
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      {/* <Skills skills={skills} />
      <div className="flex w-1/3 gap-20 justify-center mx-auto">
        <div
          className="w-40 h-40 bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/images/icons/reactjs.png')" }}
        />
        <div
          className="w-40 h-40 bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/images/icons/nextjs.png')" }}
        />
      </div> */}
      {/* <div className="rounded-full w-[50vh] h-[50vh] bg-blue-500">
      </div> */}
      {/* <div className="text-white">
        <div>Frontend</div>
        <div className="flex">
          <div className="w-1/4 flex justify-start">React</div>
          <div className="w-1/4 flex justify-end">Next JS</div>
        </div>
      </div> */}
    </>
  );
};

export async function getServerSideProps() {
  const value = process.env.BASE_VAL;
  // const var = api(abc)
  return { props: { val: value } };
}

export default Index;
