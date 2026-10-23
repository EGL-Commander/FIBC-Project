import mongoose from "mongoose";
import { Product } from "../models/Product.js";
import {
  uploadToCloudinary,
  deleteFromCloudinary,
} from "../services/cloudinaryService.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { readStorage, writeStorage } from "../utils/fileStore.js";

/**
 * @desc    Get all products
 * @route   GET /api/products
 * @access  Public
 */
export const getProducts = async (req, res, next) => {
  try {
    const { category, search, page = 1, limit = 50 } = req.query;

    // Offline / MongoDB not connected → use fileStore
    if (mongoose.connection.readyState !== 1) {
      const storage = readStorage();
      let filtered = [...(storage.products || [])];

      if (category) {
        filtered = filtered.filter((p) => p.category === category);
      }
      if (search) {
        const s = search.toLowerCase();
        filtered = filtered.filter(
          (p) =>
            p.name.toLowerCase().includes(s) ||
            (p.description && p.description.toLowerCase().includes(s))
        );
      }

      const pageNum = parseInt(page, 10);
      const limitNum = parseInt(limit, 10);
      const total = filtered.length;
      const skip = (pageNum - 1) * limitNum;
      const paginated = filtered
        .sort((a, b) => a.displayOrder - b.displayOrder)
        .slice(skip, skip + limitNum);

      return res.status(200).json(
        new ApiResponse(200, paginated, "Products retrieved successfully", {
          total,
          page: pageNum,
          limit: limitNum,
          pages: Math.ceil(total / limitNum) || 1,
        })
      );
    }

    const query = {};
    if (category) query.category = category;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const skip = (pageNum - 1) * limitNum;

    const total = await Product.countDocuments(query);
    const items = await Product.find(query)
      .sort({ displayOrder: 1, createdAt: -1 })
      .skip(skip)
      .limit(limitNum);

    // Sync to fileStore
    const storage = readStorage();
    if (items && items.length > 0) {
      storage.products = items.map((i) => i.toObject());
      writeStorage(storage);
    }

    return res.status(200).json(
      new ApiResponse(200, items, "Products retrieved successfully", {
        total,
        page: pageNum,
        limit: limitNum,
        pages: Math.ceil(total / limitNum) || 1,
      })
    );
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Create a new product
 * @route   POST /api/products
 * @access  Private/Admin
 */
export const createProduct = async (req, res, next) => {
  try {
    const { name, description, category, categoryId, slug, displayOrder, specifications, applications } = req.body;

    let imageUrl = "";
    let cloudinaryPublicId = "";

    if (req.file) {
      const uploadResult = await uploadToCloudinary(
        req.file.buffer,
        "fibc-products",
        req.file.originalname
      );
      imageUrl = uploadResult.url;
      cloudinaryPublicId = uploadResult.public_id;
    }

    // Parse specifications JSON if sent as string
    let specsObj = {};
    if (specifications) {
      try {
        specsObj = typeof specifications === "string" ? JSON.parse(specifications) : specifications;
      } catch (_) { specsObj = {}; }
    }

    // Parse applications JSON array if sent as string
    let appsArr = [];
    if (applications) {
      try {
        const parsed = typeof applications === "string" ? JSON.parse(applications) : applications;
        appsArr = Array.isArray(parsed) ? parsed : [];
      } catch (_) { appsArr = []; }
    }

    // Auto-generate slug from name if not provided
    const computedSlug = slug
      ? slug.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
      : name.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

    // Offline mode
    if (mongoose.connection.readyState !== 1) {
      const storage = readStorage();
      const newProduct = {
        _id: `mock_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
        name,
        slug: computedSlug,
        description,
        category: category || "",
        categoryId: categoryId || "",
        imageUrl,
        cloudinaryPublicId,
        specifications: specsObj,
        applications: appsArr,
        displayOrder: displayOrder ? parseInt(displayOrder, 10) : 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      if (!storage.products) storage.products = [];
      storage.products.unshift(newProduct);
      writeStorage(storage);
      return res
        .status(201)
        .json(new ApiResponse(201, newProduct, "Product created successfully"));
    }

    const product = await Product.create({
      name,
      slug: computedSlug,
      description,
      category: category || "",
      categoryId: categoryId || "",
      imageUrl,
      cloudinaryPublicId,
      specifications: specsObj,
      applications: appsArr,
      displayOrder: displayOrder ? parseInt(displayOrder, 10) : 0,
    });

    const storage = readStorage();
    if (!storage.products) storage.products = [];
    storage.products.unshift(product.toObject());
    writeStorage(storage);

    return res
      .status(201)
      .json(new ApiResponse(201, product, "Product created successfully"));
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update a product
 * @route   PUT /api/products/:id
 * @access  Private/Admin
 */
export const updateProduct = async (req, res, next) => {
  try {
    const { name, description, category, categoryId, slug, displayOrder, specifications, applications } = req.body;

    // Parse specifications JSON if sent as string
    let specsObj;
    if (specifications !== undefined) {
      try {
        specsObj = typeof specifications === "string" ? JSON.parse(specifications) : specifications;
      } catch (_) { specsObj = {}; }
    }

    // Parse applications JSON array if sent as string
    let appsArr;
    if (applications !== undefined) {
      try {
        const parsed = typeof applications === "string" ? JSON.parse(applications) : applications;
        appsArr = Array.isArray(parsed) ? parsed : [];
      } catch (_) { appsArr = []; }
    }

    // Compute slug if name changed and no slug provided
    let computedSlug;
    if (slug !== undefined) {
      computedSlug = slug.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    } else if (name !== undefined) {
      computedSlug = name.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    }

    // Offline mode
    if (mongoose.connection.readyState !== 1) {
      const storage = readStorage();
      const idx = (storage.products || []).findIndex(
        (p) => p._id === req.params.id
      );
      if (idx === -1) return next(new ApiError(404, "Product not found"));

      const product = storage.products[idx];

      if (req.file) {
        if (product.cloudinaryPublicId) {
          await deleteFromCloudinary(product.cloudinaryPublicId);
        }
        const uploadResult = await uploadToCloudinary(
          req.file.buffer,
          "fibc-products",
          req.file.originalname
        );
        product.imageUrl = uploadResult.url;
        product.cloudinaryPublicId = uploadResult.public_id;
      }

      if (name !== undefined) product.name = name;
      if (computedSlug !== undefined) product.slug = computedSlug;
      if (description !== undefined) product.description = description;
      if (category !== undefined) product.category = category;
      if (categoryId !== undefined) product.categoryId = categoryId;
      if (specsObj !== undefined) product.specifications = specsObj;
      if (appsArr !== undefined) product.applications = appsArr;
      if (displayOrder !== undefined)
        product.displayOrder = parseInt(displayOrder, 10);
      product.updatedAt = new Date().toISOString();

      storage.products[idx] = product;
      writeStorage(storage);
      return res
        .status(200)
        .json(new ApiResponse(200, product, "Product updated successfully"));
    }

    let product = await Product.findById(req.params.id);
    if (!product) return next(new ApiError(404, "Product not found"));

    if (req.file) {
      if (product.cloudinaryPublicId) {
        await deleteFromCloudinary(product.cloudinaryPublicId);
      }
      const uploadResult = await uploadToCloudinary(
        req.file.buffer,
        "fibc-products",
        req.file.originalname
      );
      product.imageUrl = uploadResult.url;
      product.cloudinaryPublicId = uploadResult.public_id;
    }

    product.name = name !== undefined ? name : product.name;
    if (computedSlug !== undefined) product.slug = computedSlug;
    product.description = description !== undefined ? description : product.description;
    product.category = category !== undefined ? category : product.category;
    product.categoryId = categoryId !== undefined ? categoryId : product.categoryId;
    if (specsObj !== undefined) product.specifications = specsObj;
    if (appsArr !== undefined) product.applications = appsArr;
    product.displayOrder =
      displayOrder !== undefined
        ? parseInt(displayOrder, 10)
        : product.displayOrder;

    await product.save();

    const storage = readStorage();
    const storageIdx = (storage.products || []).findIndex(
      (p) => p._id === String(product._id)
    );
    if (storageIdx !== -1) {
      storage.products[storageIdx] = product.toObject();
      writeStorage(storage);
    }

    return res
      .status(200)
      .json(new ApiResponse(200, product, "Product updated successfully"));
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Delete a product
 * @route   DELETE /api/products/:id
 * @access  Private/Admin
 */
export const deleteProduct = async (req, res, next) => {
  try {
    // Offline mode
    if (mongoose.connection.readyState !== 1) {
      const storage = readStorage();
      const idx = (storage.products || []).findIndex(
        (p) => p._id === req.params.id
      );
      if (idx !== -1) {
        const product = storage.products[idx];
        if (product.cloudinaryPublicId) {
          await deleteFromCloudinary(product.cloudinaryPublicId);
        }
        storage.products.splice(idx, 1);
        writeStorage(storage);
      }
      return res
        .status(200)
        .json(new ApiResponse(200, null, "Product deleted successfully"));
    }

    const product = await Product.findById(req.params.id);
    if (!product) return next(new ApiError(404, "Product not found"));

    if (product.cloudinaryPublicId) {
      await deleteFromCloudinary(product.cloudinaryPublicId);
    }

    await product.deleteOne();

    const storage = readStorage();
    storage.products = (storage.products || []).filter(
      (p) => p._id !== String(req.params.id)
    );
    writeStorage(storage);

    return res
      .status(200)
      .json(new ApiResponse(200, null, "Product deleted successfully"));
  } catch (error) {
    next(error);
  }
};
