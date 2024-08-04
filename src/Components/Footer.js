import React from 'react';
import { FaFacebook, FaWhatsapp, FaTiktok, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary-light text-white py-6 ">
      <div className="container mx-auto text-center">
        <nav className="flex flex-wrap justify-center space-x-2 md:space-x-6 text-sm md:text-lg mb-4 font-sans">
          <a href="#" className="hover:text-blue-400 transition duration-300">Accueil</a>
          <a href="#" className="hover:text-blue-400 transition duration-300">Nos culottes</a>
          <a href="#" className="hover:text-blue-400 transition duration-300">Nos pantalons</a>
          <a href="#" className="hover:text-blue-400 transition duration-300">Nos jupes</a>
          <a href="./Nosrobes.js" className="hover:text-blue-400 transition duration-300">Nos robes</a>
          <a href="#" className="hover:text-blue-400 transition duration-300">Nous contacter</a>
        </nav>
        <p className="mb-2 font-sans text-xs md:text-base">&copy; 2024 Rach's Collection. Tous droits réservés.</p>
        <p className="mb-4 font-sans text-xs md:text-base">Confection de vêtements rares et élégants pour femmes modernes.</p>
        <div className="flex justify-center space-x-4 md:space-x-6">
          <a href="https://www.facebook.com/people/Rachs-shop/100094171251348/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="https://wa.me/message/ZOHI3DRYDXDGC1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 transition duration-300">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://www.tiktok.com/@rachs.collection1?_t=8oFM3Y0b8Mv&_r=1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black transition duration-300">
            <FaTiktok size={24} />
          </a>
          <a href="tel:+2250713605155" className="text-white hover:text-red-500 transition duration-300">
            <FaPhone size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
