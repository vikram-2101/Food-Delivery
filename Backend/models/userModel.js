import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} },
  },
  { minimize: false }
);

// Add indexes for better query performance
userSchema.index({ email: 1 });
userSchema.index({ name: 1 });

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
