import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true},
    picture: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true }
  },
  { timestamps: { createdAt: true } }
);

userSchema.plugin(mongooseUniqueValidator);

export default mongoose.model('User', userSchema);
