import React, { useEffect } from 'react';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Cette fonction sera exécutée lorsque le composant est monté
    // Vous pouvez ajouter ici des actions à effectuer lors du montage du composant
  }, []); // Le tableau vide indique que cette fonction doit être exécutée uniquement lors du montage initial du composant

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
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
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
