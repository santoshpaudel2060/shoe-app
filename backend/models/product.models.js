import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    productBeforeDiscount: {
      type: Number,
      min: 1,
    },
    productAfterDiscount: {
      type: Number,
      min: 1,
    },
    category: {
      type: String,
      enum: ["men", "women"],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    stock: { type: Number, required: true, min: 0, default: 0 },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
