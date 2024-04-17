import React, { useState } from 'react';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import OrangeLogo from './assets/Orange E-commerce Online Store Logo.png';
import SignUp from './components/auth/SingUp';
import SignIn from './components/auth/SingIn';
import HomePage from './home/HomePage';
import './App.css';
import './styles/SingUp.css';
import './styles/SingIn.css';
import './styles/HomePage.css';

function App() {
  const [showSignUp, setShowSignUp] = useState(true);
  const [showHomePage, setShowHomePage] = useState(false);

  const toggleForm = () => {
    setShowSignUp(!showSignUp);
  };

  const handleViewProducts = () => {
    setShowHomePage(true);
  };

  return (
    <div className="App">
      <Header OrangeLogo={OrangeLogo} />
      <main className="App-main">
        {/* Affichage conditionnel de HomePage ou des formulaires de connexion/inscription */}
        {showHomePage ? <HomePage /> : (showSignUp ? <SignUp /> : <SignIn />)}
        
        <button onClick={toggleForm}>
          {showSignUp ? "Déjà un compte ? Se connecter" : "Pas encore de compte ? S'inscrire"}
        </button>
        {/* Lien vers la page des produits */}
        <button onClick={handleViewProducts}>Voir nos produits</button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
