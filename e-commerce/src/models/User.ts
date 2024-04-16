import mongoose, { Schema, Document } from 'mongoose';

// Interface pour représenter les données utilisateur
interface User {
  username: string;
  email: string;
  password: string;
}

// Schéma utilisateur avec Mongoose
const UserSchema: Schema = new Schema<User>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Exporter le modèle utilisateur
export default mongoose.model<User & Document>('User', UserSchema);
