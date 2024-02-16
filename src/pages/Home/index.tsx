import React from 'react';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import Experience from '../../components/Experience';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Experience/>
    </Layout>

  );
};

export default Home;