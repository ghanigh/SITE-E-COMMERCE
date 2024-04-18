import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Tshirt', price: 10.99, category: 'Unisexe', quantity: 0, image: '/assets/tshirt.jpg' },
    { id: 2, name: 'Chaussure', price: 19.99, category: 'Femme', quantity: 0, image: '/assets/chaussure_femme.jpg' },
    { id: 3, name: 'Chaussure', price: 14.99, category: 'Homme', quantity: 0, image: '/assets/chaussure_homme.jpg' },
  ]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products); // State pour stocker les produits filtrés
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Effet pour mettre à jour les produits filtrés lorsque les produits changent
    setFilteredProducts(products);
  }, [products]);

  const addToCart = (product: Product) => {
    // Fonction pour ajouter un produit au panier
    const updatedCart = [...cart];
    const itemInCart = updatedCart.find((item) => item.id === product.id);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }
    setCart(updatedCart);
  };

  const filterProducts = (category: string) => {
    // Fonction pour filtrer les produits par catégorie
    if (category === 'Tous') {
      setFilteredProducts(products); // Afficher tous les produits si la catégorie est 'Tous'
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <h2>Produits</h2>
      <div className="filters">
        {/* Boutons de filtrage */}
        <button onClick={() => filterProducts('Tous')}>Tous</button>
        <button onClick={() => filterProducts('Homme')}>Homme</button>
        <button onClick={() => filterProducts('Femme')}>Femme</button>
        <button onClick={() => filterProducts('Unisexe')}>Unisexe</button>
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <h3>{product.name}</h3>
            <p>Prix: {product.price} €</p>
            <p>Catégorie: {product.category}</p>
            <button onClick={() => addToCart(product)}>Ajouter au panier</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Panier</h2>
        <ul>
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
