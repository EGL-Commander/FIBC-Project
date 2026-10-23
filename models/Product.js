import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [150, "Name cannot exceed 150 characters"],
    },
    slug: {
      type: String,
      trim: true,
      lowercase: true,
      maxlength: [200, "Slug cannot exceed 200 characters"],
      default: "",
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      trim: true,
      maxlength: [2000, "Description cannot exceed 2000 characters"],
    },
    category: {
      type: String,
      trim: true,
      maxlength: [100, "Category cannot exceed 100 characters"],
      default: "",
    },
    categoryId: {
      type: String,
      trim: true,
      maxlength: [100, "Category ID cannot exceed 100 characters"],
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    cloudinaryPublicId: {
      type: String,
      default: "",
    },
    specifications: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    applications: {
      type: [String],
      default: [],
    },
    displayOrder: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

export const Product = mongoose.model("Product", productSchema);
