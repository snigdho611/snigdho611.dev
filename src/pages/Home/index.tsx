import React from 'react';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import Experience from '../../components/Experience';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </Layout>

  );
};

export default Home;