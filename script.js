// Grid creation
function createGridDivs(num) {
    const masterContainer = document.querySelector("#masterContainer");

    for (let i = 0; i < (num * num); i++) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "grid");
        newDiv.setAttribute('id', `box${i}`);
        masterContainer.appendChild(newDiv);
    }
}

createGridDivs(16);

// Mouseover listener
const masterContainer = document.querySelector("#masterContainer");

masterContainer.addEventListener('mouseover', (event) => {
    console.log(`Box ${event.target.id} was moused over`);
    event.target.style.background = 'blue';
});