import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as Image, j as ArrowRight, w as Funnel, x as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as Navbar } from "./Navbar-B2o07pLv.mjs";
import { c as getGalleryItems, s as getFullImageUrl } from "./api-BGBv6BnQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-DbWEEcQN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	"All",
	"Manufacturing Facility",
	"FIBC Production",
	"Bulk Packaging",
	"Quality Inspection",
	"Finished Products",
	"Packaging & Dispatch"
];
var fallbackItems = [
	{
		_id: "1",
		title: "Manufacturing Facility",
		category: "Manufacturing Facility",
		description: "Our production environment supporting efficient FIBC manufacturing.",
		imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
		cloudinaryPublicId: "fallback_1",
		displayOrder: 1,
		createdAt: "2026-09-26T00:00:00.000Z",
		updatedAt: "2026-09-26T00:00:00.000Z"
	},
	{
		_id: "2",
		title: "FIBC Production",
		category: "FIBC Production",
		description: "Production processes focused on consistency and reliable construction.",
		imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
		cloudinaryPublicId: "fallback_2",
		displayOrder: 2,
		createdAt: "2026-09-26T00:00:00.000Z",
		updatedAt: "2026-09-26T00:00:00.000Z"
	},
	{
		_id: "3",
		title: "Bulk Packaging",
		category: "Bulk Packaging",
		description: "Flexible bulk packaging solutions designed for different industries.",
		imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
		cloudinaryPublicId: "fallback_3",
		displayOrder: 3,
		createdAt: "2026-09-26T00:00:00.000Z",
		updatedAt: "2026-09-26T00:00:00.000Z"
	},
	{
		_id: "4",
		title: "Quality Inspection",
		category: "Quality Inspection",
		description: "Inspection and quality checks performed throughout the production process.",
		imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
		cloudinaryPublicId: "fallback_4",
		displayOrder: 4,
		createdAt: "2026-09-26T00:00:00.000Z",
		updatedAt: "2026-09-26T00:00:00.000Z"
	},
	{
		_id: "5",
		title: "Finished Products",
		category: "Finished Products",
		description: "Completed FIBC bags prepared for packing and dispatch.",
		imageUrl: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&auto=format&fit=crop&q=80",
		cloudinaryPublicId: "fallback_5",
		displayOrder: 5,
		createdAt: "2026-09-26T00:00:00.000Z",
		updatedAt: "2026-09-26T00:00:00.000Z"
	},
	{
		_id: "6",
		title: "Packaging & Dispatch",
		category: "Packaging & Dispatch",
		description: "Organized handling and preparation of finished products for delivery.",
		imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80",
		cloudinaryPublicId: "fallback_6",
		displayOrder: 6,
		createdAt: "2026-09-26T00:00:00.000Z",
		updatedAt: "2026-09-26T00:00:00.000Z"
	}
];
function GalleryPage() {
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("All");
	const [items, setItems] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	const fetchGallery = async (category) => {
		try {
			setLoading(true);
			setError(null);
			const response = await getGalleryItems(category);
			if (response && Array.isArray(response.data)) setItems(response.data);
			else {
				const filtered = category === "All" ? fallbackItems : fallbackItems.filter((i) => i.category === category);
				setItems(filtered);
			}
		} catch (err) {
			console.warn("Backend API call failed, loading fallback data", err);
			const filtered = category === "All" ? fallbackItems : fallbackItems.filter((i) => i.category === category);
			setItems(filtered);
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		fetchGallery(selectedCategory);
	}, [selectedCategory]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-ink py-24 text-ink-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-kicker",
							children: "Gallery"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 max-w-3xl text-5xl font-black sm:text-6xl",
							children: "A Look Inside Our FIBC World"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-lg leading-8 text-ink-muted",
							children: "Explore our manufacturing environment, production processes, packaging solutions and finished products."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-soft py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-kicker",
							children: "Our Gallery"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "section-title mt-2",
							children: "Manufacturing & Products"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-3.5" }), " Filter:"]
							}), CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSelectedCategory(cat),
								className: `rounded-full px-4 py-1.5 text-xs font-bold transition-all ${selectedCategory === cat ? "bg-primary text-primary-foreground shadow-sm" : "bg-background border border-border text-foreground hover:bg-accent"}`,
								children: cat
							}, cat))]
						})]
					}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 flex flex-col items-center justify-center py-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-10 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm font-medium text-muted-foreground",
							children: "Loading gallery items from server..."
						})]
					}) : items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 rounded border border-dashed border-border bg-background p-12 text-center text-muted-foreground",
						children: "No gallery images found for the selected category."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
						children: items.map((item, index) => {
							const itemNum = String(index + 1).padStart(2, "0");
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "group overflow-hidden border border-border bg-background transition-all hover:shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[4/3] overflow-hidden bg-primary-subtle",
									children: [
										item.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: getFullImageUrl(item.imageUrl),
											alt: item.title,
											className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
											onError: (e) => {
												e.currentTarget.style.display = "none";
												e.currentTarget.nextElementSibling?.classList.remove("hidden");
											}
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `grid h-full w-full place-items-center ${item.imageUrl ? "hidden" : ""}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
												className: "size-12 text-primary transition-transform duration-300 group-hover:scale-110",
												strokeWidth: 1.5
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute top-3 left-3 bg-black/70 px-2.5 py-1 text-xs font-bold text-white rounded",
											children: item.category
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-black text-primary",
											children: itemNum
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-4 text-xl font-bold",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm leading-7 text-muted-foreground",
											children: item.description || item.category
										})
									]
								})]
							}, item._id);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-primary-subtle py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-kicker",
							children: "Explore Our Solutions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl font-black sm:text-4xl",
							children: "Looking for the right FIBC bag?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-2xl text-muted-foreground",
							children: "Explore our product range or contact us to discuss your packaging requirements."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col justify-center gap-4 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/products",
									children: ["View Products", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: "Contact Us"
								})
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { GalleryPage as component };
