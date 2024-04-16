import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import OrangeLogo from './assets/Orange E-commerce Online Store Logo.png';
import SignUp from './components/auth/SingUp';
import SignIn from './components/auth/SingIn';
import HomePage from './home/HomePage';
import './App.css';
import './styles/SingUp.css'
import './styles/SingIn.css'
import './styles/HomePage.css'

function App() {
  const [showSignUp, setShowSignUp] = useState(true);

  const toggleForm = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="App">
      <Header OrangeLogo={OrangeLogo} />
      <main className="App-main">
        {showSignUp ? <SignUp /> : <SignIn />}
        <button onClick={toggleForm}>
          {showSignUp ? "Déjà un compte ? Se connecter" : "Pas encore de compte ? S'inscrire"}
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
