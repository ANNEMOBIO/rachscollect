// src/Components/Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import rachslogo from './rachslogo.jpeg';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../contexts/contextcart'; // Importez le hook useCart

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart(); // Obtenez le panier du contexte
  const location = useLocation();

  // Fonction pour vérifier si le lien est actif
  const isActive = (path) => location.pathname === path ? 'text-secondary-light' : 'text-white';

  return (
    <header className="fixed bg-primary-light text-purple w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-6 relative">
        <div className="flex items-center space-x-3">
          <img src={rachslogo} alt="Rach's Logo" className="h-10 w-30" />
          <div className="text-xl font-ref text-white">Rach's Collection</div>
        </div>
        <nav className="hidden md:flex space-x-6 text-l font-sans">
          <Link to="/app" className={`hover:text-blue-500 transition duration-300 ${isActive('/app')}`}>Accueil</Link>
          <Link to="/culottes" className={`hover:text-blue-500 transition duration-300 ${isActive('/culottes')}`}>Nos culottes</Link>
          <Link to="/pantalons" className={`hover:text-blue-500 transition duration-300 ${isActive('/pantalons')}`}>Nos pantalons</Link>
          <Link to="/jupes" className={`hover:text-blue-500 transition duration-300 ${isActive('/jupes')}`}>Nos jupes</Link>
          <Link to="/robes" className={`hover:text-blue-500 transition duration-300 ${isActive('/robes')}`}>Nos robes</Link>
          <Link to="/cart" className="relative flex items-center">
            <ShoppingCartIcon className="w-6 h-6 text-white" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1 py-0.5">{cart.length}</span>
            )}
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            className="text-white hover:text-blue-500 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 mt-4 font-sans relative">
            <li><Link to="/app" className={`hover:text-blue-500 transition duration-300 ${isActive('/app')}`}>Accueil</Link></li>
            <li><Link to="/culottes" className={`hover:text-blue-500 transition duration-300 ${isActive('/culottes')}`}>Nos culottes</Link></li>
            <li><Link to="/pantalons" className={`hover:text-blue-500 transition duration-300 ${isActive('/pantalons')}`}>Nos pantalons</Link></li>
            <li><Link to="/jupes" className={`hover:text-blue-500 transition duration-300 ${isActive('/jupes')}`}>Nos jupes</Link></li>
            <li><Link to="/robes" className={`hover:text-blue-500 transition duration-300 ${isActive('/robes')}`}>Nos robes</Link></li>
            <li>
              <Link to="/cart" className="relative flex items-center">
                <ShoppingCartIcon className="w-6 h-6 text-white" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1 py-0.5">{cart.length}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
