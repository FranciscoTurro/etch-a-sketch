const container = document.getElementById("container");
let cell;

function makeCell(cellNum) {
  for (let i = 0; i < cellNum; i++) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
  }
}

function makeGrid(numRow, numCol) {
  container.style.setProperty("--numRows", numRow);
  container.style.setProperty("--numCols", numCol);
  for (let i = 0; i < numRow; i++) {
    makeCell(numCol);
  }
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

container.addEventListener("mouseover", (e) => {
  if (e.target.matches("div.cell") && mouseDown) {
    changeColor(e.target);
  }
});

function changeColor(target) {
  target.style.backgroundColor = "black";
}

const clear = document.getElementById("clear");
clear.addEventListener('click',() => {
  document.location.reload();
});


makeGrid(16, 16);

