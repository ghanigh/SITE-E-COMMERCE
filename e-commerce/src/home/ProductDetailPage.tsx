import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  quantity: number;
  image: string;
}

interface ProductDetailPageProps {
  product: Product;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  return (
    <div>
      <h2>Détails du Produit</h2>
      <div>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>Prix: {product.price} €</p>
        <p>Catégorie: {product.category}</p>
        {/* Ajoutez d'autres détails du produit ici... */}
      </div>
    </div>
  );
}

export default ProductDetailPage;
