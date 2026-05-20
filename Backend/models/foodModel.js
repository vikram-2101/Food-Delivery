import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

// Add indexes for better query performance
foodSchema.index({ category: 1 });
foodSchema.index({ name: 1 });
foodSchema.index({ price: 1 });

const foodModel = mongoose.model.food || mongoose.model("food", foodSchema);

export default foodModel;
