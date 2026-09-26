// Served from public/ — drop the PDF in as public/cv.pdf. Linked from both the
// Prologue portrait panel and the Contact panel.
const cvUrl = "https://drive.google.com/file/d/1xC0sskESQ7J1qU2blHU8AeyuPjeAwF-O/view?usp=drive_link";

const data = {
    cv: cvUrl,
    // Rendered newest-first (the section reverses this list), so the CV's
    // personal projects sit at the end of the array to lead the grid.
    projects: [
        // {
        //   id: 1,
        //   title: "Smart Inventory System",
        //   description:
        //     "A web application that uses Data Mining to suggest inventory items to the user for better sales and predictive analysis.",
        //   stack: ["React JS", "CSS", "SQL", "Python", "Django"],
        //   url: "https://github.com/snigdho611/smart-inventory-using-data-mining",
        //   hosted: null
        // },
        // {
        //   id: 2,
        //   title: "Industryal",
        //   description:
        //     "A fullstack ERP system that can handle the entirety of factory management process, from raw materials to finished products.",
        //   stack: ["React JS", "CSS", "Laravel", "SQL"],
        //   url: "https://github.com/fffffatah/Industryal-An-ERP-System",
        //   hosted: null
        // },
        // {
        //     id: 3,
        //     title: "e-Bookshelf",
        //     description:
        //         "A simple social media website for bookworms who want to share all their opinions and reviews of books.",
        //     stack: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
        //     url: "https://github.com/Atanusaha143/eBookshelf---a-Book-Cataloging-Social-Platform",
        //     hosted: null,
        // },
        // {
        //     id: 5,
        //     title: "MERN Super Store",
        //     description: "A simple superstore project, with cart, searching, filtering, sorting and pagination",
        //     stack: ["MongoDB", "React JS", "Node JS", "Express JS", "SCSS", "TypeScript"],
        //     url: "https://github.com/snigdho611/mern-superstore",
        //     hosted: null,
        // },
        // {
        //     id: 6,
        //     title: "Custom Date Picker",
        //     description: "A simple datepicker that can take in customized inputs depending on the parameters provided.",
        //     stack: ["React JS", "SCSS", "TypeScript"],
        //     url: null,
        //     hosted: "https://custom-react-datepicker-yfku.vercel.app/",
        // },
        {
            id: 7,
            title: "Drum Machine",
            description: "A simple drum machine to render sounds against the user's inputs.",
            stack: ["React JS", "SCSS", "TypeScript"],
            url: null,
            hosted: "https://react-drums.vercel.app",
        },
        {
            id: 8,
            title: "Type Tester",
            description:
                "A type tester for calculating the user's speed and accuracy of their typing against a given input",
            stack: ["React JS", "SCSS", "TypeScript"],
            url: null,
            hosted: "https://react-type-speed.vercel.app",
        },
        {
            id: 4,
            title: "Hospital Ward Management System",
            description:
                "A desktop app for running hospital wards, with a C# .NET GUI over an Oracle database and PL/SQL for the advanced queries. Built for a university Advanced Database Management course. 14 stars on GitHub.",
            stack: ["C# (.NET)", "Oracle SQL", "PL/SQL"],
            url: "https://github.com/snigdho611/hospital-management-system",
            hosted: null,
        },
        {
            id: 9,
            title: "Full Stack Setup Template",
            description:
                "A boilerplate that brings up a client, server and database for a full-stack project in Docker containers. 23 stars on GitHub.",
            stack: ["React JS", "Express JS", "PostgreSQL", "MongoDB", "Docker"],
            url: "https://github.com/snigdho611/docker-compose-react-nodejs-postgres",
            hosted: null,
        },
        {
            id: 10,
            title: "E-Commerce Platform",
            description:
                "A multi-vendor e-commerce platform with separate admin and customer interfaces, analytics and inventory management.",
            stack: ["Spring Boot", "PostgreSQL", "Flutter"],
            url: null,
            hosted: null,
        },
        {
            id: 11,
            title: "Expense Tracker Application",
            description:
                "An Android and iOS app for personal budget management, with report generation, data import/export and spending analytics.",
            stack: ["Flutter", "SQL"],
            url: null,
            hosted: null,
        },
    ],
    // One entry per employer (one tab each); a promotion adds a role, newest first.
    experience: [
        {
            id: 1,
            company: "BJIT Ltd",
            url: "https://bjitgroup.com/",
            roles: [
                {
                    title: "Senior Software Engineer",
                    timeStart: "Jul '25",
                    timeEnd: null,
                    works: [
                        {
                            label: "Gaming Platform (Belgium)",
                            text: "Architected and deployed 15+ Node.js and PostgreSQL microservices on Google Cloud Platform with Docker, handling high-volume transactional gaming data and enabling real-time analytics. Also maintained the React client.",
                        },
                        {
                            label: "Retail E-Commerce Platform (Japan)",
                            text: "Extended an authentication system serving millions of users to support phone-based verification on a Symfony (EC-Cube) platform, and optimized SQL queries and payment gateway logic to keep it stable under high traffic. Built a product colour swatch system with variant-level lowest-price logic that holds during sales, and migrated 15M rows to Snowflake with batch processing.",
                        },
                        {
                            label: "AI Investor Relations Tool (Japan)",
                            text: "Built a FastAPI service on the OpenAI API that transcribes investor meeting audio and generates formatted minutes as PDF/DOC documents; later migrated its data layer from CosmosDB to PostgreSQL.",
                        },
                        {
                            label: "Inventory Management System (Japan)",
                            text: "Migrated a legacy PowerBuilder desktop application to a web application built with React (Ant Design, Vite) and Spring Boot, moving the database from Oracle to MySQL.",
                        },
                    ],
                    stack: [
                        "Node JS",
                        "PostgreSQL",
                        "GCP",
                        "Docker",
                        "React JS",
                        "PHP",
                        "Symfony (EC-Cube)",
                        "Vue JS",
                        "Snowflake",
                        "FastAPI",
                        "OpenAI API",
                        "Spring Boot",
                        "Ant Design",
                        "MySQL",
                    ],
                },
                {
                    title: "Software Engineer (Web)",
                    timeStart: "Apr '22",
                    timeEnd: "Jun '25",
                    works: [
                        {
                            label: "Game Integration Platform (Netherlands)",
                            text: "Built and maintained GitLab CI/CD pipelines to automate deployments on AWS, and integrated payment, ad and analytics SDKs for browser and mobile platforms.",
                        },
                        {
                            label: "Device Management System (Japan)",
                            text: "Developed a global platform handling translation device data across 8 countries with Spring Boot and React, engineering REST APIs to sync real-time telemetry between mobile and web clients.",
                        },
                        {
                            label: "Marketing Data Platform (Netherlands)",
                            text: "Optimized client-side performance in React and TypeScript, cutting page load times by 25% and reducing the share of lagging requests from ~20% to ~1%.",
                        },
                        {
                            label: "Data Analytics System (Japan)",
                            text: "Converted a legacy .NET desktop app to a web application built with Django and Flask, implementing statistical reporting (regression, correlation) and customer behaviour tracking.",
                        },
                        {
                            label: "Leadership",
                            text: "Mentored new hires in backend development, teaching REST API design with Node.js and MongoDB.",
                        },
                    ],
                    stack: [
                        "React JS",
                        "TypeScript",
                        "Java",
                        "Spring Boot",
                        "Python",
                        "Django",
                        "Flask",
                        "Node JS",
                        "MongoDB",
                        "AWS",
                        "GitLab CI/CD",
                    ],
                },
            ],
        },
        {
            id: 2,
            company: "Sohopathi",
            url: "https://sohopathi.io/",
            roles: [
                {
                    title: "Jr. Software Engineer (Full Stack)",
                    timeStart: "Sep '21",
                    timeEnd: "Mar '22",
                    works: [
                        {
                            label: "Ed-Tech Learning Platform (Bangladesh)",
                            text: "Built a platform for students and teachers with secure Vimeo-integrated video streaming, analytics modules and consistent data across learning modules.",
                        },
                    ],
                    stack: ["React JS", "TypeScript", "Node JS", "AWS", "Vimeo"],
                },
            ],
        },
        {
            id: 3,
            company: "Deepchainlabs",
            url: "https://www.deepchainlabs.com/",
            roles: [
                {
                    title: "Software Engineer Intern",
                    timeStart: "Jul '21",
                    timeEnd: "Sep '22",
                    works: [
                        {
                            label: "Online Medical Platform",
                            text: "Maintained modules that worked with user, client, transactions and sessions for the system. Wrote API as per requirement for proper integration with UI.",
                        },
                    ],
                    stack: ["Laravel", "MySQL"],
                },
            ],
        },
    ],
    contact: [
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
                        fill="currentColor"
                    />
                </svg>
            ),
            label: "Email",
            ja: "メール",
            url: "mailto:snigdho.howlader@gmail.com",
        },
        {
            id: 2,
            image: (
                <svg
                    // width="98"
                    // height="96"
                    width="50"
                    height="50"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                        fill="currentColor"
                    />
                </svg>
            ),
            label: "GitHub",
            ja: "ギットハブ",
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
                        fill="currentColor"
                        className="main_contact_content_links_link_svg_path"
                    />
                </svg>
            ),
            label: "LinkedIn",
            ja: "リンクトイン",
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
                        fill="currentColor"
                        className="main_contact_content_links_link_svg_path"
                    />
                </svg>
            ),
            label: "Discord",
            ja: "ディスコード",
            url: "https://discordapp.com/users/snigdho611#4850",
        },
        {
            id: 5,
            image: (
                <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                    <path d="M14 2v6h6" />
                    <path d="M8 13h8M8 17h5" />
                </svg>
            ),
            label: "CV",
            ja: "履歴書",
            url: cvUrl,
        },
    ],
    // Grouped by discipline rather than listed flat — the section prints them
    // as four "schools" of skill.
    skills: [
        {
            id: 1,
            title: "Frontend",
            ja: "前衛",
            note: "Interfaces, from the layout down to the state that drives it.",
            items: ["React JS", "Next JS", "Vue JS", "TypeScript", "Tailwind CSS", "Material UI", "Flutter"],
        },
        {
            id: 2,
            title: "Backend",
            ja: "後衛",
            note: "Services and APIs, and the queries underneath them.",
            items: ["Node JS", "Express JS", "PHP", "Laravel", "Python", "Django", "Golang", "REST APIs"],
        },
        {
            id: 3,
            title: "Databases",
            ja: "記憶",
            note: "Where the state actually lives, relational or otherwise.",
            items: ["PostgreSQL", "MongoDB", "MySQL", "Oracle", "Azure Cosmos DB"],
        },
        {
            id: 4,
            title: "Platform",
            ja: "道具",
            note: "The tooling around the code that gets it shipped and talking.",
            items: ["Docker", "RabbitMQ", "Git", "AWS"],
        },
    ],
    education: [
        {
            id: 1,
            institution: "American International University — Bangladesh",
            short: "AIUB",
            degree: "BSc in Computer Science & Software Engineering",
            timeStart: "2018",
            timeEnd: "2021",
            url: "https://www.aiub.edu/",
            note: "Four years of fundamentals — algorithms, databases and software design — closing with a thesis on data mining that went on to be published.",
        },
    ],
    publications: [
        {
            id: 1,
            title: "A Comparative Analysis of Algorithms for Heart Disease Prediction using Data Mining",
            authors: ["Snigdho Dip Howlader", "Tushar Biswas", "Aishwarjyo Roy", "Golam Mortuja", "Dip Nandi"],
            journal: "International Journal of Information Technology and Computer Science (IJITCS)",
            volume: "Vol. 15, No. 5",
            pages: "45–54",
            published: "8 Oct 2023",
            doi: "https://doi.org/10.5815/ijitcs.2023.05.05",
            url: "https://www.mecs-press.org/ijitcs/ijitcs-v15-n5/v15n5-5.html",
            summary:
                "Compares Naive Bayes, Decision Tree, Random Forest and Logistic Regression at predicting heart disease from eight clinical factors. On the dataset examined, Random Forest and Decision Tree came out ahead.",
        },
    ],
    about: [
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

export default data;
