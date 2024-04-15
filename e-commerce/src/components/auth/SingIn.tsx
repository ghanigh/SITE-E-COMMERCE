import React, { useState } from 'react';

const SignIn: React.FC = () => {
  // États pour stocker les valeurs des champs de formulaire
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Fonction de soumission du formulaire
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Vous pouvez ajouter ici la logique de soumission du formulaire, par exemple, envoyer les données au serveur
    console.log('Email:', email);
    console.log('Password:', password);
    // Réinitialisation des champs du formulaire après soumission
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        {/* Champ email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* Champ mot de passe */}
        <div>
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* Bouton de soumission */}
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default SignIn;
