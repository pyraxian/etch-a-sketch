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
    console.log(`Created a grid of size ${num} x ${num}.`);
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
const btn = document.querySelector('#newGridBtn');

btn.addEventListener("click", () => {
    let newGridSize = Math.floor(Number(prompt('Please provide an integer between 1 and 100 for a new grid size.')));
    if (newGridSize > 100) {
        alert('The number you entered exceeds the size limit of 100. \nPlease enter a smaller number.');
    } else if (newGridSize < 1) {
        alert('The number you entered is too small to construct a grid. \nPlease enter a larger number, greater than 0, but less than 100.');
    } else {
        const rows = document.querySelectorAll(".rowContainer");
        rows.forEach((row) => {
            row.remove();
        });
        createGridDivs(newGridSize);
    }
});