import React, { useState } from 'react';

const SignUp: React.FC = () => {
  // Déclaration des états pour stocker les valeurs des champs de formulaire
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Fonction pour gérer les changements dans les champs de formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      default:
        break;
    }
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Création d'un objet contenant les données du formulaire
    const formData = {
      username,
      email,
      password,
      firstName,
      lastName,
    };
    // Envoyer les données du formulaire au serveur ou traiter localement
    console.log("Submitted data:", formData);
    // Réinitialiser les champs du formulaire après la soumission
    setUsername("");
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div>
      <h2>Inscription</h2>
      {/* Formulaire d'inscription */}
      <form onSubmit={handleSubmit}>
        {/* Champ pour le nom de famille */}
        <div>
          <label htmlFor="lastName">Nom de famille</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            required
          />
        </div>
        {/* Champ pour le prénom */}
        <div>
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            required
          />
        </div>
        {/* Champ pour le nom d'utilisateur */}
        <div>
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
        </div>
        {/* Champ pour l'email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        {/* Champ pour le mot de passe */}
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        {/* Bouton de soumission du formulaire */}
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default SignUp;
