import { MutableRefObject, useRef, useState } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const heroRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const aboutRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const expRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const projectsRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const contactRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const heroScroll = () =>
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  const aboutScroll = () =>
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  const expScroll = () =>
    expRef.current?.scrollIntoView({ behavior: "smooth" });
  const projectsScroll = () =>
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  const contactScroll = () =>
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  const imageRef = useRef<HTMLImageElement | null>(null);
  const shadowRef = useRef<HTMLDivElement | null>(null);
  const [activeExperience, setActiveExperience] = useState(0);

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
        stacks: [
          "MongoDB",
          "React JS",
          "Node JS",
          "Express JS",
          "SCSS",
          "TypeScript",
        ],
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
        name: "React JS",
        logo: "https://res.cloudinary.com/drnym8nne/image/upload/v1650978408/portfolio/skills/reactjs_jbjf5g.png",
        count: 0,
      },
      {
        name: "Next JS",
        logo: "https://res.cloudinary.com/drnym8nne/image/upload/v1650978408/portfolio/skills/nextjs_kd4aif.png",
        count: 1,
      },
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
        {
          text: "Additionally, I also venture into Machine Learning and Computer Vision in my offtime research which I conduct in leisure.",
        },
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
        <div>
          <div className="main_navbar">
            <div className="main_navbar_container">
              <div className="main_navbar_container_left">
                <img
                  src={
                    "https://res.cloudinary.com/drnym8nne/image/upload/v1666110360/portfolio/nav/favicon_uw1wog.png"
                  }
                  alt="Not found"
                  className="main_navbar_container_left_img"
                />
              </div>
              <div className="main_navbar_container_right">
                <div
                  className="main_navbar_container_right_link"
                  onClick={() => heroScroll()}
                >
                  Home
                </div>
                <div
                  className="main_navbar_container_right_link"
                  onClick={() => aboutScroll()}
                >
                  About
                </div>
                <div
                  className="main_navbar_container_right_link"
                  onClick={() => expScroll()}
                >
                  Experience
                </div>
                <div
                  className="main_navbar_container_right_link"
                  onClick={() => projectsScroll()}
                >
                  Project
                </div>
                <div
                  className="main_navbar_container_right_link"
                  onClick={() => contactScroll()}
                >
                  Contact
                </div>
              </div>
            </div>
          </div>
          {/* HERO */}
          <div className="main_hero" ref={heroRef}>
            <div className="main_hero_container" ref={aboutRef}>
              <span className="main_hero_container_name">
                Snigdho Dip Howlader.
              </span>
              <span className="main_hero_container_tagline">
                I Create Things For The Web.
              </span>
              <span className="main_hero_container_content">
                A Full Stack <strong>Software Engineer</strong> with 2+ years
                experience. Versatile in both <strong>Frontend </strong> and{" "}
                <strong>Backend </strong> technologies.
              </span>
              <span className="main_hero_container_content">
                My set of skills is versatile and is continuously expanding.
              </span>
              <a
                href={"https://www.github.com/snigdho611"}
                className="main_hero_container_checkout"
              >
                Check Out My Work
              </a>
            </div>
          </div>
          {/* ABOUT */}
          <div className="main_about" ref={aboutRef}>
            <div className="main_about_container">
              <div className="main_about_container_main">
                <div className="main_about_container_main_header">
                  <span className="main_about_container_main_header_title">
                    About Me
                  </span>
                  <div className="main_about_container_main_header_bar" />
                </div>
                <div className="main_about_container_main_text">
                  {data.aboutData.map((span: any, i: any) => {
                    return (
                      <span key={i}>
                        {span.map(({ text, url }: any) => {
                          return !url ? (
                            text
                          ) : (
                            <a href={url} target="_blank" rel="noreferrer">
                              {text}
                            </a>
                          );
                        })}
                      </span>
                    );
                  })}
                </div>
                <div className="main_about_container_main_header">Skills:</div>
                <div className="main_about_container_main_content">
                  {data.skillsData.map((element, i) => {
                    return (
                      <span
                        key={i}
                        className="main_about_container_main_content_skill"
                      >
                        <img
                          src="/images/arrow.svg"
                          alt="Not found"
                          height={10}
                          width={10}
                        />
                        {element.name}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="main_about_container_image">
                <img
                  ref={imageRef}
                  className="main_about_container_image_img"
                  src={
                    "https://res.cloudinary.com/drnym8nne/image/upload/v1665871812/portfolio/profilepic_xrxbld.jpg"
                  }
                  alt="Not found"
                />
                <div
                  ref={shadowRef}
                  className="main_about_container_image_border"
                />
              </div>
            </div>
          </div>
          <div className="pt-[10px]" ref={expRef}>
            <div className="w-3/4 mx-auto my-48 font-sans">
              <div className="flex items-center justify-between w-full my-10">
                <span className="w-1/3 text-2xl text-slate-50">Experience</span>
                <hr className="w-2/3" />
              </div>
              <div className="flex sm:flex-row flex-col sm:gap-0 gap-10">
                <div className="w-full sm:w-1/3 flex flex-col">
                  {data.experienceData.map(({ company }, i) => {
                    return (
                      <div
                        key={i}
                        onClick={() => setActiveExperience(i)}
                        className={`border-l-2 border-white font-mono py-3 px-3 cursor-pointer hover:bg-emerald-900 transition-colors ${
                          activeExperience === i
                            ? "text-emerald-300 border-emerald-300"
                            : "text-slate-500"
                        }`}
                      >
                        {company}
                      </div>
                    );
                  })}
                </div>
                <div className="sm:w-2/3 w-full flex flex-col gap-3">
                  <span className="text-emerald-300 text-xl">
                    <span className="text-slate-50">
                      {data.experienceData[activeExperience].title}
                    </span>
                    <span>
                      {` @ `}
                      <a href={data.experienceData[activeExperience].url}>
                        {data.experienceData[activeExperience].company}
                      </a>
                    </span>
                  </span>
                  <span className="text-slate-300">
                    {data.experienceData[activeExperience].timeStart} -{" "}
                    {data.experienceData[activeExperience].timeEnd}
                  </span>
                  <div className="text-slate-500 flex flex-col gap-4">
                    {data.experienceData[activeExperience].description.map(
                      (element, i) => {
                        return (
                          <div className="flex gap-2" key={i}>
                            <span className="flex w-1/12">
                              <img
                                src="/images/arrow.svg"
                                alt="Not found"
                                height={15}
                                width={15}
                              />
                            </span>
                            <span className="w-11/12">{element}</span>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* <Experience data={data.experienceData} /> */}
          </div>
          <div className="pt-[10px]" ref={projectsRef}>
            <Projects data={data.projectsData} />
          </div>
          <div className="pt-[10px]" ref={contactRef}>
            <Contact data={data.contactData} />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
