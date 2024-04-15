import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  // Ajout d'autres propriétés du produit ici...
}

interface ProductDetailPageProps {
  product: Product;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  return (
    <div>
      <h2>Détails du Produit</h2>
      <div>
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
