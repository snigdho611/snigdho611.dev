import { useRef, useState } from "react";
// import "./index.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const data = {
    projectsData: [
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
      {
        id: 5,
        title: "MERN Super Store",
        description:
          "A simple superstore project. Originally done with React JS, Express and MongoDB. Now updated the project with things like SCSS, TypeScript and a cloud database instance for data storage.",
        stacks: ["MongoDB", "React JS", "Node JS", "Express JS", "SCSS", "TypeScript"],
        url: "https://github.com/snigdho611/mern-superstore",
      },
    ],
    experienceData: [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
    ],
    contactData: [
      {
        id: 1,
        image: "/images/mail.png",
        url: "mailto:snigdho.howlader@gmail.com",
      },
      {
        id: 2,
        image: "/images/github.png",
        url: "https://www.github.com/snigdho611",
      },
      {
        id: 3,
        image: "/images/linkedin.png",
        url: "https://www.linkedin.com/in/snigdho-dip-howlader",
      },
      {
        id: 4,
        image: "/images/discord.png",
        url: "https://discordapp.com/users/snigdho611#4850",
      },
    ],
    skillsData: [
      {
        id: 1,
        name: "Frontend",
        tech: [
          {
            name: "React JS",
            logo: "https://res.cloudinary.com/drnym8nne/image/upload/v1650978408/portfolio/skills/reactjs_jbjf5g.png",
            count: 0,
          },
          {
            name: "Next JS",
            logo: "https://res.cloudinary.com/drnym8nne/image/upload/v1650978408/portfolio/skills/nextjs_kd4aif.png",
            count: 1,
          },
        ],
      },
      {
        id: 2,
        name: "Backend",
        tech: [
          {
            name: "Laravel",
            logo: "https://res.cloudinary.com/drnym8nne/image/upload/v1650978408/portfolio/skills/laravel_tnohfi.png",
            count: 2,
          },
          {
            name: "Node JS",
            logo: "https://res.cloudinary.com/drnym8nne/image/upload/v1650978408/portfolio/skills/nodejs_fbzhmo.png",
            count: 3,
          },
        ],
      },
      {
        id: 3,
        name: "Database",
        tech: [
          {
            name: "PostGreSQL",
            logo: "https://res.cloudinary.com/drnym8nne/image/upload/v1650978408/portfolio/skills/postgresql_ieatla.png",
            count: 4,
          },
          {
            name: "Mongo DB",
            logo: "https://res.cloudinary.com/drnym8nne/image/upload/v1650978408/portfolio/skills/mongo_g54ff3.png",
            count: 5,
          },
        ],
      },
      {
        id: 4,
        name: "Additional Skills",
        tech: [
          {
            name: "JavaScript",
            logo: "https://res.cloudinary.com/drnym8nne/image/upload/v1650978407/portfolio/skills/javascript_es9136.png",
            count: 6,
          },
          {
            name: "TypeScript",
            logo: "https://res.cloudinary.com/drnym8nne/image/upload/v1650978408/portfolio/skills/typescript_fu7pku.png",
            count: 7,
          },
          {
            name: "Python",
            logo: "https://res.cloudinary.com/drnym8nne/image/upload/v1650978408/portfolio/skills/python_otulaq.png",
            count: 8,
          },
          {
            name: "C#",
            logo: "https://res.cloudinary.com/drnym8nne/image/upload/v1650978408/portfolio/skills/csharp_g6ad9k.png",
            count: 9,
          },
        ],
      },
    ],
    aboutData: [
      [
        {
          text: "I am Snigdho Dip Howlader, and I enjoy adding my work to the internet. My interest in web development was formed in 2020 when I started creating projects for fun. I am now dedicated to creating, fixing and maintaining all things related to the web for my career.",
        },
      ],
      [
        {
          text: "Today I work at ",
        },
        {
          text: "BJIT, Bangladesh",
          url: "https://bjitgroup.com/",
        },
        {
          text: " as a Web Engineer. I have a degree in Computer Science & Software Engineering from ",
        },
        {
          text: "American International University - Bangladesh",
          url: "https://www.aiub.edu/",
        },
        {
          text: ". I believe my knowledge is a drop in an ocean and my learning will never truly end.",
        },
      ],
      [
        [
          {
            text: "Additionally, I also venture into Machine Learning and Computer Vision in my offtime research which I conduct in leisure.",
          },
        ],
      ],
    ],
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center pt-20">
          <div className="absolute sm:w-[900px] sm:h-[900px] h-96 w-96">
            <img
              src={
                "https://res.cloudinary.com/drnym8nne/image/upload/v1666110360/portfolio/nav/favicon_uw1wog.png"
              }
              alt="Not found"
            />
          </div>
        </div>
      ) : (
        <>
          <Navbar
            heroRef={heroRef}
            aboutRef={aboutRef}
            expRef={expRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
          />
          <text className="bg-blue">123</text>
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
  );
};

export default App;
