//import falconsCentralURL from "./assets/FalconCentralAR_testv004.glb";

const astronaut = "https://modelviewer.dev/shared-assets/models/Astronaut.glb";

let toggleModel = false;

const btn = document.getElementById("switch-model");

btn.onclick = () => {
    toggleModel = !toggleModel;
    btn.classList.toggle("falcon");
    btn.innerHTML = `${toggleModel ? "Astronaut" : "Falcons Central"}`;
    document
        .getElementById("viewer")
        .setAttribute(
            "src",
            `${toggleModel ? "/models/falcon.glb" : astronaut}`
        );
};
