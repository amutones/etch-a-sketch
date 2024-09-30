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
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        let startingOpacity = 0.0;
        square.addEventListener("mouseover", event => {
            event.target.style.backgroundColor = "#" + randomColor;
            startingOpacity += 0.1;
            event.target.style.opacity = startingOpacity.toString();
        });
        gridContainer.appendChild(square);
        body.appendChild(gridContainer);
        
    }
    
}

const button = document.querySelector("button");

button.addEventListener("click", event => {
    
    let size = "";
    do {
        size = Number(prompt("How many squares per side?\n(Note that larger numbers may not load.)"));
        if (size === 0) {
            return;
        }
        if (Number.isNaN(size) || size < 0) {
            alert("Please enter a number greater than 0.");
        }
    } while (Number.isNaN(size) || size <= 0);
    
    if (size > 0) {
        removeGrid();
        createGrid(size);
    }   
});

function removeGrid() {
    while(gridContainer.lastElementChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}


