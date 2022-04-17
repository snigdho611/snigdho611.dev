import Navbar from "components/Navbar";
import Base from "components/Base";
import gsap from "gsap";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";

interface indexProps {
  val: string;
}

const Index: React.FC<indexProps> = ({ val }) => {
  return (
    <>
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
      <Base />
    </>
  );
};

export async function getServerSideProps() {
  const value = process.env.BASE_VAL;
  // const var = api(abc)
  return { props: { val: value } };
}

export default Index;
