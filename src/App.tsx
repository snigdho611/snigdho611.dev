import { MutableRefObject, useEffect, useRef, useState } from "react";

const App: React.FC = () => {
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
        image: (
          <svg
            width="50"
            height="50"
            viewBox="0 0 23 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="main_contact_content_links_link_svg"
          >
            <path
              className="main_contact_content_links_link_svg_path"
              d="M20.6411 0H2.27242C1.01934 0 0 1.0193 0 2.27242V12.7276C0 13.9807 1.01934 15 2.27242 15H20.6411C21.8941 15 22.9134 13.9807 22.9134 12.7276V2.27242C22.9135 1.0193 21.8942 0 20.6411 0ZM21.3986 2.27242V12.7276C21.3986 12.8471 21.3649 12.9562 21.3153 13.0568L15.9601 7.70116L21.3971 2.26425C21.3971 2.26727 21.3986 2.26945 21.3986 2.27242ZM1.51495 12.7275V2.27242C1.51495 2.26945 1.51648 2.26731 1.51648 2.26429L6.95339 7.70121L1.59783 13.0567C1.54861 12.9562 1.51495 12.8471 1.51495 12.7275ZM11.6905 9.82867C11.5656 9.95362 11.348 9.95362 11.223 9.82867L2.90968 1.51495H20.0042L11.6905 9.82867ZM8.02451 8.77237L10.1519 10.8998C10.5007 11.2485 10.9641 11.4405 11.4568 11.4405C11.9494 11.4405 12.4129 11.2485 12.7617 10.8998L14.8891 8.77237L19.6014 13.4851H3.31177L8.02451 8.77237Z"
              fill="#059669"
            />
          </svg>
        ),
        url: "mailto:snigdho.howlader@gmail.com",
      },
      {
        id: 2,
        image: (
          <svg
            width="50"
            height="50"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="main_contact_content_links_link_svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.6395 19.648C16.8816 18.4901 20 14.6092 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 14.6832 3.21929 18.6145 7.56561 19.7016C7.5308 19.6903 7.49627 19.6786 7.46204 19.6665V17.3172C6.88677 17.513 5.53899 17.6864 4.75005 16.8138C4.36988 16.3933 4.13627 15.9978 3.91738 15.6272C3.56847 15.0365 3.25698 14.5091 2.44897 14.0451C3.89537 13.7095 4.80484 14.8002 5.07878 15.3875C5.27053 15.779 6.03208 16.4447 7.54422 15.9748C7.54422 14.8338 7.98252 14.4926 8.20167 14.4646C5.98277 14.7478 1.79152 11.7798 4.66788 6.9135C4.53091 6.35416 4.33916 4.73208 4.66788 4.22867C4.9966 3.72527 6.66762 4.62021 7.46204 5.31938C8.25645 4.95581 10.3713 4.44681 12.4751 5.31938C13.79 3.97697 14.9405 4.0329 15.3514 4.22867C15.4884 4.84395 15.6802 6.27586 15.3514 7.0813C16.9951 8.00422 16.9951 14.4646 11.8998 14.5485C12.623 15.6895 12.6942 16.2545 12.6395 16.3943V19.648ZM12.0048 19.799C11.4251 19.9016 10.6728 19.9913 9.89002 19.9994C9.92663 19.9998 9.96329 20 10 20C10.6866 20 11.3571 19.9308 12.0048 19.799Z"
              fill="#059669"
              className="main_contact_content_links_link_svg_path"
            />
          </svg>
        ),
        url: "https://www.github.com/snigdho611",
      },
      {
        id: 3,
        image: (
          <svg
            width="50"
            height="50"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="main_contact_content_links_link_svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM6.1 7.4C6.81797 7.4 7.4 6.81797 7.4 6.1C7.4 5.38203 6.81797 4.8 6.1 4.8C5.38203 4.8 4.8 5.38203 4.8 6.1C4.8 6.81797 5.38203 7.4 6.1 7.4ZM4.80001 8.4H7.20001V15.2H4.80001V8.4ZM8.40001 8.4V15.2H10.6V11C10.6667 10.6667 11.08 10 12.2 10C12.84 10.16 13 11 13 11.4V15.2H15.2V11C15.2 10 14.72 8 12.8 8C11 8.2 10.6 8.93333 10.6 9.2V8.2H8.40001V8.4Z"
              fill="#059669"
              className="main_contact_content_links_link_svg_path"
            />
          </svg>
        ),
        url: "https://www.linkedin.com/in/snigdho-dip-howlader",
      },
      {
        id: 4,
        image: (
          <svg
            width="50"
            height="50"
            viewBox="0 0 22 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="main_contact_content_links_link_svg"
          >
            <path
              d="M18.6031 1.42375C17.1815 0.758625 15.6615 0.275242 14.0724 0C13.8772 0.352851 13.6492 0.827443 13.492 1.20498C11.8027 0.95093 10.1289 0.95093 8.47071 1.20498C8.31354 0.827443 8.08035 0.352851 7.88344 0C6.29258 0.275242 4.77082 0.760401 3.34924 1.42727C0.481901 5.76019 -0.295387 9.98549 0.0932582 14.1508C1.99503 15.571 3.83807 16.4337 5.65001 16.9983C6.09739 16.3825 6.49639 15.728 6.84012 15.0382C6.18547 14.7895 5.55846 14.4825 4.96601 14.1261C5.12319 14.0097 5.27693 13.8879 5.42546 13.7627C9.03899 15.4528 12.9652 15.4528 16.5355 13.7627C16.6858 13.8879 16.8395 14.0097 16.995 14.1261C16.4008 14.4842 15.7721 14.7912 15.1174 15.04C15.4611 15.728 15.8584 16.3843 16.3075 17C18.1212 16.4355 19.966 15.5728 21.8677 14.1508C22.3237 9.32214 21.0887 5.13565 18.6031 1.42375ZM7.33241 11.5892C6.24767 11.5892 5.35809 10.5765 5.35809 9.34331C5.35809 8.11012 6.22867 7.0957 7.33241 7.0957C8.43618 7.0957 9.32573 8.10835 9.30673 9.34331C9.30845 10.5765 8.43618 11.5892 7.33241 11.5892ZM14.6286 11.5892C13.5438 11.5892 12.6543 10.5765 12.6543 9.34331C12.6543 8.11012 13.5248 7.0957 14.6286 7.0957C15.7323 7.0957 16.6219 8.10835 16.6029 9.34331C16.6029 10.5765 15.7323 11.5892 14.6286 11.5892Z"
              fill="#059669"
              className="main_contact_content_links_link_svg_path"
            />
          </svg>
        ),
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
  const [loading, setLoading] = useState(true);
  const heroRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const aboutRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const expRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const projectsRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const contactRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const heroScroll = () => heroRef.current?.scrollIntoView({ behavior: "smooth" });
  const aboutScroll = () => aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  const expScroll = () => expRef.current?.scrollIntoView({ behavior: "smooth" });
  const projectsScroll = () => projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  const contactScroll = () => contactRef.current?.scrollIntoView({ behavior: "smooth" });
  const imageRef = useRef<HTMLImageElement | null>(null);
  const shadowRef = useRef<HTMLDivElement | null>(null);
  const [activeExperience, setActiveExperience] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div
        // ref={loaderRef}
        className="loader"
      >
        <img
          className="loader_img"
          src={
            "https://res.cloudinary.com/drnym8nne/image/upload/v1689936405/portfolio/nav/logo_pvu06n.svg"
          }
          alt="Not found"
        />
      </div>
      {!loading ? (
        <>
          <div className="main">
            {/* NAVBAR */}
            <div className="main_navbar">
              <div className="main_navbar_left">
                <img
                  src={
                    "https://res.cloudinary.com/drnym8nne/image/upload/v1689936405/portfolio/nav/logo_pvu06n.svg"
                  }
                  alt="Not found"
                  className="main_navbar_left_img"
                />
              </div>
              <div className="main_navbar_right">
                <div className="main_navbar_right_link" onClick={() => heroScroll()}>
                  Home
                </div>
                <div className="main_navbar_right_link" onClick={() => aboutScroll()}>
                  About
                </div>
                <div className="main_navbar_right_link" onClick={() => expScroll()}>
                  Experience
                </div>
                <div className="main_navbar_right_link" onClick={() => projectsScroll()}>
                  Project
                </div>
                <div className="main_navbar_right_link" onClick={() => contactScroll()}>
                  Contact
                </div>
              </div>
            </div>
            {/* HERO */}
            <div className="main_hero" ref={heroRef}>
              <div className="main_hero_container" ref={aboutRef}>
                <span className="main_hero_container_name">Snigdho Dip Howlader.</span>
                <span className="main_hero_container_tagline">I Create Things For The Web.</span>
                <span className="main_hero_container_content">
                  A Full Stack <strong>Software Engineer</strong> with 2+ years experience.
                  Versatile in both <strong>Frontend </strong> and <strong>Backend </strong>{" "}
                  technologies.
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
              <div className="main_about_main">
                <div className="main_about_main_header">
                  <span className="main_about_main_header_title">About Me</span>
                  <div className="main_about_main_header_bar" />
                </div>
                <div className="main_about_main_text">
                  {data.aboutData.map((span: any, i: any) => {
                    return (
                      <span key={i}>
                        {span.map(({ text, url }: any, i: number) => {
                          return !url ? (
                            text
                          ) : (
                            <a key={i} href={url} target="_blank" rel="noreferrer">
                              {text}
                            </a>
                          );
                        })}
                      </span>
                    );
                  })}
                </div>
                <div className="main_about_main_header">Skills:</div>
                <div className="main_about_main_content">
                  {data.skillsData.map((element, i) => {
                    return (
                      <span key={i} className="main_about_main_content_skill">
                        <img src="/images/arrow.svg" alt="Not found" height={10} width={10} />
                        {element.name}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="main_about_image">
                <img
                  onLoad={(e) => {
                    // console.log("first");
                    // setImageLoading(false);
                  }}
                  ref={imageRef}
                  className="main_about_image_img"
                  src={
                    "https://res.cloudinary.com/drnym8nne/image/upload/v1665871812/portfolio/profilepic_xrxbld.jpg"
                  }
                  alt="Not found"
                />
                <div ref={shadowRef} className="main_about_image_border" />
              </div>
            </div>
            {/* EXPERIENCE */}
            <div className="main_experience" ref={expRef}>
              <div className="main_experience_header">
                <span className="main_experience_header_title">Experience</span>
                <div className="main_experience_header_bar" />
              </div>
              <div className="main_experience_body">
                <div className="main_experience_body_companies">
                  {data.experienceData.map(({ company }, i) => {
                    return (
                      <div
                        key={i}
                        onClick={() => setActiveExperience(i)}
                        className={`main_experience_body_companies_company ${
                          activeExperience === i
                            ? "main_experience_body_companies_company-active"
                            : ""
                        }`}
                      >
                        {company}
                      </div>
                    );
                  })}
                </div>
                <div className="main_experience_body_description">
                  <span className="main_experience_body_description_header">
                    {data.experienceData[activeExperience].title}
                    <a href={data.experienceData[activeExperience].url}>
                      {` @ ${data.experienceData[activeExperience].company}`}
                    </a>
                    {/* </span> */}
                  </span>
                  <span className="main_experience_body_description_period">
                    {`${data.experienceData[activeExperience].timeStart} - ${data.experienceData[activeExperience].timeEnd}`}
                  </span>
                  <div className="text-slate-500 flex flex-col gap-4 main_experience_body_description_list">
                    {data.experienceData[activeExperience].description.map((element, i) => {
                      return <span key={i}>{`- ${element}`}</span>;
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="main_projects" ref={projectsRef}>
              <div className="main_projects_header">
                <span className="main_projects_header_title">Projects</span>
                <div className="main_experience_header_bar" />
              </div>
              <div className="main_projects_cards">
                {data.projectsData.map(({ id, title, description, stacks, url }) => {
                  return (
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="main_projects_cards_card"
                      key={id}
                    >
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 136 110"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="main_projects_cards_card_svg"
                      >
                        <path
                          className="main_projects_cards_card_svg_path"
                          d="M4 106V4H43.898L56.539 13.9512H125.669C131.042 13.9512 132.121 19.2585 131.99 21.9122V106H4Z"
                          stroke="#059669"
                          strokeWidth="7"
                        />
                      </svg>
                      <div className="main_projects_cards_card_title">{title}</div>
                      <div className="main_projects_cards_card_description">{description}</div>
                      <div className="main_projects_cards_card_stacks">
                        {stacks.map((element, i) => {
                          return <div key={i}>{element}</div>;
                        })}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="main_contact" ref={contactRef}>
              <div className="main_contact_header">
                <span className="main_contact_header_title">Contact Me</span>
                <hr className="main_contact_header_bar" />
              </div>
              <div className="main_contact_content">
                <div className="main_contact_content_description">
                  If you would like to get in touch for any types of query, please opt for any of
                  the means below:
                </div>
                <div className="main_contact_content_links">
                  {data.contactData.map(({ image, url }, i) => {
                    return (
                      <a
                        key={i}
                        className="main_contact_content_links_link"
                        href={url}
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        {image}
                        {/* <img src={image} alt="Not found" height={50} /> */}
                      </a>
                    );
                  })}
                </div>
              </div>
              {/* <Contact data={data.contactData} /> */}
            </div>
          </div>
          <div className="footer">
            <div className="footer_text">Developed by: </div>
            <a href="https://www.github.com/snigdho611" className="footer_link">
              snigdho611
            </a>
          </div>
        </>
      ) : null}
    </>
  );
};

export default App;
