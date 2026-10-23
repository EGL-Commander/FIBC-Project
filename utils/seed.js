import dotenv from "dotenv";
import mongoose from "mongoose";
import { User } from "../models/User.js";
import { Gallery } from "../models/Gallery.js";
import { Product } from "../models/Product.js";

dotenv.config();

const initialGalleryData = [
  {
    title: "Manufacturing Facility",
    category: "Manufacturing Facility",
    description: "Our state-of-the-art production environment supporting high-capacity FIBC manufacturing.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
    cloudinaryPublicId: "mock_seed_1",
    displayOrder: 1,
  },
  {
    title: "FIBC Production Line",
    category: "FIBC Production",
    description: "Advanced automated production lines ensuring precision stitching and quality construction.",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
    cloudinaryPublicId: "mock_seed_2",
    displayOrder: 2,
  },
  {
    title: "Bulk Packaging Solutions",
    category: "Bulk Packaging",
    description: "Versatile, high-strength bulk bags engineered for global industrial applications.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
    cloudinaryPublicId: "mock_seed_3",
    displayOrder: 3,
  },
  {
    title: "Quality Control & Load Testing",
    category: "Quality Inspection",
    description: "Rigorous load, drop, and fabric testing performed continuously by certified engineers.",
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
    cloudinaryPublicId: "mock_seed_4",
    displayOrder: 4,
  },
  {
    title: "Finished FIBC Bulk Bags",
    category: "Finished Products",
    description: "Completed, custom-branded FIBC bags inspected and staged for export packaging.",
    imageUrl: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&auto=format&fit=crop&q=80",
    cloudinaryPublicId: "mock_seed_5",
    displayOrder: 5,
  },
  {
    title: "Packaging & Worldwide Dispatch",
    category: "Packaging & Dispatch",
    description: "Systematic palletization and container loading for safe worldwide shipment.",
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80",
    cloudinaryPublicId: "mock_seed_6",
    displayOrder: 6,
  },
];

