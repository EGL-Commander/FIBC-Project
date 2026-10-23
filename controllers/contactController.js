import mongoose from "mongoose";
import { Contact } from "../models/Contact.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { readStorage, writeStorage } from "../utils/fileStore.js";
import { sendContactInquiryEmail } from "../services/emailService.js";

/**
 * @desc    Submit a new contact inquiry
 * @route   POST /api/contact
 * @access  Public
 */
export const createContactInquiry = async (req, res, next) => {
  try {
    const { name, email, phone, company, message } = req.body;

    if (mongoose.connection.readyState !== 1) {
      const storage = readStorage();
      const mockContact = {
        _id: `mock_contact_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
        name,
        email,
        phone,
        company: company || "",
        message,
        status: "new",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      if (!storage.contacts) storage.contacts = [];
      storage.contacts.unshift(mockContact);
      writeStorage(storage);

      // Trigger SMTP email notification to admin & client
      try {
        await sendContactInquiryEmail(mockContact);
      } catch (emailErr) {
        console.error("[Email Error]:", emailErr.message);
      }

      return res
        .status(201)
        .json(
          new ApiResponse(
            201,
            mockContact,
            "Thank you for contacting us! We have received your message and will respond shortly."
          )
        );
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      company: company || "",
      message,
    });

    const storage = readStorage();
    if (!storage.contacts) storage.contacts = [];
    storage.contacts.unshift(contact.toObject());
    writeStorage(storage);

    // Trigger SMTP email notification to admin & client
    try {
      await sendContactInquiryEmail(contact.toObject());
    } catch (emailErr) {
      console.error("[Email Error]:", emailErr.message);
    }

    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          contact,
          "Thank you for contacting us! We have received your message and will respond shortly."
        )
      );
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get all contact inquiries
 * @route   GET /api/contact
 * @access  Private/Admin
 */
export const getContactInquiries = async (req, res, next) => {
  try {
    const { status, search, page = 1, limit = 50 } = req.query;

    if (mongoose.connection.readyState !== 1) {
      const storage = readStorage();
      let filtered = [...(storage.contacts || [])];

      if (status && status !== "All") {
        filtered = filtered.filter((c) => c.status === status);
      }

      if (search) {
        const s = search.toLowerCase();
        filtered = filtered.filter(
          (c) =>
            c.name.toLowerCase().includes(s) ||
            c.email.toLowerCase().includes(s) ||
            (c.company && c.company.toLowerCase().includes(s)) ||
            c.message.toLowerCase().includes(s)
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
          "Contact inquiries retrieved successfully",
          { total, page: pageNum, limit: limitNum, pages: Math.ceil(total / limitNum) || 1 }
        )
      );
    }

    const query = {};

    if (status && status !== "All") {
      query.status = status;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } },
        { message: { $regex: search, $options: "i" } },
      ];
    }

    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const skip = (pageNum - 1) * limitNum;

    const total = await Contact.countDocuments(query);
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum);

    const storage = readStorage();
    if (contacts && contacts.length > 0) {
      storage.contacts = contacts.map((c) => c.toObject());
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
          contacts,
          "Contact inquiries retrieved successfully",
          pagination
        )
      );
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get single contact inquiry by ID
 * @route   GET /api/contact/:id
 * @access  Private/Admin
 */
export const getContactInquiryById = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      const storage = readStorage();
      const contact = (storage.contacts || []).find((c) => c._id === req.params.id);
      if (!contact) {
        return next(new ApiError(404, "Contact inquiry not found"));
      }
      if (contact.status === "new") {
        contact.status = "in-review";
        writeStorage(storage);
      }
      return res.status(200).json(new ApiResponse(200, contact, "Contact inquiry retrieved"));
    }

    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return next(new ApiError(404, "Contact inquiry not found"));
    }

    if (contact.status === "new") {
      contact.status = "in-review";
      await contact.save();
    }

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          contact,
          "Contact inquiry retrieved successfully"
        )
      );
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update contact inquiry status
 * @route   PATCH /api/contact/:id
 * @access  Private/Admin
 */
export const updateContactStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    if (mongoose.connection.readyState !== 1) {
      const storage = readStorage();
      const contact = (storage.contacts || []).find((c) => c._id === req.params.id);
      if (contact) {
        contact.status = status;
        contact.updatedAt = new Date().toISOString();
        writeStorage(storage);
      }
      return res
        .status(200)
        .json(
          new ApiResponse(
            200,
            contact || { status },
            `Contact status updated to '${status}' successfully`
          )
        );
    }

    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return next(new ApiError(404, "Contact inquiry not found"));
    }

    contact.status = status;
    await contact.save();

    const storage = readStorage();
    const idx = (storage.contacts || []).findIndex((c) => c._id === String(contact._id));
    if (idx !== -1) {
      storage.contacts[idx] = contact.toObject();
      writeStorage(storage);
    }

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          contact,
          `Contact status updated to '${status}' successfully`
        )
      );
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Delete contact inquiry
 * @route   DELETE /api/contact/:id
 * @access  Private/Admin
 */
export const deleteContactInquiry = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      const storage = readStorage();
      const index = (storage.contacts || []).findIndex((c) => c._id === req.params.id);
      if (index !== -1) {
        storage.contacts.splice(index, 1);
        writeStorage(storage);
      }
      return res
        .status(200)
        .json(
          new ApiResponse(200, null, "Contact inquiry deleted successfully")
        );
    }

    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return next(new ApiError(404, "Contact inquiry not found"));
    }

    await contact.deleteOne();

    const storage = readStorage();
    storage.contacts = (storage.contacts || []).filter((c) => c._id !== String(req.params.id));
    writeStorage(storage);

    return res
      .status(200)
      .json(
        new ApiResponse(200, null, "Contact inquiry deleted successfully")
      );
  } catch (error) {
    next(error);
  }
};
