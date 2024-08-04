import React, { useState } from 'react';
import { useCart } from '../contexts/contextcart'; // Assurez-vous que le chemin est correct

const CulottesPage = () => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [message, setMessage] = useState('');
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleSizeChange = (e) => setSelectedSize(e.target.value);
  const handleQuantityChange = (e) => setQuantity(parseInt(e.target.value, 10));

  const handleAddToCart = () => {
    if (!selectedSize) {
      setMessage('Veuillez sélectionner une taille.');
      return;
    }

    if (quantity < 1) {
      setMessage('La quantité doit être d\'au moins 1.');
      return;
    }

    if (currentProduct) {
      addToCart(currentProduct, selectedSize, quantity);
      setCurrentProduct(null);
      setMessage('Produit ajouté au panier !');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsImageOpen(true);
  };

  const handleCloseImage = () => {
    setIsImageOpen(false);
    setSelectedImage('');
  };

  const culottes = [
    { id: 1, name: 'Culotte Élégante', price: '12000f', description: 'Culotte élégante et confortable pour un style raffiné.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjFE0B9Itj_vTSTXcXeCLd-gzle6ShzVkYw&s' },
    { id: 2, name: 'Culotte Moderne', price: '15000f', description: 'Design moderne avec une coupe parfaite.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjFE0B9Itj_vTSTXcXeCLd-gzle6ShzVkYw&s' },
    // Ajoutez plus de culottes ici
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-extrabold text-center mb-6 text-gray-900">Nos Culottes</h2>

        {message && (
          <div className="mb-3 p-3 bg-green-100 text-green-700 rounded-lg text-center">
            {message}
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {culottes.map((culotte) => (
            <div key={culotte.id} className="bg-white p-2 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
              <img
                src={culotte.image}
                alt={culotte.name}
                className="w-full h-32 object-cover mb-1 rounded-md cursor-pointer"
                onClick={() => handleImageClick(culotte.image)}
                onError={(e) => e.target.src = 'chemin/vers/image-de-repli.jpg'}
              />
              <h3 className="text-sm font-semibold mb-1 text-center">{culotte.name}</h3>
              <p className="text-xs text-gray-700 mb-1 text-center">{culotte.description}</p>
              <span className="block text-sm font-bold mb-1 text-center">{culotte.price}</span>

              <select
                value={selectedSize}
                onChange={handleSizeChange}
                className="mb-1 p-1 border rounded-lg w-full text-xs"
                aria-label="Sélectionnez une taille"
              >
                <option value="">Sélectionnez une taille</option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
                <option value="3xl">3XL</option>
              </select>

              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                className="mb-1 p-1 border rounded-lg w-full text-xs"
                aria-label="Quantité"
              />

              <button
                onClick={() => {
                  setCurrentProduct(culotte);
                  handleAddToCart();
                }}
                className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600 transition-colors w-full text-xs"
              >
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>

        {isImageOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative">
              <img src={selectedImage} alt="Aperçu" className="max-w-full max-h-full object-contain" />
              <button
                onClick={handleCloseImage}
                className="absolute top-2 right-2 bg-white p-2 rounded-full text-black"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CulottesPage;
