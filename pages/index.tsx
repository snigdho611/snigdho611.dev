import Navbar from "src/components/Navbar";
import Base from "src/components/Hero";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Hero from "src/components/Hero";
import About from "src/components/About";
import Experience from "src/components/Experience";
import Projects from "src/components/Projects";
import Image from "next/image";
import { motion } from "framer-motion";
import Contact from "src/components/Contact";
import Footer from "src/components/Footer";
// import data from "server/data.json";
import { siteData } from "./api/site-data";
interface indexProps {
  data: siteData;
}

const Index: React.FC<indexProps> = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <>
        <Head>
          <meta property="og:title" content="Snigdho Dip Howlader | Software Engineer" />
          <meta
            name="og:description"
            content="Personal portfolio of Snigdho Dip Howlader. Frontend Developer, Software Engineer and Computer Science enthusiast. Please find the contact details below if youa re willing to get in touch."
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/drnym8nne/image/upload/v1666124145/portfolio/Screenshot_from_2022-10-19_02-15-15_euwhgs.png"
          />
          <link
            rel="icon"
            href="https://res.cloudinary.com/drnym8nne/image/upload/v1666110360/portfolio/nav/favicon_uw1wog.png"
          />
          <title>Snigdho Dip Howlader</title>
        </Head>
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotateY: 360, scale: 0.2 }}
            transition={{ duration: 1 }}
            className="flex justify-center pt-20"
          >
            <div className="absolute sm:w-[900px] sm:h-[900px] h-96 w-96">
              <Image
                src={
                  "https://res.cloudinary.com/drnym8nne/image/upload/v1666110360/portfolio/nav/favicon_uw1wog.png"
                }
                alt="Not found"
                layout="fill"
              />
            </div>
          </motion.div>
        ) : (
          <>
            <Navbar
              heroRef={heroRef}
              aboutRef={aboutRef}
              expRef={expRef}
              projectsRef={projectsRef}
              contactRef={contactRef}
            />
            <div className="pt-[10px]" ref={heroRef}>
              <Hero />
            </div>
            <div className="pt-[10px]" ref={aboutRef}>
              <About aboutData={data.aboutData} />
            </div>
            <div className="pt-[10px]" ref={expRef}>
              <Experience data={data.experienceData} />
            </div>
            <div className="pt-[10px]" ref={projectsRef}>
              <Projects data={data.projectsData} />
            </div>
            <div className="pt-[10px]" ref={contactRef}>
              <Contact data={data.contactData} />
            </div>
            <Footer />
          </>
        )}
      </>
    </>
  );
};

export async function getServerSideProps() {
  // const value = process.env.BASE_VAL;
  let results;
  await fetch(`${process.env.PROD_URL}/api/site-data`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      results = json;
    })
    .catch((error) => {
      console.log(error);
    });
  return { props: { data: results } };
}

export default Index;