const initialProductData = [
  // FIBC CATEGORIES (11 products)
  {
    name: "4-Panel Bags",
    slug: "4-panel-bags",
    category: "FIBC Categories",
    categoryId: "fibc-categories",
    description: "Constructed with four separate side panels sewn to a square base, offering excellent shape retention during transport.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
    cloudinaryPublicId: "product_1",
    specifications: { "Panel Structure": "4 Panel Base", "SF": "5:1 / 6:1" },
    applications: ["Industrial Powders", "Chemicals", "Minerals"],
    displayOrder: 1,
  },
  {
    name: "Baffle Bag / Q Bag",
    slug: "baffle-bag-q-bag",
    category: "FIBC Categories",
    categoryId: "fibc-categories",
    description: "Internal baffles maintain a square shape post-filling, saving up to 30% storage space and improving container load efficiency.",
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80",
    cloudinaryPublicId: "product_2",
    specifications: { "Baffles": "Internal PP Fabric", "Space Saving": "Up to 30%" },
    applications: ["Pharmaceuticals", "Resin Pellets", "Sugar & Starch"],
    displayOrder: 2,
  },
  {
    name: "Builder Bag",
    slug: "builder-bag",
    category: "FIBC Categories",
    categoryId: "fibc-categories",
    description: "Heavy-duty, budget-friendly open-top bags designed for bulk sand, aggregate, gravel, and construction waste.",
    imageUrl: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&auto=format&fit=crop&q=80",
    cloudinaryPublicId: "product_3",
    specifications: { "SWL": "1000kg", "Top": "Open Top / Skirt Top" },
    applications: ["Construction Waste", "Sand & Gravel", "Soil & Aggregate"],
    displayOrder: 3,
  },
  {
    name: "Conical Bag",
    slug: "conical-bag",
    category: "FIBC Categories",
    categoryId: "fibc-categories",
    description: "Specially shaped bottom that narrows towards the discharge outlet, ideal for sticky or poor-flowing materials.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
    cloudinaryPublicId: "product_4",
    specifications: { "Bottom": "Conical Discharge Spout", "Flow": "Non-Free Flowing" },
    applications: ["Sticky Powders", "Clay", "Slurry Powders"],
    displayOrder: 4,
  },
  {
    name: "Container Liner Bags",
    slug: "container-liner-bags",
    category: "FIBC Categories",
    categoryId: "fibc-categories",
    description: "Protective fabric linings designed to convert standard shipping containers into bulk dry cargo transport systems.",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
    cloudinaryPublicId: "product_5",
    specifications: { "Compatibility": "20ft & 40ft ISO Containers", "Protection": "Moisture & Dust Sealed" },
    applications: ["Bulk Dry Cargo", "Grains & Pellets", "Bulk Chemicals"],
    displayOrder: 5,
  },
  {
    name: "Four Loop Circular/Tubular Bag",
    slug: "four-loop-circular-tubular-bag",
    category: "FIBC Categories",
    categoryId: "fibc-categories",
    description: "Woven as a continuous cylinder with no vertical seams, reducing risk of leakage and sifting.",
    imageUrl: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&auto=format&fit=crop&q=80",
    cloudinaryPublicId: "product_6",
    specifications: { "Seam": "Seamless Tubular Body", "Loops": "4 Corner Loops" },
    applications: ["Fine Powders", "Carbon Black", "Pigments"],
    displayOrder: 6,
  },
  {
    name: "Leno Mesh Bag",
    slug: "leno-mesh-bag",
    category: "FIBC Categories",
    categoryId: "fibc-categories",
    description: "High-permeability mesh bags designed for packaging fresh produce, offering visibility and max ventilation.",
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
    cloudinaryPublicId: "product_7",
    specifications: { "Material": "Leno PP Mesh", "Ventilation": "100% Breathable" },
    applications: ["Onions & Potatoes", "Firewood", "Fresh Agriculture"],
    displayOrder: 7,
  },
  {
    name: "Tunnel Bags",
    slug: "tunnel-bags",
    category: "FIBC Categories",
    categoryId: "fibc-categories",
    description: "Features side tunnel loops that allow easy lift truck fork access without needing manual loop lifting.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
    cloudinaryPublicId: "product_8",
    specifications: { "Side Sleeves": "Integrated Fork Tunnel Sleeves" },
    applications: ["Forklift Operations", "Efficient Warehouse Logistics"],
    displayOrder: 8,
  },
  {
    name: "Type-A / B / C Bags",
    slug: "type-a-b-c-bags",
    category: "FIBC Categories",
    categoryId: "fibc-categories",
    description: "Electrostatic safe jumbo bags including standard non-conductive, breakdown voltage protected, and groundable variants.",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
    cloudinaryPublicId: "product_9",
    specifications: { "Static Safety": "Type A / B / C Groundable" },
    applications: ["Flammable Powders", "Hazardous Chemicals", "Explosive Environments"],
    displayOrder: 9,
  },
  {
    name: "U-Panel Bags",
    slug: "u-panel-bags",
    category: "FIBC Categories",
    categoryId: "fibc-categories",
    description: "Classic industrial jumbo bags made with a U-shaped fabric panel forming the bottom and two sides, providing high weight capacity.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
    cloudinaryPublicId: "product_10",
    specifications: { "SWL": "500kg - 2000kg", "Panel": "U-Cut Fabric Body" },
    applications: ["General Bulk Cargo", "Fertilizers", "Sand"],
    displayOrder: 10,
  },
  {
    name: "Ventilated FIBC Bags",
    slug: "ventilated-fibc-bags",
    category: "FIBC Categories",
    categoryId: "fibc-categories",
    description: "Woven with breathable air strips to prevent moisture accumulation and rot, perfect for agricultural produce like potatoes.",
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80",
    cloudinaryPublicId: "product_11",
    specifications: { "Air Strips": "Ventilated PP Mesh Panels" },
    applications: ["Potatoes & Onions", "Wood Logs & Charcoal"],
    displayOrder: 11,
  },

  // WOVEN SACK BAGS (3 products)
  {
    name: "BOPP Laminated Bags with Gusset",
    slug: "bopp-laminated-bags-with-gusset",
    category: "Woven Sack Bags",
    categoryId: "woven-sack-bags",
    description: "Gusseted side-folds that expand for a rectangular block shape when filled, ideal for vertical shelf displays.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
    cloudinaryPublicId: "product_12",
    specifications: { "Gusset": "Side Folded Expandable Gusset", "Finish": "Gloss / Matte BOPP" },
    applications: ["Retail Rice & Flour", "Pet Food", "Fertilizers"],
    displayOrder: 12,
  },
  {
    name: "Both Side BOPP Laminated PP Woven Bags",
    slug: "both-side-bopp-laminated-pp-woven-bags",
    category: "Woven Sack Bags",
    categoryId: "woven-sack-bags",
    description: "Dual-sided high-resolution graphic branding, protecting packaging from moisture and dust.",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
    cloudinaryPublicId: "product_13",
    specifications: { "Lamination": "Double Sided BOPP Film", "Print Quality": "HD Gravure" },
    applications: ["Export Grain Bags", "Branded Flour & Sugar", "Chemical Packs"],
    displayOrder: 13,
  },
  {
    name: "Single Side BOPP Laminated PP Woven Bags",
    slug: "single-side-bopp-laminated-pp-woven-bags",
    category: "Woven Sack Bags",
    categoryId: "woven-sack-bags",
    description: "BOPP gloss/matte graphic printing on the front side with plain woven texture on the back side.",
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
    cloudinaryPublicId: "product_14",
    specifications: { "Lamination": "Single Sided Front BOPP", "Back": "Breathable Woven Texture" },
    applications: ["Cost-Effective Grain Packaging", "Seeds & Animal Feed"],
    displayOrder: 14,
  },
];

