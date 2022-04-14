const astronautURL =
    "https://modelviewer.dev/shared-assets/models/Astronaut.glb";
const falconCentralURL = "/models/falcon06.glb";
const modelViewer = document.querySelector("#modelViewer");
const switchModelBtn = document.getElementById("switch-model");
let isFalconsCentral = false;

switchModelBtn.onclick = () => {
    isFalconsCentral = !isFalconsCentral;

    switchModelBtn.classList.toggle("falcon");

    switchModelBtn.innerHTML = `${
        isFalconsCentral ? "Astronaut" : "Falcons Central"
    }`;

    document.querySelector(".hotspot-1").style.display = isFalconsCentral
        ? "none"
        : "display";

    modelViewer.setAttribute(
        "src",
        `${isFalconsCentral ? falconCentralURL : astronautURL}`
    );
};

const annotationClicked = (annotation) => {
    let dataset = annotation.dataset;

    const defaultTarget = modelViewer.cameraTarget,
        defaultOrbit = modelViewer.cameraOrbit,
        defaultFOV = modelViewer.fieldOfView;

    modelViewer.cameraTarget = dataset.target;
    modelViewer.cameraOrbit = dataset.orbit;
    modelViewer.fieldOfView = dataset.fov;

    document.querySelector(".hand").style.display = "block";
    document.querySelector(".hand-info").style.display = "block";

    generateOverlay(defaultTarget, defaultOrbit, defaultFOV);
};

modelViewer.querySelectorAll("button").forEach((hotspot) => {
    hotspot.addEventListener("click", () => annotationClicked(hotspot));
});

function generateOverlay(defaultTarget, defaultOrbit, defaultFOV) {
    if (document.getElementById("overlay")) return;

    const overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.style.position = "absolute";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    // overlay.style.backgroundColor = "red";

    overlay.onclick = () => {
        console.log("overlay clicked");

        document.querySelector(".hand").style.display = "none";
        document.querySelector(".hand-info").style.display = "none";

        modelViewer.cameraTarget = defaultTarget;
        modelViewer.cameraOrbit = defaultOrbit;
        modelViewer.fieldOfView = defaultFOV;

        overlay.remove();
    };

    modelViewer.appendChild(overlay);
}
