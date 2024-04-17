import React, { useEffect } from 'react';
import '../styles/HomePage.css'
const HomePage: React.FC = () => {
  // Effet useEffect pour effectuer des actions lors du montage initial du composant
  useEffect(() => {
    // Cette fonction sera exécutée lorsque le composant est monté
    // Vous pouvez ajouter ici des actions à effectuer lors du montage du composant
  }, []);

  // Exemple de données pour les produits
  const products = [
    { id: 1, name: 'Produit 1', price: 10.99, category: 'Homme' },
    { id: 2, name: 'Produit 2', price: 19.99, category: 'Femme' },
    { id: 3, name: 'Produit 3', price: 14.99, category: 'Homme' },
    // Ajout d'autres produits ici...
  ];

  return (
    <div>
      <h2>Produits</h2>
      {/* Affichage de la liste des produits */}
      <div className="product-list">
        {/* Mapping sur les produits pour les afficher */}
        {products.map(product => (
          <div key={product.id} className="product">
            {/* Affichage des détails du produit */}
            <h3>{product.name}</h3>
            <p>Prix: {product.price} €</p>
            <p>Catégorie: {product.category}</p>
            {/* Ajout d'autres détails du produit ici... */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
