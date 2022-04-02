import Navbar from "components/Navbar";
import gsap from "gsap";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";

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
        scale: 0.065,
        delay: 1,
        duration: 1,
        x: "-45%",
        y: "-48%",
      }
    );
    // currentTarget.current?.style.display = "none";
  };
  useEffect(() => {
    if (textRef.current) {
      if (windowWidth > 1400) {
        if (!nameAnimation) {
          textRef.current.style.display = "fixed";
          onLoad(textRef);
        } else if (nameAnimation) {
          textRef.current.style.display = "initial";
        }
      } else {
        textRef.current.style.display = "none";
      }
    }
  }, [windowWidth, nameAnimation]);

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
      <div
        // className="bg-slate-500"
        style={{
          backgroundImage: "url(/images/favicon2.svg)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          // height: "100%",
          minWidth: "100px",
          width: "100%",
          height: "100vh",
          position: "fixed",
        }}
        ref={textRef}
      />
      <Navbar />
      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          color: "white",
          gap: "35px",
        }}
      ></div> */}
    </>
  );
};

export async function getServerSideProps() {
  const value = process.env.BASE_VAL;
  return { props: { val: value } };
}

export default Home;
