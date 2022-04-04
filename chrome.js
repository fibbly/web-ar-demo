import falconsCentralURL from "./assets/FalconCentralAR_testv004.glb";

const astronaut = "https://modelviewer.dev/shared-assets/models/Astronaut.glb";

let toggleModel = false;

const btn = document.getElementById("switch-model");

btn.onclick = () => {
    toggleModel = !toggleModel;
    btn.classList.toggle("falcon");
    btn.innerHTML = `${toggleModel ? "Astronaut" : "Falcons Central"}`;
    document
        .getElementById("viewer")
        .setAttribute("src", `${toggleModel ? falconsCentralURL : astronaut}`);
};

const modelViewerTransform = document.querySelector("model-viewer#transform");
const roll = document.querySelector("#roll");
const pitch = document.querySelector("#pitch");
const yaw = document.querySelector("#yaw");
const x = document.querySelector("#x");
const y = document.querySelector("#y");
const z = document.querySelector("#z");
const frame = document.querySelector("#frame");

frame.addEventListener("click", () => {
    modelViewerTransform.updateFraming();
});

const updateOrientation = () => {
    modelViewerTransform.orientation = `${roll.value}deg ${pitch.value}deg ${yaw.value}deg`;
};

const updateScale = () => {
    modelViewerTransform.scale = `${x.value} ${y.value} ${z.value}`;
};

roll.addEventListener("input", () => {
    updateOrientation();
});
pitch.addEventListener("input", () => {
    updateOrientation();
});
yaw.addEventListener("input", () => {
    updateOrientation();
});
x.addEventListener("input", () => {
    updateScale();
});
y.addEventListener("input", () => {
    updateScale();
});
z.addEventListener("input", () => {
    updateScale();
});
