import gsap from "gsap";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
// import About from "components/About";
// import Skills from "components/Skills";
// import Experience from "components/Experience";
// import Projects from "components/Projects";
// import Education from "components/Education";
// import ParticleEffect from "components/ParticleEffect";
// import Footer from "components/Footer";
// import Contact from "components/Contact";
// import { motion } from "framer-motion";
// import { scroller } from "react-scroll";
// import { useEffect, useState } from "react";

interface HomeProps {
  val: string;
}

const Home: React.FC<HomeProps> = ({ val }) => {
  const textRef = useRef<HTMLDivElement>(null);

  const onLoad = (currentTarget: React.RefObject<HTMLDivElement>) => {
    gsap.fromTo(
      currentTarget.current,
      { scale: 15, delay: 0.7, x: 800, y: 350 },
      { scale: 1, x: 0, y: 0, delay: 1, duration: 1 }
    );
  };

  // const onUnload = ({ currentTarget }: any) => {
  //   gsap.to(currentTarget, { scale: 1.0 });
  // };

  useEffect(() => {
    onLoad(textRef);
  }, []);

  return (
    <>
      <Head>
        {/* <title>{allData.name}</title> */}
        <meta
          property="og:title"
          content="Snigdho Dip Howlader | Software Engineer"
        />
        <meta
          name="og:description"
          content="This is the personal portfolio of Snigdho Dip Howlader. Frontend Developer, Software Engineer and Computer Science enthusiast. Please find the contact details below if youa re willing to get in touch."
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/snigdho611/snigdho611.portfolio/main/public/images/profilepic.jpg"
        />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      {/* <div>{val}</div> */}
      <div
        style={{
          // backgroundColor: "gray",
          // backgroundImage: ".public/images/favicon.png",
          minWidth: "100px",
          width: "100px",
          minHeight: "50px",
          height: "50px",
          // margin: "20px auto",
        }}
        ref={textRef}
        // onMouseEnter={onLoad}
        // onMouseLeave={onUnload}
      >
        {/* <img alt="empty" src="../" /> */}
        <Image
          src={"/images/favicon2.svg"}
          width={100}
          height={50}
          alt="Image not found"
        />
      </div>
      {/* <div className="Navbar">
        <div className="Name">{allData.name}</div>
        <div className="links-container">
          <div className="link-row">
            <a href="#" className="link">
              About
            </a>
            <a href="#" className="link">
              Skills
            </a>
            <a href="#" className="link">
              Experience
            </a>
          </div>
          <div className="link-row">
            <a href="#" className="link">
              Projects
            </a>
            <a href="#" className="link">
              Education
            </a>
            <a href="#" className="link">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="aboutClass">
        <About about={allData.about} />
      </div>
      <div className="skillsClass">
        <Skills />
      </div>
      <div className="experienceClass">
        <Experience />
      </div>
      <div className="projectsClass">
        <Projects projects={allData.projects} />
      </div>
      <div className="educationClass">
        <Education education={allData.education} />
      </div>
      <div className="contactClass">
        <Contact />
        <Footer />
      </div> */}
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  const value = process.env.BASE_VAL;
  // Pass data to the page via props
  return { props: { val: value } };
}

export default Home;
