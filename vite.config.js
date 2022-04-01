// vite.config.js
const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                chrome: resolve(__dirname, "pages/chrome.html"),
                safari: resolve(__dirname, "pages/safari.html"),
                detect: resolve(__dirname, "pages/detect.html"),
                gundam: resolve(__dirname, "pages/gundam.html"),
                model: resolve(__dirname, "assets/FalconsCentral.glb"),
                gundamBin: resolve(__dirname, "assets/gundam/scene.bin"),
                gundamScene: resolve(__dirname, "assets/gundam/scene.gltf"),
            },
        },
    },
    assetsInclude: ["**/*.glb", "**/*.gltf", "**/*.bin"],
});
