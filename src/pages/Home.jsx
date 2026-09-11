import React from 'react';
import Navbar from '../components/Header/navbar';
import Hero from '../components/Home/hero';
import About from '../components/Home/about';
import Programs from '../components/Home/programs';
import Movement from '../components/Home/movement';
import SchedulePoster from '../components/Home/scheduleposter';
import Footer from '../components/Footer/footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900 selection:bg-[#008282] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Movement />
        <SchedulePoster />
      </main>
      <Footer />
    </div>
  );
};

export default Home;