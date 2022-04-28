import "./style.css";

(function () {
    const hotspots = document.querySelectorAll(".Hotspot");

    hotspots.forEach((hotspot) => {
        hotspot.classList.add("hide");
    });

    document.querySelector("#modelViewer").addEventListener("load", () => {
        hotspots.forEach((hotspot) => {
            hotspot.classList.remove("hide");
        });
    });
})();

document.querySelectorAll("button.Hotspot").forEach((hotspot) => {
    hotspot.addEventListener("click", () => {
        const image = hotspot.getElementsByClassName("hotspot-image")[0];
        image.classList.toggle("hotspot-expanded");
        image.classList.toggle("hotspot-collapsed");
    });
});
