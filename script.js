// Grid creation
function createGridDivs() {
    const masterContainer = document.querySelector("#masterContainer");

    for (let i = 0; i < 16; i++) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "grid");
        masterContainer.appendChild(newDiv);
    }
}

createGridDivs();