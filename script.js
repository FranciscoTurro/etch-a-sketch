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

let RandomEvent = false;

const randomPick = document.getElementById("random");
randomPick.addEventListener("click",()=> {
  RandomEvent = true;
})

container.addEventListener("mouseover", (e) => {
  if (RandomEvent == false) {
    if (e.target.matches("div.cell")) {
      changeColor(e.target);
    }
  }
  else if (RandomEvent == true) {
    if (e.target.matches("div.cell")) {
      changeColorRandom(e.target);
  }
}});

function changeColor(target) {
  target.style.backgroundColor = "black";
}

function changeColorRandom(target) {
  let RandomR = Math.floor(Math.random() * 256);
  let RandomG = Math.floor(Math.random() * 256);
  let RandomB = Math.floor(Math.random() * 256);
  target.style.backgroundColor = `rgb(${RandomR}, ${RandomG}, ${RandomB})`
}

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  document.location.reload();
});

const choose = document.getElementById("choose");
choose.addEventListener("click", () => {
  let n1 = prompt("First number");
  let n2 = prompt("Second number");
  container.innerHTML = "";
  makeGrid(n1, n2);
});

const backinblack = document.getElementById("black-color");
backinblack.addEventListener("click",()=> {
  RandomEvent = false;
})


makeGrid(16, 16);
