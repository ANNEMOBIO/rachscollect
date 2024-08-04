// src/Components/Checkout.js
import React, { useState } from 'react';
import { useCart } from '../contexts/contextcart';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [userDetails, setUserDetails] = useState({
    name: '',
    address: '',
    phone: '', // Ajout du champ téléphone
    paymentMethod: 'paiement a la livraison uniquement',
  });
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!userDetails.name) newErrors.name = 'Le nom est requis.';
    if (!userDetails.address) newErrors.address = 'L\'adresse est requise.';
    if (!userDetails.phone) newErrors.phone = 'Le numéro de téléphone est requis.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    if (cart.length === 0) {
      alert('Votre panier est vide.');
      return;
    }

    const cartDetails = cart.map(item => `
      Nom: ${item.name || 'Non spécifié'}
      Taille: ${item.size || 'Non spécifiée'}
      Quantité: ${item.quantity || 0}
      Prix: ${item.price || 'Non spécifié'}
      Description: ${item.description || 'Non spécifiée'}
      Image: ${item.image || 'Non disponible'}
    `).join('\n');

    const message = `Résumé de la commande:\n\n${cartDetails}\n\nTotal: ${getTotalPrice()} f\n\nNom: ${userDetails.name}\nAdresse: ${userDetails.address}\nNuméro de téléphone: ${userDetails.phone}\nMéthode de paiement: ${userDetails.paymentMethod}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/+2250713605155?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');

    setConfirmationMessage('Commande validée ! Vous serez contactée sur WhatsApp.');
    clearCart();
    navigate('/');
  };

  const totalPrice = getTotalPrice();

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-8 text-black font-sans">Validation de Commande</h1>

      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Résumé de votre commande</h2>
        {cart.length === 0 ? (
          <p className="text-center text-gray-700">Votre panier est vide.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Taille</th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantité</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cart.map((item) => (
                  <tr key={item.cartId}>
                    <td className="px-2 py-2 whitespace-nowrap text-center">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name || 'Produit'}
                          className="w-12 h-12 md:w-16 md:h-16 object-cover mx-auto"
                          onError={(e) => e.target.src = '/path/to/placeholder-image.jpg'}
                        />
                      ) : (
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 flex items-center justify-center text-gray-500">Image non disponible</div>
                      )}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                      {item.name || 'Nom du produit indisponible'}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.price ? `${item.price} f` : 'Prix non disponible'}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                      {item.size || 'Non spécifiée'}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                      {item.quantity || 0}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Détails de la commande</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={userDetails.name}
            onChange={handleChange}
            className={`form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.name ? 'border-red-500' : ''}`}
            required
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Adresse de livraison
          </label>
          <input
            id="address"
            name="address"
            type="text"
            value={userDetails.address}
            onChange={handleChange}
            className={`form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.address ? 'border-red-500' : ''}`}
            required
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Numéro de téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={userDetails.phone}
            onChange={handleChange}
            className={`form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.phone ? 'border-red-500' : ''}`}
            required
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paymentMethod">
            Méthode de paiement
          </label>
          
            <option value="creditCard">paiement à la livraison uniquement</option>
           
        </div>

        <div className="text-center mt-8">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Total de la commande: {totalPrice} f</h2>
          <button
            type="submit"
            className=" text-white py-2 px-4 rounded-lg bg-secondary-light hover:bg-secondary-dark text-white"
          >
            Confirmer la commande
          </button>
        </div>
      </form>

      {confirmationMessage && (
        <div className="text-center mt-8">
          <p className="text-green-500 text-xl font-semibold">{confirmationMessage}</p>
        </div>
      )}

      <div className="text-center mt-4">
        <Link to="/cart" className="text-blue-500 hover:underline  text-secondary-light">Retourner au panier</Link>
      </div>
    </div>
  );
};

export default Checkout;
