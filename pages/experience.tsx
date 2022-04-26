// import About from "components/About";
import Experience from "components/Experience";
// import Experience from "components/Experience";
import Navbar from "components/Navbar";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

const data = [
  {
    id: 3,
    imageURL: "/images/experience/bjit.png",
    siteURL: "https://bjitgroup.com/",
    degree: "MERN stack - client projects",
    position: "Software Engineer - Web",
    name: "Bangladesh Japan Information Technology",
    time: "April, 2022 - Present",
  },
  {
    id: 2,
    imageURL: "/images/experience/mainframelabs.png",
    siteURL: "https://mainframelabs.ltd/",
    degree: "React JS, Next JS and Mongo DB - EdTech platform",
    name: "Mainframe Labs Ltd.",
    position: "Junior Software Engineer",
    time: "October, 2021 - March, 2022",
  },
  {
    id: 1,
    imageURL: "/images/experience/deepchainlabs.png",
    siteURL: "https://deepchainlabs.com/",
    degree: "Laravel and Laravel Livewire - client websites",
    position: "Research and Development Intern",
    name: "DeepChain Labs",
    time: "July, 2021 - September, 2021",
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
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
        <title>Snigdho Dip Howlader</title>
      </Head>
      <Navbar />
      <Experience title="Experience" experience={data} />
    </div>
  );
};

export async function getServerSideProps() {
  const value = process.env.BASE_VAL;
  return { props: { val: value } };
}

export default Home;