export const seedDatabase = async () => {
  try {
    // MongoDB seeding is optional. Never attempt localhost when no URI is configured.
    if (!process.env.MONGODB_URI) {
      console.log("[Seed] Skipped: MONGODB_URI is not set; JSON file store is active.");
      return;
    }

    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 3000,
      });
    }

    console.log("[Seed] Checking Database status...");

    const adminEmail = process.env.ADMIN_EMAIL || "admin@fibc.com";
    const DEFAULT_ADMIN_PASSWORD_HASH =
      process.env.ADMIN_PASSWORD_HASH ||
      "$2a$10$5i78OKCtiOA9ZoWlIY2W/ue2rBen5wvXXVuV/wT91CekgkHf/.RJu";
    const adminPassword = process.env.ADMIN_PASSWORD || DEFAULT_ADMIN_PASSWORD_HASH;

    let admin = await User.findOne({ email: adminEmail.toLowerCase() });
    if (!admin) {
      admin = await User.create({
        name: "FIBC Admin",
        email: adminEmail,
        password: adminPassword,
        role: "admin",
      });
      console.log(`[Seed] Created default Admin User: ${adminEmail}`);
    }

    const count = await Gallery.countDocuments();
    if (count === 0) {
      await Gallery.insertMany(initialGalleryData);
      console.log(`[Seed] Inserted ${initialGalleryData.length} default Gallery items`);
    }

    const productCount = await Product.countDocuments();
    if (productCount === 0) {
      await Product.insertMany(initialProductData);
      console.log(`[Seed] Inserted ${initialProductData.length} default Product items`);
    }
  } catch (error) {
    console.warn("[Seed Notice] Could not seed MongoDB:", error.message);
  }
};

if (process.argv[1]?.includes("seed.js")) {
  seedDatabase().then(() => {
    console.log("[Seed] Seeding completed.");
    process.exit(0);
  });
}
