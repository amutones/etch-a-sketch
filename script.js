const gridContainer = document.querySelector("#container");
const MAX_GRID_SIZE = 960;
const gridSize = 16; //starting test size
// const totalGrids = gridSize ** 2;
// console.log(totalGrids);
// const square = document.createElement("div");
// square.classList.add("square");
// gridContainer.appendChild(square);

createGrid(gridSize);

function createGrid(gridNum) {
    let squareSize = MAX_GRID_SIZE / gridNum;
    squareSize = squareSize - 4;
    let length = squareSize + "px"
    for (let index = 0; index < gridNum ** 2; index++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.height = length;
        console.log(length);
        square.style.width = length;
        square.addEventListener("mouseover", event => {
            event.target.style.backgroundColor = "darkgray";
        });
        gridContainer.appendChild(square);
        
    }
    
}

const button = document.querySelector("button");

button.addEventListener("click", event => {
    
    createGrid(16)
});


