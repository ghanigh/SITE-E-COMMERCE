import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import { useCart } from '../components/cart/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  quantity: number;
  image: string;
}

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    // Mock data for products
    const initialProducts: Product[] = [
      { id: 1, name: 'Tshirt', price: 10.99, category: 'Unisexe', quantity: 0, image: '/assets/tshirt.jpg' },
      { id: 2, name: 'Chaussure', price: 19.99, category: 'Femme', quantity: 0, image: '/assets/chaussure_femme.jpg' },
      { id: 3, name: 'Chaussure', price: 14.99, category: 'Homme', quantity: 0, image: '/assets/chaussure_homme.jpg' },
    ];
    setProducts(initialProducts);
    setFilteredProducts(initialProducts);
  }, []);

  const addToCart = (product: Product) => {
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
    if (category === 'Tous') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="home-page">
      <h2 className="section-title">Produits</h2>
      <div className="filters">
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
        <h2 className="section-title">Contenu du panier</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - Quantité: {item.quantity}
            </li>
          ))}
        </ul>
        <Link to="/cart" className="cart-link">
          <button>Voir le Panier</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
