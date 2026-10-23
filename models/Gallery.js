import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [2, "Title must be at least 2 characters"],
      maxlength: [120, "Title cannot exceed 120 characters"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
      enum: {
        values: [
          "Manufacturing Facility",
          "FIBC Production",
          "Bulk Packaging",
          "Quality Inspection",
          "Finished Products",
          "Packaging & Dispatch",
          "Other",
        ],
        message: "{VALUE} is not a supported gallery category",
      },
      default: "Manufacturing Facility",
    },
    imageUrl: {
      type: String,
      required: [true, "Image URL is required"],
    },
    cloudinaryPublicId: {
      type: String,
      required: [true, "Cloudinary public ID is required"],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [1000, "Description cannot exceed 1000 characters"],
      default: "",
    },
    displayOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

gallerySchema.index({ category: 1, displayOrder: 1, createdAt: -1 });

export const Gallery = mongoose.model("Gallery", gallerySchema);
