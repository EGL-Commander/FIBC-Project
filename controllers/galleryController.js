import mongoose from "mongoose";
import { Gallery } from "../models/Gallery.js";
import {
  uploadToCloudinary,
  deleteFromCloudinary,
} from "../services/cloudinaryService.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { readStorage, writeStorage } from "../utils/fileStore.js";

/**
 * @desc    Get all gallery items
 * @route   GET /api/gallery
 * @access  Public
 */
export const getGalleryItems = async (req, res, next) => {
  try {
    const { category, search, page = 1, limit = 50 } = req.query;

    if (mongoose.connection.readyState !== 1) {
      const storage = readStorage();
      let filtered = [...(storage.gallery || [])];

      if (category && category !== "All") {
        filtered = filtered.filter((item) => item.category === category);
      }
      if (search) {
        const s = search.toLowerCase();
        filtered = filtered.filter(
          (item) =>
            item.title.toLowerCase().includes(s) ||
            (item.description && item.description.toLowerCase().includes(s))
        );
      }

      const pageNum = parseInt(page, 10);
      const limitNum = parseInt(limit, 10);
      const total = filtered.length;
      const skip = (pageNum - 1) * limitNum;
      const paginated = filtered.slice(skip, skip + limitNum);

      return res.status(200).json(
        new ApiResponse(
          200,
          paginated,
          "Gallery items retrieved successfully",
          { total, page: pageNum, limit: limitNum, pages: Math.ceil(total / limitNum) || 1 }
        )
      );
    }

    const query = {};
    if (category && category !== "All") {
      query.category = category;
    }
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const skip = (pageNum - 1) * limitNum;

    const total = await Gallery.countDocuments(query);
    const items = await Gallery.find(query)
      .sort({ displayOrder: 1, createdAt: -1 })
      .skip(skip)
      .limit(limitNum);

    // Backup to persistent storage file
    const storage = readStorage();
    if (items && items.length > 0) {
      storage.gallery = items.map((i) => i.toObject());
      writeStorage(storage);
    }

    const pagination = {
      total,
      page: pageNum,
      limit: limitNum,
      pages: Math.ceil(total / limitNum) || 1,
    };

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          items,
          "Gallery items retrieved successfully",
          pagination
        )
      );
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get single gallery item by ID
 * @route   GET /api/gallery/:id
 * @access  Public
 */
export const getGalleryItemById = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      const storage = readStorage();
      const item = (storage.gallery || []).find((i) => i._id === req.params.id);
      if (!item) return next(new ApiError(404, "Gallery item not found"));
      return res.status(200).json(new ApiResponse(200, item, "Gallery item retrieved"));
    }

    const item = await Gallery.findById(req.params.id);
    if (!item) {
      return next(new ApiError(404, "Gallery item not found"));
    }
    return res
      .status(200)
      .json(new ApiResponse(200, item, "Gallery item retrieved successfully"));
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Create a new gallery item
 * @route   POST /api/gallery
 * @access  Private/Admin
 */
