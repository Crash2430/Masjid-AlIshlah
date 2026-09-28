import React from 'react';
import Hero from '../components/Home/hero';
import About from '../components/Home/about';
import Programs from '../components/Home/Programs';
import Youtube from '../components/Home/Youtube';
import Instagram from '../components/Home/Instagram';
import SchedulePoster from '../components/Home/SchedulePoster';
import Stats from '../components/Home/Stats';
import Location from '../components/Home/Location';

const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Programs />
      <Youtube />
      <Instagram />
      <SchedulePoster />
      <Location/>
    </main>
  );
};

export default Home;