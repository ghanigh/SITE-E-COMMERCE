import { useState } from 'react';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import OrangeLogo from './assets/Orange E-commerce Online Store Logo.png';
import SignUp from './components/auth/SingUp';
import './App.css';
import './styles/SingUp.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header OrangeLogo={OrangeLogo} />
      <main className="App-main">
        {/* Afficher uniquement la page d'inscription */}
        <SignUp />
      </main>
      <Footer />
    </div>
  );
}

export default App;
