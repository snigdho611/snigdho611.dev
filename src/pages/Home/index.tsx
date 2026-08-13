import React, { MutableRefObject, useRef } from 'react';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import Experience from '../../components/Experience';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';

// Clearance for the sticky chapter header, so a section never lands under it.
const HEADER_OFFSET = 110;

const Home: React.FC = () => {

  const heroRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const expRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const projectsRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const contactRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const scrollTo = (target: MutableRefObject<HTMLDivElement | null>) => () => {
    const top = (target.current?.getBoundingClientRect().top ?? 0) + window.scrollY;
    window.scrollTo({ behavior: "smooth", left: 0, top: Math.max(top - HEADER_OFFSET, 0) });
  };

  return (
    <Layout _refs_={[scrollTo(heroRef), scrollTo(expRef), scrollTo(projectsRef), scrollTo(contactRef)]} >
      <Hero ref={heroRef} />
      <Experience ref={expRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </Layout >

  );
};

export default Home;
