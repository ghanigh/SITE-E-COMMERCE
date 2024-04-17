import React, { useState } from "react";
import '../../styles/SingIn.css'

// Définition de l'interface pour les données du formulaire de connexion
interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  // Déclaration des états pour stocker les valeurs des champs de formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fonction pour gérer les changements dans les champs de formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Mettre à jour les valeurs des champs correspondants en fonction de leur nom
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Création d'un objet contenant les données du formulaire
    const formData: SignInFormData = {
      email,
      password,
    };
    // Envoyer les données du formulaire au serveur ou traiter localement
    console.log("Submitted data:", formData);
    // Réinitialiser les champs du formulaire après la soumission
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Connexion</h2>
      {/* Formulaire de connexion */}
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default SignIn;
