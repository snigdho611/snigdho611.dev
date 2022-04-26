// import About from "components/About";
import Background from "components/About/Background";
import Overview from "components/About/Overview";
import Experience from "components/Experience";
// import Education from "components/Education";
// import Education from "components/About/Background/Education";
import Navbar from "components/Navbar";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

const edu = [
  {
    id: 1,
    name: "American International University-Bangladesh",
    siteURL: "",
    imageURL: "/images/education/AIUB.png",
    degree: "Bachelor’s in Computer Science and Software Engineering",
    time: "January, 2018 - January, 2022",
  },
  {
    id: 2,
    name: "Maple Leaf International School",
    siteURL: "",
    imageURL: "/images/education/MLIS.png",
    degree: "A ‘ Levels",
    time: "June, 2013 - January, 2017",
  },
  {
    id: 3,
    name: "Maple Leaf International School",
    siteURL: "",
    imageURL: "/images/education/MLIS.png",
    degree: "O ‘ Levels",
    time: "June, 2012 - June, 2013",
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
      <Overview />
      <Experience title={"Education"} experience={edu} />
    </div>
  );
};

export async function getServerSideProps() {
  const value = process.env.BASE_VAL;
  return { props: { val: value } };
}

export default Home;
