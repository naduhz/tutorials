const gridContainer = document.querySelector("#gridContainer");
function gridReset() {
  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
}

for (let i = 0; i <= 16; i++) {
  const row = document.createElement("div");
  row.setAttribute("class", "rowContainer");
  row.setAttribute("id", `rowContainer${i}`);
  gridContainer.appendChild(row);
}

for (let row = 0; row <= 16; row++) {
  const rowContainer = document.querySelector(`#rowContainer${row}`);
  for (let column = 0; column <= 16; column++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute("id", `square${row}${column}`);
    rowContainer.appendChild(square);
  }
}

const changeGridSizeButton = document.querySelector("#gridSize");
changeGridSizeButton.addEventListener("click", (event) => {
  const rows = prompt("Rows? (Limit: 100)");
  const columns = prompt("Columns? (Limit: 100)");

  gridReset();

  for (let row = 0; row <= Number(rows) - 1; row++) {
    const rowContainer = document.createElement("div");
    rowContainer.setAttribute("class", "rowContainer");
    rowContainer.setAttribute("id", `rowContainer${row}`);
    gridContainer.appendChild(rowContainer);
  }

  for (let row = 0; row <= Number(rows) - 1; row++) {
    const rowContainer = document.querySelector(`#rowContainer${row}`);
    for (let column = 0; column <= Number(columns) - 1; column++) {
      const square = document.createElement("div");
      square.setAttribute("class", "square");
      square.setAttribute("id", `square${row}${column}`);
      rowContainer.appendChild(square);
    }
  }
});
