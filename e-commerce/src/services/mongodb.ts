import mongoose from 'mongoose';

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useUnifiedTopology: true,
});


// Définition du schéma pour un modèle utilisateur
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

// Création du modèle utilisateur à partir du schéma
const User = mongoose.model('User', userSchema);

// Exemple d'utilisation du modèle pour créer un nouvel utilisateur
const newUser = new User({
  username: 'john_doe',
  email: 'john@example.com',
  password: 'password123',
});

// Sauvegarde du nouvel utilisateur dans la base de données
newUser.save().then(() => {
  console.log('New user saved successfully');
}).catch((error) => {
  console.error('Error saving user:', error);
});
