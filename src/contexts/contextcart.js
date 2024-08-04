import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Importation de uuid pour générer des identifiants uniques

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Fonction pour ajouter un produit au panier avec taille et quantité
  const addToCart = (product, size, quantity) => {
    const cartItem = { ...product, size, quantity, cartId: uuidv4() }; // Ajout de la taille, quantité et identifiant unique
    setCart(prevCart => [...prevCart, cartItem]);
    console.log('Produit ajouté au panier:', cartItem);
  };

  const removeFromCart = (cartId) => {
    setCart(prevCart => prevCart.filter(item => item.cartId !== cartId));
    console.log('Produit supprimé du panier:', cartId);
  };

  // Fonction pour mettre à jour la quantité d'un produit dans le panier
  const updateCartItemQuantity = (cartId, newQuantity) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.cartId === cartId ? { ...item, quantity: newQuantity } : item
      )
    );
    console.log('Quantité mise à jour:', cartId, newQuantity);
  };

  // Fonction pour calculer le prix total des éléments du panier
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const productPrice = parseFloat(item.price.replace('f', '').replace(',', '.')); // Convertir le prix en nombre
      return total + (productPrice * item.quantity);
    }, 0).toFixed(2); // Retourner le total arrondi à 2 décimales
  };

  // Fonction pour vider le panier
  const clearCart = () => {
    setCart([]);
    console.log('Panier vidé');
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItemQuantity, getTotalPrice, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
