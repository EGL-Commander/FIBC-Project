import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as CircleCheck, T as Factory, h as PackageCheck, j as ArrowRight, s as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as Navbar } from "./Navbar-B2o07pLv.mjs";
import { t as fibc_facility_default } from "./fibc-facility-CCEp5_jW.mjs";
import { t as fibc_hero_default } from "./fibc-hero-lS1THcDb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quality-DHNSkkja.js
var import_jsx_runtime = require_jsx_runtime();
var qualityPoints = [
	{
		icon: ShieldCheck,
		title: "Quality Conscious",
		text: "Every production batch follows defined quality checks and documented manufacturing standards.",
		img: fibc_facility_default
	},
	{
		icon: PackageCheck,
		title: "Reliable Performance",
		text: "Our bags are designed and tested to provide dependable performance during handling, storage and transportation.",
		img: fibc_hero_default
	},
	{
		icon: Factory,
		title: "Controlled Manufacturing",
		text: "Integrated production processes help maintain consistency across materials, construction and finishing.",
		img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80"
	}
];
function QualityPage() {
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
							children: "Quality & Standards"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 max-w-3xl text-5xl font-black sm:text-6xl",
							children: "Quality Built Into Every FIBC"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-lg leading-8 text-ink-muted",
							children: "Consistent materials, controlled manufacturing and documented quality checks help us deliver dependable bulk packaging solutions."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 lg:grid-cols-2 lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-kicker",
								children: "Our Commitment"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "section-title",
								children: "Consistency You Can Depend On"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-7 leading-8 text-muted-foreground",
								children: "Quality is an important part of every stage of our manufacturing process. From raw materials to finished FIBC bags, our production approach is focused on consistency, safety and dependable performance."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 leading-8 text-muted-foreground",
								children: "We develop packaging solutions around the requirements of the material being transported, the filling and discharge process, handling conditions and destination."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-xl border border-border shadow-lg aspect-video",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: fibc_facility_default,
								onError: (e) => {
									e.target.src = fibc_hero_default;
								},
								alt: "Quality Inspection and Testing Facility",
								className: "h-full w-full object-cover transition-transform duration-500 hover:scale-105"
							})
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-soft py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-kicker",
							children: "Our Standards"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "section-title mt-2",
							children: "Built Around Reliable Performance"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-6 md:grid-cols-3",
							children: qualityPoints.map((item) => {
								const Icon = item.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "bg-background border border-border rounded-lg overflow-hidden shadow-sm flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aspect-video w-full overflow-hidden bg-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: item.img,
											onError: (e) => {
												e.target.src = fibc_facility_default;
											},
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
					className: "mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-kicker",
							children: "Quality Focus"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "section-title",
							children: "Attention to Every Production Stage"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 leading-8 text-muted-foreground",
							children: "Our quality approach covers the complete manufacturing journey, helping maintain consistency from material preparation through final inspection."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 aspect-video overflow-hidden rounded-lg border border-border shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: fibc_hero_default,
								onError: (e) => {
									e.target.src = fibc_facility_default;
								},
								alt: "FIBC Load Testing Equipment",
								className: "h-full w-full object-cover"
							})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-5",
							children: [
								"Raw material quality checks",
								"Controlled weaving and fabric production",
								"Accurate cutting and stitching",
								"Finished bag inspection",
								"Load and safety performance checks",
								"Packaging and dispatch inspection"
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 border-b border-border pb-5 font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-5 shrink-0 text-primary" }), item]
							}, item))
						})
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
							children: "Need More Information?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl font-black sm:text-4xl",
							children: "Let's discuss your packaging requirements."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-muted-foreground",
							children: "Contact our team for specifications, technical information and custom FIBC solutions."
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
export { QualityPage as component };
