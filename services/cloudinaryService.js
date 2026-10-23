import { v2 as cloudinary } from "cloudinary";
import { saveLocalUpload, deleteLocalUpload } from "../utils/fileStore.js";

/**
 * Configure and get Cloudinary instance dynamically
 */
const getCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
  return cloudinary;
};

export const isCloudinaryConfigured = () => {
  const name = process.env.CLOUDINARY_CLOUD_NAME;
  const key = process.env.CLOUDINARY_API_KEY;
  const secret = process.env.CLOUDINARY_API_SECRET;

  return (
    Boolean(name) &&
    name !== "your_cloudinary_cloud_name" &&
    name !== "your_actual_cloud_name" &&
    name !== "demo_cloud" &&
    Boolean(key) &&
    key !== "your_cloudinary_api_key" &&
    key !== "your_actual_api_key" &&
    Boolean(secret) &&
    secret !== "your_cloudinary_api_secret" &&
    secret !== "your_actual_api_secret"
  );
};

/**
 * Upload image buffer to Cloudinary or persistent disk storage
 * @param {Buffer} fileBuffer
 * @param {string} folder
 * @param {string} originalName
 * @returns {Promise<{url: string, public_id: string}>}
 */
export const uploadToCloudinary = (fileBuffer, folder = "fibc-gallery", originalName = "image.jpg") => {
  return new Promise((resolve) => {
    if (!isCloudinaryConfigured()) {
      console.log("[Upload Notice] Cloudinary keys not configured in backend/.env. Saving file to disk /uploads directory.");
      const localResult = saveLocalUpload(fileBuffer, originalName);
      return resolve({
        url: localResult.url,
        public_id: localResult.public_id,
        secure_url: localResult.url,
      });
    }

    try {
      const instance = getCloudinary();
      const uploadStream = instance.uploader.upload_stream(
        {
          folder,
          resource_type: "image",
          transformation: [
            { width: 1200, height: 1200, crop: "limit" },
            { quality: "auto", fetch_format: "auto" },
          ],
        },
        (error, result) => {
          if (error) {
            console.error("[Cloudinary Error] Upload failed, falling back to disk storage:", error.message || error);
            const localResult = saveLocalUpload(fileBuffer, originalName);
            return resolve({
              url: localResult.url,
              public_id: localResult.public_id,
              secure_url: localResult.url,
            });
          }
          resolve({
            url: result.secure_url || result.url,
            public_id: result.public_id,
          });
        }
      );

      uploadStream.end(fileBuffer);
    } catch (err) {
      console.error("[Cloudinary Error] Exception during upload stream:", err.message);
      const localResult = saveLocalUpload(fileBuffer, originalName);
      return resolve({
        url: localResult.url,
        public_id: localResult.public_id,
        secure_url: localResult.url,
      });
    }
  });
};

/**
 * Delete image from Cloudinary or local persistent disk by public ID
 * @param {string} publicId
 * @returns {Promise<any>}
 */
export const deleteFromCloudinary = async (publicId) => {
  if (!publicId) return { result: "ok" };

  if (publicId.startsWith("local_")) {
    deleteLocalUpload(publicId);
    return { result: "ok" };
  }

  if (publicId.startsWith("mock_") || publicId.startsWith("fallback_")) {
    return { result: "ok" };
  }

  if (!isCloudinaryConfigured()) {
    deleteLocalUpload(publicId);
    return { result: "ok" };
  }

  try {
    const instance = getCloudinary();
    const result = await instance.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error("[Cloudinary Error] Delete failed:", error.message);
    deleteLocalUpload(publicId);
    return { result: "ok" };
  }
};
