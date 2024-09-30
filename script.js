const body = document.querySelector("body");
const MAX_GRID_SIZE = 960;
const gridSize = 16; //starting test size
const gridContainer = document.createElement("div");
gridContainer.id = "container";

createGrid(gridSize);

function createGrid(gridNum) {

    
    let squareSize = MAX_GRID_SIZE / gridNum;
    squareSize = squareSize - 4;
    let length = squareSize + "px"
    for (let index = 0; index < gridNum ** 2; index++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.height = length;
        square.style.width = length;
        square.addEventListener("mouseover", event => {
            event.target.style.backgroundColor = "darkgray";
        });
        gridContainer.appendChild(square);
        body.appendChild(gridContainer);
        
    }
    
}

const button = document.querySelector("button");

button.addEventListener("click", event => {
    removeGrid();
    let size = Number(prompt("How many squares per side?"));

    
    createGrid(size);
});

function removeGrid() {
    while(gridContainer.lastElementChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}


