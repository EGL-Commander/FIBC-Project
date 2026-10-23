import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { D as CircleCheck, _ as MapPin, l as Send, p as Phone, v as Mail, x as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as Navbar } from "./Navbar-B2o07pLv.mjs";
import { d as submitContactForm } from "./api-BGBv6BnQ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BB8nrDCs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		company: "",
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const validate = () => {
		const newErrors = {};
		if (!form.name.trim()) newErrors.name = "Name is required";
		else if (form.name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";
		if (!form.email.trim()) newErrors.email = "Email is required";
		else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(form.email.trim())) newErrors.email = "Please enter a valid email address";
		if (!form.phone.trim()) newErrors.phone = "Phone number is required";
		else if (!/^[0-9]{10}$/.test(form.phone.trim())) newErrors.phone = "Phone number must be a valid 10-digit number";
		if (!form.message.trim()) newErrors.message = "Message is required";
		else if (form.message.trim().length < 5) newErrors.message = "Message must be at least 5 characters";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "phone") {
			const numericValue = value.replace(/\D/g, "").slice(0, 10);
			setForm((prev) => ({
				...prev,
				phone: numericValue
			}));
		} else setForm((prev) => ({
			...prev,
			[name]: value
		}));
		if (errors[name]) setErrors((prev) => ({
			...prev,
			[name]: void 0
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validate()) {
			toast.error("Please fix the errors in the form before submitting.");
			return;
		}
		setSubmitting(true);
		try {
			const res = await submitContactForm(form);
			toast.success(res.message || "Enquiry submitted successfully!");
			setSubmitted(true);
			setForm({
				name: "",
				email: "",
				phone: "",
				company: "",
				message: ""
			});
			setErrors({});
		} catch (err) {
			toast.error(err.message || "Failed to submit enquiry. Please try again.");
		} finally {
			setSubmitting(false);
		}
	};
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
							children: "Contact Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 max-w-3xl text-5xl font-black sm:text-6xl",
							children: "Let's Discuss Your FIBC Requirements"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-lg leading-8 text-ink-muted",
							children: "Tell us about your packaging requirements and our team can help you find a suitable FIBC solution."
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
							children: "Get In Touch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "section-title",
							children: "We're Here to Help"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 max-w-xl leading-8 text-muted-foreground",
							children: "Whether you need standard FIBC bags, custom specifications or technical information, contact our team to discuss your requirements."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 space-y-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-11 shrink-0 place-items-center bg-primary-subtle",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5 text-primary" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold",
										children: "Phone"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: "+91 XXXXX XXXXX"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-11 shrink-0 place-items-center bg-primary-subtle",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5 text-primary" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: "info@example.com"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-11 shrink-0 place-items-center bg-primary-subtle",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5 text-primary" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold",
										children: "Location"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 max-w-sm text-sm leading-6 text-muted-foreground",
										children: "Gujarat, India"
									})] })]
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-border bg-soft p-7 sm:p-9",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-black",
								children: "Send an Enquiry"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Fill in your details and tell us what you need."
							}),
							submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 rounded-md border border-emerald-200 bg-emerald-50 p-6 text-center text-emerald-800",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto size-12 text-emerald-600" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-lg font-bold",
										children: "Enquiry Received!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-emerald-700",
										children: "Thank you for getting in touch. Our team has received your message and will contact you shortly."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										className: "mt-6",
										onClick: () => setSubmitted(false),
										children: "Send Another Message"
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSubmit,
								className: "mt-8 space-y-5",
								noValidate: true,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "mb-2 block text-sm font-semibold",
											children: ["Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-red-500",
												children: "*"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "name",
											value: form.name,
											onChange: handleChange,
											placeholder: "Your name",
											className: `h-12 w-full border bg-background px-4 text-sm outline-none transition focus:border-primary ${errors.name ? "border-red-500" : "border-border"}`
										}),
										errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-red-500",
											children: errors.name
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "mb-2 block text-sm font-semibold",
											children: ["Email ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-red-500",
												children: "*"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "email",
											name: "email",
											value: form.email,
											onChange: handleChange,
											placeholder: "Your email address",
											className: `h-12 w-full border bg-background px-4 text-sm outline-none transition focus:border-primary ${errors.email ? "border-red-500" : "border-border"}`
										}),
										errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-red-500",
											children: errors.email
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "mb-2 block text-sm font-semibold",
											children: ["Phone ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-red-500",
												children: "*"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "tel",
											name: "phone",
											value: form.phone,
											onChange: handleChange,
											maxLength: 10,
											placeholder: "10-digit phone number (e.g. 9876543210)",
											className: `h-12 w-full border bg-background px-4 text-sm outline-none transition focus:border-primary ${errors.phone ? "border-red-500" : "border-border"}`
										}),
										errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-red-500",
											children: errors.phone
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "mb-2 block text-sm font-semibold",
										children: "Company (Optional)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										name: "company",
										value: form.company,
										onChange: handleChange,
										placeholder: "Your company name",
										className: "h-12 w-full border border-border bg-background px-4 text-sm outline-none transition focus:border-primary"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "mb-2 block text-sm font-semibold",
											children: ["Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-red-500",
												children: "*"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											name: "message",
											value: form.message,
											onChange: handleChange,
											placeholder: "Tell us about your requirements...",
											rows: 5,
											className: `w-full resize-none border bg-background p-4 text-sm outline-none transition focus:border-primary ${errors.message ? "border-red-500" : "border-border"}`
										}),
										errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-red-500",
											children: errors.message
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										size: "lg",
										className: "w-full",
										disabled: submitting,
										children: submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 size-4 animate-spin" }), "Sending..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Send Enquiry", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {})] })
									})
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-primary-subtle py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-black sm:text-4xl",
						children: "Need a custom FIBC solution?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-2xl text-muted-foreground",
						children: "Share your specifications with us and let's discuss the right packaging solution for your application."
					})]
				})
			})
		]
	});
}
//#endregion
export { ContactPage as component };
