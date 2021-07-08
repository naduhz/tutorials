const calculatorDisplay = document.querySelector("#calculatorDisplay");
const allClearButton = document.querySelector("#allclear");
const clearButton = document.querySelector("#clear");
const plusMinusButton = document.querySelector("#plusminus");
const decimalButton = document.querySelector("#decimal");

const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");

const equalButton = document.querySelector("#equal");
const squareRootButton = document.querySelector("#squareroot");

var operatorMemory;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const squareroot = (a) => Math.sqrt(a);
const operate = (operator, array) => operator(array[0], array[1]);

allClearButton.addEventListener("click", (event) => {
  calculatorDisplay.textContent = 0;
});

clearButton.addEventListener("click", (event) => {
  function clear() {
    calculatorDisplay.textContent = calculatorDisplay.textContent.substring(
      0,
      calculatorDisplay.textContent.length - 1
    );
  }
  if (!parseInt(calculatorDisplay.textContent)) {
    calculatorDisplay.textContent = "0";
  }

  if (calculatorDisplay.textContent.length !== 1) {
    if (calculatorDisplay.textContent.length !== 2) {
      clear();
    } else {
      if (calculatorDisplay.textContent.charAt(0) !== "-") {
        clear();
      } else {
        calculatorDisplay.textContent = "-0";
      }
    }
  } else {
    if (calculatorDisplay.textContent !== "0") {
      calculatorDisplay.textContent = 0;
    }
  }
});

plusMinusButton.addEventListener("click", (event) => {
  if (calculatorDisplay.textContent.charAt(0) !== "-") {
    let tempArray = Array.from(calculatorDisplay.textContent);
    tempArray.unshift("-");
    calculatorDisplay.textContent = tempArray.join("");
  } else {
    let tempArray = Array.from(calculatorDisplay.textContent);
    tempArray.shift();
    calculatorDisplay.textContent = tempArray.join("");
  }
});

for (let i = 0; i < 10; i++) {
  const number = document.querySelector(`#num${i}`);
  number.addEventListener("click", (event) => {
    if (parseInt(calculatorDisplay.textContent) !== 0) {
      let tempArray = Array.from(calculatorDisplay.textContent);
      tempArray.push(i);
      calculatorDisplay.textContent = tempArray.join("");
    } else {
      if (calculatorDisplay.textContent.charAt(0) !== "-") {
        if (![...calculatorDisplay.textContent].includes(".")) {
          calculatorDisplay.textContent = i;
        } else {
          let tempArray = Array.from(calculatorDisplay.textContent);
          tempArray.push(i);
          calculatorDisplay.textContent = tempArray.join("");
        }
      } else {
        if (![...calculatorDisplay.textContent].includes(".")) {
          calculatorDisplay.textContent = `-${i}`;
        } else {
          let tempArray = Array.from(calculatorDisplay.textContent);
          tempArray.push(i);
          calculatorDisplay.textContent = tempArray.join("");
        }
      }
    }
  });
}

decimalButton.addEventListener("click", (event) => {
  if (![...calculatorDisplay.textContent].includes(".")) {
    let tempArray = Array.from(calculatorDisplay.textContent);
    tempArray.push(".");
    calculatorDisplay.textContent = tempArray.join("");
  }
});

squareRootButton.addEventListener("click", (event) => {
  if (parseFloat(calculatorDisplay.textContent) < 0) {
    calculatorDisplay.textContent = "ERROR";
  }

  calculatorDisplay.textContent = squareroot(
    parseInt(calculatorDisplay.textContent)
  )
    .toString()
    .substring(0, 13);
});
