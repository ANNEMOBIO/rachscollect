// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Importez Navigate pour les redirections
import Header from './Components/Header';
import Hero from './Components/Hero';
import Features from './Components/Nosrobes';
import Feature from './Components/Nosculottes';
import Footer from './Components/Footer';
import Example from './Components/desso';
import CulottesPage from './Components/culottespage';
import PantalonsPage from './Components/PantalonsPage';
import NosJupes from './Components/Nosjupes';
import Nosrobes from './Components/robePage';
import Cart from './Components/Cart'; // Assurez-vous que le chemin est correct
import Checkout from './Components/checkout'; // Importez le nouveau composant Checkout
import { CartProvider } from './contexts/contextcart'; // Importez le CartProvider

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            {/* Redirection de la racine vers /app */}
            <Route path="/" element={<Navigate to="/app" />} />
            <Route path="/app" element={<><Hero /><Features /><Feature /><Example /></>} />
            <Route path="/culottes" element={<CulottesPage />} />
            <Route path="/jupes" element={<NosJupes />} />
            <Route path="/pantalons" element={<PantalonsPage />} />
            <Route path="/robes" element={<Nosrobes />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} /> {/* Nouvelle route pour la validation de commande */}
            {/* Ajoutez d'autres routes ici si nécessaire */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
