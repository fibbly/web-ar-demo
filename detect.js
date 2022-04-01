var ua = window.navigator.userAgent;
var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
var webkit = !!ua.match(/WebKit/i);
var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

document.title += ` - ${iOSSafari ? "Safari" : "Chrome"}`;

document.getElementById("brower-detect").innerHTML = `${navigator.userAgent} ${
    iOSSafari
        ? '<br /><span class="safari-detected">Safari Detected</span>'
        : '<br /><span class="safari-detected">Chrome Detected</span>'
}`;

const useQuickLook = () => {
    const a = document.createElement("a");
    a.rel = "ar";
    a.href = "https://modelviewer.dev/shared-assets/models/Astronaut.usdz";

    const img = document.createElement("img");
    img.src =
        "https://developers.google.com/ar/develop/webxr/images/model-viewer-screenshot.png";

    a.appendChild(img);

    document.getElementById("app").appendChild(a);

    a.click();
};

const useModelViewer = () => {
    const mv = document.createElement("model-viewer");
    mv.id = "viewer";
    mv.setAttribute(
        "src",
        "https://modelviewer.dev/shared-assets/models/Astronaut.glb"
    );
    mv.setAttribute(
        "ios-src",
        "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    );
    mv.setAttribute("alt", "A 3D model of an astronaut");
    mv.setAttribute("ar", "");
    mv.setAttribute("auto-rotate", "");
    mv.setAttribute("camera-controls", "");

    document.getElementById("app").appendChild(mv);

    const modern = document.createElement("script");
    modern.type = "module";
    modern.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.js";

    const legacy = document.createElement("script");
    legacy.type = "nomodule";
    legacy.src =
        "https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js";

    document.getElementsByTagName("body")[0].appendChild(modern);
    document.getElementsByTagName("body")[0].appendChild(legacy);
};

if (iOSSafari) {
    useQuickLook();
} else {
    useModelViewer();
}
