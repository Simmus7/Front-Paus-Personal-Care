import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Nuevo from '../Nuevo';
import Oferta from '../Oferta';
import Popular from '../Popular';

function Home() {
  return (
    <>
      <HeroSection />
      <Popular />
      <Oferta />
      <Nuevo />
    </>
  );
}

export default Home;