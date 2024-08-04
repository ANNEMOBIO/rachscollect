import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importez le style CSS pour le carrousel
import ru from './ru.jpg'; // Remplacez par le chemin vers votre image
import ry from './ry.jpg'; // Remplacez par le chemin vers votre image
import rz from './rz.jpg'; // Remplacez par le chemin vers votre image
import { useCart } from '../contexts/contextcart'; // Assurez-vous que le chemin est correct

const Feature = () => {
  const [selectedItem, setSelectedItem] = useState(null); // État pour l'élément sélectionné
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const items = [
    { image: ru, name: 'Culotte Élégante', price: '12000f', description: 'Description de la culotte Élégante.' },
    { image: ry, name: 'Culotte Confort', price: '13000f', description: 'Description de la culotte Confort.' },
    { image: rz, name: 'Culotte Chic', price: '14000f', description: 'Description de la culotte Chic.' },
    { image: ru, name: 'Culotte Classique', price: '12500f', description: 'Description de la culotte Classique.' },
    // Ajoutez d'autres articles si nécessaire
  ];
  const navigate = useNavigate(); // Pour la navigation programmatique
  const { addToCart } = useCart(); // Obtenez la fonction pour ajouter au panier

  // Fonction pour gérer la redirection vers la page de toutes les culottes
  const handleSeeMore = () => {
    navigate('/culottes'); // Changez le chemin si nécessaire
  };

  // Fonction pour gérer la sélection de taille
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  // Fonction pour gérer la sélection de quantité
  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  // Fonction pour ajouter au panier
  const handleAddToCart = () => {
    if (selectedSize === '') {
      alert('Veuillez sélectionner une taille.');
      return;
    }

    if (quantity < 1) {
      alert('La quantité doit être d\'au moins 1.');
      return;
    }

    if (!selectedItem) {
      alert('Aucun article sélectionné.');
      return;
    }

    // Log pour vérifier les données avant de les ajouter au panier
    console.log('Article ajouté au panier:', { ...selectedItem, size: selectedSize, quantity });

    // Ajoutez l'article au panier avec la taille et la quantité sélectionnées
    addToCart(selectedItem, selectedSize, quantity);

    // Réinitialiser les états
    setSelectedItem(null);
    setSelectedSize('');
    setQuantity(1);
  };

  // Fonction pour ouvrir le formulaire de taille
  const handleOpenSizeForm = (item) => {
    setSelectedItem(item);
  };

  // Fonction pour fermer le formulaire de taille
  const handleCloseSizeForm = () => {
    setSelectedItem(null);
    setSelectedSize('');
    setQuantity(1);
  };

  return (
    <section className="py-20 bg-secondary-dark from-blue-100 to-purple-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-black font-sans">Nos culottes</h2>

        {/* Texte d'introduction pour les petits écrans */}
        <div className="block md:hidden mb-8 px-4 text-center">
          <p className="text-lg font-medium text-gray-900 mb-4 font-sans">
            Découvrez notre collection exclusive de culottes conçues pour allier confort et élégance. Faites défiler pour voir nos modèles les plus populaires !
          </p>
        </div>

        {/* Carousel pour petits écrans */}
        <div className="block md:hidden">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={3000}
            transitionTime={500}
            className="rounded-lg shadow-lg overflow-hidden"
          >
            {items.map((item, index) => (
              <div key={index} className="text-center p-2 bg-white border rounded shadow-lg transition-transform transform hover:scale-105 rounded-3xl w-5/6 mx-auto">
                <img src={item.image} alt={item.name} className="w-full h-24 object-cover rounded-xl mb-2" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 font-ref">{item.price}</h3>
                <p className="text-gray-700 mb-2 font-ref">{item.description}</p>
                <div className="flex justify-center space-x-2">
                  <button
                    onClick={() => handleOpenSizeForm(item)}
                    className="bg-gray-200 p-1 rounded-full hover:bg-gray-300"
                  >
                    <i className="fas fa-shopping-cart"></i> {/* Icône de panier */}
                  </button>
                  <button className="bg-gray-200 p-1 rounded-full hover:bg-gray-300">
                    <i className="fas fa-heart"></i> {/* Icône de coeur */}
                  </button>
                  <button className="bg-gray-200 p-1 rounded-full hover:bg-gray-300">
                    <i className="fas fa-sync"></i> {/* Icône de synchronisation */}
                  </button>
                  <button className="bg-gray-200 p-1 rounded-full hover:bg-gray-300">
                    <i className="fas fa-search"></i> {/* Icône de recherche */}
                  </button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Grille pour écrans moyens et grands */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div key={index} className="text-center p-4 bg-white border rounded shadow-lg transition-transform transform hover:scale-105 rounded-3xl">
              <img src={item.image} alt={item.name} className="w-full h-36 object-cover rounded-xl mb-2" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 font-ref">{item.price}</h3>
              <p className="text-gray-700 mb-2 font-ref">{item.description}</p>
              <div className="flex justify-center space-x-2">
                <button
                  onClick={() => handleOpenSizeForm(item)}
                  className="bg-gray-200 p-1 rounded-full hover:bg-gray-300"
                >
                  <i className="fas fa-shopping-cart"></i> {/* Icône de panier */}
                </button>
                <button className="bg-gray-200 p-1 rounded-full hover:bg-gray-300">
                  <i className="fas fa-heart"></i> {/* Icône de coeur */}
                </button>
                <button className="bg-gray-200 p-1 rounded-full hover:bg-gray-300">
                  <i className="fas fa-sync"></i> {/* Icône de synchronisation */}
                </button>
                <button className="bg-gray-200 p-1 rounded-full hover:bg-gray-300">
                  <i className="fas fa-search"></i> {/* Icône de recherche */}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton "Voir plus" */}
        <div className="text-center mt-12">
          <button
            onClick={handleSeeMore}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Voir plus
          </button>
        </div>

        {/* Formulaire de sélection de taille */}
        {selectedItem && (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-xl shadow-xl w-11/12 md:w-1/2 lg:w-1/3">
      <div className="flex justify-end">
        <button
          onClick={handleCloseSizeForm}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <i className="fas fa-times"></i> {/* Icône de fermeture */}
        </button>
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">{selectedItem.name}</h3>
      <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-48 object-cover rounded-xl mb-4" />
      <p className="text-md mb-4 text-gray-700">{selectedItem.description}</p>
      <div className="mb-4">
        <label htmlFor="size" className="block text-gray-700 font-medium mb-2">Taille:</label>
        <select
          id="size"
          value={selectedSize}
          onChange={handleSizeChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sélectionnez une taille</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="2XL">2XL</option>
          <option value="3XL">3XL</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">Quantité:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleAddToCart}
        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-md hover:bg-gradient-to-l hover:from-pink-600 hover:to-purple-600 transition duration-300 ease-in-out"
      >
        Ajouter au panier
      </button>
    </div>
  </div>
)}

      </div>
    </section>
  );
};


export default Feature;
