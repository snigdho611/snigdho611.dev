import type { NextPage } from "next";
import Head from "next/head";
import About from "components/About";
import Skills from "components/Skills";
import Experience from "components/Experience";
import Projects from "components/Projects";
import Education from "components/Education";
import ParticleEffect from "components/ParticleEffect";
import Footer from "components/Footer";
import Contact from "components/Contact";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";

const allData = {
  name: "Snigdho Dip Howlader",
  about: [
    "A Professional Software Developer with experience in the industry. Avid in both frontend and backend development technologies, the main domain of expertise are web development, databases, problem solving, desktop development and responsive designing.",
    "Additionally, academically learned with Machine Learning, Data Mining and Algorithms that contribute to problem solving skills. Can easily adapt to technologies of all kinds and good at thinking on the go.",
  ],
  education: [
    {
      id: 1,
      name: "American International University-Bangladesh",
      imageURL: "/images/education/AIUB.png",
      degree: "Bachelor’s in Computer Science and Software Engineering",
      time: "January, 2018 - January, 2022",
    },
    {
      id: 2,
      name: "Maple Leaf International School",
      imageURL: "/images/education/MLIS.png",
      degree: "A ‘ Levels",
      time: "June, 2013 - January, 2017",
    },
    {
      id: 3,
      name: "Maple Leaf International School",
      imageURL: "/images/education/MLIS.png",
      degree: "O ‘ Levels",
      time: "June, 2012 - June, 2013",
    },
  ],
  experience: [
    {
      id: 1,
      url: "/images/experience/mainframelabs.png",
      description:
        "Worked with React JS, Next JS and Mongo DB for extensive work on the frontend and database maangement for a robust Ed-Tech project.",
      org: "Mainframe Labs Ltd.",
      position: "Junior Software Engineer",
    },
    {
      id: 2,
      url: "/images/experience/deepchainlabs.png",
      description:
        "Worked with Laravel and Laravel Livewire for creating robust, interactive websites for clients for satisfactory outputs.",
      position: "Research and Development Intern",
      org: "DeepChain Labs",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Smart Inventory System",
      description:
        "A web application that uses Data Mining to suggest inventory items to the user for better sales and predictive analysis.",
      stacks: "React JS, CSS, SQL, Python, Django",
      url: "https://github.com/snigdho611/smart-inventory-using-data-mining",
      color: "#155365",
    },
    {
      id: 2,
      title: "Industryal",
      description:
        "A fullstack ERP system that can handle the entirety of factory management process, from raw materials to finished products.",
      stacks: "React JS, CSS, Laravel, SQL",
      url: "https://github.com/fffffatah/Industryal-An-ERP-System",
      color: "#651515",
    },
    {
      id: 3,
      title: "e-Bookshelf",
      description:
        "A simple social media website for bookworms who want to share all their opinions and reviews of books.",
      stacks: "HTML, CSS, JavaScript, PHP, SQL",
      url: "https://github.com/Atanusaha143/eBookshelf---a-Book-Cataloging-Social-Platform",
      color: "#156535",
    },
    {
      id: 4,
      title: "Hospital Management System",
      description:
        "A desktop application that lets the user keep track of patients and employees in a hospital according to different categories.",
      stacks: "C# (.NET), Oracle SQL",
      url: "https://github.com/snigdho611/hospital-management-system",
      color: "#153565",
    },
  ],
};

const Home: NextPage = () => {
  const scrollToAbout = () => {
    scroller.scrollTo("aboutClass", {
      offset: -100,
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToSkills = () => {
    scroller.scrollTo("skillsClass", {
      offset: -100,
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToExperience = () => {
    scroller.scrollTo("experienceClass", {
      offset: -100,
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToProjects = () => {
    scroller.scrollTo("projectsClass", {
      offset: -100,
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToEducation = () => {
    scroller.scrollTo("educationClass", {
      offset: -100,
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToContact = () => {
    scroller.scrollTo("contactClass", {
      offset: -100,
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <ParticleEffect />
      <Head>
        <link
          href="https://allfont.net/allfont.css?fonts=agency-fb"
          rel="stylesheet"
          type="text/css"
        />
        <title>{allData.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      {/* <Navbar>Snigdho Dip Howlader</Navbar> */}
      <div className="Navbar">
        <div className="FlexBox">
          <div className="Name">{allData.name}</div>
          {/* <Links /> */}
          <div style={{}} className="links-container">
            <a href="#" onClick={scrollToAbout} className="link">
              About
            </a>
            <a href="#" onClick={scrollToSkills} className="link">
              Skills
            </a>
            <a href="#" onClick={scrollToExperience} className="link">
              Experience
            </a>
            <a href="#" onClick={scrollToProjects} className="link">
              Projects
            </a>
            <a href="#" onClick={scrollToEducation} className="link">
              Education
            </a>
            <a href="#" onClick={scrollToContact} className="link">
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className="aboutClass">
        <About about={allData.about} />
      </div>
      <div className="skillsClass">
        <motion.div animate={{ opacity: 1 }}>
          <Skills />
        </motion.div>
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
      </div>
    </>
  );
};

export default Home;
