import multer from "multer";
import { ApiError } from "../utils/apiError.js";

// Memory storage so file buffer can be uploaded directly to Cloudinary
const storage = multer.memoryStorage();

// File filter function to enforce allowed image types
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
    "image/jpg",
  ];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new ApiError(
        400,
        "Invalid file type. Only JPEG, JPG, PNG, WEBP, and GIF images are allowed."
      ),
      false
    );
  }
};

export const uploadSingleImage = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB max size
  },
  fileFilter: fileFilter,
}).single("image");
