import React from 'react';

// Interface définissant la structure d'un produit
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  // Ajout d'autres propriétés du produit ici...
}

// Interface des props pour la page de détail du produit
interface ProductDetailPageProps {
  product: Product; // Propriété product de type Product
}

// Composant de la page de détail du produit
const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  return (
    <div>
      {/* Titre de la page */}
      <h2>Détails du Produit</h2>
      <div>
        {/* Affichage des détails du produit */}
        <h3>{product.name}</h3>
        <p>Prix: {product.price} €</p>
        <p>Catégorie: {product.category}</p>
        <p>Description: {product.description}</p>
        {/* Ajout d'autres détails du produit ici... */}
      </div>
    </div>
  );
}

export default ProductDetailPage;
