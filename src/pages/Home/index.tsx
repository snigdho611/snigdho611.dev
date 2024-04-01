import React, { MutableRefObject, useRef } from 'react';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import Experience from '../../components/Experience';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';

const Home: React.FC = () => {

  const heroRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const expRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const projectsRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const contactRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const heroScroll = () => {
    window.scrollTo({ behavior: "smooth", left: 0, top: (heroRef.current?.offsetTop ?? 0) - 1000 });
  };
  const expScroll = () => {
    window.scrollTo({ behavior: "smooth", left: 0, top: (expRef.current?.offsetTop ?? 0) - 100 });
  };
  const projectsScroll = () => {
    window.scrollTo({ behavior: "smooth", left: 0, top: (projectsRef.current?.offsetTop ?? 0) - 100 });
  };
  const contactScroll = () => {
    window.scrollTo({ behavior: "smooth", left: 0, top: (contactRef.current?.offsetTop ?? 0) - 100 });
  };

  return (
    <Layout _refs_={[heroScroll, expScroll, projectsScroll, contactScroll]} >
      <Hero ref={heroRef} />
      <Experience ref={expRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </Layout >

  );
};

export default Home;