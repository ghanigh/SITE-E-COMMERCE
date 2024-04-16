import React, { useState } from 'react';

interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  firstName: string; // Nouveau champ : prénom
  lastName: string; // Nouveau champ : nom de famille
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    username: '',
    email: '',
    password: '',
    firstName: '', // Initialiser le nouveau champ : prénom
    lastName: '', // Initialiser le nouveau champ : nom de famille
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Envoyer les données du formulaire au serveur ou traiter localement
    console.log('Submitted data:', formData);
    // Réinitialiser le formulaire après la soumission
    setFormData({
      username: '',
      email: '',
      password: '',
      firstName: '', // Réinitialiser le champ : prénom
      lastName: '', // Réinitialiser le champ : nom de famille
    });
  };

  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="lastName">Nom de famille</label> {/* Nouveau champ : nom de famille */}
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      <div>
          <label htmlFor="firstName">Prénom</label> {/* Nouveau champ : prénom */}
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default SignUp;

