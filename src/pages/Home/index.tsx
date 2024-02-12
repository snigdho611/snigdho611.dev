import React from 'react';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';

interface IHomeProps {
  // children: React.ReactNode;
}

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
    </Layout>

  );
};

export default Home;