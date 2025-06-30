import React from 'react';

import FeaturedMoviesSection from '../components/section/FeaturedMoviesSection';
import HeroSection from '../components/section/HeroSection';
import TrailersSection from '../components/section/TrailersSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedMoviesSection />
      <TrailersSection />
    </>
  );
};

export default Home;
