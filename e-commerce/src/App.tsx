/* import React from 'react'; */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/auth//SingUp';
import SignIn from './components/auth//SingIn';
import HomePage from './home/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<HomePage />} />

        {/* Routes pour l'inscription et la connexion */}
        <Route index path="/user/signup" element={<SignUp />} />
        <Route path="/user/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
