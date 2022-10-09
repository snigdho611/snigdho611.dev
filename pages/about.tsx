import Navbar from "components/Navbar";
import Base from "components/Hero";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Hero from "components/Hero";

interface indexProps {}

const About: React.FC<indexProps> = () => {
  return (
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
    </>
  );
};

export default About;
