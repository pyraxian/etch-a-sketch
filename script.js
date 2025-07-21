// Grid creation
function createGridDivs(num) {
    const masterContainer = document.querySelector("#masterContainer");

    for (let i = 0; i < num; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'rowContainer');
        for (let j = 0; j < num; j++) {
            const gridDiv = document.createElement('div');
            gridDiv.setAttribute('class', 'grid');
            rowDiv.appendChild(gridDiv);
        }
        masterContainer.appendChild(rowDiv);
    }

}

createGridDivs(20);

// Mouseover listener
const masterContainer = document.querySelector("#masterContainer");
masterContainer.addEventListener('mouseover', (event) => {
    // console.log(`${event.target.id} was moused over`);
    if ((event.target.id != 'masterContainer') && (event.target.class != 'rowContainer')) {
        event.target.style.background = 'blue';
    }
});

// Button event listener
const btn = document.querySelector('#newGrid');

btn.addEventListener("click", () => {
    let newGridSize = Math.floor(Number(prompt('Please provide an integer for a new grid size.')));
    // Delete old grid
    // Call createGridDivs(newGridSize);
});