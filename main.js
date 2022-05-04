import "./style.css";

(function () {
    const hotspots = document.querySelectorAll(".Hotspot");

    document.querySelector("#modelViewer").addEventListener("load", () => {
        hotspots.forEach((hotspot) => {
            hotspot.classList.remove("hide");
            document.getElementById("modelViewer").classList.remove("hide");
        });

        document.querySelector(".lds-ring").classList.add("hide");
        document.querySelector("#progress").classList.add("hide");
    });
})();

document.querySelectorAll("button.Hotspot").forEach((hotspot) => {
    hotspot.addEventListener("click", () => {
        const annotation =
            hotspot.getElementsByClassName("HotspotAnnotation")[0];
        annotation.classList.toggle("hotspot-expanded");
        annotation.classList.toggle("hotspot-collapsed");
    });
});
