var root = document.getElementById("app");

/**
 * Root Element Config
 */
root.style.width = "100vw";
root.style.height = "100vh";
root.style.backgroundImage = "linear-gradient(to bottom, #f5f7fa 40%, #b8c6db)";

/**
 * QuickLook Config
 * (iOS Devices & Safari Browsers)
 */
var quickLookConfig = {
    model: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz",
    preview:
        "https://developers.google.com/ar/develop/webxr/images/model-viewer-screenshot.png",
};

/**
 * Model-Viewer Config
 * (Android Devices & Chrome Browers)
 */
var modelViewerConfig = {
    model: "/models/falcon15.glb",
    id: "modelViewer",
    alt: "A 3D model of an astronaut",
    ar: true,
    arModes: ["webxr", "scene-viewer", "quick-look"],
    autoRotate: true,
    cameraControls: true,
    xrEnvironment: false,
    shadowIntensity: "1",
    shadowSoftness: ".5",
    interactionPrompt: "none",
    fieldOfView: "45deg",
    minCameraOrbit: "auto auto 5%",
    interpolationDecay: "200",
    environmentImage: "",
};

/**
 * Use QuickLook Function
 */
function useQuickLook() {
    // set up model
    var a = document.createElement("a");
    a.rel = "ar";
    a.href = quickLookConfig.model;

    // set up model preview
    var img = document.createElement("img");
    img.src = quickLookConfig.preview;

    // render quicklook to DOM
    a.appendChild(img);
    root.appendChild(a);
}

/**
 * Use Model-Viewer Function
 */
function useModelViewer() {
    // load <model-viewer> for modern browsers
    var modern = document.createElement("script");
    modern.type = "module";
    modern.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.js";
    document.getElementsByTagName("body")[0].appendChild(modern);

    // load <model-viewer> for legacy browsers
    var legacy = document.createElement("script");
    legacy.type = "nomodule";
    legacy.src =
        "https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js";
    document.getElementsByTagName("body")[0].appendChild(legacy);

    // set up model-viewer
    var mv = document.createElement("model-viewer");

    mv.id = modelViewerConfig.id;
    mv.setAttribute("src", modelViewerConfig.model);
    mv.setAttribute("alt", modelViewerConfig.alt);
    mv.setAttribute("autoplay", "");
    mv.style.backgroundColor = "unset";
    mv.style.width = "100%";
    mv.style.height = "100%";

    if (modelViewerConfig.ar) {
        mv.setAttribute("ar", "");
    }
    if (modelViewerConfig.arModes) {
        mv.setAttribute("ar-modes", modelViewerConfig.arModes.join(" "));
    }
    if (modelViewerConfig.autoRotate) {
        mv.setAttribute("auto-rotate", "");
    }
    if (modelViewerConfig.cameraControls) {
        mv.setAttribute("camera-controls", "");
    }
    if (modelViewerConfig.xrEnvironment) {
        mv.setAttribute("xr-environment", "");
    }
    if (modelViewerConfig.shadowIntensity) {
        mv.setAttribute("shadow-intensity", modelViewerConfig.shadowIntensity);
    }
    if (modelViewerConfig.shadowSoftness) {
        mv.setAttribute("shadow-softness", modelViewerConfig.shadowSoftness);
    }
    if (modelViewerConfig.interactionPrompt) {
        mv.setAttribute(
            "interaction-prompt",
            modelViewerConfig.interactionPrompt
        );
    }
    if (modelViewerConfig.fieldOfView) {
        mv.setAttribute("field-of-view", modelViewerConfig.fieldOfView);
    }
    if (modelViewerConfig.minCameraOrbit) {
        mv.setAttribute("min-camera-orbit", modelViewerConfig.minCameraOrbit);
    }
    if (modelViewerConfig.environmentImage) {
        mv.setAttribute(
            "environment-image",
            modelViewerConfig.environmentImage
        );
    }
    if (modelViewerConfig.interpolationDecay) {
        mv.setAttribute(
            "interpolation-decay",
            modelViewerConfig.interpolationDecay
        );
    }

    // render model-viewer to DOM
    root.appendChild(mv);
}

function useHotspots() {}

/**
 * Main Function
 */
(function () {
    var ua = window.navigator.userAgent;
    var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    var webkit = !!ua.match(/WebKit/i);
    var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

    console.log(iOSSafari ? "Safari Detected" : "Chrome Detected");

    iOSSafari ? useQuickLook() : useModelViewer();
})();
