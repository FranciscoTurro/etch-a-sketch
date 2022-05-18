const container = document.getElementById("container");
let cell;

function makeCell(cellNum) {
    for (let i=0;i<cellNum;i++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

function makeGrid(numRow,numCol) {
    container.style.setProperty('--numRows',numRow);
    container.style.setProperty('--numCols',numCol);
    for (let i=0;i<numRow;i++) {
        makeCell(numCol);
    }
}

container.addEventListener('mouseover',(e) => {
    if (e.target.matches("div.cell")) {
        changeColor(e.target);
    }
});

function changeColor(target) {
    target.style.backgroundColor = "black";
}

makeGrid(16,16);
