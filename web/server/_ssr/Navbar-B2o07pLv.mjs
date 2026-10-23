import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Earth, O as ChevronDown, g as Menu, p as Phone, t as X, v as Mail } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Navbar-B2o07pLv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const isActive = (path) => pathname === path;
	const linkClass = (path) => isActive(path) ? "text-primary font-semibold hover:opacity-70 transition-opacity" : "text-foreground hover:text-primary transition-colors";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-ink text-ink-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-9 max-w-7xl items-center justify-between gap-4 px-5 text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-x-5 gap-y-1 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "mailto:sales@fibc.com",
					className: "flex items-center gap-1.5 hover:text-accent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5" }), " sales@fibc.com"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "tel:+910000000000",
					className: "flex items-center gap-1.5 hover:text-accent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5" }), " +91 00000 00000"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden items-center gap-4 sm:flex",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "size-3.5" }), " Serving global industries"]
				})
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-11 place-items-center bg-primary text-lg font-black text-primary-foreground",
						children: "F"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "block text-xl font-black leading-none tracking-wide",
						children: "FIBC"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
						className: "mt-1 block text-[9px] font-bold uppercase tracking-[0.18em] text-primary",
						children: "Flexible bulk packaging"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-7 text-sm md:flex",
					"aria-label": "Main navigation",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: linkClass("/"),
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: linkClass("/about"),
							children: "About Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/products",
							className: `flex items-center gap-1 ${linkClass("/products")}`,
							children: ["Products ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/quality",
							className: linkClass("/quality"),
							children: "Quality"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/infrastructure",
							className: linkClass("/infrastructure"),
							children: "Infrastructure"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/gallery",
							className: linkClass("/gallery"),
							children: "Gallery"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Contact Us"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-10 place-items-center md:hidden",
					onClick: () => setOpen(!open),
					"aria-label": "Toggle menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-background md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-7xl flex-col px-5 py-4",
				"aria-label": "Mobile navigation",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: `border-b border-border py-4 ${linkClass("/")}`,
						onClick: () => setOpen(false),
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: `border-b border-border py-4 ${linkClass("/about")}`,
						onClick: () => setOpen(false),
						children: "About Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products",
						className: `flex items-center gap-1 border-b border-border py-4 ${linkClass("/products")}`,
						onClick: () => setOpen(false),
						children: ["Products ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/quality",
						className: `border-b border-border py-4 ${linkClass("/quality")}`,
						onClick: () => setOpen(false),
						children: "Quality"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/infrastructure",
						className: `border-b border-border py-4 ${linkClass("/infrastructure")}`,
						onClick: () => setOpen(false),
						children: "Infrastructure"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/gallery",
						className: `border-b border-border py-4 ${linkClass("/gallery")}`,
						onClick: () => setOpen(false),
						children: "Gallery"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-4",
						onClick: () => setOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "w-full",
							children: "Contact Us"
						})
					})
				]
			})
		})]
	})] });
}
//#endregion
export { Navbar as t };
