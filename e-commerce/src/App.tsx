import React, { useState } from 'react';
import Header from './components/pages/Header';
import Counter from './components/pages/Counter';
import Footer from './components/pages/Footer';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import SignIn from './components/auth/SingIn';
import SignUp from './components/auth/SingUp';
import HomePage from './home/HomePage';
import ProductDetailPage from './home/ProductDetailPage';
import CartPage from './components/cart/CartPage';
import { authService } from './services/authService'; // Utilisation de authService
import { productService } from './services/productService'; // Utilisation de productService

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Exemple de produit pour tester ProductDetailPage
  const product = {
    id: 1,
    name: 'Produit test',
    price: 25.99,
    category: 'Test',
    description: 'Description du produit test',
  };

  // Utilisation de authService et productService
  const user = authService.getCurrentUser();
  const allProducts = productService.getAllProducts();

  return (
    <div className="App">
      <Header viteLogo={viteLogo} reactLogo={reactLogo} />
      <main className="App-main">
        {/* Inclure SignUp et SignIn */}
        <SignUp />
        <SignIn />
        {/* Le reste du contenu */}
        <HomePage />
        {/* Inclure ProductDetailPage avec un produit en exemple */}
        <ProductDetailPage product={product} />
        {/* Inclure CartPage */}
        <CartPage />
        {/* Le reste du contenu */}
        <h1>Site e-commerce</h1>
        <div className="card">
          <Counter count={count} setCount={setCount} />
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
