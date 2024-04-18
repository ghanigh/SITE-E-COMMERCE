import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  quantity: number;
  image: string;
}

const HomePage: React.FC = () => {
  // Déclaration de l'état pour stocker les produits et le panier
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Tshirt', price: 10.99, category: 'Unisexe', quantity: 0, image: '/assets/tshirt.jpg' },
    { id: 2, name: 'Chaussure', price: 19.99, category: 'Femme', quantity: 0, image: '/assets/chaussure_femme.jpg' },
    { id: 3, name: 'Chaussure', price: 14.99, category: 'Homme', quantity: 0, image: '/assets/chaussure_homme.jpg' },
  ]);
  
  const [cart, setCart] = useState([]);

  // Effet useEffect pour effectuer des actions lors du montage initial du composant
  useEffect(() => {
    // Cette fonction sera exécutée lorsque le composant est monté
    // Vous pouvez ajouter ici des actions à effectuer lors du montage du composant
  }, []);

/*   // Fonction pour ajouter un produit au panier
  const addToCart = (product: Product) => {
    const updatedCart = [...cart];
    const itemInCart = updatedCart.find((item) => item.id === product.id);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }
    setCart(updatedCart);
  }; */

  return (
    <div>
      <h2>Produits</h2>
      {/* Affichage de la liste des produits */}
      <div className="product-list">
        {/* Mapping sur les produits pour les afficher */}
        {products.map((product) => (
          <div key={product.id} className="product">
            {/* Affichage de l'image du produit */}
            <img src={product.image} alt={product.name} />
            {/* Affichage des détails du produit */}
            <h3>{product.name}</h3>
            <p>Prix: {product.price} €</p>
            <p>Catégorie: {product.category}</p>
            {/* Bouton pour ajouter au panier */}
            <button onClick={() => addToCart(product)}>Ajouter au panier</button>
          </div>
        ))}
      </div>

      {/* Affichage du panier */}
      <div className="cart">
        <h2>Panier</h2>
        <ul>
          {/* Mapping sur les produits du panier pour les afficher */}
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - Quantité: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
