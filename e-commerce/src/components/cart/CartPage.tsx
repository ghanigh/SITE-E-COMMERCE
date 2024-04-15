import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  // Exemple de données pour le panier
  const [cart, setCart] = useState<Product[]>([
    { id: 1, name: 'Produit 1', price: 10.99, quantity: 1 },
    { id: 2, name: 'Produit 2', price: 19.99, quantity: 2 },
    { id: 3, name: 'Produit 3', price: 14.99, quantity: 1 },
  ]);

  // Fonction pour calculer le total du panier
  const calculateTotal = (): number => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
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
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total du panier: {calculateTotal()} €</h3>
      </div>
    </div>
  );
};

export default CartPage;
