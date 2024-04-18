import React from 'react';
import { Route } from 'react-router-dom';

const HomePageRoute: React.FC = () => {
  return (
    <Route path="/" exact>
      {/* Contenu actuel de la page HomePage */}
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
          <h2>Contenu du panier</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - Quantité: {item.quantity}
              </li>
            ))}
          </ul>
          {/* Bouton "Panier" */}
          <Link to="/cart">
            <button>Voir le Panier</button>
          </Link>
        </div>
      </div>
    </Route>
  );
};

export default HomePageRoute;
