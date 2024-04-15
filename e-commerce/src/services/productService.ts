interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
    // Autres propriétés du produit...
  }
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
      category: 'Category 1',
      description: 'Description of Product 1',
      // Autres propriétés du produit...
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      category: 'Category 2',
      description: 'Description of Product 2',
      // Autres propriétés du produit...
    },
    // Ajoutez d'autres produits ici...
  ];
  
  export const productService = {
    getAllProducts: (): Product[] => {
      // Retourne tous les produits
      return products;
    },
  
    getProductById: (id: number): Product | undefined => {
      // Retourne le produit correspondant à l'ID spécifié, s'il existe
      return products.find((product) => product.id === id);
    },
  
    // Ajoutez d'autres méthodes pour la gestion des produits selon les besoins de votre application...
  };
  