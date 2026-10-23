//#region node_modules/.nitro/vite/services/ssr/assets/api-BGBv6BnQ.js
var API_BASE_URL = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_API_BASE_URL": "/api"
}["VITE_API_BASE_URL"] || "http://localhost:5000/api";
function getFullImageUrl(url) {
	if (!url) return "";
	if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("data:")) return url;
	return `${API_BASE_URL.replace(/\/api\/?$/, "")}${url.startsWith("/") ? "" : "/"}${url}`;
}
async function getProducts(category, search) {
	const params = new URLSearchParams();
	if (category && category !== "All") params.append("category", category);
	if (search) params.append("search", search);
	const url = `${API_BASE_URL}/products?${params.toString()}`;
	const response = await fetch(url);
	const data = await response.json();
	if (!response.ok) throw new Error(data.message || "Failed to fetch products");
	return data;
}
async function createProduct(formData, token) {
	const response = await fetch(`${API_BASE_URL}/products`, {
		method: "POST",
		headers: { Authorization: `Bearer ${token}` },
		body: formData
	});
	const data = await response.json();
	if (!response.ok) throw new Error(data.message || "Failed to create product");
	return data;
}
async function updateProduct(id, formData, token) {
	const response = await fetch(`${API_BASE_URL}/products/${id}`, {
		method: "PUT",
		headers: { Authorization: `Bearer ${token}` },
		body: formData
	});
	const data = await response.json();
	if (!response.ok) throw new Error(data.message || "Failed to update product");
	return data;
}
async function deleteProduct(id, token) {
	const response = await fetch(`${API_BASE_URL}/products/${id}`, {
		method: "DELETE",
		headers: { Authorization: `Bearer ${token}` }
	});
	const data = await response.json();
	if (!response.ok) throw new Error(data.message || "Failed to delete product");
	return data;
}
async function getGalleryItems(category, search) {
	const params = new URLSearchParams();
	if (category && category !== "All") params.append("category", category);
	if (search) params.append("search", search);
	const url = `${API_BASE_URL}/gallery?${params.toString()}`;
	const response = await fetch(url);
	const data = await response.json();
	if (!response.ok) throw new Error(data.message || "Failed to fetch gallery items");
	return data;
}
async function createGalleryItem(formData, token) {
	const response = await fetch(`${API_BASE_URL}/gallery`, {
		method: "POST",
		headers: { Authorization: `Bearer ${token}` },
		body: formData
	});
	const data = await response.json();
	if (!response.ok) throw new Error(data.message || "Failed to upload gallery item");
	return data;
}
async function updateGalleryItem(id, formData, token) {
	const response = await fetch(`${API_BASE_URL}/gallery/${id}`, {
		method: "PUT",
		headers: { Authorization: `Bearer ${token}` },
		body: formData
	});
	const data = await response.json();
	if (!response.ok) throw new Error(data.message || "Failed to update gallery item");
	return data;
}
async function deleteGalleryItem(id, token) {
	const response = await fetch(`${API_BASE_URL}/gallery/${id}`, {
		method: "DELETE",
		headers: { Authorization: `Bearer ${token}` }
	});
	const data = await response.json();
	if (!response.ok) throw new Error(data.message || "Failed to delete gallery item");
	return data;
}
async function submitContactForm(payload) {
	try {
		const response = await fetch(`${API_BASE_URL}/contact`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload)
		});
		const data = await response.json();
		if (!response.ok) {
			const errorMsg = data.errors && data.errors.length > 0 ? data.errors.map((e) => e.message).join(", ") : data.message || "Failed to submit contact enquiry";
			throw new Error(errorMsg);
		}
		return data;
	} catch (err) {
		if (err.name === "TypeError" || err.message?.includes("fetch")) throw new Error("Backend server is offline or unreachable. Please start the backend server by running 'npm run dev' inside the backend folder.");
		throw err;
	}
}
async function getContactInquiries(token, status) {
	const params = new URLSearchParams();
	if (status && status !== "All") params.append("status", status);
	const response = await fetch(`${API_BASE_URL}/contact?${params.toString()}`, { headers: { Authorization: `Bearer ${token}` } });
	const data = await response.json();
	if (!response.ok) throw new Error(data.message || "Failed to fetch inquiries");
	return data;
}
async function updateContactStatus(id, status, token) {
	const response = await fetch(`${API_BASE_URL}/contact/${id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify({ status })
	});
	const data = await response.json();
	if (!response.ok) throw new Error(data.message || "Failed to update status");
	return data;
}
async function deleteContactInquiry(id, token) {
	const response = await fetch(`${API_BASE_URL}/contact/${id}`, {
		method: "DELETE",
		headers: { Authorization: `Bearer ${token}` }
	});
	const data = await response.json();
	if (!response.ok) throw new Error(data.message || "Failed to delete inquiry");
	return data;
}
async function loginAdmin(usernameOrEmail, password) {
	const response = await fetch(`${API_BASE_URL}/auth/login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			username: usernameOrEmail,
			email: usernameOrEmail,
			password
		})
	});
	const data = await response.json();
	if (!response.ok) throw new Error(data.message || "Invalid credentials");
	return data;
}
//#endregion
export { deleteProduct as a, getGalleryItems as c, submitContactForm as d, updateContactStatus as f, deleteGalleryItem as i, getProducts as l, updateProduct as m, createProduct as n, getContactInquiries as o, updateGalleryItem as p, deleteContactInquiry as r, getFullImageUrl as s, createGalleryItem as t, loginAdmin as u };
