import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/auth/SingUp';
import SignIn from './components/auth/SingIn';
import HomePage from './home/HomePage';
import ProductDetailPage from './home/ProductDetailPage';
import CartPage from './components/cart/CartPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<HomePage />} />

        {/* Routes pour l'inscription et la connexion */}
        <Route index path="/user/signup" element={<SignUp />} />
        <Route path="/user/signin" element={<SignIn />} />

        {/* Nouvelle route pour la page de détail du produit */}
      {/*   <Route path="/product/:id" element={<ProductDetailPage />} /> */}
        
        {/* Nouvelle route pour la page du panier */}
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
