// Grid creation
function createGridDivs(num) {
    const masterContainer = document.querySelector("#masterContainer");

    for (let i = 0; i < (num * num); i++) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "grid");
        masterContainer.appendChild(newDiv);
    }
}

createGridDivs(16);