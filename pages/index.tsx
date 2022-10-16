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
import Image from "next/image";
import { motion } from "framer-motion";

interface indexProps {
  val: string;
}

const Index: React.FC<indexProps> = ({ val }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotateY: 360, scale: 0.2 }}
          transition={{ duration: 1 }}
          className="flex justify-center pt-20"
        >
          <div className="absolute sm:w-[40vw] sm:h-[70vh] h-60 w-60">
            <Image
              src={
                "https://res.cloudinary.com/drnym8nne/image/upload/v1665939449/portfolio/nav/favicon_z1vmcu.png"
              }
              alt="Not found"
              layout="fill"
            />
          </div>
        </motion.div>
      ) : (
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
        </>
      )}
    </>
  );
};

export async function getServerSideProps() {
  const value = process.env.BASE_VAL;
  // const var = api(abc)
  return { props: { val: value } };
}

export default Index;
