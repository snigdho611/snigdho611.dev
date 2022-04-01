import gsap from "gsap";
// import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import React, {
  useEffect,
  // useLayoutEffect,
  useRef,
  useState,
} from "react";
// import About from "components/About";
// import Skills from "components/Skills";
// import Experience from "components/Experience";
// import Projects from "components/Projects";
// import Education from "components/Education";
// import ParticleEffect from "components/ParticleEffect";
// import Footer from "components/Footer";
// import Contact from "components/Contact";
// import { motion } from "framer-motion";
// import { scroller } from "react-scroll";
// import { useEffect, useState } from "react";

interface HomeProps {
  val: string;
}

const Home: React.FC<HomeProps> = ({ val }) => {
  const [windowWidth, setWindowWidth] = useState<Number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [nameAnimation, setNameAnimation] = useState<boolean>(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };
    window.addEventListener("resize", handleResize);

    if (windowWidth < 1400) {
      setNameAnimation(false);
    } else {
      setNameAnimation(true);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  const onLoad = (currentTarget: React.RefObject<HTMLDivElement>) => {
    gsap.fromTo(
      currentTarget.current,
      {
        scale: 1,
        delay: 0.7,
        x: 0,
        y: 0,
      },
      {
        // translate: "-45% -45%",
        scale: 0.075,
        // scale: 0.075,
        delay: 1,
        duration: 1,
        x: "-45%",
        y: "-45%",
      }
    );
  };

  // const onUnload = ({ currentTarget }: any) => {
  //   gsap.to(currentTarget, { scale: 1.0 });
  // };

  useEffect(() => {
    if (textRef.current) {
      if (windowWidth > 1400) {
        if (!nameAnimation) {
          textRef.current.style.display = "block";
          onLoad(textRef);
        } else if (nameAnimation) {
          textRef.current.style.display = "block";
        }
      } else {
        textRef.current.style.display = "none";
      }
    }
    // windowWidth >= 1500 ? onLoad(textRef) : null;
  }, [windowWidth, nameAnimation]);

  return (
    <>
      <Head>
        {/* <title>{allData.name}</title> */}
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
      </Head>
      {/* <div>{val}</div> */}
      <div
        style={{
          backgroundColor: "black",
          minWidth: "100px",
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          style={{
            backgroundImage: "url(/images/favicon2.svg)",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            height: "100%",
            // transform: "translate(-45%,-45%) scale(0.075)",
          }}
          ref={textRef}
        ></div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  const value = process.env.BASE_VAL;
  // Pass data to the page via props
  return { props: { val: value } };
}

export default Home;
