import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as Factory, c as Settings, i as Truck, j as ArrowRight, k as Boxes, n as Workflow } from "../_libs/lucide-react.mjs";
import { t as Navbar } from "./Navbar-B2o07pLv.mjs";
import { t as fibc_facility_default } from "./fibc-facility-CCEp5_jW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/infrastructure-DfzpG-s6.js
var import_jsx_runtime = require_jsx_runtime();
var infrastructurePoints = [
	{
		icon: Factory,
		title: "Modern Manufacturing",
		text: "Dedicated production facilities support the manufacturing of reliable FIBC bags for a wide range of industrial applications.",
		img: fibc_facility_default
	},
	{
		icon: Settings,
		title: "Controlled Processes",
		text: "Structured production processes help maintain consistency across fabric, cutting, stitching and finishing operations.",
		img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80"
	},
	{
		icon: Boxes,
		title: "Material Handling",
		text: "Organized material handling and storage systems support efficient movement of raw materials and finished products.",
		img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80"
	},
	{
		icon: Truck,
		title: "Dispatch & Logistics",
		text: "Efficient packing and dispatch processes help prepare finished FIBC bags for safe transportation and delivery.",
		img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80"
	}
];
function InfrastructurePage() {
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
							children: "Infrastructure"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 max-w-3xl text-5xl font-black sm:text-6xl",
							children: "Built for Consistent FIBC Production"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-lg leading-8 text-ink-muted",
							children: "Our manufacturing infrastructure supports efficient production, quality control and reliable delivery of flexible bulk packaging solutions."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-kicker",
							children: "Our Facility"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "section-title",
							children: "Production Designed Around Reliability"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 leading-8 text-muted-foreground",
							children: "Our production setup is organized around the key stages involved in manufacturing FIBC bags, from material preparation through final inspection and dispatch."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 leading-8 text-muted-foreground",
							children: "By maintaining controlled processes and organized workflows, we aim to deliver consistent packaging solutions for different materials, applications and handling requirements."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-4 sm:grid-cols-2",
							children: [
								"Fabric Production",
								"Cutting & Stitching",
								"Inspection & Testing",
								"Packing & Dispatch"
							].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-border bg-soft p-4 rounded",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-black text-primary",
									children: ["0", index + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-sm font-bold",
									children: item
								})]
							}, item))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-xl border border-border shadow-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: fibc_facility_default,
							alt: "FIBC Manufacturing Plant Facility",
							className: "h-full w-full object-cover transition-transform duration-500 hover:scale-105"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-soft py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-kicker",
							children: "Capabilities"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "section-title mt-2",
							children: "Infrastructure Supporting Every Stage"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-6 md:grid-cols-2",
							children: infrastructurePoints.map((item) => {
								const Icon = item.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "bg-background border border-border rounded-lg overflow-hidden shadow-sm flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aspect-video w-full overflow-hidden bg-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: item.img,
											alt: item.title,
											className: "h-full w-full object-cover transition-transform duration-300 hover:scale-105"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												className: "size-9 text-primary",
												strokeWidth: 1.7
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-6 text-xl font-bold",
												children: item.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm leading-7 text-muted-foreground",
												children: item.text
											})
										]
									})]
								}, item.title);
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-kicker",
								children: "Production Workflow"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "section-title",
								children: "From Material to Finished Bag"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 leading-8 text-muted-foreground",
								children: "Our production workflow follows a structured sequence designed to maintain consistency and efficiency throughout manufacturing."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-4",
						children: [
							"Raw Material",
							"Fabric & Cutting",
							"Stitching & Inspection",
							"Packing & Dispatch"
						].map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative border border-border p-6 rounded-lg bg-background shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, { className: "size-7 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-6 block text-xs font-black text-primary",
									children: ["STEP 0", index + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-lg font-bold",
									children: step
								})
							]
						}, step))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-primary-subtle py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 md:flex-row md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-kicker",
							children: "Work With Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl font-black sm:text-4xl",
							children: "Looking for reliable bulk packaging?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-muted-foreground",
							children: "Contact our team to discuss your FIBC requirements and application-specific packaging solutions."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "h-12 shrink-0 px-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							children: ["Contact Us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})]
				})
			})
		]
	});
}
//#endregion
export { InfrastructurePage as component };
