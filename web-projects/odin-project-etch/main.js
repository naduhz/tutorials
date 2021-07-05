const gridContainer = document.querySelector("#gridContainer");
gridContainer.setAttribute("style", "");

for (let i = 0; i <= 3; i++) {
  const row = document.createElement("div");
  row.setAttribute("class", "rowContainer");
  row.setAttribute("id", `rowContainer${i}`);
  gridContainer.appendChild(row);
}

for (let row = 0; row <= 3; row++) {
  const rowContainer = document.querySelector(`#rowContainer${row}`);
  for (let column = 0; column <= 3; column++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute("id", `square${row}${column}`);
    rowContainer.appendChild(square);
  }
}
