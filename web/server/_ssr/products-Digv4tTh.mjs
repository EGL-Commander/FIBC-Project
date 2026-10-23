import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { j as ArrowRight, t as X, u as Search, w as Funnel, x as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as Navbar } from "./Navbar-B2o07pLv.mjs";
import { l as getProducts, s as getFullImageUrl } from "./api-BGBv6BnQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-Digv4tTh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var defaultProducts = [
	{
		_id: "672000000000000000000001",
		name: "4-Panel Bags",
		slug: "4-panel-bags",
		category: "FIBC Categories",
		categoryId: "fibc-categories",
		description: "Constructed with four separate side panels sewn to a square base, offering excellent shape retention during transport.",
		imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
		specifications: {
			"Panel Structure": "4 Panel Base",
			"SF": "5:1 / 6:1"
		},
		applications: [
			"Industrial Powders",
			"Chemicals",
			"Minerals"
		],
		displayOrder: 1,
		createdAt: "2026-09-26T00:00:00.000Z",
		updatedAt: "2026-09-26T00:00:00.000Z"
	},
	{
		_id: "672000000000000000000002",
		name: "Baffle Bag / Q Bag",
		slug: "baffle-bag-q-bag",
		category: "FIBC Categories",
		categoryId: "fibc-categories",
		description: "Internal baffles maintain a square shape post-filling, saving up to 30% storage space and improving container load efficiency.",
		imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80",
		specifications: {
			"Baffles": "Internal PP Fabric",
			"Space Saving": "Up to 30%"
		},
		applications: [
			"Pharmaceuticals",
			"Resin Pellets",
			"Sugar & Starch"
		],
		displayOrder: 2,
		createdAt: "2026-09-26T00:00:00.000Z",
		updatedAt: "2026-09-26T00:00:00.000Z"
	},
	{
		_id: "672000000000000000000003",
		name: "Builder Bag",
		slug: "builder-bag",
		category: "FIBC Categories",
		categoryId: "fibc-categories",
		description: "Heavy-duty, budget-friendly open-top bags designed for bulk sand, aggregate, gravel, and construction waste.",
		imageUrl: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&auto=format&fit=crop&q=80",
		specifications: {
			"SWL": "1000kg",
			"Top": "Open Top / Skirt Top"
		},
		applications: [
			"Construction Waste",
			"Sand & Gravel",
			"Soil & Aggregate"
		],
		displayOrder: 3,
		createdAt: "2026-09-26T00:00:00.000Z",
		updatedAt: "2026-09-26T00:00:00.000Z"
	},
	{
		_id: "672000000000000000000004",
		name: "Conical Bag",
		slug: "conical-bag",
		category: "FIBC Categories",
		categoryId: "fibc-categories",
		description: "Specially shaped bottom that narrows towards the discharge outlet, ideal for sticky or poor-flowing materials.",
		imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
		specifications: {
			"Bottom": "Conical Discharge Spout",
			"Flow": "Non-Free Flowing"
		},
		applications: [
			"Sticky Powders",
			"Clay",
			"Slurry Powders"
		],
		displayOrder: 4,
		createdAt: "2026-09-26T00:00:00.000Z",
		updatedAt: "2026-09-26T00:00:00.000Z"
	},
	{
		_id: "672000000000000000000005",
		name: "Container Liner Bags",
		slug: "container-liner-bags",
		category: "FIBC Categories",
		categoryId: "fibc-categories",
		description: "Protective fabric linings designed to convert standard shipping containers into bulk dry cargo transport systems.",
		imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
		specifications: {
			"Compatibility": "20ft & 40ft ISO Containers",
			"Protection": "Moisture & Dust Sealed"
		},
		applications: [
			"Bulk Dry Cargo",
			"Grains & Pellets",
			"Bulk Chemicals"
		],
		displayOrder: 5,
		createdAt: "2026-09-26T00:00:00.000Z",
		updatedAt: "2026-09-26T00:00:00.000Z"
	},
	{
		_id: "672000000000000000000006",
		name: "Four Loop Circular/Tubular Bag",
		slug: "four-loop-circular-tubular-bag",
		category: "FIBC Categories",
		categoryId: "fibc-categories",
		description: "Woven as a continuous cylinder with no vertical seams, reducing risk of leakage and sifting.",
		imageUrl: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&auto=format&fit=crop&q=80",
		specifications: {
			"Seam": "Seamless Tubular Body",
			"Loops": "4 Corner Loops"
		},
		applications: [
			"Fine Powders",
			"Carbon Black",
			"Pigments"
		],
		displayOrder: 6,
		createdAt: "2026-09-26T00:00:00.000Z",
		updatedAt: "2026-09-26T00:00:00.000Z"
	},
	{
		_id: "672000000000000000000007",
		name: "Leno Mesh Bag",
		slug: "leno-mesh-bag",
		category: "FIBC Categories",
		categoryId: "fibc-categories",
		description: "High-permeability mesh bags designed for packaging fresh produce, offering visibility and max ventilation.",
		imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
		specifications: {
			"Material": "Leno PP Mesh",
			"Ventilation": "100% Breathable"
		},
		applications: [
			"Onions & Potatoes",
			"Firewood",
			"Fresh Agriculture"
		],
		displayOrder: 7,
		createdAt: "2026-09-26T00:00:00.000Z",
		updatedAt: "2026-09-26T00:00:00.000Z"
	},
	{
		_id: "672000000000000000000008",
		name: "Tunnel Bags",
		slug: "tunnel-bags",
		category: "FIBC Categories",
		categoryId: "fibc-categories",
		description: "Features side tunnel loops that allow easy lift truck fork access without needing manual loop lifting.",
		imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
		specifications: { "Side Sleeves": "Integrated Fork Tunnel Sleeves" },
		applications: ["Forklift Operations", "Efficient Warehouse Logistics"],
		displayOrder: 8,
		createdAt: "2026-09-26T00:00:00.000Z",
		updatedAt: "2026-09-26T00:00:00.000Z"
	},
	{
		_id: "672000000000000000000009",
		name: "Type-A / B / C Bags",
		slug: "type-a-b-c-bags",
		category: "FIBC Categories",
		categoryId: "fibc-categories",
		description: "Electrostatic safe jumbo bags including standard non-conductive, breakdown voltage protected, and groundable variants.",
		imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
		specifications: { "Static Safety": "Type A / B / C Groundable" },
		applications: [
			"Flammable Powders",
			"Hazardous Chemicals",
			"Explosive Environments"
		],
		displayOrder: 9,
		createdAt: "2026-09-26T00:00:00.000Z",
		updatedAt: "2026-09-26T00:00:00.000Z"
	},
	{
		_id: "672000000000000000000010",
		name: "U-Panel Bags",
		slug: "u-panel-bags",
		category: "FIBC Categories",
		categoryId: "fibc-categories",
		description: "Classic industrial jumbo bags made with a U-shaped fabric panel forming the bottom and two sides, providing high weight capacity.",
		imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
		specifications: {
			"SWL": "500kg - 2000kg",
			"Panel": "U-Cut Fabric Body"
		},
		applications: [
			"General Bulk Cargo",
			"Fertilizers",
			"Sand"
		],
		displayOrder: 10,
		createdAt: "2026-09-26T00:00:00.000Z",
		updatedAt: "2026-09-26T00:00:00.000Z"
	},
	{
		_id: "672000000000000000000011",
		name: "Ventilated FIBC Bags",
		slug: "ventilated-fibc-bags",
		category: "FIBC Categories",
		categoryId: "fibc-categories",
		description: "Woven with breathable air strips to prevent moisture accumulation and rot, perfect for agricultural produce like potatoes.",
		imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80",
		specifications: { "Air Strips": "Ventilated PP Mesh Panels" },
		applications: ["Potatoes & Onions", "Wood Logs & Charcoal"],
		displayOrder: 11,
		createdAt: "2026-09-26T00:00:00.000Z",
		updatedAt: "2026-09-26T00:00:00.000Z"
	},
	{
		_id: "672000000000000000000012",
		name: "BOPP Laminated Bags with Gusset",
		slug: "bopp-laminated-bags-with-gusset",
		category: "Woven Sack Bags",
		categoryId: "woven-sack-bags",
		description: "Gusseted side-folds that expand for a rectangular block shape when filled, ideal for vertical shelf displays.",
		imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
		specifications: {
			"Gusset": "Side Folded Expandable Gusset",
			"Finish": "Gloss / Matte BOPP"
		},
		applications: [
			"Retail Rice & Flour",
			"Pet Food",
			"Fertilizers"
		],
		displayOrder: 12,
		createdAt: "2026-09-26T00:00:00.000Z",
		updatedAt: "2026-09-26T00:00:00.000Z"
	},
	{
		_id: "672000000000000000000013",
		name: "Both Side BOPP Laminated PP Woven Bags",
		slug: "both-side-bopp-laminated-pp-woven-bags",
		category: "Woven Sack Bags",
		categoryId: "woven-sack-bags",
		description: "Dual-sided high-resolution graphic branding, protecting packaging from moisture and dust.",
		imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
		specifications: {
			"Lamination": "Double Sided BOPP Film",
			"Print Quality": "HD Gravure"
		},
		applications: [
			"Export Grain Bags",
			"Branded Flour & Sugar",
			"Chemical Packs"
		],
		displayOrder: 13,
		createdAt: "2026-09-26T00:00:00.000Z",
		updatedAt: "2026-09-26T00:00:00.000Z"
	},
	{
		_id: "672000000000000000000014",
		name: "Single Side BOPP Laminated PP Woven Bags",
		slug: "single-side-bopp-laminated-pp-woven-bags",
		category: "Woven Sack Bags",
		categoryId: "woven-sack-bags",
		description: "BOPP gloss/matte graphic printing on the front side with plain woven texture on the back side.",
		imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
		specifications: {
			"Lamination": "Single Sided Front BOPP",
			"Back": "Breathable Woven Texture"
		},
		applications: ["Cost-Effective Grain Packaging", "Seeds & Animal Feed"],
		displayOrder: 14,
		createdAt: "2026-09-26T00:00:00.000Z",
		updatedAt: "2026-09-26T00:00:00.000Z"
	}
];
function ProductsPage() {
	const [productList, setProductList] = (0, import_react.useState)(defaultProducts);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("All");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [sidebarOpen, setSidebarOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		async function loadData() {
			try {
				const res = await getProducts();
				if (res.data && res.data.length > 0) setProductList(res.data);
			} catch (err) {
				console.error("Error loading products:", err);
			} finally {
				setLoading(false);
			}
		}
		loadData();
	}, []);
	const categoryCounts = (0, import_react.useMemo)(() => {
		const counts = {
			"FIBC Categories": 0,
			"Woven Sack Bags": 0
		};
		productList.forEach((p) => {
			const cat = p.category || "FIBC Categories";
			counts[cat] = (counts[cat] || 0) + 1;
		});
		return counts;
	}, [productList]);
	const categories = (0, import_react.useMemo)(() => {
		const defaultCats = ["FIBC Categories", "Woven Sack Bags"];
		const otherCats = Object.keys(categoryCounts).filter((c) => !defaultCats.includes(c));
		return [
			"All",
			...defaultCats,
			...otherCats
		];
	}, [categoryCounts]);
	const filteredProducts = (0, import_react.useMemo)(() => {
		let list = productList;
		if (selectedCategory !== "All") list = list.filter((p) => p.category === selectedCategory);
		if (searchQuery.trim()) {
			const q = searchQuery.toLowerCase();
			list = list.filter((p) => p.name.toLowerCase().includes(q) || p.description && p.description.toLowerCase().includes(q) || p.category && p.category.toLowerCase().includes(q));
		}
		return list.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
	}, [
		productList,
		selectedCategory,
		searchQuery
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-ink py-20 text-ink-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-kicker",
							children: "Product Catalog"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 max-w-3xl text-5xl font-black sm:text-6xl",
							children: "Premium FIBC Bags for Every Application"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-lg leading-8 text-ink-muted",
							children: "Explore our full range of industrial bulk packaging solutions — engineered for safe handling, storage and global transportation."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-soft border-b border-border py-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1 max-w-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									placeholder: "Search products...",
									className: "h-10 w-full border border-border bg-background pl-9 pr-3 text-sm outline-none focus:border-primary rounded"
								}),
								searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSearchQuery(""),
									className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground whitespace-nowrap",
								children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }), " Loading..."]
								}) : `Showing ${filteredProducts.length} of ${productList.length} products`
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex items-center gap-1.5 rounded border border-border bg-background px-3 py-2 text-sm font-semibold sm:hidden",
								onClick: () => setSidebarOpen(!sidebarOpen),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-4" }), " Filter"]
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-soft py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
							className: `${sidebarOpen ? "block" : "hidden"} sm:block w-full sm:w-56 flex-shrink-0`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sticky top-4 border border-border bg-background p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-black uppercase tracking-wider text-muted-foreground mb-3",
									children: "Categories"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-0.5",
									children: categories.map((cat) => {
										const count = cat === "All" ? productList.length : categoryCounts[cat] || 0;
										const isActive = selectedCategory === cat;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => {
												setSelectedCategory(cat);
												setSidebarOpen(false);
											},
											className: `w-full flex items-center justify-between rounded px-3 py-2.5 text-sm font-semibold text-left transition ${isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-accent"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cat }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `ml-2 text-xs font-bold rounded-full px-1.5 py-0.5 min-w-[22px] text-center ${isActive ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"}`,
												children: count
											})]
										}) }, cat);
									})
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 min-w-0",
							children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-16 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mx-auto size-8 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Loading products..."
								})]
							}) : filteredProducts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-16 text-center border border-dashed border-border p-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "No products found for the selected filter."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										setSelectedCategory("All");
										setSearchQuery("");
									},
									className: "mt-4 text-sm font-bold text-primary hover:underline",
									children: "Clear filters"
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
								children: filteredProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "group flex flex-col border border-border bg-background overflow-hidden hover:shadow-lg transition-shadow",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative aspect-[4/3] w-full overflow-hidden bg-muted",
										children: [product.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: getFullImageUrl(product.imageUrl),
											alt: product.name,
											className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
											onError: (e) => {
												e.target.src = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80";
											}
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-full w-full items-center justify-center bg-accent/40 text-muted-foreground text-xs font-semibold",
											children: "No Image"
										}), product.category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute top-3 left-3 rounded-sm bg-primary px-2 py-1 text-[10px] font-black uppercase tracking-wider text-primary-foreground",
											children: product.category
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col flex-1 p-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-lg font-bold leading-snug group-hover:text-primary transition-colors",
												children: product.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm leading-6 text-muted-foreground line-clamp-3 flex-1",
												children: product.description
											}),
											product.applications && product.applications.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-3 flex flex-wrap gap-1",
												children: [product.applications.slice(0, 3).map((app, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded bg-soft px-2 py-0.5 text-[10px] font-semibold text-muted-foreground border border-border",
													children: app
												}, i)), product.applications.length > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "rounded bg-soft px-2 py-0.5 text-[10px] font-semibold text-muted-foreground border border-border",
													children: [
														"+",
														product.applications.length - 3,
														" more"
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/contact",
												className: "mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary group/link",
												children: ["View Product", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover/link:translate-x-1" })]
											})
										]
									})]
								}, product._id || product.name))
							})
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-ink py-20 text-ink-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-black sm:text-4xl",
							children: "Need a Custom FIBC Solution?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-2xl text-ink-muted",
							children: "Contact our team for custom specifications, technical guidance and competitive bulk pricing for any volume."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "mt-8 bg-white text-ink hover:bg-white/90",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								children: ["Get a Custom Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						})
					]
				})
			})
		]
	});
}
//#endregion
export { ProductsPage as component };