export const createGalleryItem = async (req, res, next) => {
  try {
    if (!req.file) {
      return next(new ApiError(400, "Image file is required"));
    }

    const { title, category, description, displayOrder } = req.body;

    const uploadResult = await uploadToCloudinary(
      req.file.buffer,
      "fibc-gallery",
      req.file.originalname
    );

    if (mongoose.connection.readyState !== 1) {
      const storage = readStorage();
      const newItem = {
        _id: `mock_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
        title,
        category: category || "Manufacturing Facility",
        imageUrl: uploadResult.url,
        cloudinaryPublicId: uploadResult.public_id,
        description: description || "",
        displayOrder: displayOrder ? parseInt(displayOrder, 10) : 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      if (!storage.gallery) storage.gallery = [];
      storage.gallery.unshift(newItem);
      writeStorage(storage);

      return res
        .status(201)
        .json(
          new ApiResponse(
            201,
            newItem,
            "Gallery item created successfully and saved permanently"
          )
        );
    }

    const galleryItem = await Gallery.create({
      title,
      category: category || "Manufacturing Facility",
      imageUrl: uploadResult.url,
      cloudinaryPublicId: uploadResult.public_id,
      description: description || "",
      displayOrder: displayOrder ? parseInt(displayOrder, 10) : 0,
    });

    const storage = readStorage();
    if (!storage.gallery) storage.gallery = [];
    storage.gallery.unshift(galleryItem.toObject());
    writeStorage(storage);

    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          galleryItem,
          "Gallery item created successfully"
        )
      );
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update gallery item
 * @route   PUT /api/gallery/:id
 * @access  Private/Admin
 */
export const updateGalleryItem = async (req, res, next) => {
  try {
    const { title, category, description, displayOrder } = req.body;

    if (mongoose.connection.readyState !== 1) {
      const storage = readStorage();
      const itemIndex = (storage.gallery || []).findIndex((i) => i._id === req.params.id);
      if (itemIndex === -1) {
        return next(new ApiError(404, "Gallery item not found"));
      }

      const item = storage.gallery[itemIndex];

      if (req.file) {
        if (item.cloudinaryPublicId) {
          await deleteFromCloudinary(item.cloudinaryPublicId);
        }
        const uploadResult = await uploadToCloudinary(
          req.file.buffer,
          "fibc-gallery",
          req.file.originalname
        );
        item.imageUrl = uploadResult.url;
        item.cloudinaryPublicId = uploadResult.public_id;
      }

      if (title !== undefined) item.title = title;
      if (category !== undefined) item.category = category;
      if (description !== undefined) item.description = description;
      if (displayOrder !== undefined) item.displayOrder = parseInt(displayOrder, 10);
      item.updatedAt = new Date().toISOString();

      storage.gallery[itemIndex] = item;
      writeStorage(storage);

      return res
        .status(200)
        .json(new ApiResponse(200, item, "Gallery item updated successfully"));
    }

    let item = await Gallery.findById(req.params.id);
    if (!item) {
      return next(new ApiError(404, "Gallery item not found"));
    }

    let imageUrl = item.imageUrl;
    let cloudinaryPublicId = item.cloudinaryPublicId;

    if (req.file) {
      if (item.cloudinaryPublicId) {
        await deleteFromCloudinary(item.cloudinaryPublicId);
      }
      const uploadResult = await uploadToCloudinary(
        req.file.buffer,
        "fibc-gallery",
        req.file.originalname
      );
      imageUrl = uploadResult.url;
      cloudinaryPublicId = uploadResult.public_id;
    }

    item.title = title !== undefined ? title : item.title;
    item.category = category !== undefined ? category : item.category;
    item.description =
      description !== undefined ? description : item.description;
    item.displayOrder =
      displayOrder !== undefined
        ? parseInt(displayOrder, 10)
        : item.displayOrder;
    item.imageUrl = imageUrl;
    item.cloudinaryPublicId = cloudinaryPublicId;

    await item.save();

    const storage = readStorage();
    const idx = (storage.gallery || []).findIndex((i) => i._id === String(item._id));
    if (idx !== -1) {
      storage.gallery[idx] = item.toObject();
      writeStorage(storage);
    }

    return res
      .status(200)
      .json(new ApiResponse(200, item, "Gallery item updated successfully"));
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Delete gallery item
 * @route   DELETE /api/gallery/:id
 * @access  Private/Admin
 */
export const deleteGalleryItem = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      const storage = readStorage();
      const index = (storage.gallery || []).findIndex((i) => i._id === req.params.id);
      if (index !== -1) {
        const item = storage.gallery[index];
        if (item.cloudinaryPublicId) {
          await deleteFromCloudinary(item.cloudinaryPublicId);
        }
        storage.gallery.splice(index, 1);
        writeStorage(storage);
      }
      return res
        .status(200)
        .json(new ApiResponse(200, null, "Gallery item deleted successfully"));
    }

    const item = await Gallery.findById(req.params.id);
    if (!item) {
      return next(new ApiError(404, "Gallery item not found"));
    }

    if (item.cloudinaryPublicId) {
      await deleteFromCloudinary(item.cloudinaryPublicId);
    }

    await item.deleteOne();

    const storage = readStorage();
    storage.gallery = (storage.gallery || []).filter((i) => i._id !== String(req.params.id));
    writeStorage(storage);

    return res
      .status(200)
      .json(new ApiResponse(200, null, "Gallery item deleted successfully"));
  } catch (error) {
    next(error);
  }
};
