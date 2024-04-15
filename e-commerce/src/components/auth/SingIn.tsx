import React, { useState } from 'react';

const SignIn: React.FC = () => {
  // State pour les champs de connexion
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Fonction de soumission du formulaire
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Ajoutez ici la logique pour la soumission du formulaire
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        {/* Champ Email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Champ Mot de passe */}
        <div>
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* Bouton de soumission */}
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default SignIn;
