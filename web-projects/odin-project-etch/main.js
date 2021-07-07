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

  const squaresArray = Array.from(gridContainer.children);
  squaresArray.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      square.style.backgroundColor = "#000000";
    });
  });
}

makeGrid(16, 16);

const changeGridSizeButton = document.querySelector("#gridSize");
changeGridSizeButton.addEventListener("click", (event) => {
  do {
    var rows = prompt("Rows? (Limit: 100)");
    if (rows === null) return;
  } while (!parseInt(rows) || parseInt(rows) > 100);

  do {
    var cols = prompt("Columns? (Limit: 100)");
    if (cols === null) return;
  } while (!parseInt(cols) || parseInt(cols) > 100);

  gridReset();
  makeGrid(parseInt(rows), parseInt(cols));
});

const colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener("change", (event) => {
  const color = colorPicker.value;

  const squaresArray = Array.from(gridContainer.children);
  squaresArray.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      square.style.backgroundColor = color;
    });
  });
});
