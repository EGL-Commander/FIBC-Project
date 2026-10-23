import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B_FmfFie.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DtIkZ_LJ.css";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "FIBC | Industrial Bulk Packaging" },
			{
				name: "description",
				content: "Premium industrial bulk packaging for global industries."
			},
			{
				name: "author",
				content: "FIBC"
			},
			{
				property: "og:title",
				content: "FIBC | Industrial Bulk Packaging"
			},
			{
				property: "og:description",
				content: "Premium industrial bulk packaging for global industries."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			suppressHydrationWarning: true,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			position: "top-right",
			richColors: true
		})]
	});
}
var $$splitComponentImporter$7 = () => import("./routes-IW0hJi7A.mjs");
var Route$7 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "FIBC | Premium Jumbo Bags Manufacturer" },
		{
			name: "description",
			content: "Premium FIBC jumbo bags and industrial bulk packaging engineered for safe global transport."
		},
		{
			property: "og:title",
			content: "FIBC | Premium Jumbo Bags Manufacturer"
		},
		{
			property: "og:description",
			content: "High-performance bulk packaging for demanding industries worldwide."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./about-D9IwkCoM.mjs");
var Route$6 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About Us | FIBC" }, {
		name: "description",
		content: "Learn more about FIBC and our industrial bulk packaging solutions."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./admin-CPG3tRdk.mjs");
var Route$5 = createFileRoute("/admin")({
	head: () => ({ meta: [{ title: "Admin Portal | FIBC" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-BB8nrDCs.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact Us | FIBC" }, {
		name: "description",
		content: "Contact our team for FIBC bulk packaging solutions, specifications and custom requirements."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./gallery-DbWEEcQN.mjs");
var Route$3 = createFileRoute("/gallery")({
	head: () => ({ meta: [{ title: "Gallery | FIBC" }, {
		name: "description",
		content: "Explore our FIBC manufacturing, products and facility gallery."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./infrastructure-DfzpG-s6.mjs");
var Route$2 = createFileRoute("/infrastructure")({
	head: () => ({ meta: [{ title: "Infrastructure | FIBC" }, {
		name: "description",
		content: "Explore the manufacturing infrastructure and production capabilities behind our FIBC bulk packaging solutions."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./products-Digv4tTh.mjs");
var Route$1 = createFileRoute("/products")({
	head: () => ({ meta: [{ title: "Products | FIBC" }, {
		name: "description",
		content: "Explore our range of premium FIBC jumbo bags, woven sack bags and bulk packaging solutions."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./quality-DHNSkkja.mjs");
var Route = createFileRoute("/quality")({
	head: () => ({ meta: [{ title: "Quality | FIBC" }, {
		name: "description",
		content: "Quality standards and reliable manufacturing practices behind FIBC industrial bulk packaging."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$7.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	AboutRoute: Route$6.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$8
	}),
	AdminRoute: Route$5.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$8
	}),
	ContactRoute: Route$4.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$8
	}),
	GalleryRoute: Route$3.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$8
	}),
	InfrastructureRoute: Route$2.update({
		id: "/infrastructure",
		path: "/infrastructure",
		getParentRoute: () => Route$8
	}),
	ProductsRoute: Route$1.update({
		id: "/products",
		path: "/products",
		getParentRoute: () => Route$8
	}),
	QualityRoute: Route.update({
		id: "/quality",
		path: "/quality",
		getParentRoute: () => Route$8
	})
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
