import React, { useState } from 'react';
import { useCart } from '../contexts/contextcart';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateCartItemQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleQuantityChange = (cartId, newQuantity) => {
    if (newQuantity > 0) {
      updateCartItemQuantity(cartId, newQuantity);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-8 text-black font-sans">Votre Panier</h1>
      {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
      {cart.length === 0 ? (
        <p className="text-center text-gray-700">Votre panier est vide.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white hidden sm:table">
            <thead>
              <tr>
                <th className="py-2 text-left text-sm sm:text-base">Image</th>
                <th className="py-2 text-left text-sm sm:text-base">Produit</th>
                <th className="py-2 text-left text-sm sm:text-base">Prix</th>
                <th className="py-2 text-left text-sm sm:text-base">Quantité</th>
                <th className="py-2 text-left text-sm sm:text-base">Total</th>
                <th className="py-2 text-left text-sm sm:text-base">Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.cartId} className="border-b">
                  <td className="border px-2 sm:px-4 py-2">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.name || 'Produit'} 
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover" 
                        onError={(e) => e.target.src = 'chemin/vers/image-de-repli.jpg'} 
                      />
                    ) : (
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 flex items-center justify-center text-gray-500">Image non disponible</div>
                    )}
                  </td>
                  <td className="border px-2 sm:px-4 py-2 text-sm sm:text-base">{item.name || 'Nom du produit indisponible'}</td>
                  <td className="border px-2 sm:px-4 py-2 text-sm sm:text-base">{item.price || 'Prix non disponible'} f</td>
                  <td className="border px-2 sm:px-4 py-2">
                    <div className="flex items-center">
                      <button 
                        className="px-2 sm:px-3 py-1 bg-primary-light text-white rounded-lg"
                        onClick={() => handleQuantityChange(item.cartId, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="mx-1 sm:mx-2 text-sm sm:text-base">{item.quantity}</span>
                      <button 
                        className="px-2 sm:px-3 py-1 bg-primary-refe text-white rounded-lg"
                        onClick={() => handleQuantityChange(item.cartId, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="border px-2 sm:px-4 py-2 text-sm sm:text-base">{(parseFloat(item.price.replace('f', '').replace(',', '.')) * item.quantity).toFixed(2)} f</td>
                  <td className="border px-2 sm:px-4 py-2">
                    <button 
                      onClick={() => removeFromCart(item.cartId)}
                      className="bg-secondary-tht text-white py-2 px-2 sm:px-4 rounded-lg hover:bg-secondary-refe text-sm sm:text-base"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Affichage en colonne pour les petits écrans */}
          <div className="sm:hidden">
            {cart.map((item) => (
              <div key={item.cartId} className="border-b border-gray-200 py-4">
                <div className="flex items-center">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.name || 'Produit'} 
                      className="w-16 h-16 object-cover" 
                      onError={(e) => e.target.src = 'chemin/vers/image-de-repli.jpg'} 
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 flex items-center justify-center text-gray-500">Image non disponible</div>
                  )}
                  <div className="ml-4 flex-1">
                    <h2 className="text-lg font-semibold">{item.name || 'Nom du produit indisponible'}</h2>
                    <p className="text-sm">{item.price || 'Prix non disponible'} f</p>
                    <div className="flex items-center mt-2">
                      <button 
                        className="px-2 py-1 bg-primary-light text-white rounded-lg"
                        onClick={() => handleQuantityChange(item.cartId, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="mx-1 text-sm">{item.quantity}</span>
                      <button 
                        className="px-2 py-1 bg-primary-refe text-white rounded-lg"
                        onClick={() => handleQuantityChange(item.cartId, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <p className="mt-2 text-sm">Total: {(parseFloat(item.price.replace('f', '').replace(',', '.')) * item.quantity).toFixed(2)} f</p>
                    <button 
                      onClick={() => removeFromCart(item.cartId)}
                      className="bg-secondary-tht text-white py-1 px-2 mt-2 rounded-lg hover:bg-secondary-refe text-sm"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="text-center mt-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Total: {getTotalPrice()} f</h2>
        <button
          onClick={handleCheckout}
          className="bg-secondary-light text-white py-2 px-4 rounded-lg hover:bg-secondary-refe text-sm sm:text-base"
        >
          Valider la commande
        </button>
        <div className="mt-4">
          <Link to="/" className="text-blue-500 hover:underline text-sm sm:text-base">Continuer vos achats</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
