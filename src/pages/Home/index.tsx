import React, { MutableRefObject, useRef } from "react";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import Skills from "../../components/Skills";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects";
import Education from "../../components/Education";
import Contact from "../../components/Contact";

// Clearance for the sticky chapter header, so a section never lands under it.
const HEADER_OFFSET = 110;

const Home: React.FC = () => {
    const heroRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
    const skillsRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
    const expRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
    const projectsRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
    const educationRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
    const contactRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

    const scrollTo = (target: MutableRefObject<HTMLDivElement | null>) => () => {
        const top = (target.current?.getBoundingClientRect().top ?? 0) + window.scrollY;
        window.scrollTo({ behavior: "smooth", left: 0, top: Math.max(top - HEADER_OFFSET, 0) });
    };

    // Order matters: the navbar addresses these by index.
    const jumps = [
        scrollTo(heroRef),
        scrollTo(expRef),
        scrollTo(projectsRef),
        scrollTo(skillsRef),
        scrollTo(educationRef),
        scrollTo(contactRef),
    ];

    return (
        <Layout _refs_={jumps}>
            <Hero ref={heroRef} />
            <Experience ref={expRef} />
            <Projects ref={projectsRef} />
            <Skills ref={skillsRef} />
            <Education ref={educationRef} />
            <Contact ref={contactRef} />
        </Layout>
    );
};

export default Home;
