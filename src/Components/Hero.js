import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importez le style CSS pour le carrousel
import re from './re.jpg';
import ri from './ri.jpg';
import ra from './ra.jpg';
import ro from './ro.jpg';

const Hero = () => {
  return (
    <section 
      className="relative bg-primary-light text-white min-h-screen flex flex-col justify-center pt-16" // Utilisez min-h-screen pour garantir que la section occupe au moins toute la hauteur de l'écran
      style={{ 
        backgroundImage: "url('https://themewagon.github.io/scholar/images/bg_1.jpg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="absolute inset-0 bg-primary-light opacity-75"></div>
      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={3000}
            transitionTime={500}
            className="rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative">
              <img src={re} alt="Image 1" className="w-full h-auto object-cover" />
            </div>
            <div className="relative">
              <img src={ri} alt="Image 2" className="w-full h-auto object-cover" />
            </div>
            <div className="relative">
              <img src={ra} alt="Image 3" className="w-full h-auto object-cover" />
            </div>
            <div className="relative">
              <img src={ro} alt="Image 4" className="w-full h-auto object-cover" />
            </div>
          </Carousel>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 text-left px-6 font-sans mt-6 md:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Explorez Nos Collections de Mode Exclusives</h1>
          <p className="text-base md:text-lg lg:text-2xl mb-6">Découvrez nos créations uniques et élégantes, conçues pour sublimer votre style en toute occasion. Profitez de nos tendances mode pour transformer votre garde-robe.</p>
          <p className="hidden md:block text-base md:text-lg lg:text-2xl mb-6">Plongez dans notre collection de vêtements haut de gamme, conçus pour allier confort et élégance. Chaque pièce est soigneusement fabriquée pour vous offrir un style distinctif qui fait tourner les têtes.</p>
          <div className="flex flex-row gap-2 md:gap-4 mt-4 w-30 md:w-auto">
            <button className="bg-secondary-light hover:bg-secondary-dark text-white font-bold py-2 px-4 rounded-full shadow-lg text-xs md:text-base w-28 md:w-auto">Voir les Nouveautés</button>
            <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full shadow-lg text-xs md:text-base w-28 md:w-auto">En savoir plus</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
