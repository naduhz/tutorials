const gridContainer = document.querySelector("#gridContainer");
function gridReset() {
  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
}

function makeGrid(size) {
  gridContainer.style.setProperty("--grid-rows", size);
  gridContainer.style.setProperty("--grid-cols", size);

  for (let i = 1; i <= size * size; i++) {
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

makeGrid(16);

const blackButton = document.querySelector("#black");
const eraserButton = document.querySelector("#eraser");
const randomizeColorButton = document.querySelector("#randomizeColor");
const colorButton = document.querySelector("#colorButton");
const colorPicker = document.querySelector("#colorPicker");

blackButton.addEventListener("click", (event) => {
  const squaresArray = Array.from(gridContainer.children);
  squaresArray.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      square.style.backgroundColor = "#000000";
    });

    blackButton.className += " buttonPressed";
    eraserButton.className = "button";
    randomizeColorButton.className = "button";
    colorButton.className = "button";
  });
});

eraserButton.addEventListener("click", (event) => {
  const squaresArray = Array.from(gridContainer.children);
  squaresArray.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      square.style.backgroundColor = "silver";
    });

    eraserButton.className += " buttonPressed";
    blackButton.className = "button";
    randomizeColorButton.className = "button";
    colorButton.className = "button";
  });
});

randomizeColorButton.addEventListener("click", (event) => {
  const randomColorGenerator = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  const squaresArray = Array.from(gridContainer.children);
  squaresArray.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      square.style.backgroundColor = randomColorGenerator();
    });
  });

  randomizeColorButton.className += " buttonPressed";
  blackButton.className = "button";
  eraserButton.className = "button";
  colorButton.className = "button";
});

colorButton.addEventListener("click", (event) => {
  const color = colorPicker.value;

  const squaresArray = Array.from(gridContainer.children);
  squaresArray.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      square.style.backgroundColor = color;
    });
  });

  colorButton.className += " buttonPressed";
  blackButton.className = "button";
  eraserButton.className = "button";
  randomizeColorButton.className = "button";
});

colorPicker.addEventListener("input", (event) => {
  const color = colorPicker.value;

  const squaresArray = Array.from(gridContainer.children);
  squaresArray.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      square.style.backgroundColor = color;
    });
  });

  colorButton.className += " buttonPressed";
  blackButton.className = "button";
  eraserButton.className = "button";
  randomizeColorButton.className = "button";
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", (event) => {
  const squaresArray = Array.from(gridContainer.children);
  squaresArray.forEach((square) => {
    square.style.backgroundColor = "silver";
  });
});

const changeGridSizeSlider = document.querySelector("#gridSize");
changeGridSizeSlider.addEventListener("input", (event) => {
  const size = changeGridSizeSlider.value;
  gridReset();
  makeGrid(size);
});
