import mongoose, { Schema, Document } from 'mongoose';

// Interface pour représenter les données utilisateur
interface User {
  username: string;
  email: string;
  password: string;
}

// Schéma utilisateur avec Mongoose
const UserSchema: Schema = new Schema<User>({
  // Définition des champs du schéma utilisateur avec leurs types et options
  username: { type: String, required: true }, // Champ username de type String, requis
  email: { type: String, required: true, unique: true }, // Champ email de type String, requis et unique
  password: { type: String, required: true }, // Champ password de type String, requis
});

// Exporter le modèle utilisateur en utilisant l'interface User et Document de Mongoose
export default mongoose.model<User & Document>('User', UserSchema);
