globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { i as toEventHandler, n as defineHandler, o as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-10-23T13:49:21.503Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-10-23T13:49:21.503Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/Navbar-ERP7RkVN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"139c-hhf4frmufhntFLNOLFn1XlU8yi0\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 5020,
		"path": "../public/assets/Navbar-ERP7RkVN.js"
	},
	"/assets/about-B-IHO_Iw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"150b-6Z2o2h0NOlJD0zZ2iDUuKr8nqtQ\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 5387,
		"path": "../public/assets/about-B-IHO_Iw.js"
	},
	"/assets/admin-B0AglWiK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"64f7-VxGjmJLjnA+eG8CGx3ZRzaeoT04\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 25847,
		"path": "../public/assets/admin-B0AglWiK.js"
	},
	"/assets/api-Dxv3xvL2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f9b-r0ZLfUQc9VR9yVLrkeMtdNiTXkA\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 3995,
		"path": "../public/assets/api-Dxv3xvL2.js"
	},
	"/assets/arrow-right-jBqRoAHZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-iu5mtQL/KlQzxPLJQ3NIUn0VMqQ\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 155,
		"path": "../public/assets/arrow-right-jBqRoAHZ.js"
	},
	"/assets/button-CSLWOGDc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8339-oB9c2dlTY5CB7KhHaV0TsTL9aj8\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 33593,
		"path": "../public/assets/button-CSLWOGDc.js"
	},
	"/assets/circle-check-CeSlKBVh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a8-Sw5n7weGaM+OlPITz0jL3Pno5yY\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 168,
		"path": "../public/assets/circle-check-CeSlKBVh.js"
	},
	"/assets/contact-Chxh5F0x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20c9-pRZLHasltwRmdCzWq14Ng0YF0W8\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 8393,
		"path": "../public/assets/contact-Chxh5F0x.js"
	},
	"/assets/factory-WDYl50r6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18d-KV3sB+n4WOsQrJbFjo8VQH/RlLY\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 397,
		"path": "../public/assets/factory-WDYl50r6.js"
	},
	"/assets/fibc-facility-DJ_nmQnD.jpg": {
		"type": "image/jpeg",
		"etag": "\"4ee19-Ywz5l1CBm2qdM4Lio9qjfDS8V8Y\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 323097,
		"path": "../public/assets/fibc-facility-DJ_nmQnD.jpg"
	},
	"/assets/fibc-facility-Dj-JPkYN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a-PBVVNi6TBw+bkFRp9+EKBrJlbnU\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 58,
		"path": "../public/assets/fibc-facility-Dj-JPkYN.js"
	},
	"/assets/fibc-hero-BCYknT38.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"165-+ByL7mI+F4pKtLFyKCHuOPmo7c4\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 357,
		"path": "../public/assets/fibc-hero-BCYknT38.js"
	},
	"/assets/fibc-hero-CqTUlUN1.jpg": {
		"type": "image/jpeg",
		"etag": "\"37c45-TQQnNYSo3PjM9b9oI+b5DX1xL2I\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 228421,
		"path": "../public/assets/fibc-hero-CqTUlUN1.jpg"
	},
	"/assets/funnel-0SWAaJ_o.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f6-I9Rj9btOH1o4LfQlOlEXsZOhWc0\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 246,
		"path": "../public/assets/funnel-0SWAaJ_o.js"
	},
	"/assets/gallery-DI2INr0U.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cc5-wvQWBkbFVNReV+QC5fbVhlTGABI\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 7365,
		"path": "../public/assets/gallery-DI2INr0U.js"
	},
	"/assets/image-DtAM0WHa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"103-P+7STQcaZd5nqfZC5jQR5p8+JIY\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 259,
		"path": "../public/assets/image-DtAM0WHa.js"
	},
	"/assets/index-BxIMYgX2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"653f7-FQ5uShGig0zYXIR4flfujAYDRG0\"",
		"mtime": "2026-10-23T13:49:20.189Z",
		"size": 414711,
		"path": "../public/assets/index-BxIMYgX2.js"
	},
	"/assets/infrastructure-D4J0ubJ8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e09-wvRkI5R7v/cGEGfYzrxUBNuW0xQ\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 7689,
		"path": "../public/assets/infrastructure-D4J0ubJ8.js"
	},
	"/assets/package-check-CIZP_RQ9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a0-qAZhiZipt3AHa2MTpQXxeFgCZEk\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 416,
		"path": "../public/assets/package-check-CIZP_RQ9.js"
	},
	"/assets/products-D2gyDaH9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f64-ww2x/CRCvouwi5nVgC6kHyG1gOc\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 16228,
		"path": "../public/assets/products-D2gyDaH9.js"
	},
	"/assets/quality-BklJe-4z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"176d-etIZpsKPQ8EmpD9fDjXAbOIBFME\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 5997,
		"path": "../public/assets/quality-BklJe-4z.js"
	},
	"/assets/routes-5lAbFAdA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e8b-NOgX5bBr0X6d9MbgfJyUwn16dK8\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 11915,
		"path": "../public/assets/routes-5lAbFAdA.js"
	},
	"/assets/styles-DtIkZ_LJ.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14eab-d0s9DYaWEdNIWoMJSxchtY42ZmE\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 85675,
		"path": "../public/assets/styles-DtIkZ_LJ.css"
	},
	"/assets/truck-DWKAW8hU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18c-YeUNKv5TrjJc+omGoIpWjEJFhYQ\"",
		"mtime": "2026-10-23T13:49:20.193Z",
		"size": 396,
		"path": "../public/assets/truck-DWKAW8hU.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_s2CYY8 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_s2CYY8
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
// Hostinger integration: export the Nitro fetch handler instead of opening
// a second listening socket. The main Express server owns the public port.
var node_server_default = { fetch: nitroApp.fetch };
//#endregion
export { node_server_default as default, nitroApp };
