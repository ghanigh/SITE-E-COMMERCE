import React, { useState } from 'react';
import axios from 'axios';

const SignUp: React.FC = () => {
  // Déclaration des états pour stocker les valeurs des champs de formulaire
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  // Fonction pour gérer les changements dans les champs de formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "prenom":
        setPrenom(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "role":
        setRole(value);
        break;
      default:
        break;
    }
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Création d'un objet contenant les données du formulaire
      const formData = {
        prenom,
        email,
        password,
        role,
      };
      // Envoi des données du formulaire au serveur avec Axios
      const response = await axios.post('http://localhost:8090/api/user/signup', formData);

      console.log('Server response:', response.data);
      // Réinitialiser les champs du formulaire après la soumission
      setPrenom("");
      setEmail("");
      setPassword("");
      setRole("");
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      {/* Formulaire d'inscription */}
      <form onSubmit={handleSubmit}>
        {/* Champ pour le prénom */}
        <div>
          <label htmlFor="prenom">Prénom</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={prenom}
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
        {/* Champ pour le rôle */}
        <div>
          <label htmlFor="role">Rôle</label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez un rôle</option>
            <option value="user">Utilisateur</option>
            <option value="admin">Administrateur</option>
          </select>
        </div>
        {/* Bouton de soumission du formulaire */}
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default SignUp;
