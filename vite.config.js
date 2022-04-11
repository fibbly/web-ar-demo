// vite.config.js
const { resolve } = require("path");
const { defineConfig } = require("vite");
const { VitePWA } = require("vite-plugin-pwa");

module.exports = defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				chrome: resolve(__dirname, "pages/chrome.html"),
				safari: resolve(__dirname, "pages/safari.html"),
				detect: resolve(__dirname, "pages/detect.html"),
				cat: resolve(__dirname, "pages/cat.html"),
				model: resolve(__dirname, "assets/FalconsCentral.glb"),
			},
		},
	},
	assetsInclude: ["**/*.glb", "**/*.gltf", "**/*.bin"],
	publicDir: "public",
	plugins: [
		VitePWA({
			includeAssets: [
				"favicon.svg",
				"favicon.ico",
				"robots.txt",
				"apple-touch-icon.png",
			],
			manifest: {
				name: "Name of your app",
				short_name: "Short name of your app",
				description: "Description of your app",
				theme_color: "#ffffff",
				icons: [
					{
						src: "pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
					{
						src: "pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any maskable",
					},
				],
			},
		}),
	],
});
