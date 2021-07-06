const gridContainer = document.querySelector("#gridContainer");
function gridReset() {
  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
}

function makeGrid(rows, cols) {
  gridContainer.style.setProperty("--grid-rows", rows);
  gridContainer.style.setProperty("--grid-cols", cols);

  for (let i = 1; i <= rows * cols; i++) {
    const square = document.createElement("div");
    gridContainer.appendChild(square).className = "square";
  }
}

makeGrid(16, 16);

const changeGridSizeButton = document.querySelector("#gridSize");
changeGridSizeButton.addEventListener("click", (event) => {
  const rows = prompt("Rows? (Limit: 100)");
  const cols = prompt("Columns? (Limit: 100)");

  gridReset();
  makeGrid(rows, cols);
});
