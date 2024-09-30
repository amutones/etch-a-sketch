const gridContainer = document.querySelector("#container");

const gridSize = 16;
const totalGrids = gridSize ** 2;
console.log(totalGrids);
// const square = document.createElement("div");
// square.classList.add("square");
// gridContainer.appendChild(square);

for (let index = 0; index < totalGrids; index++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "blue";
    });
    gridContainer.appendChild(square);
    
}


