import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([
    { id: 1, name: 'Tshirt', price: 10.99, quantity: 1 },
    { id: 2, name: 'Chaussure', price: 19.99, quantity: 2 },
    { id: 3, name: 'Chaussure', price: 14.99, quantity: 1 },
  ]);

  // Fonction pour ajouter un produit au panier
  const addToCart = (productId: number) => {
    const updatedCart = cart.map(product =>
      product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
    );
    setCart(updatedCart);
  };

  // Fonction pour supprimer un produit du panier
  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
  };

  // Fonction pour calculer le total du panier
  const calculateTotal = (): number => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  // Fonction pour valider le panier
  const validateCart = () => {
    // Ajoutez ici la logique pour valider le panier, par exemple, envoyer les données au backend
    console.log('Panier validé !');
  };

  return (
    <div>
      <h2>Panier</h2>
      <div className="cart-items">
        {cart.map((product) => (
          <div key={product.id} className="cart-item">
            <h3>{product.name}</h3>
            <p>Prix unitaire: {product.price} €</p>
            <p>Quantité: {product.quantity}</p>
            <p>Total: {product.price * product.quantity} €</p>
            <button onClick={() => addToCart(product.id)}>Ajouter au panier</button>
            <button onClick={() => removeFromCart(product.id)}>Supprimer du panier</button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total du panier: {calculateTotal()} €</h3>
      </div>
      {/* Bouton "Valider le Panier" */}
      <button onClick={validateCart}>Valider le Panier</button>
      {/* Bouton "Retour aux Produits" */}
      <Link to="/">Retour aux Produits</Link>
    </div>
  );
};

export default CartPage;
