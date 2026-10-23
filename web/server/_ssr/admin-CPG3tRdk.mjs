import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { S as Image, a as Trash2, b as Lock, d as RefreshCw, f as Plus, m as Package, o as SquarePen, v as Mail, x as LoaderCircle, y as LogOut } from "../_libs/lucide-react.mjs";
import { a as deleteProduct, c as getGalleryItems, f as updateContactStatus, i as deleteGalleryItem, l as getProducts, m as updateProduct, n as createProduct, o as getContactInquiries, p as updateGalleryItem, r as deleteContactInquiry, s as getFullImageUrl, t as createGalleryItem, u as loginAdmin } from "./api-BGBv6BnQ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-CPG3tRdk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminPage() {
	const [token, setToken] = (0, import_react.useState)(null);
	const [activeTab, setActiveTab] = (0, import_react.useState)("gallery");
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			const savedToken = localStorage.getItem("fibc_admin_token");
			if (savedToken) setToken(savedToken);
		}
	}, []);
	const [username, setUsername] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loginLoading, setLoginLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!token || typeof window === "undefined") return;
		const timerId = setTimeout(() => {
			if (typeof window !== "undefined") localStorage.removeItem("fibc_admin_token");
			setToken(null);
			setUsername("");
			setPassword("");
			toast.warning("Admin session expired after 3 minutes. Please sign in again.");
		}, 18e4);
		return () => {
			clearTimeout(timerId);
		};
	}, [token]);
	const [galleryList, setGalleryList] = (0, import_react.useState)([]);
	const [galleryLoading, setGalleryLoading] = (0, import_react.useState)(false);
	const [isGalleryModalOpen, setIsGalleryModalOpen] = (0, import_react.useState)(false);
	const [editingGalleryItem, setEditingGalleryItem] = (0, import_react.useState)(null);
	const [gTitle, setGTitle] = (0, import_react.useState)("");
	const [gCategory, setGCategory] = (0, import_react.useState)("Manufacturing Facility");
	const [gDescription, setGDescription] = (0, import_react.useState)("");
	const [gDisplayOrder, setGDisplayOrder] = (0, import_react.useState)(0);
	const [gFile, setGFile] = (0, import_react.useState)(null);
	const [gSaving, setGSaving] = (0, import_react.useState)(false);
	const [productList, setProductList] = (0, import_react.useState)([]);
	const [productLoading, setProductLoading] = (0, import_react.useState)(false);
	const [isProductModalOpen, setIsProductModalOpen] = (0, import_react.useState)(false);
	const [editingProductItem, setEditingProductItem] = (0, import_react.useState)(null);
	const [pName, setPName] = (0, import_react.useState)("");
	const [pSlug, setPSlug] = (0, import_react.useState)("");
	const [pCategory, setPCategory] = (0, import_react.useState)("FIBC Categories");
	const [pCategoryId, setPCategoryId] = (0, import_react.useState)("fibc-categories");
	const [pDescription, setPDescription] = (0, import_react.useState)("");
	const [pDisplayOrder, setPDisplayOrder] = (0, import_react.useState)(0);
	const [pSpecifications, setPSpecifications] = (0, import_react.useState)("{}");
	const [pApplications, setPApplications] = (0, import_react.useState)("[]");
	const [pFile, setPFile] = (0, import_react.useState)(null);
	const [pSaving, setPSaving] = (0, import_react.useState)(false);
	const [contactList, setContactList] = (0, import_react.useState)([]);
	const [contactLoading, setContactLoading] = (0, import_react.useState)(false);
	const [selectedStatus, setSelectedStatus] = (0, import_react.useState)("All");
	const handleLogin = async (e) => {
		e.preventDefault();
		setLoginLoading(true);
		try {
			const jwtToken = (await loginAdmin(username, password)).data.token;
			if (typeof window !== "undefined") localStorage.setItem("fibc_admin_token", jwtToken);
			setToken(jwtToken);
			toast.success("Successfully authenticated as Admin!");
		} catch (err) {
			toast.error(err.message || "Failed to authenticate");
		} finally {
			setLoginLoading(false);
		}
	};
	const handleLogout = () => {
		if (typeof window !== "undefined") localStorage.removeItem("fibc_admin_token");
		setToken(null);
		setUsername("");
		setPassword("");
		toast.info("Logged out of Admin Portal");
	};
	const loadGallery = async () => {
		setGalleryLoading(true);
		try {
			const res = await getGalleryItems("All");
			setGalleryList(res.data || []);
		} catch (err) {
			toast.error("Failed to load gallery items from backend");
		} finally {
			setGalleryLoading(false);
		}
	};
	const loadProducts = async () => {
		setProductLoading(true);
		try {
			const res = await getProducts();
			setProductList(res.data || []);
		} catch (err) {
			toast.error("Failed to load products from backend");
		} finally {
			setProductLoading(false);
		}
	};
	const loadContacts = async () => {
		if (!token) return;
		setContactLoading(true);
		try {
			const res = await getContactInquiries(token, selectedStatus);
			setContactList(res.data || []);
		} catch (err) {
			toast.error("Failed to load inquiries");
		} finally {
			setContactLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		if (token) {
			if (activeTab === "gallery") loadGallery();
			if (activeTab === "products") loadProducts();
			if (activeTab === "contacts") loadContacts();
		}
	}, [
		token,
		activeTab,
		selectedStatus
	]);
	const handleSaveGallery = async (e) => {
		e.preventDefault();
		if (!token) return;
		if (!editingGalleryItem && !gFile) {
			toast.error("Please select an image file to upload");
			return;
		}
		setGSaving(true);
		try {
			const formData = new FormData();
			formData.append("title", gTitle);
			formData.append("category", gCategory);
			formData.append("description", gDescription);
			formData.append("displayOrder", String(gDisplayOrder));
			if (gFile) formData.append("image", gFile);
			if (editingGalleryItem) {
				await updateGalleryItem(editingGalleryItem._id, formData, token);
				toast.success("Gallery item updated successfully!");
			} else {
				await createGalleryItem(formData, token);
				toast.success("New gallery item uploaded & published!");
			}
			setIsGalleryModalOpen(false);
			resetGalleryForm();
			loadGallery();
		} catch (err) {
			toast.error(err.message || "Failed to save gallery item");
		} finally {
			setGSaving(false);
		}
	};
	const openEditGallery = (item) => {
		setEditingGalleryItem(item);
		setGTitle(item.title);
		setGCategory(item.category);
		setGDescription(item.description || "");
		setGDisplayOrder(item.displayOrder || 0);
		setGFile(null);
		setIsGalleryModalOpen(true);
	};
	const resetGalleryForm = () => {
		setEditingGalleryItem(null);
		setGTitle("");
		setGCategory("Manufacturing Facility");
		setGDescription("");
		setGDisplayOrder(0);
		setGFile(null);
	};
	const handleDeleteGallery = async (id) => {
		if (!token || !confirm("Are you sure you want to delete this gallery item?")) return;
		try {
			await deleteGalleryItem(id, token);
			toast.success("Gallery item deleted!");
			loadGallery();
		} catch (err) {
			toast.error(err.message || "Failed to delete item");
		}
	};
	const handleSaveProduct = async (e) => {
		e.preventDefault();
		if (!token) return;
		setPSaving(true);
		try {
			const formData = new FormData();
			formData.append("name", pName);
			formData.append("slug", pSlug || pName.toLowerCase().replace(/\s+/g, "-"));
			formData.append("category", pCategory);
			formData.append("categoryId", pCategoryId || pCategory.toLowerCase().replace(/\s+/g, "-"));
			formData.append("description", pDescription);
			formData.append("displayOrder", String(pDisplayOrder));
			formData.append("specifications", pSpecifications);
			formData.append("applications", pApplications);
			if (pFile) formData.append("image", pFile);
			if (editingProductItem) {
				await updateProduct(editingProductItem._id, formData, token);
				toast.success("Product updated successfully!");
			} else {
				await createProduct(formData, token);
				toast.success("New product added & published!");
			}
			setIsProductModalOpen(false);
			resetProductForm();
			loadProducts();
		} catch (err) {
			toast.error(err.message || "Failed to save product");
		} finally {
			setPSaving(false);
		}
	};
	const openEditProduct = (item) => {
		setEditingProductItem(item);
		setPName(item.name);
		setPSlug(item.slug || item.name.toLowerCase().replace(/\s+/g, "-"));
		setPCategory(item.category || "FIBC Categories");
		setPCategoryId(item.categoryId || (item.category || "fibc-categories").toLowerCase().replace(/\s+/g, "-"));
		setPDescription(item.description || "");
		setPDisplayOrder(item.displayOrder || 0);
		setPSpecifications(item.specifications ? JSON.stringify(item.specifications, null, 2) : "{}");
		setPApplications(item.applications ? JSON.stringify(item.applications, null, 2) : "[]");
		setPFile(null);
		setIsProductModalOpen(true);
	};
	const resetProductForm = () => {
		setEditingProductItem(null);
		setPName("");
		setPSlug("");
		setPCategory("FIBC Categories");
		setPCategoryId("fibc-categories");
		setPDescription("");
		setPDisplayOrder(0);
		setPSpecifications("{}");
		setPApplications("[]");
		setPFile(null);
	};
	const handleDeleteProduct = async (id) => {
		if (!token || !confirm("Are you sure you want to delete this product?")) return;
		try {
			await deleteProduct(id, token);
			toast.success("Product deleted successfully!");
			loadProducts();
		} catch (err) {
			toast.error(err.message || "Failed to delete product");
		}
	};
	const handleUpdateStatus = async (id, newStatus) => {
		if (!token) return;
		try {
			await updateContactStatus(id, newStatus, token);
			toast.success(`Inquiry status updated to ${newStatus}`);
			loadContacts();
		} catch (err) {
			toast.error(err.message || "Failed to update inquiry status");
		}
	};
	const handleDeleteContact = async (id) => {
		if (!token || !confirm("Delete this contact inquiry permanently?")) return;
		try {
			await deleteContactInquiry(id, token);
			toast.success("Contact inquiry deleted!");
			loadContacts();
		} catch (err) {
			toast.error(err.message || "Failed to delete inquiry");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-ink py-10 text-ink-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-kicker",
						children: "Management"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 text-3xl font-black sm:text-4xl",
						children: "Admin Portal"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3",
						children: token && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "destructive",
							onClick: handleLogout,
							className: "bg-red-600 hover:bg-red-700 text-white font-bold border-none shadow-md transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 size-4" }), " Log Out"]
						})
					})]
				})
			}),
			!token ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-md border border-border bg-soft p-8 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto grid size-12 place-items-center rounded-full bg-primary-subtle text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-2xl font-bold",
								children: "Admin Sign In"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Secure access to FIBC"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleLogin,
						className: "mt-8 space-y-4",
						autoComplete: "off",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-bold uppercase tracking-wider text-muted-foreground",
								children: "Username"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								name: "username",
								value: username,
								onChange: (e) => setUsername(e.target.value),
								placeholder: "Enter username",
								className: "mt-1 h-11 w-full border border-border bg-background px-3 text-sm outline-none focus:border-primary",
								autoComplete: "off",
								required: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-bold uppercase tracking-wider text-muted-foreground",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								name: "password",
								value: password,
								onChange: (e) => setPassword(e.target.value),
								placeholder: "Enter password",
								className: "mt-1 h-11 w-full border border-border bg-background px-3 text-sm outline-none focus:border-primary",
								autoComplete: "new-password",
								required: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "w-full",
								size: "lg",
								disabled: loginLoading,
								children: loginLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : "Sign In"
							})
						]
					})]
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex border-b border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setActiveTab("gallery"),
									className: `flex items-center gap-2 border-b-2 px-6 py-3 font-bold text-sm transition ${activeTab === "gallery" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-4" }), " Gallery Items"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setActiveTab("products"),
									className: `flex items-center gap-2 border-b-2 px-6 py-3 font-bold text-sm transition ${activeTab === "products" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-4" }), " Products Catalog"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setActiveTab("contacts"),
									className: `flex items-center gap-2 border-b-2 px-6 py-3 font-bold text-sm transition ${activeTab === "contacts" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), " Contact Inquiries"]
								})
							]
						}),
						activeTab === "gallery" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-bold",
									children: "Gallery Photos"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Upload, edit or delete gallery photos displayed on the Gallery page"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										size: "sm",
										onClick: loadGallery,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "mr-1 size-3.5" }), " Refresh"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										onClick: () => {
											resetGalleryForm();
											setIsGalleryModalOpen(true);
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1 size-4" }), " Add Gallery Image"]
									})]
								})]
							}), galleryLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-16 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mx-auto size-8 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Fetching from backend..."
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
								children: galleryList.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group overflow-hidden border border-border bg-background p-4 shadow-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-video overflow-hidden bg-muted",
											children: [item.imageUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: getFullImageUrl(item.imageUrl),
												alt: item.title,
												className: "h-full w-full object-cover"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute top-2 left-2 rounded bg-black/70 px-2 py-0.5 text-xs text-white font-medium",
												children: item.category
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-bold",
												children: item.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 line-clamp-2 text-xs text-muted-foreground",
												children: item.description || "No description provided."
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex gap-2 border-t border-border pt-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "sm",
												variant: "outline",
												className: "flex-1",
												onClick: () => openEditGallery(item),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "mr-1 size-3.5" }), " Edit"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "destructive",
												onClick: () => handleDeleteGallery(item._id),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
											})]
										})
									]
								}, item._id))
							})]
						}),
						activeTab === "products" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-bold",
									children: "Products Catalog"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Add, edit, or delete products displayed on the Products page"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										size: "sm",
										onClick: loadProducts,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "mr-1 size-3.5" }), " Refresh"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										onClick: () => {
											resetProductForm();
											setIsProductModalOpen(true);
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1 size-4" }), " Add Product"]
									})]
								})]
							}), productLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-16 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mx-auto size-8 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Fetching products..."
								})]
							}) : productList.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 border border-dashed border-border p-12 text-center text-muted-foreground",
								children: "No products added yet. Click \"Add Product\" to add your first product."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
								children: productList.map((product, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group overflow-hidden border border-border bg-background p-4 shadow-sm flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative aspect-video overflow-hidden bg-muted rounded",
										children: [product.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: getFullImageUrl(product.imageUrl),
											alt: product.name,
											className: "h-full w-full object-cover"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-full w-full items-center justify-center bg-accent/40 text-muted-foreground text-xs font-semibold",
											children: "No Image Uploaded"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute top-2 left-2 rounded bg-primary px-2 py-0.5 text-xs text-primary-foreground font-black",
											children: String(idx + 1).padStart(2, "0")
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3",
										children: [
											product.category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] uppercase font-bold text-primary tracking-wider",
												children: product.category
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-bold text-lg leading-snug",
												children: product.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 line-clamp-3 text-xs text-muted-foreground",
												children: product.description
											})
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex gap-2 border-t border-border pt-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: "outline",
											className: "flex-1",
											onClick: () => openEditProduct(product),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "mr-1 size-3.5" }), " Edit"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "destructive",
											onClick: () => handleDeleteProduct(product._id),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
										})]
									})]
								}, product._id))
							})]
						}),
						activeTab === "contacts" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col justify-between gap-4 md:flex-row md:items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-bold",
									children: "User Contact Inquiries"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Inquiries submitted from the frontend Contact Us form"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										size: "sm",
										onClick: loadContacts,
										className: "mr-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "mr-1 size-3.5" }), " Refresh"]
									}), [
										"All",
										"new",
										"in-review",
										"resolved",
										"archived"
									].map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setSelectedStatus(st),
										className: `rounded px-3 py-1 text-xs font-bold uppercase transition ${selectedStatus === st ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:bg-accent"}`,
										children: st
									}, st))]
								})]
							}), contactLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-16 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mx-auto size-8 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Fetching inquiries..."
								})]
							}) : contactList.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 border border-dashed border-border p-12 text-center text-muted-foreground",
								children: "No inquiries found for current filter."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 space-y-4",
								children: contactList.map((contact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border border-border bg-background p-6 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col justify-between gap-4 md:flex-row md:items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: `inline-block rounded px-2.5 py-0.5 text-xs font-bold uppercase ${contact.status === "new" ? "bg-blue-100 text-blue-800" : contact.status === "in-review" ? "bg-amber-100 text-amber-800" : contact.status === "resolved" ? "bg-emerald-100 text-emerald-800" : "bg-gray-100 text-gray-800"}`,
												children: ["Status: ", contact.status]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
												className: "mt-2 text-lg font-bold",
												children: [
													contact.name,
													" ",
													contact.company && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-sm font-normal text-muted-foreground",
														children: [
															"(",
															contact.company,
															")"
														]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-1 flex flex-wrap gap-4 text-xs text-muted-foreground",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Email:" }),
														" ",
														contact.email
													] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Phone:" }),
														" ",
														contact.phone
													] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Date:" }),
														" ",
														new Date(contact.createdAt).toLocaleString()
													] })
												]
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-semibold text-muted-foreground mr-1",
													children: "Update Status:"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
													value: contact.status,
													onChange: (e) => handleUpdateStatus(contact._id, e.target.value),
													className: "h-9 border border-border bg-background px-3 text-xs font-semibold rounded outline-none focus:border-primary",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "new",
															children: "New"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "in-review",
															children: "In Review"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "resolved",
															children: "Resolved"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "archived",
															children: "Archived"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													variant: "destructive",
													onClick: () => handleDeleteContact(contact._id),
													className: "bg-red-600 hover:bg-red-700 text-white font-medium",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-1 size-3.5" }), " Delete"]
												})
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 rounded bg-soft p-4 text-sm text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-xs text-muted-foreground uppercase mb-1",
											children: "Message Payload:"
										}), contact.message]
									})]
								}, contact._id))
							})]
						})
					]
				})
			}),
			isGalleryModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-lg border border-border bg-background p-6 shadow-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold",
							children: editingGalleryItem ? "Edit Gallery Item" : "Upload New Gallery Image"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Images will be uploaded and stored permanently"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSaveGallery,
							className: "mt-6 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold uppercase text-muted-foreground",
									children: "Title"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: gTitle,
									onChange: (e) => setGTitle(e.target.value),
									placeholder: "Enter title",
									className: "mt-1 h-10 w-full border border-border bg-background px-3 text-sm outline-none focus:border-primary",
									required: true
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold uppercase text-muted-foreground",
									children: "Category"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: gCategory,
									onChange: (e) => setGCategory(e.target.value),
									placeholder: "Type category (e.g. Manufacturing Facility, Warehouse...)",
									className: "mt-1 h-10 w-full border border-border bg-background px-3 text-sm outline-none focus:border-primary",
									required: true
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold uppercase text-muted-foreground",
									children: "Description"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: gDescription,
									onChange: (e) => setGDescription(e.target.value),
									placeholder: "Enter description",
									rows: 3,
									className: "mt-1 w-full border border-border bg-background p-3 text-sm outline-none focus:border-primary"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-bold uppercase text-muted-foreground",
										children: "Image File"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										accept: "image/*",
										onChange: (e) => setGFile(e.target.files?.[0] || null),
										className: "mt-1 block w-full text-xs text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-none file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-primary-foreground hover:file:opacity-90"
									}),
									editingGalleryItem && !gFile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[11px] text-muted-foreground",
										children: "Leave blank to keep existing image"
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex justify-end gap-3 pt-4 border-t border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										variant: "outline",
										onClick: () => setIsGalleryModalOpen(false),
										children: "Cancel"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										disabled: gSaving,
										children: gSaving ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 size-4 animate-spin" }), "Saving..."] }) : "Save & Publish"
									})]
								})
							]
						})
					]
				})
			}),
			isProductModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-y-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-2xl border border-border bg-background p-6 shadow-xl max-h-[90vh] overflow-y-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold",
							children: editingProductItem ? "Edit Product" : "Add New Product"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Configure product catalog item, specifications, and category options"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSaveProduct,
							className: "mt-6 space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border border-border p-4 bg-muted/20 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-black uppercase text-primary tracking-wider",
											children: "Basic Info"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xs font-bold uppercase text-muted-foreground",
											children: "Product Name *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: pName,
											onChange: (e) => {
												setPName(e.target.value);
												if (!editingProductItem) setPSlug(e.target.value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""));
											},
											placeholder: "e.g. U-Panel Bags",
											className: "mt-1 h-10 w-full border border-border bg-background px-3 text-sm outline-none focus:border-primary",
											required: true
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xs font-bold uppercase text-muted-foreground",
											children: "Slug (Unique ID)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: pSlug,
											onChange: (e) => setPSlug(e.target.value),
											placeholder: "e.g. u-panel-bags",
											className: "mt-1 h-10 w-full border border-border bg-background px-3 text-sm outline-none focus:border-primary font-mono text-xs"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xs font-bold uppercase text-muted-foreground",
											children: "Description *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											value: pDescription,
											onChange: (e) => setPDescription(e.target.value),
											placeholder: "Detailed description of the product...",
											rows: 3,
											className: "mt-1 w-full border border-border bg-background p-3 text-sm outline-none focus:border-primary",
											required: true
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-xs font-bold uppercase text-muted-foreground",
												children: "Product Image"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "file",
												accept: "image/*",
												onChange: (e) => setPFile(e.target.files?.[0] || null),
												className: "mt-1 block w-full text-xs text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-none file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-primary-foreground hover:file:opacity-90"
											}),
											editingProductItem && !pFile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-[11px] text-muted-foreground",
												children: "Leave blank to keep existing product image"
											})
										] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border border-border p-4 bg-muted/20 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-black uppercase text-primary tracking-wider",
											children: "Category Info"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-xs font-bold uppercase text-muted-foreground",
												children: "Category Name"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												list: "category-name-options",
												value: pCategory,
												onChange: (e) => {
													setPCategory(e.target.value);
													setPCategoryId(e.target.value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""));
												},
												placeholder: "Enter category name (e.g. FIBC Categories, Woven Sack Bags)",
												className: "mt-1 h-10 w-full border border-border bg-background px-3 text-sm outline-none focus:border-primary"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("datalist", {
												id: "category-name-options",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "FIBC Categories" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "Woven Sack Bags" })]
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xs font-bold uppercase text-muted-foreground",
											children: "Category ID"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: pCategoryId,
											onChange: (e) => setPCategoryId(e.target.value),
											placeholder: "e.g. fibc-categories",
											className: "mt-1 h-10 w-full border border-border bg-background px-3 text-sm outline-none focus:border-primary font-mono text-xs"
										})] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border border-border p-4 bg-muted/20 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-black uppercase text-primary tracking-wider",
											children: "Technical Data (JSON Format)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xs font-bold uppercase text-muted-foreground",
											children: "Specifications (JSON Object)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											value: pSpecifications,
											onChange: (e) => setPSpecifications(e.target.value),
											placeholder: "{ \"SWL\": \"500kg - 2000kg\", \"SF\": \"5:1\" }",
											rows: 3,
											className: "mt-1 w-full border border-border bg-background p-3 font-mono text-xs outline-none focus:border-primary"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xs font-bold uppercase text-muted-foreground",
											children: "Applications (JSON Array)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											value: pApplications,
											onChange: (e) => setPApplications(e.target.value),
											placeholder: "[ \"Chemical powders\", \"Fertilizers\", \"Food grains\" ]",
											rows: 3,
											className: "mt-1 w-full border border-border bg-background p-3 font-mono text-xs outline-none focus:border-primary"
										})] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex justify-end gap-3 pt-4 border-t border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										variant: "outline",
										onClick: () => setIsProductModalOpen(false),
										children: "Cancel"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										disabled: pSaving,
										children: pSaving ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 size-4 animate-spin" }), "Saving..."] }) : "Save Product"
									})]
								})
							]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { AdminPage as component };
